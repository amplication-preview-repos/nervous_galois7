import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const VendorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="contactEmail" source="contactEmail" type="email" />
        <TextInput label="contactPhone" source="contactPhone" />
        <div />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
