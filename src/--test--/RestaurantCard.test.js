import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../../mocks/resCardMockData.json";
import RestaurantCard, {
  withPromotedLabel,
} from "../components/RestaurantCard";
import "@testing-library/jest-dom";

test("should render restaruant card with mockdata", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});

test("should render rest card with promoted label", () => {
  const WrappedComponent = withPromotedLabel(RestaurantCard);
  render(<WrappedComponent resData={MOCK_DATA} />);
  const label = screen.getByText("Promoted");

  expect(label).toBeInTheDocument();
});
