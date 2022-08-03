import { render, screen, cleanup } from "@testing-library/react";
import Activity from "../../components/Activity";
import renderer from "react-test-renderer";

let activity = {
  id: 1,
  name: "Diving",
  start_time: "9:00",
  end_time: "10:00",
  level: "Experienced",
  location: "Swimming pool 2",
  facility_id: 84,
  tags: [
    {
      id: 540,
      name: "Swimming",
    },
  ],
};

afterEach(() => {
  cleanup();
});

test("should render Activity component", () => {
  render(<Activity activity={activity}></Activity>);
  const activityElement = screen.getByTestId("activity");
  expect(activityElement).toBeInTheDocument();
});

test("should render correct Activity name", () => {
  render(<Activity activity={activity}></Activity>);
  const activityElement = screen.getByTestId("activity-name-and-level");
  expect(activityElement).toHaveTextContent("Diving (Experienced)");
});

test("should render correct Activity location", () => {
  render(<Activity activity={activity}></Activity>);
  const activityElement = screen.getByTestId("activity-name-and-level");
  expect(activityElement).toHaveTextContent("Diving (Experienced)");
});

test("should render correct Activity start and end times", () => {
  render(<Activity activity={activity}></Activity>);
  const activityElement = screen.getByTestId("activity-start-end");
  expect(activityElement).toHaveTextContent("9:00 - 10:00");
});

test("matches snapshot", () => {
  const tree = renderer
    .create(<Activity activity={activity}></Activity>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
