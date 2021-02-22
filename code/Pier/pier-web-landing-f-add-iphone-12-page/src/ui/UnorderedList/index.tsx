import styled from "styled-components";

const UnorderedList = styled.ul<{
  contentPath?: string;
}>`
  list-style: none;
  margin-left: 16px;

  li {
    margin-bottom: 16px;
  }
  li::before {
    border-radius: 50%;
    content: url(${(props) => props.contentPath || " "});
    background: ${({ theme }) => theme.colors.secondary300};
    font-weight: bold;

    content: url(${(props) => props.contentPath || " "});
    width: 12px;
    height: 12px;
    display: inline-block;
    line-height: 12px;
    text-align: center;
    margin-left: -26px;
    margin-right: 14px;
  }
`;

export default UnorderedList;
