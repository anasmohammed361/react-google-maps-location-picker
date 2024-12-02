import React from "react";
import GmapsLocationPicker from "./gmaps-location-picker";

export default function App() {
  const [place, setPlace] =
    React.useState<google.maps.places.PlaceResult | null>(null);
  return (
    <div>
      <GmapsLocationPicker
        apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
        place={place}
        setPlace={setPlace}
        mapClassName="w-full h-96"
      />
    </div>
  );
}
