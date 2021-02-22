import styled from "styled-components";

import Icon from "ui/Icon";
import Text from "ui/Text";

const Container = styled.div`
  padding: 32px 0 80px;
  max-height: 80vh;
  box-sizing: border-box;
  overflow-y: auto;
  scrollbar-width: 0;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 32px;
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: grid;
  row-gap: 16px;
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 12px;

  svg {
    margin-top: 4px;
  }
`;

type List = {
  title: string;
  subtitle?: string;
}[];

interface CheckedListProps {
  list: List;
}

function CheckedList({ list }: CheckedListProps) {
  return (
    <List>
      {list.map(function ({ title, subtitle }) {
        return (
          <ListItem key={title}>
            <Icon name="check" fill="secondary" />
            <div>
              <Text variant="body" bold={!!subtitle}>
                {title}
              </Text>
              {subtitle && (
                <Text variant="body" color="gray600">
                  {subtitle}
                </Text>
              )}
            </div>
          </ListItem>
        );
      })}
    </List>
  );
}

interface Props {
  title: string;
  listItems: List;
  hide: () => void;
  children: React.ReactNode;
}

function FaqModalsTemplate({ title, hide, listItems, children }: Props) {
  return (
    <Container>
      <IconContainer>
        <Icon
          name="close"
          fill="primary"
          stroke={12}
          size={18}
          onClick={hide}
        />
      </IconContainer>
      <Text variant="subtitle" bold mb={24}>
        {title}
      </Text>
      {children}

      <CheckedList list={listItems} />
    </Container>
  );
}

export default FaqModalsTemplate;
