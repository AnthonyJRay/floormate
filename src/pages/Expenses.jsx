import React from 'react'


import DisplayCards from "../components/DisplayCards"
import ExpensesBody from "../components/expenses/ExpensesBody"

import {
  Box,
  Heading,
  List,
  ListItem,
  Button,
  Text
} from "@chakra-ui/react"

export default function Expenses() {

  function editClickHandler() {
    return console.log("Expenses Edit Button!")
  }
  function deleteClickHandler() {
    return console.log("Expenses Delete Button!")
  }
  function addClickHandler() {
    return console.log("Expenses Add button!")
  }


  return (
    <Box textAlign={"center"} pt={5}>
      <Heading>Expenses</Heading>
      <List pt={5}>
      <ListItem display={"flex"} alignItems={"center"} p={1} m={2} border={"1px"} borderRadius={"5px"} borderColor={"gray.500"}>
          <Box display="flex" flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"} w={"82%"}>
            <Text p={2}>03/22/22</Text>
            <Text p={2}>Gas</Text>
            <Text p={3} color={"red"}>120.00</Text>
            <Text w={"50%"} pl={1} pr={1}>Fuel for work truck</Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-around"} w={"18%"}>
            <Button colorScheme={"red"}>X</Button>
            <Button colorScheme={"green"}>X</Button>
          </Box>
        </ListItem>
        <ListItem display={"flex"} alignItems={"center"} p={1} m={2} border={"1px"} borderRadius={"5px"} borderColor={"gray.500"}>
          <Box display="flex" flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"} w={"82%"}>
            <Text p={2}>03/22/22</Text>
            <Text p={2}>Tools</Text>
            <Text p={3} color={"red"}>120.00</Text>
            <Text w={"50%"} pl={1} pr={1}>New stretch poles. Texting the responsiveness of this element.</Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-around"} w={"18%"}>
            <Button colorScheme={"red"}>X</Button>
            <Button colorScheme={"green"}>X</Button>
          </Box>
        </ListItem>
      </List>

      <Button colorScheme={"green"} w={"75%"} m={5}>Add New Expense</Button>
    </Box>
)
}
