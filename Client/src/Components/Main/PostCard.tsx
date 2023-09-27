import React, { FC } from "react";

import {
  Card,
  Box,
  Flex,
  Avatar,
  CardBody,
  Text,
  CardHeader,
  CardFooter,
  Icon,
} from "@chakra-ui/react";
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Font, color } from "../../utils/constants";

import Thread from "../../Models/Thread";
import {
  FaEye as ViewIcon,
  FaHeart as LikeIcon,
  FaReply as ShareIcon,
} from "react-icons/fa";

interface ThreadCardprops {
  key: any;
  thread: Thread;
}

const PostCard: FC<ThreadCardprops> = ({ key, thread }) => {
  const navigate = useNavigate();

  const onClickShowThread = () => {
    navigate(`/thread/${thread.id}`);
  };
  return (
    <Card bg={color[2]} rounded="xl" mx="auto">
      <CardHeader>
        <Flex>
          <Avatar />
          <Box ml={3}>
            <Text
              fontWeight="extrabold"
              color="white"
              fontFamily={Font}
              as="h1"
            >
              {thread.userName || "Kidus"}
            </Text>
            <Text fontWeight="bold" as="h2" fontFamily={Font} color={color[5]}>
              {thread.title || "Post 1"}
            </Text>
          </Box>
        </Flex>
      </CardHeader>
      <CardBody
        data-thread-id={thread.id}
        mt="-18px"
        onClick={onClickShowThread}
      >
        <Text fontWeight="extrabold" fontFamily={Font} color={color[5]}>
          {thread.body ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit . Quaerat illo dolorum harum ex libero itaque incidunt omnis officiis possimus, veniam iure, fugiat unde, voluptatum reiciendis? Debitis illo cupiditate nobis repellendus?"}
        </Text>
      </CardBody>
      <CardFooter justifyContent="space-between">
        <Box gap={6} display="flex">
          <Flex gap={2}>
            <Icon mt={1} color="white" fontWeight="extrabold" as={LikeIcon} />
            <Text color="white" fontWeight="extrabold" fontFamily={Font}>
              {thread.points || 0}
            </Text>
          </Flex>
          <Flex gap={2}>
            <Icon mt={1} color="white" fontWeight="extrabold" as={ViewIcon} />
            <Text color="white" fontWeight="extrabold" fontFamily={Font}>
              {thread.views || 0}
            </Text>
          </Flex>
        </Box>
        <Box>
          <Flex gap={2} mr="10px">
            <Icon mt={1} color="white" fontWeight="extrabold" as={ShareIcon} />
            <Text color="white" fontWeight="extrabold" fontFamily={Font}>
              {thread && thread.threadItems && thread.threadItems.length}
            </Text>
          </Flex>
        </Box>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
