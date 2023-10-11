import React, { FC, useState, useEffect } from "react";
import RichEditor from "../../utils/editior/RichTextEditior";
import UserNameandTime from "./userNameandTime";
import ThreadPoints from "./points/ThreadPoints";
import { Box, Text, Flex } from "@chakra-ui/react";

import { Font, color } from "../../utils/constants";

interface PostResponsesProps {
  userName?: string;
  points?: number;
  createdOn?: Date;
  body?: string;
}

const PostResponses: FC<PostResponsesProps> = ({
  userName,
  points,
  body,
  createdOn,
}) => {
  return (
    <Box>
      <Box>
        <UserNameandTime UserName={userName} lastModified={createdOn} />
        <Box as="span">
          <ThreadPoints points={points || 0} />
        </Box>
      </Box>
      <RichEditor existingBody={body} />
    </Box>
  );
};

export default PostResponses;
