import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  fullName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
