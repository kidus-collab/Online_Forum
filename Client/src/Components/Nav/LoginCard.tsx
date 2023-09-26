import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../Store/AppState";
import { Box, Text, Button, Avatar, Flex, Icon } from "@chakra-ui/react";

import {
  FaArrowCircleRight as LogoutIcon,
  FaAddressBook as RegisterIcon,
  FaUserAlt as LoginIcon,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

// action type
import UserProfileSetType from "../../Store/user/UserProfileReducer";

import { color, Font } from "../../utils/constants";

const LoginCard = () => {
  const user = useSelector((state: AppState) => state.userProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: UserProfileSetType,
      payload: {
        Id: 1,
        userName: "testuser",
        email: "guyfreaky894@gmail.com",
      },
    });
  }, [dispatch]);

  return (
    <>
      {/* Logged in card */}
      <Box
        mb={2}
        rounded={{ base: "none", sm: "none", md: "2xl" }}
        pt={2}
        pb={6}
        px={2}
        mx={2}
        bg={{ base: "none", sm: "none", md: color[2] }}
      >
        <Flex>
          <Avatar mt={2} mr={2} ml={2} />
          <Box mr={2}>
            <Text
              mt={2}
              mb={2}
              color="white"
              fontWeight="extrabold"
              fontFamily={Font}
            >
              {user.username} Kidus
            </Text>
            <Text
              fontSize="10px"
              fontFamily={Font}
              color={color[5]}
              sx={{ marginTop: "-10px" }}
            >
              {user.email} guyfreaky894@gmail.com
            </Text>
          </Box>
        </Flex>
        <Button
          display={{ base: "none", sm: "none", md: "block" }}
          mt={3}
          rounded="2xl"
          mx="35px"
          bg="none"
          color={color[5]}
          _hover={{ bg: color[5], fontColor: "white" }}
          sx={{ border: "2px" }}
        >
          <Flex>
            <Icon as={LogoutIcon} color={color[5]} />
            <Text ml={1} color={color[5]} fontFamily={Font} fontSize="13px">
              Logout
            </Text>
          </Flex>
        </Button>
      </Box>

      {/* Not  Logged in card */}
      <Box
        rounded="xl"
        pt={2}
        px={2}
        pb={2}
        mx={2}
        bg={{ base: "none", sm: "none", md: color[2] }}
      >
        <Flex>
          <NavLink to="/register">
            <Button
              as="span"
              display="flex"
              bg="none"
              fontSize={{ sm: "12px", md: "14px", lg: "16px" }}
              color={color[5]}
              mb={2}
              mt={2}
              _hover={{ bgColor: "none", color: "white" }}
              _active={{ bgColor: "none", color: "white" }}
            >
              <Icon as={RegisterIcon} mr={1} display={{ md: "none" }} />
              <Text>Register</Text>
            </Button>
          </NavLink>
          <NavLink to="/login">
            <Button
              as="span"
              display="flex"
              bg="none"
              fontSize={{ sm: "12px", md: "14px", lg: "16px" }}
              color={color[5]}
              mt={2}
              _hover={{ bgColor: "none", color: "white" }}
              _active={{ bgColor: "none", color: "white" }}
            >
              <Icon as={LoginIcon} mr={1} display={{ md: "none" }} />
              <Text>Login</Text>
            </Button>
          </NavLink>
        </Flex>
      </Box>
    </>
  );
};

export default LoginCard;
