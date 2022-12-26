import React from 'react'

import {
  ModalContent,
  ModalBody,
  Box,
} from "@chakra-ui/react"

export default function accountSuccess() {
  return (
    <ModalContent>
      <ModalBody>
        <Box p={4} m={"auto"} textAlign={"center"}>Account Created Successfully</Box>
      </ModalBody>
    </ModalContent>
  )
}
