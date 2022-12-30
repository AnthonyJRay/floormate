import { useState } from 'react'

import {
  ListItem,
  Box,
  Text,
  Button,
  Input
} from "@chakra-ui/react"

import { CloseIcon, CheckIcon, EditIcon } from "@chakra-ui/icons"

export default function ExpensesBody(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState("");

  const {
    expenseDate, 
    expenseName, 
    expenseTotal, 
    expenseDesc
  } = props.expenseItems;

  function editClickHandler() {
    setIsEditing(!isEditing)
    if(!isEditing) {
      console.log("Editing!")
    } else {
      console.log("Saved!")
    }
  }

  console.log(props)
  return (
    <ListItem display={"flex"} flexDirection={["column", null, "row", "row"]} alignItems={"center"} p={1} m={[10, 8, 6, 4, 2]} border={"1px"} borderRadius={"5px"} borderColor={"gray.500"}>
      <Box display="flex" flexDirection={["column", null, "row", "row", "row"]} justifyContent={"space-around"} alignItems={"flex-start"} w={["90%"]}>
        {isEditing ? <Input placeholder={"Expense Date"} m={2}/> : <Text p={2}>{expenseDate}</Text>}
        {isEditing ? <Input placeholder={"Expense Name"} m={2}/> : <Text p={2}>{expenseName}</Text>}
        {isEditing ? <Input placeholder={"Expense Total"} m={2}/> : <Text p={2} color={"red"}>{expenseTotal}</Text>}
        {isEditing ? <Input placeholder={"Expense Description"} m={2}/> : <Text p={2}>{expenseDesc}</Text>}
      </Box>
      <Box display={"flex"} justifyContent={"space-around"} w={["60%", "36%", "24%", "26%", "20%", "10%"]} p={2} mt={4}>
        {isEditing ? 
          <Button colorScheme={"green"} onClick={editClickHandler} ><CheckIcon color={"white"} boxSize={4}/></Button> : 
          <Button colorScheme={"yellow"} onClick={editClickHandler}><EditIcon color={"white"} boxSize={4}/></Button>
        }
        <Button colorScheme={"red"}><CloseIcon boxSize={3}/></Button>
      </Box>
    </ListItem>
  );
}