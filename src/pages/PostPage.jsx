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
import Comment from "../components/Comment";

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
              width={360}
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

      <Comment
        comment={"This is cool"}
        createdAt={"1 min ago"}
        likes={13}
        username={"JohnDoe"}
        userAvatar={"https://bit.ly/kent-c-dodds"}
      />
      <Comment
        comment={"Hey, this is awesome!"}
        createdAt={"5 hrs ago"}
        likes={2}
        username={"Mubs"}
        userAvatar={"https://bit.ly/sage-adebayo"}
      />
      <Comment
        comment={"I really love my progress"}
        createdAt={"4 days ago"}
        likes={5}
        username={"Opa"}
        userAvatar={"https://bit.ly/prosper-baba"}
      />
    </>
  );
};

export default PostPage;
