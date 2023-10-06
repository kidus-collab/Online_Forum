import React, { FC } from "react";

import { Box, Text } from "@chakra-ui/react";

import RichTextEditor from "../../utils/editior/RichTextEditior";

import { Font } from "../../utils/constants";
interface threadBodyProps {
  body?: string;
}

const PostBody: FC<threadBodyProps> = ({ body }) => {
  return (
    <Box my={2}>
      <Text
        fontFamily={Font}
        fontWeight="extrabold"
        fontSize="18px"
        color="white"
        my={2}
      >
        {body ? body : "Body"}
      </Text>
      <RichTextEditor existingBody={body} />
    </Box>
  );
};

export default PostBody;
