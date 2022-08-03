import { render, screen, cleanup } from "@testing-library/react";
import DropDown from "../../components/DropDown";

test("should render dropdown component", () => {
  let tags = ["One", "Two", "Three", "Four"];
  render(<DropDown tags={tags} setter={"Dummy"} currentTag={"Two"}></DropDown>);
  const dropDownElement = screen.getByTestId("dropdown-1");
  expect(dropDownElement).toBeInTheDocument();
});

test("should render the correct currentTag", () => {
  let tags = ["One", "Two", "Three", "Four"];
  render(<DropDown tags={tags} setter={"Dummy"} currentTag={"Two"}></DropDown>);
  const dropDownElement = screen.getByTestId("dropdown-1");
  expect(dropDownElement).toHaveTextContent("Two");
});
