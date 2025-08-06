/** @format */

import Head from "next/head";

import Wrapper from "@/components/Wrapper";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Pencil from "@/components/Pencil";
import Partnership from "@/components/Partnership";

export const getStaticProps = async () => {
  const { banner, about, ambassador } = await import("/data/partnership.json");

  return {
    props: {
      data: { banner, about, ambassador },
    },
  };
};

const PartnershipPage = ({ data }) => (
  <>
    <Head>
      <title>Get RAW - Date 100% real people</title>
      <meta name="description" content="Find new love, not catfish" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    </Head>
    <Wrapper dark>
      <Header
        logo={{
          hide: true,
        }}
      />
      <Navigation dark home type="partnership" />
      <Pencil />
      <Partnership data={data} demo />
    </Wrapper>
  </>
);

export default PartnershipPage;
