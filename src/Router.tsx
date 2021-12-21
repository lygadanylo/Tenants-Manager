import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Tenants, TenantProfile } from "./components";
import { BASE_URL, TENANT_BY_ID } from "./utils";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={BASE_URL} element={<Tenants />} />
        <Route path={TENANT_BY_ID} element={<TenantProfile isDescription />} />
      </Routes>
    </Router>
  );
}
