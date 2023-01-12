import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
// component import
import Banner from "../components/banner";
import Image from "next/image";
import Card from "../components/Card";
import hotels from "../data/hotels.json";
import { Places } from "../lib/Places-data";
import useTrackLocation from "../hooks/use-track-location";
import { useEffect } from "react";

export async function getStaticProps(context) {
  let ImportedData = await Places();
  return {
    // props: { hotels }, // will be passed to the page component as props
    props: {
      hotels: ImportedData,
    },
  };
}

// const handleBannerBtnClick = () => {
//   console.log("object");
//   // handleTrackLocation();
//   console.log("latitue: ", latLong);
// };

export default function Home(props) {
  const { handleTrackLocation, latLong, locationErrorMsg, isFindingLocation } =
    useTrackLocation();

  // const fetchData = async () => {
  //   try {
  //     const places = await Places();
  //     console.log(places);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   if (latLong) {
  //     try {
  //       fetchData();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // }, [latLong]);

  const handleButtonClick = () => {
    handleTrackLocation();
    console.log(latLong?latLong:'loading...');
  };
  return (
    <>
      <div className="font-Inter  whole-container scroll-smooth overflow-auto">
        <Head>
          <title>Hotels Near Me</title>
        </Head>
        <main className="relative bg-banner bg-no-repeat bg-cover bg-fixed">
          <button
            onClick={handleButtonClick}
            className="px-5 rounded-md py-5 bg-blue-500 text-2xl font-extrabold text-white relative z-[9000]"
          >
            {isFindingLocation ? "Locating..." : "view Location"}
          </button>
          <Banner />

          {hotels.length > 0 ? (
            <section
              className="
            bg-hero-pattern sm:bg-desktop-pattern bg-no-repeat relative z-[80] w-full -top-72 flex gap-5
            items-center justify-center pt-10 sm:pt-5 pb-32 px-5 flex-wrap
            bg-gray-100
            "
            >
              <h1 className="pl-24 w-full text-right md:text-left md:w-1/2 -ml-96 absolute text-2xl font-bold top-10 tracking-widest">
                Coffee Shops Around Addis
              </h1>
              {props.hotels.map((hotel) => {
                return (
                  <Card
                    key={hotel.fsq_id}
                    name={hotel.name}
                    imgUrl={hotel.imgUrl || "/HotelBanner.jpg"}
                    href={`/details/${hotel.fsq_id}`}
                    {...hotel}
                    alt={hotel.name}
                    star={hotel.categories.length}
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
          ) : (
            <section
              className="
          bg-hero-pattern sm:bg-desktop-pattern relative z-[80] w-full -top-72 flex
          p-10 sm:pt-5 
          bg-gray-100 
          items-center justify-center
          "
            >
              <h1 className="absolute font-bold text-2xl sm:text-4xl md:text-8xl text-white text-center text-opacity-80 animate-pulse">
                No Hotels Around this Area!
              </h1>
              <Image
                width={1920}
                height={200}
                src={
                  "https://images.pexels.com/photos/4253829/pexels-photo-4253829.jpeg?cs=srgb&dl=pexels-taryn-elliott-4253829.jpg&fm=jpg"
                }
                className="rounded-md"
              />
            </section>
          )}
        </main>
        <footer className={styles.footer}>Footer</footer>
      </div>
    </>
  );
}
