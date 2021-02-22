import styled from "styled-components";

import breakpoints from "ui/theme/breakpoints";
import colors from "ui/theme/colors";

const Section = styled.section<{ coloredBg?: keyof typeof colors }>`
  background-color: ${({ theme, coloredBg }) =>
    coloredBg ? colors[coloredBg] : theme.colors.white};
  padding: 120px 24px;
  display: grid;
  grid-gap: 80px;

  ${breakpoints.desktop} {
    margin: 0 24px;
    grid-auto-flow: column;
    padding: 120px 21%;
  }
`;

const Item = styled.div`
  display: grid;
  grid-template-rows: 60px auto;
  justify-items: center;
  grid-gap: 32px;
  text-align: center;

  div {
    height: 120px;
    display: flex;
    align-items: center;
  }
`;

interface Props {
  id?: string;
  coloredBg?: keyof typeof colors;
  items: {
    imagePath: string;
    imageDescription: string;
    description: () => JSX.Element;
  }[];
}

function TwoItemsSection({ id, coloredBg, items }: Props) {
  return (
    <Section coloredBg={coloredBg} id={id}>
      {items.map(function ({ imagePath, imageDescription, description }) {
        return (
          <Item key={imagePath}>
            <div>
              <img src={imagePath} alt={imageDescription} />{" "}
            </div>
            {description()}
          </Item>
        );
      })}
    </Section>
  );
}

export default TwoItemsSection;
