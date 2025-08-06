/** @format */

import Head from "next/head";

import Wrapper from "@/components/Wrapper";
import Header from "@/components/Header";
import Lines from "@/components/Lines/index,";
import Navigation from "@/components/Navigation";
import NavigationBottom from "@/components/NavigationBottom";
import Rights from "@/components/Rights";
import Pencil from "@/components/Pencil";
import Download from "@/components/Download";

const DownloadPage = () => (
  <>
    <Head>
      <title>Get RAW - Date 100% real people</title>
      <meta name="description" content="Find new love, not catfish" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    </Head>
    <Wrapper dark>
      <Header navigation={{ lightBody: true }} />
      <Lines onlyMobile />
      <Navigation light />
      <NavigationBottom />
      <Rights />
      <Pencil />
      <Download />
    </Wrapper>
  </>
);

export default DownloadPage;
