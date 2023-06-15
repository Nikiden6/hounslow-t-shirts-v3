import React from 'react';
import { GoogleMap, LoadScript, Marker,  } from '@react-google-maps/api';

const ContactMap = () => {
  return (
    <iframe 
        width="600"
        height="450"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBnHHLHNP1WkP3YsYScgTHGNFkD6EVYXMg
            &q=Dunelm,%20Aladdin%20tower,%20Western%20Ave,%20Greenford%20UB6%208LZ">
        </iframe>
  );
};


export default ContactMap;