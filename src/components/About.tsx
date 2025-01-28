import Image from 'next/image';

export default function About() {
  const projectsCompleted = 500;
  const satisfiedClients = 100;

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Quem Somos</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/Fotos/Estrtutura.jpeg"
              alt="Sobre a Metal Martins"
              layout="fill"
              objectFit="cover"
              quality={100}
              className="rounded-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-700 mb-6">
              A Metal Martins é uma empresa especializada em construções metálicas,
              com mais de [X] anos de experiência no mercado. Nossa missão é fornecer
              soluções estruturais de alta qualidade, combinando inovação, segurança
              e eficiência em cada projeto.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Nosso compromisso com a excelência e a satisfação do cliente nos tornou
              referência no setor de estruturas metálicas e galpões pré-moldados.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-slate-50 rounded-lg shadow-sm">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">{projectsCompleted}+</h3>
                <p className="text-gray-600">Projetos Realizados</p>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg shadow-sm">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">{satisfiedClients}%</h3>
                <p className="text-gray-600">Clientes Satisfeitos</p>
              </div>
            </div>
            {/* <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
              Saiba Mais
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}