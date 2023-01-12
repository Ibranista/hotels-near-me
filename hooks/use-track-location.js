import React, { useState } from "react";

const useTrackLocation = () => {
  const [locationErrorMsg, setLocationErrorMsg] = useState("");
  const [latLong, setLatLong] = useState("");
  const [isFindingLocation, setFindingLocation] = useState("");
  // crete success and error methods
  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setLatLong(`${latitude},${longitude}`);
    setLocationErrorMsg("");
    setFindingLocation(false);
  };

  const error = () => {
    setFindingLocation(false);
    setLocationErrorMsg(
      "you've blocked geolocation from accessing your location or  it's unable to retrieve it!"
    );
  };

  const handleTrackLocation = () => {
    setFindingLocation(true);
    if (!navigator.geolocation) {
      setFindingLocation(false);
      setLocationErrorMsg("Geolocation is not available for this browser !");
      return;
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };
  return {
    locationErrorMsg,
    latLong,
    handleTrackLocation,
    setFindingLocation,
    isFindingLocation
  };
};

export default useTrackLocation;
