import {
    Avatar,
    Box,
    Collapse,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Icon,
    IconButton,
    Grid,
    Input,
    InputGroup,
    InputLeftElement,
    Text,
    useColorModeValue,
    useDisclosure,
  } from "@chakra-ui/react";
  import { FaBell, FaClipboardCheck, FaRss } from "react-icons/fa";
  import { AiFillGift } from "react-icons/ai";
  import { BsGearFill } from "react-icons/bs";
  import { FiMenu, FiSearch } from "react-icons/fi";
  import { HiCode, HiCollection } from "react-icons/hi";
  import { MdHome, MdKeyboardArrowRight } from "react-icons/md";
  import SingleVideo from "../Main/SingleVideo";
  import Header from "./Header";
//   import { Logo } from "@choc-ui/logo";
const test = [
    {
      id: "1",
      title: "Fantastico mundo de bob",
      channelName: "testando",
      views: "150 views",
      time: "4 days",
    },
    {
      id: "2",
      title: "Fanta de bob",
      channelName: "dodieira",
      views: "1520 views",
      time: "42 days",
    },
    {
      id: "3",
      title: " mundo de bob",
      channelName: "tendo",
      views: "10 views",
      time: "14 days",
    },
    {
      id: "1",
      title: "Fantastico mundo de bob",
      channelName: "testando",
      views: "150 views",
      time: "4 days",
    },
    {
      id: "2",
      title: "Fanta de bob",
      channelName: "dodieira",
      views: "1520 views",
      time: "42 days",
    },
    {
      id: "3",
      title: " mundo de bob",
      channelName: "tendo",
      views: "10 views",
      time: "14 days",
    },
    {
      id: "1",
      title: "Fantastico mundo de bob",
      channelName: "testando",
      views: "150 views",
      time: "4 days",
    },
    {
      id: "2",
      title: "Fanta de bob",
      channelName: "dodieira",
      views: "1520 views",
      time: "42 days",
    },
    {
      id: "3",
      title: " mundo de bob",
      channelName: "tendo",
      views: "10 views",
      time: "14 days",
    },
  ];
  
  export default function Sidebar() {
    const sidebar = useDisclosure();
    const integrations = useDisclosure();
    const color = useColorModeValue("gray.600", "gray.300");
  
    const NavItem = (props) => {
      const { icon, children, ...rest } = props;
      return (
        <Flex
          align="center"
          px="4"
          pl="4"
          py="3"
          cursor="pointer"
          color={useColorModeValue("inherit", "gray.400")}
          _hover={{
            bg: useColorModeValue("gray.100", "gray.900"),
            color: useColorModeValue("gray.900", "gray.200"),
          }}
          role="group"
          fontWeight="semibold"
          transition=".15s ease"
          {...rest}
        >
          {icon && (
            <Icon
              mx="2"
              boxSize="4"
              _groupHover={{
                color: color,
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      );
    };
  
    const SidebarContent = (props) => (
      <Box
        as="nav"
        pos="fixed"
        top="0"
        left="0"
        zIndex="sticky"
        h="full"
        pb="10"
        overflowX="hidden"
        overflowY="auto"
        bg={useColorModeValue("white", "gray.800")}
        borderColor={useColorModeValue("inherit", "gray.700")}
        borderRightWidth="1px"
        w="60"
        {...props}
      >
      
        <Flex
          direction="column"
          as="nav"
          fontSize="sm"
          color="gray.600"
          aria-label="Main Navigation"
        >
          <NavItem icon={MdHome}>Home</NavItem>
          <NavItem icon={FaRss}>Articles</NavItem>
          <NavItem icon={HiCollection}>Collections</NavItem>
          <NavItem icon={FaClipboardCheck}>Checklists</NavItem>
          <NavItem icon={HiCode} onClick={integrations.onToggle}>
            Integrations
            <Icon
              as={MdKeyboardArrowRight}
              ml="auto"
              transform={integrations.isOpen && "rotate(90deg)"}
            />
          </NavItem>
          <Collapse in={integrations.isOpen}>
            <NavItem pl="12" py="2">
              Shopify
            </NavItem>
            <NavItem pl="12" py="2">
              Slack
            </NavItem>
            <NavItem pl="12" py="2">
              Zapier
            </NavItem>
          </Collapse>
          <NavItem icon={AiFillGift}>Changelog</NavItem>
          <NavItem icon={BsGearFill}>Settings</NavItem>
        </Flex>
      </Box>
    );
    return (
      <Box
        as="section"
        bg={useColorModeValue("gray.50", "gray.700")}
        minH="100vh"
      >
        <SidebarContent display={{ base: "none", md: "unset" }} />
        <Drawer
          isOpen={sidebar.isOpen}
          onClose={sidebar.onClose}
          placement="left"
        >
          <DrawerOverlay />
          <DrawerContent>
            <SidebarContent w="full" borderRight="none" />
          </DrawerContent>
        </Drawer>
        <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
          <Flex
            as="header"
            align="center"
            justify="space-between"
            w="full"
            px="4"
            bg={useColorModeValue("white", "gray.800")}
            borderBottomWidth="1px"
            borderColor={useColorModeValue("inherit", "gray.700")}
            h="14"
          >
            <IconButton
              aria-label="Menu"
              display={{ base: "inline-flex", md: "none" }}
              onClick={sidebar.onOpen}
              icon={<FiMenu />}
              size="sm"
            />
            {/* <InputGroup w="96" display={{ base: "none", md: "flex" }}>
              <InputLeftElement color="gray.500">
                <FiSearch />
              </InputLeftElement>
              <Input placeholder="Search for articles..." />
            </InputGroup>
  
            <Flex align="center">
              <Icon color="gray.500" as={FaBell} cursor="pointer" />
              <Avatar
                ml="4"
                size="sm"
                name="anubra266"
                src="https://avatars.githubusercontent.com/u/30869823?v=4"
                cursor="pointer"
              />
            </Flex> */}
            <Header />
          </Flex>
          <Box as="main" p="4">
          {/* Add content here, remove div below  */}
          <Grid
        gridTemplateColumns="repeat(auto-fit, minmax(310px, 1fr))"
        gap="16px"
      >
        {test.map((video) => (
          <SingleVideo video={video} />
        ))}
      </Grid>
        </Box>

        </Box>
      </Box>
    // <SidebarContent display={{ base: "none", md: "unset" }} />
    );
  }