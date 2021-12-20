import { UserStatus, UserType } from "../enums";

export interface Tenant {
  id: string;
  name: string;
  description: string;
  code: string;
  type: UserType;
  status: UserStatus;
}
