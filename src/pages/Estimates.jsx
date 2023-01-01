import { useState, useEffect } from "react";

import { Box, Heading, Grid } from "@chakra-ui/react";

// import DisplayCards from "../components/DisplayCards";
import EstimatesBody from "../components/estimates/EstimatesBody";
import NewEstimate from "../components/estimates/NewEstimate";

const defaultValues = {
  client: {
    name: "",
    address: "",
    phone: "",
    email: "",
  },
  estimateDate: "",
  lineItems: [
    {
      name: "",
      description: "",
      quantity: "",
      rate: "",
      total: "",
    },
  ],
};

export default function Estimates() {
  const [estimateData, setEstimateData] = useState([
    {
      client: {
        name: "Vincent Ray",
        address: "123 N Main St",
        phone: "5555551234",
        email: "vincentR@example.com",
      },
      estimateDate: "03/22/22",
      lineItems: [
        {
          name: "Install Carpet",
          description: "Install new carpet in master bedroom",
          quantity: "40",
          rate: "9.00",
          total: "360",
        },
      ],
      invoiced: false,
    },
  ]);

  return (
    <>
      <Box p={5}>
        <Box textAlign="center">
          <Heading size={"xl"} pb={"2rem"}>
            Estimates
          </Heading>
          <NewEstimate btnText={"New Estimate"} />
        </Box>

        <Grid
          templateColumns={{
            base: "1fr 1fr",
            md: "1fr 1fr 1fr",
            lg: "1fr 1fr 1fr 1fr",
          }}
          gridGap="3"
          autoRows={"1fr"}
          color={"gray.100"}
          pt={"1rem"}
        >
          {estimateData.map((estimate, i) => {
            console.dir(estimate);
            return (
              <EstimatesBody
                key={i}
                name={estimate.client.name}
                description={estimate.lineItems[0].description}
                price={estimate.client.price}
                total={estimate.lineItems[0].total}
              />
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
