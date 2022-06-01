import { Box, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

// type Video = {
//   id: string;
//   title: string;
//   channelName: string;
//   views: string;
//   time: string;
// };

const SingleVideo = ({ video }) => {
  return (
    <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}>
      <Box h="100%" w="100%" fontFamily="Arial" key={video.id}>
        <Flex
          justifyContent="center"
          alignItems="center"
          w="100%"
          h="200px"
          bg="green"
        >
          VIDEO THUMBNAIL
        </Flex>
        <Flex justifyContent="space-between">
          <Box h="40px" w="40px" borderRadius="50%" bg="gray"></Box>
          <Flex justifyContent="left" w="100%" direction="column">
            <Text fontSize="14px">{video.title}</Text>
            <Flex gap="4px" fontSize="12px">
              <Text>{video.channelName}</Text>
              <Text>{video.views}</Text>
              <Text>{video.time}</Text>
            </Flex>
          </Flex>
          <Text>Icon</Text>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default SingleVideo;
