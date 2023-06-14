import React from 'react';
import { GoogleMap, LoadScript, Marker,  } from '@react-google-maps/api';

const containerStyle = {
    
    height: '400px',
    width: '60%',
};

const zIndex = {
  lat: 51.54168143783231, 
  lng: -0.36028963040250267,
};

const ContactMap = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyBnHHLHNP1WkP3YsYScgTHGNFkD6EVYXMg">
      <GoogleMap mapContainerStyle={containerStyle} center={zIndex} zoom={13}>
        <Marker position={zIndex} />
      </GoogleMap>
    </LoadScript>
  );
};


export default ContactMap;