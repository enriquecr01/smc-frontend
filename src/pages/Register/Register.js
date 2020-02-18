import React, { Component } from 'react';
import './registerStyle.css';
import { Link } from 'react-router-dom';

// Material core imports
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputAdornment from '@material-ui/core/InputAdornment';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

// Assets imports (images, icons)
import SchoolIcon from '@material-ui/icons/School';
import Logo from './../../assets/images/logo.jpg';

class Register extends Component {

    state = {
        enrollNumber: '',
        student: { 'err': false },
        open: false,
        openModalFound: false,
        role: "passenger",
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

    openModal = () => {
        this.setState({ open: true })
    };
    
    closeModal = () => {
        this.setState({ open: false })
    };

    closeModalFound = () => {
        this.setState({ openModalFound: false })
    };

    changeEnrollNumber = (e) => this.setState({
		enrollNumber: e.target.value
    })
    
    changeToStepTwo = () => {
        this.setState({ step: 1, openModalFound: false })
    }

    handleChange = (event) => {
        this.setState({ role: event.target.value });
    };
    

    render() {
        document.body.style.overflow = "hidden";

        return (
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh', padding: '100px', marginTop: '50px'}}>
                <span className="circle"></span>
                <span className="arrow-right"></span>
                <span className="parallelogram"></span>
                <span className="trapezoid"></span>
            <Grid item xs={12}>
            {this.state.step === 0 && 
                <Paper elevation={10} style={{padding: '50px', opacity: 0.9}} >
                    <div style={{ textAlign: 'center' }}>
                        <img src={Logo} alt="smc"></img>
                        <Typography variant="h6"> Register to SMC </Typography>
                        <br />
                        {/* Input Import */}
                        <TextField
                            value={this.state.enrollNumber} 
                            onChange={this.changeEnrollNumber}
                            label="Enroll Number"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <SchoolIcon />
                                </InputAdornment>
                            ),
                            }}
                        />
                        <br />
                        <br />
                        <Button variant="contained" color="primary" onClick={this.verifyEnrollNumber}>
                            <Typography variant="h6"> Verify! </Typography>
                        </Button>

                        <br />
                        <Button onClick={this.openModal}> Why I need to ingress my enroll number? </Button>
                        <br />
                        <Link to="/login">
                            <Button color="primary"> Do you already have an account? Login Now! </Button>
                        </Link>
                    </div>
                </Paper>
            }

            {this.state.step === 1 && 
                <Paper elevation={10} style={{padding: '50px', opacity: 0.9}} >
                    <div style={{ textAlign: 'center' }}>
                        <FormLabel component="legend">Select your role in the application</FormLabel>
                            <RadioGroup value={this.state.role} onChange={this.handleChange} row>
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

                                    <div>
                                        <TextField
                                            value={this.state.enrollNumber} 
                                            onChange={this.changeEnrollNumber}
                                            label="Brand"
                                            className="marginTextField"
                                            InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                <SchoolIcon />
                                                </InputAdornment>
                                            ),
                                            }}
                                        />
        
                                        <TextField
                                            value={this.state.enrollNumber} 
                                            onChange={this.changeEnrollNumber}
                                            label="Model"
                                            className="marginTextField"
                                            InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                <SchoolIcon />
                                                </InputAdornment>
                                            ),
                                            }}
                                        />
        
                                        <TextField
                                            value={this.state.enrollNumber} 
                                            onChange={this.changeEnrollNumber}
                                            label="License"
                                            className="marginTextField"
                                            InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                <SchoolIcon />
                                                </InputAdornment>
                                            ),
                                            }}
                                        />
        
                                        <TextField
                                            value={this.state.enrollNumber} 
                                            onChange={this.changeEnrollNumber}
                                            label="Color"
                                            className="marginTextField"
                                            InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                <SchoolIcon />
                                                </InputAdornment>
                                            ),
                                            }}
                                        />
        
                                        <TextField
                                            value={this.state.enrollNumber} 
                                            onChange={this.changeEnrollNumber}
                                            label="Year"
                                            className="marginTextField"
                                            InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                <SchoolIcon />
                                                </InputAdornment>
                                            ),
                                            }}
                                        />
                                        
                                        <TextField
                                            value={this.state.enrollNumber} 
                                            onChange={this.changeEnrollNumber}
                                            label="Space In Car"
                                            className="marginTextField"
                                            InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                <SchoolIcon />
                                                </InputAdornment>
                                            ),
                                            }}
                                        />
        
                                        <TextField
                                            value={this.state.enrollNumber} 
                                            onChange={this.changeEnrollNumber}
                                            label="Plates"
                                            className="marginTextField"
                                            InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                <SchoolIcon />
                                                </InputAdornment>
                                            ),
                                            }}
                                        />
                                        <p>We need more information</p>
                                    </div>
                                </form>
                            }
                    </div>
                </Paper>
            }
                
                <Dialog
                    open={this.state.openModalFound}
                    onClose={this.closeModalFound}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">
                        {this.state.student.err === true && "Sorry we didn't find you" }
                        {this.state.student.err === undefined && "Your enroll number is applicable to register to SMC" } 
                    </DialogTitle> 
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {this.state.student.err === undefined && this.state.student.err !== true && 
                            <div>
                                <br />
                                <Typography variant="h6"> 
                                    Are you {this.state.student.name} From {this.state.student.university}? </Typography>
                            </div>
                        }
                        {this.state.student.err === true && 
                            <Typography variant="h6"> 
                                Sorry, your enroll number does not valid. 
                                Your enroll number doesn't not appears on none of the universities that we support.
                            </Typography>
                        }
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    {this.state.student.err === undefined && 
                        <div>
                            <Button onClick={this.changeToStepTwo} color="primary">Yes</Button>
                            <Button onClick={this.closeModalFound} color="primary">No</Button>
                        </div>
                    }
                    
                    {this.state.student.err === true && 
                        <Button onClick={this.closeModalFound} color="primary" autoFocus>Close</Button>
                    }
                    </DialogActions>
                </Dialog>

                <Dialog
                    open={this.state.open}
                    onClose={this.closeModal}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                    <DialogTitle id="alert-dialog-title">{"Why I need to ingress my enroll number?"}</DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        In SMC we want that all our users are real students. With your enroll number we check if you exists
                        in the database of the universities that we support.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={this.closeModal} color="primary" autoFocus>
                        Close
                    </Button>
                    </DialogActions>
                </Dialog>
                
            </Grid>
            </Grid>
        );
    }

}

export default Register;
