import { Loader } from "@googlemaps/js-api-loader";

const API_KEY = process.env.API_KEY;

const loader = new Loader({
  apiKey: API_KEY,
  version: "weekly",
});

loader.load().then(async () => {
  const { Map } = (await google.maps.importLibrary(
    "maps"
  )) as google.maps.MapsLibrary;
  map = new Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -39.487, lng: 146.266 },
    zoom: 8,
  });
});
