import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import hotelsData from "../../data/hotels.json";
import Head from "next/head";
export async function getStaticProps(staticProps) {
  // One of the properties of the staticProps object is params, which is an object that contains the route parameters for the page being rendered.
  const params = staticProps.params;
  return {
    props: {
      hotels: hotelsData.find((hotel) => hotel.id === params.id),
    },
  };
}

export async function getStaticPaths() {
  let paths = hotelsData.map((hotel) => ({
    params: { id: hotel.id },
  }));
  return {
    paths: paths,
    fallback: true,
  };
}

function HotelDetails(props) {
  const router = useRouter();
  const Id = router.query.id;
  const { name, id, description, star } = props.hotels;
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!props.hotels) {
    return <div>Error: Hotel not found</div>;
  }

  return (
    <div>
      <Head>
        <title>{name}</title>
      </Head>
      HotelDetails
      <Link href="/">Back to Home</Link>
      <h1>url name:{Id}</h1>
      <h1>{name}</h1>
      <h1>{id}</h1>
      <h1>{description}</h1>
      <h1>{star}</h1>
    </div>
  );
}

export default HotelDetails;
