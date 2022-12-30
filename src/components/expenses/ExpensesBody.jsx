import { useState } from 'react'

import {
  ListItem,
  Box,
  Text,
  Button,
  Input,
  propNames
} from "@chakra-ui/react"

import { CloseIcon, CheckIcon, EditIcon } from "@chakra-ui/icons"

export default function ExpensesBody(props) {
  const [isEditing, setIsEditing] = useState(true);

  const {
    targetExpense,
    expenseItem
  } = props;

  const editClickHandler = () => {
    setIsEditing(!isEditing)
    if(!isEditing) {
      console.log("Editing!")
    } else {
      console.log("Saved!")
    }
  }

  // const saveExpenseHandler = () => {
  //   const { newExpense } = props
  //    const {expenseItems, setExpenseItems} = props
  //    setExpenseItems([{

  //      ...expenseItems,   
  //    },
  //    {

  //      ...newExpense
  //    }
  //   ])
  //   editClickHandler()
  // }

  

  const newExpenseHandler = (e, id) => {
    console.log(id)
    console.log(targetExpense[id])

    // props.setNewExpense(({
    //   ...newExpense,
    //   [id]: e.target.value
    // }))
    props.setExpenseItems([
      ...expenseItems,
      // expenseItems[idProp].id: e.target.value
    ])
  }

  return (
    <ListItem display={"flex"} flexDirection={["column", null, "row", "row"]} alignItems={"center"} p={1} m={[10, 8, 6, 4, 2]} border={"1px"} borderRadius={"5px"} borderColor={"gray.500"}>
      <Box display="flex" flexDirection={["column", null, "row"]} justifyContent={"space-around"} alignItems={["center", "center", "flex-start"]} w={"90%"}>
        
        {isEditing ? <Input id={"expenseDate"} 
                            placeholder={"Expense Date"} 
                            value={targetExpense.expenseDate} 
                            onChange={e => newExpenseHandler(e, e.target.id)} m={2}/> 
                            : <Text p={2}>{targetExpense.expenseDate}</Text>}

        {isEditing ? <Input id={"expenseName"} 
                            placeholder={"Expense Name"} 
                            value={targetExpense.expenseName} 
                            onChange={(e) => newExpenseHandler(e, e.target.id)} m={2}/> 
                            : <Text p={2}>{targetExpense.expenseName}</Text>}

        {isEditing ? <Input id={"expenseTotal"} 
                            placeholder={"Expense Total"} 
                            value={targetExpense.expenseTotal} 
                            onChange={(e) => newExpenseHandler(e, e.target.id)} m={2} /> 
                            : <Text p={2} color={"red"}>{targetExpense.expenseTotal}</Text>}

        {isEditing ? <Input id={"expenseDesc"} 
                            placeholder={"Expense Description"} 
                            value={targetExpense.expenseDesc} 
                            onChange={(e) => newExpenseHandler(e, e.target.id)} m={2}/> 
                            : <Text p={2}>{targetExpense.expenseDesc}</Text>}
      </Box>

      <Box display={"flex"} flexDirection={["row"]} justifyContent={"space-around"} w={["60%", "36%", "25%", "20%", "14%", "9%"]} p={2} m={"auto"}>
        {isEditing ? 
          <Button colorScheme={"green"} 
                  onClick={editClickHandler}><CheckIcon 
                  color={"white"} boxSize={4}/></Button> 
                  : 
          <Button colorScheme={"yellow"} 
                  onClick={editClickHandler}><EditIcon 
                  color={"white"} boxSize={4}/></Button>
        }
        <Button onClick={props.deleteClickHandler} 
                colorScheme={"red"}><CloseIcon 
                boxSize={3}/></Button>
      </Box>
    </ListItem>
  );
}