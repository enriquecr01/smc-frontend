import React, { Component } from 'react';
import './registerStyle.css';



// Material core imports
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Assets imports (images, icons)
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import SchoolIcon from '@material-ui/icons/School';
import Logo from './../../assets/images/logo.jpg';

class Register extends Component {

    render() {
        return (
            <Grid container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh'}}>
                <span className="circle"></span>
                <span className="arrow-right"></span>
                <span className="parallelogram"></span>
                <span className="trapezoid"></span>
            <Grid item xs={12}>
                <Paper elevation={10} style={{padding: '100px', opacity: 0.9}} >
                    <img src={Logo} alt="smc"></img>
                    <br />
                    <Typography variant="h6"> Register to SMC </Typography>
                    <br />
                    {/* Input Import */}
                        <Grid container spacing={1} alignItems="flex-end">
                            <Grid item>
                                <SchoolIcon />
                            </Grid>
                            <Grid item>
                                <TextField id="standard-basic" label="Enroll Number" />
                            </Grid>
                        </Grid>

                    <br />

                    <Button variant="contained" color="primary">
                        <Typography variant="h6"> Verify! </Typography>
                    </Button>

                    <br />
                    <Button>
                        Why I need to ingress my enroll number?
                    </Button>
                    <br />

                    <Button href="#" color="primary">
                        Do you already have an account? Login Now!
                    </Button>

                </Paper>
                
            </Grid>
            </Grid>
        );
    }

}

export default Register;
