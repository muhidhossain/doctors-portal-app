import React from 'react';
import './Dashboard.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { TableBody, TableContainer, Table, TableHead, TableRow, TableCell, makeStyles, Paper, Select, MenuItem } from '@material-ui/core';
import FullHeight from "react-full-height";

const useStyles = makeStyles({
    table: {
        maxWidth: 1300,
    },
});

const Dashboard = () => {
    const [appointment, setAppointment] = useState([]);
    const [action1, setAction1] = useState(null);
    const [key, setKey] = useState(null)
    const classes = useStyles();
    const pendingAppointment = appointment.filter(pa => pa.action1 === "pending");
    const todaysDate = new Date();
    const day = todaysDate.getDate();
    const month = todaysDate.getMonth();
    const year = todaysDate.getFullYear();
    const fullTodaysDate = month + 1 + "/" + day + "/" + year;
    const selectedDateAppointment = appointment.filter(appointment => appointment.details.date === fullTodaysDate);

    const handleChange = (event) => {
        let action1 = event.target.value;
        const actions = { action1: action1, key };
        fetch("https://guarded-anchorage-08361.herokuapp.com/modifyAction1ByKey", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(actions)
        })
            .then(response => response.json())
            .then(data => {
                setAction1(data)
                console.log(data);
            })
    }

    useEffect(() => {
        fetch("https://guarded-anchorage-08361.herokuapp.com/appointment")
            .then(res => res.json())
            .then(data => {
                const fetchedData = data.reverse()
                setAppointment(fetchedData);
            });
    }, [action1]);

    return (
        <div className="dashboard">
            <Sidebar></Sidebar>
            {
                appointment[0] ?
                    <FullHeight>
                        <div className="dashboardTable">
                            <h4>Dashboard</h4>
                            <div className="dashboardHeading">
                                <div style={{ backgroundColor: "tomato" }}>
                                    <h1>{pendingAppointment.length}</h1>
                                    <p>
                                        Pending
                                    <br />
                                    Appointments
                                </p>
                                </div>
                                <div style={{ backgroundColor: "deepskyblue" }}>
                                    <h1>{selectedDateAppointment.length}</h1>
                                    <p>
                                        Today's
                                    <br />
                                    Appointments
                                </p>
                                </div>
                                <div style={{ backgroundColor: "mediumseagreen" }}>
                                    <h1>{appointment.length}</h1>
                                    <p>
                                        Total
                                    <br />
                                    Appointments
                                </p>
                                </div>
                                <div style={{ backgroundColor: "orange" }}>
                                    <h1>{appointment.length}</h1>
                                    <p>
                                        Total
                                    <br />
                                    Patients
                                </p>
                                </div>
                            </div>
                            <div className="dashboardTableDetails">
                                <div>
                                    <p>Recent Appointments</p>
                                    <TableContainer component={Paper}>
                                        <Table className={classes.table} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="left">Sr. No</TableCell>
                                                    <TableCell align="center">Date</TableCell>
                                                    <TableCell align="center">Time</TableCell>
                                                    <TableCell align="left">Name</TableCell>
                                                    <TableCell align="center">Contact</TableCell>
                                                    <TableCell align="center">Prescription</TableCell>
                                                    <TableCell align="center">Action</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {
                                                    appointment.map((appoint) => (
                                                        <TableRow key={appoint._id}>
                                                            <TableCell align="left">{appointment.indexOf(appoint) + 1}</TableCell>
                                                            <TableCell align="center">{appoint.details.date}</TableCell>
                                                            <TableCell align="center">{appoint.details.time}</TableCell>
                                                            <TableCell align="left">{appoint.details.name}</TableCell>
                                                            <TableCell align="center">{appoint.details.phoneNumber}</TableCell>
                                                            <TableCell align="center">Not Added</TableCell>
                                                            <TableCell onMouseOver={() => setKey(appoint.key)} align="center">
                                                                <Select
                                                                    style={{ color: "white" }}
                                                                    className="actionSelect"
                                                                    value={appoint.action1}
                                                                    onChange={handleChange}
                                                                >
                                                                    <MenuItem value={"pending"}>Pending</MenuItem>
                                                                    <MenuItem value={"approved"}>Approved</MenuItem>
                                                                </Select>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </div>
                        </div>
                    </FullHeight> :
                    <FullHeight>
                        <div style={{ margin: "350px 550px", display: "flex" }}>
                            <div className="spinner-grow text-info" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="spinner-grow text-success" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </FullHeight>
            }
        </div>
    );
};

export default Dashboard;