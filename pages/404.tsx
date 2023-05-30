import { useEffect } from 'react';

import { useRouter } from 'next/router';

import Heading from '../components/Heading';

import Head from 'next/head';

import styles from '../styles/404.module.scss';

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Error</title>
      </Head>
      <div>
        <Heading text="404" />
        <Heading tag="h2" text="Something wrong..." />
      </div>
    </div>
  );
};

export default Error;
