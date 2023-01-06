import { useState } from "react";
import SettingsForm from "../components/settings/SettingsForm";
import DeleteAccount from "../components/utils/deleteAccount";

import {
  Box,
  Container,
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

  const handleChange = (e) => {
    return setSettings((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  function onSave() {
    console.log("Saved!");
  }

  return (
    <Container overflow={"hidden"}>
      <Heading>Settings</Heading>
      <List>
        <SettingsForm name={"Name"} handleChange={handleChange} />
        <SettingsForm name={"Business"} handleChange={handleChange} />
        <SettingsForm name={"Address"} handleChange={handleChange} />
        <SettingsForm name={"Phone"} handleChange={handleChange} />
        <SettingsForm name={"Email"} handleChange={handleChange} />
        <ListItem p={1}>
          <FormLabel fontSize={"sm"} fontStyle={"italic"}>
            Upload Your Logo
          </FormLabel>
          <Input
            type="file"
            border={"none"}
            borderBottom={"1px"}
            borderRadius={3}
            fontSize={"xs"}
            fontStyle={"italic"}
          />
        </ListItem>
        <ListItem
          display={"flex"}
          flexDirection={["column", "column", "row"]}
          justifyContent={"space-between"}
        >
          <Button onClick={() => onSave()} colorScheme={"green"}>
            Save
          </Button>
          <Box textAlign={["center"]}>
            <Button
              onClick={() => console.log("Changed Password!")}
              colorScheme={"transparent"}
              fontStyle={"italic"}
              fontSize={"xs"}
              color={"gray.400"}
            >
              Change Password
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
          </Box>
          <Modal isOpen={isOpen}>
            <ModalOverlay />
            <DeleteAccount onClose={onClose} />
          </Modal>
        </ListItem>
      </List>
    </Container>
  );
}
