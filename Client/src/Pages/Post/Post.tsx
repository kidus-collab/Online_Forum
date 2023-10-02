import React, { useState, useEffect } from "react";

import PostHeader from "./PostHeader";
import PostCategory from "./PostCategory";
import { useParams } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
const Post = () => {
  const { id } = useParams();

  /*  useEffect(()=> {
      if(id && id > 0) { 

      }
  } , [id])
  */
  return (
    <VStack>
      <PostHeader />
      <PostCategory />
    </VStack>
  );
};

export default Post;
