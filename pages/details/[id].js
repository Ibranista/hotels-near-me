import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import hotelsData from "../../data/hotels.json";
import Head from "next/head";
export async function getStaticProps(staticProps) {
  // fsq3c2EgkBLcOaok8uikpCe3W6wMHenhNoCCcMoa9myVAYU=
  // fetch coffee stores from foursquare.com using client_id=1JZVCUEW05WWSSQ5G2YU02BGW1VXQYTNDTTLWZXDVIZ2HGMM and client_secret=O4QFPRLTTFREYYHKO2BJRVRTKZRCNNFCD0RP3KXAQ420VDNS and ll=40.7,-74 and v=20180323 and use version 3 of the API
  let url = "https://api.foursquare.com/v3/places/{fsq_id}";
  // const sdk = require("api")("@fsq-developer/v1.0#17kgj534lcjp10ly");

  const authToken = "fsq3c2EgkBLcOaok8uikpCe3W6wMHenhNoCCcMoa9myVAYU=";

  const placeId = "5a187743ccad6b307315e6fe";

  const headers = {
    Authorization: `Bearer ${authToken}`,
  };

  const body = {
    fsq_id: placeId,
  };

  fetch(
    "https://api.foursquare.com/v2/venues/search?ll=40.7,-74&&query=coffee stores&client_id=1JZVCUEW05WWSSQ5G2YU02BGW1VXQYTNDTTLWZXDVIZ2HGMM&client_secret=O4QFPRLTTFREYYHKO2BJRVRTKZRCNNFCD0RP3KXAQ420VDNS&v=20180323"
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
  console.log("first");
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
