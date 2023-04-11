import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import React, { useEffect, useState } from 'react'

const Map = ({ info }: any) => {
    const [coord, setCoord] = useState({ lat: 33.68, lng: 73.04 });
    useEffect(() => {
        info && setCoord({ lat: info.location.lat, lng: info.location.lng });
    }, [info])

    return (
        <MapContainer center={[33.68, 73.04]} zoom={12} scrollWheelZoom={false}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[coord.lat, coord.lng]} draggable={true}>
                <Popup>Hey! I live here</Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map