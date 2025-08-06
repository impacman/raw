/** @format */

import Head from "next/head";

import Wrapper from "@/components/Wrapper";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation/Navigation";
import Pencil from "@/components/Pencil";
import Terms from "@/components/Terms";
import ArrowUp from "@/components/ArrowUp";

export const getStaticProps = async () => {
  const { theme, numbering, title, description, blocks } = await import("/data/privacy-policy.json");

  return {
    props: {
      data: {
        theme,
        numbering,
        title,
        description,
        blocks,
      },
    },
  };
};

const PrivacyPolicyPage = ({ data }) => (
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
      />
      <Navigation dark />
      <Pencil dark />
      <Terms data={data} />
      <ArrowUp />
    </Wrapper>
  </>
);

export default PrivacyPolicyPage;
