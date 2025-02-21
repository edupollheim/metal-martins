// pages/api/sendEmail.js
import axios from 'axios';
import { IncomingForm } from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false, // Desativa o bodyParser padrão para usar o formidable
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const form = new IncomingForm();
  
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Erro ao processar o formulário:', err);
      return res.status(500).json({ message: 'Erro ao processar o formulário' });
    }

    console.log("Arquivos recebidos:", files);

    const { name, email, phone, message } = fields;
    const file = files.resume?.[0] || files.resume; // Garante compatibilidade

    if (!name || !email || !phone || !message || !file) {
      return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
    }

    console.log("Arquivo selecionado:", file);

    try {
      // Verifica se o arquivo possui um caminho válido
      if (!file.filepath) {
        throw new Error("O caminho do arquivo está indefinido.");
      }

      // Ler o arquivo de currículo
      const fileData = fs.readFileSync(file.filepath);

      // Enviar e-mail via API do Brevo
      const response = await axios.post(
        'https://api.brevo.com/v3/smtp/email',
        {
          sender: {
            name: 'Metal Martins',
            email: 'eduardo.h.pollheim@gmail.com', // Substitua pelo e-mail da empresa
          },
          to: [
            {
              email: 'eduardo.pollheim@gmail.com', // E-mail de destino
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
              content: fileData.toString('base64'), // Converte o arquivo para base64
              name: file.originalFilename || 'curriculo.pdf', // Nome do arquivo
            },
          ],
        },
        {
          headers: {
            'accept': 'application/json',
            'api-key': process.env.BREVO_API_KEY,
            'content-type': 'application/json',
          },
        }
      );

      // Excluir o arquivo temporário após o envio
      fs.unlinkSync(file.filepath);

      return res.status(200).json({ message: 'Candidatura enviada com sucesso!', data: response.data });
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error.response?.data || error.message);
      return res.status(error.response?.status || 500).json({
        message: 'Erro ao enviar candidatura',
        error: error.response?.data || error.message,
      });
    }
  });
}
