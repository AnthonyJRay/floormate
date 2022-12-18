import React from "react";

import {
  Card,
  Heading,
  Flex,
  Box,
  Text,
  Button,
  Icon
} from "@chakra-ui/react";
import { BsPlusLg } from "react-icons/bs"


export default function CardForm(props) {
  return (
    // Card Button
    <Box p={2}>
      <Flex justifyContent={"space-between"} alignItems={"center"} p={2}>
        <Heading size="xl">{props.header}</Heading>
        <Button size="sm" colorScheme="green" onClick={props.addBtn()}>
          <Text p={1}>{props.btnText}</Text>
          <Icon as={BsPlusLg} />
        </Button>
      </Flex>
      {/* Card */}
      <Card color="gray.100" height="100%">
        {props.cardBody}
      </Card>
    </Box>
  );
}
