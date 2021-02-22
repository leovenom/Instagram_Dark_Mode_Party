import styled from "styled-components";
import { storiesOf } from "@storybook/react";
import useModal from "../../hooks/useModal";
import Button from "../Button";

import FullScreenModal from "./FullScreenModal";
import Modal from ".";

const Text = styled.p`
  display: flex;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  padding: 16px;
  margin-top: 16px;
`;

storiesOf("Components | Modal", module)
  .add("Simple Modal", () => {
    const { isOpen, toggle } = useModal();

    return (
      <div>
        <Button onClick={toggle}> Abrir Modal</Button>
        <Modal
          title="Seu celular segurado por quem se importa"
          onConfirm={() => null}
          buttonText="Enviar"
          isOpen={isOpen}
          hide={toggle}
          contentLabel="Exemplo de Modal básico que preenche toda a tela"
        >
          <Text>Pier Digital</Text>
        </Modal>
      </div>
    );
  })
  .add("Full Screen Modal", () => {
    const { isOpen, toggle } = useModal();

    return (
      <div>
        <Button onClick={toggle}> Abrir Modal Tela Cheia</Button>
        <FullScreenModal
          isOpen={isOpen}
          hide={toggle}
          contentLabel="Exemplo de Modal básico que preenche toda a tela"
        >
          <Text>
            A Pier é uma maneira simples para quem quer compartilhar riscos com
            seus pares.
          </Text>
        </FullScreenModal>
      </div>
    );
  });
