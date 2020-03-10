import React, { Component } from 'react';
import './registerStyle.css';
import { Link } from 'react-router-dom';

// Material core imports
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';

// Assets imports (images, icons)
import SchoolIcon from '@material-ui/icons/School';
import Logo from './../../assets/images/logo.jpg';

// Component Imports
import DialogEnroll from './components/DialogEnroll';
import WhyEnrollNumber from './components/WhyEnrollNumber';
import SelectRole from './components/SelectRole';

class Register extends Component {

    state = {
        enrollNumber: '',
        student: { 'err': false },
        openWhyEnrollNumberDialog: false,
        openModalFound: false,
        role: "passenger",
        driverFields: {},
        step: 0
    };

    verifyEnrollNumber = () => {
        fetch(`http://enriquechavezr.com/proyectos/generalapis/testapis/students.php?enrollNumber=${this.state.enrollNumber}`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({ student: result, openModalFound: true});
            }
        )
    }

    openModalEnrollNumber = () => {
        this.setState({ openWhyEnrollNumberDialog: true })
    };
    
    closeModalEnrollNumber = () => {
        this.setState({ openWhyEnrollNumberDialog: false })
    };

    closeModalFound = () => {
        this.setState({ openModalFound: false })
    };

    changeEnrollNumber = (e) => { 
        let code = e.keyCode || e.which;
        if (code === 13) {
            this.verifyEnrollNumber();
        }
    }

    handleInput = (e) => {
        const { value, name } = e.target;;
        this.setState({
            [name]: value
        });
    } 
    
    changeToStepTwo = () => {
        this.setState({ step: 1, openModalFound: false })
    }

    render() {
        // document.body.style.overflow = "hidden";

        return (

            <div id="cover" className="min-vh-100">
                <WhyEnrollNumber
                    openModal={this.state.openWhyEnrollNumberDialog} 
                    closeModal={this.closeModalEnrollNumber} />
                <DialogEnroll 
                        student={this.state.student} 
                        openModal={this.state.openModalFound} 
                        closeModal={this.closeModalFound}
                        stepTwo={this.changeToStepTwo} />
                <div id="cover-caption">
                    <div className="container">
                        <div className="row">
                            {this.state.step === 0 && 
                                <div className="col-xl-5 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4">
                                    <div className="px-2">
                                        <Paper elevation={10} style={{padding: '50px', opacity: 0.9}} >
                                            <div style={{ textAlign: 'center' }}>
                                                <img src={Logo} alt="smc"></img>
                                                <Typography variant="h6"> Register to SMC </Typography>
                                                <br />
                                                <TextField
                                                    value={this.state.enrollNumber} 
                                                    onChange={this.handleInput}
                                                    onKeyUp={this.changeEnrollNumber}
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
                                                <Button variant="contained" color="primary" onClick={this.verifyEnrollNumber}>
                                                    <Typography variant="h6"> Verify! </Typography>
                                                </Button>

                                                <br />
                                                <Button onClick={this.openModalEnrollNumber}> Why I need to ingress my enroll number? </Button>
                                                <br />
                                                <Link to="/login">
                                                    <Button color="primary"> Do you already have an account? Login Now! </Button>
                                                </Link>
                                            </div>
                                        </Paper>
                                    </div>
                                </div>
                            }

                            {this.state.step === 1 && 
                                <SelectRole finishRegister={this.saveStudent} student={this.state.student} />
                            }

                        </div>
                    </div>
                </div>
            </div>

        );
    }

}

export default Register;
