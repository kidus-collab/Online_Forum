import React, { useState, useReducer } from "react";
import { Box, VStack, Text, useBoolean } from "@chakra-ui/react";

import { Font, color } from "../../utils/constants";

import { threads } from "../../Models/Thread";
import { Link } from "react-router-dom";
/* import {
  selectedCategoryReducer,
  initalState,
} from "../../Store/user/SelectedCategory";
*/
//import SelectType from "../../Store/user/SelectedCategory";

const Category = () => {
  const [id, setId] = useState(0);
  const [bgRed, setBgRed] = useBoolean();
  // const { id, name, Icons } = useReducer(selectedCategoryReducer, initalState);
  /* onst dispatch = useDispatch();

  const dispatchSelectState = () => {
    dispatch({
      type: SelectType,
      payload: {
        id: threads.category.id,
        name: threads.category.name,
        Icons: threads.category.Icons,
      },
    });
  };
  */
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
        <Link to={`/categorythreads/${id}`}>
          {threads.category.map((cat) => (
            <Box
              display="flex"
              w="100%"
              key={cat.id}
              bgColor={bgRed ? color[6] : "transparent"}
              border="none"
              _hover={{ bgColor: color[6], color: "white" }}
              rounded="xl"
              px={10}
              py={3}
              justifyContent="start"
              role="group"
              onClick={() => {
                setId(cat.id);
                setBgRed.toggle();
              }}
            >
              <Box
                mr={2}
                mt={1}
                color={color[5]}
                _groupHover={{ color: "white", fontWeight: "900" }}
                fontSize="12px"
              >
                {cat.Icons}
              </Box>
              <Text
                color={color[5]}
                _groupHover={{ color: "white", fontWeight: "900" }}
                fontSize="14px"
                fontWeight="extrabold"
                fontFamily={Font}
              >
                {cat.name}
              </Text>
            </Box>
          ))}
        </Link>
      </Box>
    </VStack>
  );
};

export default Category;

/*
 */
