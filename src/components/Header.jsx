import React from 'react'

import { Link } from 'react-router-dom'
import { FiSettings } from "react-icons/fi"

import { 
  Heading, 
  Highlight, 
  Icon,
  Flex
} from '@chakra-ui/react'


export default function Header() {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} width="90%" m={"auto"}>
    <Heading size={"xl"} textAlign="center">
      <Highlight query='mate' styles={{ px: '1', py: '1', border: '1px', borderColor: 'gray.200', color:"gray.300"}}>
        Floormate
      </Highlight>
    </Heading>
            <Link to={`settings`}>
            <Icon as={FiSettings} boxSize="2rem"/>
            </Link>
            </Flex>
  )
}
