import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { MealPlanTitle } from "../mealPlan/MealPlanTitle";

export const MenuEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
