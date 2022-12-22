import { useState } from 'react'

import "./tableBody.css"

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

const [estimateData, setEstimateData] = useState({
  clientName: "",
  clientAddress: "",
  clientPhone: "",
  clientEmail: "",
  estimateDate: "",
  lineItems: {
    lineItemsName: "",
    lineItemsDesc: "",
    lineItemsQty: "",
    lineItemsRate: "",
    lineItemsTotal: "",
  },
  notes: "",
  estimateSubTotal: "",
  estimateTaxRate: "",
  estimateTotal: "",
})

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

            <List display={"flex"}border={"1px"} width={"48%"} pl={"1rem"} m={"1"}>
              <Box display={"flex"} flexDir={"column"} justifyItems={"space-around"}>
                <ListItem display={"flex"} height={"100%"} alignItems={"center"}>
                  <Heading size={"sm"}>
                  Estimate:
                  </Heading>
                  {/* Conditionally render Estimate # from database id auto incrementation */}
                  <Text>{`#00015`}</Text>
                </ListItem>
                <ListItem display={"flex"} alignItems={"center"} height={"100%"}>
                  <Heading size={"sm"}>
                  Estimate Date: 
                  </Heading>
                  {/*  Date and Header don't vertically align. */}
                  <Text>{currentDate}</Text>
                </ListItem>
              </Box>
            </List>
          </Box>
        </Box>

        <TableContainer>
          <Table variant='simple' mt={"2rem"} mb={"2rem"}>
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
                <Td w={"10%"} isNumeric>
                  <Input textAlign={"end"} size={"xs"} w={"75%"} value={estimateData.lineItems.lineItemsQty} onChange={(e) => setEstimateData({...estimateData, lineItemsQty: e.target.value})}/>
                </Td>
                <Td w={"10%"} isNumeric>
                  <Input textAlign={"end"} size={"xs"} w={"75%"} value={estimateData.lineItems.lineItemsQty} onChange={() => {console.log("Rate Changed!")}}/>
                </Td>
                <Td w={"10%"} isNumeric></Td>
                <Td p={0} textAlign={"center"}><Button p={0} colorScheme={"red"}>X</Button></Td>
              </Tr>
              <Tr>
                <Td><Button colorScheme={"green"}>New Line Item</Button></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <Box display={"flex"} justifyContent={"flex-end"} m={"2rem"}mr={10}>
          <List fontWeight={"bold"}>
            <ListItem p={1}>SUBTOTAL: </ListItem>
            <ListItem p={1}>TAX: </ListItem>
            <ListItem p={1}>TOTAL: </ListItem>
          </List>
          <List pl={5}>
            <ListItem p={1}>$100.00</ListItem>
            <ListItem p={1}><Input w={"3rem"} size={"xs"}></Input> %</ListItem>
            <ListItem p={1}>$110.00</ListItem>
          </List>
        </Box>

        <ModalFooter>
          <Button mr={1} colorScheme={"linkedin"} onClick={onClose}>Close</Button>
          <Button width={"25%"} onClick={props.addBtn() } bg={"green"} color={"whiteAlpha.900"}>Save</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </Box>
)}