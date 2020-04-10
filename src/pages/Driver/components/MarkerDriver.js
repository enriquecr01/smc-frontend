import React, { Component, Fragment } from "react";
import { Marker } from "google-maps-react";
import InfoSpot from './InfoSpot';

export default class MarkerDriver extends Component 
{

    constructor(props) {
        super(props);
        this.state = {
            openModal: false,
            spot: props.spot
        }
    }

  
    onMarkerClick = () => {
        this.setState({ openModal: true });
    };

    closeModal = () => {
        this.setState({ openModal: false });
    }
  
    render() {
        return (
            <Fragment>
                <InfoSpot 
                    open={this.state.openModal}
                    closeModal={this.closeModal}
                    spot={this.props.spot}
                    index={this.props.index}
                    modifySpot={this.props.modifySpot}
                    removeSpot={this.props.removeSpot}
                />

                <Marker
                    onClick={this.onMarkerClick}
                    position={{ lat: this.props.spot.latitude, lng: this.props.spot.longitude }}
                    {...this.props}
                />
            </Fragment>
        );
    }
  };
