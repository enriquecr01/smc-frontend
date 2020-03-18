import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import MarkerPassenger from "./MarkerPassenger";
import './../passengerStyle.css';


const MarkersList = props => {
    const { locations, ...markerProps } = props;

    return (
      <span>
        {locations.map((location) => {
          return (
            <MarkerPassenger
                key={location._id}
                spot={location}
                {...markerProps} />
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

  render() {
    return (
      <div style={{height: '100%'}}>
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
