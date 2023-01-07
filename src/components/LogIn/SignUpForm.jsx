import { useState } from "react";
import { useForm } from "react-hook-form";

import AccountSuccess from "../utils/accountSuccess";

import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Text,
} from "@chakra-ui/react";

export default function SignUpForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const initialState = {
    userFirstName: "",
    userLastName: "",
    userBusinessName: "",
    userAddress: "",
    userPhone: "",
    userEmail: "",
    userPassword: "",
  };

  const [userData, setUserData] = useState(initialState);
  const [userSuccess, setUserSuccess] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  // Input updating State
  const handleFormState = (e, id) => {
    setUserData({
      ...userData,
      [id]: e.target.value,
    });
  };

  // Submit Handler
  const onSubmitForm = async () => {
    try {
      const body = { userData };
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const responseData = await response.json();
      console.log(responseData);
      let { success, message } = responseData;
      if (success) {
        setUserSuccess(success);
        setUserData(initialState);
      } else {
        setResponseMessage(message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return userSuccess ? (
    <AccountSuccess />
  ) : (
    <ModalContent>
      <ModalHeader fontSize={"2rem"} textAlign={"center"}>
        Sign Up
      </ModalHeader>

      <Box width={"90%"} margin={"auto"} p={"1rem"}>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <FormControl isRequired>
            <FormLabel m={["2"]} p={["1"]}>
              First Name:
            </FormLabel>
            <Input
              type={"text"}
              id={"userFirstName"}
              placeholder={"John"}
              name={"userFirstName"}
              value={userData.userFirstName}
              {...register("userFirstName", { required: true, maxLength: 20 })}
              onChange={(e) => handleFormState(e, e.target.name)}
            />

            <FormLabel m={"2"} p={"1"}>
              Last Name:
            </FormLabel>
            <Input
              type={"text"}
              id={"userLastName"}
              placeholder={"Doe"}
              value={userData.userLastName}
              {...register("userLastName", { required: true, maxLength: 20 })}
              onChange={(e) => handleFormState(e, e.target.name)}
            />

            <FormLabel m={"2"} p={"1"}>
              Business Name:
            </FormLabel>
            <Input
              type={"text"}
              id={"userBusinessName"}
              placeholder={"Joe's Consulting Agency LLC"}
              value={userData.userBusinessName}
              {...register("userBusinessName", {
                required: true,
                maxLength: 30,
              })}
              onChange={(e) => handleFormState(e, e.target.name)}
            />
          </FormControl>
          <FormLabel m={"2"} p={"1"}>
            Business Address:
          </FormLabel>
          <Input
            type={"text"}
            id={"userAddress"}
            placeholder={"123 N Main St, Austin, TX"}
            value={userData.userAddress}
            {...register("userAddress", { required: false, maxLength: 30 })}
            onChange={(e) => handleFormState(e, e.target.name)}
          />

          <FormControl isRequired>
            <FormLabel m={"2"} p={"1"}>
              Phone:
            </FormLabel>
            <Input
              type={"number"}
              id={"userPhone"}
              placeholder={"Business Phone: (xxx) xxx-xxxx"}
              value={userData.userPhone}
              {...register("userPhone", { required: true, maxLength: 20 })}
              onChange={(e) => handleFormState(e, e.target.name)}
            />

            <FormLabel m={"2"} p={"1"}>
              Email
            </FormLabel>
            <Input
              type={"email"}
              id={"userEmail"}
              placeholder={"joe@joeconsulting.com"}
              value={userData.userEmail}
              {...register("userEmail", { required: true, maxLength: 30 })}
              onChange={(e) => handleFormState(e, e.target.name)}
            />
            <Text textAlign={"center"} color={"red"}>
              {!userSuccess ? responseMessage : null}
            </Text>

            <FormLabel m={"2"} p={"1"}>
              Password
            </FormLabel>
            <Input
              type={"password"}
              id={"userPassword"}
              placeholder={"Password"}
              value={userData.userPassword}
              {...register("userPassword", { required: true, maxLength: 20 })}
              onChange={(e) => handleFormState(e, e.target.name)}
            />
          </FormControl>
          <Box display={"flex"} w={"100%"} justifyContent={"center"}>
            <Input type={"submit"} w={"90%"} m={2} />
            {/* <Button type={"submit"} colorScheme={"green"} w={"90%"} m={2}>Sign Up</Button> */}
          </Box>
        </form>
      </Box>

      <ModalFooter w={"90%"} margin={"auto"}>
        <Box textAlign={"end"} w={"90%"} m={1}>
          <Button
            type={"button"}
            colorScheme={"yellow"}
            color={"white"}
            onClick={props.onClose}
          >
            Close
          </Button>
          <Button
            type={"button"}
            colorScheme={"twitter"}
            m={1}
            onClick={props.handleSignUp()}
          >
            Login
          </Button>
        </Box>
      </ModalFooter>
    </ModalContent>
  );
}
