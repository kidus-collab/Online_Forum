import React, { FC } from "react";

import { Text, Flex, Button, Box, Avatar } from "@chakra-ui/react";

import { Font, color } from "../../utils/constants";

// import getTimePastIfLessThanDay

/* 
  component will display  
  thread title 
  username 
  Last modified on
  */

interface PostHeaderProps {
  userName?: string;
  lastModifiedOn: Date;
  title?: string;
}
const PostHeader: FC<PostHeaderProps> = ({
  userName,
  lastModifiedOn,
  title,
}) => {
  return (
    <Box mx="auto" mb={3} justifyContent="left" alignItems="left">
      <Text
        mx={2}
        as="h1"
        fontFamily={Font}
        fontSize="20px"
        fontWeight="extrabold"
        color={color[5]}
      >
        {title ? title : "thread 1"}
      </Text>
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
            {userName ? userName : "Kidus G"}
          </Text>
        </Flex>
        <Box>
          <Text
            fontWeight="extrabold"
            fontSize={{ base: "13px", md: "15px" }}
            color={color[5]}
            fontFamily={Font}
          >{`0 min ago`}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PostHeader;
