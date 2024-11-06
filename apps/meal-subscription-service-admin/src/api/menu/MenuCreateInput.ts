import { InputJsonValue } from "../../types";
import { MealPlanWhereUniqueInput } from "../mealPlan/MealPlanWhereUniqueInput";

export type MenuCreateInput = {
  description?: string | null;
  image?: InputJsonValue;
  items?: string | null;
  mealPlan?: MealPlanWhereUniqueInput | null;
  name?: string | null;
};
