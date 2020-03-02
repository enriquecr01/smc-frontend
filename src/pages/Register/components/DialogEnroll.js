import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class DialogEnroll extends Component {

    render() {
        return (
            <Dialog
                open={this.props.openModal}
                onClose={this.props.closeModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                <DialogTitle id="alert-dialog-title">
                    {this.props.student.err === true && "Sorry we didn't find you" }
                    {this.props.student.err === undefined && "Your enroll number is applicable to register to SMC" } 
                </DialogTitle> 
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {this.props.student.err === undefined && this.props.student.err !== true && 
                        <label> 
                            Are you {this.props.student.name} From {this.props.student.university}? 
                        </label>                       
                    }
                    {this.props.student.err === true && 
                        <label> 
                            Sorry, your enroll number does not valid. 
                            Your enroll number doesn't not appears on none of the universities that we support.
                        </label>
                    }
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                {this.props.student.err === undefined && 
                    <div>
                        <Button onClick={this.props.closeModal} color="primary">No</Button>
                        <Button onClick={this.props.stepTwo} color="primary">Yes</Button>
                    </div>
                }
                
                {this.props.student.err === true && 
                    <Button onClick={this.props.closeModal} color="primary" autoFocus>Close</Button>
                }
                </DialogActions>
            </Dialog>
        );
    }

}