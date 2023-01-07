import { Text } from "@chakra-ui/react";

export default function ExpenseDisplay({
  name,
  occurredOn,
  total,
  description,
}) {
  const widths = ["90%", "80%", "22%"];
  return (
    <>
      <Text w={widths}>{occurredOn}</Text>
      <Text w={widths} color={"red.300"}>
        ${total}
      </Text>
      <Text w={widths}>{name}</Text>
      <Text w={widths}>{description}</Text>
    </>
  );
}
