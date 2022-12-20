import {
  CardBody,
  Stack,
  Box,
  Heading,
  Text,
  Button,
  StackDivider,
  GridItem,
  Flex,
  
} from "@chakra-ui/react";

// export default function ExpensesBody() {
//   return (
//     <CardBody border="1px" borderColor="gray.200" margin="2rem">
//       <Stack divider={<StackDivider />} spacing="4">
//         <Box>
//           {/* Card Header */}
//           <Heading size="xs" textTransform="uppercase">
//             This is the new Expenses header
//           </Heading>
//           {/* Card body */}
//           <Text
//             pt="2"
//             fontSize="sm"
//             border="1px"
//             borderColor="gray.200"
//             padding="1rem"
//             margin="2rem"
//           >
//             This should be the main body area for the Expenses tab.
//           </Text>
//           <Button size="sm" colorScheme="yellow" onClick={()=>console.log("Edit Button: Works!")}>
//             Edit
//           </Button>
//           <Button size="sm" colorScheme="red" onClick={()=>console.log("Delete Button: Works!")}>
//             Delete
//           </Button>
//         </Box>
//       </Stack>
//     </CardBody>
//   )
// }

export default function ExpensesBody(props) {
  return (
    <GridItem border="1px" borderColor="gray.200">
      <Flex flexDir={"column"} alignItems="center" justifyContent="space-between" height="100%">
        <Heading size="sm" m={".5rem"}>{props.header}</Heading>
        <Text fontSize="xs" textAlign={"center"} m="5px">{props.body}</Text>
        <Flex 
          width={["80%", "70%", "55%"]}
          direction={["column", "column", "column", "row"]} 
          justifyContent={["space-between"]} 
          alignItems="center">
        <Button
          size="sm"
          colorScheme="yellow"
          m={"1rem"}
          onClick={() => console.log("View Button: Works!")}>
          View
        </Button>
          <Text color="green">
            {`Total: $${props.price}`}
        </Text>
        </Flex>
        
      </Flex>
    </GridItem>
  );
}