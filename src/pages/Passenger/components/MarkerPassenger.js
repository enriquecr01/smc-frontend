import React, { Component, Fragment } from "react";
import { Marker } from "google-maps-react";
import ModalSpot from "./ModalSpot";
import './../passengerStyle.css';

class MarkerPassenger extends Component 
{
    state = {
        openModal: false
    }

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
                <ModalSpot 
                    open={this.state.openModal}
                    closeModal={this.closeModal}
                    spotInfo={this.props.spot}
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


export default MarkerPassenger;