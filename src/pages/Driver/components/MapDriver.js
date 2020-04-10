import React, { Component, Fragment } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import AddSpotDialog from './AddSpotDialog';
import MarkerDriver from './MarkerDriver';
import './../driverStyle.css';

const MarkersList = props => {
    const { locations, modifySpot, removeSpot, ...markerProps } = props;

    return (
      <span>
        {locations.map((location, i) => {
          return (
            <MarkerDriver 
                key={location._id}
                spot={location}
                index={i}
                removeSpot={removeSpot}
                modifySpot={modifySpot}
                {...markerProps}
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
          zoom={13}
          initialCenter={this.props.center}
          onClick={this.handleMapClick}
          style={{height: '100%'}}
          >
            <MarkersList 
                          locations={this.props.locations} 
                          removeSpot={this.props.removeSpot} 
                          modifySpot={this.props.modifySpot}
                          icon="https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png" />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ""
})(MapDriver);
