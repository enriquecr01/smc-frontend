import React, { Component } from 'react';
import { client } from './../../../apolloClient';


// Component imports
import DriverFields from './DriverFields';
import Map from './Map';
import ErrorRegisterModal from './ErrorRegisterModal';

// Material UI imports
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { gql } from 'apollo-boost';

export default class SelectRole extends Component {

    STUDENT_MUTATION = gql`
       mutation createStudent(
                            $enrollNumber: String!,
                            $name: String!,
                            $lastnames: String!, 
                            $university: ID!,
                            $city: String!,
                            $password: String!,
                            $phone: String!,
                            $latitude: Float!,
                            $longitude: Float!) {
            createStudent(input: {
                enrollNumber: $enrollNumber,
                name: $name,
                lastnames: $lastnames, 
                university: $university,
                city: $city,
                password: $password,
                phone: $phone,
                latitude: $latitude,
                longitude: $longitude}) 
            {
                _id
                name
                car {
                    _id
                    year
                    spaceInCar
                    status
                    plates
                }
                raiting
                photo
            }
        }`;



    state = {
        role: "passenger",
        driverStep: 0,
        driverFields: {},
        openModalError: false,
        lat: 0,
        lng: 0,
    };

    registerStudent = async () => {
        try {
            const response = await client.mutate({
              variables: {  
                enrollNumber: this.props.student.enrollNumber,
                name: this.props.student.name,
                lastnames: this.props.student.lastnames, 
                university: "5e3351b53f11b348885f12c7",
                city: "Tijuana",
                password: "123456",
                phone: "664-987-1235",
                latitude: this.state.lat,
                longitude: this.state.lng},
              mutation: this.STUDENT_MUTATION
            });
            console.log(response);
          } catch(err){
            console.log("oops! algo salio mal registrando este estudiante")
          }
    }

    setDriverFields = (fields) => {
        this.setState({driverFields: fields, driverStep: 1});
    }

    setLatLng = (lat, lng) => {
        this.setState({lat: lat, lng: lng});
    }

    handleChange = (event) => {
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
                <ErrorRegisterModal />
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
                                {this.state.role === 'passenger' && 
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
                                            {/* <Mutation mutation={this.STUDENT_MUTATION} variables={ this.state.studentInput }>
                                                {studentMutation => 
                                                    <Button variant="contained" className="fullWidth" color="primary" onClick={studentMutation}>
                                                        <Typography variant="h6"> Finish! </Typography>
                                                    </Button>
                                                }
                                            </Mutation> */}
                                            <Button variant="contained" className="fullWidth" color="primary" onClick={this.registerStudent}>
                                                <Typography variant="h6"> Finish! </Typography>
                                            </Button>
                                        </div>  
                                    </div>
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
                                            <Button variant="contained" className="fullWidth" color="primary" onClick={this.saveFields}>
                                                <Typography variant="h6"> Finish! </Typography>
                                            </Button>
                                        </div>  
                                    </div>
                                }
                        </div>
                    </Paper>
                </div>
            </div>
        );
    }
}