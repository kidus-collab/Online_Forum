import React, { FC, useState, useEffect } from "react";

import { Box, Text, Flex } from "@chakra-ui/react";

import PostResponses from "./PostResponses";
import ThreadItem from "../../Models/Threaditem";

interface PostResponsesBuilder {
  threadItems?: Array<ThreadItem>;
}

const PostResponsesBuilder: FC<PostResponsesBuilder> = ({ threadItems }) => {
  const [commentElement, setCommentElement] = useState<
    JSX.Element[] | undefined
  >();

  useEffect(() => {
    if (threadItems) {
      const thItems = threadItems.map((th) => {
        return (
          <Box key={th.id}>
            <PostResponses
              body={th.body}
              createdOn={th.createdOn}
              userName={th.userName}
              points={th.points}
            />
          </Box>
        );
      });
      setCommentElement(thItems);
    }
  }, [commentElement]);
  return (
    <Box>
      <Text>Comments</Text>
      {commentElement}
    </Box>
  );
};

export default PostResponsesBuilder;
