import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas, nextjs, next, next.js' />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, sequi
          corporis. Soluta dolorum minus sequi assumenda qui totam, repellendus,
          inventore autem omnis recusandae quis optio, laborum voluptate
          aliquam. Harum, eligendi.
        </p>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, sequi
          corporis. Soluta dolorum minus sequi assumenda qui totam, repellendus,
          inventore autem omnis recusandae quis optio, laborum voluptate
          aliquam. Harum, eligendi.
        </p>
        <Link href='/ninjas' className={styles.btn}>
          See Ninjas Listing
        </Link>
      </div>
    </>
  );
}
