import React, { Component } from 'react';
import './../registerStyle.css';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Contacts from '@material-ui/icons/Contacts';
import ExposureZero from '@material-ui/icons/ExposureZero';
import DirectionsCar from '@material-ui/icons/DirectionsCar';



export default class DriverFields extends Component {

    state = {
        brand: '',
        model: '',
        license: '',
        color: '',
        year: '',
        spaceInCar: '',
        plates: ''
    }

    handleInput = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    } 

    saveFields = () => {
        let fields = {
            brand: this.state.brand,
            model: this.state.model,
            license: this.state.license,
            color: this.state.color,
            year: this.state.year,
            spaceInCar: this.state.spaceInCar,
            plates: this.state.plates
        };

        this.props.addDriverFields(fields);
    }

    handleInputNumber = (e) => {
        const { value, name } = e.target;

        const re = /^[0-9\b]+$/;
        if (value === '' || re.test(e.target.value)) {
            if (value < 6) {
                this.setState({ [name]: value });
            }
        }
    }

    render() {
        return (
                <div className="row">
                    <div className="col-md-12">
                        <h4 style={{ textAlign: "center" }}>We need information about your car</h4>
                        <br />
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <TextField
                        value={this.state.brand}
                        onChange={this.handleInput}
                        name="brand"
                        label="Brand"
                        className="marginTextField fullWidth"
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <DirectionsCar />
                            </InputAdornment>
                        ),
                        }}/>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <TextField
                            value={this.state.model}
                            onChange={this.handleInput}
                            name="model"
                            label="Model"
                            className="marginTextField fullWidth"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <DirectionsCar />
                                </InputAdornment>
                            ),
                            }}
                        />
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <TextField
                            value={this.state.license}
                            onChange={this.handleInput}
                            name="license"
                            label="License"
                            className="marginTextField fullWidth"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Contacts />
                                </InputAdornment>
                            ),
                            }}
                        />
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <TextField
                            value={this.state.color}
                            onChange={this.handleInput}
                            name="color"
                            label="Color"
                            className="marginTextField fullWidth"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <DirectionsCar />
                                </InputAdornment>
                            ),
                            }}
                        />
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <TextField
                            value={this.state.year}
                            onChange={this.handleInputNumber}
                            name="year"
                            label="Year"
                            className="marginTextField fullWidth"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <ExposureZero />
                                </InputAdornment>
                            ),
                            }}
                        />
                    </div>
                    <div className="col-md-12 col-lg-6">
                      <TextField
                        value={this.state.spaceInCar}
                        onChange={this.handleInputNumber}
                        name="spaceInCar"
                        label="Space In Car"
                        className="marginTextField fullWidth"
                        InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <DirectionsCar />
                            </InputAdornment>
                        ),
                        }} />
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <TextField
                            value={this.state.plates}
                            onChange={this.handleInput}
                            name="plates"
                            label="Plates"
                            className="marginTextField fullWidth"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <DirectionsCar />
                                </InputAdornment>
                            ),
                            }}
                        />
                    </div>
                    <div className="col-md-12 col-lg-6"></div>
                    <br />
                    <br />
                    <br />
                    <div className="col-md-12">
                        <Button variant="contained" className="fullWidth" color="primary" onClick={this.saveFields}>
                            <Typography variant="h6"> Save! </Typography>
                        </Button>
                    </div>
                </div>



        );
    }

}