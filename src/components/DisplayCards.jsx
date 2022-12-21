import React from "react";

import {
  Heading,
  Box,
  Grid,

} from "@chakra-ui/react";


export default function CardForm(props) {
  return (
    // Card Button
    <Box p={5}>

      <Box textAlign="center">
        <Heading size={"xl"} pb={"2rem"}>{props.header}</Heading>
        {props.cardForm}
      </Box>

      {/* Card */}
      <Grid templateColumns={{ base: '1fr 1fr', md: '1fr 1fr 1fr', lg: '1fr 1fr 1fr 1fr'}} gridGap="3" autoRows={"1fr"} color={"gray.100"} pt={"1rem"}>
        {props.cardBody}
      </Grid>

    </Box>
  );
}
