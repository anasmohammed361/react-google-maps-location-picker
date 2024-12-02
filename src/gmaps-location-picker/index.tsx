import {
  APIProvider,
  ControlPosition,
  Map,
  Marker,
} from "@vis.gl/react-google-maps";
import MapProvider from "./map-provider";
import { PlaceAutocompleteClassic } from "./autocomplete";

interface Props {
  apiKey: string;
  place: google.maps.places.PlaceResult | null;
  setPlace: (place: google.maps.places.PlaceResult | null) => void;
  mapClassName?: string;
  inputClassName?: string;
}
export default function GmapsLocationPicker({
  apiKey,
  place,
  setPlace,
  inputClassName,
  mapClassName,
}: Props) {
  return (
    <APIProvider apiKey={apiKey}>
      <Map
        className={mapClassName}
        defaultZoom={3}
        defaultCenter={{ lat: 0, lng: 0 }}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
      <PlaceAutocompleteClassic
        inputClassName={inputClassName}
        controlPosition={ControlPosition.TOP}
        onPlaceSelect={setPlace}
      />
      <Marker
        position={{
          lat: place?.geometry?.location?.lat() ?? 0,
          lng: place?.geometry?.location?.lng() ?? 0,
        }}
        clickable={false}
      />
      <MapProvider place={place} />
    </APIProvider>
  );
}
