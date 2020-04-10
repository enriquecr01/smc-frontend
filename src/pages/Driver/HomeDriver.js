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

  modifySpot = (index, spotModified) => {
    let auxSpots = this.state.spots;
    auxSpots[index] = spotModified;
    this.setState({ spots: auxSpots });
  }

  removeSpot = (index) => {
    let auxSpots = this.state.spots;
    auxSpots.splice(index, 1);
    this.setState({ spots: auxSpots });
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
                                center={{ lat: 32.523453, lng: -117.011396 }} 
                                sendLatLng={this.setLatLng} 
                                selectedDay={this.state.selectedDay} 
                                addSpotToMap={this.setSpotToLocations}
                                modifySpot={this.modifySpot}
                                removeSpot={this.removeSpot} />
                </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

}