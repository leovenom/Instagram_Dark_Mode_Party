import { createContext, useState, useContext } from "react";
import styled, { css } from "styled-components";

import breakpoints from "../theme/breakpoints";

const ToastContainer = styled.aside<{ shouldOpen: boolean }>`
  // Box Model
  display: block;
  width: 100%;
  padding: 20px 24px;
  box-sizing: border-box;

  //Position
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1041;
  transform: translateY(-100%);
  transition: transform 0.5s ease-out;

  ${(props) =>
    props.shouldOpen &&
    css`
      transform: translateY(0%);
    `};

  // Visual
  background-color: ${({ theme }) => theme.colors.lightRed};
`;

const TextContent = styled.p`
  // Box Model
  margin: 0;
  padding: 0;

  // Typography
  font-size: 15px;
  line-height: 22px;
  color: ${({ theme }) => theme.colors.text};
  word-break: break-word;

  ${breakpoints.tablet} {
    // Typography
    text-align: center;
  }
`;

const APPEARANCE_TIME_IN_MILISECONDS = 6000;

const ToastFeedbackContext = createContext(undefined);
export const useToast = () => useContext(ToastFeedbackContext);

export const ToastProvider = ({ children }) => {
  const [shouldShowToast, setToast] = useState(false);
  const [textContent, setTextMsg] = useState("");

  const error = (msg) => {
    if (!shouldShowToast) {
      setTextMsg(msg);
      setToast(true);

      setTimeout(() => {
        setToast(false);
      }, APPEARANCE_TIME_IN_MILISECONDS);
    }
  };

  return (
    <ToastFeedbackContext.Provider value={{ error }}>
      <ToastContainer shouldOpen={shouldShowToast}>
        <TextContent>{textContent}</TextContent>
      </ToastContainer>
      {children}
    </ToastFeedbackContext.Provider>
  );
};
