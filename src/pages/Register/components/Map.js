import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const MarkersList = props => {
    const { locations, ...markerProps } = props;

    return (
      <span>
        {locations.map((location, i) => {
            if (!location.lat || !location.lng) {
                location.lat = location.lat();
                location.lng = location.lng();
            }
          return (
            <Marker
                key={Math.floor(Math.random() * Math.floor(1000))}
                {...markerProps}
                position={{ lat: location.lat, lng: location.lng }}
            />
          );
        })}
      </span>
    );
  };


export class MapContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: props.locations
        };
    }

    handleMapClick = (ref, map, ev) => {
        const location = ev.latLng;

        map.panTo(ev.latLng);

        location.lat = location.lat();
        location.lng = location.lng();
        
        this.setState(prevState => ({
            locations: [location]
        }));

        this.props.sendLatLng(location.lat, location.lng);
        
    };

  render() {
    return (
      <div 
      style={{height: '100%'}}
      >
        <Map
          google={this.props.google}
          className={"map"}
          zoom={4}
          initialCenter={this.props.center}
          onClick={this.handleMapClick}
          style={{height: '100%'}}
          >
            <MarkersList locations={this.state.locations} icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ""
})(MapContainer);
