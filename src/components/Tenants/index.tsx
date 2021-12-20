import { useEffect } from "react";
import { TenantListItem } from "../TenantListItem";
import { getTenantsList } from "../../utils/api";

export const Tenants = () => {
  useEffect(() => {
    getTenantsList();
  }, []);

  return <h1>asd</h1>;
};
