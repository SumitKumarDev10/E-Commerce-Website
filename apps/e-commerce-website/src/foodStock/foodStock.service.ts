import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FoodStockServiceBase } from "./base/foodStock.service.base";

@Injectable()
export class FoodStockService extends FoodStockServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
