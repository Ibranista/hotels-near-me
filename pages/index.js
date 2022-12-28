import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
// component import
import Banner from "../components/banner";

// fetcher method

export async function getStaticProps(context) {
  // const data = fetch()
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function Home(props) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Hotels Near Me</title>
          <link rel="stylesheet" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>Hello World</h1>
          <h1>hello</h1>
          <Banner />
        </main>
        <footer className={styles.footer}>Footer</footer>
      </div>
    </>
  );
}
