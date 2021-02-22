import * as React from "react";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import styled from "styled-components";

import plainHtmlStyles from "landingPages/lpBuilder/plainHtmlStyles";

const MarkdownStyles = styled(ReactMarkdown)`
  ${plainHtmlStyles}
`;

const TextContainer = styled.div`
  ${plainHtmlStyles}
`;

function isBodyHTML(bodyText: string): boolean {
  return /.*<.+>.*<\/.+>/.test(bodyText);
}

interface Props {
  children: React.ReactNode;
}

function Markdown({ children }: Props) {
  if (typeof children != "string") return null;

  if (isBodyHTML(children))
    return <TextContainer dangerouslySetInnerHTML={{ __html: children }} />;

  return <MarkdownStyles plugins={[gfm]}>{children}</MarkdownStyles>;
}

export default Markdown;
