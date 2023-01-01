import { Input, FormLabel, Box } from "@chakra-ui/react";

export default function ExpenseForm({ value, onChange = () => {} }) {
  const { name, occurredOn, total, description } = value;
  return (
    <>
      <Box m={2}>
        <FormLabel
          fontStyle={"italic"}
          fontSize={".80rem"}
          width={"100%"}
          textAlign={"start"}
        >
          Date
        </FormLabel>
        <Input
          id={"occurredOn"}
          placeholder={"Expense Date"}
          value={occurredOn}
          onChange={(e) => onChange({ ...value, occurredOn: e.target.value })}
        />
      </Box>

      <Box m={2}>
        <FormLabel
          fontStyle={"italic"}
          fontSize={".80rem"}
          width={"100%"}
          textAlign={"start"}
        >
          Name
        </FormLabel>
        <Input
          id={"name"}
          placeholder={"Expense Name"}
          value={name}
          onChange={(e) => onChange({ ...value, name: e.target.value })}
        />
      </Box>

      <Box m={2}>
        <FormLabel
          fontStyle={"italic"}
          fontSize={".80rem"}
          width={"100%"}
          textAlign={"start"}
        >
          Total
        </FormLabel>
        <Input
          id={"total"}
          placeholder={"Expense Total"}
          value={total}
          onChange={(e) => onChange({ ...value, total: e.target.value })}
        />
      </Box>

      <Box m={2}>
        <FormLabel
          fontStyle={"italic"}
          fontSize={".80rem"}
          width={"100%"}
          textAlign={"start"}
        >
          Description
        </FormLabel>
        <Input
          id={"description"}
          placeholder={"Expense Description"}
          value={description}
          onChange={(e) => onChange({ ...value, description: e.target.value })}
        />
      </Box>
    </>
  );
}
