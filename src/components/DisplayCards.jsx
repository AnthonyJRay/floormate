import React from "react";

import {
  Card,
  Heading,
  Flex,
  Box,
  Text,
  Button,
  Icon,
  Grid,
  GridItem
} from "@chakra-ui/react";
import { BsPlusLg } from "react-icons/bs"


export default function CardForm(props) {
  return (
    // Card Button
    <Box p={5}>
      <Box textAlign="center">
        <Heading size={"xl"} pb={"2rem"}>{props.header}</Heading>
        <Button size={"sm"} colorScheme="green" onClick={props.addBtn()}>
          <Text p={1}>{props.btnText}</Text>
          <Icon as={BsPlusLg} />
        </Button>
      </Box>
      {/* Card */}
      <Grid templateColumns={{ base: '1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr'}} gridGap="3" autoRows={"1fr"} color={"gray.100"} pt={"1rem"}>
        {props.cardBody}
      </Grid>
    </Box>
  );
}
