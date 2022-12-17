import React from 'react'
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
        <Icon as={FiSettings}/>
        <Text>Personal Name Here</Text>
        <Text>Business Name Here</Text>
      </Flex>
    <Divider />
    </Box>
  )
}
