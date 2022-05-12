import * as React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import './Maps.css'

const containerStyle = {
    width: '400px',
    height: '400px'
};
  
const center = {
    lat: -3.745,
    lng: -38.523
};

const mapOptions = {
    disableDefaultUI: true,
    // panControl: true,
    // zoomControl: true,
    // mapTypeControl: true,
    // scaleControl: true,
    // streetViewControl: true,
    // overviewMapControl: true,
    // rotateControl: true
}

function MapComponent() {
    console.log(process.env.REACT_APP_MAPS_API_KEY)
    const { isLoaded } = useJsApiLoader({
      id: 'google-map-script',
      googleMapsApiKey: String(process.env.REACT_APP_MAPS_API_KEY)
    })
  
    const [map, setMap] = React.useState(null)
  
    const onLoad = React.useCallback(function callback(map: any) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
      setMap(map)
    }, [])
  
    const onUnmount = React.useCallback(function callback(map: any) {
      setMap(null)
    }, [])
  
    return isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
          clickableIcons={false}
          options={mapOptions}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
    ) : <></>
  }

  export default React.memo(MapComponent)