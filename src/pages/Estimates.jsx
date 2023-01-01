import { useState, useEffect } from "react";
import { Box, Heading, Grid, Button, GridItem } from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";

import EstimatesBody from "../components/estimates/EstimatesBody";
import EstimateForm from "../components/estimates/EstimateForm";

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
  const [editIndex, setEditIndex] = useState(-1);

  const addLineItem = () => {
    console.log("Add Line Item");
  };

  return (
    <Box p={5}>
      <Box textAlign="center">
        <Heading size={"xl"} pb={"2rem"}>
          Estimates
        </Heading>
        {/* ESTIMATE FORM FOR A NEW ESTIMATE */}
        {/* This is be a blank Estimate for creating a new estimate */}
        <EstimateForm
          btnText={"New Estimate"}
          btnColor={"green"}
          btnIcon={true}
          newEstimate={() => setValues(defaultValues)}
          addLineItem={addLineItem}
          onChange={() => console.log("Something changed")}
          onSave={() => console.log("Saved")}
          onDelete={() => onDelete(estimate, i)}
        />

        <Button onClick={() => <EstimateForm />}>Hello</Button>
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
            // Pass estimate form state for "editing" or "viewing" an estimate
            <GridItem border="1px" borderColor="gray.200">
              <EstimatesBody
                key={i}
                value={i === editIndex ? values : estimate}
                name={estimate.client.name}
                description={estimate.lineItems[0].description}
                price={estimate.client.price}
                total={estimate.lineItems[0].total}
                invoiced={estimate.invoiced}
                addLineItem={addLineItem}
                onDelete={() => {
                  setEstimateData((prev) => {
                    return prev.filter((_deletedEstimate, _i) => {
                      return _i !== i;
                    });
                  });
                }}
              />
              <Box
                display={"flex"}
                width={"90%"}
                justifyContent={"space-around"}
                m={2}
              >
                <EstimateForm
                  btnText={"View"}
                  btnColor={"yellow"}
                  btnIcon={false}
                  addLineItem={addLineItem}
                />
                <Button
                  size={"sm"}
                  colorScheme={"red"}
                  onClick={() => console.log("deleted")}
                >
                  <DeleteIcon />
                </Button>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}
