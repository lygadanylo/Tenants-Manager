import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/tenants List/i);
  expect(linkElement).toBeInTheDocument();
  expect(window.location.pathname).toEqual("/");
  // screen.debug();
});
