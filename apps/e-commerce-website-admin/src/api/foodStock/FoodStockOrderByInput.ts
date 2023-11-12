import { SortOrder } from "../../util/SortOrder";

export type FoodStockOrderByInput = {
  createdAt?: SortOrder;
  foodName?: SortOrder;
  foodPrice?: SortOrder;
  foodQuantity?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
