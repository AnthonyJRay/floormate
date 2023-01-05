import { useState } from "react";
import DeleteAccount from "../components/utils/deleteAccount";

import {
  List,
  ListItem,
  Heading,
  FormLabel,
  Input,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
} from "@chakra-ui/react";

export default function Settings() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [settings, setSettings] = useState({
    name: "",
    business: "",
    address: "",
    phone: "",
    email: "",
    logo: "",
  });

  const handleChange = (e, id) => {
    return setSettings((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const onSave = () => {
    console.log("Saved!");
  };

  return (
    <>
      <Heading>Settings</Heading>
      <List display={"grid"} w={"80%"} m={4} gap={4}>
        <ListItem>
          <FormLabel>Name</FormLabel>
          <Input
            placeholder={"Name"}
            id={"name"}
            onChange={(e) => handleChange(e)}
          />
        </ListItem>
        <ListItem>
          <FormLabel>Business Name</FormLabel>
          <Input
            placeholder={"Business"}
            id={"business"}
            onChange={(e) => handleChange(e)}
          />
        </ListItem>
        <ListItem>
          <FormLabel>Address</FormLabel>
          <Input
            placeholder={"Address"}
            id={"address"}
            onChange={(e) => handleChange(e)}
          />
        </ListItem>
        <ListItem>
          <FormLabel>Phone</FormLabel>
          <Input
            placeholder={"Phone"}
            id={"phone"}
            onChange={(e) => handleChange(e)}
          />
        </ListItem>
        <ListItem>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder={"Email"}
            id={"email"}
            onChange={(e) => handleChange(e)}
          />
        </ListItem>
        <ListItem>
          <FormLabel>Upload Your Logo</FormLabel>
          <Input type="file" />
        </ListItem>
        <ListItem display={"flex"} justifyContent={"space-between"}>
          <Button onClick={() => onSave()} colorScheme={"green"}>
            Save
          </Button>
          <Button
            onClick={() => onOpen()}
            colorScheme={"transparent"}
            color={"red.700"}
            fontStyle={"italic"}
            _hover={{ color: "red.500" }}
            fontSize={"xs"}
            p={0}
          >
            Delete Account
          </Button>
          <Modal isOpen={isOpen}>
            <ModalOverlay />
            <DeleteAccount onClose={onClose} />
          </Modal>
        </ListItem>
      </List>
    </>
  );
}
