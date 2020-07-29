import React from 'react';
import './Prescription.css';
import Sidebar from '../Sidebar/Sidebar';
import { TableContainer, Paper, makeStyles, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { useState } from 'react';
import { useEffect } from 'react';
import FullHeight from "react-full-height";

const useStyle = makeStyles({
    table: {
        maxWidth: 1300,
    }
});

const Prescription = () => {
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
        <div className="prescription">
            <Sidebar></Sidebar>
            {
                appointment[0] ?
                    <FullHeight>
                        <div className="prescriptionTable">
                            <h4>Prescription</h4>
                            <div className="prescriptionTableDetails">
                                <p>All Prescription</p>
                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align="left">Sr. No</TableCell>
                                                <TableCell align="left">Date</TableCell>
                                                <TableCell align="left">Name</TableCell>
                                                <TableCell align="left">Contact</TableCell>
                                                <TableCell align="center">Prescription</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                appointment.map((appoint) => (
                                                    <TableRow key={appoint._id}>
                                                        <TableCell align="left">{appointment.indexOf(appoint) + 1}</TableCell>
                                                        <TableCell align="left">{appoint.details.date}</TableCell>
                                                        <TableCell align="left">{appoint.details.name}</TableCell>
                                                        <TableCell align="left">{appoint.details.phoneNumber}</TableCell>
                                                        <TableCell align="center">View</TableCell>
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

export default Prescription;