import React from 'react'

import CardForm from '../components/CardForm'

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
    <CardForm 
    btnText={"Add Expense"}
    header={"Expense Report"}
    cardHeader={"Name of Expense"}
    cardBody={"Expand to view Expense details"}
    addBtn = {() => addClickHandler}
    editBtn = {() => editClickHandler}
    deleteBtn = {() => deleteClickHandler}
    />
)
}
