import React, { Component } from 'react';
import Sidebar from '../Shared/Sidebar';
import MapDriver from './components/MapDriver';
import './driverStyle.css';
import { getSpotsByDriverId } from './../../graphql/QueriesFunctions';

export default class HomeDriver extends Component {

  state = {
    selectedDay: 0,
    spots: []
  }

  constructor(props) {
    super(props);
    this.getSpots(localStorage.getItem('id'), 0);
  }

  async getSpots(id, day) {
    const spots = await getSpotsByDriverId(id, day);
    console.log(spots);
    this.setState({ spots: spots });
  }

  setSpotToLocations = (newLocation) => {
    console.log(newLocation);
    this.setState(prevState => ({spots: [...prevState.spots, newLocation] }));
  }

  changeDaySelected = (value) => {
    this.setState({ selectedDay: value });
    this.getSpots(localStorage.getItem('id'), value);
  }

  render() {
    return (
      <div>
        <Sidebar role={'driver'} daySelected={this.state.selectedDay} changeDaySelected={this.changeDaySelected} />
        <main>
          <div className="row flex-grow-1" style={{ zIndex: -1 }}>
            <div className="col-12 generalMap">
                <div className="card shadow h-100" style={{ position: 'static' }}>
                    <MapDriver locations={this.state.spots} 
                                center={{ lat: -24.9923319, lng: 135.2252427 }} 
                                sendLatLng={this.setLatLng} 
                                selectedDay={this.state.selectedDay} 
                                addSpotToMap={this.setSpotToLocations} />
                </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

}