import { useState, useEffect } from 'react'

import DisplayCards from "../components/DisplayCards"
import EstimatesBody from "../components/EstimatesBody"

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

  estimateData.map((est) => {
    return console.log(est);
  })


console.log(estimateData);
  return (
    <>
    <DisplayCards 
    btnText={"New Estimate"}
    header={"Estimate List"}
    cardBody={ estimateData.map((estimate) => {
      return(
      <EstimatesBody key={estimate.id} header={estimate.clientname} body={estimate.estimatedesc} price={estimate.price}/>
      )
    })}
    addBtn = {() => addClickHandler}
    editBtn = {() => editClickHandler}
    deleteBtn = {() => deleteClickHandler}
    />
</>
)
}
