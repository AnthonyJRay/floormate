import { CloseIcon, CheckIcon, EditIcon, DeleteIcon } from "@chakra-ui/icons";
import { ListItem, Box, Text, Button, Input } from "@chakra-ui/react";

export default function ExpensesBody({
  value,
  onChange = () => {},
  onEdit = () => {},
  onSave = () => {},
  onCancel = () => {},
  isEditing = false,
}) {
  return (
    <ListItem
      display={"flex"}
      flexDirection={["column", null, "row", "row"]}
      alignItems={"center"}
      p={1}
      m={[10, 8, 6, 4, 2]}
      borderColor={"gray.500"}
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
            <Button onClick={() => {}} colorScheme={"red"}>
              <DeleteIcon boxSize={3} />
            </Button>
          </>
        )}
      </Box>
    </ListItem>
  );
}

function ExpenseForm({ value, onChange = () => {} }) {
  const { name, occurredOn, total, description } = value;
  return (
    <>
      <Input
        id={"occurredOn"}
        placeholder={"Expense Date"}
        value={occurredOn}
        onChange={(e) => onChange({ ...value, occurredOn: e.target.value })}
        m={2}
      />

      <Input
        id={"name"}
        placeholder={"Expense Name"}
        value={name}
        onChange={(e) => onChange({ ...value, name: e.target.value })}
        m={2}
      />

      <Input
        id={"total"}
        placeholder={"Expense Total"}
        value={total}
        onChange={(e) => onChange({ ...value, total: e.target.value })}
        m={2}
      />

      <Input
        id={"description"}
        placeholder={"Expense Description"}
        value={description}
        onChange={(e) => onChange({ ...value, description: e.target.value })}
        m={2}
      />
    </>
  );
}

function ExpenseDisplay({ name, occurredOn, total, description }) {
  return (
    <>
      <Text p={2}>{occurredOn}</Text>
      <Text p={2}>{name}</Text>
      <Text p={2} color={"red"}>
        {total}
      </Text>
      <Text p={2}>{description}</Text>
    </>
  );
}
