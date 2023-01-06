import React from "react";
import { Input } from "@chakra-ui/react";

export default function SettingsInput({ name }, handleChange = () => {}) {
  console.log(handleChange);
  return (
    <Input
      id={name}
      placeholder={name}
      onChange={(e) => {
        handleChange(e);
      }}
      border={"none"}
      borderBottom={"1px"}
      fontSize={"xs"}
      fontStyle={"italic"}
    />
  );
}
