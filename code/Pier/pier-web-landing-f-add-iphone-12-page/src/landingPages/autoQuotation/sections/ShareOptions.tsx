import { autoTracker } from "helpers/mixpanelTracker";
import useIntercom from "hooks/useIntercom";
import ShareQuotation from "landingPages/autoQuotation/components/ShareQuotation";
import { Quote } from "modules/auto/QuotationFlow/utils/types";
import { useState } from "react";
import styled from "styled-components";
import { CustomFilledIcon } from "ui/Icon/CustomizedIcon";
import { customFilledIcons } from "ui/Icon/customizedIcons";
import Text from "ui/Text";
import breakpoints from "ui/theme/breakpoints";
import colors from "ui/theme/colors";
import { SCREEN_NAME } from "landingPages/autoQuotation/LandingPage";

const Section = styled.section`
  grid-area: share;
  padding: 16px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray400};

  ${breakpoints.custom(930)} {
    padding: 0 0 60px;
    border-bottom: 8px solid ${({ theme }) => theme.colors.gray200};
  }
`;

const ShareList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 1fr;

  li {
    display: flex;
    justify-content: center;
  }

  ${breakpoints.custom(930)} {
    display: inline-grid;
    column-gap: 56px;
    border: 1px solid ${colors.gray400};
    border-radius: 4px;
    padding: 12px 24px;
  }
`;

const TransparentButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${breakpoints.custom(930)} {
    flex-direction: row;
  }
`;

const IconContainer = styled.div`
  width: 32px;
  height: 32px;
  margin-bottom: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${breakpoints.custom(930)} {
    margin: 0 8px 0 0;
  }
`;

interface ShareOptionProps {
  icon: keyof typeof customFilledIcons;
  text: string;
  action: () => void;
}

interface Props {
  quoteInfo: Quote | undefined;
}

function ShareOptions({ quoteInfo }: Props) {
  const [isShareModalOpen, setShareModalState] = useState<boolean>(false);
  const openIntercom = useIntercom();

  function hideShareModal() {
    setShareModalState(false);
  }

  function showShareOptions() {
    setShareModalState(true);
    autoTracker.trackModal(`${SCREEN_NAME} Share`);
  }

  const SHARE_OPTIONS: ShareOptionProps[] = [
    {
      icon: "balloon",
      text: "Falar no Chat",
      action: function () {
        openIntercom();
      },
    },
    {
      icon: "share",
      text: "Compartilhar",
      action: function () {
        showShareOptions();
      },
    },
  ];

  return (
    <>
      <Section>
        <ShareList>
          {SHARE_OPTIONS.map(function ({ icon, text, action }) {
            return (
              <li key={text}>
                <TransparentButton onClick={action}>
                  <IconContainer>
                    <CustomFilledIcon
                      name={icon}
                      backgroundFill="secondary600"
                      iconFill="white"
                    />
                  </IconContainer>
                  <Text variant="bodyResponsive">{text}</Text>
                </TransparentButton>
              </li>
            );
          })}
        </ShareList>
      </Section>
      <ShareQuotation
        isVisible={isShareModalOpen}
        hide={hideShareModal}
        quote={quoteInfo}
      />
    </>
  );
}

export default ShareOptions;
