import styled from "styled-components";

import { generalTracker } from "helpers/mixpanelTracker";
import Badge from "ui/Badge";
import breakpoints from "ui/theme/breakpoints";
import { font } from "ui/theme/typography";

const BadgesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  max-width: 100%;

  & > * {
    max-width: 50%;
  }

  ${breakpoints.tablet} {
    justify-content: flex-start;
    margin: 32px 0;
  }

  ${breakpoints.desktop} {
    margin: 32px 0;
  }
  cursor: pointer;

  & > a > div {
    margin: 0 8px;
  }
`;

const BadgeItemContainer = styled.div`
  //max-width: 140px;
`;

const CustomText = styled.span`
  font-family: ${font.primary};
  font-size: 13px;
  line-height: 14px;
  display: block;
`;

const PIER_FACEBOOK_REVIEWS_URL =
  "https://www.facebook.com/pg/pierdigitalbrasil/reviews/?ref=page_internal";

const PIER_IS_A_INSURANCE_COMPANY_BLOG_LINK =
  "https://ajuda.pier.digital/pt-BR/articles/3766056-a-pier-e-uma-seguradora";

interface Props {
  sourcePage: string;
}

function Badges({ sourcePage }: Props) {
  const trackLink = (reference) => {
    generalTracker.trackLink(`${sourcePage} Badge ${reference} clicked`);
  };

  return (
    <BadgesContainer>
      <a
        href={PIER_IS_A_INSURANCE_COMPANY_BLOG_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackLink("Insurance")}
      >
        <BadgeItemContainer>
          <Badge icon="shield">
            <CustomText>
              Autorizado pela <strong>Susep</strong>
            </CustomText>
          </Badge>
        </BadgeItemContainer>
      </a>
      <a
        href={PIER_FACEBOOK_REVIEWS_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackLink("Facebook")}
      >
        <BadgeItemContainer>
          <Badge icon="star">
            <CustomText>
              Avaliação de 4.7/5 no <strong>Facebook</strong>
            </CustomText>
          </Badge>
        </BadgeItemContainer>
      </a>
    </BadgesContainer>
  );
}

export default Badges;
