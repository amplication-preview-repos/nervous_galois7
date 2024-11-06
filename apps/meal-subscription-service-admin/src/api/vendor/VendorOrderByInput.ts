import { SortOrder } from "../../util/SortOrder";

export type VendorOrderByInput = {
  address?: SortOrder;
  contactEmail?: SortOrder;
  contactPhone?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  logo?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
