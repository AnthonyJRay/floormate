import React from 'react'

import CardForm from '../components/CardForm'

export default function Expenses() {
  return (
    <CardForm 
    btnText={"Add Expense"}
    header={"Expense Report"}
    cardHeader={"Name of Expense"}
    cardBody={"Expand to view Expense details"}
    />
)
}
