import { useState, useEffect } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('');
    setLoading(true);

    const response = await fetch('/api/sendMailContact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    if (response.ok) {
      setStatus('Email enviado com sucesso!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('Falha ao enviar o email.');
    }
    setLoading(false);
  };

  useEffect(() => {
    if (loading) {
      setStatus('');
    }
  }, [loading]);

  return (
    <section id="contact" className="py-20 bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Entre em Contato</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
            <div className="space-y-4">
              <p className="flex items-center hover:underline" onClick={() => window.open('https://maps.app.goo.gl/HmhzJxvBcQoQKvMA9', '_blank')} style={{ cursor: 'pointer' }}>
                <span className="mr-2">📍</span>
                Endereço: Rua Dorvalina Pereira, 30, Araquari/SC
              </p>
              <p className="flex items-center hover:underline" onClick={() => window.open('https://api.whatsapp.com/send/?phone=5547997137923&text=Ol%C3%A1%2C+vim+pelo+Site+e+gostaria+de+um+or%C3%A7amento.', '_blank')} style={{ cursor: 'pointer' }}>
                <span className="mr-2">📞</span>
                Telefone: 47 99713-7923
              </p>
              <p className="flex items-center hover:underline" onClick={() => window.open('mailto:contato@metalmartinsgalpoes.com.br', '_blank')} style={{ cursor: 'pointer' }}>
                <span className="mr-2">✉️</span>
                Email: contato@metalmartinsgalpoes.com.br
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <textarea
                placeholder="Mensagem"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
            {status && <p className="mt-2 text-center">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
