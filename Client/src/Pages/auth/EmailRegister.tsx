import React, { useState, useReducer } from "react";
import { NavLink } from "react-router-dom";

//Reducer
import registerationReducer from "../../Store/user/userRegisteration";

import PasswordComparison from "./PasswordComparison";
import {
  VStack,
  HStack,
  Button,
  Icon,
  Text,
  Box,
  Flex,
  Input,
} from "@chakra-ui/react";

import { FaAngleLeft as BackwardButton } from "react-icons/fa";
import { color, Font } from "../../utils/constants";
import RegisterImg from "../../utils/Registerpage.jpg";

const initialRegistrationState = {
  name: "",
  username: "",
  password: "",
  email: "",
  passwordConfirm: "",
  resultMsg: "",
};

const EmailRegister = () => {
  const [isRegisterDisabled, setRegisterDisabled] = useState(true);

  const [
    { name, username, password, email, passwordConfirm, resultMsg },
    dispatch,
  ] = useReducer(registerationReducer, initialRegistrationState);

  // to check if the register values are correct & recieve msg
  const allowRegister = (msg: string, setDisabled: boolean) => {
    setRegisterDisabled(setDisabled);
    dispatch({ payload: msg, type: "resultMsg" });
  };

  // setting the name state & vaildate registiration
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ payload: e.target.value, type: "Name" });

    if (!e.target.value) {
      allowRegister("Name Cannot be empty", true);
    } else {
      allowRegister("", false);
    }
  };

  // setting the userName state & vaildate registiration
  const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ payload: e.target.value, type: "userName" });

    if (!e.target.value) {
      allowRegister("UserName Cannot be empty", true);
    } else {
      allowRegister("", false);
    }
  };

  // setting the Email state & vaildate registiration
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ payload: e.target.value, type: "Email" });

    if (!e.target.value) {
      allowRegister("Email Cannot be empty", true);
    } else {
      allowRegister("", false);
    }
  };

  // register on click
  const onClickRegister = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    //ssetOnClickToggle.toggle();
  };

  return (
    <HStack bgGradient={color[0]} h="100vh">
      <Text
        pos="absolute"
        top={3}
        left={3}
        textAlign="center"
        color="rgba(227, 227, 227, 1)"
        fontSize={{ sm: "22px", md: "24px", lg: "28px" }}
        fontWeight="extrabold"
        sx={{ fontFamily: Font }}
      >
        <Box as="span" mr={1} color={color[4]}>
          Online
        </Box>
        Forum
      </Text>

      <Box
        w="47%"
        bgImage={RegisterImg}
        bgPosition="cover"
        overflowX="hidden"
        h="100%"
        display={{ base: "none", md: "block" }}
      />
      <Box
        w={{ sm: "100%", md: "50%" }}
        h="100vh"
        textAlign="center"
        alignItems="center"
        justifyContent="center"
      >
        <VStack
          mx={{ base: 0, sm: 4, md: 6 }}
          alignItems="left"
          justifyContent="left"
          mt={{ base: 10, md: 0 }}
        >
          <NavLink to="/register">
            <Button
              rounded="xl"
              border="2px"
              borderColor={color[5]}
              _hover={{ border: "transparent", bg: color[5] }}
              bg="none"
              justifyContent="start"
              mt={{ base: 15, md: 8 }}
              mb={2}
              alignSelf="left"
              ml={{ base: "8px", sm: "-440px", md: "-320px", lg: "-490px" }}
            >
              <Icon
                as={BackwardButton}
                fontSize="18px"
                _hover={{ color: "white" }}
                color={color[5]}
              />
            </Button>
          </NavLink>
          <Text
            mt="10px"
            mx={3}
            textAlign="left"
            fontSize={{ base: "20px", sm: "22px", md: "23px", lg: "24px" }}
            fontWeight="extrabold"
            color="white"
            sx={{ fontFamily: Font }}
          >
            SignUp to{" "}
            <Box as="span" mx="1" mr="2" color={color[4]}>
              Online
            </Box>
            Forum{" "}
          </Text>
          <Flex gap={2}>
            <Box p={3}>
              <Text
                fontWeight="extrabold"
                color="white"
                fontFamily={Font}
                textAlign="left"
              >
                Name
              </Text>
              <Input
                type="text"
                bgColor={color[2]}
                variant="filled"
                placeholder="Name"
                color="white"
                fontWeight="bold"
                fontFamily={Font}
                value={name}
                onChange={onChangeName}
              />
            </Box>
            <Box p={3}>
              <Text
                fontWeight="extrabold"
                color="white"
                fontFamily={Font}
                textAlign="left"
              >
                Username
              </Text>
              <Input
                type="text"
                bgColor={color[2]}
                variant="filled"
                placeholder="username"
                color="white"
                fontWeight="bold"
                fontFamily={Font}
                value={username}
                onChange={onChangeUserName}
              />
            </Box>
          </Flex>
          <Box p={3} alignItems="left">
            <Text
              fontWeight="extrabold"
              color="white"
              fontFamily={Font}
              textAlign="left"
            >
              Email
            </Text>
            <Input
              type="text"
              bgColor={color[2]}
              variant="filled"
              placeholder="email"
              color="white"
              fontWeight="bold"
              fontFamily={Font}
              value={email}
              onChange={onChangeEmail}
            />

            <PasswordComparison
              dispatch={dispatch}
              password={password}
              passwordConfirm={passwordConfirm}
            />
          </Box>
          <Text as="strong" fontFamily={Font} fontSize="20px" color="red">
            {resultMsg}
          </Text>
          <Button
            type="submit"
            w="90%"
            mx="auto"
            color="white"
            fontFamily={Font}
            bgColor={color[3]}
            rounded="lg"
            _hover={{ bgColor: color[2] }}
            _active={{ bgColor: color[7] }}
            disabled={isRegisterDisabled}
            onClick={onClickRegister}
          >
            Sign Up
          </Button>
          <Text
            mt={1}
            fontSize="15px"
            fontFamily={Font}
            fontWeight="extrabold"
            color={color[5]}
          >
            Already have an account ?{" "}
            <Box as="span" textDecoration="underline" color="blue">
              <NavLink to="/login">Sign in</NavLink>
            </Box>
          </Text>
        </VStack>
      </Box>
    </HStack>
  );
};

export default EmailRegister;
