import React from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem, ListIcon } from "@chakra-ui/react"

import { BiLineChartDown } from "react-icons/bi"
import { BiEdit } from "react-icons/bi"
import { BiFace } from "react-icons/bi"
import { BiStoreAlt } from "react-icons/bi"

export default function Navlinks() {
  return (
    <List spacing={10}>
  <ListItem>
    <ListIcon as={BiStoreAlt} color='black.900' />
    <Link to={`/`}>Dashboard</Link>
  </ListItem>
  <ListItem>
    <ListIcon as={BiEdit} color='black.900' />
    <Link to={`estimates`}>Estimates</Link>
  </ListItem>
  <ListItem>
    <ListIcon as={BiFace} color='black.900' />
    <Link to={`clients`}>Clients</Link>
  </ListItem>
  {/* You can also use custom icons from react-icons */}
  <ListItem>
    <ListIcon as={BiLineChartDown} color='black.900' />
    <Link to={`expenses`}>Expenses</Link>
  </ListItem>
</List>
  )
}
