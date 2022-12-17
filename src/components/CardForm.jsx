import React from 'react'

import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
  Button
} from "@chakra-ui/react"

export default function CardForm(props) {
  return (
    <Box>
    <Button size="md" colorScheme="green">
<Text>{props.btnText}</Text>
</Button>

<Card>
<CardHeader>
  {/* Main Header  */}
<Heading size='md'>{props.header}</Heading>
</CardHeader>
<CardBody>
<Stack divider={<StackDivider />} spacing='4'>
  <Box>
    {/* Card Header */}
    <Heading size='xs' textTransform='uppercase'>
      {props.cardHeader}
    </Heading>
    {/* Card body */}
    <Text pt='2' fontSize='sm'>
      {props.cardBody}
    </Text>
    <Button size="sm" colorScheme="yellow" >Edit</Button>
    <Button size="sm" colorScheme="red">Delete</Button>
  </Box>
</Stack>
</CardBody>
</Card>
</Box>
  )
}
