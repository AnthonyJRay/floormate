import { List, ListItem, Text } from "@chakra-ui/react";

export default function BillLabels() {
  return (
    <List
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-around"}
      p={1}
    >
      <ListItem>
        <Text fontWeight={"bold"} fontSize={"sm"}>
          First Name:
        </Text>
      </ListItem>
      <ListItem>
        <Text fontWeight={"bold"} fontSize={"sm"}>
          Last Name:
        </Text>
      </ListItem>
      <ListItem>
        <Text fontWeight={"bold"} fontSize={"sm"}>
          Address:
        </Text>
      </ListItem>
      <ListItem>
        <Text fontWeight={"bold"} fontSize={"sm"}>
          Phone:
        </Text>
      </ListItem>
      <ListItem>
        <Text fontWeight={"bold"} fontSize={"sm"}>
          Email:
        </Text>
      </ListItem>
    </List>
  );
}
