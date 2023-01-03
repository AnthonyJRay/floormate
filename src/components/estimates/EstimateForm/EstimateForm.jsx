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

export default function EstimateForm({
  formValues = {},
  btnColor = "",
  btnIcon = "",
  btnText = "",
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Removed helper functions from here and moved them to the HelperFunctions.jsx file.

  const { estimateDate, client, lineItems } = formValues;
  console.log(client);

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
                  <Heading size={"sm"}>Estimate:</Heading>
                  <Text>{`#00015`}</Text>
                </ListItem>
                <ListItem
                  display={"flex"}
                  alignItems={"center"}
                  height={"100%"}
                >
                  <Heading size={"sm"}>Estimate Date:</Heading>
                  <Text>{estimateDate}</Text>
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
                      // value={estimateFormData.clientFirstName}
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
                      // defaultValue={estimateFormData.clientFirstName}
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
                      // defaultValue={estimateFormData.clientAddress}
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
                      // defaultValue={estimateFormData.clientPhone}
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
                      // defaultValue={estimateFormData.clientEmail}
                    />
                  </ListItem>
                </Box>
              </List>
              <Box width={"100%"}>
                <FormLabel>Job Description</FormLabel>
                <Textarea height={"116px"} />
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
                {/* {estimateFormData.lineItems.map((item, id) => {
                  return (
                    <Tr key={item.lineItemsID}>
                      <Td>
                        <Input
                          p={1}
                          value={item.lineItemsName}
                          onChange={() =>
                            console.log("Line Item Name changed!")
                          }
                        />
                      </Td>
                      <Td>
                        <Input
                          p={1}
                          value={item.lineItemsDesc}
                          onChange={() =>
                            console.log("Line Item Description changed!")
                          }
                        />
                      </Td>
                      <Td textAlign={"end"}>
                        <Input
                          p={1}
                          w={"3rem"}
                          textAlign={"end"}
                          value={item.lineItemsQty}
                          onChange={(e) => handleQtyInput(e, id)}
                        />
                      </Td>
                      <Td textAlign={"end"}>
                        <Input
                          p={1}
                          w={"3rem"}
                          textAlign={"end"}
                          value={item.lineItemsRate}
                          onChange={(e) => handleRateInput(e, id)}
                        />
                      </Td>
                      <Td textAlign={"end"}>{item.lineItemsTotal}</Td>
                      <Td p={0} textAlign={"center"}>
                        <Button
                          size={"sm"}
                          colorScheme={"red"}
                          onClick={onDelete}
                        >
                          X
                        </Button>
                      </Td>
                    </Tr>
                  );
                })} */}
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
              <Textarea />
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
                  />{" "}
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
