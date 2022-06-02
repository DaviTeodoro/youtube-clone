import { Box } from "@chakra-ui/react";
import React from "react";
import Header from "../../components/Header/Header";
import PlayingVideo from "../../components/Main/PlayingVideo";
const index = () => {
  return (
    <Box color="white" bg="#1d1d1d">
      <Header />
      <PlayingVideo />
    </Box>
  );
};

export default index;
