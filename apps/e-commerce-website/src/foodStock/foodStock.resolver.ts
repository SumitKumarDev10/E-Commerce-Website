import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FoodStockResolverBase } from "./base/foodStock.resolver.base";
import { FoodStock } from "./base/FoodStock";
import { FoodStockService } from "./foodStock.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FoodStock)
export class FoodStockResolver extends FoodStockResolverBase {
  constructor(
    protected readonly service: FoodStockService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
