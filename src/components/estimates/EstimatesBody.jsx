import { Heading, Text, Button, Flex, GridItem, Box } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import EstimateForm from "./EstimateForm/EstimateForm";

export default function EstimatesBody({
  estimateData,
  onView = () => {},
  name = "Client Name",
  description = "Job Description",
  total = "Estimate total",
  invoiced = false,
  onDelete = () => {},
}) {
  // console.dir(estimateData);
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
          flexDirection={"column"}
          justifyContent={["space-between"]}
          alignItems="center"
        >
          <Box
            display={"flex"}
            flexDirection={["column", "column", "row"]}
            alignItems={"center"}
            justifyContent={"space-around"}
            width={"100%"}
            p={2}
          >
            <Text color="green" fontSize={".8rem"}>
              {`$${total}`}
            </Text>
            {invoiced ? (
              <Text
                color={"green"}
                fontSize={".75rem"}
                fontStyle={"italic"}
                letterSpacing={0.25}
              >
                Invoiced
              </Text>
            ) : (
              <Text
                color={"red"}
                fontSize={".75rem"}
                fontStyle={"italic"}
                letterSpacing={0.25}
              >
                Not Invoiced
              </Text>
            )}
          </Box>
        </Flex>
        <Box
          display={"flex"}
          justifyContent={"space-around"}
          m={2}
          width={["75%", "65%", "60%", "55%", "35%"]}
        >
          <EstimateForm
            btnText={"View"}
            btnColor={"yellow"}
            btnIcon={false}
            estimate={estimateData}
          />
          <Button
            size={"sm"}
            colorScheme={"red"}
            onClick={() => onDelete(value)}
          >
            <DeleteIcon />
          </Button>
        </Box>
      </Flex>
    </GridItem>
  );
}
