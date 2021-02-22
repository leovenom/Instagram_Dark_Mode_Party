import styled, { css } from "styled-components";
import colors from "ui/theme/colors";
import Text from "ui/Text";

const Progress = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 100px;
  background: ${({ theme }) => theme.colors.gray400};
  display: flex;
`;

const ProgressFilled = styled.span<Props>`
  height: 100%;
  border-radius: 100px;
  width: ${({ value }) => value}%;
  background: ${({ theme, bg }) => theme.colors[bg]};
`;

const Row = styled.div<{ showPercentage?: boolean }>`
  display: flex;

  ${({ showPercentage }) =>
    showPercentage &&
    css`
      div:first-child {
        margin-right: 12px;
      }
    `}
`;

interface Props {
  value: number;
  bg?: keyof typeof colors;
  showPercentage?: boolean;
  description?: string;
}

const ProgressBar = ({
  value,
  bg = "green800",
  showPercentage,
  description,
}: Props) => {
  return (
    <>
      <Row showPercentage={showPercentage}>
        <Progress
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <ProgressFilled value={value} bg={bg} />
        </Progress>
        {showPercentage && (
          <Text variant="bodySmall" bold>
            {value}%
          </Text>
        )}
      </Row>
      {description && (
        <Text mt={8} variant="body">
          {description}
        </Text>
      )}
    </>
  );
};

export default ProgressBar;
