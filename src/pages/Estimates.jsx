import { useState, useEffect } from "react";
import { Box, Heading, Grid, Button } from "@chakra-ui/react";

import EstimatesBody from "../components/estimates/EstimatesBody";
import EstimateForm from "../components/estimates/EstimateForm/EstimateForm";

// const currentDate = new Date().toLocaleDateString();

// const defaultValues = {
//   client: {
//     firstName: "Test",
//     address: "123 N Main St",
//     phone: "555 123 7890",
//     email: "Default email test",
//   },
//   estimateDate: currentDate,
//   lineItems: [
//     {
//       name: "Test",
//       description: "Test Desc",
//       quantity: "5",
//       rate: "5",
//       total: "25",
//     },
//   ],
//   invoiced: false,
// };

export default function Estimates() {
  // const [values, setValues] = useState(defaultValues);
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
          total: "380",
        },
      ],
      invoiced: false,
    },
    {
      client: {
        name: "Dee D",
        address: "555 S Cherry Dr",
        phone: "123 777 5555",
        email: "deeD@example.com",
      },
      estimateDate: "03/22/22",
      lineItems: [
        {
          name: "Install LVP",
          description: "Install new LVP in kitchen area.",
          quantity: "300",
          rate: "2.00",
          total: "600",
        },
      ],
      invoiced: true,
    },
  ]);
  // const [editIndex, setEditIndex] = useState(-1);
  return (
    <Box p={5}>
      <Box textAlign="center">
        <Heading size={"xl"} pb={"2rem"}>
          Estimates
        </Heading>
        <EstimateForm
          // formValues={defaultValues}
          btnText={"New Estimate"}
          btnColor={"green"}
          btnIcon={true}
        />
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
          return (
            // Pass estimate form index state for "editing" or "viewing" an estimate
            <EstimatesBody
              key={i}
              name={estimate.client.name}
              description={estimate.lineItems[0].description}
              price={estimate.client.price}
              total={estimate.lineItems[0].total}
              invoiced={estimate.invoiced}
              addLineItem={() => addLineItem}
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
