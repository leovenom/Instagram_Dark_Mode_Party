import Button from ".";

import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";

storiesOf("Components|Button", module)
  .add("Basic example", () => (
    <Button onClick={action("Você clicou no Botão")}>Conheça a Pier</Button>
  ))
  .add("Primary Button", () => (
    <div>
      <Button>Conheça a Pier</Button>
    </div>
  ))
  .add("Full Width", () => (
    <div>
      <Button fullWidth>Iniciar</Button>
    </div>
  ))
  .add("Cta Button", () => (
    <div>
      <Button variant="secondary">Pedir convite</Button>
    </div>
  ))
  .add("Left Icon", () => (
    <div>
      <Button icon="lock">Pagar</Button>
    </div>
  ))
  .add("Facebook", () => (
    <div>
      <Button variant="facebook">Continuar com Facebook</Button>
    </div>
  ))
  .add("Disabled Button", () => (
    <div>
      <Button disabled>Botão Desabilitado</Button>
    </div>
  ));
