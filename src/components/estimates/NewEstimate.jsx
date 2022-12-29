import { useEffect, useState } from 'react'

import "./tableBody.css"

import { BsPlusLg } from "react-icons/bs"

import {
  Input,
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
  Icon,
  Flex,
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


const initialEstimateForm = {
  clientFirstName: "Test First name",
  clientLastName: "Test Last name",
  clientAddress: "123 N Example St.",
  clientPhone: "(555) 555-5555",
  clientEmail: "textClient@example.com",
  estimateDate: "",
  notes: "",
  estimateSubTotal: 0,
  estimateTaxRate: 0,
  estimateTotal: 0,
  lineItems: [
      {
      lineItemsID: 1,
      lineItemsName: "Line Item #1",
      lineItemsDesc: "Line item description area.",
      lineItemsQty: 0,
      lineItemsRate: 0,
      lineItemsTotal: 0
    },
    {
      lineItemsID: 2,
      lineItemsName: "Line Item #2",
      lineItemsDesc: "Line item description area.",
      lineItemsQty: 0,
      lineItemsRate: 0,
      lineItemsTotal: 0
    }
  ]
}


export default function NewEstimate(props) {
const { isOpen, onOpen, onClose } = useDisclosure()

const [estimateFormData, setEstimateFormData] = useState(initialEstimateForm)

// Get Client information
const handleClientInfo = () => {

}

// Qty Input
const handleQtyInput = (e, id) => {
  estimateFormData.lineItems.map(item => {
    if(item.lineItemsID === id+1) {
      item.lineItemsQty = e.target.value
      if(item.lineItemsQty < 0) {
        item.lineItemsQty = 0
      }
      let qty = parseFloat(item.lineItemsQty);
      let rate = parseFloat(item.lineItemsRate)
        if(isNaN(qty)) {
          qty = 0;
        }
        if(isNaN(rate)) {
          rate = 0;
        }
        item.lineItemsTotal = qty * rate;
        setEstimateFormData(prevState => ({
          lineItems: [...prevState.lineItems]
        }))
      }
    }
  )
  handleInputTotals();
}

// Rate Input
const handleRateInput = (e, id) => {
  estimateFormData.lineItems.map( item => {
    if(item.lineItemsID === id+1) {
      item.lineItemsRate = e.target.value
      if(item.lineItemsRate < 0) {
        item.lineItemsRate = 0
      }
      let qty = parseFloat(item.lineItemsQty);
      let rate = parseFloat(item.lineItemsRate);
      if(isNaN(qty)) {
        qty = 0;
      }
      if(isNaN(rate)) {
        rate = 0;
      }
      item.lineItemsTotal = qty * rate;
      setEstimateFormData(prevState => ({
        lineItems: [...prevState.lineItems]
      }))
    }
    }
  )
  handleInputTotals();
}

// Get Tax
const handleTaxInput = (e) => {
  let taxInput = e.target.value
  let taxRate = parseFloat(taxInput) / 100
  if(isNaN(taxRate)) {
    taxRate = 0
  }
  let subtotal = estimateFormData.estimateSubTotal
  let taxAmount = subtotal * taxRate
  if(isNaN(taxInput)) {
    taxRate = 0;
  }

  setEstimateFormData(prevState => ({
    ...prevState,
    estimateTaxRate: taxInput,
    estimateTotal: subtotal + taxAmount
  }))
  return taxInput;
}

// Get Totals from inputs
const handleInputTotals = () => {
  let subtotal = 0;
  estimateFormData.lineItems.map( item => {
    subtotal = subtotal + item.lineItemsTotal
  })
  if(subtotal === estimateFormData.estimateSubTotal) {
    return;
  }
  setEstimateFormData(prevState => ({

      ...prevState,
      estimateSubTotal: subtotal

  })) 
  return subtotal;
}

// Add new line item
const handleAddItem = (e) => {
  setEstimateFormData((prevState) => ({
    lineItems: [...prevState.lineItems, { 
      lineItemsID: 3, // This needs a better way to dynamically add an ID property. Only 3 line items allowed before errors because 4th still has ID of 3. 
      lineItemsName: "New line item!", 
      lineItemsDesc: "New line item created with Add new button!", 
      lineItemsQty: 0, 
      lineItemsRate: 0, 
      lineItemsTotal: 0 }]
  }))
}

// Delete line item
const handleDeleteItem = () => {
  // Attach to "X" element "onClick"
  // Match lineItems id and "filter" out. 
  // return new list.
}


const currentDate = new Date().toLocaleDateString();

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
                  <Input type={"text"} size={"xs"} width={"60%"} variant={"flushed"} defaultValue={estimateFormData.clientFirstName}/>
                </ListItem>
                <ListItem display={"flex"} alignItems={"center"}>
                  <Text fontWeight={"bold"} fontSize={".85rem"}>Client Address:</Text>
                  <Input type={"text"} size={"xs"} width={"60%"} variant={"flushed"} defaultValue={estimateFormData.clientAddress}/>
                </ListItem>
                <ListItem display={"flex"} alignItems={"center"}>
                  <Text fontWeight={"bold"} fontSize={".85rem"}>Client Phone:</Text>
                  <Input type={"text"} size={"xs"} width={"60%"} variant={"flushed"} defaultValue={estimateFormData.clientPhone}/>
                </ListItem>
                <ListItem display={"flex"} alignItems={"center"}>
                  <Text fontWeight={"bold"} fontSize={".85rem"}>Client Email:</Text>
                  <Input type={"text"} size={"xs"} width={"60%"} variant={"flushed"} defaultValue={estimateFormData.clientEmail}/>
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
                <Th>Item Name</Th>
                <Th>Item Description</Th>
                <Th isNumeric>Qty</Th>
                <Th isNumeric>Rate</Th>
                <Th isNumeric>Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {estimateFormData.lineItems.map((item, id) => {
               return (
                <Tr key={item.lineItemsID}>
                  <Td><Input p={1} value={item.lineItemsName}/></Td>
                  <Td><Input p={1} value={item.lineItemsDesc}/></Td>
                  <Td textAlign={"end"}><Input p={1} w={"3rem"} textAlign={"end"} value={item.lineItemsQty} onChange={(e) => handleQtyInput(e, id)}/></Td>
                  <Td textAlign={"end"}><Input p={1} w={"3rem"} textAlign={"end"} value={item.lineItemsRate} onChange={(e) =>  handleRateInput(e, id)}/></Td>
                  <Td textAlign={"end"}>{item.lineItemsTotal}</Td>
                  <Td p={0} textAlign={"center"}><Button size={"sm"}colorScheme={"red"}>X</Button></Td>
                </Tr>
               )
              })}

              <Tr>
                <Td><Button colorScheme={"green"} onClick={(e) => handleAddItem(e)}>New Line Item</Button></Td>
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
            <ListItem h={"32px"} p={1}>{estimateFormData.estimateSubTotal}</ListItem>
            <ListItem h={"32px"} p={1}><Input w={"3rem"} size={"xs"} value={estimateFormData.estimateTaxRate} onChange={(e) => handleTaxInput(e)} /> %</ListItem>
            <ListItem h={"32px"} p={1}>{estimateFormData.estimateTotal}</ListItem>
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