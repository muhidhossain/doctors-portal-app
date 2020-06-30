import React from 'react';
import FullHeight from "react-full-height";
import './Dashboard.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faCalendarDay, faUserFriends, faFileAlt, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <FullHeight className="section-styles zoneSideBar">
                <Link to="/dashboard" style={{ textDecoration: "none" }} className="sideBarLink">
                    <FontAwesomeIcon className="icon" icon={faTh} />
                    <p>Dashboard</p>
                </Link>
                <Link to="/doctorsZone" style={{ textDecoration: "none" }} className="sideBarLink">
                    <FontAwesomeIcon className="icon" icon={faCalendarDay} />
                    <p>Appointment</p>
                </Link>
                <Link style={{ textDecoration: "none" }} className="sideBarLink">
                    <FontAwesomeIcon className="icon" icon={faUserFriends} />
                    <p>Patients</p>
                </Link>
                <Link style={{ textDecoration: "none" }} className="sideBarLink">
                    <FontAwesomeIcon className="icon" icon={faFileAlt} />
                    <p>Prescription</p>
                </Link>
                <Link style={{ textDecoration: "none" }} className="sideBarLink">
                    <FontAwesomeIcon className="icon" icon={faCog} />
                    <p>Settings</p>
                </Link>
                <Link style={{ textDecoration: "none" }} className="sideBarLink">
                    <FontAwesomeIcon className="icon" icon={faSignOutAlt} />
                    <p>Log Out</p>
                </Link>
            </FullHeight>
        </div>
    );
};

export default Dashboard;