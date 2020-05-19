import React, { Component } from 'react';

// Material UI components
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { days } from './../../enums';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { getSpotsByDriverId } from './../../graphql/QueriesFunctions';

import PassengerProfile from './../Driver/components/PassengerProfile';

export default class ModalAllPassengers extends Component {

    state = {
        day: 0,
        passengers: []
    }

    constructor(props) {
        super(props);
        this.getPassengersByDay({target: {value: 0, name: 'day'}});
    }
    
    getPassengersByDay = async(e) => {
        const { value, name } = e.target;
        this.setState({ [name]: value });

        const response = await getSpotsByDriverId(localStorage.getItem('id'), value);

        const passengers = [];

        response.forEach((spot) => {
            const passengersOfSpot = spot.passengers;
            passengersOfSpot.forEach((passenger) => {
                passengers.push(passenger);
            });
        });

        console.log(passengers);
        this.setState({ passengers });
    }
    
    
    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.closeModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth={"sm"}>
                <DialogTitle id="alert-dialog-title">{"View all your passengers"}</DialogTitle>
                <DialogContent>
                    <div className="row">
                        <div className="col-md-12">
                            <FormControl className="fullWidth">
                            <InputLabel id="select-day">Day</InputLabel>
                                <Select
                                labelId="select-day"
                                id="demo-customized-select"
                                name="day"
                                value={this.state.day}
                                onChange={this.getPassengersByDay}
                                >
                                    <MenuItem value={0}> { days[0] } </MenuItem>
                                    <MenuItem value={1}> { days[1] } </MenuItem>
                                    <MenuItem value={2}> { days[2] } </MenuItem>
                                    <MenuItem value={3}> { days[3] } </MenuItem>
                                    <MenuItem value={4}> { days[4] } </MenuItem>
                                    <MenuItem value={5}> { days[5] } </MenuItem>
                                </Select>
                            </FormControl>
                            <hr />

                        </div>
                        <div className="col-md-12">
                            {this.state.passengers.length === 0 && 
                                <div className="noDrivers">
                                    You don't have passengers in this day
                                </div>
                            }
                            {this.state.passengers.map((passenger) => 
                                <PassengerProfile key={passenger._id} passenger={passenger} />
                            )}
                            
                        </div>
                    </div>
                    <DialogContentText id="alert-dialog-description">
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.closeModal}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}
