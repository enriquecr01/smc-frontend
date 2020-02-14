import React from 'react';
import Map from './components/Map';
import './driverStyle.css';
// import credentials from './../../credentials';

// Material UI components imports
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// import TextField from '@material-ui/core/TextField';


// Import assets (images, icons)
import Logo from './../../assets/images/logo.jpg';
import GroupIcon from '@material-ui/icons/Group';
import RoomIcon from '@material-ui/icons/Room';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import TimeInput from 'material-ui-time-picker'


const data = [
    {
      name: "Sydney",
      title: "Sydney",
      lat: -33.847927,
      lng: 150.6517938,
      id: 1312321132
    },
    {
      name: "Melbourne",
      title: "Melbourne",
      lat: -37.9722342,
      lng: 144.7729561,
      id: 321131233
    },
    {
      name: "Perth",
      title: "Perth",
      lat: -31.9546904,
      lng: 115.8350292,
      id: 1212312231231213
    }
  ];

  const drawerWidth = 240;

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));


export default function HomePassenger(props) {
    
    const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
        {/* <div className={classes.toolbar} /> */}
        <div style={{height: "100px"}}>
            <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${ Logo })`,
                    backgroundSize: 'cover', width: "100%", height: "100%"}}></div>
        </div>
        <Divider />
        <List>
            <ListItem button key={'View Your Spots'}>
                <ListItemIcon> <RoomIcon /> </ListItemIcon>
                <ListItemText primary={'View Your Spots'} /> 
            </ListItem>
            <ListItem button key={'View Your Passengers'}>
                <ListItemIcon> <GroupIcon /> </ListItemIcon>
                <ListItemText primary={'View Your Passengers'} /> 
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button key={''}> 
                Aqui deberian aparecer todos los pasajeros del conductor y los podra filtrar por dia
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button key={'Profile'}>
                <ListItemIcon> <PersonIcon /> </ListItemIcon>
                <ListItemText primary={'Profile'} /> 
            </ListItem>
            <ListItem button key={'Logout'}>
                <ListItemIcon> <ExitToAppIcon /> </ListItemIcon>
                <ListItemText primary={'Logout'} /> 
            </ListItem>
        </List>
    </div>
  );
  
        return (
            <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                  View All Spots
                </Typography>
              </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
              <Hidden smUp implementation="css">
                <Drawer
                  container={container}
                  variant="temporary"
                  anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                >
                  {drawer}
                </Drawer>
              </Hidden>
              <Hidden xsDown implementation="css">
                <Drawer
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  variant="permanent"
                  open
                >
                  {drawer}
                </Drawer>
              </Hidden>
            </nav>
            <main className={classes.content}>
              <Map locations={data} center={{ lat: -24.9923319, lng: 135.2252427 }} />
            </main>
          </div>
                    
        );
}
