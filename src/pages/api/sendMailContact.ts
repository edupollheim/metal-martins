import type { NextApiRequest, NextApiResponse } from 'next';
import axios, { AxiosError } from 'axios';

interface EmailResponse {
  message: string;
  data?: any;
  error?: any;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<EmailResponse>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios' });
  }

  try {
    const response = await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: {
          name: 'Metal Martins',
          email: 'eduardo.h.pollheim@gmail.com', // E-mail remetente
        },
        to: [
          {
            email: 'eduardo.pollheim@icloud.com', // E-mail de destino
          },
        ],
        subject: 'Novo Contato via Site',
        htmlContent: `
          <h1>Nova Mensagem Recebida</h1>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Mensagem:</strong> ${message}</p>
        `,
      },
      {
        headers: {
          accept: 'application/json',
          'api-key': process.env.BREVO_API_KEY as string,
          'content-type': 'application/json',
        },
      }
    );

    return res
      .status(200)
      .json({ message: 'E-mail enviado com sucesso!', data: response.data });
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(
      'Erro ao enviar e-mail:',
      axiosError.response?.data || axiosError.message
    );
    return res.status(axiosError.response?.status || 500).json({
      message: 'Erro ao enviar e-mail',
      error: axiosError.response?.data || axiosError.message,
    });
  }
}