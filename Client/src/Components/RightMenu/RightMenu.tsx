import React, { useState, useEffect } from "react";

import { Box } from "@chakra-ui/react";
import { color } from "../../utils/constants";

import { getTopCategories } from "../../Services/DataService";
import TopCategory from "./TopCategory";

// lodash
import { groupBy } from "lodash/groupBy";

// react modal for our right menu

const RightMenu = () => {
  const [topCategories, setTopCategories] = useState<JSX.Element[] | null>(
    null
  );

  useEffect(() => {
    getTopCategories()
      .then()
      .catch((err) => `Error Caught : ${err}`);
  }, [topCategories]);

  return (
    <Box
      alignSelf="end"
      w="16%"
      h="100%"
      bgColor={color[2]}
      display={{ base: "none", md: "block" }}
      boxShadow="xl"
      rounded="lg"
    >
      <TopCategory />
    </Box>
  );
};

export default RightMenu;
