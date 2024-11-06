import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MealPlanTitle } from "../mealPlan/MealPlanTitle";

export const MenuCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <div />
        <TextInput label="items" multiline source="items" />
        <ReferenceInput
          source="mealPlan.id"
          reference="MealPlan"
          label="MealPlan"
        >
          <SelectInput optionText={MealPlanTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
