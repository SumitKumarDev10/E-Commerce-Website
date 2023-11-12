import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FoodStockWhereInput = {
  foodName?: StringNullableFilter;
  foodPrice?: DecimalFilter;
  foodQuantity?: IntNullableFilter;
  id?: StringFilter;
};
