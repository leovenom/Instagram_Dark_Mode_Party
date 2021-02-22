import styled from "styled-components";

import breakpoints from "ui/theme/breakpoints";

export const addResponsiveImageProps = (imagePath) => ({
  src: `${imagePath}.jpg`,
  srcWebp: `${imagePath}.webp`,
  srcMobile: `${imagePath}@0.5x.jpg`,
  srcMobileWebp: `${imagePath}@0.5x.webp`,
});

interface Props {
  src: string;
  alt: string;
  srcWebp?: string;
  srcMobile?: string;
  srcMobileWebp?: string;
}

const Placeholder = styled.div`
  background: ${({ theme }) => theme.colors.gray600}
  width: 100%;
  height: calc(100vh - 104px);
 

  ${breakpoints.desktop} {
    height: 632px;
    background: unset;
  }
`;

const ImageResponsive = ({
  src,
  alt,
  srcMobile,
  srcWebp,
  srcMobileWebp,
}: Props) => {
  return (
    <div className="hero-wrapper">
      <picture>
        <source
          type="image/webp"
          media="(max-width: 840px)"
          srcSet={srcMobileWebp}
        />
        <source media="(max-width: 840px)" srcSet={srcMobile} />
        <source type="image/webp" srcSet={srcWebp} />
        <img src={src} alt={alt} />
      </picture>
    </div>
  );
};

export default ImageResponsive;
