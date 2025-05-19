import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../components/Header";
import RestaurantMenus from "../components/RestaurantMenus";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import MOCK_DATA from "../../mocks/resMenuMockData.json";
import { act } from "react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Cart from "../components/Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenus />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Non Veg Pizza (11)");
  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(11);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });

  fireEvent.click(addBtns[0]);

  fireEvent.click(addBtns[1]);
  const headerCart = screen.getByText("2");

  expect(headerCart).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(13);
  const clearBtn = screen.getByRole("button", { name: "Clear Cart" });
  expect(clearBtn).toBeInTheDocument();
  fireEvent.click(clearBtn);

  expect(screen.getAllByTestId("foodItems").length).toBe(11);
  expect(
    screen.getByText("Cart is Empty!! Start adding product")
  ).toBeInTheDocument();
});
