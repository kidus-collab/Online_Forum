import React, { useState, useEffect } from "react";

//Components
import PostHeader from "./PostHeader";
import PostCategory from "./PostCategory";
import PostBody from "./PostBody";

import { useParams } from "react-router-dom";
import { Text, VStack, Box } from "@chakra-ui/react";

import Thread from "../../Models/Thread";
import { getThreadbyId } from "../../Services/DataService";
import PostTitle from "./PostTitle";

import { Font, color } from "../../utils/constants";
const Post = () => {
  const { id } = useParams();
  const [thread, setThread] = useState<Thread | undefined>();

  useEffect(() => {
    if (id && id !== "0") {
      getThreadbyId(id).then((th) => {
        setThread(th);
      });
    }
  }, [id]);

  return (
    <VStack
      bgGradient={color[0]}
      w="100%"
      h="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        pos="absolute"
        top={3}
        left={3}
        textAlign="center"
        color="rgba(227, 227, 227, 1)"
        fontSize={{ sm: "22px", md: "24px", lg: "28px" }}
        fontWeight="extrabold"
        sx={{ fontFamily: Font }}
      >
        <Box as="span" mr={1} color={color[4]}>
          Online
        </Box>
        Forum
      </Text>
      <Box mt="-190px">
        <PostHeader
          userName={thread?.userName}
          lastModifiedOn={thread ? thread?.lastModifiedOn : new Date()}
          title={thread?.title}
        />
        <PostCategory categoryName={thread?.category.name} />
        <PostTitle title={thread?.title} />
        <PostBody />
      </Box>
    </VStack>
  );
};

export default Post;
