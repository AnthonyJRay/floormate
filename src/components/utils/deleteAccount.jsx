import React from "react";

import {
  ModalContent,
  ModalBody,
  Box,
  Button,
  Heading,
} from "@chakra-ui/react";

export default function deleteAccount({ onClose }) {
  return (
    <ModalContent>
      <ModalBody>
        <Heading size={"sm"} p={4} m={"auto"} textAlign={"center"}>
          Are you sure you want to delete your account?
        </Heading>
        <Box display={"flex"} justifyContent={"end"}>
          <Button
            onClick={onClose}
            colorScheme={"yellow"}
            color={"white"}
            m={1}
          >
            Cancel
          </Button>
          <Button colorScheme={"green"} m={1}>
            Confirm
          </Button>
        </Box>
      </ModalBody>
    </ModalContent>
  );
}
