import { InputJsonValue } from "../../types";

export type VendorUpdateInput = {
  address?: string | null;
  contactEmail?: string | null;
  contactPhone?: string | null;
  logo?: InputJsonValue;
  name?: string | null;
};
