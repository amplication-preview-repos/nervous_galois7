import { InputJsonValue } from "../../types";
import { MenuUpdateManyWithoutMealPlansInput } from "./MenuUpdateManyWithoutMealPlansInput";

export type MealPlanUpdateInput = {
  description?: string | null;
  duration?: number | null;
  image?: InputJsonValue;
  menus?: MenuUpdateManyWithoutMealPlansInput;
  price?: number | null;
  title?: string | null;
};
