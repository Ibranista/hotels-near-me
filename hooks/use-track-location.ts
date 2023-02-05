import { useState } from "react";

const useTrackLocation = () => {
  const [locationErrorMsg, setLocationErrorMsg] = useState("");
  const [latLong, setLatLong] = useState("");
  const [fetchingLocation, setFetchingLocation] = useState("");
  const success = (position: { coords: { latitude: any; longitude: any } }) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLatLong(`${latitude},${longitude}`);
    setLocationErrorMsg("");
    setTimeout(() => {
      setFetchingLocation(false);
    }, 1500);
  };

  const error = () => {
    setFetchingLocation(false);
    setLocationErrorMsg("Unable to retrieve your location");
  };

  const handleTrackLocation = () => {
    setFetchingLocation(true);
    if (!navigator.geolocation) {
      setLocationErrorMsg("Your browser does not support geolocation");
      setFetchingLocation(false);
      return;
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return {
    latLong,
    locationErrorMsg,
    handleTrackLocation,
    fetchingLocation,
  };
};

export default useTrackLocation;
