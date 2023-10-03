import React, { FC } from "react";

import { Font, color } from "../../utils/constants";
import { Input, Box, Text } from "@chakra-ui/react";
interface PostHeaderProps {
  title: string | undefined;
}

const PostTitle: FC<PostHeaderProps> = ({ title }) => {
  return (
    <Box>
      <Text
        fontFamily={Font}
        fontWeight="extrabold"
        fontSize="18px"
        color="white"
        mb={1}
      >
        Title
      </Text>
      <Input
        type="text"
        bgColor={color[2]}
        variant="filled"
        color="white"
        fontWeight="bold"
        fontFamily={Font}
        placeholder="Thread 1"
      />
    </Box>
  );
};

export default PostTitle;
