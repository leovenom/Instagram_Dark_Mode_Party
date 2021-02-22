import styled, { keyframes } from "styled-components";

const spinnerAnimation = keyframes`
 	100% {
  	transform: rotate(360deg)
	}
`;

const StyledSpinner = styled.div`
  pointer-events: none;
  width: 24px;
  height: 24px;
  border: 4px solid transparent;
  border-color: transparent;
  border-top-color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  animation: ${spinnerAnimation} 1s linear infinite;
`;

const Spinner = () => {
  return <StyledSpinner />;
};

export default Spinner;
