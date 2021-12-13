import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


const Map = () => {

    const [state, setstate] = useState({
        longitude: 0,
        latitude: 0
    })

    useEffect(() => {
        handleUbicacion()
    }, [])
    const handleUbicacion = () => {
        navigator.geolocation.getCurrentPosition(
            function (position) {
                setstate({
                    longitude: position.coords.longitude,
                    latitude: position.coords.latitude
                })
            }
        )
    }
    return (
        <div>
            {/* <button onClick={handleUbicacion}> Update your location </button> */}

            <div id="mapContainer">
                <MapContainer center={[4.15, -74.883]} zoom={12} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[state.latitude, state.longitude]}>
                        <Popup>
                            Your location
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default Map;