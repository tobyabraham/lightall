import React from 'react';
import GoogleMapReact from 'google-map-react';

function Googlemap() {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };
  return (
    <div style={{ height: '100%', width: '100%'}}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3"}}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
        >
            <Googlemap
                lat={59.955413}
                lng={30.337844}
        />
        </GoogleMapReact>
    </div>
  )
}

export default Googlemap