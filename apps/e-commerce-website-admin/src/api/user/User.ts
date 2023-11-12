import { Decimal } from "decimal.js";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  credit: Decimal;
  firstName: string | null;
  id: string;
  lastName: string;
  purchaseHistory: JsonValue;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
