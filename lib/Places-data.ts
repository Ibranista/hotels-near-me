// initialize unsplash api

import { createApi } from "unsplash-js";
import useTrackLocation from "../hooks/use-track-location";

const serverApi = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
});

export const getListOfPlacesPhotos = async (query = "ethiopia coffee") => {
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
  let query: string = "cafe";
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
  return data.results.map((places: any, index: string | number) => {
    return { ...places, imgUrl: photos[index] };
  });
};
