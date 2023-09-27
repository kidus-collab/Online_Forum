import React, { useState, useEffect } from "react";

import { VStack, Text, Button, Flex, Box, Icon } from "@chakra-ui/react";
import PostCard from "./PostCard";
import { useParams } from "react-router-dom";
import { Font } from "../../utils/constants";
//import { threads } from "../../Models/Thread";
import { getCategories } from "../../Services/DataService";

import { FaCode as ProgrammingIcon } from "react-icons/fa";
import Category from "../../Models/Category";

const Main = () => {
  const { categoryId } = useParams();
  const [selectedCategory, setSelectedCategory] = useState<
    Category | undefined
  >();
  const [threadcards, setThreadCards] = useState<Array<JSX.Element> | null>(
    null
  );

  useEffect(() => {
    if (categoryId) {
      getCategories(categoryId).then((threads) => {
        const cards = threads.map((th) => {
          return <PostCard key={th.id} thread={th} />;
        });
      });
      setThreadCards(cards);

      if (!selectedCategory) {
        setSelectedCategory(Category[0]);
      }
    }
  }, [categoryId]);

  return (
    <VStack w="50%">
      <Box my={6} gap={2} w="100%" display="flex" justifyContent="left">
        <Icon
          mt={2}
          color="rgba(227, 227, 227, 1)"
          fontSize="30px"
          as={ProgrammingIcon}
        />
        <Text
          color="rgba(227, 227, 227, 1)"
          fontSize="30px"
          as="h1"
          fontWeight="extrabold"
          fontFamily={Font}
        >
          {/* create condition which if the id is equal with url it renders the category name else default first category . Useparam hook if necessary */}
          Programming
        </Text>
      </Box>

      <Flex
        display={{ md: "none" }}
        sx={{ overflowX: "auto", overflowWrap: "none" }}
      >
        {threads.category.map((cat) => {
          return (
            <Button mr={2}>
              <Box mr={2}>{cat.Icons}</Box>
              <Text>{cat.name}</Text>
            </Button>
          );
        })}
      </Flex>
      {threadcards}
    </VStack>
  );
};

export default Main;
