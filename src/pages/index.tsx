import Header from 'components/Header/pc';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as Styled from 'styles/styled';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>누아 마이페이지</title>
        <meta name="description" content="누아 마이페이지" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PC />
    </div>
  );
};

const PC = () => {
  return (
    <Styled.Root>
      <Header />
    </Styled.Root>
  );
};

export default Home;
