import React from "react";
import GoogleMapReact from 'google-map-react';
import { toNumber } from '../utils/helpers';
const Map = (props) => {
  const { 
    position,
    businessName,
    address,
    mapUrl,
    directions,
    largerMap,
    mapsApiKey,
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
        fontWeight: '600',
        fontSize: '1rem',
        fontFamily: `'Montserrat', sans-serif`,
      },
      map,
      title: businessName
    });
    let contentString = `<div class="placeDiv">
      <div class="placecard__container">
        <div class="placecard__left">
          <p class="placecard__business-name">${businessName}</p>
          <p class="placecard__info">${address}</p>
          <a 
            class="placecard__view-large" 
            target="_blank" 
            rel="noopener noreferrer" 
            href=${mapUrl} 
          >
            ${largerMap}
          </a>
        </div> 
        <div class="placecard__right">
          <a 
            class="placecard__direction-link" 
            target="_blank" 
            rel="noopener noreferrer" 
            href=${"https://www.google.com/maps/dir//"+businessName+",%20"+address.replace(/\s/g, '%20')}
          >
            <div class="placecard__direction-icon"></div>
            ${directions}
          </a>
        </div> 
      </div>
    </div>`
    let infowindow = new maps.InfoWindow({
      content: contentString
    });
    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
  }
  const getMapOptions = (maps) => {
    return {
      zoomControl: false,
      mapTypeControl: false,
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
      <GoogleMapReact
        bootstrapURLKeys={{ key: mapsApiKey }}
        defaultCenter={cords}
        defaultZoom={toNumber(zoom)}
        onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
        options={getMapOptions}
        yesIWantToUseGoogleMapApiInternals
      >   
      </GoogleMapReact>
    </>)
}
export default Map