import { MealPlan as TMealPlan } from "../api/mealPlan/MealPlan";

export const MEALPLAN_TITLE_FIELD = "title";

export const MealPlanTitle = (record: TMealPlan): string => {
  return record.title?.toString() || String(record.id);
};
