/** @format */

import Head from "next/head";

import Wrapper from "@/components/Wrapper";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Rights from "@/components/Rights";
import NavigationBottom from "@/components/NavigationBottom";
import Pencil from "@/components/Pencil";
import ContactForm from "@/components/ContactForm";

export const getStaticProps = async () => {
  const { data, bg } = await import("/data/contact-form.json");

  return {
    props: { data, bg },
  };
};

const TellMePage = ({ data, bg }) => (
  <>
    <Head>
      <title>Get RAW - Date 100% real people</title>
      <meta name="description" content="Find new love, not catfish" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
    </Head>
    <Wrapper dark>
      <Header
        minMobile
        navigation={{ lightBody: true }}
        text={{
          dmUs: true,
        }}
      >
        <>
          <span dangerouslySetInnerHTML={{ __html: data.feeling.text }} />
          <a href={`mailto:${data.feeling.email}`}>{data.feeling.email}</a>
        </>
      </Header>
      <Navigation light />
      <Rights />
      <NavigationBottom />
      <Pencil />
      <ContactForm data={data} bg={bg} />
    </Wrapper>
  </>
);

export default TellMePage;
