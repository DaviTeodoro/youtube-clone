import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { HiDownload, HiOutlineChevronDown } from "react-icons/hi";

const PlayingVideo = () => {
  return (
    <Box>
      <Flex
        justify="center"
        alignItems="center"
        bg="gray.500"
        w="100%"
        h="205px"
      >
        Video
      </Flex>
      <Flex justify="space-between" h="100%" py="4px" px="8px">
        <Flex direction="column">
          <Text fontSize="14px"> Nome da porra do video que é grande </Text>
          <Flex fontSize="12px" gap="4px">
            <Text> 25 mil vizualizações </Text>
            <Text> há 2 anos </Text>
          </Flex>
        </Flex>
        <Flex h="100%" justifyContent="center" alignItems="center">
          <HiOutlineChevronDown />
        </Flex>
      </Flex>
      <Flex w="100%" justify="space-between" py="4px" px="16px">
        <Flex justify="space-around" gap="16px">
          <Flex
            w="100%"
            h="100%"
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <AiOutlineLike />
            <Text fontSize="12px">200 mil</Text>
          </Flex>
          <Flex
            w="100%"
            h="100%"
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <AiOutlineDislike />
            <Text fontSize="12px">200 mil</Text>
          </Flex>
        </Flex>
        <Flex justify="space-around" gap="16px">
          <Flex
            w="100%"
            h="100%"
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <HiDownload />
            <Text fontSize="12px">Download</Text>
          </Flex>
          <Flex
            w="100%"
            h="100%"
            justifyContent="center"
            alignItems="center"
            direction="column"
          >
            <AiOutlineLike />
            <Text fontSize="12px">Save</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        justify="space-between"
        h="100%"
        alignItems="center"
        gap="4px"
        px="8px"
        py="4px"
      >
        <Flex gap="8px">
          <Box h="30px" w="30px" borderRadius="50%" bg="gray"></Box>
          <Flex justifyContent="left" direction="column">
            <Text fontSize="14px">Channel's Name</Text>
            <Text fontSize="12px">122 mil inscritos</Text>
          </Flex>
        </Flex>
        <Text color="red">INSCREVA-SE</Text>
      </Flex>
    </Box>
  );
};

export default PlayingVideo;
