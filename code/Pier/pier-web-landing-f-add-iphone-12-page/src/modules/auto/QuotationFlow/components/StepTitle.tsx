import styled from "styled-components";

import breakpoints from "ui/theme/breakpoints";

interface Props {
  title: string;
}

const Title = styled.h2`
  margin-top: 48px;
  font-weight: bold;
  font-size: 28px;
  line-height: 36px;

  ${breakpoints.desktop} {
    margin: 80px 0 0;
  }
`;

const StepTitle = ({ title }: Props) => {
  return <Title>{title}</Title>;
};

export default StepTitle;
