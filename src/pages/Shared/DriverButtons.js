import React, { Component, Fragment } from 'react';
import ChangeDayModal from './ChangeDayModal';
import ModalAllPassenger from './ModalAllPassengers';
import { days } from './../../enums';

export default class DriverButtons extends Component {

    state = {
        openPassenger: false
    }

    openModalPassenger = () => {
        this.setState({ openPassenger: true });
    }

    closeModalPassenger = () => {
        this.setState({ openPassenger: false });
    }
    

    render() {
        return (
            <Fragment>
                <ChangeDayModal 
                    open={this.props.openModalDayState} 
                    closeModal={this.props.closeModalDay} 
                    daySelected={this.props.daySelected}
                    changeDay={this.props.changeDay}
                />

                <ModalAllPassenger 
                    open={this.state.openPassenger} 
                    closeModal={this.closeModalPassenger} />
                <li className="navSMC-item">
                    <a className="navSMC-link">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fad"
                            data-icon="cat"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="svg-inline--fa fa-map-marker-alt fa-w-16 fa-9x">
                            <g className="fa-group">
                                <path
                                    fill="currentColor"
                                    d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                                    className="fa-secondary"
                                ></path>
                            </g>
                        </svg>
                        <span className="linkSMC-text">Your Spots</span>
                    </a>
                </li>

                <li className="navSMC-item" onClick={this.openModalPassenger}>
                    <a className="navSMC-link">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fad"
                            data-icon="alien-monster"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 576 512"
                            className="svg-inline--fa fa-alien-monster fa-w-18 fa-9x">
                            <g className="fa-group">
                                <path
                                    fill="currentColor"
                                    d="M192 256c61.9 0 112-50.1 112-112S253.9 32 192 32 80 82.1 80 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C51.6 288 0 339.6 0 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zM480 256c53 0 96-43 96-96s-43-96-96-96-96 43-96 96 43 96 96 96zm48 32h-3.8c-13.9 4.8-28.6 8-44.2 8s-30.3-3.2-44.2-8H432c-20.4 0-39.2 5.9-55.7 15.4 24.4 26.3 39.7 61.2 39.7 99.8v38.4c0 2.2-.5 4.3-.6 6.4H592c26.5 0 48-21.5 48-48 0-61.9-50.1-112-112-112z"
                                    className="fa-secondary"
                                ></path>
                            </g>
                        </svg>
                        <span className="linkSMC-text">Your passengers</span>
                    </a>
                </li>

                <li className="navSMC-item" onClick={this.props.openModalDay}>
                    <a className="navSMC-link">
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fad"
                            data-icon="cat"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="svg-inline--fa fa-map-marker-alt fa-w-16 fa-9x">
                            <g className="fa-group">
                                <path
                                    fill="currentColor"
                                    d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-96zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"
                                    className="fa-secondary"
                                ></path>
                            </g>
                        </svg>
                        <span className="linkSMC-text">Change Day: {days[this.props.daySelected]}</span>
                    </a>
                </li>
            </Fragment>
        );
    }
}