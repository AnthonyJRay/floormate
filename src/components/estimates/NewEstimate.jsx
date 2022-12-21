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
  Textarea,
  TableContainer, 
  Table,
  TableCaption,
  Th,
  Td,
  Tr,
  Thead,
  Tbody,
  Tfoot,
  List,
  ListItem,
  Heading

} from "@chakra-ui/react"

export default function NewEstimate(props) {
const { isOpen, onOpen, onClose } = useDisclosure()

const [formClient, setFormClient] = useState('');
const [formServices, setFormServices] = useState([]);
const [formNotes, setFormNotes] = useState('');

const handleClientChange = (e) => {
  setFormClient(e.target.value)
  console.log(e.target.value)
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
    <Flex justifyContent={"space-around"} alignItems={"center"} p={2}>
          <ModalHeader flexGrow={1}>New Estimate</ModalHeader>
          <ModalHeader as={'cite'} flexGrow={1} fontSize={"xs"} textAlign={"end"}>Estimate: #00015</ModalHeader>
        </Flex>



        <Box>
          <Box display={"flex"} justifyContent={"space-around"} margin={"1rem"}>

              <List border={"1px"} width={"48%"}>
                <Box m={1}>
                <ListItem>
                <Heading fontSize={"xl"}>Bill To:</Heading>
                </ListItem>
                <ListItem>
                  Client Name
                </ListItem>
                <ListItem>
                  Client Address
                </ListItem>
                <ListItem>
                  Client Phone
                </ListItem>
                <ListItem>
                  Client Email
                </ListItem>
                </Box>
              </List>

            <List border={"1px"} width={"48%"}>
              <Box m={1} display={"flex"} flexDir={"column"} justifyItems={"space-around"}>
              <ListItem>
                <Heading size={"sm"}>
                Estimate #
                </Heading>
              </ListItem>
              <ListItem>
                <Heading size={"sm"}>
                Estimate Date
                </Heading>
              </ListItem>
              </Box>
            </List>
          </Box>
        <Box>

    </Box>
   </Box>

      <TableContainer>
  <Table variant='simple'>
    <TableCaption>Placeholder for Table Caption</TableCaption>    
    <Thead>
      <Tr>
        <Th>Item Description</Th>
        <Th isNumeric>Qty</Th>
        <Th isNumeric>Rate</Th>
        <Th isNumeric>Total</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>Install Carpet</Td>
        <Td isNumeric>400</Td>
        <Td isNumeric>9.00</Td>
        <Td isNumeric></Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>Sub Total:</Th>
      </Tr>
      <Tr>
        <Th>Tax:</Th>
      </Tr>
      <Tr>
        <Th>
          Total:
        </Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>

<ModalFooter>
            <Button onClick={onClose}>Close</Button>
            <Button width={"30%"} onClick={props.addBtn() } bg={"green"}>Save</Button>
          </ModalFooter>
      </ModalContent>
    </Modal>
    
  </Box>
)}