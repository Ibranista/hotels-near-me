import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
// component import
import Hero from "../components/Hero";
import Banner from "../components/banner";
import Image from "next/image";

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
      <div className="font-Inter">
        <Head>
          <title>Hotels Near Me</title>
          <link rel="stylesheet" href="/favicon.ico" />
        </Head>
        <main className="relative">
          <Banner />
        </main>
        <Hero />
        <footer className={styles.footer}>Footer</footer>
      </div>
    </>
  );
}
