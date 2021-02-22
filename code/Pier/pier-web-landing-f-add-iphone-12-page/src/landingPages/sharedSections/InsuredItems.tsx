import styled, { css } from "styled-components";
import { useRouter } from "next/router";

import { autoTracker } from "helpers/mixpanelTracker";
import Collapse from "ui/Collapse";
import { customFilledIcons } from "ui/Icon/customizedIcons";
import { CustomFilledIcon } from "ui/Icon/CustomizedIcon";
import Text from "ui/Text";
import breakpoints from "ui/theme/breakpoints";
import colors from "ui/theme/colors";

const BASE_TRACKING_NAME = "Insured Item";

const Content = styled.section<{
  bgColor?: keyof typeof colors;
  isQuotePage?: boolean;
}>`
  padding: 96px 24px 80px;

  ${({ bgColor, theme }) =>
    bgColor &&
    css`
      background: ${theme.colors[bgColor]};
    `}

  ${breakpoints.desktop} {
    ${({ isQuotePage }) => isQuotePage && "padding: 96px 0 80px;"}
  }
`;

const InsuredItemsList = styled.ul<{ isQuotePage?: boolean }>`
  padding: 0;
  list-style-type: none;

  ${breakpoints.desktop} {
    margin: 0 auto;
    ${({ isQuotePage }) => (isQuotePage ? "width: 100%" : "width: 800px;")}
  }
`;

const InsuredItem = styled.li<{
  hasLongDescription?: boolean;
  lastOne: boolean;
}>`
  ${({ hasLongDescription, lastOne, theme }) =>
    !hasLongDescription &&
    css`
      padding: 24px 0;
      ${!lastOne && `border-bottom: 1px solid ${theme.colors.gray400};`}
    `}

  ${breakpoints.desktop} {
    width: 100%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    margin: 0;
    margin-right: 16px;
  }
`;
const CollapseContent = styled.div`
  margin-left: 52px;

  ${breakpoints.desktop} {
    margin: 0 52px;
  }
`;

const InsuredText = styled.div`
  flex: 1;
`;

export interface InsuredItemsProps {
  id: number;
  icon?: keyof typeof customFilledIcons;
  name: string;
  shortDescription?: string;
  longDescription?: string;
}

interface ListItemProps {
  item: InsuredItemsProps;
  covered: boolean;
  lastOne: boolean;
}

function ListItem({ item, covered, lastOne }: ListItemProps) {
  function trackCollapsableOpened() {
    autoTracker.track(`${BASE_TRACKING_NAME} Collapse Clicked`, {
      item: item.name,
      url: window.location.pathname,
      covered,
    });
  }

  function renderListItemTitle() {
    return (
      <>
        <TitleContainer>
          {covered ? (
            <CustomFilledIcon
              name={item.icon}
              backgroundFill="secondary"
              iconFill="white"
            />
          ) : (
            <CustomFilledIcon
              name="blocked"
              backgroundFill="gray"
              iconFill="white"
            />
          )}
          <InsuredText>
            <Text variant="body" bold>
              {item.name}
            </Text>
            <Text variant="body">{item.shortDescription}</Text>
          </InsuredText>
        </TitleContainer>
      </>
    );
  }

  if (!item.longDescription) {
    return (
      <InsuredItem
        hasLongDescription={!!item.longDescription}
        lastOne={lastOne}
      >
        {renderListItemTitle()}
      </InsuredItem>
    );
  }

  return (
    <InsuredItem hasLongDescription={!!item.longDescription} lastOne={lastOne}>
      <Collapse trackEvent={trackCollapsableOpened}>
        <Collapse.Title thinner>{renderListItemTitle()}</Collapse.Title>
        <Collapse.Content>
          <CollapseContent>{item.longDescription}</CollapseContent>
        </Collapse.Content>
      </Collapse>
    </InsuredItem>
  );
}

interface Props {
  id?: string;
  spyThisElement?: boolean;
  description?: string;
  title: string;
  subtitle?: string;
  covered?: boolean;
  bgColor?: keyof typeof colors;
  insuredItems: InsuredItemsProps[];
}

function InsuredItems({
  id,
  spyThisElement,
  title,
  subtitle,
  covered,
  bgColor,
  insuredItems,
  description,
}: Props) {
  const { pathname } = useRouter();
  const lastIndex = insuredItems.length - 1;

  const isQuotePage = pathname.includes("cotacao");

  return (
    <Content
      bgColor={bgColor}
      isQuotePage={isQuotePage}
      id={id}
      className={spyThisElement && "section-spy"}
    >
      {description && (
        <Text
          variant="bodyLarge"
          mb={16}
          align={isQuotePage ? "left" : "center"}
          bold
          color="secondary600"
        >
          {description}
        </Text>
      )}
      <Text variant="section" mb={24} align={isQuotePage ? "left" : "center"}>
        {title}
      </Text>
      {subtitle && (
        <Text variant="body" mb={32} align={isQuotePage ? "left" : "center"}>
          {subtitle}
        </Text>
      )}

      <InsuredItemsList isQuotePage={isQuotePage}>
        {insuredItems.map(function (item, i) {
          return (
            <ListItem
              key={item.id}
              item={item}
              covered={covered}
              lastOne={lastIndex === i}
            />
          );
        })}
      </InsuredItemsList>
    </Content>
  );
}

export default InsuredItems;
