import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { MenuListRelationFilter } from "../menu/MenuListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type MealPlanWhereInput = {
  description?: StringNullableFilter;
  duration?: IntNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  menus?: MenuListRelationFilter;
  price?: FloatNullableFilter;
  title?: StringNullableFilter;
};
