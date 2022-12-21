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
  ModalFooter,
  ModalHeader
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
const [isLogged, setIsLogged] = useState(false)

return (
  <>
    <Button onClick={onOpen}>{!isLogged ? "Log In" : "Log Out"}</Button>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login</ModalHeader>
          
          <Box width={"90%"} margin={"auto"} p={"1rem"}>
            <FormControl isRequired>
              <FormLabel m={"2"} p={"1"}>Email</FormLabel> 
                <Input type="email"/>
              <FormLabel m={"2"} p={"1"}>Password</FormLabel>
                <Input type="password" />
            </FormControl>
          </Box>

          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
            <Button width={"30%"}>Login</Button>
          </ModalFooter>
      </ModalContent>
    </Modal>
  </>
)}