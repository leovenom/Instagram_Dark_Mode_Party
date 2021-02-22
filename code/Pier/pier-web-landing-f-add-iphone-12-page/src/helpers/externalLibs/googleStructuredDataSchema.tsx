export function SchemaDefinition() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: `{
    "@context": "http://schema.org",
    "@type": "WebSite",
    "name": "Pier Digital",
    "url": "https://www.pier.digital/"
    }`,
      }}
    />
  );
}

export function GoogleStructuredDataSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: `{
          "@context":"http://schema.org",
          "@type" :"Organization",
          "name":"Pier Digital",
          "url":"https://www.pier.digital/",
          "image":"https://i0.wp.com/storage.googleapis.com/pier-blog/2019/08/logo_vector-2.png?fit=195%2C51&ssl=1",
          "description":"Proteção compartilhada para seu carro e seu celular. Contrate em minutos. Sem franquia e sem surpresas!",
          "address": {
            "@type":"PostalAddress",
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "postalCode": "05422-030",
            "streetAddress": "Rua Cláudio Soares, 72, conj. 705"
          },
          "sameAs": [
            "https://www.facebook.com/pierdigitalbrasil/",
            "https://www.instagram.com/pierdigital/",
            "https://www.linkedin.com/company/pier-digital/"]
          }
        `,
      }}
    />
  );
}
