import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MealPlanService } from "./mealPlan.service";
import { MealPlanControllerBase } from "./base/mealPlan.controller.base";

@swagger.ApiTags("mealPlans")
@common.Controller("mealPlans")
export class MealPlanController extends MealPlanControllerBase {
  constructor(
    protected readonly service: MealPlanService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
