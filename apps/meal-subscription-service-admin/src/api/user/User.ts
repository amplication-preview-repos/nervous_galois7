import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  fullName: string | null;
  id: string;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
