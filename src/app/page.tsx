import Image from "next/image";
import {Box, Stack, Typography} from '@mui/material';
import Header from "./components/common/header";
import Link from "next/link";
import Footer from "./components/common/footer";
import RootLayout from "./layout";
import { FeatureWorks, HeroSection, RecentPosts } from "./components/home";

export default function Home() {
  return (
    <Box>
      <HeroSection/>
      <RecentPosts/>
      <FeatureWorks/>
    </Box>
  )
}

Home.Layout = RootLayout;
