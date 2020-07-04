import React from 'react';
import './Sidebar.css';
import FullHeight from "react-full-height";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faCalendarDay, faUserFriends, faFileAlt, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <div>
            <FullHeight className="section-styles sidebar">
                    <Link to="/dashboard" style={{ textDecoration: "none" }} className="sideBarLink">
                        <FontAwesomeIcon className="icon" icon={faTh} />
                        <p>Dashboard</p>
                    </Link>
                    <Link to="/doctorsZone" style={{ textDecoration: "none" }} className="sideBarLink">
                        <FontAwesomeIcon className="icon" icon={faCalendarDay} />
                        <p>Appointment</p>
                    </Link>
                    <Link to="/patients" style={{ textDecoration: "none" }} className="sideBarLink">
                        <FontAwesomeIcon className="icon" icon={faUserFriends} />
                        <p>Patients</p>
                    </Link>
                    <Link to="/prescription" style={{ textDecoration: "none" }} className="sideBarLink">
                        <FontAwesomeIcon className="icon" icon={faFileAlt} />
                        <p>Prescription</p>
                    </Link>
                    <Link to="/settings" style={{ textDecoration: "none" }} className="sideBarLink">
                        <FontAwesomeIcon className="icon" icon={faCog} />
                        <p>Settings</p>
                    </Link>
                    <Link to="" style={{ textDecoration: "none" }} className="sideBarLink">
                        <FontAwesomeIcon className="icon" icon={faSignOutAlt} />
                        <p>Log Out</p>
                    </Link>
            </FullHeight>
        </div>
    );
};

export default Sidebar;