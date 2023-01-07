import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
function HotelDetail() {
  const router = useRouter();
  const hotelId = router.query.id;

  return (
    <>
      <div>HotelDetail</div>
      <h1>url:{hotelId}</h1>
      <Link href="/" scroll={true} prefetch={true}>
        Back to home
      </Link>
      <Link href="/details/dynamic" scroll={true} prefetch={true}>
        Back to Dynamicpage
      </Link>
    </>
  );
}

export default HotelDetail;
