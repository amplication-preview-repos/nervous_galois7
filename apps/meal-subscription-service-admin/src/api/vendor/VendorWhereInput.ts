import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type VendorWhereInput = {
  address?: StringNullableFilter;
  contactEmail?: StringNullableFilter;
  contactPhone?: StringNullableFilter;
  id?: StringFilter;
  logo?: JsonFilter;
  name?: StringNullableFilter;
};
