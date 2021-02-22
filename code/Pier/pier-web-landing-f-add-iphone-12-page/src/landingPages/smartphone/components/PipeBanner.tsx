import styled from "styled-components";
import colors from "ui/theme/colors";
import breakpoints from "ui/theme/breakpoints";
import spacings from "ui/theme/spacings";

import Switcher from "ui/Switcher";
import Text from "ui/Text";

import { smartphoneTracker } from "helpers/mixpanelTracker";
import { nextPipeUpdateAt } from "helpers/pipePlansValues";

import data from "./data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white50};
  border-radius: ${spacings.KILO / 2}px;
  padding: ${spacings.TERA}px;
  box-sizing: border-box;

  ${breakpoints.tablet} {
    align-self: center;
    max-width: 320px;
  }

  ${breakpoints.desktop} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: unset;
    /**
     * Banner section width must be aligned to plans cards (from the left side of the left card to the right side of the right card).
     * So we need to calculate the space between cards given that it can vary on different desktop screens resolutions.
     * The white space is given by "(calc(100% - 800px - 24px) / 2)" if we assume boths cards are centralized on their respective grids.
     * 800px represents the overall cards width (on desktop) and 24px corresponds to the horizontal section padding.
     */
    width: calc(100% - (calc(100% - 800px - ${spacings.GIGA}px) / 2));
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${spacings.TERA}px;

  ${breakpoints.desktop} {
    margin-top: 0;
  }
`;

interface Props {
  switcherChecked: boolean;
  onToggleSwitcher: () => void;
}

const PipeBanner = ({ switcherChecked, onToggleSwitcher }) => {
  const trackToggle = () => {
    smartphoneTracker.trackToggle("Landing Page Pricing");
  };

  return (
    <Container>
      <Text variant="body" maxWidth={368}>
        <Text variant="body" bold inline>
          {data.pipeBanner.descriptionOne}
        </Text>{" "}
        <Text variant="body" inline>
          {data.pipeBanner.descriptionTwo(
            nextPipeUpdateAt.format("DD/MM/YYYY")
          )}
        </Text>
      </Text>
      <Row>
        <Text variant="body" mr={spacings.MEGA}>
          {data.pipeBanner.switcherLabel}
        </Text>
        <Switcher
          checked={switcherChecked}
          toggle={() => {
            trackToggle();
            onToggleSwitcher();
          }}
          hasLabel={false}
        />
      </Row>
    </Container>
  );
};

export default PipeBanner;
