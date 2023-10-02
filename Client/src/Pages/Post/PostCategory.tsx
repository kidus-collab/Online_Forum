import React, { FC } from "react";

import { Text, Box } from "@chakra-ui/react";

import { Font } from "../../utils/constants";

interface PostHeaderProps {
  categoryName: string | undefined;
}

const PostCategory: FC<PostHeaderProps> = ({ categoryName }) => {
  return (
    <Box mx="auto">
      <Text fontFamily={Font} color="white" mb={1}>
        {categoryName}
      </Text>
    </Box>
  );
};

export default PostCategory;
