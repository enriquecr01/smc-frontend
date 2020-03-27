import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { client } from './../../apolloClient';
import './styleLogin.css';

// Material core imports
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';

// Assets imports (images, icons)
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import SchoolIcon from '@material-ui/icons/School';
import Logo from './../../assets/images/logo.jpg';

import { LOGIN } from './../../graphql/Mutations';

import DialogLoginError from './Components/DialogLoginError';


class Login extends Component {

    state = {
        enrollNumber: '',
        password: '',
        errors: '',
        modalErrorOpen: false
    };

    login = async () => {
        try {
            const response = await client.mutate({
              variables: {  
                enrollNumber: this.state.enrollNumber,
                password: this.state.password },
              mutation: LOGIN
            });

            const { errors, token, success, isDriver, user } = response.data.login;
            if (!success) {
                this.setState({ errors: errors, modalErrorOpen: true });
            } else {
                localStorage.setItem('token', token);
                localStorage.setItem('id', user._id);
                localStorage.setItem('name', user.name);
                localStorage.setItem('lastnames', user.lastnames);
                localStorage.setItem('universityId', user.university._id);
                localStorage.setItem('universityName', user.university.name);
                localStorage.setItem('city', user.city);
                localStorage.setItem('photo', user.photo);
                localStorage.setItem('raiting', user.raiting);
                localStorage.setItem('enrollNumber', user.enrollNumber);


                isDriver ? this.props.history.push("/driver/spots") : this.props.history.push("/passenger/allspots");
            }
          } catch(err){
            //   console.log(err);
          }
    }

    closeModalError = () => {
        this.setState({ modalErrorOpen: false });
    }

    handleInput = (e) => {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
    } 

    render() {

        document.body.style.overflow = "hidden";
    
      return (
        <div id="cover" className="min-vh-100">
            <DialogLoginError error={this.state.errors} open={this.state.modalErrorOpen} closeModal={this.closeModalError} />
            <div id="cover-caption">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                            <div className="px-2">
                                <Paper elevation={10} style={{padding: '50px', opacity: 0.9}} >
                                    <div style={{ textAlign: 'center' }}>
                                        <img src={Logo} alt="smc"></img>
                                        <br />
                                        <Typography variant="h6"> Sign in to SMC</Typography>
                                        <br />
                                        <TextField
                                            value={this.state.enrollNumber} 
                                            onChange={this.handleInput}
                                            name="enrollNumber"
                                            label="Enroll Number"
                                            InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SchoolIcon />
                                                </InputAdornment>),
                                            }}/>
                                        <br />
                                        <br />
                                        {/* Password Import */}
                                        <TextField
                                            value={this.state.password} 
                                            onChange={this.handleInput}
                                            type="password"
                                            name="password"
                                            label="Password"
                                            InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <VpnKeyIcon />
                                                </InputAdornment>),
                                            }}/>
    
                                        <br />
                                        <br />
    
                                        <Button variant="contained" color="primary" onClick={this.login}>
                                            <Typography variant="h6"> Login </Typography>
                                        </Button>
    
                                        <br />
                                        <br />
    
                                        <Link to="/register">
                                            <Button href="#" color="primary"> Don't have an account? Register Now! </Button>
                                        </Link>
                                    </div>
                                </Paper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>      
        </div>
      );
    }

}

export default Login;