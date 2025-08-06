/** @format */

import Head from "next/head";

import Wrapper from "@/components/Wrapper";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Pencil from "@/components/Pencil";
import MostWantedDone from "@/components/MostWantedDone";

export const getStaticProps = async () => {
  const { textsDesktop, textsMobile, link } = await import("/data/mostwanted-done.json");

  return {
    props: {
      data: { textsDesktop, textsMobile, link },
    },
  };
};

const MostwantedDonePage = ({ data }) => (
  <>
    <Head>
      <title>Get RAW - Date 100% real people</title>
      <meta name="description" content="Find new love, not catfish" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    </Head>
    <Wrapper>
      <Header
        dark
        logo={{
          hide: true,
        }}
        navigation={{
          colorInvert: true,
        }}
      />
      <Navigation dark home underline />
      <Pencil dark />
      <MostWantedDone data={data} />
    </Wrapper>
  </>
);

export default MostwantedDonePage;
