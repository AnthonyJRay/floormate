import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";

const initialState = {
  userEmail: "",
  userPassword: "",
};

export default function LoginForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userInput, setUserInput] = useState(initialState);

  const handleInputState = (e, id) => {
    setUserInput({
      ...userInput,
      [id]: e.target.value,
    });
  };

  const onSubmitForm = async () => {
    try {
      const body = { userInput };
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const serverResponse = await response.json();
      // Reset form here
    } catch (error) {
      console.error(error);
    }
    setUserInput(initialState);
  };

  return (
    <ModalContent>
      <ModalHeader fontSize={"2rem"} textAlign={"center"}>
        Login
      </ModalHeader>

      <Box w={"90%"} margin={"auto"} p={"1rem"}>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <FormControl isRequired>
            <FormLabel m={"2"} p={"1"}>
              Email
            </FormLabel>
            <Input
              type={"email"}
              id={"userEmail"}
              placeholder={"Enter your email..."}
              value={userInput.userEmail}
              {...register("userEmail", { required: true, maxLength: 20 })}
              onChange={(e) => handleInputState(e, e.target.name)}
            />

            <FormLabel m={"2"} p={"1"}>
              Password
            </FormLabel>
            <Input
              type={"password"}
              id={"userPassword"}
              placeholder={"Enter your password..."}
              value={userInput.userPassword}
              {...register("userPassword", { required: true, maxLength: 20 })}
              onChange={(e) => handleInputState(e, e.target.name)}
            />
          </FormControl>
          <Box display={"flex"} w={"100%"} justifyContent={"center"}>
            <Button type={"submit"} colorScheme={"green"} w={"90%"} m={5}>
              Login
            </Button>
          </Box>
        </form>
      </Box>

      <ModalFooter w={"90%"} margin={"auto"}>
        <Box textAlign={"end"} w={"90%"} m={1}>
          <Button
            colorScheme={"yellow"}
            color={"white"}
            onClick={props.onClose}
          >
            Close
          </Button>
          <Button colorScheme={"twitter"} m={1} onClick={props.handleSignUp()}>
            Sign Up
          </Button>
        </Box>
      </ModalFooter>
    </ModalContent>
  );
}
