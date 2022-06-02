import type { NextPage } from "next";
import Head from "next/head";
import Innertube from 'youtubei.js';
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Header/Sidebar";
import Header from "../components/Header/Header";
import Main from "../components/Main/HomeVideos";
import SingleVideo from "../components/Main/SingleVideo";
import { useState, useEffect } from 'react'

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

export default function Home(): NextPage {

  // useEffect(() => {
  //   const getYoutube = async () => {
  //     const youtube = await new Innertube({gl: 'US'})
  //   }
  //   getYoutube()
  
  // }, [])

  return (
    <Box color='white' bg='#1d1d1d'>
      <Head>
        <title>Seu Tubo</title>
      </Head>
      <Header />
      {/* <Sidebar /> */}
      <Grid
        gridTemplateColumns="repeat(auto-fit, minmax(310px, 1fr))"
        gap="16px"
      >
        {test.map((video) => (
          <SingleVideo video={video} />
        ))}
      </Grid>
      {/* <Grid
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
      </Grid> */}
    </Box>
  );
}
