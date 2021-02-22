import * as React from "react";
import styled from "styled-components";

import Modal from "ui/Modal";
import Text from "ui/Text";
import Button from "ui/Button";
import ImageResponsive from "ui/ImageResponsive";
import spacings from "ui/theme/spacings";

import data from "../data";

const ContentContainer = styled.div`
  display: flex;
  padding-top: calc(50% - 65px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface Props {
  isOpen: boolean;
  hide: () => void;
}

const FakeDoorSuccessSubmitionModal: React.FC<Props> = ({ isOpen, hide }) => {
  return (
    <Modal
      mobileFullScreen
      title={data.fakeDoor.success.title}
      isOpen={isOpen}
      hide={hide}
      contentLabel={data.fakeDoor.success.contentLabel}
    >
      <ContentContainer>
        <ImageResponsive
          src={data.fakeDoor.success.image.src}
          alt={data.fakeDoor.success.image.alt}
        />
        <Text align="center" mt={spacings.MEGA} variant="bodySmall">
          {data.fakeDoor.success.description}
        </Text>
        <Button
          mt={spacings.TERA + spacings.KILO}
          fullWidth
          onClick={hide}
          variant="secondary"
        >
          {data.fakeDoor.success.button}
        </Button>
      </ContentContainer>
    </Modal>
  );
};

export default FakeDoorSuccessSubmitionModal;
