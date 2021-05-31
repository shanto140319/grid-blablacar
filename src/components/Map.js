import React from 'react';
//map
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '90vh',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Map = () => {
  return (
    <div>
      <LoadScript googleMapsApiKey='AIzaSyD8-ejwKybfth4uiaWz6QcjebKEU0Kw66E'>
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
