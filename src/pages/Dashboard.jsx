import { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

import ExampleChart from "../components/ExampleChart";

const initialData = [
  { time: "2018-12-22", value: 32.51 },
  { time: "2018-12-23", value: 31.11 },
  { time: "2018-12-24", value: 27.02 },
  { time: "2018-12-25", value: 27.32 },
  { time: "2018-12-26", value: 25.17 },
  { time: "2018-12-27", value: 28.89 },
  { time: "2018-12-28", value: 25.46 },
  { time: "2018-12-29", value: 23.92 },
  { time: "2018-12-30", value: 22.68 },
  { time: "2018-12-31", value: 22.67 },
];

const secondData = [
  { time: "2018-12-22", value: 112.12 },
  { time: "2018-12-23", value: 68.51 },
  { time: "2018-12-24", value: 77.02 },
  { time: "2018-12-25", value: 77.32 },
  { time: "2018-12-26", value: 75.17 },
  { time: "2018-12-27", value: 32.89 },
  { time: "2018-12-28", value: 25.46 },
  { time: "2018-12-29", value: 23.92 },
];

export default function Dashboard(props) {
  const [data, setData] = useState([]);

  // const getData = async (req, res) => {
  //   const response = await fetch("http://localhost:5000/");
  //   const jsonData = await response.json();
  //   setData(jsonData.rows);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <>
      <Text>Dashboard</Text>
      <Box display={"flex"}>
        <ExampleChart {...props} data={initialData} title={"Chart #1"} />
        <ExampleChart {...props} data={secondData} title={"Chart #2"} />
        {/* <Text>{data.map((stuff) => {
        return stuff.name
      })}</Text> */}
      </Box>
    </>
  );
}
