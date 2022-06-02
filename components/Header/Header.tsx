import { Box, Flex, Text } from "@chakra-ui/react";
import {  FiSearch } from "react-icons/fi";
import {IoSearchOutline }  from "react-icons/md";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import Sidebar from "./Sidebar";

export default function Header() {
  const scrollDirection = useScrollDirection();
  return (
    <Flex
      bg='#1d1d1d'
      px="4px"
      justifyContent="space-between"
      position="sticky"
      top={scrollDirection === "down" ? "-48px" : "0px"}
      w='100%'
    >
        <Box>
            {/* <Sidebar /> */}
      <Text h="100%">SeuTubo</Text>
        </Box>
        
      <Flex>
        <Flex h="48px" w="48px" justifyContent="center" alignItems="center">
          {/* <IoSearchOutline /> */}
        <FiSearch />
        </Flex>
        <Flex h="48px" w="48px" justifyContent="center" alignItems="center">
          <Box bg="gray" h="24px" w="24px" borderRadius="50%"></Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
