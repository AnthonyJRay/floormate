import { Tbody, Tr, Td, Input, Button } from "@chakra-ui/react";

export default function LineItems(i) {
  return (
    <Tr key={i}>
      <Td>
        <Input
          p={1}
          value={item.name}
          id={"name"}
          onChange={(e) => handleLineItemsChange(e, i)}
        />
      </Td>
      <Td>
        <Input
          p={1}
          value={item.description}
          id={"description"}
          onChange={(e) => handleLineItemsChange(e, i)}
        />
      </Td>
      <Td textAlign={"end"}>
        <Input
          p={1}
          w={"3rem"}
          textAlign={"end"}
          id={"quantity"}
          value={item.quantity}
          onChange={(e) => handleLineItemsChange(e, i)}
        />
      </Td>
      <Td textAlign={"end"}>
        <Input
          p={1}
          w={"3rem"}
          textAlign={"end"}
          id={"rate"}
          value={item.rate}
          onChange={(e) => handleLineItemsChange(e, i)}
        />
      </Td>
      <Td textAlign={"end"}>{item.total}</Td>
      <Td p={0} textAlign={"center"}>
        <Button
          size={"sm"}
          m={1}
          colorScheme={"red"}
          onClick={() => removeItem(i)}
        >
          <DeleteIcon />
        </Button>
      </Td>
    </Tr>
  );
}
