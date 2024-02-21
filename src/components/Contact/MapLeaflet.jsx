import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapLeaflet.css'; // Create a separate CSS file for styling
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapLeaflet = () => {
const [position, setPosition] = useState([12.8899901, 77.5597094]); // Default position
const [userLocation, setUserLocation] = useState(null);

const latitude = 12 + (53 / 60) + (24.3 / 3600); // Corrected latitude calculation
const longitude = 77 + (33 / 60) + (42.8 / 3600);
const redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});


  useEffect(() => {
    // Get user's geolocation
    navigator.geolocation.getCurrentPosition(
      (geoLocation) => {
        const { latitude, longitude } = geoLocation.coords;
        setUserLocation({ lat: latitude, lng: longitude });
        setPosition([latitude, longitude]);
      },
      (error) => console.error('Error getting geolocation:', error),
      { enableHighAccuracy: true }
    );
  }, []);

  return (
    <div className="main-box  w-full lg:w-3/4 px-4 lg:p-6 lg:h-full rounded-lg shadow-2xl bg-white rounded-lg shadow-2xl bg-white">
  <div className="map-box w-full md:w-4/5 lg:w-3/4 xl:w-5/6 h-96">
    <MapContainer center={position} zoom={13} className="w-full h-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {userLocation && (
        <Marker position={userLocation} icon={redIcon}>
          <Popup>KK. Industries</Popup>
        </Marker>
      )}
    </MapContainer>
  </div>
</div>

  );
};

export default MapLeaflet;
