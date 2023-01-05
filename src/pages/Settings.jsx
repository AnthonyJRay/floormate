import { useState } from "react";
import DeleteAccount from "../components/utils/deleteAccount";

import {
  Box,
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
      <List display={"grid"} gap={2} w={"80%"} m={"auto"} p={8}>
        <ListItem p={1}>
          <FormLabel fontSize={"xs"} fontStyle={"italic"}>
            Name
          </FormLabel>
          <Input
            placeholder={"Name"}
            id={"name"}
            onChange={(e) => handleChange(e)}
            border={"none"}
            borderBottom={"1px"}
            borderRadius={3}
          />
        </ListItem>
        <ListItem p={1}>
          <FormLabel fontSize={"xs"} fontStyle={"italic"}>
            Business Name
          </FormLabel>
          <Input
            placeholder={"Business"}
            id={"business"}
            onChange={(e) => handleChange(e)}
            border={"none"}
            borderBottom={"1px"}
            borderRadius={3}
          />
        </ListItem>
        <ListItem p={1}>
          <FormLabel fontSize={"xs"} fontStyle={"italic"}>
            Address
          </FormLabel>
          <Input
            placeholder={"Address"}
            id={"address"}
            onChange={(e) => handleChange(e)}
            border={"none"}
            borderBottom={"1px"}
            borderRadius={3}
          />
        </ListItem>
        <ListItem p={1}>
          <FormLabel fontSize={"xs"} fontStyle={"italic"}>
            Phone
          </FormLabel>
          <Input
            placeholder={"Phone"}
            id={"phone"}
            onChange={(e) => handleChange(e)}
            border={"none"}
            borderBottom={"1px"}
            borderRadius={3}
          />
        </ListItem>
        <ListItem p={1}>
          <FormLabel fontSize={"xs"} fontStyle={"italic"}>
            Email
          </FormLabel>
          <Input
            placeholder={"Email"}
            id={"email"}
            onChange={(e) => handleChange(e)}
            border={"none"}
            borderBottom={"1px"}
            borderRadius={3}
          />
        </ListItem>
        <ListItem p={1}>
          <FormLabel fontSize={"xs"} fontStyle={"italic"}>
            Upload Your Logo
          </FormLabel>
          <Input
            type="file"
            border={"none"}
            borderBottom={"1px"}
            borderRadius={3}
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
    </>
  );
}
