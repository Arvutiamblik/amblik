import React from "react";
import GoogleMapReact from 'google-map-react';
const Map = (props) =>{
    const {position} = props;
    const cords = {lat: position.latitude, lng: position.longitude}
    const renderMarkers = (map, maps) => {
        let marker = new maps.Marker({
          position: cords,
          map,
          title: 'Hello World!'
        });
      }
      console.log(cords)
    return (
    <GoogleMapReact
    bootstrapURLKeys={{ key: "AIzaSyBdvYjP3jXAgQjaKJ0vTPotBjKSrly8UXE"}}
    defaultCenter={cords}
    defaultZoom={13}
    onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
  ></GoogleMapReact>)
}
export default Map