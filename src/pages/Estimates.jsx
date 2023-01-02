import { useState, useEffect } from "react";
import { Box, Heading, Grid, Button } from "@chakra-ui/react";

import EstimatesBody from "../components/estimates/EstimatesBody";
import EstimateForm from "../components/estimates/EstimateForm/EstimateForm";

const currentDate = new Date().toLocaleDateString();

const defaultValues = {
  client: {
    firstName: "Test",
    address: "",
    phone: "",
    email: "Default email test",
  },
  estimateDate: currentDate,
  lineItems: [
    {
      name: "",
      description: "",
      quantity: "",
      rate: "",
      total: "",
    },
  ],
  invoiced: false,
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

  const [values, setValues] = useState(defaultValues);
  console.log(values);
  const [editIndex, setEditIndex] = useState(-1);

  // const addLineItem = () => {
  //   setValues({
  //     ...values,
  //     lineItems: [
  //       ...values.lineItems,
  //       {
  //         firstName: "",
  //         description: "",
  //         quantity: "",
  //         rate: "",
  //         total: "",
  //       },
  //     ],
  //   });
  // };

  // console.dir(values);
  return (
    <Box p={5}>
      <Box textAlign="center">
        <Heading size={"xl"} pb={"2rem"}>
          Estimates
        </Heading>
        {/* ESTIMATE FORM FOR A NEW ESTIMATE */}
        {/* This is be a blank Estimate for creating a new estimate */}
        <EstimateForm
          formValues={values}
          btnText={"New Estimate"}
          btnColor={"green"}
          btnIcon={true}
          // addLineItem={() => addLineItem}
          // onChange={() => console.log("Something changed")}
          // onSave={() => console.log("Saved")}
          // onDelete={() => onDelete(estimate, i)}
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
              value={i === editIndex ? values : estimate}
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
