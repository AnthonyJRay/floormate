import React from 'react'
import CardForm from '../components/CardForm'

export default function Clients() {
  return (
    <CardForm 
      btnText={"New Client"}
      header={"Client List"}
      cardHeader={"Client Name"}
      cardBody={"Expand to view client details"}
      />
  )
}