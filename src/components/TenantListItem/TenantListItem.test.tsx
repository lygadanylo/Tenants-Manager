import { render, screen } from "@testing-library/react";
import { TenantListItem } from ".";
import { TenantsArray } from "../../utils/mocks";

const Tenant = TenantsArray[0];

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

function renderComponent(props: any) {
  return render(<TenantListItem {...props} />);
}

test("Tenant List Item Component", () => {
  renderComponent({ tenant: Tenant });
  expect(screen.getByTestId("user_name")).toBeInTheDocument();
  expect(screen.getByTestId("user_status").textContent).toBe(Tenant.status);
  expect(screen.getByTestId("user_type").textContent).toBe(Tenant.type);
  expect(screen.getByTestId("user_code").textContent).toBe(
    `Code: ${Tenant.code}`
  );
  const moreButton = screen.getByTestId("more_button");
  expect(moreButton).toBeInTheDocument();
});
