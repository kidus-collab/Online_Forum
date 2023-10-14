import React, { useEffect } from "react";

import {
  VStack,
  Input,
  HStack,
  Text,
  Box,
  Button,
  Icon,
  useBoolean,
} from "@chakra-ui/react";
import { color, Font, otherIcons } from "../../utils/constants";

import { NavLink } from "react-router-dom";

import LoginpageImg from "../../utils/loginpage.jpg";

import { FaEye as visibiltyButton } from "react-icons/fa";

const Login = () => {
  const [visible, setVisible] = useBoolean();

  useEffect(() => {
    // on login update store and user
  }, []);
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
        bgImage={LoginpageImg}
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
        <Box w="100%" alignItems="center" justifyContent="center">
          <Text
            mt="80px"
            mx="auto"
            textAlign="center"
            fontSize={{ base: "20px", sm: "26px", md: "23px", lg: "27px" }}
            fontWeight="extrabold"
            color="white"
            sx={{ fontFamily: Font }}
          >
            Sign in to{" "}
            <Box as="span" mx="1" mr="2" color={color[4]}>
              Online
            </Box>
            Forum{" "}
          </Text>
          <Button
            my={10}
            px={8}
            py={6}
            border="1px"
            borderColor={color[5]}
            _hover={{ border: "transparent", color: "black", bg: color[5] }}
            mx="auto"
            bg="none"
          >
            <Icon as={otherIcons[0]} mr={2} />
            <Text color="white" fontFamily={Font}>
              Sign in with Google
            </Text>
          </Button>
          <Text
            fontSize="15px"
            color={color[5]}
            fontWeight="extrabold"
            fontFamily={Font}
            mx="auto"
            textAlign="center"
          >
            _____________ or sign in with email _____________
          </Text>
        </Box>
        <VStack
          alignItems="left"
          justifyContent="left"
          w="50%"
          mx="auto"
          mt={4}
        >
          <Box p={3} alignItems="left">
            <Text
              fontWeight="extrabold"
              color="white"
              fontFamily={Font}
              textAlign="left"
            >
              Username or Email
            </Text>
            <Input
              type="text"
              bgColor={color[2]}
              variant="filled"
              placeholder="type here"
              color="white"
              fontWeight="bold"
              fontFamily={Font}
            />
          </Box>
          <Box p={3} alignItems="left">
            <Text
              fontWeight="extrabold"
              color="white"
              fontFamily={Font}
              textAlign="left"
            >
              Password
            </Text>
            <Box
              alignItems="left"
              justifyContent="baseline"
              rounded={"lg"}
              bgColor={color[2]}
            >
              <Input
                type={visible ? "text" : "password"}
                variant="filled"
                placeholder="At least 8 Characters"
                bgColor="transparent"
                color="white"
                fontWeight="bold"
                w="90%"
                fontFamily={Font}
              />
              <Icon
                as={visibiltyButton}
                mt={0}
                textAlign="center"
                color={color[5]}
                fontSize="20px"
                _hover={{ color: "white" }}
                onClick={setVisible.toggle}
              />
            </Box>
          </Box>

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
            Don't have an account ?{" "}
            <Box as="span" textDecoration="underline" color="blue">
              <NavLink to="/register">Sign up</NavLink>
            </Box>
          </Text>
        </VStack>
      </Box>
    </HStack>
  );
};

export default Login;
