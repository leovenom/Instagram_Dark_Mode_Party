import Icon from "ui/Icon";
import { TemplateStructure } from "./";

const ListItem = ({
  onClick,
  value,
}: {
  onClick: (value) => void;
  value: string;
}) => {
  return (
    <TemplateStructure.ListItem handleOnClick={() => onClick(value)}>
      {value}
      <Icon name="chevronRight" size={14} fill="primary" />
    </TemplateStructure.ListItem>
  );
};

export default ListItem;
