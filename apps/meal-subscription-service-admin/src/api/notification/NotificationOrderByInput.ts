import { SortOrder } from "../../util/SortOrder";

export type NotificationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  sentDate?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
