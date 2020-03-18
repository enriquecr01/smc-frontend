import React, { Component } from 'react';

// Component imports
import DriverFields from './DriverFields';
import Map from './Map';
import ErrorRegisterModal from './ErrorRegisterModal';
import PasswordFields from './PasswordFields';

// Material UI imports
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { registerCar, registerStudent, registerStudentWithCar } from './../../../graphql/MutationFunctions';

export default class SelectRole extends Component {

    state = {
        role: "passenger",
        driverStep: 0,
        passengerStep: 0,
        driverFields: {},
        openModalError: false,
        lat: 0,
        lng: 0,
        password: '',
        idCar: ''
    };

    changeToPassword = () => {
        if (this.state.role === 'passenger') {
            this.setState({passengerStep: 1});
        } else {
            this.setState({driverStep: 2});
        }
    }

    getPassword = (password) => {
        this.setState({ password });
        this.registerProcess();
    }

    registerProcess = async () => {
        const student = {
            enrollNumber: this.props.student.enrollNumber,
            name: this.props.student.name,
            lastnames: this.props.student.lastnames, 
            university: this.props.student.university,
            city: this.props.student.city,
            password: this.state.password,
            phone: this.props.student.phone,
            latitude: parseFloat(this.state.lat),
            longitude: parseFloat(this.state.lng),
        };
        if (this.state.role === 'driver') {
            const car = await registerCar(this.state.driverFields);
            if (car !== 'error') {
                const studentResponse = await registerStudentWithCar(student, car._id);
                if (studentResponse === 'error') {
                    this.openModalError();
                } else {
                    this.props.redirect(this.props.student.enrollNumber, this.state.password);
                }
            } else {
                this.openModalError();
            }
        } else {
            const studentResponse = await registerStudent(student);
            if (studentResponse === 'error') {
                this.openModalError();
            } else {
                this.props.redirect(this.props.student.enrollNumber, this.state.password);
            }
        }
    }

    setDriverFields = (fields) => {
        this.setState({driverFields: fields, driverStep: 1});
    }

    setLatLng = (lat, lng) => {
        this.setState({lat: lat, lng: lng});
    }

    handleChange = (event) => {
        if (event.target.value === 'passenger') {
            this.setState({ driverFields: {} });
        }
        this.setState({ role: event.target.value });
    };

    openModalError = () => {
        this.setState({ openModalError: true });
    }

    closeModalError = () => {
        this.setState({ openModalError: false });
    }

    saveFields = () => {
        this.props.finishRegister();
    };

    render() {
        return (
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-10 mx-auto text-center form p-4">
                <ErrorRegisterModal openModal={this.state.openModalError} closeModal={this.closeModalError} />
                <div className="px-2">
                    <Paper elevation={10} style={{padding: '50px', opacity: 0.9}} >
                        <div style={{ textAlign: 'center' }}>
                            <FormLabel component="legend">Select your role in the application</FormLabel>
                                <RadioGroup value={this.state.role} onChange={this.handleChange} row style={{ display: 'inline-block' }}>
                                    <FormControlLabel
                                        value="passenger"
                                        control={<Radio color="primary" />}
                                        label="I'm Passenger"
                                        labelPlacement="end" />
                                    <FormControlLabel
                                        value="driver"
                                        control={<Radio color="primary" />}
                                        label="I'm Driver"
                                        labelPlacement="end" />
                                </RadioGroup>
                                <br />
                                {this.state.role === 'passenger' && this.state.passengerStep === 0 &&
                                    <div className="row py-3 flex-grow-1">
                                        <div className="col-12" style={{ height: '400px' }}>
                                            <h5>We need to know, where do you live.</h5>
                                            <div className="card shadow h-100">
                                                <Map locations={[]} center={{ lat: -24.9923319, lng: 135.2252427 }} sendLatLng={this.setLatLng} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <br />
                                            <br />
                                            <Button variant="contained" className="fullWidth" color="primary" onClick={this.changeToPassword}>
                                                <Typography variant="h6"> SAVE! </Typography>
                                            </Button>
                                        </div>  
                                    </div>
                                }


                                {this.state.role === 'passenger' && this.state.passengerStep === 1 && 
                                    <PasswordFields sendPassword={this.getPassword} />
                                }



                                {this.state.role === 'driver' && this.state.driverStep === 0 && 
                                    <form style={{ margin: '30px' }} noValidate autoComplete="off">
                                        <DriverFields fields={this.state.driverFields} addDriverFields={this.setDriverFields} />
                                    </form>
                                }
                                {this.state.role === 'driver' && this.state.driverStep === 1 && 
                                    <div className="row py-3 flex-grow-1">
                                        <div className="col-12" style={{ height: '400px' }}>
                                            <h5>We need to know, where do you live.</h5>
                                            <div className="card shadow h-100">
                                                <Map locations={[]} center={{ lat: -24.9923319, lng: 135.2252427 }} sendLatLng={this.setLatLng} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <br />
                                            <br />
                                            <Button variant="contained" className="fullWidth" color="primary" onClick={this.changeToPassword}>
                                                <Typography variant="h6"> Finish! </Typography>
                                            </Button>
                                        </div>  
                                    </div>
                                }

                                {this.state.role === 'driver' && this.state.driverStep === 2 && 
                                    <PasswordFields sendPassword={this.getPassword} />
                                }
                        </div>
                    </Paper>
                </div>
            </div>
        );
    }
}