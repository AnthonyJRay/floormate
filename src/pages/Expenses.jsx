import { useState } from "react";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { Box, Heading, List, Button } from "@chakra-ui/react";
import ExpensesBody from "../components/expenses/ExpensesBody";

const defaultValues = {
  occurredOn: "",
  name: "",
  total: "",
  description: "",
};

export default function Expenses() {
  const [expenseItems, setExpenseItems] = useState([
    {
      occurredOn: "03/22/22",
      name: "Gas",
      total: "120.00",
      description: "Fuel for work truck",
    },
    {
      occurredOn: "05/03/22",
      name: "Hammer",
      total: "60.00",
      description: "New hammer",
    },
  ]);

  const [values, setValues] = useState(defaultValues);
  const [editIndex, setEditIndex] = useState(-1);

  return (
    <Box textAlign={"center"} pt={5}>
      <Heading>Expenses</Heading>

      <Button
        colorScheme={"green"}
        w={["56%", "40%", "32%", "16%"]}
        m={5}
        onClick={() => {
          setExpenseItems([defaultValues, ...expenseItems]);
        }}
      >
        <PlusSquareIcon boxSize={6} />
        <Box>Add New Expense</Box>
      </Button>

      <List pt={5}>
        {expenseItems.map((expense, i) => {
          return (
            <ExpensesBody
              key={i}
              value={i === editIndex ? values : expense}
              isEditing={i === editIndex}
              onEdit={() => {
                setValues(expense);
                setEditIndex(i);
              }}
              onCancel={() => setEditIndex(-1)}
              onSave={(changedExpense) => {
                setExpenseItems((prev) =>
                  prev.map((_expense, _i) => {
                    return i !== _i ? _expense : changedExpense;
                  })
                );
                setValues(defaultValues);
                setEditIndex(-1);
              }}
              onChange={(value) => {
                setValues(value);
              }}
              onDelete={() => {
                setExpenseItems((prev) =>
                  prev.filter((_deletedExpense, _i) => {
                    return _i !== i;
                  })
                );
              }}
            />
          );
        })}
      </List>
    </Box>
  );
}
