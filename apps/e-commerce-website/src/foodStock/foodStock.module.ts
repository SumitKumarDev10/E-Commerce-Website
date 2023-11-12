import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FoodStockModuleBase } from "./base/foodStock.module.base";
import { FoodStockService } from "./foodStock.service";
import { FoodStockController } from "./foodStock.controller";
import { FoodStockResolver } from "./foodStock.resolver";

@Module({
  imports: [FoodStockModuleBase, forwardRef(() => AuthModule)],
  controllers: [FoodStockController],
  providers: [FoodStockService, FoodStockResolver],
  exports: [FoodStockService],
})
export class FoodStockModule {}
