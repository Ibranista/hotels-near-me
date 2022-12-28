import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
// component import
import Banner from "../components/banner";
export default function Home() {
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
