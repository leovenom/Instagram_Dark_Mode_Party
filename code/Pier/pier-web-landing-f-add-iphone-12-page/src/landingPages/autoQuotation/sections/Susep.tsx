import styled from "styled-components";
import breakpoints from "ui/theme/breakpoints";
import data from "landingPages/auto/data";

const Section = styled.section`
  grid-area: susep;
  padding: 80px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${breakpoints.custom(1140)} {
    flex-direction: row;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  :first-of-type {
    margin-bottom: 64px;
  }

  ${breakpoints.custom(1140)} {
    margin-bottom: 0;
    margin-right: 32px;
  }

  div {
    height: 90px;
    display: flex;
    align-items: center;
  }
`;

const items = data.trust.data;

function Susep() {
  return (
    <Section>
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

export default Susep;
