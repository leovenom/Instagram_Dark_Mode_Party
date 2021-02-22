import renderer from "react-test-renderer";
import { render } from "@testing-library/react";
import Rating from "ui/Rating";
import * as Stars from "ui/Rating/Stars";

describe("Rating", () => {
  test("renders correctly", () => {
    const tree = renderer.create(<Rating score={3.4} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("renders the correct amount of full, half, and empty stars", () => {
    const mockRenderStars = jest.spyOn(Stars, "renderStars");

    render(<Rating score={2.2} />);
    expect(mockRenderStars).toHaveBeenCalledTimes(3);
    expect(mockRenderStars.mock.calls[0][0]).toEqual({
      state: "FULL",
      numberOfStars: 2,
      starsColor: "secondary",
    });
    expect(mockRenderStars.mock.calls[1][0]).toEqual({
      state: "HALF",
      numberOfStars: 1,
      starsColor: "secondary",
    });
    expect(mockRenderStars.mock.calls[2][0]).toEqual({
      state: "EMPTY",
      numberOfStars: 2,
    });

    mockRenderStars.mockRestore();
  });

  test("renders 5 empty stars when negative number is provided", () => {
    const mockRenderStars = jest.spyOn(Stars, "renderStars");

    render(<Rating score={-1} />);

    expect(mockRenderStars).toHaveBeenCalledTimes(3);
    expect(mockRenderStars.mock.calls[0][0]).toEqual({
      state: "FULL",
      numberOfStars: 0,
      starsColor: "secondary",
    });
    expect(mockRenderStars.mock.calls[1][0]).toEqual({
      state: "HALF",
      numberOfStars: 0,
      starsColor: "secondary",
    });
    expect(mockRenderStars.mock.calls[2][0]).toEqual({
      state: "EMPTY",
      numberOfStars: 5,
    });

    mockRenderStars.mockRestore();
  });
});
