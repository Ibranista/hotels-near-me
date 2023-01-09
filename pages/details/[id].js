import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import hotelsData from "../../data/hotels.json";

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
  return {
    paths: hotelsData.map((hotel) => ({
      params: { id: hotel.id },
    })),
    fallback: false,
  };
}

function Simple(props) {
  console.log(props);
  const router = useRouter();
  const Id = router.query.id;
  return (
    <div>
      Simple
      <Link href="/">Back to Home</Link>
      <h1>url name:{Id}</h1>
      <h1>{props.hotels.name}</h1>
      <h1>{props.hotels.id}</h1>
    </div>
  );
}

export default Simple;
