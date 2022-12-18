import { useState, useEffect } from 'react'

import { Text } from "@chakra-ui/react"

export default function Dashboard() {

  const [data, setData] = useState([]);

  const getData = async (req, res) => {
    const response = await fetch('http://localhost:5000/')
    const jsonData = await response.json();
    console.log(`Dashboard: ${jsonData.rows}`)
    setData(jsonData.rows);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <Text>{data.map((stuff) => {
        return stuff.name
      })}</Text>
    </div>
  )
}

