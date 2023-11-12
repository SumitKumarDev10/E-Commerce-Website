import { Decimal } from "decimal.js";

export type FoodStock = {
  createdAt: Date;
  foodName: string | null;
  foodPrice: Decimal;
  foodQuantity: number | null;
  id: string;
  updatedAt: Date;
};
