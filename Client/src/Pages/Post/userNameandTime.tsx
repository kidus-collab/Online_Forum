import React, { FC } from "react";

import { Box, Flex, Avatar, Button, Text } from "@chakra-ui/react";
import { color, Font } from "../../utils/constants";

import { getTimePastIfLessThanDay } from "../../utils/dates";

interface componentProp {
  UserName?: string;
  lastModified?: Date;
}

const UserNameandTime: FC<componentProp> = ({ UserName, lastModified }) => {
  return (
    <Box my={8} display="Flex" justifyContent="space-between">
      <Flex mr={{ base: "6rem", md: "8rem" }}>
        <Box pos="relative">
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
        <Text
          fontWeight="extrabold"
          fontSize={{ base: "13px", md: "15px" }}
          color={color[5]}
          fontFamily={Font}
          ml={5}
        >
          {UserName ? UserName : "Kidus G"}
        </Text>
      </Flex>
      <Box>
        <Text
          fontWeight="extrabold"
          fontSize={{ base: "13px", md: "15px" }}
          color={color[5]}
          fontFamily={Font}
        >
          {" "}
          {lastModified ? getTimePastIfLessThanDay(lastModified) : ""}
        </Text>
      </Box>
    </Box>
  );
};

export default UserNameandTime;
