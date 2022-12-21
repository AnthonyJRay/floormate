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
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  Icon,
  Select,
  Flex,
  Textarea
} from "@chakra-ui/react"

export default function NewEstimate(props) {
const { isOpen, onOpen, onClose } = useDisclosure()

const [formClient, setFormClient] = useState('');
const [formServices, setFormServices] = useState([]);
const [formNotes, setFormNotes] = useState('');

const handleClientChange = (formClient) => {
  // setFormClient(formClient)
  console.log(formClient.target.value)
}

const handleServicesChange = (formClient) => {
  setFormClient(formClient.value)
}

const handleNotesChange = (e) => {
  setFormClient(e.target)
}

return (
  <Box>
    <Button onClick={onOpen} size={"sm"} colorScheme="green">
      <Text p={1}>{props.btnText}</Text>
      <Icon as={BsPlusLg} />
    </Button>
    <Modal isOpen={isOpen} onClose={onClose} size={"full"}>

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
                <Select placeholder='Select a Client' maxW={"75%"} onChange={(formClient) => handleClientChange(formClient)}>
                  <option value={formClient}>Client 1</option>
                  <option value={formClient}>Client 2</option>
                  <option value={formClient}>Client 3</option>
                </Select>
                <Button onClick={() => {console.log(formClient)}}>Add Client</Button>
              </Flex>
            </FormControl>
          </Box>

          <Box w={"90%"} m={"auto"} p={"1rem"}>
            <FormControl isRequired>
              <FormLabel m={"2"} p={"1"}>Services</FormLabel>
              <Flex justify={"center"} align={"center"}>
                <Select placeholder='Select a Client' maxW={"75%"}>
                  <option value='option1'>Client 1</option>
                  <option value='option2'>Client 2</option>
                  <option value='option3'>Client 3</option>
                </Select>
                <Button>Add Service</Button>
                </Flex>
                </FormControl>
          </Box>

          <Box width={"90%"} margin={"auto"} p={"1rem"}>
              <FormLabel m={"2"} p={"1"}>Notes</FormLabel> 
                <Textarea/>
          </Box>

          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
            <Button width={"30%"} onClick={props.addBtn()}>Login</Button>
          </ModalFooter>
      </ModalContent>
    </Modal>
  </Box>
)}