import { render } from "@testing-library/react";
import { TenantSkeleton } from ".";

function renderComponent(props: any) {
  return render(<TenantSkeleton {...props} />);
}

test("Tenant Skeleton Component", () => {
  const screen = renderComponent({});
  expect(screen.container.querySelectorAll(".MuiSkeleton-root")).toHaveLength(
    8
  );
});
