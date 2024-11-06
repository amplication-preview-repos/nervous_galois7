import { InputJsonValue } from "../../types";
import { MenuCreateNestedManyWithoutMealPlansInput } from "./MenuCreateNestedManyWithoutMealPlansInput";

export type MealPlanCreateInput = {
  description?: string | null;
  duration?: number | null;
  image?: InputJsonValue;
  menus?: MenuCreateNestedManyWithoutMealPlansInput;
  price?: number | null;
  title?: string | null;
};
