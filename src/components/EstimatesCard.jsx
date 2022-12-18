import React from "react";

import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
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
        <CardBody border="1px" borderColor="gray.200" margin="2rem">
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              {/* Card Header */}
              <Heading size="xs" textTransform="uppercase">
                {props.cardHeader}
              </Heading>
              {/* Card body */}
              <Text
                pt="2"
                fontSize="sm"
                border="1px"
                borderColor="gray.200"
                padding="1rem"
                margin="2rem"
              >
                {/* {props.cardBody} */}
              </Text>
              <Button size="sm" colorScheme="yellow" onClick={()=>console.log("Edit Button: Works!")}>
                Edit
              </Button>
              <Button size="sm" colorScheme="red" onClick={()=>console.log("Delete Button: Works!")}>
                Delete
              </Button>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
}
