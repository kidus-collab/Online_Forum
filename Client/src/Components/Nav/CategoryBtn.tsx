import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

import { Font, color } from "../../utils/constants";

import { getCategories } from "../../Services/DataService";
import { Link } from "react-router-dom";
import Category from "../../Models/Category";

const CategoryBtn = () => {
  const [cat, setCat] = useState<any | null>(null);
  const [id, setId] = useState<string>("");

  useEffect(() => {
    getCategories()
      .then((categories: Array<Category>) => {
        const cats = categories.map((cat) => {
          return (
            <Box
              display="flex"
              w="100%"
              key={cat.id}
              bgColor={{
                base: id === cat.id ? color[6] : color[2],
                md: id === cat.id ? color[6] : "transparent",
              }}
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
    <Box
      my={5}
      gap={{ base: 2, md: 0 }}
      display={{ base: "flex", md: "block" }}
      flexDirection={{ base: "row", md: "column" }}
      rounded="lg"
      mx="5px"
    >
      <Link to={`/categorythreads/${id}`}>{cat}</Link>
    </Box>
  );
};
//</Link>

export default CategoryBtn;
