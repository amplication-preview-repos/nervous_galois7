import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  fullName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
