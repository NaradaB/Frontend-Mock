import { render, screen, cleanup } from "@testing-library/react";
import ClearButton from "../../components/ClearButton";
import { act } from "react-dom/test-utils";

test("should render ClearButton component", () => {
  render(<ClearButton></ClearButton>);
  const button = screen.getByTestId("clear-button");
  expect(button).toBeInTheDocument();
});

test("should be clicked once", () => {
  const onClick = jest.fn();
  render(<ClearButton setter={onClick}></ClearButton>);
  const button = screen.getByTestId("clear-button");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(onClick).toHaveBeenCalledTimes(1);
});
