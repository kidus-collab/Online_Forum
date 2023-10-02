import React, { FC } from "react";

import { Input, Box, Text } from "@chakra-ui/react";
interface PostHeaderProps {
  title: string | undefined;
}

const PostTitle: FC<PostHeaderProps> = ({ title }) => {
  return (
    <Box>
      <Text>Title</Text>
      <Input />
    </Box>
  );
};

export default PostTitle;
