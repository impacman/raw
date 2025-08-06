/** @format */

import Head from "next/head";
import { useRedirect } from "@/hooks/useRedirect";

import Wrapper from "@/components/Wrapper";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Pencil from "@/components/Pencil";
import Terms from "@/components/Terms";
import Btn from "@/components/Mini/Btn";

export const getStaticProps = async () => {
  const { theme, numbering, title, description, blocks } = await import("/data/mini-terms-conditions.json");

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

const PrivacyPolicyPage = ({ data }) => {
  useRedirect();

  return (
    <>
      <Head>
        <title>Get RAW - Date 100% real people</title>
        <meta name="description" content="Find new love, not catfish" />
      </Head>
      <Wrapper>
        <Header
          dark
          logo={{ colorViolet: true }}
          navigation={{
            colorInvert: true,
            responsive: true,
          }}
        />
        <Navigation mini />
        <Pencil dark />
        <Terms data={data} noNav noRights dark />
        <Btn />
      </Wrapper>
    </>
  );
};

export default PrivacyPolicyPage;
