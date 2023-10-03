import React, { FC, MouseEvent, useState } from "react";

import { Text, Box } from "@chakra-ui/react";
import Dropdown, { Option } from "react-dropdown";

import { Font, color } from "../../utils/constants";

interface PostHeaderProps {
  categoryName: string | undefined;
}

const PostCategory: FC<PostHeaderProps> = ({ categoryName }) => {
  const [optionSelected, setOptionSelected] = useState<String>("");

  function onChangeOption(e: Event, arg: Option) {
    console.log(arg);
    /*const targetElement = e.target as HTMLInputElement;
    const value = targetElement.value;
    setOptionSelected(value); */
  }
  const CatOptions: Array<string | Option> = [
    {
      value: "1",
      label: "Programming",
    },
    {
      value: "2",
      label: "Cooking",
    },
    {
      value: "3",
      label: "Sports",
    },
    {
      value: "4",
      label: "Entertainment",
    },
    {
      value: "5",
      label: "Travel",
    },
  ];
  const defaultOption = CatOptions[0];
  return (
    <Box my={5} mx="auto">
      <Text
        fontFamily={Font}
        fontWeight="extrabold"
        fontSize="18px"
        color="white"
        mb={1}
      >
        {categoryName ? categoryName : "Programming"}
      </Text>
      <Dropdown
        options={CatOptions}
        value={defaultOption}
        placeholder="programming"
      />
      {/* onChange={onChangeOption} */}
    </Box>
  );
};

export default PostCategory;

/* 
 bgColor={color[2]}
        variant="filled"
        color="white"
        fontWeight="bold"
        fontFamily={Font} */
