import React from "react";

// visble on phone only

import { Box, Text, Flex } from "@chakra-ui/react";
import { Font, color } from "../../utils/constants";
import LoginCard from "./LoginCard";
const NavBar = () => {
  return (
    <Box display={{ md: "none" }}>
      <Flex justifyContent="space-between">
        <Text
          my={8}
          ml={3}
          color="rgba(227, 227, 227, 1)"
          fontSize={{ base: "18px", sm: "20px" }}
          fontWeight="extrabold"
          sx={{ fontFamily: Font }}
        >
          <Box as="span" mr={1} color={color[4]}>
            Online
          </Box>
          Forum
        </Text>
        <LoginCard />
      </Flex>
    </Box>
  );
};

export default NavBar;
