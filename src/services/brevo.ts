import axios from 'axios';

export class BrevoEmailService {
  private readonly apiUrl: string = 'https://api.brevo.com/v3/smtp/email';

  constructor(private apiKey: string) {}

  /**
   * Envia um e-mail via API da Brevo
   * @param senderName - Nome do remetente
   * @param senderEmail - E-mail do remetente
   * @param toEmail - E-mail do destinatário
   * @param toName - Nome do destinatário
   * @param subject - Assunto do e-mail
   * @param htmlContent - Conteúdo do e-mail em HTML
   */
  async sendEmail(
    senderName: string,
    senderEmail: string,
    toEmail: string,
    toName: string,
    subject: string,
    htmlContent: string
  ): Promise<void> {
    const payload = {
      sender: {
        name: senderName,
        email: senderEmail,
      },
      to: [
        {
          email: toEmail,
          name: toName,
        },
      ],
      subject,
      htmlContent,
    };

    try {
      const response = await axios.post(this.apiUrl, payload, {
        headers: {
          'accept': 'application/json',
          'api-key': this.apiKey,
          'content-type': 'application/json',
        },
      });
      console.log('E-mail enviado com sucesso:', response.data);
    } catch (error) {
      const err = error as any;
      console.error('Erro ao enviar o e-mail:', err.response?.data || err.message);
      throw error;
    }
  }
}
