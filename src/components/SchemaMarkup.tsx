'use client'; // Apenas se precisar de interatividade (caso contrário, mantenha como server component)

import { usePathname } from 'next/navigation';
import Script from 'next/script';

const SchemaMarkup = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Schema principal da empresa (válido para todas as páginas)
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness",
    "name": "Metal Martins Construtora",
    "url": "https://metalmartinsgalpoes.com.br",
    "logo": "https://metalmartinsgalpoes.com.br/Fotos/logo%20sem%20nome.svg",
    "description": "Construtora especializada em galpões pré-moldados e estruturas metálicas para indústria, comércio e logística e atendimento nacional.",
    "telephone": "+5547997137923",
    "email": "contato@metalmartinsgalpoes.com.br",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua Dorvalina Pereira, 30",
      "addressLocality": "Araquari",
      "addressRegion": "SC",
      "postalCode": "82450-000",
      "addressCountry": "BR"
    },
    "founder": {
      "@type": "Person",
      "name": "",
      "jobTitle": ""
    },
    "foundingDate": "",
    "award": "",
    "areaServed": ["BR"],
    "sameAs": [
      "https://www.instagram.com/metalmartins_/"
    ]
  };

  // Schema adicional para página inicial
  const homepageSchema = isHomePage ? {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://metalmartinsgalpoes.com.br",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://metalmartinsgalpoes.com.br/busca?termo={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  } : null;

  return (
    <>
      {/* Schema principal */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />

      {/* Schema da homepage (se necessário) */}
      {isHomePage && (
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(homepageSchema)
          }}
        />
      )}

      {/* Adicione mais schemas conforme necessário (ex: para páginas de serviços) */}
    </>
  );
};

export default SchemaMarkup;