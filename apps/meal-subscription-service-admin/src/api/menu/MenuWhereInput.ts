import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { MealPlanWhereUniqueInput } from "../mealPlan/MealPlanWhereUniqueInput";

export type MenuWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  items?: StringNullableFilter;
  mealPlan?: MealPlanWhereUniqueInput;
  name?: StringNullableFilter;
};
