import React from 'react'
import {    
  withScriptjs,
  withGoogleMap,
  GoogleMap as ReactGoogleMap,
  Marker,
} from 'react-google-maps'

export const GoogleMapComponent = withScriptjs(withGoogleMap((props) =>     
  <ReactGoogleMap 
      defaultZoom={16}
      defaultCenter={{lat: 21.282221, lng: -157.813006}}
  >        
  { props.isMarkerShown && 
      <Marker position={{ lat: 21.282221, lng: -157.813006 }} />            
  }        
  </ReactGoogleMap>    
))