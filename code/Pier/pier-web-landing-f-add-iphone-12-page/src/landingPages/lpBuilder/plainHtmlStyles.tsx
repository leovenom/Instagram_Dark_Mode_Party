import { css } from "styled-components";
import colors from "ui/theme/colors";

const plainHtmlStyles = css`
  max-width: 808px;
  p {
    font-size: 18px;
    line-height: 30px;

    :not(last-child) {
      margin-bottom: 24px;
    }
  }

  ul {
    list-style: none;
    margin-left: 16px;

    li {
      margin-bottom: 16px;
      font-size: 18px;
      line-height: 30px;
    }
    li::before {
      border-radius: 50%;
      background: ${({ theme }) => theme.colors.secondary300};
      font-weight: bold;

      content: "";
      width: 12px;
      height: 12px;
      display: inline-block;

      text-align: center;
      margin-left: -26px;
      margin-right: 14px;
    }
  }

  b {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.secondary600};
  }

  ol {
    list-style: none;
    counter-reset: my-awesome-counter;
    margin-left: 40px;

    li {
      counter-increment: my-awesome-counter;
      margin-bottom: 32px;
    }
    li::before {
      border-radius: 50%;
      content: counter(my-awesome-counter) " ";
      color: ${({ theme }) => theme.colors.primary};
      background: ${({ theme }) => theme.colors.secondary100};
      font-weight: bold;

      content: counter(my-awesome-counter);
      width: 24px;
      height: 24px;
      display: inline-block;
      font-size: 18px;
      line-height: 25px;
      text-align: center;
      margin-left: -48px;
      margin-right: 24px;
    }
  }

  a {
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.secondary600};
    text-decoration: underline;
  }

  blockquote {
    border-left: 5px solid ${colors.gray300};
    padding: 4px 0 4px 16px;
    font-style: italic;
    position: relative;

    p {
      color: ${colors.gray600};
    }

    ::before,
    ::after {
      color: ${colors.gray};
      font-style: normal;
      font-size: 100px;
      position: absolute;
    }

    ::before {
      content: open-quote;
      top: -35px;
    }

    ::after {
      content: close-quote;
      bottom: -100px;
      right: 0;
    }
  }
`;

export default plainHtmlStyles;
