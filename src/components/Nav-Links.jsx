import React from 'react'
import { Link } from 'react-router-dom'
import Login from "./LogIn/Login"


// UI Imports
import { 
  List, 
  ListItem, 
  ListIcon, 
  Hide, 
  Text, 
  Box, 
  Button 
} from "@chakra-ui/react"

// Icon Imports
import { BiLineChartDown } from "react-icons/bi"
import { BiEdit } from "react-icons/bi"
import { BiFace } from "react-icons/bi"
import { BiStoreAlt } from "react-icons/bi"
import { FaFileInvoiceDollar } from 'react-icons/fa'

export default function Navlinks() {
  return (
    <Box display="flex" justifyContent="center" pt="2rem">
    <List spacing={12} w={["100%", "80%", "65"]}>

      {/* Dashboard NavLink */}
  <ListItem textAlign={[ 'center', null, 'left' ]}>
    <Link to={`/`}>
      <Box display={["null", "null", "flex"]} alignItems="center">
      <ListIcon as={BiStoreAlt} color='black.900' fontSize={["2rem", null, "2rem"]}/>
      <Hide below='md'><Text>Dashboard</Text></Hide>
      </Box>
    </Link>
  </ListItem>

  {/* Estimates NavLink */}
  <ListItem textAlign={[ 'center', null, 'left' ]}>
    <Link to={`estimates`}>
    <Box display={["null", "null", "flex"]} alignItems="center">
      <ListIcon as={BiEdit} color='black.900' fontSize={["2rem", null, "2rem"]} />
      <Hide below='md'>Estimates</Hide>
    </Box>
    </Link>
  </ListItem>

  {/* Invoices NavLink */}
  <ListItem textAlign={[ 'center', null, 'left' ]}>
    <Link to={`invoices`}>
    <Box display={["null", "null", "flex"]} alignItems="center">
      <ListIcon as={FaFileInvoiceDollar} color='black.900' fontSize={["2rem", null, "2rem"]} />
      <Hide below='md'>Invoices</Hide>
    </Box>
    </Link>
  </ListItem>

  {/* Clients NavLink */}
  <ListItem textAlign={[ 'center', null, 'left' ]}>
    <Link to={`clients`}>
      <Box display={["null", "null", "flex"]} alignItems="center">
      <ListIcon as={BiFace} color='black.900' fontSize={["2rem", null, "2rem"]}/>
      <Hide below='md'>Clients</Hide>
      </Box>
    </Link>
  </ListItem>

  {/* Expenses NavLink */}
  <ListItem textAlign={[ 'center', null, 'left' ]}>
    <Link to={`expenses`}>
      <Box display={["null", "null", "flex"]} alignItems="center">
      <ListIcon as={BiLineChartDown} color='black.900' fontSize={["2rem", null, "2rem"]}/>
      <Hide below='md'>Expenses</Hide>
      </Box>
      </Link>
  </ListItem>

  </List>
  {/* Sign-in / Sign-out  */}
  <Box position="absolute" justifyContent="center" bottom="5px" margin="auto">
      <Login />
  </Box>
  </Box>
   )
}
