import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

const mapKey =  process.env.REACT_APP_GOOGLE_API_KEY;
export class MapContainer extends Component {
constructor(props) {
    super(props);
    this.state = {};
}

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 34.058782,
         lng: -118.444139
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: mapKey
})(MapContainer);