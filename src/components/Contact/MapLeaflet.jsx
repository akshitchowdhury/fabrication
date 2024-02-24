import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapLeaflet.css'; // Create a separate CSS file for styling
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// const MapLeaflet = () => {
// const [position, setPosition] = useState([12.8899901, 77.5597094]); // Default position
// const [userLocation, setUserLocation] = useState(null);

// const latitude = 12 + (53 / 60) + (24.3 / 3600); // Corrected latitude calculation
// const longitude = 77 + (33 / 60) + (42.8 / 3600);
// const redIcon = new L.Icon({
//   iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
// });


//   useEffect(() => {
//     // Get user's geolocation
//     navigator.geolocation.getCurrentPosition(
//       (geoLocation) => {
//         const { latitude, longitude } = geoLocation.coords;
//         setUserLocation({ lat: latitude, lng: longitude });
//         setPosition([latitude, longitude]);
//       },
//       (error) => console.error('Error getting geolocation:', error),
//       { enableHighAccuracy: true }
//     );
//   }, []);

//   return (
//     <div className="main-box  ">
//   <div className="map-box ">
//     <MapContainer center={position} zoom={13} className="w-full h-full">
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       {userLocation && (
//         <Marker position={userLocation} icon={redIcon}>
//           <Popup>KK. Industries</Popup>
//         </Marker>
//       )}
//     </MapContainer>
//   </div>
// </div>

//   );
// };



const MapLeaflet = () => {

  const fixedLocation = [12.972007138583947, 77.61923362320319]; // Fixed location coordinates
  const [userLocation, setUserLocation] = useState(null);

  const [position, setPosition] = useState([12.8899901, 77.5597094]); // Default position
  
  // const latitude = 12 + (53 / 60) + (24.3 / 3600); // Corrected latitude calculation
  // const longitude = 77 + (33 / 60) + (42.8 / 3600);
  const redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });
  const blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});
  
  
useEffect(() => {
  // Get user's geolocation
  navigator.geolocation.getCurrentPosition(
    (geoLocation) => {
      const { latitude, longitude } = geoLocation.coords;
      setUserLocation({ lat: latitude, lng: longitude }); 
    },
    (error) => console.error('Error getting geolocation:', error),
    { enableHighAccuracy: true }
  );
}, []); // Empty dependency array ensures this effect runs only once on component mount

const handleMarkerClick = () => {
  const [lat, lng] = fixedLocation;
  const description = "Description of the fixed location";

  // Open Google Maps URL in a new tab
  window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${description}`);
};


    return (
     
    <div className="map-box ">
      <MapContainer center={fixedLocation} // Set the center to the fixed location
      zoom={13} className="w-full h-full">
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={fixedLocation} icon={redIcon} eventHandlers={{ click: handleMarkerClick }}>
        <Popup>Fixed Location</Popup>
      </Marker>
      {userLocation && (
        <Marker position={userLocation} icon={blueIcon}>
          <Popup>User Location</Popup>
        </Marker>
        )}

          

      </MapContainer>
    </div>
  
  
    );
  };


export default MapLeaflet;
