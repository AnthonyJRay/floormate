import React from 'react'
import ClientsCard from "../components/clients/ClientsCard"

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
    <ClientsCard 
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