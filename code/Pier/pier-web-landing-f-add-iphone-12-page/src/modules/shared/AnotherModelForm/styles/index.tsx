import styled from "styled-components";

const Container = styled.section`
  position: relative;
`;
const InputContainer = styled.div`
  padding-top: 24px;
`;

const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
`;

const CloseButton = styled.button`
  width: 40px;
  height: 25px;
  position: absolute;
  right: 0;
  top: 0;
  background: transparent;
  border: none;
  box-shadow: none;
  cursor: pointer;
`;

// Copy from Modal Stlyes
const TitleText = styled.h3`
  padding: 0;
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #322f42;
  line-height: 24px;
  margin-bottom: 30px;
`;

export { InputContainer, SuccessContainer, CloseButton, Container, TitleText };
