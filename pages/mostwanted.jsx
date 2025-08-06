/** @format */

import Head from "next/head";
import { useRedirect } from "@/hooks/useRedirect";

import Wrapper from "@/components/Wrapper";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Pencil from "@/components/Pencil";
import MostWanted from "@/components/MostWanted";

export const getStaticProps = async () => {
  const { navigation, title, descr, openMobileForm } = await import("/data/mostwanted.json");
  const { img, stepsDesktop, stepsMobile, compliments } = await import("/data/wanted-from.json");

  return {
    props: {
      data: { navigation, title, descr, openMobileForm, img, stepsDesktop, stepsMobile, compliments },
    },
  };
};

const MostwantedPage = ({ data }) => {
  useRedirect();

  return (
    <>
      <Head>
        <title>Get RAW - Date 100% real people</title>
        <meta name="description" content="Find new love, not catfish" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <Wrapper>
        <Header
          dark
          navigation={{
            colorInvert: true,
          }}
          logo={{
            hide: true,
          }}
        />
        <Navigation dark home underline noDesktop />
        <Pencil dark />
        <MostWanted data={data} />
      </Wrapper>
    </>
  );
};

export default MostwantedPage;
