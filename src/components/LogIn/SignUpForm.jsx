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

export default function SignUpForm(props) {

  // Need a function to handle the sign up submission.
  // Once clicked, modal should display a loading state
  // once loaded modal should display "Account Created, Please Login"
  // Return to Login Page

  return (
    <ModalContent>
    <ModalHeader fontSize={"2rem"} textAlign={"center"}>Sign Up</ModalHeader>

      <Box width={"90%"} margin={"auto"} p={"1rem"}>
        <FormControl isRequired>
          <FormLabel m={"2"} p={"1"}>Email</FormLabel> 
            <Input type="email"/>
          <FormLabel m={"2"} p={"1"}>Password</FormLabel>
            <Input type="password" />
        </FormControl>
      </Box>

      <Box display={"flex"} w={"85%"} m={"auto"} justifyContent={"center"}>
          <Button colorScheme={"twitter"} w={"100%"}>Sign Up</Button>
      </Box>

      <ModalFooter w={"85%"} margin={"auto"} mt={10} p={0}>
        <Button colorScheme={"yellow"} onClick={props.onClose}>Close</Button>
        <Button colorScheme={"green"} m={1}>Login</Button>
      </ModalFooter>
  </ModalContent>
  )
}
