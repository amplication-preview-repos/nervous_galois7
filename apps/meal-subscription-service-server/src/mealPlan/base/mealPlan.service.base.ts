/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  MealPlan as PrismaMealPlan,
  Menu as PrismaMenu,
} from "@prisma/client";

export class MealPlanServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.MealPlanCountArgs, "select">): Promise<number> {
    return this.prisma.mealPlan.count(args);
  }

  async mealPlans(
    args: Prisma.MealPlanFindManyArgs
  ): Promise<PrismaMealPlan[]> {
    return this.prisma.mealPlan.findMany(args);
  }
  async mealPlan(
    args: Prisma.MealPlanFindUniqueArgs
  ): Promise<PrismaMealPlan | null> {
    return this.prisma.mealPlan.findUnique(args);
  }
  async createMealPlan(
    args: Prisma.MealPlanCreateArgs
  ): Promise<PrismaMealPlan> {
    return this.prisma.mealPlan.create(args);
  }
  async updateMealPlan(
    args: Prisma.MealPlanUpdateArgs
  ): Promise<PrismaMealPlan> {
    return this.prisma.mealPlan.update(args);
  }
  async deleteMealPlan(
    args: Prisma.MealPlanDeleteArgs
  ): Promise<PrismaMealPlan> {
    return this.prisma.mealPlan.delete(args);
  }

  async findMenus(
    parentId: string,
    args: Prisma.MenuFindManyArgs
  ): Promise<PrismaMenu[]> {
    return this.prisma.mealPlan
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .menus(args);
  }
}
