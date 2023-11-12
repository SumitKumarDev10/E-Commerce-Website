import { DecimalFilter } from "../../util/DecimalFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type UserWhereInput = {
  credit?: DecimalFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringFilter;
  purchaseHistory?: JsonFilter;
  username?: StringFilter;
};
