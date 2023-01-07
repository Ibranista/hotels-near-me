import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
// component import
import Hero from "../components/Hero";
import Banner from "../components/banner";
import Image from "next/image";
import Link from "next/link";
// fetcher method

export async function getStaticProps(context) {
  // const data = fetch()
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log("Banner Clicked");
  };

  return (
    <>
      <div className="font-Inter">
        <Head>
          <title>Hotels Near Me</title>
        </Head>
        <h1 className="relative z-50">
          <Link
            href="/details/helloworld"
            className="hover:bg-blue-500 font-bold px-10"
          >
            To the dynamic route
          </Link>
        </h1>
        <main className="relative">
          <Banner
            buttonText="Find Nearest Hotels in My Area"
            handleOnClick={handleOnBannerBtnClick}
          />
        </main>
        <Hero />
        <footer className={styles.footer}>Footer</footer>
      </div>
    </>
  );
}
