import React, { FC } from "react";

import { Box, Text, Textarea } from "@chakra-ui/react";

import { Font, color } from "../../utils/constants";
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
      <Textarea
        bgColor={color[2]}
        variant="filled"
        color="white"
        fontWeight="bold"
        fontFamily={Font}
      />
    </Box>
  );
};

export default PostBody;
