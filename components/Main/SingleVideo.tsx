import { Box, Flex, Text, useToast } from "@chakra-ui/react";
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
  const toast = useToast()
  const router = useRouter();
  const workingOnIt = () =>
  toast({
    title: 'We are working on it.',
    duration: 900,
    isClosable: true,
  })
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
            <Box cursor='pointer' h="40px" w="40px" borderRadius="50%" bg="gray" onClick={workingOnIt} ></Box>
            <Flex justifyContent="left" direction="column">
              <Text cursor='pointer' fontSize="14px" onClick={workingOnIt}>{video.title}</Text>
              <Flex gap="4px" fontSize="12px">
                <Text cursor='pointer' onClick={workingOnIt} >{video.channelName}</Text>
                <Text>{video.views}</Text>
                <Text>{video.time}</Text>
              </Flex>
            </Flex>
          </Flex>
          <Flex onClick={workingOnIt} cursor='pointer' h='40px' justify='center' alignItems='center' >
            <AiOutlineMore />
          </Flex>
        </Flex>
      </Box>
 
  );
};

export default SingleVideo;
