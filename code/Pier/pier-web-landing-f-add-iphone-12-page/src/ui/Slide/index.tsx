import { ReactNode } from "react";
import * as React from "react";
import styled from "styled-components";

interface Props {
  children: ReactNode;
}

const StyledSlide = styled.div`
  min-width: 100%;
  box-sizing: border-box;
  border-radius: 4px;

  margin-bottom: 24px;

  display: flex;
  align-items: space-between;
`;

const Slide: React.FC<Props> = ({ children }): JSX.Element => (
  <StyledSlide>{children}</StyledSlide>
);

export default Slide;
