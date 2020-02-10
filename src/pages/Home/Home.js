import React from 'react';

// Material UI Imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';

// Components Import
import Slideshow from './components/Slideshow';
import back1 from './images/presentation.jpg';
import back2 from './images/back2.jpg';
import back3 from './images/back3.jpg';
import WhatIs from './components/SectionWhatIs';
import './homeStyle.css';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const s = {
    container: "screenW screenH dGray col",
    main: "flex8 white"
};

const slides = [{image: back1, title: 'Travel With Your Schoolmates', description: 'Carpooling for university students', buttonText: ''},
                {image: back2, title: 'Join as a driver', description: 'Be the host of many adventures', buttonText: 'Register now!'},
                {image: back3, title: 'Join as a passenger', description: 'Be the perfect mate', buttonText: 'Register now!'}];

export default function HomePage(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">What the fuck is SMC?</Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
      
      <div className={s.container}>
            <div className={s.main}>
                <Slideshow slides={slides} />
            </div>
        </div>

      <Container>
        <WhatIs />
      </Container>
    </React.Fragment>
  );
}