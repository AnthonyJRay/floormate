import { Text } from "@chakra-ui/react";

export default function ExpenseDisplay({
  name,
  occurredOn,
  total,
  description,
}) {
  return (
    <>
      <Text p={2}>{occurredOn}</Text>
      <Text p={2}>{name}</Text>
      <Text p={2} color={"red"}>
        {total}
      </Text>
      <Text p={2}>{description}</Text>
    </>
  );
}
