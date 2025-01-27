import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
    dangerouslyAllowSVG: true, // Permite carregar imagens SVG
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;", // Adiciona segurança ao carregar SVGs
  },
  eslint: {
    ignoreDuringBuilds: true, // Desabilita o ESLint durante a construção
  },
};

export default nextConfig;
