import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface PageProps {
  params: {
    cidade: string;
  };
}

export default function CidadePage({ params }: PageProps) {
  const { cidade } = params;

  // Busca os arquivos da pasta da cidade
  const pastaCidade = path.join(process.cwd(), "public", "Fotos", cidade);
  let arquivos: string[] = [];

  try {
    // Verifica se a pasta existe
    if (!fs.existsSync(pastaCidade)) {
      return notFound(); // Retorna 404 se a pasta não existir
    }

    // Lê os arquivos da pasta
    arquivos = fs.readdirSync(pastaCidade);

    // Filtra apenas arquivos de imagem e vídeo
    arquivos = arquivos.filter((arquivo) =>
      /\.(jpg|jpeg|png|mp4|webm|webp)$/i.test(arquivo)
    );

    // Se não houver arquivos válidos, retorna 404
    if (arquivos.length === 0) {
      return notFound();
    }
  } catch (error) {
    console.error("Erro ao ler a pasta:", error);
    return notFound();
  }

  return (
    <div className="p-4 max-w-full mx-auto">
      <h1 className="text-3xl font-extrabold text-center capitalize mb-8">
        {decodeURIComponent(cidade)}
      </h1>

      {/* Carrossel de Imagens e Vídeos */}
      <Carousel className="w-full max-w-6xl mx-auto" opts={{ loop: true }}>
        <CarouselContent>
          {arquivos.map((src, index) => (
            <CarouselItem key={index} className="relative aspect-video">
              {src.endsWith(".mp4") || src.endsWith(".webm") ? (
                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <video
                    controls
                    className="w-full h-full object-cover"
                    preload="none"
                  >
                    <source
                      src={`/Fotos/${cidade}/${src}`}
                      type={`video/${src.split(".").pop()}`}
                    />
                    Seu navegador não suporta vídeos HTML5.
                  </video>
                </div>
              ) : (
                <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src={`/Fotos/${cidade}/${src}`}
                    alt={`Arquivo ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0} // Prioriza o carregamento da primeira imagem
                  />
                </div>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 text-white bg-black/50 rounded-full p-2 shadow-lg hover:bg-black/70 transition-colors duration-300" />
        <CarouselNext className="right-4 text-white bg-black/50 rounded-full p-2 shadow-lg hover:bg-black/70 transition-colors duration-300" />
      </Carousel>
    </div>
  );
}