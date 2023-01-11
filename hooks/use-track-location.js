import React, { useState } from "react";

const useTrackLoaction = () => {
  const [locationErrorMsg, setLocationErrorMsg] = useState("");
  const [latLong, setLatLong] = useState("");
  // crete success and error methods
  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLatLong(`${latitude},${longitude}`);
    setLocationErrorMsg("");
  };

  const error = () => {
    setLocationErrorMsg("Unable to set location");
  };

  const handleTrackLocation = (location) => {
    if (!navigator.geolocation) {
      setLocationErrorMsg("Geolocation is not available for this browser !");
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };
  return {
    locationErrorMsg,
    latLong,
    handleTrackLocation,
  };
};

export default useTrackLoaction;
