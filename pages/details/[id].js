import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import hotelsData from "../../data/hotels.json";
import Head from "next/head";
import { Places } from "../../lib/Places-data";
export async function getStaticProps(staticProps) {
  // One of the properties of the staticProps object is params, which is an object that contains the route parameters for the page being rendered.

  let ImportedData = await Places();
  const params = staticProps.params;
  return {
    props: {
      hotels: ImportedData.find((place) => place.fsq_id === params.id),
    },
  };
}

export async function getStaticPaths() {
  let ImportedData = await Places();

  let paths = ImportedData.map((place) => ({
    params: { id: place.fsq_id },
  }));
  return {
    paths: paths,
    fallback: true,
  };
}

function HotelDetails(props) {
  const router = useRouter();
  const Id = router.query.id;
  const { name } = props.hotels;
  let places = props.hotels;
  const { address, country, neighborhood, fsq_id, dma, postcode } =
    places.location;
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
      <h1>url name that's defined by the URL:{Id}</h1>
      <h1>{name}</h1>
      <h1>ID:{fsq_id}</h1>
      Address:<h1>{address}</h1>
      Country: <h1>{country}</h1>
      neighborhood: <h1>{neighborhood}</h1>
      dma:<h1>{dma}</h1>
      categories:
      <h1>{places.categories.map((name) => name.name)}</h1>
      postcode:{postcode}
    </div>
  );
}

export default HotelDetails;
