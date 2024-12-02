import React from "react";
import GmapsLocationPicker from "./gmaps-location-picker";

export default function App() {
  const [place, setPlace] =
    React.useState<google.maps.places.PlaceResult | null>(null);
  return (
    <GmapsLocationPicker
      apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
      place={place}
      setPlace={setPlace}
      mapClassName="w-screen h-screen"
      inputClassName="mt-10 w-96 py-2 px-4 rounded"
    />
  );
}
