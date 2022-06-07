import type { NextPage } from "next";
import Head from "next/head";

import { Box, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header/Header";
import Main from "../components/HomeVideos";
import Innertube from "youtubei.js";

export default function Home({ homefeed }): NextPage {
  console.log(JSON.parse(homefeed));
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

export async function getServerSideProps() {
  const youtube = await new Innertube({ gl: "US" });
  const homefeed = await youtube.getHomeFeed();

  console.log(homefeed);
  return { props: { homefeed: JSON.stringify(homefeed) } };
}
