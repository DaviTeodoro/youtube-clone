import { Flex, Text } from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
  return (
    <Flex
      w="100%"
      justifyContent="left"
      px="8px"
      py="4px"
      position="fixed"
      bottom="0"
      bg="#1d1d1d"
    >
      <Flex cursor='pointer' direction="column" justifyContent="center" alignItems="center">
        <AiFillHome />
        <Text fontSize="12px">Home</Text>
      </Flex>
    </Flex>
  );
};

export default Navbar;
