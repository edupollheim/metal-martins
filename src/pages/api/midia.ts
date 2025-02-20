import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const galeriaDir = path.join(process.cwd(), 'public', 'Fotos', 'Galeria');

  try {
    // Verifica se o diretório da galeria existe
    if (!fs.existsSync(galeriaDir)) {
      res.status(404).json({ error: 'Diretório da galeria não encontrado' });
      return;
    }

    // Ler o conteúdo do diretório Galeria
    const pastas = fs.readdirSync(galeriaDir);

    // Objeto para armazenar as fotos e vídeos por pasta
    const midiaPorPasta: { [pasta: string]: { fotos: string[]; videos: string[] } } = {};

    pastas.forEach((pasta) => {
      const pastaPath = path.join(galeriaDir, pasta);

      // Verifica se é um diretório
      if (fs.lstatSync(pastaPath).isDirectory()) {
        const arquivos = fs.readdirSync(pastaPath);

        // Extensões permitidas para fotos e vídeos
        const extensoesFotos = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
        const extensoesVideos = ['.mp4', '.mov', '.avi', '.mkv', '.webm'];

        // Filtrar apenas fotos e vídeos
        const fotos = arquivos.filter((arquivo) => extensoesFotos.includes(path.extname(arquivo).toLowerCase()));
        const videos = arquivos.filter((arquivo) => extensoesVideos.includes(path.extname(arquivo).toLowerCase()));

        midiaPorPasta[pasta] = { fotos, videos };
      }
    });

    // Retornar as fotos e vídeos organizados por pasta
    res.status(200).json(midiaPorPasta);
  } catch (error) {
    console.error('Erro ao ler o diretório da galeria:', error);
    res.status(500).json({ error: 'Erro ao ler o diretório da galeria' });
  }
}
