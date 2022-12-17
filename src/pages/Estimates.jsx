import React from 'react'

import CardForm from "../components/CardForm"

export default function Estimates() {
  return (
    <CardForm 
    btnText={"New Estimate"}
    header={"Estimate List"}
    cardHeader={"Job name"}
    cardBody={"Expand to view Estimate details"}
    />
)
}
