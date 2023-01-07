import { List, ListItem, Input } from "@chakra-ui/react";

export default function BillInputs({ client = {}, billInput = () => {} }) {
  return (
    <List
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-around"}
      p={1}
      w={"70%"}
    >
      <ListItem display={"flex"} alignItems={"center"}>
        <Input
          size={"xs"}
          variant={"flushed"}
          placeholder={"First Name"}
          id={"firstName"}
          value={client.firstName}
          onChange={(e) => billInput(e)}
        />
      </ListItem>
      <ListItem display={"flex"} alignItems={"center"}>
        <Input
          size={"xs"}
          variant={"flushed"}
          placeholder={"Last Name"}
          id={"lastName"}
          value={client.lastName}
          onChange={(e) => billInput(e)}
        />
      </ListItem>
      <ListItem display={"flex"} alignItems={"center"}>
        <Input
          size={"xs"}
          variant={"flushed"}
          placeholder={"Street Address"}
          id={"address"}
          value={client.address}
          onChange={(e) => billInput(e)}
        />
      </ListItem>
      <ListItem display={"flex"} alignItems={"center"}>
        <Input
          size={"xs"}
          variant={"flushed"}
          placeholder={"Phone Number"}
          id={"phone"}
          value={client.phone}
          onChange={(e) => billInput(e)}
        />
      </ListItem>
      <ListItem display={"flex"} alignItems={"center"}>
        <Input
          size={"xs"}
          variant={"flushed"}
          placeholder={"Email Address"}
          id={"email"}
          value={client.email}
          onChange={(e) => billInput(e)}
        />
      </ListItem>
    </List>
  );
}
