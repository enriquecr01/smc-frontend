import React, { Component } from 'react';

// Material UI components
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { days } from './../../enums';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default class ChangeDayModal extends Component {

    changeDay = () => {
        this.props.changeDay(this.state.day);
      };

    handleChange = (event) => {
        // this.setState({ day: event.target.value });
        this.props.changeDay(event.target.value);

      };

    render() {
        return (
                <Dialog
                    open={this.props.open}
                    onClose={this.props.closeModal}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    fullWidth={true}
                    maxWidth={"sm"}>
                    <DialogTitle id="alert-dialog-title">{"Change Day of Spots"}</DialogTitle>
                    <DialogContent>
                        <div className="row">
                            <div className="col-md-12">
                                <FormControl className="fullWidth">
                                <InputLabel id="select-day">Day</InputLabel>
                                    <Select
                                    labelId="select-day"
                                    id="demo-customized-select"
                                    value={this.props.daySelected}
                                    onChange={this.handleChange}
                                    >
                                        <MenuItem value={0}> { days[0] } </MenuItem>
                                        <MenuItem value={1}> { days[1] } </MenuItem>
                                        <MenuItem value={2}> { days[2] } </MenuItem>
                                        <MenuItem value={3}> { days[3] } </MenuItem>
                                        <MenuItem value={4}> { days[4] } </MenuItem>
                                        <MenuItem value={5}> { days[5] } </MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
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