import { fireEvent } from "@testing-library/react";

import { renderWithTheme } from "../../../helpers/testUtils";
import Button from "../.";

describe("Button", () => {
  it("should render button element with correct text", () => {
    const { container, getByText } = renderWithTheme(<Button>Pier</Button>);

    expect(container).toBeDefined();
    expect(container.querySelector("button")).toBeDefined();
    expect(getByText("Pier")).toBeDefined();
  });

  it("calls onClick function prop ", () => {
    const mockOnClick = jest.fn();

    const { getByText } = renderWithTheme(
      <Button onClick={mockOnClick}>Submit</Button>
    );

    fireEvent.click(getByText("Submit"));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("should not call onClick when it`s disabled", () => {
    const mockOnClick = jest.fn();

    const { getByText } = renderWithTheme(
      <Button onClick={mockOnClick} disabled>
        Submit
      </Button>
    );

    const buttonElement = getByText("Submit");

    fireEvent.click(buttonElement);

    expect(buttonElement).toHaveAttribute("disabled");
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
