import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
// component import
import Hero from "../components/Hero";
import Banner from "../components/banner";
import Image from "next/image";
import Card from "../components/Card";
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
        <main className="relative bg-banner">
          <Banner />
          <section
            className="
     bg-hero-pattern sm:bg-desktop-pattern relative z-[80] w-full -top-72 flex gap-5
     items-center justify-center pt-10 sm:pt-5 pb-32 px-5 flex-wrap
     "
          >
            <Card
              name="Hotel 1"
              imgUrl="/HotelBanner.jpg"
              href="/details/crown-hotel"
            />
            <Card
              name="Hotel 1"
              imgUrl="/HotelBanner.jpg"
              href="/details/crown-hotel"
            />
            <Card
              name="Hotel 1"
              imgUrl="/HotelBanner.jpg"
              href="/details/crown-hotel"
            />
            <Card
              name="Hotel 1"
              imgUrl="/HotelBanner.jpg"
              href="/details/crown-hotel"
            />
          </section>
        </main>
        <Hero />
        <footer className={styles.footer}>Footer</footer>
      </div>
    </>
  );
}
