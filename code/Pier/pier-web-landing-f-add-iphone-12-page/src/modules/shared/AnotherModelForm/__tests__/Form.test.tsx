import { act, fireEvent } from "@testing-library/react";
import { renderWithTheme } from "helpers/testUtils";
import { ModalManagementProvider } from "modules/shared/ModalManagement";
import AnotherModelForm from "..";

const renderComponent = () =>
  renderWithTheme(
    <ModalManagementProvider>
      <AnotherModelForm />
    </ModalManagementProvider>
  );

describe("<Form />", () => {
  test("Should render without errors", () => {
    const { queryByLabelText } = renderComponent();

    expect(queryByLabelText("Nome obrigatório")).toBeFalsy();
    expect(queryByLabelText("Email obrigatório")).toBeFalsy();
    expect(queryByLabelText("Fabricante obrigatório")).toBeFalsy();
    expect(queryByLabelText("Modelo obrigatório")).toBeFalsy();
    expect(queryByLabelText("Memória obrigatória")).toBeFalsy();
  });

  describe("When the form has not yet been filled out", () => {
    test("Should disabled the submit button", async () => {
      const { getByText, getByLabelText } = renderComponent();
      await act(async () => {
        fireEvent.click(getByLabelText("Nome completo"));
      });

      const btnSubmit = getByText("Enviar");

      expect(btnSubmit).toBeDisabled();
    });
  });
});
