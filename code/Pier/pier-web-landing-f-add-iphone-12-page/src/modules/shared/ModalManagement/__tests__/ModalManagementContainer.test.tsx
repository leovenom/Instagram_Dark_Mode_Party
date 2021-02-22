import { fireEvent } from "@testing-library/react";

import { renderWithTheme } from "helpers/testUtils";
import withModalManagementActions from "../hoc";
import ModalManagementContainer from "../ModalManagementContainer";
import { ModalManagementProvider } from "../ModalManagementProvider";

const FakeModal = () => <div className="teste">modal is open</div>;

const FakeAppContainer = withModalManagementActions(({ openModal }) => (
  <div>
    <ModalManagementContainer />
    <button
      onClick={() =>
        openModal({
          component: <FakeModal />,
          id: "aux-component",
          title: "Title",
        })
      }
    >
      Abrir Modal FullScreen
    </button>

    <button
      onClick={() =>
        openModal({
          component: <FakeModal />,
          id: "aux-component",
          title: "Title",
          isFullScreen: false,
        })
      }
    >
      Abrir Modal Normal
    </button>
  </div>
));

const renderComponent = () =>
  renderWithTheme(
    <ModalManagementProvider>
      <FakeAppContainer />
    </ModalManagementProvider>
  );

describe("<ModalManagementContainer />", () => {
  test("Should render without any modal", () => {
    const { queryByText } = renderComponent();

    expect(queryByText("modal is open")).toBeFalsy();
  });

  describe("When to open the modal with the full screen enabled (default)", () => {
    test("Should render with full screen layout", () => {
      const { getByText, getByTestId } = renderComponent();

      fireEvent.click(getByText("Abrir Modal FullScreen"));
      getByTestId("full-screen-layout");
    });

    describe("When the open modal function is invoked", () => {
      test("Should open the modal", () => {
        const { getByText } = renderComponent();

        fireEvent.click(getByText("Abrir Modal FullScreen"));
        getByText("modal is open");
      });
    });

    describe("When the close modal function is invoked", () => {
      test("Should close the modal", () => {
        const { queryByText, getByText, getByTestId } = renderComponent();

        fireEvent.click(getByText("Abrir Modal FullScreen"));
        getByText("modal is open");

        fireEvent.click(getByTestId("close-modal"));
        expect(queryByText("modal is open")).toBeFalsy();
      });
    });
  });

  describe("When to open the modal with the full screen disabled", () => {
    test("Should render with default layout screen", () => {
      const { getByText, getByTestId } = renderComponent();

      fireEvent.click(getByText("Abrir Modal Normal"));
      getByTestId("default-layout-screen");
    });

    describe("When the open modal function is invoked", () => {
      test("Should open the modal", () => {
        const { getByText } = renderComponent();

        fireEvent.click(getByText("Abrir Modal Normal"));
        getByText("modal is open");
      });
    });
  });
});
