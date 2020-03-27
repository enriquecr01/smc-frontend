import React, { Component } from 'react';
import Sidebar from '../Shared/Sidebar';
import Map from './components/Map';
import './driverStyle.css';

export default class HomeDriver extends Component {

  render() {
    return (
      <div>
        <Sidebar role={'driver'} />
        <main>
          <div className="row flex-grow-1" style={{ zIndex: -1 }}>
            <div className="col-12 generalMap">
                <div className="card shadow h-100" style={{ position: 'static' }}>
                    <Map locations={[]} center={{ lat: -24.9923319, lng: 135.2252427 }} sendLatLng={this.setLatLng} />
                </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

}