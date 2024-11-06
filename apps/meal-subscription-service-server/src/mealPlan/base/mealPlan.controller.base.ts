/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { MealPlanService } from "../mealPlan.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { MealPlanCreateInput } from "./MealPlanCreateInput";
import { MealPlan } from "./MealPlan";
import { MealPlanFindManyArgs } from "./MealPlanFindManyArgs";
import { MealPlanWhereUniqueInput } from "./MealPlanWhereUniqueInput";
import { MealPlanUpdateInput } from "./MealPlanUpdateInput";
import { MenuFindManyArgs } from "../../menu/base/MenuFindManyArgs";
import { Menu } from "../../menu/base/Menu";
import { MenuWhereUniqueInput } from "../../menu/base/MenuWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class MealPlanControllerBase {
  constructor(
    protected readonly service: MealPlanService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: MealPlan })
  @nestAccessControl.UseRoles({
    resource: "MealPlan",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createMealPlan(
    @common.Body() data: MealPlanCreateInput
  ): Promise<MealPlan> {
    return await this.service.createMealPlan({
      data: data,
      select: {
        createdAt: true,
        description: true,
        duration: true,
        id: true,
        image: true,
        price: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [MealPlan] })
  @ApiNestedQuery(MealPlanFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "MealPlan",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async mealPlans(@common.Req() request: Request): Promise<MealPlan[]> {
    const args = plainToClass(MealPlanFindManyArgs, request.query);
    return this.service.mealPlans({
      ...args,
      select: {
        createdAt: true,
        description: true,
        duration: true,
        id: true,
        image: true,
        price: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: MealPlan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MealPlan",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async mealPlan(
    @common.Param() params: MealPlanWhereUniqueInput
  ): Promise<MealPlan | null> {
    const result = await this.service.mealPlan({
      where: params,
      select: {
        createdAt: true,
        description: true,
        duration: true,
        id: true,
        image: true,
        price: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: MealPlan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MealPlan",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateMealPlan(
    @common.Param() params: MealPlanWhereUniqueInput,
    @common.Body() data: MealPlanUpdateInput
  ): Promise<MealPlan | null> {
    try {
      return await this.service.updateMealPlan({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          duration: true,
          id: true,
          image: true,
          price: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: MealPlan })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "MealPlan",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteMealPlan(
    @common.Param() params: MealPlanWhereUniqueInput
  ): Promise<MealPlan | null> {
    try {
      return await this.service.deleteMealPlan({
        where: params,
        select: {
          createdAt: true,
          description: true,
          duration: true,
          id: true,
          image: true,
          price: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/menus")
  @ApiNestedQuery(MenuFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Menu",
    action: "read",
    possession: "any",
  })
  async findMenus(
    @common.Req() request: Request,
    @common.Param() params: MealPlanWhereUniqueInput
  ): Promise<Menu[]> {
    const query = plainToClass(MenuFindManyArgs, request.query);
    const results = await this.service.findMenus(params.id, {
      ...query,
      select: {
        createdAt: true,
        description: true,
        id: true,
        image: true,
        items: true,

        mealPlan: {
          select: {
            id: true,
          },
        },

        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/menus")
  @nestAccessControl.UseRoles({
    resource: "MealPlan",
    action: "update",
    possession: "any",
  })
  async connectMenus(
    @common.Param() params: MealPlanWhereUniqueInput,
    @common.Body() body: MenuWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menus: {
        connect: body,
      },
    };
    await this.service.updateMealPlan({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/menus")
  @nestAccessControl.UseRoles({
    resource: "MealPlan",
    action: "update",
    possession: "any",
  })
  async updateMenus(
    @common.Param() params: MealPlanWhereUniqueInput,
    @common.Body() body: MenuWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menus: {
        set: body,
      },
    };
    await this.service.updateMealPlan({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/menus")
  @nestAccessControl.UseRoles({
    resource: "MealPlan",
    action: "update",
    possession: "any",
  })
  async disconnectMenus(
    @common.Param() params: MealPlanWhereUniqueInput,
    @common.Body() body: MenuWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      menus: {
        disconnect: body,
      },
    };
    await this.service.updateMealPlan({
      where: params,
      data,
      select: { id: true },
    });
  }
}