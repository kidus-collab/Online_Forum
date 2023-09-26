import React, { FC } from "react";

import { VStack, Text, Button, Flex, Box, Icon } from "@chakra-ui/react";
import PostCard from "./PostCard";
//import { Link } from "react-router-dom";
import { Font } from "../../utils/constants";
import { threads } from "../../Models/Thread";

import { FaCode as ProgrammingIcon } from "react-icons/fa";

const Main = () => {
  return (
    <VStack w="50%">
      <Box my={6} gap={2} w="100%" display="flex" justifyContent="left">
        <Icon
          mt={2}
          color="rgba(227, 227, 227, 1)"
          fontSize="30px"
          as={ProgrammingIcon}
        />
        <Text
          color="rgba(227, 227, 227, 1)"
          fontSize="30px"
          as="h1"
          fontWeight="extrabold"
          fontFamily={Font}
        >
          {/* create condition which if the id is equal with url it renders the category name else default first category . Useparam hook if necessary */}
          Programming
        </Text>
      </Box>

      <Flex
        display={{ md: "none" }}
        sx={{ overflowX: "auto", overflowWrap: "none" }}
      >
        {threads.category.map((cat) => {
          return (
            <Button mr={2}>
              <Box mr={2}>{cat.Icons}</Box>
              <Text>{cat.name}</Text>
            </Button>
          );
        })}
      </Flex>
      <PostCard threads={threads} />
    </VStack>
  );
};

export default Main;
