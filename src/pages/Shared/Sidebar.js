import React, { Component, Fragment } from 'react';
import ModalAllDrivers from './../Passenger/components/ModalAllDrivers';
import DriverButtons from './DriverButtons';
import './sidebarStyle.css';
import { days } from './../../enums';

export default class Sidebar extends Component {

    state = {
        openModal: false,
        openModalChangeDay: false
    }

    openModal = () => {
        this.setState({ openModal: true });
    }

    closeModal = () => {
        this.setState({ openModal: false });
    }

    openModalDay = () => {
        this.setState({ openModalChangeDay: true });
    }

    closeModalDay = () => {
        this.setState({ openModalChangeDay: false });
    }

    render() {
        return (
            <nav className="navbarSMC">
                <ul className="navbarSMC-nav">
                    <li className="logoSMC">
                        <a className="navSMC-link">
                            <span className="linkSMC-text logoSMC-text">SMC</span>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fad"
                                data-icon="angle-double-right"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x">
                                <g className="fa-group">
                                    <path
                                        fill="currentColor"
                                        d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                                        className="fa-secondary"
                                    ></path>
                                    <path
                                        fill="currentColor"
                                        d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                                        className="fa-primary"
                                    ></path>
                                </g>
                            </svg>
                        </a>
                    </li>

                    {this.props.role === 'passenger' && 
                        <Fragment>
                            <ModalAllDrivers 
                                open={this.state.openModal}
                                closeModal={this.closeModal}
                                />
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
                                    <span className="linkSMC-text">All Spots</span>
                                </a>
                            </li>

                            <li className="navSMC-item" onClick={this.openModal}>
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
                                                d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"
                                                className="fa-secondary"
                                            ></path>
                                        </g>
                                    </svg>
                                    <span className="linkSMC-text">My drivers</span>
                                </a>
                            </li>
                        </Fragment>
                    }

                    {this.props.role === 'driver' && 
                        <DriverButtons 
                            // Variables about day
                            changeDay={this.props.changeDaySelected}
                            daySelected={this.props.daySelected}

                            // Modal Change Day
                            openModalDay={this.openModalDay}
                            closeModalDay={this.closeModalDay}
                            openModalDayState={this.state.openModalChangeDay}
                        />
                    }

                    <li className="navSMC-item">
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
                                        d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                                        className="fa-secondary"
                                    ></path>
                                </g>
                            </svg>
                            <span className="linkSMC-text">Profile</span>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}