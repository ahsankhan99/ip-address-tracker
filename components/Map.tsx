import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import React from 'react'

const Map = () => {
    return (
        <MapContainer center={[33.68, 73.04]} zoom={12} scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[33.68, 73.04]} draggable={true}>
                <Popup>Hey ! I live here</Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map