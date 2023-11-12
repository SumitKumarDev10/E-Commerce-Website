import { FoodStockWhereInput } from "./FoodStockWhereInput";
import { FoodStockOrderByInput } from "./FoodStockOrderByInput";

export type FoodStockFindManyArgs = {
  where?: FoodStockWhereInput;
  orderBy?: Array<FoodStockOrderByInput>;
  skip?: number;
  take?: number;
};
