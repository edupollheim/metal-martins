import Image from "next/image";

export default function Works() {
  const works = [
    {
      "title": "Galpão Pré-Moldado",
      "description": "600m² com 9m de altura, cobertura metálica.",
      "local": "Araquari/SC",
      "image": "/Fotos/Araquari-SC/Araquari (2).webp",
      "link": "Araquari-SC"
    },
    {
      "title": "Galpão Industrial",
      "description": "Área de 2.400m².",
      "local": "Joinville/SC",
      "image": "/Fotos/Joinville-SC/Joinville (2).webp",
      "link": "Joinville-SC"
    },
    {
      "title": "Galpão com Estrutura para Ponte Rolante",
      "description": "875m², vão livre de 25m, suporte para 18 mil kg.",
      "local": "São Francisco do Sul/SC",
      "image": "/Fotos/Sao-Francisco-do-Sul-SC/SFS (3).webp",
      "link": "Sao-Francisco-do-Sul-SC"
    },
    {
      "title": "Galpão Misto",
      "description": "Pé direito de 10m, treliça com vão livre de 32m.",
      "local": "São Francisco do Sul/SC",
      "image": "/Fotos/Sao-Francisco-do-Sul-SC/SFS (2).webp",
      "link": "Sao-Francisco-do-Sul-SC"
    },
    {
      "title": "Galpão Metálico",
      "description": "8.100m², 12m de altura.",
      "local": "Miritituba/PA",
      "image": "/Fotos/Miritituba-PA/Pará (3).webp",
      "link": "Miritituba-PA"
    }
  ];
  return (
    <section id="obras" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Nossas Obras</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-xl cursor-pointer" onClick={() => window.location.href = "/view/" + work.link}>
              <Image
                src={work.image}
                alt={work.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold">{work.title}</h3>
                  <p className="text-sm">📍{work.local}</p>
                  <p>{work.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}