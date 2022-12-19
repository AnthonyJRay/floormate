import {
  CardBody,
  Stack,
  Box,
  Heading,
  Text,
  Button,
  StackDivider
} from "@chakra-ui/react";



export default function EstimatesBody(props) {
  return (
    <CardBody border="1px" borderColor="gray.200" margin="2rem">
      <Stack divider={<StackDivider />} spacing="4">
        <Box>
          <Heading size="xs">
            {props.header}
          </Heading>
          <Text>
            {props.body}
          </Text>
          <Text>
            {`$${props.price}`}
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