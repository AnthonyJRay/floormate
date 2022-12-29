import {
  ListItem,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";

import { CloseIcon, CheckIcon, EditIcon } from "@chakra-ui/icons"

export default function ExpensesBody(props) {
  return (
    <ListItem display={"flex"} alignItems={"center"} p={1} m={2} border={"1px"} borderRadius={"5px"} borderColor={"gray.500"}>
          <Box display="flex" flexDirection={"row"} justifyContent={"space-around"} alignItems={"center"} w={"82%"}>
            <Text p={2}>03/22/22</Text>
            <Text p={2}>Gas</Text>
            <Text p={3} color={"red"}>120.00</Text>
            <Text w={"50%"} pl={1} pr={1}>Fuel for work truck</Text>
          </Box>
          <Box display={"flex"} justifyContent={"space-around"} w={"18%"}>
            {props.isEditing ? 
              <Button colorScheme={"green"}><CheckIcon color={"white"} onClick={props.editClickHandler} /></Button> : 
              <Button colorScheme={"yellow"}><EditIcon color={"white"} onClick={props.editClickHandler} /></Button>
            }
            <Button colorScheme={"red"}><CloseIcon /></Button>
          </Box>
        </ListItem>
  );
}