import React, { Component } from 'react';

// Component imports
import DriverFields from './DriverFields';

// Material UI imports
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

export default class SelectRole extends Component {

    state = {
        role: "passenger"
    };

    handleChange = (event) => {
        this.setState({ role: event.target.value });
    };


    render() {
        return (
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-10 mx-auto text-center form p-4">
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
                                {this.state.role === 'driver' && 
                                    <form style={{ margin: '30px' }} noValidate autoComplete="off">
                                        <DriverFields fields={this.state.driverFields} />
                                    </form>
                                }
                        </div>
                    </Paper>
                </div>
            </div>
        );
    }
}