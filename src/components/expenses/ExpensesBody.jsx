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

export default function ExpensesBody(props) {
  return (
    <GridItem border="1px" borderColor="gray.200">
      <Flex flexDir={"row"} alignItems="center" justifyContent="space-between" height="100%">
        <Heading size="sm" m={".5rem"}>{props.header}</Heading>
        
      </Flex>
    </GridItem>
  );
}