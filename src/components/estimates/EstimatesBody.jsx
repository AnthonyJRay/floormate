import { Heading, Text, Button, Flex, GridItem, Box } from "@chakra-ui/react";

import NewEstimate from "../estimates/NewEstimate";

export default function EstimatesBody({
  name = "Client Name",
  description = "Job Description",
  total = "Estimate total",
  invoiced = false,
}) {
  return (
    <GridItem border="1px" borderColor="gray.200">
      <Flex
        flexDir={"column"}
        alignItems="center"
        justifyContent="space-between"
        height="100%"
      >
        <Heading size="sm" m={".5rem"}>
          {name}
        </Heading>
        <Text fontSize="xs" textAlign={"center"} m="5px">
          {description}
        </Text>
        <Flex
          width={["80%", "70%", "55%"]}
          direction={["column", "column", "column", "row"]}
          justifyContent={["space-between"]}
          alignItems="center"
        >
          <Text color="green" fontSize={".8rem"}>{`Total: $${total}`}</Text>
          <Box display={"flex"} alignItems={"center"}>
            {invoiced ? (
              <Text color={"green"} fontSize={".75rem"} fontStyle={"italic"}>
                Invoiced
              </Text>
            ) : (
              <Text color={"red"} fontSize={".75rem"} fontStyle={"italic"}>
                Not Invoiced
              </Text>
            )}
          </Box>

          {/* NewEstimate should be changed to "EsimateForm." */}
          {/* If it's not going to be used only for "new" estiamtes but also to "edit" existing ones. */}
          <NewEstimate btnText={"View"} btnColor={"yellow"} />
        </Flex>
      </Flex>
    </GridItem>
  );
}
