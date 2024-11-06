import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MEALPLAN_TITLE_FIELD } from "../mealPlan/MealPlanTitle";

export const MenuList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Menus"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="image" source="image" />
        <TextField label="items" source="items" />
        <ReferenceField
          label="MealPlan"
          source="mealplan.id"
          reference="MealPlan"
        >
          <TextField source={MEALPLAN_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};
