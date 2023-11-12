import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const FoodStockEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Food Name" multiline source="foodName" />
        <NumberInput label="Food Price" source="foodPrice" />
        <NumberInput step={1} label="Food Quantity" source="foodQuantity" />
      </SimpleForm>
    </Edit>
  );
};
