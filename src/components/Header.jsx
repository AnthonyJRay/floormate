import React from 'react'

import { Heading, Highlight, Text } from '@chakra-ui/react'


export default function Header() {
  return (
    <Heading size={"xl"} textAlign="center" pl="1rem">
      <Highlight query='mate' styles={{ px: '1', py: '1', border: '1px', borderColor: 'gray.200', color:"gray.300"}}>
        Floormate
      </Highlight>
    </Heading>
  )
}
