/** @format */

import Head from "next/head";
import { useRedirect } from "@/hooks/useRedirect";

import Wrapper from "@/components/Wrapper";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Pencil from "@/components/Pencil";
import Terms from "@/components/Terms";

export const getStaticProps = async () => {
  const { theme, numbering, title, description, blocks } = await import("/data/mostwanted-privacy-policy.json");

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
          navigation={{
            colorInvert: true,
          }}
        />
        <Navigation dark />
        <Pencil dark />
        <Terms data={data} noNav noRights />
      </Wrapper>
    </>
  );
};

export default PrivacyPolicyPage;
