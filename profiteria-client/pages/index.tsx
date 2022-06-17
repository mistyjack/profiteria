import type { NextPage } from "next";
import Head from "next/head";
import { Container } from "@components/ui";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home - iCreatat</title>
        <meta name="description" content="Home - iCreatat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <p className="text-blue-200">Hello world</p>
        </Container>
      </main>
    </div>
  );
};

export default Home;
