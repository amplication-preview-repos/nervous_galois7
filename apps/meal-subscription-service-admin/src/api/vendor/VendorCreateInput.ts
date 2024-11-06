import { InputJsonValue } from "../../types";

export type VendorCreateInput = {
  address?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  logo?: InputJsonValue;
  name?: string | null;
};
