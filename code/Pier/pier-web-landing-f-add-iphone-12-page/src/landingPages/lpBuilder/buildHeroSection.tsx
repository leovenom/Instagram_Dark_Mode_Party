import Link from "next/link";

import HeroTwoColumns from "landingPages/lpBuilder/sections/HeroTwoColumns";
import Button from "ui/Button";

function buildHeroSection(content: any) {
  const data = {
    title: content.title || content.titulo,
    subtitle: content.subtitle || content.subtitulo,
    buttonLink: content.buttonLink || content.linkDoBotO,
    buttonText: content.buttonText || content.textoDoBotO,
    image: content.image || content.imagem,
  };

  return (
    <HeroTwoColumns
      textMaxWidth={420}
      title={data?.title}
      subtitle={data?.subtitle}
      imageSrc={data?.image?.responsiveImage?.src}
      imageDescription={data?.image?.responsiveImage?.alt}
    >
      {data?.buttonText ? (
        <Link href={data?.buttonLink}>
          <Button
            href={data?.buttonLink}
            id="main-quote-btn"
            data-tracking="cta-quote-auto"
            asLink
            variant="secondary"
            fullWidth
          >
            {data?.buttonText}
          </Button>
        </Link>
      ) : null}
    </HeroTwoColumns>
  );
}

export default buildHeroSection;
