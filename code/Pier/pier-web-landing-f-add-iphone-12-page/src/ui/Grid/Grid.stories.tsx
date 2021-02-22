import Grid from ".";
import GridItem from "../GridItem";

import { storiesOf } from "@storybook/react";

import styled from "styled-components";

const Square = styled.div`
  background: ${({ theme }) => theme.colors.primaryGradient};
  border: 3px solid ${({ theme }) => theme.colors.secondary};
  width: 100%;
  padding: 16px;
  font-weight: bold;
  color: white;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledGrid = styled(GridItem)``;

const SquareSecondary = styled.div`
  background: ${({ theme }) => theme.colors.secondaryGradient};
  border: 3px solid ${({ theme }) => theme.colors.primary};
  width: 100%;
  padding: 16px;
  font-weight: bold;
  color: white;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.lightGray};
  border: 3px solid ${({ theme }) => theme.colors.gray};
  padding: 16px;
  display: flex;
  justify-content: center;
`;

storiesOf("Components | Grid", module)
  .add("Basic example", () => (
    <Container>
      <Grid>
        <GridItem m={2} t={8} d={12}>
          <Square>
            m={2} t={8} d={12}
          </Square>
        </GridItem>

        <GridItem m={2} t={8} d={6}>
          <Square>
            m={2} t={8} d={6}
          </Square>
        </GridItem>
        <GridItem m={2} t={4} d={6}>
          <Square>
            m={2} t={8} d={6}
          </Square>
        </GridItem>

        <GridItem m={2} t={4} d={4}>
          <Square>
            m={2} t={4} d={4}
          </Square>
        </GridItem>
        <GridItem m={2} t={4} d={4}>
          <Square>
            m={2} t={4} d={4}
          </Square>
        </GridItem>
        <GridItem m={2} t={4} d={4}>
          <Square>
            m={2} t={4} d={4}
          </Square>
        </GridItem>

        <GridItem m={1} t={2} d={3}>
          <Square>
            m={1} t={2} d={3}
          </Square>
        </GridItem>
        <GridItem m={1} t={2} d={3}>
          <Square>
            m={1} t={2} d={3}
          </Square>
        </GridItem>
        <GridItem m={1} t={2} d={3}>
          <Square>
            m={1} t={2} d={3}
          </Square>
        </GridItem>
        <GridItem m={1} t={2} d={3}>
          <Square>
            m={1} t={2} d={3}
          </Square>
        </GridItem>
      </Grid>
    </Container>
  ))
  .add("Nested Grids", () => (
    <Container>
      <Grid>
        <GridItem m={2} t={8} d={6} gridContainer bg="primaryGradient">
          <GridItem m={2} t={4} d={6}>
            <SquareSecondary>
              m={2} t={4} d={6}
            </SquareSecondary>
          </GridItem>
          <GridItem m={2} t={4} d={6}>
            <SquareSecondary>
              m={2} t={4} d={6}
            </SquareSecondary>
          </GridItem>
        </GridItem>

        <GridItem m={2} t={8} d={6} gridContainer bg="primaryGradient">
          <GridItem m={2} t={4} d={4}>
            <SquareSecondary>
              m={2} t={4} d={4}
            </SquareSecondary>
          </GridItem>
          <GridItem m={2} t={4} d={4}>
            <SquareSecondary>
              m={2} t={4} d={4}
            </SquareSecondary>
          </GridItem>
          <GridItem m={2} t={4} d={4}>
            <SquareSecondary>
              m={2} t={4} d={4}
            </SquareSecondary>
          </GridItem>
        </GridItem>
      </Grid>
    </Container>
  ));
