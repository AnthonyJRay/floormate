import React from 'react'

import { Heading, Highlight } from '@chakra-ui/react'


export default function Header() {
  return (
    <Heading size={"2xl"}>
      <Highlight query='mate' styles={{ px: '1', py: '1', border: '1px', borderColor: 'gray.200'}}>
        Floormate
      </Highlight>
    </Heading>
  )
}
