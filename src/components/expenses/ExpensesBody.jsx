import { CloseIcon, CheckIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { ListItem, Box, Button } from "@chakra-ui/react";
import ExpenseForm from "./ExpenseForm";
import ExpenseDisplay from "./ExpenseDisplay";

export default function ExpensesBody({
  value,
  onChange = () => {},
  onEdit = () => {},
  onSave = () => {},
  onCancel = () => {},
  onDelete = () => {},
  isEditing = false,
}) {
  return (
    <ListItem
      display={"flex"}
      flexDirection={["column", null, "row", "row"]}
      alignItems={"center"}
      p={1}
      m={[10, 8, 6, 4, 2]}
      bg={"gray.700"}
      borderRadius={"sm"}
      border={"1px"}
      borderColor={"gray.600"}
    >
      <Box
        display="flex"
        flexDirection={["column", null, "row"]}
        justifyContent={"space-around"}
        alignItems={["center", "center", "flex-start"]}
        w={"90%"}
      >
        {isEditing ? (
          <ExpenseForm {...{ value }} onChange={onChange} />
        ) : (
          <ExpenseDisplay {...value} />
        )}
      </Box>

      <Box
        display={"flex"}
        flexDirection={["row"]}
        justifyContent={"space-around"}
        w={["60%", "36%", "25%", "20%", "14%", "9%"]}
        p={2}
        m={"auto"}
      >
        {isEditing ? (
          <>
            <Button colorScheme={"green"} onClick={() => onSave(value)}>
              <CheckIcon color={"white"} boxSize={4} />
            </Button>
            <Button onClick={onCancel} colorScheme={"red"}>
              <CloseIcon boxSize={3} />
            </Button>
          </>
        ) : (
          <>
            <Button colorScheme={"yellow"} onClick={onEdit}>
              <EditIcon color={"white"} boxSize={4} />
            </Button>
            <Button colorScheme={"red"} onClick={onDelete}>
              <DeleteIcon boxSize={3} />
            </Button>
          </>
        )}
      </Box>
    </ListItem>
  );
}
