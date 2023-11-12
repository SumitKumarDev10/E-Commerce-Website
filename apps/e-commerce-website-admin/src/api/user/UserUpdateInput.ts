import { Decimal } from "decimal.js";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  credit?: Decimal;
  firstName?: string | null;
  lastName?: string;
  password?: string;
  purchaseHistory?: InputJsonValue;
  roles?: InputJsonValue;
  username?: string;
};
