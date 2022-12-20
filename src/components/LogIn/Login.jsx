import { useState } from 'react'

import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Box,
  Button,
  FormErrorMessage,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter
} from "@chakra-ui/react"

export default function Login() {

  // const [data, setData] = useState([]);
  // const [token, setToken] = useState();

  // if (!token) {
  //   return <Login setToken={setToken}/>
  // }

// const [input, setInput] = useState('');

// const inputChangeHandler = (e) => setInput(e.target.value);
// const isError = input;

const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
    <Button onClick={onOpen}>Log In Modal</Button>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
    <Box>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
          <Input type="email"/>
        <FormLabel>Password</FormLabel>
          <Input type="password" />
        <Button type="submit">Submit</Button>
      </FormControl>
    </Box>
    <ModalFooter>
      <Button onClick={onClose}>Close</Button>
      <Button>Other Action</Button>
    </ModalFooter>
    </ModalContent>
    </Modal>
    </>
  )
}