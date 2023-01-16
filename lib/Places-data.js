// initialize unsplash api

import { createApi } from "unsplash-js";
import useTrackLocation from "../hooks/use-track-location";
// on your node server
const serverApi = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
  //...other fetch options
});

export const getListOfPlacesPhotos = async (query = "ethiopia") => {
  // getPhotos returns a promise
  let photos = await serverApi.search.getPhotos({
    query: query,
    perPage: 100,
  });
  let pics = photos.response.results.map((result) => result.urls["small"]);
  return pics;
};

export const Places = async (
  latLong = "8.898375763993641,38.770953139792596"
) => {
  //  { latLong } = useTrackLocation();
  console.log("hello ibrahim");
  // const searchParams = new URLSearchParams({
  //   query: "coffee",
  //   near: "Seattle, WA",
  //   open_now: "true",
  //   sort: "DISTANCE",
  // });
  // let latLong = "";
  let query = "cafe";
  // , = %2C
  let photos = await getListOfPlacesPhotos();
  const results = await fetch(
    `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_AUTHORIZATION,
      },
    }
  );

  const data = await results.json();
  return data.results.map((places, index) => {
    return { ...places, imgUrl: photos[index] };
  });
};
