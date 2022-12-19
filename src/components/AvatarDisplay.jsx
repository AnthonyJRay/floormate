import React from 'react'
import {
  Box,
  Flex, 
  Avatar, 
  Divider,
  Text,
  Hide
 } from "@chakra-ui/react"

export default function AvatarDisplay() {
  return (
    <Box >
      <Flex flexDirection={"column"} justifyContent={"space-around"} alignItems={"center"} p={"1rem"}>
        <Avatar size={["md", "lg"]} m={"1rem"}/>
        <Hide below="md">
        <Text fontSize={["xs", "xs", "sm"]}>Personal Name</Text>
        <Text fontSize={["xs", "xs", "sm"]}>Business Name</Text>
        </Hide>
      </Flex>
    <Divider w={["95%", "90%", "85%"]} m={"auto"}/>
    </Box>
  )
}
