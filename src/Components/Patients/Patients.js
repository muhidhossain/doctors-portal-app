import React from 'react';
import './Patients.css';
import Sidebar from '../Sidebar/Sidebar';
import { TableContainer, Paper, Table, makeStyles, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { useEffect } from 'react';
import { useState } from 'react';
import FullHeight from "react-full-height";

const useStyle = makeStyles({
    table: {
        maxWidth: 1100,
    }
});

const Patients = () => {
    const classes = useStyle();
    const [appointment, setAppointment] = useState([]);

    useEffect(() => {
        fetch("https://guarded-anchorage-08361.herokuapp.com/appointment")
            .then(res => res.json())
            .then(data => {
                const fetchedData = data.reverse();
                setAppointment(fetchedData);
            });
    }, []);

    return (
        <div className="patients">
            <Sidebar></Sidebar>
            {
                appointment[0] ?
                    <FullHeight>
                        <div className="patientsTable">
                            <h4>Patients</h4>
                            <div className="patientsTableDetails">
                                <p>All Patients</p>
                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="left">Sr. No</TableCell>
                                                <TableCell align="left">Name</TableCell>
                                                <TableCell align="left">Gender</TableCell>
                                                <TableCell align="left">Age</TableCell>
                                                <TableCell align="left">Weight</TableCell>
                                                <TableCell align="left">Contact</TableCell>
                                                <TableCell align="left">Address</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                appointment.map((appoint) => (
                                                    <TableRow key={appoint._id}>
                                                        <TableCell align="left">{appointment.indexOf(appoint) + 1}</TableCell>
                                                        <TableCell align="left">{appoint.details.name}</TableCell>
                                                        <TableCell align="left">Male</TableCell>
                                                        <TableCell align="left">25</TableCell>
                                                        <TableCell align="left">70</TableCell>
                                                        <TableCell align="left">{appoint.details.phoneNumber}</TableCell>
                                                        <TableCell align="left">College Avenue, Barisal</TableCell>
                                                    </TableRow>
                                                ))
                                            }
                                        </TableBody>
                                    </Table>
                                </TableContainer>
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

export default Patients;