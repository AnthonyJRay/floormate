import { useState, useEffect } from 'react'

import DisplayCards from "../components/DisplayCards"
import EstimatesBody from "../components/estimates/EstimatesBody"
import NewEstimate from "../components/estimates/NewEstimate"

export default function Estimates() {

  const [estimateData, setEstimateData] = useState([]);

  // Edit button
  function editClickHandler() {
    return console.log("Estimate Edit Button!")
  }
  // Delete button
  function deleteClickHandler() {
    return console.log("Estimate Delete Button!")
  }
  // Add button
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
    <DisplayCards 
    cardForm={<NewEstimate btnText={"New Estimate"} addBtn = {() => addClickHandler}/>}
    header={"Estimates"}
    cardBody={ estimateData.map((estimate) => {
      return(
        <EstimatesBody 
          key={estimate.id} 
          header={estimate.clientname} 
          body={estimate.estimatedesc} 
          price={estimate.price}/>
      )})}
    editBtn = {() => editClickHandler}
    deleteBtn = {() => deleteClickHandler}
    />
</>
)
}
