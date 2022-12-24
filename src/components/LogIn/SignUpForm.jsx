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
  const onSubmit = data => console.log(data)
  console.log(errors)
  // Need a function to handle the sign up submission.
  // Once clicked, modal should display a loading state
  // once loaded modal should display "Account Created, Please Login"
  // Return to Login Page



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

            <Input type="submit"/>
          </form>
      </Box>

      {/* <Box display={"flex"} w={"85%"} m={"auto"} justifyContent={"center"}>
          <Button type={"submit"} colorScheme={"twitter"} w={"100%"}>Sign Up</Button>
      </Box> */}

      <ModalFooter w={"85%"} margin={"auto"} mt={10} p={0}>
        <Button colorScheme={"yellow"} onClick={props.onClose}>Close</Button>
        <Button colorScheme={"green"} m={1} onClick={props.handleSignUp()}>Login</Button>
      </ModalFooter>
  </ModalContent>
  )
}
