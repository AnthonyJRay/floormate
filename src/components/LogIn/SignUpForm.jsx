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

export default function SignUpForm(props) {
  const { register, handleSubmit, formState: { errors }} = useForm();

  // onSubmit is where you may query database etc.
  const onSubmit = data => console.log(data)
  console.log(errors)



  return (
    <ModalContent>
    <ModalHeader fontSize={"2rem"} textAlign={"center"}>Sign Up</ModalHeader>

      <Box width={"90%"} margin={"auto"} p={"1rem"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isRequired>

          <FormLabel m={"2"} p={"1"}>First Name:</FormLabel>
            <Input type="text" placeholder={"John"} {...register("First Name", {required: true, maxLength: 20})}/>

          <FormLabel m={"2"} p={"1"}>Last Name:</FormLabel>
            <Input type="text" placeholder={"Doe"} {...register("Last Name", {required: true, maxLength: 20})}/>

          <FormLabel m={"2"} p={"1"}>Business Name:</FormLabel>
            <Input type="text" placeholder={"Joe's Consulting Agency LLC"} {...register("Business Name", {required: true, maxLength: 30})}/>

          </FormControl>
          <FormLabel m={"2"} p={"1"}>Business Address:</FormLabel>
            <Input type="text" placeholder={"123 N Main St, Austin, TX"} {...register("First Name", {required: false, maxLength: 30})}/>

          <FormControl isRequired>
          <FormLabel m={"2"} p={"1"}>Phone:</FormLabel>
            <Input type="number" placeholder={"Business Phone: (xxx) xxx-xxxx"} {...register("Business Phone", {required: true, maxLength: 20})}/>

          <FormLabel m={"2"} p={"1"}>Email</FormLabel> 
              <Input type="email" placeholder={"joe@joeconsulting.com"} {...register("Business Email", {required: true, maxLength: 30})}/>

          <FormLabel m={"2"} p={"1"}>Password</FormLabel>
              <Input type="password" placeholder={"Password"} {...register("Password", {required: true, maxLength: 20})}/>

          </FormControl>
            <Box display={"flex"} w={"100%"} justifyContent={"center"}>
              <Button type={"submit"} colorScheme={"green"} w={"90%"} m={2}>Sign Up</Button>
            </Box>
          </form>
      </Box>

      <ModalFooter w={"90%"} margin={"auto"}>
        <Box textAlign={"end"} w={"90%"} m={1}>
          <Button colorScheme={"yellow"} color={"white"} onClick={props.onClose}>Close</Button>
          <Button colorScheme={"twitter"} m={1} onClick={props.handleSignUp()}>Login</Button>
        </Box>
      </ModalFooter>
  </ModalContent>
  )
}
