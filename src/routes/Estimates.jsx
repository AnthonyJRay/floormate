import { useState } from "react";
import { Box, Heading, Grid } from "@chakra-ui/react";

import EstimatesBody from "../components/estimates/EstimatesBody";
import EstimateForm from "../components/estimates/EstimateForm";

export default function Estimates() {
  const [estimateData, setEstimateData] = useState([
    {
      estimateNO: "001",
      estimateDate: "03/22/22",
      client: {
        firstName: "Vincent",
        lastName: "Ray",
        address: "123 N Main St",
        phone: "5555551234",
        email: "vincentR@example.com",
      },
      lineItems: [
        {
          name: "Install Carpet",
          description: "Install new carpet in master bedroom",
          quantity: "40",
          rate: "9.00",
          total: "380",
        },
      ],
      summary:
        "Remove and dispose of old carpet. Inspect tackstrip, replace as neccessary. Install new padding and carpet.",
      notes: "Will need at least 14' of seam tape.",
      invoiced: false,
      subtotal: "380",
      tax: "5%",
      total: "399",
    },
    {
      estimateNO: "002",
      estimateDate: "06/14/22",
      client: {
        firstName: "Dee",
        lastName: "D",
        address: "555 S Cherry Dr",
        phone: "123 777 5555",
        email: "deeD@example.com",
      },
      lineItems: [
        {
          name: "Install LVP",
          description: "Install new LVP in kitchen area.",
          quantity: "300",
          rate: "2.00",
          total: "600",
        },
        {
          name: "Install LVP",
          description: "Install new LVP in kitchen area.",
          quantity: "200",
          rate: "2.00",
          total: "400",
        },
      ],
      summary:
        "Remove existing sheet vinyl flooring and dispose. Remove existing quarter-round. Inspect subfloor. Prep and sweep subfloor. Install new LVP. Install new quarter-round.",
      notes:
        "Don't forget CA Glue for quarter-round mitered corners. Don't forget caulking.",
      invoiced: true,
      subtotal: "600",
      tax: "5%",
      total: "630",
    },
  ]);
  return (
    <Box p={5}>
      <Box textAlign="center">
        <Heading size={"xl"} pb={"2rem"}>
          Estimates
        </Heading>
        <EstimateForm
          btnText={"New Estimate"}
          btnColor={"green"}
          btnIcon={true}
          onSave={(estimate) => {
            setEstimateData((prev) => {
              return [...prev, estimate];
            });
          }}
        />
      </Box>

      <Grid
        templateColumns={{
          base: "1fr",
          sm: "1fr 1fr",
          md: "1fr 1fr 1fr",
          lg: "1fr 1fr 1fr 1fr",
        }}
        gridGap="3"
        autoRows={"1fr"}
        color={"gray.100"}
        pt={"1rem"}
      >
        {estimateData.map((estimate, i) => {
          return (
            <EstimatesBody
              key={i}
              estimateData={estimateData[i]}
              onSave={(editEstimate) => {
                if (JSON.stringify(estimate) === JSON.stringify(editEstimate)) {
                  return;
                }
                setEstimateData((prev) => {
                  return prev.map((_estimate, _i) => {
                    return _i === i ? editEstimate : _estimate;
                  });
                });
              }}
              onDelete={() => {
                setEstimateData((prev) => {
                  return prev.filter((_deletedEstimate, _i) => {
                    return _i !== i;
                  });
                });
              }}
            />
          );
        })}
      </Grid>
    </Box>
  );
}
