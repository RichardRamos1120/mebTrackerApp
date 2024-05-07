"use client";

import React from "react";
import GoogleMapReact from 'google-map-react';

      lng: 15.8277
      export const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map({lat, lng, text}){
  const defaultProps = {
    center: {
      lat: lat,
      lng: lng
    },
    zoom: 6
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text={text}
        />
      </GoogleMapReact>
    </div>
  );
}