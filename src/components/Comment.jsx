import { Avatar, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";

const Comment = ({ reply, lastReply }) => {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <Flex gap={4} py={2} my={2} w={"full"}>
        <Avatar src={"/post2.jpg"} size={"sm"} />
        <Flex gap={1} w={"full"} flexDirection={"column"}>
          <Flex
            w={"full"}
            justifyContent={"space-between"}
            alignItems={"center"}>
            <Text fontSize="sm" fontWeight="bold">
              Sule Maito
            </Text>
            <Flex gap={2} alignItems={"center"}>
              <Text fontSize={"sm"} color={"grey.light"}>
                1 day
              </Text>
              <BsThreeDots />
            </Flex>
          </Flex>

          <Text>Hey, this is awesome!</Text>
          <Actions liked={liked} setLiked={setLiked} />
          <Text fontSize={"sm"} color={"grey.light"}>
            {10 + (liked ? 1 : 0)} likes
          </Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Comment;
