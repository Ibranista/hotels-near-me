// initialize unsplash api

import { createApi } from "unsplash-js";
// on your node server
const serverApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  //...other fetch options
});

const getListOfPlacesPhotos = async () => {
  // getPhotos returns a promise
  let photos = await serverApi.search.getPhotos({
    query: "ethiopia cafe",
    perPage: 10,
  });
  let pics = photos.response.results.map((result) => result.urls["small"]);
  return pics;
};

export const Places = async () => {
  // const searchParams = new URLSearchParams({
  //   query: "coffee",
  //   near: "Seattle, WA",
  //   open_now: "true",
  //   sort: "DISTANCE",
  // });

  let query = "cafe";
  let photos = await getListOfPlacesPhotos();
  const results = await fetch(
    `https://api.foursquare.com/v3/places/search?query=${query}&ll=8.964864741253253%2C38.729851307203866`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: process.env.FOURSQUARE_AUTHORIZATION,
      },
    }
  );

  const data = await results.json();
  return data.results.map((places, index) => {
    return { ...places, imgUrl: photos[index] };
  });
};
