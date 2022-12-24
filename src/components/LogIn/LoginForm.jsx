import React from 'react'
import { useForm } from 'react-hook-form'

import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalHeader
} from "@chakra-ui/react"

export default function LoginForm(props) {
  const { register, handleSubmit, formState: { errors }} = useForm();

  // onSubmit is where you may query database etc.
  const onSubmit = data => console.log(data)
  console.log(errors)


  return (
    <ModalContent>
    <ModalHeader fontSize={"2rem"} textAlign={"center"}>Login</ModalHeader>

      <Box w={"90%"} margin={"auto"} p={"1rem"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isRequired>

            <FormLabel m={"2"} p={"1"}>Email</FormLabel> 
              <Input type="email" placeholder={"Enter your email..."} {...register("Email", {required: true, maxLength: 20})}/>
            <FormLabel m={"2"} p={"1"}>Password</FormLabel>
              <Input type="password" placeholder={"Enter your password..."} {...register("Password", {required: true, maxLength: 20})} />

          </FormControl>
            <Box display={"flex"} w={"100%"} justifyContent={"center"}>
              <Button type={"submit"} colorScheme={"green"} w={"90%"} m={5}>Login</Button>
            </Box>
        </form>
      </Box>


      <ModalFooter w={"90%"} margin={"auto"}>
        <Box textAlign={"end"} w={"90%"} m={1}>
          <Button colorScheme={"yellow"} color={"white"} onClick={props.onClose}>Close</Button>
          <Button colorScheme={"twitter"} m={1} onClick={props.handleSignUp()}>Sign Up</Button>
        </Box>
      </ModalFooter>
  </ModalContent>
  )
}
