import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { Portal } from "@chakra-ui/portal";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";

import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import Actions from "./Actions";

const UserPosts = ({ likes, replies, postImg, postTitle }) => {
  const [liked, setLiked] = useState(false);
  return (
    <Link to="/aliumusa/post/1">
      <Flex gap={3} mb={4} py={5}>
        {/* user avatar and commneters avatars */}
        <Flex flexDir={"column"} alignItems={"center"}>
          <Avatar size="md" name="Musa Aliu" src="/directorPro.jpeg" />
          <Box w="1px" h={"full"} bg="gray.light" my={2}></Box>
          <Box position={"relative"} w={"full"}>
            <Avatar
              size="xs"
              name="John doe"
              src="https://bit.ly/dan-abramov"
              position={"absolute"}
              top={"0px"}
              left="15px"
              padding={"2px"}
            />
            <Avatar
              size="xs"
              name="John doe"
              src="https://bit.ly/sage-adebayo"
              position={"absolute"}
              bottom={"0px"}
              right="-5px"
              padding={"2px"}
            />
            <Avatar
              size="xs"
              name="John doe"
              src="https://bit.ly/prosper-baba"
              position={"absolute"}
              bottom={"0px"}
              left="4px"
              padding={"2px"}
            />
          </Box>
        </Flex>

        {/* Username, verify icon and  day posted*/}
        <Flex flex={1} flexDirection={"column"} gap={2}>
          <Flex justifyContent={"space-between"} w={"full"}>
            <Flex w={"full"} alignItems={"center"}>
              <Text fontSize={"sm"} fontWeight={"bold"}>
                AliuMusa
              </Text>
              <Image src="/verified.png" w={4} h={4} ml={1} />
            </Flex>
            <Flex
              gap={4}
              alignItems={"center"}
              onClick={(e) => e.preventDefault()}>
              <Text fontStyle={"sm"} color={"gray.light"}>
                1d
              </Text>
              <BsThreeDots cursor={"pointer"} />

              {/* <Menu>
                <MenuButton>
                  <BsThreeDots cursor={"pointer"} />
                </MenuButton>
                <Portal>
                  <MenuList bg={"grey.light"} borderRadius={"20"}>
                    <MenuItem
                      bg={"grey.light"}
                      color={"grey.dark"}
                      borderBottom={"1px solid #1e1e1e"}>
                      Unfollow
                    </MenuItem>
                    <MenuItem
                      bg={"grey.light"}
                      color={"grey.dark"}
                      borderBottom={"1px solid #1e1e1e"}>
                      Report
                    </MenuItem>
                    <MenuItem
                      bg={"grey.light"}
                      color={"grey.dark"}
                      borderBottom={"1px solid #1e1e1e"}>
                      Hide
                    </MenuItem>
                    <MenuItem bg={"grey.light"} color={"red"}>
                      Report
                    </MenuItem>
                  </MenuList>
                </Portal>
              </Menu> */}
            </Flex>
          </Flex>

          {/* post image and post text*/}
          <Text fontSize={"sm"}>{postTitle}</Text>
          {postImg && (
            <Box
              borderRadius={6}
              overflow={"hidden"}
              border={"1px solid"}
              borderColor={"gray.light"}>
              <Image src={postImg} w={"full"} />
            </Box>
          )}

          {/* Actions */}
          <Flex>
            <Actions liked={liked} setLiked={setLiked} />
          </Flex>

          {/* replies and likes */}
          <Flex gap={2} alignItems={"center"}>
            <Text color={"gray.light"} fontSize="sm">
              {replies} replies
            </Text>
            <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
            <Text color={"gray.light"} fontSize="sm">
              {likes} likes
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};

export default UserPosts;
