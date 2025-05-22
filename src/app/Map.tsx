'use client'
import React from 'react'
import L from 'leaflet';
import { Marker, Popup, MapContainer, TileLayer } from 'react-leaflet'
import { LatLngExpression, LatLngTuple } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import "leaflet/dist/leaflet.css"

const position: LatLngExpression = [51.505, -0.09];

const CustomIcon = L.icon({
  iconUrl: 'location.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
})

interface TypeLatLng {
  position: LatLngTuple;
  text?: string;
}

const Map = () => {
  const markers: TypeLatLng[] = [
    { position: [51.505, -0.901], text: 'Marker 1' },
    { position: [51.509, -0.902], text: 'Marker 1' },
    { position: [51.501, -0.903], text: 'Marker 1' },
    { position: [51.505, -0.9], text: 'Marker 1' },
    { position: [51.515, -0.12], text: 'Marker 2' },
    { position: [51.513, -0.03], text: 'Marker 3' },
    { position: [51.511, -0.07], text: 'Marker 4' },
    { position: [51.51, -0.1], text: 'Marker 5' },
  ];
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MarkerClusterGroup>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.position}
            icon={CustomIcon}
          >
            <Popup>
              <span>new version</span>
              Marker {index + 1}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  )
}

export default Map
