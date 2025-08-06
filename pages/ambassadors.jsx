/** @format */

import Head from "next/head";

import Wrapper from "@/components/Wrapper";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Pencil from "@/components/Pencil";
import Ambassadors from "@/components/Ambassadors";

export const getStaticProps = async () => {
  const { main, steps } = await import("/data/type-form.json");
  const { banner, im, parallaxScrollImages } = await import(
    "/data/ambassadors.json"
  );

  return {
    props: {
      data: {
        main,
        steps,
        banner,
        im,
        parallaxScrollImages,
      },
    },
  };
};

const AmbassadorsPage = ({ data }) => (
  <>
    <Head>
      <title>Get RAW - Date 100% real people</title>
      <meta name="description" content="Find new love, not catfish" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />
    </Head>
    <Wrapper dark>
      {/* <Header logo={{ hideDesktop: true }} /> */}
      <Navigation home />
      <Pencil dark />
      <Ambassadors data={data} />
    </Wrapper>
  </>
);

export default AmbassadorsPage;
