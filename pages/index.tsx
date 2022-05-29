import type { NextPage } from "next";
import Head from "next/head";

import { Box, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Main from "../components/HomeVideos";

export default function Home(): NextPage {
  return (
    <div>
      <Head>
        <title>Seu Tubo</title>
      </Head>
      <Header />
      <Grid
        h="calc(100vh - 60px)"
        gridTemplateRows="repeat(3, 1fr)"
        gridTemplateColumns="340px repeat(2, 1fr)"
      >
        <Box id="toolbar" gridArea="1 / 1 / 4 / 2">
          <Sidebar />
        </Box>
        <GridItem id="map" gridArea="1 / 2 / 4 / 4">
          <Main />
        </GridItem>
      </Grid>
    </div>
  );
}
