import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Tenants } from "./components";
import { BASE_URL } from "./utils";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path={BASE_URL} element={<Tenants />} />
      </Routes>
    </Router>
  );
}
