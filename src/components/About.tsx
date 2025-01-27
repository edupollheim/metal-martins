import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Quem Somos</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="https://placehold.co/600x400"
              alt="Sobre a Metal Martins"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
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
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">500+</h3>
                <p className="text-gray-600">Projetos Realizados</p>
              </div>
              <div className="text-center p-4 bg-slate-50 rounded-lg">
                <h3 className="text-3xl font-bold text-blue-600 mb-2">100%</h3>
                <p className="text-gray-600">Clientes Satisfeitos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  }
  