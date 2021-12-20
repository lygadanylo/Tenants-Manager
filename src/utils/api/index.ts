import axios from "axios";
import { Tenant } from "../interfaces";

export function getTenantsList(): Promise<Tenant[]> {
  return axios
    .get("https://hungry-skinny-cappelletti.glitch.me/tenants")
    .then((response) => response.data);
}
