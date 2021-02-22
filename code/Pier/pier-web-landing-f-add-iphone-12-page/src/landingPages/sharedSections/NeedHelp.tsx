import styled from "styled-components";

import breakpoints from "ui/theme/breakpoints";
import Text from "ui/Text";
import Button from "ui/Button";
import useIntercom from "hooks/useIntercom";
import { autoTracker } from "helpers/mixpanelTracker";
import Section from "landingPages/sharedSections/Section";

interface Props {
  sourcePage: string;
  spyThisElement?: boolean;
}

const StyledSection = styled(Section)`
  &&& {
    align-items: center;
    flex-direction: column;

    ${breakpoints.desktop} {
      margin-bottom: 24px;
    }
  }
`;

function NeedHelp({ sourcePage, spyThisElement }: Props): JSX.Element {
  const openIntercom = useIntercom();

  function showIntercom() {
    autoTracker.trackLink(`${sourcePage} Need Help`);
    openIntercom();
  }

  return (
    <StyledSection
      id="need-help"
      bg="yellow400"
      pt={72}
      pb={[56, 56, 80]}
      className={spyThisElement && "section-spy"}
    >
      <img
        src="/static_assets/images/rebranding/heart-pointer.svg"
        alt="balão de conversa rosa"
      />
      <Text variant="subtitleLarge" mb={16} mt={24} align="center">
        Precisa de ajuda?
      </Text>
      <Text variant="bodySmall" mb={32} align="center">
        Se tiver qualquer dúvida ou dificuldade, estamos aqui para te ajudar!
      </Text>
      <Button onClick={showIntercom} size="small">
        Fale com a gente
      </Button>
    </StyledSection>
  );
}

export default NeedHelp;
