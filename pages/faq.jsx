/** @format */

import Head from "next/head";

import Wrapper from "@/components/Wrapper";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Pencil from "@/components/Pencil";
import Collapsible from "@/components/Collapsible";

export const getStaticProps = async () => {
  const { faq, parallaxScroll } = await import("/data/faq.json");

  return {
    props: {
      faq,
      parallaxScroll,
    },
  };
};

const FaqPage = ({ faq, parallaxScroll }) => (
  <>
    <Head>
      <title>Get RAW - Date 100% real people</title>
      <meta name="description" content="Find new love, not catfish" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    </Head>
    <Wrapper dark>
      <Header navigation={{ lightBody: true }} />
      <Navigation light />
      <Pencil />
      <Collapsible faq={faq} parallaxScroll={parallaxScroll} />
    </Wrapper>
  </>
);

export default FaqPage;
