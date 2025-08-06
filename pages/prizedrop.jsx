/** @format */

import Head from "next/head";

import Wrapper from "@/components/Wrapper";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Pencil from "@/components/Pencil";
import Mini from "@/components/Mini";
import Btn from "@/components/Mini/Btn";

export const getStaticProps = async () => {
  const { items } = await import("/data/mini.json");

  return {
    props: {
      items,
    },
  };
};

const PartnershipPage = ({ items }) => (
  <>
    <Head>
      <title>Get RAW - Date 100% real people</title>
      <meta name="description" content="Find new love, not catfish" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    </Head>
    <Wrapper>
      <Header
        minMobile
        dark
        logo={{ colorViolet: true }}
        navigation={{
          colorInvert: true,
          responsive: true,
        }}
      />
      <Navigation mini />
      <Pencil dark />
      <Mini items={items} />
      <Btn />
    </Wrapper>
  </>
);

export default PartnershipPage;
