import React from "react";

import {
  Card,
  CardHeader,
  Heading,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";

export default function CardForm(props) {
  return (
    // Card Button
    <Box>
      <Button size="md" colorScheme="green" onClick={props.addBtn()}>
        <Text>{props.btnText}</Text>
      </Button>

      {/* Card */}
      <Card color="gray.100" border="1px" borderColor="gray.200" height="100%">
        <CardHeader>
          {/* Main Header  */}
          <Heading size="md">{props.header}</Heading>
        </CardHeader>
        {props.cardBody}
      </Card>
    </Box>
  );
}
