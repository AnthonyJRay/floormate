import { useState } from "react";
import "./tableBody.css";
import { DeleteIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { testHelperFunction } from "./HelperFunctions";

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
  Textarea,
  FormLabel,
} from "@chakra-ui/react";

const currentDate = new Date().toLocaleDateString();
const defaultValues = {
  estimateNO: "",
  estimateDate: currentDate,
  client: {
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    email: "",
  },
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
  estimate = {},
  btnColor = "",
  btnIcon = "",
  btnText = "",
  onSave = () => {},
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [values, setValues] = useState(defaultValues);
  const { client, lineItems, summary, notes, subtotal, tax, total } = values;
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
    setValues((prev) => ({
      ...prev,
      lineItems: lineItems.map((item) => {
        return (
          (item.total = testHelperFunction(item)),
          item === lineItems[i]
            ? {
                ...lineItems[i],
                [id]: value,
              }
            : item
        );
      }),
    }));
  };

  const quantityInput = (e, i) => {
    const { id, value } = e.target;
    setValues((prev) => ({
      ...prev,
      lineItems: lineItems.map((item) => {
        return item.quantity === lineItems[i].quantity
          ? { ...lineItems[i], [id]: value }
          : item;
      }),
    }));
  };

  const rateInput = (e, i) => {};

  const addItem = () => {
    const newItem = defaultValues.lineItems;
    setValues((prev) => ({
      ...prev,
      lineItems: [...lineItems, newItem],
    }));
  };

  const removeItem = (i) => {
    const newLineItems = lineItems.filter((item) => item !== lineItems[i]);
    setValues((prev) => ({
      ...prev,
      lineItems: newLineItems,
    }));
  };

  return (
    <Box>
      <Button
        onClick={() => {
          Object.entries(estimate).length !== 0
            ? setValues(estimate)
            : setValues(defaultValues);
          onOpen();
        }}
        size={"sm"}
        colorScheme={btnColor}
        color={"gray.100"}
      >
        {btnIcon ? <PlusSquareIcon boxSize={5} m={1} /> : null}
        <Text letterSpacing={0.5}>{btnText}</Text>
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
                  <Heading size={"sm"}>Estimate:</Heading>
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
              {/* Inputs and labels share an Li. Perhaps break labels and inputs into their own Divs to get better style spacing. */}
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
                      placeholder={"First Name"}
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
                      placeholder={"Last Name"}
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
                      placeholder={"Street Address"}
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
                      placeholder={"Phone Number"}
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
                      placeholder={"Email Address"}
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
                  value={values.summary}
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
                    {/* ADD NEW LINE ITEM */}
                    <Button colorScheme={"green"} onClick={() => addItem()}>
                      <PlusSquareIcon boxSize={5} m={1} />
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
                      <Td textAlign={"end"}>{item.total}</Td>
                      <Td p={0} textAlign={"center"}>
                        <Button
                          size={"sm"}
                          colorScheme={"red"}
                          onClick={() => removeItem(i)}
                        >
                          <DeleteIcon />
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
              <Textarea
                id={"notes"}
                value={notes}
                onChange={(e) => summaryNotesInput(e)}
              />
            </Box>
            <Box display={"flex"} justifyContent={"end"} mt={4}>
              <List fontWeight={"bold"}>
                <ListItem p={1}>SUBTOTAL: </ListItem>
                <ListItem p={1}>TAX: </ListItem>
                <ListItem p={1}>TOTAL: </ListItem>
              </List>
              <List pl={5}>
                <ListItem h={"32px"} p={1}>
                  {subtotal}
                </ListItem>
                <ListItem h={"32px"} p={1}>
                  <Input
                    w={"3rem"}
                    size={"xs"}
                    value={tax}
                    onChange={(e) => handleTaxInput(e)}
                  />
                  %
                </ListItem>
                <ListItem h={"32px"} p={1}>
                  {total}
                </ListItem>
              </List>
            </Box>
          </Box>

          <ModalFooter>
            <Button
              m={1}
              w={"5%"}
              color={"whiteAlpha.800"}
              colorScheme={"yellow"}
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              bg={"green"}
              w={"10%"}
              color={"whiteAlpha.800"}
              onClick={() => [onSave({ ...values }), onClose()]}
            >
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
