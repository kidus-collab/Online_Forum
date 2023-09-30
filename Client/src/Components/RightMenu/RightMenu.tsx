import React from "react";

import { Box } from "@chakra-ui/react";
import { color } from "../../utils/constants";

// react modal for our right menu

const RightMenu = () => {
  return (
    <Box
      alignSelf="end"
      w="16%"
      h="100%"
      bgColor={color[2]}
      display={{ base: "none", md: "block" }}
      boxShadow="xl"
      rounded="lg"
    >
      RightMenu
    </Box>
  );
};

export default RightMenu;
