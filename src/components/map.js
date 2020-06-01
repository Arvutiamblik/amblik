import React from "react";
import GoogleMapReact from 'google-map-react';
const Map = (props) => {
  const {position} = props;
  const cords = {lat: position.latitude, lng: position.longitude}
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: cords,
      icon: {
        url: 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png',
        labelOrigin: new maps.Point(65, 20),
        scaledSize: new maps.Size(27, 43),
      },
      label: {
        text: 'amblik.ee',
        fontWeight: '500',
        fontSize: '1rem',
        fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
      },
      map,
      title: 'amblik.ee'
    });
  }
  const getMapOptions = (maps) => {
    return {
      mapTypeControl: true,
      mapTypeId: maps.MapTypeId.ROADMAP,
      mapTypeControlOptions: {
          style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: maps.ControlPosition.BOTTOM_CENTER,
          mapTypeIds: [
            maps.MapTypeId.ROADMAP,
            maps.MapTypeId.SATELLITE,
          ]
      },
    };
  }
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: "AIzaSyBdvYjP3jXAgQjaKJ0vTPotBjKSrly8UXE"}}
      defaultCenter={cords}
      defaultZoom={13}
      onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
      options={getMapOptions}
    >
    </GoogleMapReact>)
}
export default Map