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
    <Box >
      <Flex flexDirection="column" justifyContent="space-around" alignItems="center">
        <Avatar size={["md", "lg"]}/>
        <Link to={`settings`}>
        <Icon as={FiSettings}/>
        </Link>
        <Text fontSize={["sm"]}>Personal Name</Text>
        <Text fontSize={["sm"]}>Business Name</Text>
      </Flex>
    <Divider w="95%"/>
    </Box>
  )
}
