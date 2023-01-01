import { Heading, Text, Button, Flex, GridItem, Box } from "@chakra-ui/react";

export default function EstimatesBody(props) {
  return (
    <GridItem border="1px" borderColor="gray.200">
      <Flex
        flexDir={"column"}
        alignItems="center"
        justifyContent="space-between"
        height="100%"
      >
        <Heading size="sm" m={".5rem"}>
          {props.name}
        </Heading>
        <Text fontSize="xs" textAlign={"center"} m="5px">
          {props.description}
        </Text>
        <Flex
          width={["80%", "70%", "55%"]}
          direction={["column", "column", "column", "row"]}
          justifyContent={["space-between"]}
          alignItems="center"
        >
          <Button
            size="sm"
            colorScheme="yellow"
            m={"1rem"}
            onClick={() => console.log("View Button: Works!")}
          >
            View
          </Button>

          <Text color="green">{`Total: $${props.total}`}</Text>
          <Box display={"flex"} alignItems={"center"}>
            <Text pr={2}>Invoiced:</Text>
            <Text color="red" fontSize={".8rem"} fontStyle={"italic"}>
              false
            </Text>
          </Box>
        </Flex>
      </Flex>
    </GridItem>
  );
}
