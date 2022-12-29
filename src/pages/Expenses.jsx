import { useState } from 'react'

import ExpensesBody from "../components/expenses/ExpensesBody"

import {
  Box,
  Heading,
  List,
  Button,
  Text
} from "@chakra-ui/react"

import {
  AddIcon
} from "@chakra-ui/icons"

export default function Expenses() {
  const [ expenseItems, setExpenseItem ] = useState([{
    expenseDate: "",
    expenseName: "",
    expenseTotal: "",
    expenseDesc: ""
  }])

  const [ newExpense, setNewExpense ] = useState({
    expenseDate: "",
    expenseName: "",
    expenseTotal: "",
    expenseDesc: ""
  })

  const [isEditing, setIsEditing ] = useState(false);

  function editClickHandler() {
    setIsEditing(!isEditing)
    if(!isEditing) {
      console.log("Editing!")
    } else {
      console.log("Saved!")
    }
  }
  function deleteClickHandler() {
    return console.log("Expenses Delete Button!")
  }
  function addClickHandler() {
    return console.log("New Expenses Added!")
  }


  return (
    <Box textAlign={"center"} pt={5}>
      <Heading>Expenses</Heading>
      <List pt={5}>
        <ExpensesBody isEditing={isEditing} expenseItems={expenseItems} editClickHandler={editClickHandler} deleteClickHandler={deleteClickHandler}/>
      </List>

      <Button colorScheme={"green"} w={"75%"} m={5} onClick={addClickHandler}>
        <AddIcon/>
        <Text w={"35%"}>Add New Expense</Text>
      </Button>
    </Box>
)
}
