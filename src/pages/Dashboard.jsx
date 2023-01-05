import { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

export default function Dashboard() {
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
    </>
  );
}
