import React from 'react'
import { Link } from 'react-router-dom'

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

export default function Navlinks() {
  return (
    <Box display="flex" justifyContent="center" pt="2rem">
    <List spacing={14} w="100%">

      {/* Dashboard NavLink */}
  <ListItem textAlign={[ 'center', null, 'left' ]} padding="5px">
    <Link to={`/`}>
      <Box display="flex" alignItems="center">
      <ListIcon as={BiStoreAlt} color='black.900' fontSize={["3rem", null, "2rem"]}/>
      <Hide below='md'><Text>Dashboard</Text></Hide>
      </Box>
    </Link>
  </ListItem>

  {/* Estimates NavLink */}
  <ListItem textAlign={[ 'center', null, 'left' ]} padding="5px">
    <Link to={`estimates`}>
    <Box display="flex" alignItems="center">
      <ListIcon as={BiEdit} color='black.900' fontSize={["3rem", null, "2rem"]} />
      <Hide below='md'>Estimates</Hide>
    </Box>
    </Link>
  </ListItem>

  {/* Clients NavLink */}
  <ListItem textAlign={[ 'center', null, 'left' ]} padding="5px">
    <Link to={`clients`}>
      <Box display="flex" alignItems="center">
      <ListIcon as={BiFace} color='black.900' fontSize={["3rem", null, "2rem"]}/>
      <Hide below='md'>Clients</Hide>
      </Box>
    </Link>
  </ListItem>

  {/* Expenses NavLink */}
  <ListItem textAlign={[ 'center', null, 'left' ]} padding="5px">
    <Link to={`expenses`}>
      <Box display="flex" alignItems="center">
      <ListIcon as={BiLineChartDown} color='black.900' fontSize={["3rem", null, "2rem"]}/>
      <Hide below='md'>Expenses</Hide>
      </Box>
      </Link>
  </ListItem>

      </List>
  {/* Sign-in / Sign-out  */}
  <Box display="flex" position="absolute" justifyContent="center" bottom="1rem" margin="auto" bg='red.200'>
    <Link to={`signout`}>
        <Button size='lg' colorScheme='twitter'>Sign In</Button>
      </Link>
  </Box>
  </Box>
   )
}
