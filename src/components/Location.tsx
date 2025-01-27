export default function Location() {
    // URL para abrir a localização diretamente no Google Maps
    const mapsUrl = "https://www.google.com/maps?q=-26.416784023231003,-48.769039114776305";

    return (
        <section id="location" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Onde Estamos</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                        {/* Mapa do Google Maps */}
                        <iframe
                            title="Localização no Google Maps"
                            width="600"
                            height="450"
                            loading="lazy"
                            allowFullScreen={true}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.123456789012!2d-48.769039114776305!3d-26.416784023231003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDI1JzAwLjQiUyA0OMKwNDYnMDguNSJX!5e0!3m2!1sen!2sbr!4v1625061234567!5m2!1sen!2sbr"
                            aria-label="Localização no Google Maps"
                        ></iframe>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-slate-900">Nossa Localização</h3>
                        <p className="text-gray-700 mb-6">
                            Estamos estrategicamente localizados para melhor atender nossos clientes
                            em toda a região. Venha nos visitar e conheça nossa estrutura.
                        </p>
                        <address className="not-italic">
                            <div className="space-y-4">
                                <p className="flex items-center text-gray-700">
                                    <span className="mr-2">🏢</span>
                                    R. Dorvalino Pereira, n° 30 - Itinga, Araquari - SC, 89245-000
                                </p>
                                <p className="flex items-center text-gray-700">
                                    <span className="mr-2">🕒</span>
                                    Horário de Funcionamento: Seg-Sex, 8h às 18h
                                </p>
                            </div>
                        </address>
                        {/* Botão para abrir no Google Maps */}
                        <a
                            href={mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
                        >
                            <span className="mr-2">📍</span>
                            Abrir no Google Maps
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}