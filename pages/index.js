import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
// component import
import Hero from "../components/Hero";
import Banner from "../components/banner";
import Image from "next/image";
import Card from "../components/Card";
import hotels from "../data/hotels.json";

export async function getStaticProps(context) {
  return {
    props: { hotels }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  return (
    <>
      <div className="font-Inter">
        <Head>
          <title>Hotels Near Me</title>
        </Head>
        <main className="relative bg-banner bg-fixed">
          <Banner />
          <section
            className="
     bg-hero-pattern sm:bg-desktop-pattern relative z-[80] w-full -top-72 flex gap-5
     items-center justify-center pt-10 sm:pt-5 pb-32 px-5 flex-wrap
     bg-gray-100
     "
          >
            {props.hotels.map((hotel) => {
              return (
                <Card
                  key={hotel.id}
                  name={hotel.name}
                  imgUrl={hotel.imgUrl}
                  href={`/details/${hotel.id}`}
                  description={hotel.description}
                  alt={hotel.alt}
                  star={hotel.star}
                />
              );
            })}
            <div className="custom-shape-divider-top-1673200510">
              <svg
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
              >
                <path
                  d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                  className="shape-fill"
                ></path>
              </svg>
            </div>
          </section>
        </main>
        <Hero />
        <footer className={styles.footer}>Footer</footer>
      </div>
    </>
  );
}
