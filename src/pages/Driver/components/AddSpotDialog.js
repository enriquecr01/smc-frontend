import React, { Component } from 'react';
import { days } from './../../../enums';

// Material UI components
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import { TimePicker } from '@material-ui/pickers';

import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

import { createSpot } from './../../../graphql/MutationFunctions';


export default class AddSpotDialog extends Component {

    state = {
        hour: new Date(),
        price: 0
    }

    handleHour = (e) => {
        this.setState({
            hour: e
        });
    }

    handlePrice = (e) => {
        const { value, name } = e.target;

        // Regex to accept only numbers
        const re = /^[0-9\b]+$/;
    
        if (value === '' || re.test(value)) {
           this.setState({[name]: value})
        }
    }

    addSpot = async() => {

        const l = new Date(this.state.hour);

        let hour = '';

        l.getHours() < 10 ? hour += '0' + l.getHours() : hour += l.getHours();
        
        l.getMinutes() < 10 ? hour += ':' +  0 + l.getMinutes() : hour += ':' + l.getMinutes();

        const spot = {
            driver: localStorage.getItem('id'),
            hour: hour,
            price: parseFloat(this.state.price),
            day: this.props.selectedDay,
            latitude: this.props.latitude,
            longitude: this.props.longitude,
        };

        const response = await createSpot(spot);
        
        this.props.addSpotToMap(response);

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
            <DialogTitle id="alert-dialog-title">{"Information about this spot"}</DialogTitle>
            <DialogContent>
                <div className="row">
                <div className="col-md-12">
                    Adding spot to day: <strong> { days[this.props.selectedDay] } </strong>
                </div>
                    <div className="col-md-12 col-lg-6">
                        <TimePicker
                            ampm={false}
                            margin="normal"
                            id="time-picker"
                            label="Hour"
                            name="hour"
                            className="marginTextField fullWidth"
                            value={this.state.hour}
                            onChange={this.handleHour}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <QueryBuilderIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <TextField
                            value={this.state.price}
                            onChange={this.handlePrice}
                            margin="normal"
                            type="number"
                            name="price"
                            label="Price"
                            className="marginTextField fullWidth"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <MonetizationOnIcon />
                                </InputAdornment>
                            ),
                            }}/>
                    </div>
                </div>
                <DialogContentText id="alert-dialog-description">
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={this.addSpot}>
                    Add Spot
                </Button>
                <Button onClick={this.props.closeModal}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
        );
    }
}