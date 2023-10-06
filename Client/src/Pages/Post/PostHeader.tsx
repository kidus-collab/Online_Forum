import React, { FC } from "react";

import { Text, Box } from "@chakra-ui/react";

import { Font, color } from "../../utils/constants";

import UserNameandTime from "./userNameandTime";

// import getTimePastIfLessThanDay

/* 
  component will display  
  thread title 
  username 
  Last modified on
  */

interface PostHeaderProps {
  title: string | undefined;
  userName?: string;
  lastModifiedOn?: Date;
}

const PostHeader: FC<PostHeaderProps> = ({
  title,
  userName,
  lastModifiedOn,
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
      <UserNameandTime UserName={userName} lastModified={lastModifiedOn} />
    </Box>
  );
};

export default PostHeader;
