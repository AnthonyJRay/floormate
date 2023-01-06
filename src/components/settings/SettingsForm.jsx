import React from "react";
import { Input, ListItem, FormLabel } from "@chakra-ui/react";

export default function SettingsForm({ name, handleChange = () => {} }) {
  return (
    <ListItem p={1}>
      <FormLabel fontSize={"sm"}>{name}</FormLabel>
      <Input
        id={name.toLowerCase()}
        placeholder={name}
        onChange={(e) => handleChange(e)}
        border={"none"}
        borderBottom={"1px"}
        borderRadius={3}
        fontSize={"xs"}
        fontStyle={"italic"}
      />
    </ListItem>
  );
}
