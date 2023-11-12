import { Decimal } from "decimal.js";

export type FoodStockUpdateInput = {
  foodName?: string | null;
  foodPrice?: Decimal;
  foodQuantity?: number | null;
};
