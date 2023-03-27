import Head from 'next/head';
import Main from '@/Components/Main';

const Home = () => {
  return (
    <>
      <Head>
        <title>Anubhav Singh</title>
        <meta name="description" content="Portfolio Website in Windows Theme" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Main />
    </>
  );
};

export default Home;
