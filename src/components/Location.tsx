export default function Location() {
    return (
        <section id="location" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Onde Estamos</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="aspect-video rounded-lg overflow-hidden">
                        {/* Replace with your Google Maps embed code */}
                        <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                            <p className="text-slate-600">Mapa será carregado aqui</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">Nossa Localização</h3>
                        <p className="text-gray-700 mb-6">
                            Estamos estrategicamente localizados para melhor atender nossos clientes
                            em toda a região. Venha nos visitar e conheça nossa estrutura.
                        </p>
                        <div className="space-y-4">
                            <p className="flex items-center text-gray-700">
                                <span className="mr-2">🏢</span>
                                [Nome do Bairro/Cidade]
                            </p>
                            <p className="flex items-center text-gray-700">
                                <span className="mr-2">🕒</span>
                                Horário de Funcionamento: Seg-Sex, 8h às 18h
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}