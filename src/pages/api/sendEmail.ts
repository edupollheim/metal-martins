import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { IncomingForm, File as FormidableFile, Fields, Files } from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false, // Desativa o bodyParser padrão para usar o formidable
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const form = new IncomingForm();
  
  form.parse(req, async (err: any, fields: Fields, files: Files) => {
    if (err) {
      console.error('Erro ao processar o formulário:', err);
      return res.status(500).json({ message: 'Erro ao processar o formulário' });
    }

    console.log("Arquivos recebidos:", files);

    // Tipando os campos esperados
    const { name, email, phone, message } = fields as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
    };

    // Trata o campo "resume" que pode ser um array ou um único arquivo
    const resumeFile = Array.isArray(files.resume)
      ? files.resume[0]
      : files.resume;

    if (!name || !email || !phone || !message || !resumeFile) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    console.log("Arquivo selecionado:", resumeFile);

    try {
      if (!(resumeFile as FormidableFile).filepath) {
        throw new Error("O caminho do arquivo está indefinido.");
      }

      const file = resumeFile as FormidableFile;
      const fileData = fs.readFileSync(file.filepath);

      const response = await axios.post(
        'https://api.brevo.com/v3/smtp/email',
        {
          sender: {
            name: 'Metal Martins',
            email: 'eduardo.h.pollheim@gmail.com',
          },
          to: [
            {
              email: 'contato@metalmartinsgalpoes.com.br',
            },
          ],
          subject: 'Nova Candidatura - Metal Martins',
          htmlContent: `
            <h1>Nova Candidatura Recebida</h1>
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Telefone:</strong> ${phone}</p>
            <p><strong>Mensagem:</strong> ${message}</p>
            <p><strong>Currículo:</strong> Anexo</p>
          `,
          attachment: [
            {
              content: fileData.toString('base64'),
              name: file.originalFilename || 'curriculo.pdf',
            },
          ],
        },
        {
          headers: {
            accept: 'application/json',
            'api-key': process.env.BREVO_API_KEY,
            'content-type': 'application/json',
          },
        }
      );

      fs.unlinkSync(file.filepath);
      return res.status(200).json({ message: 'Candidatura enviada com sucesso!', data: response.data });
    } catch (error: any) {
      console.error('Erro ao enviar e-mail:', error.response?.data || error.message);
      return res.status(error.response?.status || 500).json({
        message: 'Erro ao enviar candidatura',
        error: error.response?.data || error.message,
      });
    }
  });
}