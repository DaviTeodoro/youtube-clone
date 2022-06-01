import { Box, Flex, Text } from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons'
import { useScrollDirection } from "../../hooks/useScrollDirection";


export default function Header() {
    const scrollDirection = useScrollDirection()
    return <Flex bg='white'
     px='4px' 
     justifyContent='space-between' 
     position='sticky' 
     top={scrollDirection === 'down' ? '-48px' : '0px'} >
        <Text h='100%'>SeuTubo</Text>
        <Flex>
        <Flex h='48px' w='48px' justifyContent='center' alignItems='center' >
        <SearchIcon />
        </Flex>
        <Flex h='48px' w='48px' justifyContent='center' alignItems='center' >
        <Box bg='gray' h='24px' w='24px' borderRadius='50%' ></Box>
        </Flex>
        </Flex>
    </Flex>
}
