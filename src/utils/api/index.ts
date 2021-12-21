import axios from "axios";
import { Tenant } from "../interfaces";
import { GET_TENENTS_LIST_URL } from "../constants";

export function getTenantsList(): Promise<Tenant[]> {
  return axios.get(GET_TENENTS_LIST_URL).then((response) => response.data);
}
