import React from 'react';
import { GoogleMap, LoadScript, Marker,  } from '@react-google-maps/api';

const containerStyle = {
  display: 'flex',
  height: '400px',
  width: '60%',
};
const markers = [
  { position: { lat:  51.54168143783231, lng: -0.36028963040250267 } }, // Example marker 1
  //{/* position: { lat: 34.0522, lng: -118.2437 } */}, // Example marker 2
];


const center  = {
  lat: 51.54168143783231, 
  lng: -0.36028963040250267,
};

const ContactMap = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBnHHLHNP1WkP3YsYScgTHGNFkD6EVYXMg">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        {markers.map((marker, index) => (
          <Marker key={index} position={marker.position} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};


export default ContactMap;