import React from "react";
import GoogleMapReact from 'google-map-react';
const Map = (props) => {
  const { 
    position,
    businessName,
    contactAddress,
    contactUrl,
    directions,
    largerMap,
    apiKey,
    zoom
  } = props;
  const cords = {lat: position.latitude, lng: position.longitude};
  const renderMarkers = (map, maps) => {
    let marker = new maps.Marker({
      position: cords,
      icon: {
        url: 'https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2_hdpi.png',
        labelOrigin: new maps.Point(65, 20),
        scaledSize: new maps.Size(27, 43),
      },
      label: {
        text: businessName,
        fontWeight: '500',
        fontSize: '1rem',
        fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
      },
      map,
      title: businessName
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
    <>
      <div className="placeDiv">
        <div className="placecard__container">
          <div className="placecard__left">
            <p className="placecard__business-name">{businessName}</p>
            <p className="placecard__info">{contactAddress}</p>
            <a 
              className="placecard__view-large" 
              target="_blank" 
              rel="noopener noreferrer" 
              href={contactUrl} 
            >
              {largerMap}
            </a>
          </div> 
          <div className="placecard__right">
            <a 
              className="placecard__direction-link" 
              target="_blank" 
              rel="noopener noreferrer" 
              href={`https://www.google.com/maps/dir//${businessName},+${contactAddress.replace(/\s/g, '+')}`}
            >
              <div className="placecard__direction-icon"></div>
              {directions}
            </a>
          </div> 
        </div>
      </div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={cords}
        defaultZoom={zoom}
        onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
        options={getMapOptions}
      >   
      </GoogleMapReact>
    </>)
}
export default Map