import React, { Component } from 'react';
import Map from './components/Map';
import Sidebar from './../Shared/Sidebar';
import './passengerStyle.css';
import { getAllSpots } from './../../graphql/QueriesFunctions';

export default class HomePassenger extends Component {

  state = {
    spots: []
  };

  constructor(props) {
    super(props);

    this.getSpots();
  }

  async getSpots() {
    const spots = await getAllSpots();
    this.setState({ spots: spots });
    return spots;    
  }


  render() {
    return (
      <div>
        <Sidebar role={'passenger'} />
        <main>
          <div className="row flex-grow-1" style={{ zIndex: -1 }}>
            <div className="col-12 generalMap">
                <div className="card shadow h-100" style={{ position: 'static' }}>
                    <Map locations={this.state.spots} center={{ lat: -24.9923319, lng: 135.2252427 }} sendLatLng={this.setLatLng} />
                </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

}
