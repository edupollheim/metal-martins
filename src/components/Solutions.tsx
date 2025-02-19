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
      },
      {
        title: "Pré-Moldados",
        description: "Rapidez e qualidade na construção de galpões",
        icon: "🏗️"
      }
    ];
  
    return (
      <section id="solutions" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Nossas Soluções</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {solutions
                .slice() // Garante que o array original não seja modificado
                .sort((a, b) => a.title.localeCompare(b.title)) // Ordena alfabeticamente pelo título
                .map((solution, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow" 
                    onClick={() => window.open(
                      `https://api.whatsapp.com/send/?phone=5547997137923&text=${encodeURIComponent(
                        `Olá! Vi seu contato no site e gostaria de solicitar um orçamento para ${(solution.title.toLowerCase())}. Pode me ajudar?`
                      )}.`, 
                      '_blank'
                    )} 
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="text-4xl mb-4">{solution.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900">{solution.title}</h3>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                ))
              }
          </div>
        </div>
      </section>
    );
  }