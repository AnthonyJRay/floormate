import { useState, useEffect } from 'react'

import EstimatesCard from "../components/EstimatesCard"

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
    setEstimateData(jsonData.rows);
  }

  useEffect(() => {
    estimatesData();
  },[])




  return (
    <>
    <EstimatesCard 
    btnText={"New Estimate"}
    header={"Estimate List"}
    cardHeader={"Job name"}
    // cardBody={estimateData.map((estimates) => {
    //   return estimates.name;
    // })}
    addBtn = {() => addClickHandler}
    editBtn = {() => editClickHandler}
    deleteBtn = {() => deleteClickHandler}
    />
</>
)
}
