import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import SchemaMarkup from "@/components/SchemaMarkup";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import GoogleTagManager from "@/components/GoogleTagManager";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://metalmartinsgalpoes.com.br"),
  title: {
    default: "Metal Martins | Construtora Especializada em Galpões Pré-Moldados e Estruturas Metálicas",
    template: "%s | Metal Martins Construtora"
  },
  description: "Líderes em construção de galpões pré-moldados e estruturas metálicas de alta performance para indústria, comércio e logística. Projetos personalizados, certificação ISO 9001 e atendimento em todo o Brasil. Orçamento rápido via WhatsApp!",
  keywords: [
    "galpões pré-moldados",
    "estruturas metálicas industriais",
    "construção de galpões logísticos",
    "construtora especializada em aço",
    "projetos de engenharia metalúrgica",
    "montagem de estruturas metálicas",
    "soluções em construção pré-moldada",
    "orçamento de galpão industrial",
  ],
  authors: [{ name: "Metal Martins Construtora", url: "https://metalmartinsgalpoes.com.br" }],
  creator: "Metal Martins Construtora",
  publisher: "Metal Martins Construtora",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large"
    }
  },
  alternates: {
    canonical: "/",
    languages: { "pt-BR": "/" },
  },
  openGraph: {
    type: "website",
    url: "https://metalmartinsgalpoes.com.br",
    title: "Metal Martins | Construtora Especializada em Galpões Pré-Moldados",
    description: "Soluções completas em construção metálica para empreendimentos industriais, comerciais e logísticos. Tecnologia alemã e engenharia certificada.",
    siteName: "Metal Martins Construtora",
    images: [
      {
        url: "/Fotos/Cima.jpeg",
        width: 720,
        height: 1280,
        alt: "Galpão Industrial Moderno construído pela Metal Martins visão aérea",
      },
      {
        url: "/Fotos/Estrtutura.jpeg",
        width: 720,
        height: 1280,
        alt: "Estrutura Metálica de Galpão Industrial construída pela Metal Martins",
      },
      {
        url: "/Fotos/Hero.jpeg",
        width: 720,
        height: 1280,
        alt: "Galpão Industrial Moderno construído pela Metal Martins",
      },
      {
        url: "/Fotos/logo sem nome.png",
        width: 512,
        height: 512,
        alt: "Logo da Metal Martins Construtora",
      },
      {
        url: "/Fotos/logo.png",
        width: 720,
        height: 1280,
        alt: "Logo da empresa Metal Martins Construtora",
      }
    ],
  },
  themeColor: "#1a1a1a",
  formatDetection: {
    telephone: true,
    date: false,
    address: false,
    email: false,
  },
  other: {
    "instagram:creator": "@metalmartins_",
    "whatsapp": "+5547997137923",
    "corporate-email": "contato@metalmartinsgalpoes.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <SchemaMarkup />
        <GoogleTagManager />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MZZ8BBXG"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
        </noscript>
        <Script id="clarity-script" strategy="afterInteractive">
          {`    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "q0qfruvjif");`}
        </Script>
        <GoogleAnalytics />
        
        {children}
      </body>
    </html>
  );
}
