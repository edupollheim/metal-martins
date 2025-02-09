import Image from "next/image";

export default function Works() {
  const works = [
    {
      title: "Projeto 1",
      description: "Galpão Industrial",
      image: "/Fotos/Projeto1.jpeg"
    },
    {
      title: "Projeto 2",
      description: "Estrutura Metálica",
      image: "/Fotos/Projeto2.jpeg"
    },
    {
      title: "Projeto 3",
      description: "Cobertura",
      image: "/Fotos/Projeto6.jpg"
    }
  ];
  return (
    <section id="obras" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Nossas Obras</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-xl">
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