/** @format */

import Head from "next/head";
import { useRedirect } from "@/hooks/useRedirect";

import Wrapper from "@/components/Wrapper";
import Pencil from "@/components/Pencil";

export const getStaticProps = async () => {
  const { theme, numbering, title, description, blocks } = await import("/data/membership-privacy-policy.json");

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
        <Pencil dark />
        {/* <Terms data={data} logo noNav noRights /> */}
      </Wrapper>
    </>
  );
};

export default PrivacyPolicyPage;
