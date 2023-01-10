export const Places = async () => {
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
        Authorization: "fsq3c2EgkBLcOaok8uikpCe3W6wMHenhNoCCcMoa9myVAYU=",
      },
    }
  );
  const data = await results.json();
  return data.results;
};
