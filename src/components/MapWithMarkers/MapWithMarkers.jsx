"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require("../../../public/leaflet/marker-icon-2x.png"),
//   iconUrl: require("../../../public/leaflet/marker-icon.png"),
//   shadowUrl: require("../../../public/leaflet/marker-shadow.png"),
// });
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});


const locations = [
  { id: 1, name: "Spa A", lat: 40.7128, lng: -74.006 },
  { id: 2, name: "Spa B", lat: 40.73061, lng: -73.935242 },
  { id: 3, name: "Spa C", lat: 40.758896, lng: -73.98513 },
];

export default function MapWithMarkers() {
  return (
    <div className="w-full h-screen rounded-lg overflow-hidden">
      <MapContainer
        center={[40.73061, -73.935242]}
        zoom={12}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://osm.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc) => (
          <Marker key={loc.id} position={[loc.lat, loc.lng]}>
            <Popup>
              <strong>{loc.name}</strong>
              <br />
              Click to book.
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
