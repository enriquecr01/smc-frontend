import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import VpnKey from '@material-ui/icons/VpnKey';

export default class PasswordFields extends Component {

    state = {
        password: '',
        confirmPassword: '',
        errorConfirm: false
    };

    handleInput = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });

        if (this.state.confirmPassword !== '') {
            if (value !== this.state.password) {
                this.setState({ errorConfirm: true });
            } else {
                this.setState({ errorConfirm: false });
            }
        }
    } 

    sendPassword = () => {
        if (this.state.password === this.state.confirmPassword) {
            this.props.sendPassword(this.state.password);
        }
    }

    render() {
        return (
            <div className="container">

                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <TextField
                            value={this.state.brand}
                            onChange={this.handleInput}
                            type="password"
                            name="password"
                            label="Password"
                            className="marginTextField fullWidth"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <VpnKey />
                                </InputAdornment>
                            ),
                        }}/>
                    </div>

                    <div className="col-md-12 col-lg-6">
                        <TextField
                            value={this.state.brand}
                            onChange={this.handleInput}
                            type="password"
                            name="confirmPassword"
                            label="Confirm Password"
                            className="marginTextField fullWidth"
                            error={this.state.errorConfirm}
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <VpnKey />
                                </InputAdornment>
                            ),
                        }}/>
                    </div>    

                    <br />
                    <br />
                    <br />

                    <Button variant="contained" className="fullWidth" color="primary" onClick={this.sendPassword}>
                        <Typography variant="h6"> FINISH! </Typography>
                    </Button>
                </div>
            </div>
        );
    }
}