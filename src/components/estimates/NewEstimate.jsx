import { useState } from 'react'

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
  clientName: "",
  clientAddress: "",
  clientPhone: "",
  clientEmail: "",
  estimateDate: "",
  lineItems: [
    {
    lineItemsID: 1,
    lineItemsName: "Line Item #1",
    lineItemsDesc: "Line item description area.",
    lineItemsQty: 3,
    lineItemsRate: "9.00",
    lineItemsTotal: "",
  },
  {
    lineItemsID: 2,
    lineItemsName: "Line Item #2",
    lineItemsDesc: "Line item #2 description area.",
    lineItemsQty: 2,
    lineItemsRate: "20.00",
    lineItemsTotal: "",
  }
],
  notes: "",
  estimateSubTotal: "",
  estimateTaxRate: "",
  estimateTotal: "",
}


export default function NewEstimate(props) {
const { isOpen, onOpen, onClose } = useDisclosure()

const [estimateFormData, setEstimateFormData] = useState(initialEstimateForm)
const [lineItemData, setLineItemData] = useState(estimateFormData.lineItems)
// console.log(lineItemData)

const handleLineItems = () => {

}
// const handleEstimateChange = (e) => {
//         setEstimateFormData(estimateFormData.lineItems.map((item) => {
//           [...estimateFormData,
//           console.log(item)]
//         }))
//   console.log(estimateFormData.lineItems)
// }


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
                <Th>Item Name</Th>
                <Th>Item Description</Th>
                <Th isNumeric>Qty</Th>
                <Th isNumeric>Rate</Th>
                <Th isNumeric>Total</Th>
              </Tr>
            </Thead>
            <Tbody>
              {console.log(lineItemData)}
              {estimateFormData.lineItems.map((item) => {
               return (
                <Tr key={item.lineItemsID}>
                  <Td>{item.lineItemsName}</Td>
                  <Td>{item.lineItemsDesc}</Td>
                  <Td textAlign={"end"}><Input value={item.lineItemsQty} onChange={(e) =>  {handleLineItems(e)}}/></Td>
                  <Td textAlign={"end"}>{item.lineItemsRate}</Td>
                  <Td textAlign={"end"}>{(item.lineItemsQty * item.lineItemsRate)}</Td>
                  <Td p={0} textAlign={"center"}><Button size={"sm"}colorScheme={"red"}>X</Button></Td>
                </Tr>
               )
              })}

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