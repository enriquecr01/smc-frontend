import React, { Component } from 'react';

import { days } from './../../../enums';

// Material UI components
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

// Assets 
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import AirlineSeatReclineNormalIcon from '@material-ui/icons/AirlineSeatReclineNormal';
import TodayIcon from '@material-ui/icons/Today';

export default class ModalSpot extends Component {
    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.closeModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth={"sm"}>
                <DialogTitle id="alert-dialog-title">{"Information about this spot"}</DialogTitle>
                <DialogContent>
                    <div className="row">
                        <div className="col-md-4">
                            {/* <img src="https://s3-media0.fl.yelpcdn.com/bphoto/sHsUVypA7pDePqaxgrhDMQ/ls.jpg" style={{ width: "100%" }} />
                            { this.props.spotInfo.driver.name } { this.props.spotInfo.driver.lastnames } <br />
                            Driver */}
                            <div className="containerImage">
                                <div className="circle">
                                    <img src="https://i.pinimg.com/originals/e2/b8/2a/e2b82aded815e80351b929a77519adaa.jpg" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="p-20 informationSpot" style={{ fontSize: '20px' }}>
                                Driver: <label className="labelField"> { this.props.spotInfo.driver.name } { this.props.spotInfo.driver.lastnames } </label> 
                            </div>
                            <hr />
                            <div className="p-20 informationSpot">
                                <QueryBuilderIcon />  Hour: <label className="labelField"> { this.props.spotInfo.hour }  </label> 
                                <br />
                                <MonetizationOnIcon />  Price: <label className="labelField"> { this.props.spotInfo.price } </label> 
                                <br />
                                <AirlineSeatReclineNormalIcon />  Available Space: <label className="labelField"> { this.props.spotInfo.availableSpace } </label>
                                <br />
                                <TodayIcon />  Day: <label className="labelField"> { days[this.props.spotInfo.day] } </label>
                            </div>

                        </div>
                    </div>
                    <DialogContentText id="alert-dialog-description">
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button variant="contained" color="primary">
                    Request This Spot
                </Button>
                    <Button onClick={this.props.closeModal}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}