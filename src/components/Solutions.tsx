export default function Solutions() {
    const solutions = [
      {
        title: "Galpões Industriais",
        description: "Estruturas robustas e versáteis para seu negócio",
        icon: "🏭"
      },
      {
        title: "Estruturas Metálicas",
        description: "Soluções personalizadas para cada necessidade",
        icon: "🏗️"
      },
      {
        title: "Coberturas",
        description: "Proteção e durabilidade para sua construção",
        icon: "🏢"
      },
      {
        title: "Mezaninos",
        description: "Aproveitamento eficiente de espaço vertical",
        icon: "⚡"
      }
    ];
  
    return (
      <section id="solutions" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Nossas Soluções</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }