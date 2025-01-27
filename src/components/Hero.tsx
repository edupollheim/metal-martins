export default function Hero() {
    return (
      <section
        className="flex items-center justify-center h-screen bg-cover bg-center text-white"
        style={{
          backgroundImage: 'url(https://placehold.co/600x400/000000/3C3C3C/svg)', // Substitua "minha-foto.jpg" pelo nome da sua imagem
        }}
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold">Metal Martins</h1>
          <p className="mt-4 text-lg">
            Referência em Galpões Pré-moldados e Estruturas Metálicas para seu comércio, residência ou indústria
          </p>
          <a
            href="#about"
            className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 scroll-smooth"
          >
            Saiba Mais
          </a>
        </div>
      </section>
    );
  }
  