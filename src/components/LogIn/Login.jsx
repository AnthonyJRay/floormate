import { useState } from 'react'

import { Link } from 'react-router-dom'
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

import SignUpForm from "./SignUpForm"
import LoginForm from "./LoginForm"

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

const [signUp, setSignUp] = useState(false)

const handleSignUp = () => {
  setSignUp(!signUp)
}

return (
  <>
    <Button onClick={onOpen} colorScheme={"green"}>{!isLogged ? "Log In" : "Log Out"}</Button>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
        {!signUp ? 
          <LoginForm onClose={onClose} handleSignUp={() => handleSignUp}/> :
          <SignUpForm onClose={onClose} handleSignUp={() => handleSignUp}/>
        }
      </Modal>
  </>
)}