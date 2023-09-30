import React, { useState, useEffect } from "react";

import { Box } from "@chakra-ui/react";
import { color } from "../../utils/constants";

import { getTopCategories } from "../../Services/DataService";
import TopCategory from "./TopCategory";

// lodash
import groupBy from "lodash/groupBy";

// react modal for our right menu

const RightMenu = () => {
  const [topCategories, setTopCategories] = useState<
    JSX.Element[] | undefined
  >();

  useEffect(() => {
    getTopCategories()
      .then((res) => {
        // lodash function to group the data by category
        const topCategoryThread = groupBy(res, "category");
        const rightMenuElements = [];
        /* to sort current top by index of the array & pas it to top Category 
            then push to array of jsx element 
            */
        for (let key in topCategoryThread) {
          const currentTopThread = topCategoryThread[key];
          rightMenuElements.push(
            <TopCategory key={key} topThread={currentTopThread} />
          );
        }

        setTopCategories(rightMenuElements);
      })
      .catch((err) => `Error Caught : ${err}`);
  }, [topCategories]);

  return (
    <Box
      alignSelf="end"
      w="18%"
      h="100%"
      bgColor={color[2]}
      display={{ base: "none", md: "block" }}
      boxShadow="xl"
      rounded="lg"
    >
      {topCategories}
    </Box>
  );
};

export default RightMenu;
