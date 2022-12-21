import { useState } from 'react'

import { BsPlusLg } from "react-icons/bs"

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
  ModalHeader,
  Text,
  Icon,
  Select,
  Flex
} from "@chakra-ui/react"

export default function NewEstimate(props) {

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
  <Box>
    <Button onClick={onOpen} size={"sm"} colorScheme="green">
      <Text p={1}>{props.btnText}</Text>
      <Icon as={BsPlusLg} />
    </Button>
    <Modal isOpen={isOpen} onClose={onClose} >
      <ModalOverlay bg={"blackAlpha.900"}/>

      <ModalContent>
      {/* Inside the Modal formo */}

        <Flex justifyContent={"space-around"} alignItems={"center"} p={2}>
          <ModalHeader flexGrow={1}>New Estimate</ModalHeader>
          <Text as={'cite'} fontSize={"xs"}>Estimate: #00015</Text>
          </Flex>

          <Box w={"90%"} m={"auto"} p={"1rem"}>
            <FormControl isRequired>
              <FormLabel m={"2"} p={"1"}>Client</FormLabel>
              <Flex justify={"center"} align={"center"}>
                <Select placeholder='Select a Client' maxW={"75%"}>
                  <option value='option1'>Client 1</option>
                  <option value='option2'>Client 2</option>
                  <option value='option3'>Client 3</option>
                </Select>
                <Button>Add Client</Button>
              </Flex>
            </FormControl>
          </Box>

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
            <Button width={"30%"} onClick={props.addBtn()}>Login</Button>
          </ModalFooter>
      </ModalContent>
    </Modal>
  </Box>
)}