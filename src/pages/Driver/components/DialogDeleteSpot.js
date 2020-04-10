import React, { Component } from 'react';
import { days } from './../../../enums';

// Material UI components
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { deleteSpot } from './../../../graphql/MutationFunctions';

export default class DialogDeleteSpot extends Component {

    deleteSpot = async() => {
        await deleteSpot(this.props.id);
        this.props.removeSpot(this.props.index);
        this.props.closeModal(true);
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
            <DialogTitle id="alert-dialog-title">{"Delete Spot?"}</DialogTitle>
            <DialogContent>
                <div className="row">
                    <div className="col-md-12">
                        <h5 style={{fontStyle: 'italic'}}>Are you sure to delete this spot?</h5>
                    </div>
                </div>
                <DialogContentText id="alert-dialog-description">
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" onClick={this.deleteSpot} style={{ backgroundColor: "#d50000", color: "#ffffff" }}>
                    Sure, Delete This Spot!
                </Button>
                <Button onClick={this.props.closeModal}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
        );
    }

}