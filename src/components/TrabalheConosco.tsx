import { useState } from 'react';

export default function Careers() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="trabalhe-conosco" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Trabalhe Conosco</h2>
        <div className="max-w-3xl mx-auto">
          {!isExpanded ? (
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Junte-se à Nossa Equipe</h3>
              <p className="text-lg text-gray-700 mb-6">
                Estamos sempre em busca de talentos para fazer parte da nossa equipe. 
                Se você é apaixonado por construção e inovação, venha fazer parte da 
                Metal Martins.
              </p>
              <button
                onClick={() => setIsExpanded(true)}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Quero me Candidatar
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-900">Candidate-se</h3>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-gray-500 hover:text-gray-700 hover:bg-gray-200 px-2 py-1 rounded-lg transition-colors"
                >
                  Fechar
                </button>
              </div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo*
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      E-mail*
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone*
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Currículo (PDF)*
                  </label>
                  <input
                    type="file"
                    accept=".pdf"
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    Aceito apenas arquivos em formato PDF até 5MB
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Por que deseja trabalhar na Metal Martins?*
                  </label>
                  <textarea
                    required
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <p className="ml-2 text-sm text-gray-500">
                    Concordo com o tratamento dos meus dados pessoais conforme a LGPD.*
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Enviar Candidatura
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}