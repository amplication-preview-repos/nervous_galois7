import { JsonValue } from "type-fest";

export type Vendor = {
  address: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  createdAt: Date;
  id: string;
  logo: JsonValue;
  name: string | null;
  updatedAt: Date;
};
