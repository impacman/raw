/** @format */

import Head from "next/head";

import Wrapper from "@/components/Wrapper";
import Header from "@/components/Header";
import Promo from "@/components/Promo";

export const getStaticProps = async () => {
  const { form } = await import("/data/login.json");

  return {
    props: { form },
  };
};

const DownloadPage = ({ form }) => (
  <>
    <Head>
      <title>Get RAW - Date 100% real people</title>
      <meta name="description" content="Find new love, not catfish" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    </Head>
    <Wrapper>
      <Header
        minMobile
        logo={{
          colorViolet: true,
        }}
        navigation={{
          hide: true,
        }}
        text={{
          promo: true,
        }}
      >
        <span>promo code</span>
        <span>verification</span>
      </Header>
      <Promo />
    </Wrapper>
  </>
);

export default DownloadPage;
