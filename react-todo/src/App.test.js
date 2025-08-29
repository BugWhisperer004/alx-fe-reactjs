import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Todo List heading", () => {
  render(<App />);
  expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
});

