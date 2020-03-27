import React, { Component } from 'react';
import { days } from './../../../enums';


// Assets 
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import TodayIcon from '@material-ui/icons/Today';

export default class DriverProfile extends Component {
    
    render() {
        console.log(this.props.spot.driver.name);
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="containerImage">
                        <div className="circle">
                            <img src="https://i.pinimg.com/originals/e2/b8/2a/e2b82aded815e80351b929a77519adaa.jpg" alt="Name" />
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="p-20 informationSpot" style={{ fontSize: '20px' }}>
                        Driver: <label className="labelField"> {this.props.spot.driver.name} {this.props.spot.driver.lastnames}</label> 
                    </div>
                    <hr />
                    <div className="p-20 informationSpot">
                        <QueryBuilderIcon />  Hour: <label className="labelField"> {this.props.spot.hour} </label>
                        <br />
                        <MonetizationOnIcon />  Price: <label className="labelField"> {this.props.spot.price} </label>
                        <br />
                        <AirlineSeatReclineNormalIcon />  Available Space: <label className="labelField"> {this.props.spot.availableSpace} </label>
                        <br />
                        <TodayIcon />  Day: <label className="labelField"> {days[this.props.spot.day]} </label>
                    </div>
                </div>
            </div> 
        );
    }
}