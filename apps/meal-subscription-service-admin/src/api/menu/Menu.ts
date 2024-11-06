import { JsonValue } from "type-fest";
import { MealPlan } from "../mealPlan/MealPlan";

export type Menu = {
  createdAt: Date;
  description: string | null;
  id: string;
  image: JsonValue;
  items: string | null;
  mealPlan?: MealPlan | null;
  name: string | null;
  updatedAt: Date;
};
