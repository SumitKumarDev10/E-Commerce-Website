import { Decimal } from "decimal.js";

export type FoodStockCreateInput = {
  foodName?: string | null;
  foodPrice: Decimal;
  foodQuantity?: number | null;
};
