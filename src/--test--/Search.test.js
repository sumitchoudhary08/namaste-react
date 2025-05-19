import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../components/Body";
import MOCK_DATA from "../../mocks/resListMockData.json";
//import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render body with search input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "search" });
  const searchInput = screen.getByTestId("searchInput");
  const restCardBeforeSearch = screen.getAllByTestId("restCard");
  expect(restCardBeforeSearch.length).toBe(8);

  fireEvent.change(searchInput, { target: { value: "pizza" } });
  fireEvent.click(searchBtn);
  const restCardAterSearch = screen.getAllByTestId("restCard");
  expect(restCardAterSearch.length).toBe(2);
  //expect(searchBtn).toBeInTheDocument();
});

it("should render top rated rest", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const topRestBtn = screen.getByRole("button", { name: "Top Restaurant" });
  expect(topRestBtn).toBeInTheDocument();
  fireEvent.click(topRestBtn);

  const restCard = screen.getAllByTestId("restCard");
  expect(restCard.length).toBe(7);
});
