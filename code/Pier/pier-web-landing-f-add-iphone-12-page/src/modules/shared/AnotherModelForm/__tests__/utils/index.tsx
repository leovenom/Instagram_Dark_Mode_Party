import { fireEvent } from "@testing-library/react";

const fillTheForm = (getByLabelText) => {
  fireEvent.change(getByLabelText("Nome completo"), {
    target: { value: "Luis Felipe" },
  });
  fireEvent.change(getByLabelText("Email"), {
    target: { value: "asp@gmail.com" },
  });
  fireEvent.change(getByLabelText("Fabricante"), {
    target: { value: "Fabricante" },
  });
  fireEvent.change(getByLabelText("Modelo"), { target: { value: "Modelo" } });
  fireEvent.change(getByLabelText("Memória"), { target: { value: "54GB" } });
};

export { fillTheForm };
