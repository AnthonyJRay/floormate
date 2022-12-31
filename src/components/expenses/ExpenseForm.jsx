import { Input } from "@chakra-ui/react";

export default function ExpenseForm({ value, onChange = () => {} }) {
  const { name, occurredOn, total, description } = value;
  return (
    <>
      <Input
        id={"occurredOn"}
        placeholder={"Expense Date"}
        value={occurredOn}
        onChange={(e) => onChange({ ...value, occurredOn: e.target.value })}
        m={2}
      />

      <Input
        id={"name"}
        placeholder={"Expense Name"}
        value={name}
        onChange={(e) => onChange({ ...value, name: e.target.value })}
        m={2}
      />

      <Input
        id={"total"}
        placeholder={"Expense Total"}
        value={total}
        onChange={(e) => onChange({ ...value, total: e.target.value })}
        m={2}
      />

      <Input
        id={"description"}
        placeholder={"Expense Description"}
        value={description}
        onChange={(e) => onChange({ ...value, description: e.target.value })}
        m={2}
      />
    </>
  );
}
