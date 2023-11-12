import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FoodStockCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Food Name" multiline source="foodName" />
        <NumberInput label="Food Price" source="foodPrice" />
        <NumberInput step={1} label="Food Quantity" source="foodQuantity" />
      </SimpleForm>
    </Create>
  );
};
