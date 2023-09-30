import React from "react";
import { Box, Text } from "@chakra-ui/react";

import { Font, color } from "../../utils/constants";

import LoginCard from "./LoginCard";
import CategoryBtn from "./CategoryBtn";

const SideBar = () => {
  return (
    <Box
      w="17%"
      h="100%"
      bgColor={color[2]}
      display={{ base: "none", sm: "none", md: "block" }}
      boxShadow="xl"
      rounded="xl"
      overflowY="auto"
    >
      <Text
        mx="auto"
        textAlign="center"
        my={10}
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

      <CategoryBtn />
      <LoginCard />
    </Box>
  );
};

export default SideBar;
