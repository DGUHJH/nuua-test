import type { NextPage } from 'next';
import Head from 'next/head';
import * as Styled from 'styles/styled';

const Home: NextPage = () => {
  return (
    <Styled.Root>
      <Head>
        <title>누아 마이페이지</title>
        <meta name="description" content="누아 마이페이지" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Styled.Root>
  );
};

export default Home;
