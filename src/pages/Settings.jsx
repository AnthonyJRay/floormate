import {
  List,
  ListItem,
  Heading,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

export default function Settings() {
  return (
    <>
      <Heading>Settings</Heading>
      <List display={"grid"} w={"80%"} m={4} gap={4}>
        <ListItem>
          <FormLabel>Name</FormLabel>
          <Input placeholder={"Name"} />
        </ListItem>
        <ListItem>
          <FormLabel>Business Name</FormLabel>
          <Input placeholder={"Business"} />
        </ListItem>
        <ListItem>
          <FormLabel>Address</FormLabel>
          <Input placeholder={"Address"} />
        </ListItem>
        <ListItem>
          <FormLabel>Phone</FormLabel>
          <Input placeholder={"Phone"} />
        </ListItem>
        <ListItem>
          <FormLabel>Email</FormLabel>
          <Input placeholder={"Email"} />
        </ListItem>
        <ListItem>
          <FormLabel>Upload Your Logo</FormLabel>
          <Input type="file" />
        </ListItem>
        <ListItem>
          <Button colorScheme={"red"}>Delete Account</Button>
        </ListItem>
      </List>
    </>
  );
}
