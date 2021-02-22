import styled, { keyframes } from "styled-components";

const Container = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin: 8px;
`;

const pinkCircleAnimation = keyframes`
  0% {
    transform: translateX(0);
    z-index:0;
  }

  50% {
    transform: translateX(20px);

  }

  100% {
    transform: translateX(0);
    z-index:1;
  }
`;
const purpleCircleAnimation = keyframes`
  0% {
    transform: translateX(0);
  }

  50% {
    transform: translateX(-20px);
  }

  100% {
    transform: translateX(0);
  }
  `;

const BigCircle = styled.div`
  background: ${({ theme }) => theme.colors.lighterGray};
  position: absolute;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  margin: 0;
  width: 80px;
  height: 80px;
`;

const PinkCircle = styled.div`
  top: 30px;
  left: 20px;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  margin: 0;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  animation: ${pinkCircleAnimation} 1s infinite ease-in-out;
`;

const PurpleCircle = styled.div`
  top: 30px;
  left: 40px;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  margin: 0;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.primary};
  animation: ${purpleCircleAnimation} 1s infinite ease-in-out;
`;

interface Props {
  text?: string;
}

const Spinner = ({ text }: Props) => (
  <Container>
    <BigCircle />
    <PinkCircle />
    <PurpleCircle />
  </Container>
);

export default Spinner;
