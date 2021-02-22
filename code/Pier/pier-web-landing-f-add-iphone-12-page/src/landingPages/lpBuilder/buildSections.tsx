import ParagraphAndThreeItems from "./sections/ParagraphAndThreeItems";
import TextWithImageOnRight from "./sections/TextWithImageOnRight";
import TextWithImageOnLeft from "./sections/TextWithImageOnLeft";
import TextWithCardOnRight from "./sections/TextWithCardOnRight";
import TextWithCenteredImage from "./sections/TextWithCenteredImage";

import getDefaultSection from "./defaultSections";
import getSmartphoneDefaultSection from "./smartphoneDefaultSections";
import buildHeroSection from "./buildHeroSection";

enum TextSectionsVariants {
  CenteredImage = 1,
  ImageOnTheRight = 2,
  ImageOnTheLeft = 3,
  CardOnTheRight = 4,
}

const buildSectionWithThreeItems = (section) => {
  const items = {
    itemOne: {
      title: section?.item1Titulo,
      description: section?.item1Descricao,
      imageSrc: section?.item1Imagem?.responsiveImage?.src,
      imageDescription: "item 1", // TODO: pass description over datoCMS
    },
    itemTwo: {
      title: section?.item2Titulo,
      description: section?.item2Descricao,
      imageSrc: section?.item2Imagem?.responsiveImage?.src,
      imageDescription: "item 2",
    },
    itemThree: {
      title: section.item3Titulo,
      description: section?.item3Descricao,
      imageSrc: section?.item3Imagem?.responsiveImage?.src,
      imageDescription: "item 3",
    },
  };

  return (
    <ParagraphAndThreeItems
      title={section.titulo}
      bodyText={section?.textoInicial}
      items={items}
    />
  );
};

const getSection = (sectionVariant) => {
  switch (sectionVariant) {
    case TextSectionsVariants.CenteredImage:
      return TextWithCenteredImage;
    case TextSectionsVariants.ImageOnTheRight:
      return TextWithImageOnRight;
    case TextSectionsVariants.ImageOnTheLeft:
      return TextWithImageOnLeft;
    default:
      return TextWithCardOnRight;
  }
};

const buildTextSections = (textSections) => {
  if (!textSections.length) return null;

  const renderTextSections = (textSections) =>
    textSections.map(
      (
        {
          tTulo,
          imagem,
          primeiroBlocoDeText,
          segundoBlocoDeTexto,
          tipoDeSeO,
          tituloDoCard,
          descriODoCard,
          urlDeRedirectDoCard,
          item1Descricao,
          variant,
          smartphoneVariant,
          heroVariation,
          ...rest
        },
        index
      ) => {
        if (item1Descricao)
          return buildSectionWithThreeItems({ item1Descricao, ...rest });

        if (variant) return getDefaultSection(variant);

        if (smartphoneVariant)
          return getSmartphoneDefaultSection(smartphoneVariant);

        if (heroVariation) return buildHeroSection({ ...rest });

        const SectionWrapper = getSection(tipoDeSeO);

        const additionalProps =
          tipoDeSeO === TextSectionsVariants.CardOnTheRight
            ? {
                cardTitle: tituloDoCard,
                cardBody: descriODoCard,
                cardLink: urlDeRedirectDoCard,
              }
            : {};

        return (
          <SectionWrapper
            title={tTulo}
            image={{
              src: imagem?.responsiveImage.src,
              description: "Imagem auxiliar ao texto", // TODO: pass imagem description over DatoCMS
            }}
            bodyText={primeiroBlocoDeText}
            bodyTextSecondary={segundoBlocoDeTexto}
            {...additionalProps}
          />
        );
      }
    );

  return renderTextSections(textSections);
};

const buildSections = (pageData) => {
  return (
    <>
      {buildHeroSection(pageData)}
      {buildTextSections(pageData?.seEsComTextosEImagens)}
    </>
  );
};

export default buildSections;
