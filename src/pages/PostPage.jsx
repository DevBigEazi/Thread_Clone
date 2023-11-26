import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../components/Actions";
import { useState } from "react";

const PostPage = () => {
  const [liked, setLiked] = useState(false);

  return (
    <>
      <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
          <Avatar src={"/aliumusa.jpeg"} size={"md"} name="Mark Zuckerberg" />
          <Flex>
            <Text fontSize={"sm"} fontWeight={"bold"}>
              Aliu Musa
            </Text>
            <Image src="/verified.png" w="4" h={4} ml={4} />
          </Flex>
          <Flex gap={4} alignItems={"center"}>
            <Text
              fontSize={"xs"}
              width={36}
              textAlign={"right"}
              color={"gray.light"}>
              2 days ago
            </Text>
            <BsThreeDots />
          </Flex>
        </Flex>
      </Flex>
      <Text my={3}>Hello everyone</Text>

      <Box
        borderRadius={6}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"gray.light"}>
        <Image src="/post2.jpg" w={"full"} />
      </Box>

      <Flex gap={3} my={3}>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>

      <Flex gap={2} alignItems={"center"}>
        <Text color={"grey.light"} fontSize={"sm"}>
          234 replies
        </Text>
        <Box w={0.5} h={0.5} borderRadius={"full"} bg={"grey.light"}></Box>
        <Text color={"grey.light"} fontSize={"sm"}>
          {200 + (liked ? 1 : 0)} likes
        </Text>
      </Flex>

      <Divider my={4} />

      <Flex justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>

      <Divider my={4} />

      {/* <Comment
        key={reply._id}
        reply={reply}
        lastReply={
          reply._id === currentPost.replies[currentPost.replies.length - 1]._id
        }
      /> */}
    </>
  );
};

export default PostPage;
