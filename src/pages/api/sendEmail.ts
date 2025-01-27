// pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface EmailData {
  name: string;
  email: string;
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message }: EmailData = req.body;

    // Configuração do transportador do Nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Ou outro serviço de e-mail
      auth: {
        user: 'eduardo.h.pollheim@gmail.com', // Seu email
        pass: 'iynf qvcu rqwe ecay', // Sua senha ou senha de aplicativo
      },
    });

    const mailOptions = {
      from: email,
      to: 'eduardo.pollheim@icloud.com', // Para onde o email será enviado
      subject: `Mensagem de ${name}`,
      text: message,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email enviado com sucesso!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Falha ao enviar o email.' });
    }
  } else if (req.method === 'GET') {
    // Endpoint de teste para verificação
    res.status(200).json({ message: 'Este é um endpoint GET para testes.' });
  } else {
    // Se não for uma requisição POST ou GET, retorna um erro 405
    res.setHeader('Allow', ['POST', 'GET']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
