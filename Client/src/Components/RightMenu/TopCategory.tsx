import React, { FC, useState, useEffect } from "react";
//import { getTopCategories } from "../../Services/DataService";
import CategoryThread from "../../Models/CategoryThread";
import { VStack, Box, Text } from "@chakra-ui/react";

import { Font, color } from "../../utils/constants";

interface topCategoryProps {
  key: string;
  topThread: Array<CategoryThread>;
}

const TopCategory: FC<topCategoryProps> = ({ topThread }) => {
  const [threads, setThreads] = useState<JSX.Element | undefined>();

  useEffect(() => {
    if (topThread && topThread.length > 0) {
      const threadElement = topThread.map((top) => {
        return (
          <Box key={top.ThreadId}>
            <Text
              my={1}
              _hover={{ color: "blue", textDecoration: "underline" }}
              mx="auto"
              fontFamily={Font}
              fontWeight="bold"
              color={color[5]}
              fontSize="14px"
            >
              {top.ThreadTitle}
            </Text>
          </Box>
        );
      });
      setThreads(
        <Box
          alignItems="left"
          justifyContent="left"
          ml={4}
          overflowX="clip"
          mt={1}
          mb={1}
        >
          {threadElement}
        </Box>
      );
    }
  }, [topThread, threads]);
  return (
    <VStack alignItems="left" justifyContent="left">
      <Text
        mt={8}
        ml={4}
        color="white"
        as="strong"
        fontFamily={Font}
        fontSize="20px"
      >
        {topThread[0].category}
      </Text>
      {threads}
    </VStack>
  );
};

export default TopCategory;
