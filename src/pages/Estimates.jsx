import { useState, useEffect } from 'react'

import CardForm from "../components/CardForm"

export default function Estimates() {

  const [estimateData, setEstimateData] = useState([]);

  function editClickHandler() {
    return console.log("Estimate Edit Button!")
  }
  function deleteClickHandler() {
    return console.log("Estimate Delete Button!")
  }
  function addClickHandler() {
    return console.log("Estimate Add button!")
  }

  const estimatesData = async (req, res) => {
    const response = await fetch('http://localhost:5000/estimates')
    const jsonData = await response.json();
    console.log(`Estimates: ${jsonData.rows}`)
    setEstimateData(jsonData.rows);
  }

  useEffect(() => {
    estimatesData();
    console.log(estimateData);
  },[])




  return (
    <CardForm 
    btnText={"New Estimate"}
    header={"Estimate List"}
    cardHeader={"Job name"}
    cardBody={estimateData.map((data) => {
      return data.name
    })}
    addBtn = {() => addClickHandler}
    editBtn = {() => editClickHandler}
    deleteBtn = {() => deleteClickHandler}
    />
)
}
