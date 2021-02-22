import * as React from "react";
import HeroTwoColumns from "landingPages/sharedSections/heroSections/HeroTwoColumns";
import Button from "ui/Button";
import Link from "next/link";

import data from "./data";

const variants = {
  smartphone: "smartphone",
  auto: "auto",
  default: "default",
  iphone: "iphone",
};

interface Props {
  variant?: keyof typeof variants;
  onClickCTA: () => void;
  mt?: number;
}

const BlackFridaySection: React.FC<Props> = ({
  variant = "default",
  mt = 0,
  onClickCTA,
}) => {
  const dataScope = data[variant];
  const ButtonWrapper = variant === variants.auto ? Link : React.Fragment;
  return (
    <HeroTwoColumns
      mt={mt}
      title={dataScope.title}
      subtitle={dataScope.description}
      imageSrc={dataScope.imageSrc}
      imageDescription={dataScope.imageDescription}
      variant="dark"
    >
      <ButtonWrapper href={dataScope.ctaHref}>
        <Button
          id={dataScope.ctaId}
          onClick={onClickCTA}
          variant="secondary"
          fullWidth
          data-tracking={dataScope.ctaTracking}
          data-testid="black-friday-cta"
        >
          {dataScope.callToAction}
        </Button>
      </ButtonWrapper>
    </HeroTwoColumns>
  );
};

export default BlackFridaySection;
