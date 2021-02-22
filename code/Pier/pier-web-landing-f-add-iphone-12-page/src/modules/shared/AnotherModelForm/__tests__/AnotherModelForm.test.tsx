import { act, fireEvent } from "@testing-library/react";

import { renderWithTheme } from "helpers/testUtils";
import { ModalManagementProvider } from "modules/shared/ModalManagement";
import { ToastProvider } from "ui/Toast";
import AnotherModelForm from "..";
import { submitToWaitingList } from "../utils";
import { fillTheForm } from "./utils";

jest.mock("../utils/functions");
let submitAsyncMock = submitToWaitingList as jest.Mock;

const responseApiMock = ({ successResponse = true, response = false }) => {
  submitAsyncMock.mockImplementation(() => {
    if (!successResponse) {
      throw "error";
    }
    return response;
  });
};

const renderComponent = () =>
  renderWithTheme(
    <ToastProvider>
      <ModalManagementProvider>
        <AnotherModelForm />
      </ModalManagementProvider>
    </ToastProvider>
  );

describe("<AnotherModelForm />", () => {
  test("Should render with form component", () => {
    const { getByTestId } = renderComponent();
    getByTestId("form-component");
  });

  describe("When submit the form", () => {
    describe("With a success response", () => {
      test("Should render the success component", async () => {
        responseApiMock({ successResponse: true });
        const { getByLabelText, getByText, getByTestId } = renderComponent();
        fillTheForm(getByLabelText);

        await act(async () => {
          fireEvent.click(getByText("Enviar"));
        });

        getByTestId("success-component");
      });
    });

    describe("With a failed response", () => {
      test("Should render a toast with failed message", async () => {
        responseApiMock({ successResponse: false });
        const { getByLabelText, getByText } = renderComponent();
        fillTheForm(getByLabelText);

        await act(async () => {
          fireEvent.click(getByText("Enviar"));
        });

        getByText(
          "Oops!! Algo deu errado! 😢 Tente novamente ou entre em contato com o suporte."
        );
      });
    });
  });
});
