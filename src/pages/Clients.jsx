import React from 'react'
import CardForm from '../components/CardForm'

export default function Clients() {

  function editClickHandler() {
    return console.log("Clients Edit Button!")
  }
  function deleteClickHandler() {
    return console.log("Clients Delete Button!")
  }
  function addClickHandler() {
    return console.log("Clients Add button!")
  }

  return (
    <CardForm 
      btnText={"New Client"}
      header={"Client List"}
      cardHeader={"Client Name"}
      cardBody={"Expand to view client details"}
      addBtn = {() =>  addClickHandler}
      editBtn = {() => editClickHandler}
      deleteBtn = {() => deleteClickHandler}
      />
  )
}