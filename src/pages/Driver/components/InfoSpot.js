import React, { Component } from 'react';
import DialogDeleteSpot from './DialogDeleteSpot';
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

import { updateSpot } from './../../../graphql/MutationFunctions';

export default class InfoSpot extends Component {

    constructor(props) {
        super(props);
        const hour = parseInt(props.spot.hour.substring(0, 2));
        const minute = parseInt(props.spot.hour.substring(3, 5));
        this.state = {
            hour: new Date(2020, 4, 8, hour, minute),
            price: props.spot.price,
            openModalDelete: false
        }
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

    openModalDelete = () => {
        this.setState({ openModalDelete: true });
    }

    updateSpot = async() => {

        const l = new Date(this.state.hour);

        let hour = '';

        l.getHours() < 10 ? hour += '0' + l.getHours() : hour += l.getHours();
        
        l.getMinutes() < 10 ? hour += ':' +  0 + l.getMinutes() : hour += ':' + l.getMinutes();

        const spot = {
            driver: localStorage.getItem('id'),
            hour: hour,
            price: parseFloat(this.state.price),
            day: this.props.spot.day,
            latitude: this.props.spot.latitude,
            longitude: this.props.spot.longitude,
        };

        const response = await updateSpot(spot, this.props.spot._id);

        this.props.modifySpot(this.props.index, response);
        
        // this.props.addSpotToMap(response);
    }

    openModalDelete = () => {
        this.setState({ openModalDelete: true });
    }

    closeModalDelete = (deleted) => {
        if (deleted) {
            this.setState({ openModalDelete: false });
            this.props.closeModal();
        } else {
            this.setState({ openModalDelete: false });
        }
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
            <DialogDeleteSpot open={this.state.openModalDelete} removeSpot={this.props.removeSpot} index={this.props.index} closeModal={this.closeModalDelete} id={this.props.spot._id} />
            <DialogContent>
                <div className="row">
                    <div className="col-md-12">
                        Adding spot to day: <strong> { days[this.props.spot.day] } </strong>
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
                <Button variant="contained" onClick={this.openModalDelete} style={{ backgroundColor: "#d50000", color: "#ffffff" }}>
                    Delete Spot
                </Button>
                <Button variant="contained" color="primary" onClick={this.updateSpot}>
                    Modify Spot
                </Button>
                <Button onClick={this.props.closeModal}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
        );
    }

}