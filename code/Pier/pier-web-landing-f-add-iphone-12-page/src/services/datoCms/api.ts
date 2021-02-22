import { API_TOKEN, API_URL } from "./constants";

async function fetchAPI(query, { variables, preview }) {
  const res = await fetch(API_URL + (preview ? "/preview" : ""), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    return null;
  }
  return json.data;
}

export async function getAutoMarketingPages() {
  const data = await fetchAPI(
    `
    {
      allProductPages{
        title
        description
        subroute
      }
    }`,
    {
      variables: null,
      preview: true,
    }
  );
  return data?.allProductPages;
}

export async function getAutoPageByRoute(slug) {
  const data = await fetchAPI(
    `
    query ProductPages($slug: String) {
      allProductPages(filter: {subroute: {eq: $slug}}) {
        title
        description
        subroute
        id
        buttonText
         mainImage{
          blurUpThumb
        }
        newSection{
          description
          image{
            blurUpThumb
          }
          title
       } 
      }
    }

    `,
    {
      variables: {
        slug,
      },
      preview: true,
    }
  );
  return data?.allProductPages;
}

export async function getAutoPiersPhoneNumbers() {
  const data = await fetchAPI(
    `
    query PhoneNumbers {
      allAutoZapZaps{
        enabled
        phoneNumbers
      }
    }
    `,
    {
      variables: null,
      preview: true,
    }
  );
  return data?.allAutoZapZaps;
}

export async function getAllPagesPaths() {
  const data = await fetchAPI(
    `
    query PagePaths {
      allLpBuilders{
        url
      }
    }
    `,
    {
      variables: null,
      preview: true,
    }
  );
  return data?.allLpBuilders;
}

export async function getPageDetailsByPath(url) {
  const data = await fetchAPI(
    `
   query PageDetails($url: String) {
      allLpBuilders(filter: {url: {eq: $url}}) {
        url
        linkDoBotO
        imagem {
          responsiveImage {
            webpSrcSet
            src
            srcSet
            alt
          }
        }
        seEsComTextosEImagens {
          ... on SeOPadrORecord {
            id
            primeiroBlocoDeText
            segundoBlocoDeTexto
            tipoDeSeO
            tTulo
            tituloDoCard
            descriODoCard
            urlDeRedirectDoCard
            imagem {
              id
              responsiveImage {
                webpSrcSet
                src
                srcSet
                alt
              }
            }
          }
          ... on SeOComTrSItemRecord {
            id
            item1Descricao
            item1Titulo
            item2Descricao
            item2Titulo
            item3Descricao
            item3Titulo
            textoInicial
            titulo
            item1Imagem {
              responsiveImage {
                webpSrcSet
                src
                srcSet
                alt
              }
            }
            item2Imagem {
              responsiveImage {
                webpSrcSet
                src
                srcSet
                alt
              }
            }
            item3Imagem {
              responsiveImage {
                webpSrcSet
                src
                srcSet
                alt
              }
            }
          }
          ... on DefaultSectionRecord {
            id
            variant
          }
          ... on DefaultSectionSmartphoneRecord {
            id
            smartphoneVariant
          }
          ... on HeroRecord {
            id
            title
            subtitle
            heroVariation
            buttonText
            buttonLink
            image {
              responsiveImage {
                webpSrcSet
                src
                srcSet
                alt
              }
            }
          }
        }
        subtitulo
        textoDoBotO
        titulo
        updatedAt
        variaODaHero
      }
    }
    `,
    {
      variables: { url },
      preview: true,
    }
  );
  return data?.allLpBuilders;
}
