import { Box, Flex, Text, useToast } from "@chakra-ui/react";
import React from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { HiDownload, HiOutlineChevronDown } from "react-icons/hi";

const PlayingVideo = () => {
  const toast = useToast()
  const workingOnIt = () =>
  toast({
    title: 'We are working on it.',
    duration: 900,
    isClosable: true,
  })
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
          <Text cursor='pointer' fontSize="14px" onClick={workingOnIt}> Nome da porra do video que é grande </Text>
          <Flex fontSize="12px" gap="4px">
            <Text> 25 mil vizualizações </Text>
            <Text> há 2 anos </Text>
          </Flex>
        </Flex>
        <Flex cursor='pointer' onClick={workingOnIt} h="100%" justifyContent="center" alignItems="center">
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
            cursor='pointer'
            onClick={workingOnIt}
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
            cursor='pointer'
            onClick={workingOnIt}
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
            cursor='pointer'
            onClick={workingOnIt}
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
            cursor='pointer'
            onClick={workingOnIt}
          >
            <AiOutlineLike />
            <Text fontSize="12px">Save</Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        justify="space-between"
        alignItems="center"
        gap="4px"
        px="8px"
        py="4px"
      >
        <Flex gap="8px" justifyContent='center' alignItems='center'>
          <Box h="30px" onClick={workingOnIt} cursor='pointer' w="30px" borderRadius="50%" bg="gray"></Box>
          <Flex justifyContent="left" direction="column">
            <Text cursor='pointer' onClick={workingOnIt} fontSize="14px">Channel's Name</Text>
            <Text fontSize="12px">122 mil inscritos</Text>
          </Flex>
        </Flex>
        <Text cursor='pointer' onClick={workingOnIt} color="red">INSCREVA-SE</Text>
      </Flex>
    </Box>
  );
};

export default PlayingVideo;
