import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const positions = [
  { coords: [3.8480, 11.5021], name: "Yaoundé City Center" },
  { coords: [3.8666, 11.5174], name: "Basilique Marie-Reine-des-Apôtres" },
  { coords: [3.8622, 11.5214], name: "National Museum of Yaoundé" },
  { coords: [3.8447, 11.5022], name: "Yaoundé Central Market" },
];

const Map = () => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <MapContainer 
        center={[3.8480, 11.5021]} 
        zoom={13} 
        scrollWheelZoom={false} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {positions.map((position, index) => (
          <Marker key={index} position={position.coords}>
            <Popup>
              {position.name}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;