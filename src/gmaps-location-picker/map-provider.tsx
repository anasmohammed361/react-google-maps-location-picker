import { useMap } from "@vis.gl/react-google-maps";
import React, { useEffect } from "react";

interface Props {
  place: google.maps.places.PlaceResult | null;
}

const MapHandler = ({ place }: Props) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !place) return;
    console.log(
      place.geometry?.location?.lat(),
      place.geometry?.location?.lng()
    );

    if (place.geometry?.viewport) {
      map.fitBounds(place.geometry?.viewport);
    }
  }, [map, place]);

  return null;
};

export default React.memo(MapHandler);
