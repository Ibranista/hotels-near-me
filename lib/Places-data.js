// initialize unsplash api

import { createApi } from "unsplash-js";
// on your node server
const serverApi = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
  //...other fetch options
});

export const Places = async () => {
  // getPhotos returns a promise
  let photos = await serverApi.search.getPhotos({
    query: "cat",
    page: 1,
    perPage: 10,
    color: "green",
    orientation: "portrait",
  });
  console.log("photos:", photos.response.results);
  let pics = photos.response.results.map((result) => result.urls["small"]);
  console.log(pics);
  const searchParams = new URLSearchParams({
    query: "coffee",
    near: "Seattle, WA",
    open_now: "true",
    sort: "DISTANCE",
  });

  const results = await fetch(
    `https://api.foursquare.com/v3/places/search?${searchParams}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: process.env.FOURSQUARE_AUTHORIZATION,
      },
    }
  );
  const data = await results.json();
  return data.results;
};
