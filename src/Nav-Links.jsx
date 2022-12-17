import React from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem, ListIcon, Hide } from "@chakra-ui/react"

import { BiLineChartDown } from "react-icons/bi"
import { BiEdit } from "react-icons/bi"
import { BiFace } from "react-icons/bi"
import { BiStoreAlt } from "react-icons/bi"

export default function Navlinks() {
  return (
    <List spacing={10}>
  <ListItem textAlign={[ 'center', null, 'left' ]}>
    <Link to={`/`}>
      <ListIcon as={BiStoreAlt} color='black.900'/>
      <Hide below='md'>Dashboard</Hide>
    </Link>
  </ListItem>
  <ListItem textAlign={[ 'center', null, 'left' ]}>
    <Link to={`estimates`}>
      <ListIcon as={BiEdit} color='black.900' />
      <Hide below='md'>Estimates</Hide>
    </Link>
  </ListItem>
  <ListItem textAlign={[ 'center', null, 'left' ]}>
    <Link to={`clients`}>
      <ListIcon as={BiFace} color='black.900' />
      <Hide below='md'>Clients</Hide>
    </Link>
  </ListItem>
  <ListItem textAlign={[ 'center', null, 'left' ]}>
    <Link to={`expenses`}>
      <ListIcon as={BiLineChartDown} color='black.900' />
      <Hide below='md'>Expenses</Hide>
      </Link>
  </ListItem>
</List>
  )
}
