import { useState, useEffect } from "react";

import { Box, Heading, Grid } from "@chakra-ui/react";

// import DisplayCards from "../components/DisplayCards";
import EstimatesBody from "../components/estimates/EstimatesBody";
import NewEstimate from "../components/estimates/NewEstimate";

export default function Estimates() {
  const [estimateData, setEstimateData] = useState([]);

  // Edit button
  function editClickHandler() {
    return console.log("Estimate Edit Button!");
  }

  // Add button
  function addClickHandler() {
    return console.log("Estimate Add button!");
  }

  const estimatesData = async (req, res) => {
    const response = await fetch("http://localhost:5000/estimates");
    const jsonData = await response.json();
    setEstimateData(jsonData.rows);
  };

  useEffect(() => {
    estimatesData();
  }, []);

  return (
    <>
      <Box p={5}>
        <Box textAlign="center">
          <Heading size={"xl"} pb={"2rem"}>
            Estimates
          </Heading>
          <NewEstimate
            btnText={"New Estimate"}
            addBtn={() => addClickHandler}
          />
        </Box>

        {/* Card */}
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
          {estimateData.map((estimate) => {
            return (
              <EstimatesBody
                key={estimate.id}
                header={estimate.clientname}
                body={estimate.estimatedesc}
                price={estimate.price}
              />
            );
          })}
        </Grid>
      </Box>
    </>
  );
}
