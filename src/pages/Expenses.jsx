import { useState } from 'react'

import ExpensesBody from "../components/expenses/ExpensesBody"

import {
  Box,
  Heading,
  List,
  Button,

} from "@chakra-ui/react"

import {
  PlusSquareIcon
} from "@chakra-ui/icons"

export default function Expenses() {
  const [ expenseItems, setExpenseItems ] = useState([{
    expenseDate: "03/22/22",
    expenseName: "Gas",
    expenseTotal: "120.00",
    expenseDesc: "Fuel for work truck"
  }])

  // const [ newExpense, setNewExpense ] = useState({
  //   expenseDate: "",
  //   expenseName: "",
  //   expenseTotal: "",
  //   expenseDesc: ""
  // })

  const newExpense = {
    expenseDate: "",
    expenseName: "",
    expenseTotal: "",
    expenseDesc: ""
  }

  const deleteClickHandler = () => {
    return console.log("Expenses Delete Button!")
  }

  const addClickHandler = () => {
    return setExpenseItems([
      ...expenseItems,
      newExpense
    ])
  }

  return (
    <Box textAlign={"center"} pt={5}>
      <Heading>Expenses</Heading>
      <List pt={5}>
        {expenseItems.map((expense, id) => {
          return <ExpensesBody 
                    key={id}
                    targetExpense={expense} 
                    expenseItems={expenseItems}
                    setExpenseItems={setExpenseItems} 
                    deleteClickHandler={deleteClickHandler}/>
        })}
      </List>

      <Button colorScheme={"green"} w={["75%", null, "40%", "25"]} m={5} onClick={addClickHandler}>
          <PlusSquareIcon boxSize={6}/>
          <Box>Add New Expense</Box>
      </Button>
    </Box>
)
}
