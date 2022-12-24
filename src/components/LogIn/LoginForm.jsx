import React from 'react'

import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalHeader
} from "@chakra-ui/react"

export default function LoginForm(props) {

  return (
    <ModalContent>
    <ModalHeader fontSize={"2rem"} textAlign={"center"}>Login</ModalHeader>

      <Box width={"90%"} margin={"auto"} p={"1rem"}>
        <FormControl isRequired>
          <FormLabel m={"2"} p={"1"}>Email</FormLabel> 
            <Input type="email"/>
          <FormLabel m={"2"} p={"1"}>Password</FormLabel>
            <Input type="password" />
        </FormControl>
      </Box>

      <Box display={"flex"} w={"85%"} m={"auto"} justifyContent={"center"}>
          <Button colorScheme={"green"} w={"100%"}>Login</Button>
      </Box>

      <ModalFooter w={"85%"} margin={"auto"} mt={10} p={0}>
        <Button colorScheme={"yellow"} onClick={props.onClose}>Close</Button>
        <Button colorScheme={"twitter"} m={1} onClick={props.handleSignUp()}>Sign Up</Button>
      </ModalFooter>
  </ModalContent>
  )
}
