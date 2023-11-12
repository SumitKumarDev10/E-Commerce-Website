import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FoodStockService } from "./foodStock.service";
import { FoodStockControllerBase } from "./base/foodStock.controller.base";

@swagger.ApiTags("foodStocks")
@common.Controller("foodStocks")
export class FoodStockController extends FoodStockControllerBase {
  constructor(
    protected readonly service: FoodStockService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
