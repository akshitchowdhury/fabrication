import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapLeaflet.css'; // Create a separate CSS file for styling
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const MapLeaflet = () => {
  const [position, setPosition] = useState([12.8985, 77.6058]); // Default position
  const [userLocation, setUserLocation] = useState(null);

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
    <div className="w-full h-screen flex justify-end"> {/* Tailwind CSS responsive container */}
      <div className="custom-map-container lg:w-3/4 p-4 lg:h-3/4 rounded-lg shadow-md bg-white">  {/* Custom width and height */}
        <MapContainer
          center={position}
          zoom={13}
          className="w-full h-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {userLocation && (
            <Marker position={userLocation}>
              <Popup>Your Location</Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapLeaflet;
