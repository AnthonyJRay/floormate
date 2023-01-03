import { useEffect, useState } from "react";
import { Textarea, FormLabel } from "@chakra-ui/react";
import "./tableBody.css";
import { BsPlusLg } from "react-icons/bs";

import {
  Input,
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
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
} from "@chakra-ui/react";

const currentDate = new Date().toLocaleDateString();
const defaultValues = {
  client: {
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
  },
  estimateDate: currentDate,
  lineItems: [
    {
      name: "",
      description: "",
      quantity: "",
      rate: "",
      total: "",
    },
  ],
  summary: "",
  notes: "",
  invoiced: false,
  subtotal: "",
  tax: "",
  total: "",
};

export default function EstimateForm({
  btnColor = "",
  btnIcon = "",
  btnText = "",
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [values, setValues] = useState(defaultValues);
  const { client, lineItems } = values;
  // Removed helper functions from here and moved them to the HelperFunctions.jsx file.

  // Input handlers

  const clientInput = (e) => {
    const { id, value } = e.target;
    setValues((prev) => ({
      ...prev,
      client: { ...client, [id]: value },
    }));
  };

  const summaryNotesInput = (e) => {
    const { id, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleLineItemsChange = (e, i) => {
    const { id, value } = e.target;
    console.dir(`id: ${id}, value: ${value}, i: ${i}`);
    console.log(lineItems[i]);
    setValues((prev) => ({
      ...prev,
      lineItems: [{ ...lineItems[i], [id]: value }],
    }));
  };

  const addItem = () => {};

  return (
    <Box>
      <Button
        onClick={onOpen}
        size={"sm"}
        colorScheme={btnColor}
        color={"whiteAlpha.900"}
      >
        <Text p={1}>{btnText}</Text>
        {btnIcon ? <Icon as={BsPlusLg} /> : null}
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={["full", "full", "6xl"]}>
        <ModalOverlay />
        <ModalContent>
          <Flex alignItems={"center"} p={2}>
            <ModalHeader flexGrow={1}>New Estimate</ModalHeader>
            <List display={"flex"} pl={"1rem"} m={"1"}>
              <Box display={"flex"} flexDirection={"column"}>
                <ListItem
                  display={"flex"}
                  height={"100%"}
                  alignItems={"center"}
                >
                  <Heading size={"sm"}>Estimate:</Heading>\
                  {/* Estimate # should be rendered from ID no in DB? */}
                  <Text>{`#00015`}</Text>
                </ListItem>
                <ListItem
                  display={"flex"}
                  alignItems={"center"}
                  height={"100%"}
                >
                  <Heading size={"sm"}>Estimate Date:</Heading>
                  <Text>{values.estimateDate}</Text>
                </ListItem>
              </Box>
            </List>
          </Flex>

          <Box>
            <Box
              display={"flex"}
              flexDirection={["column", "column", "column", "row"]}
              justifyContent={["center", "center", "start"]}
              margin={"1rem"}
            >
              <List width={["100%", "95%", "65%"]} mb={8}>
                <ListItem m={1}>
                  <Heading fontSize={"xl"}>Bill To:</Heading>
                </ListItem>
                <Box m={1}>
                  <ListItem display={"flex"} alignItems={"center"}>
                    <Text fontWeight={"bold"} fontSize={".85rem"}>
                      First Name:
                    </Text>
                    <Input
                      type={"text"}
                      size={"xs"}
                      width={"60%"}
                      variant={"flushed"}
                      id={"firstName"}
                      value={client.firstName}
                      onChange={(e) => clientInput(e)}
                    />
                  </ListItem>
                  <ListItem display={"flex"} alignItems={"center"}>
                    <Text fontWeight={"bold"} fontSize={".85rem"}>
                      Last Name:
                    </Text>
                    <Input
                      type={"text"}
                      size={"xs"}
                      width={"60%"}
                      variant={"flushed"}
                      id={"lastName"}
                      value={client.lastName}
                      onChange={(e) => clientInput(e)}
                    />
                  </ListItem>
                  <ListItem display={"flex"} alignItems={"center"}>
                    <Text fontWeight={"bold"} fontSize={".85rem"}>
                      Address:
                    </Text>
                    <Input
                      type={"text"}
                      size={"xs"}
                      width={"60%"}
                      variant={"flushed"}
                      id={"address"}
                      value={client.address}
                      onChange={(e) => clientInput(e)}
                    />
                  </ListItem>
                  <ListItem display={"flex"} alignItems={"center"}>
                    <Text fontWeight={"bold"} fontSize={".85rem"}>
                      Phone:
                    </Text>
                    <Input
                      type={"text"}
                      size={"xs"}
                      width={"60%"}
                      variant={"flushed"}
                      id={"phone"}
                      value={client.phone}
                      onChange={(e) => clientInput(e)}
                    />
                  </ListItem>
                  <ListItem display={"flex"} alignItems={"center"}>
                    <Text fontWeight={"bold"} fontSize={".85rem"}>
                      Email:
                    </Text>
                    <Input
                      type={"text"}
                      size={"xs"}
                      width={"60%"}
                      variant={"flushed"}
                      id={"email"}
                      value={client.email}
                      onChange={(e) => clientInput(e)}
                    />
                  </ListItem>
                </Box>
              </List>
              <Box width={"100%"}>
                <FormLabel>Summary</FormLabel>
                <Textarea
                  height={"116px"}
                  id={"summary"}
                  onChange={(e) => summaryNotesInput(e)}
                />
              </Box>
            </Box>
          </Box>

          <TableContainer>
            <Table variant="simple" mt={"2rem"} mb={"2rem"}>
              <TableCaption>Placeholder for Table Caption</TableCaption>
              <Thead>
                <Tr>
                  <Td>
                    <Button colorScheme={"green"} onClick={() => addLineItem}>
                      New Line Item
                    </Button>
                  </Td>
                </Tr>
                <Tr>
                  <Th>Item Name</Th>
                  <Th>Item Description</Th>
                  <Th isNumeric>Qty</Th>
                  <Th isNumeric>Rate</Th>
                  <Th isNumeric>Total</Th>
                </Tr>
              </Thead>
              <Tbody>
                {lineItems.map((item, i) => {
                  return (
                    <Tr key={i}>
                      <Td>
                        <Input
                          p={1}
                          value={item.name}
                          id={"name"}
                          onChange={(e) => handleLineItemsChange(e, i)}
                        />
                      </Td>
                      <Td>
                        <Input
                          p={1}
                          value={item.description}
                          id={"description"}
                          onChange={(e) => handleLineItemsChange(e, i)}
                        />
                      </Td>
                      <Td textAlign={"end"}>
                        <Input
                          p={1}
                          w={"3rem"}
                          textAlign={"end"}
                          id={"quantity"}
                          value={item.quantity}
                          onChange={(e) => handleLineItemsChange(e, i)}
                        />
                      </Td>
                      <Td textAlign={"end"}>
                        <Input
                          p={1}
                          w={"3rem"}
                          textAlign={"end"}
                          id={"rate"}
                          value={item.rate}
                          onChange={(e) => handleLineItemsChange(e, i)}
                        />
                      </Td>
                      <Td textAlign={"end"}>{item.lineItemsTotal}</Td>
                      <Td p={0} textAlign={"center"}>
                        <Button
                          size={"sm"}
                          colorScheme={"red"}
                          // onClick={onDelete}
                        >
                          X
                        </Button>
                      </Td>
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </TableContainer>

          <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"flex-end"}
            m={"2rem"}
            mr={10}
          >
            <Box display={"flex"} flexDirection={"column"} mt={4}>
              <FormLabel>Additional Notes:</FormLabel>
              <Textarea id={"notes"} onChange={(e) => summaryNotesInput(e)} />
            </Box>
            <Box display={"flex"} justifyContent={"end"} mt={4}>
              <List fontWeight={"bold"}>
                <ListItem p={1}>SUBTOTAL: </ListItem>
                <ListItem p={1}>TAX: </ListItem>
                <ListItem p={1}>TOTAL: </ListItem>
              </List>
              <List pl={5}>
                <ListItem h={"32px"} p={1}>
                  {/* {estimateFormData.estimateSubTotal} */}
                </ListItem>
                <ListItem h={"32px"} p={1}>
                  <Input
                    w={"3rem"}
                    size={"xs"}
                    // value={estimateFormData.estimateTaxRate}
                    onChange={(e) => handleTaxInput(e)}
                  />
                  %
                </ListItem>
                <ListItem h={"32px"} p={1}>
                  {/* {estimateFormData.estimateTotal} */}
                </ListItem>
              </List>
            </Box>
          </Box>

          <ModalFooter>
            <Button mr={1} colorScheme={"linkedin"} onClick={onClose}>
              Close
            </Button>
            <Button
              mr={1}
              colorScheme={"yellow"}
              color={"whiteAlpha.900"}
              onClick={() => console.log("Editing!")}
            >
              Edit
            </Button>
            <Button
              width={"25%"}
              bg={"green"}
              color={"whiteAlpha.900"}
              onClick={() => console.log("Saved!")}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
