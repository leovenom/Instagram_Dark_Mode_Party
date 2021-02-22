import ExternalLink from "ui/ExternalLink";
import Text from "ui/Text";

import { TemplateFooter } from "../styles";

const HelpBar = ({
  label,
  onLinkClick,
  href,
}: {
  label: string;
  onLinkClick: () => void;
  href: string;
}) => {
  return (
    <TemplateFooter>
      <Text variant="body" color="primary">
        <span>🤔</span> {label}{" "}
        <ExternalLink onClick={onLinkClick} color={"primary"} href={href}>
          Veja aqui
        </ExternalLink>
      </Text>
    </TemplateFooter>
  );
};

export default HelpBar;
