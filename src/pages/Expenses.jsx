import React from 'react'


import DisplayCards from "../components/DisplayCards"
import ExpensesBody from "../components/ExpensesBody"

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
    <DisplayCards
    btnText={"Add Expense"}
    header={"Expense Report"}
    cardHeader={"Name of Expense"}
    cardBody={ <ExpensesBody />}
    addBtn = {() => addClickHandler}
    editBtn = {() => editClickHandler}
    deleteBtn = {() => deleteClickHandler}
    />
)
}
