import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

// Assets 
import Grade from '@material-ui/icons/Grade';

export default class PassengerProfile extends Component {
    
    render() {
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
                        <label className="labelField"> {this.props.passenger.name} {this.props.passenger.lastnames}</label> 
                    </div>
                    <hr />
                    <div className="p-20 informationSpot">
                        <Grade />  Raiting: <label className="labelField"> {this.props.passenger.raiting} </label>
                        <br />
                        <Button color="primary" variant="contained" className="fullWidth">
                            See Spot
                        </Button>
                    </div>
                </div>
            </div> 
        );
    }
}