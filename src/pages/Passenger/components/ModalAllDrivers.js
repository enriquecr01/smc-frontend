import React, { Component } from 'react';
import DriverProfile from './DriverProfile';
import { getDriversByStudentId } from './../../../graphql/QueriesFunctions';

import { days } from './../../../enums';

// Material UI components
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class ModalAllDrivers extends Component {

    state = {
        spots: []
    }

    constructor(props) {
        super(props);
        this.getDrivers();
    }

    async getDrivers() {
        const spots = await getDriversByStudentId(localStorage.getItem('id'));
        this.setState({ spots: spots });
        return spots;
    }

    existsDay(day) {
        let exists = false;
        for (var i = 0; i < this.state.spots.length; i++) {
            if (day === this.state.spots[i].day) {
                exists = i;
                break;
            }
          }
        return exists;
    }

    renderDays() {
        let daysRender = [];
        console.log(this.state.spots);
        for (let i = 0; i < 6; i++) {
            let day = [];
            let dayExists = this.existsDay(i);
            if (dayExists || dayExists === 0) {
                day.push(
                    <div className="col-md-12" key={i}>
                        <h4>{days[i]}</h4>
                        <hr />
                        <DriverProfile spot={this.state.spots[dayExists]} />
                    </div>);
            } else {
                day.push(
                    <div className="col-md-12" key={i}>
                        <h4>{days[i]}</h4>
                        <hr />
                        <div className="noDrivers">
                            You don't have drivers in this day
                        </div>
                    </div>);
            }
            daysRender.push(day);
        }
        return daysRender;
    }

    render() {
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.closeModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                fullWidth={true}
                maxWidth={"sm"}>
                <DialogTitle id="alert-dialog-title">View Your Drivers By Day</DialogTitle>
                <DialogContent>
                    <div className="row">
                        {this.renderDays()}
                    </div>
                    <DialogContentText id="alert-dialog-description">
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.closeModal}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}