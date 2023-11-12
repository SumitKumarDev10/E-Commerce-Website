import { FoodStock as TFoodStock } from "../api/foodStock/FoodStock";

export const FOODSTOCK_TITLE_FIELD = "foodName";

export const FoodStockTitle = (record: TFoodStock): string => {
  return record.foodName?.toString() || String(record.id);
};
