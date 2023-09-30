import { HStack, Text, Box, Button, Icon } from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";
//import ReactModal from "react-modal";

// component
import { otherIcons } from "../../utils/constants";

//image
import RegisterImg from "../../utils/Registerpage.jpg";

import { Font, color } from "../../utils/constants";
//password validatior

//import OauthReg from "./OauthReg";

const Register = () => {
  return (
    <>
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
          <Box w="100%" alignItems="center" justifyContent="center">
            <Text
              mt="150px"
              mx="auto"
              textAlign="center"
              fontSize={{ base: "20px", sm: "26px", md: "23px", lg: "27px" }}
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
              fontSize="19px"
              color={color[5]}
              fontWeight="extrabold"
              fontFamily={Font}
              mx="auto"
              textAlign="center"
            >
              _____________ or _____________
            </Text>
            <NavLink to="/register/emailregister">
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
                <Text color="white" fontFamily={Font}>
                  Continue with email
                </Text>
              </Button>
            </NavLink>
          </Box>
        </Box>
      </HStack>
    </>
  );
};

export default Register;

/* 
 ml={{ md: "3rem", lg: "7rem" }} 
 mx={{ base: "3.5rem", sm: "7rem" }} */
