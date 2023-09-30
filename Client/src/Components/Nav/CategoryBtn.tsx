import React, { useState, useEffect } from "react";
import { Box, VStack, Text } from "@chakra-ui/react";

import { Font, color } from "../../utils/constants";

import { getCategories } from "../../Services/DataService";
import { Link } from "react-router-dom";
import Category from "../../Models/Category";

const CategoryBtn = () => {
  const [cat, setCat] = useState<any | null>(null);
  const [id, setId] = useState<string>("");
  /*
   */

  /* .then((categories: Array<Category>) => {
  const cats = categories.map((cat) => {
     });
  setCat(cats);
})
.catch((err) => {
  console.log(err);
}), */
  useEffect(() => {
    getCategories()
      .then((categories: Array<Category>) => {
        const cats = categories.map((cat) => {
          return (
            <Box
              display="flex"
              w="100%"
              key={cat.id}
              bgColor={id === cat.id ? color[6] : "transparent"}
              border="none"
              _hover={{ bgColor: color[6], color: "white" }}
              rounded="xl"
              px={10}
              py={3}
              justifyContent="start"
              role="group"
              onClick={() => {
                setId(cat.id);
              }}
            >
              <Box
                mr={2}
                mt={1}
                color={id === cat.id ? "white" : color[5]}
                _groupHover={{ color: "white", fontWeight: "900" }}
                fontSize="12px"
              >
                {cat.Icon}
              </Box>
              <Text
                color={id === cat.id ? "white" : color[5]}
                _groupHover={{ color: "white", fontWeight: "900" }}
                fontSize="14px"
                fontWeight="extrabold"
                fontFamily={Font}
              >
                {cat.name}
              </Text>
            </Box>
          );
        });
        setCat(cats);
      })
      .catch((err) => console.log(`Error caught : ${err}`));
  }, [id]);

  return (
    <VStack my={10}>
      <Text
        ml="-50px"
        color="white"
        fontWeight="semibold"
        fontSize={{ sm: "15px", md: "17px", lg: "20px" }}
        opacity="50%"
        sx={{ fontFamily: Font }}
      >
        Categories
      </Text>
      <Box mx="5px">
        <Link to={`/categorythreads/${id}`}>{cat}</Link>
      </Box>
    </VStack>
  );
};

export default CategoryBtn;

/*
 */
