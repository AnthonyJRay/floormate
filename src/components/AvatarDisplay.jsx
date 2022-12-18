import React from 'react'
import { Link } from 'react-router-dom'
import {
  Box,
  Flex, 
  Avatar, 
  Icon, 
  Divider,
  Text
 } from "@chakra-ui/react"

import { FiSettings } from "react-icons/fi"

export default function AvatarDisplay() {
  return (
    <Box height="25%" >
      <Flex flexDirection="column" height="100%" justifyContent="space-around" alignItems="center">
        <Avatar size="lg"/>
        <Link to={`settings`}>
        <Icon as={FiSettings}/>
        </Link>
        <Text>Personal Name</Text>
        <Text>Business Name</Text>
      </Flex>
    <Divider w="95%"/>
    </Box>
  )
}
