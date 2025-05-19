import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("comtact us comp test grouped", () => {
  // beforeAll(() => {
  //   console.log("before All");
  // });
  // beforeEach(() => {
  //   console.log("before Each");
  // });
  // afterAll(() => {
  //   console.log("after All");
  // });
  // afterEach(() => {
  //   console.log("after Each");
  // });

  test("should load conatct comp", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("should load button in conatct comp", () => {
    render(<Contact />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should load input in conatct comp", () => {
    render(<Contact />);
    const input = screen.getAllByRole("textbox");

    expect(input.length).toBe(2);
  });
});
