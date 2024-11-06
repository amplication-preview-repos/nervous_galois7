import { MealPlanWhereInput } from "./MealPlanWhereInput";
import { MealPlanOrderByInput } from "./MealPlanOrderByInput";

export type MealPlanFindManyArgs = {
  where?: MealPlanWhereInput;
  orderBy?: Array<MealPlanOrderByInput>;
  skip?: number;
  take?: number;
};
