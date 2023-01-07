import { useState } from "react";
import { DeleteIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { testHelperFunction } from "../HelperFunctions";
import BillInputs from "./BillInputs";
import BillLabels from "./BillLabels";

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

  function billInput(e) {
    const { id, value } = e.target;
    setValues((prev) => ({
      ...prev,
      client: { ...client, [id]: value },
    }));
  }

  function summaryNotesInput(e) {
    const { id, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  function handleLineItemsChange(e, i) {
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
  }

  function addItem() {
    const newItem = defaultValues.lineItems;
    setValues((prev) => ({
      ...prev,
      lineItems: [...lineItems, newItem],
    }));
  }

  function removeItem(i) {
    const newLineItems = lineItems.filter((item) => item !== lineItems[i]);
    setValues((prev) => ({
      ...prev,
      lineItems: newLineItems,
    }));
  }

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

      <Modal isOpen={isOpen} onClose={onClose} size={["full", "full", "3xl"]}>
        <ModalOverlay />
        <ModalContent>
          {/* Form Header */}
          <Flex alignItems={"center"}>
            <ModalHeader fontSize={"xl"} fontWeight={"bold"} flexGrow={1}>
              New Estimate
            </ModalHeader>
            <List display={"flex"} flexDirection={"column"} margin={"1rem"}>
              <ListItem display={"flex"} alignItems={"center"}>
                <Heading size={"xs"}>Estimate:</Heading>
                <Text>#00015</Text>
              </ListItem>
              <ListItem display={"flex"} alignItems={"center"}>
                <Heading size={"xs"}>Date:</Heading>
                <Text>{values.estimateDate}</Text>
              </ListItem>
            </List>
          </Flex>
          {/* Bill To section */}
          <Box margin={"1rem"}>
            <Heading fontSize={"xl"}>Bill To:</Heading>
            <Box
              display={"flex"}
              flexDirection={["column", "column", "column", "row"]}
              justifyContent={["center", "center", "start"]}
              m={2}
            >
              <Box display={"flex"} w={["100%", "100%", "50%"]}>
                {/* Add in City, State, Zip */}
                <BillLabels />
                <BillInputs client={client} billInput={billInput} />
              </Box>
              <Box
                w={["100%", "100%", "100%", "50%"]}
                mt={["2rem", null, null, 0]}
              >
                <FormLabel fontWeight={"bold"}>Job Summary</FormLabel>
                <Textarea
                  height={"116px"}
                  id={"summary"}
                  onChange={(e) => summaryNotesInput(e)}
                  value={values.summary}
                />
              </Box>
            </Box>
          </Box>
          {/* Line Items section */}
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
                          m={1}
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
            {/* Additional Notes section */}
            <Box display={"flex"} flexDirection={"column"} mt={4}>
              <FormLabel>Additional Notes:</FormLabel>
              <Textarea
                id={"notes"}
                value={notes}
                onChange={(e) => summaryNotesInput(e)}
              />
            </Box>
            {/* Totals section */}
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
          {/* Close and Save buttons */}
          <ModalFooter>
            <Button
              m={1}
              w={"7%"}
              color={"whiteAlpha.900"}
              colorScheme={"yellow"}
              onClick={onClose}
            >
              Close
            </Button>
            <Button
              colorScheme={"green"}
              w={"14%"}
              color={"whiteAlpha.900"}
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
