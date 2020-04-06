import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import AddSpotDialog from './AddSpotDialog';
import './../driverStyle.css';

const MarkersList = props => {
    const { locations, ...markerProps } = props;

    return (
      <span>
        {locations.map((location, i) => {
          return (
            <Marker
                key={i}
                {...markerProps}
                position={{ lat: location.latitude, lng: location.longitude }}
            />
          );
        })}
      </span>
    );
  };


export class MapDriver extends Component {

    constructor(props) {
        super(props);
        this.state = {
          modalAddSpot: false,
          selectedLatitude: 0,
          selectedLongitude: 0
        };
    }

    closeModal = () => {
      this.setState({ modalAddSpot: false });
    }

    addSpotToMap = (newSpot) => {
      this.props.addSpotToMap(newSpot);
    }

    handleMapClick = (ref, map, ev) => {
      
      const location = ev.latLng;

      map.panTo(location);

      this.setState({
                  modalAddSpot: true,
                  selectedLatitude: location.lat(),
                  selectedLongitude: location.lng() });
    };

  render() {
    return (
      <div style={{height: '100%'}}>
        <AddSpotDialog open={this.state.modalAddSpot} 
                      closeModal={this.closeModal} 
                      selectedDay={this.props.selectedDay}
                      latitude={this.state.selectedLatitude}
                      longitude={this.state.selectedLongitude}
                      addSpotToMap={this.addSpotToMap}
                      />
        <Map
          google={this.props.google}
          className={"map"}
          zoom={4}
          initialCenter={this.props.center}
          onClick={this.handleMapClick}
          style={{height: '100%'}}
          >
            <MarkersList locations={this.props.locations} icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ""
})(MapDriver);
