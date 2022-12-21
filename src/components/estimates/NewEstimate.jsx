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
  Heading,


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

const currentDate = new Date().toLocaleDateString();;
console.log(currentDate);

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
        </Flex>



        <Box>
          <Box display={"flex"} justifyContent={"space-around"} margin={"1rem"}>

              <List border={"1px"} width={"48%"} m={1}>
                <ListItem m={1}>
                <Heading fontSize={"xl"}>Bill To:</Heading>
                </ListItem>
                <Box m={1}>
                <ListItem display={"flex"} alignItems={"center"}>
                  <Text fontWeight={"bold"} fontSize={".85rem"}>Client Name:</Text>
                  <Input type={"text"} size={"xs"} width={"60%"} variant={"flushed"}/>
                </ListItem>
                <ListItem display={"flex"} alignItems={"center"}>
                <Text fontWeight={"bold"} fontSize={".85rem"}>Client Address:</Text>
                <Input type={"text"} size={"xs"} width={"60%"} variant={"flushed"}/>
                </ListItem>
                <ListItem display={"flex"} alignItems={"center"}>
                <Text fontWeight={"bold"} fontSize={".85rem"}>Client Phone:</Text>
                <Input type={"text"} size={"xs"} width={"60%"} variant={"flushed"}/>
                </ListItem>
                <ListItem display={"flex"} alignItems={"center"}>
                <Text fontWeight={"bold"} fontSize={".85rem"}>Client Email:</Text>
                <Input type={"text"} size={"xs"} width={"60%"} variant={"flushed"}/>
                </ListItem>
                </Box>
              </List>

            <List border={"1px"} width={"48%"}>
              <Box display={"flex"} flexDir={"column"} justifyItems={"space-around"}>
              <ListItem display={"flex"}>
                <Heading size={"sm"}>
                Estimate:
                </Heading>
                {/* Conditionally render Estimate # from database id auto incrementation */}
                <Text>{`#00015`}</Text>
              </ListItem>
              <ListItem display={"flex"} alignItems={"center"} height={"100%"}>
                <Heading size={"sm"}>
                Estimate Date
                </Heading>
                {/*  Date and Header don't vertically align. */}
                <Text>{currentDate}</Text>
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