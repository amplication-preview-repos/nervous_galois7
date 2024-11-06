import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MealPlanModuleBase } from "./base/mealPlan.module.base";
import { MealPlanService } from "./mealPlan.service";
import { MealPlanController } from "./mealPlan.controller";
import { MealPlanResolver } from "./mealPlan.resolver";

@Module({
  imports: [MealPlanModuleBase, forwardRef(() => AuthModule)],
  controllers: [MealPlanController],
  providers: [MealPlanService, MealPlanResolver],
  exports: [MealPlanService],
})
export class MealPlanModule {}
