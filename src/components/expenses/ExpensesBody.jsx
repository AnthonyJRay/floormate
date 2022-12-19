import {
  CardBody,
  Stack,
  Box,
  Heading,
  Text,
  Button,
  StackDivider
} from "@chakra-ui/react";

import React from 'react'

export default function ExpensesBody() {
  return (
    <CardBody border="1px" borderColor="gray.200" margin="2rem">
      <Stack divider={<StackDivider />} spacing="4">
        <Box>
          {/* Card Header */}
          <Heading size="xs" textTransform="uppercase">
            This is the new Expenses header
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
            This should be the main body area for the Expenses tab.
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
  )
}