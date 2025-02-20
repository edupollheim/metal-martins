'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css'; // Estilos do Lightbox

interface MidiaPorPasta {
  [pasta: string]: {
    fotos: string[];
    videos: string[];
  };
}

const FotosGrid: React.FC = () => {
  const [midiaPorPasta, setMidiaPorPasta] = useState<MidiaPorPasta>({});
  const [error, setError] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0); // Índice da imagem selecionada
  const [currentPasta, setCurrentPasta] = useState<string | null>(null); // Pasta atual
  const [isVideoOpen, setIsVideoOpen] = useState(false); // Estado para controlar a exibição do vídeo
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null); // Vídeo selecionado

  useEffect(() => {
    const fetchMidia = async () => {
      try {
        const response = await fetch('/api/midia');
        if (!response.ok) {
          throw new Error(`Erro: ${response.statusText}`);
        }
        const data: MidiaPorPasta = await response.json();
        setMidiaPorPasta(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Ocorreu um erro desconhecido.');
        }
      }
    };

    fetchMidia();
  }, []);

  const openLightbox = (pasta: string, index: number) => {
    setCurrentPasta(pasta); // Define a pasta atual
    setSelectedImageIndex(index); // Define o índice da imagem selecionada
    setLightboxOpen(true); // Abre o lightbox
  };

  const openVideo = (pasta: string, video: string) => {
    setCurrentPasta(pasta); // Define a pasta atual
    setSelectedVideo(video); // Define o vídeo selecionado
    setIsVideoOpen(true); // Abre o player de vídeo
  };

  const closeVideo = () => {
    setIsVideoOpen(false); // Fecha o player de vídeo
    setSelectedVideo(null); // Limpa o vídeo selecionado
  };

  if (error) {
    return <div>Erro ao buscar mídia: {error}</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      {Object.keys(midiaPorPasta).map((pasta) => (
        <div key={pasta} style={{ marginBottom: '40px' }}>
          <h3 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>{pasta}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '15px' }}>
            {/* Renderizar fotos */}
            {midiaPorPasta[pasta].fotos.map((foto, index) => (
              <div
                key={`foto-${index}`}
                style={{
                  position: 'relative',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onClick={() => openLightbox(pasta, index)} // Abre o Lightbox para a foto
              >
                <Image
                  src={`/Fotos/Galeria/${pasta}/${foto}`}
                  alt={foto}
                  width={200}
                  height={200}
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
            ))}

            {/* Renderizar vídeos */}
            {midiaPorPasta[pasta].videos.map((video, index) => (
              <div
                key={`video-${index}`}
                style={{
                  position: 'relative',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onClick={() => openVideo(pasta, video)} // Abre o player de vídeo
              >
                <video
                  src={`/Fotos/Galeria/${pasta}/${video}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  muted
                  loop
                  preload="metadata"
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '48px',
                    color: '#fff',
                  }}
                >
                  ▶️
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Lightbox para fotos */}
      {lightboxOpen && currentPasta && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={midiaPorPasta[currentPasta].fotos.map((foto) => ({
            src: `/Fotos/Galeria/${currentPasta}/${foto}`,
            title: foto, // Adiciona o título da imagem
          }))}
          index={selectedImageIndex} // Define o índice da imagem selecionada
        />
      )}

      {/* Player de vídeo */}
      {isVideoOpen && selectedVideo && currentPasta && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
          onClick={closeVideo} // Fecha o player ao clicar fora
        >
          <video
            src={`/Fotos/Galeria/${currentPasta}/${selectedVideo}`}
            controls
            autoPlay
            style={{ maxWidth: '90%', maxHeight: '90%' }}
          />
        </div>
      )}
    </div>
  );
};

export default FotosGrid;