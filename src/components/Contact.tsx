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

    const response = await fetch('/api/sendEmail', {
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
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Entre em Contato</h2>
        <p className="mt-4 text-gray-600">
          Ficaremos felizes em ajudar! Preencha o formulário abaixo.
        </p>
        <form className="mt-8 max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Seu Nome"
            className={`w-full p-3 border border-gray-300 rounded-md ${loading ? 'opacity-50 cursor-wait' : ''}`}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Seu Email"
            className={`w-full p-3 border border-gray-300 rounded-md ${loading ? 'opacity-50 cursor-wait' : ''}`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Sua Mensagem"
            className={`w-full p-3 border border-gray-300 rounded-md ${loading ? 'opacity-50 cursor-wait' : ''}`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className={`w-full p-3 bg-blue-500 text-white rounded-md ${loading ? 'opacity-50 cursor-wait' : ''}`}
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
        {status && <p className="mt-4 text-gray-600">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;