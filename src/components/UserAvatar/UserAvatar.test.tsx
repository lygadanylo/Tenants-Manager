import { render } from "@testing-library/react";
import { UserAvatar } from ".";

function renderComponent(props: any) {
  return render(<UserAvatar {...props} />);
}

test("Tenant Skeleton Component", () => {
  const screen = renderComponent({ name: "Brus Li" });
  expect(screen.getByText("BL")).toBeInTheDocument();
});
