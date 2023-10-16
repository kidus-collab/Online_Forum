import React, { useState, useEffect, useReducer } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { Text, Flex, Box, Avatar, VStack, Button } from "@chakra-ui/react";
import { Font, color } from "../../utils/constants";
//interface ProfileProps {}

const Profile = () => {
  //useState here
  useEffect(() => {});

  //function here
  return (
    <VStack alignItems="center" justifyContent="center">
      <Box alignItems="left" justifyContent="left">
        <Avatar />
        <Button
          pos="absolute"
          right={0}
          bottom={0}
          fontSize="13px"
          fontWeight="extrabold"
          color="white"
          rounded="100%"
          w={3}
          h="30px"
          bgColor={color[3]}
        >
          +
        </Button>
      </Box>
    </VStack>
  );
};

export default Profile;
