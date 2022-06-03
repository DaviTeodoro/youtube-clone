import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { AiOutlineMore } from "react-icons/ai";

// type Video = {
//   id: string;
//   title: string;
//   channelName: string;
//   views: string;
//   time: string;
// };

const SingleVideo = ({ video }) => {
  const router = useRouter();
  return (
    
      <Box h="100%" w="100%" fontFamily="Arial" key={video.id}>
        <Flex
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="200px"
          bg="gray.500"
          onClick={() => router.push("/VideoID")}
          cursor='pointer'
        >
          VIDEO THUMBNAIL
        </Flex>
        <Flex justify="space-between" gap="4px" px='8px' pt="12px">
          <Flex gap="8px">
            <Box cursor='pointer' h="40px" w="40px" borderRadius="50%" bg="gray"></Box>
            <Flex justifyContent="left" direction="column">
              <Text cursor='pointer' fontSize="14px">{video.title}</Text>
              <Flex gap="4px" fontSize="12px">
                <Text cursor='pointer' >{video.channelName}</Text>
                <Text cursor='pointer'>{video.views}</Text>
                <Text cursor='pointer'>{video.time}</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex cursor='pointer' h='40px' justify='center' alignItems='center' >
            <AiOutlineMore />
          </Flex>
        </Flex>
      </Box>
 
  );
};

export default SingleVideo;
