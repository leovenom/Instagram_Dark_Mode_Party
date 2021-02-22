import styled from "styled-components";

import Icon from "ui/Icon";
import breakpoints from "ui/theme/breakpoints";
import Router from "next/router";

const BackButton = styled.button`
  position: absolute;
  top: -10px;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  background: unset;
  border: none;
  cursor: pointer;
  transition: all 250ms ease-in-out;

  ${({ theme }) => theme.styles.rippleEffect};

  :hover {
    background: ${({ theme }) => theme.colors.black5};
  }

  /* TODO enable outline and apply style */
  outline: 0;

  svg {
    transform: rotate(90deg);
  }

  ${breakpoints.desktop} {
    top: 65px;
    left: -60px;
    padding: 16px;
    border-radius: 50%;
  }
`;

interface Props {
  goBack?: () => void;
}

const BackStepButton = ({ goBack }: Props) => {
  return (
    <BackButton type="button" onClick={goBack || Router.back}>
      <Icon name="chevronDown" fill="primary" />
    </BackButton>
  );
};

export default BackStepButton;
