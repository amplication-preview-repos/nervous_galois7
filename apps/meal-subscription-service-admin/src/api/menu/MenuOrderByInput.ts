import { SortOrder } from "../../util/SortOrder";

export type MenuOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  items?: SortOrder;
  mealPlanId?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
