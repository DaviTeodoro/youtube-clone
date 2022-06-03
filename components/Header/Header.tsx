import { Box, Flex, Text } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/router";
import { useScrollDirection } from "../../hooks/useScrollDirection";
import Sidebar from "./Sidebar";

export default function Header() {
  const scrollDirection = useScrollDirection();
  const router = useRouter();
  return (
    <Flex
      bg="#1d1d1d"
      px="4px"
      justifyContent="space-between"
      position="sticky"
      top={scrollDirection === "down" ? "-48px" : "0px"}
      w="100%"
    >
      <Box onClick={() => router.push("/")} cursor='pointer'>
        {/* <Sidebar /> */}
        <Text h="100%">
          SeuTubo
        </Text>
      </Box>

      <Flex>
        <Flex cursor='pointer' h="48px" w="48px" justifyContent="center" alignItems="center">
          
          <FiSearch />
        </Flex>
        <Flex h="48px" w="48px" justifyContent="center" alignItems="center">
          <Box cursor='pointer' bg="gray" h="24px" w="24px" borderRadius="50%"></Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
