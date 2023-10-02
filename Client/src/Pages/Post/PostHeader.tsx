import React, { FC } from "react";

import { Text, Flex, Box, Avatar } from "@chakra-ui/react";

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
    <Box mx="auto" my={3} justifyContent="left" alignItems="left">
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
      <Box justifyContent="space-between">
        <Flex>
          <Avatar />
          <Text
            fontWeight="extrabold"
            fontSize="16px"
            color={color[5]}
            fontFamily={Font}
          >
            {userName}
          </Text>
        </Flex>
        <Box>
          <Text
            fontWeight="extrabold"
            fontSize="16px"
            color={color[5]}
            fontFamily={Font}
          >{`${lastModifiedOn} min ago`}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default PostHeader;
