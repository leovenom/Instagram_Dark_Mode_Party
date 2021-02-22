import styled from "styled-components";
import Text from "ui/Text";

const StyledDivider = styled.div<{ my?: number }>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  ${({ my }) =>
    my &&
    `
    margin: ${my}px 0px;
  `}

  :after {
    height: 1px;
    position: absolute;
    width: 40%;
    background: ${({ theme }) => theme.colors.lightGray};
    content: "";
    right: 0;
    top: 9.5px;
  }

  :before {
    left: 0;
    content: "";
    height: 1px;
    position: absolute;
    width: 40%;
    background: ${({ theme }) => theme.colors.lightGray};
    top: 9.5px;
  }
`;

interface Props {
  my?: number;
  text: string;
}

const Divider = ({ text, my }) => (
  <StyledDivider my={my}>
    <Text color="darkerGray" variant="bodySmallest" bold>
      {text}
    </Text>
  </StyledDivider>
);

export default Divider;
