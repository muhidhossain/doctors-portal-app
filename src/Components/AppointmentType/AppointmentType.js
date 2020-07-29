import React from 'react';
import './AppointmentType.css'
import { Card } from 'react-bootstrap';
import Popup from "reactjs-popup";
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const AppointmentType = (props) => {
    const [returnedData, setReturnedData] = useState(null)
    const { title, time, shortDetails } = props.appointmentData;
    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = (data) => {
        const key = (length=6)=>Math.random().toString(20).substr(2, length);
        const appointmentInfo = { title, key: key(), details: data, action: "notVisited", action1: "pending"}
        console.log(appointmentInfo);
        fetch("https://guarded-anchorage-08361.herokuapp.com/addAppointment", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(appointmentInfo)
        })
            .then(res => res.json())
            .then(data => {
                setReturnedData(data)
                reset()
            })
    };

    return (
        <div className="col-md-4 appointmentType">
            <Card style={{ width: '18rem', border: "none", boxShadow: "5px 5px 10px lightGray" }}>
                <Card.Body>
                    <h5>{title}</h5>
                    <p className="mb-2 text-muted">{time}</p>
                    <p><small>{shortDetails}</small></p>
                    <Popup trigger={<button>BOOK APPOINTMENT</button>} contentStyle={{ width: "600px", border: "none", background: "transparent" }} modal closeOnDocumentClick>
                        <div className="popupDetails">
                            <h5>{title}</h5>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input name="time" className="takeInput" placeholder="Time" defaultValue={time} ref={register} />
                                <br />
                                <br />
                                <input name="name" className="takeInput" placeholder="Your Name" ref={register({ required: true })} />
                                <br />
                                {errors.name && "Name is required"}
                                <br />
                                <input name="phoneNumber" className="takeInput" placeholder="Phone Number" ref={register({ pattern: /^\(?([0-9]{3})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/, required: true })} />
                                <br />
                                {errors.phoneNumber && "Please enter a valid number"}
                                <br />
                                <input name="email" className="takeInput" placeholder="Email" ref={register({ pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, required: true })} />
                                <br />
                                {errors.email && "Please enter a valid email"}
                                <br />
                                <input name="date" className="takeInput" placeholder="mm/dd/yyyy" defaultValue={props.fullDate1} ref={register({ pattern: /^(0?[1-9]|1[012])[/-](0?[1-9]|[12][0-9]|3[01])[/-]\d{4}$/, required: true })} />
                                <br />
                                {errors.date && "Please enter a valid date"}
                                <br />
                                <div className="submitBtn">
                                    <input type="submit" value="Send" />
                                </div>
                                {
                                    returnedData &&
                                    <div>
                                        <p>Your Appointment Id: {returnedData._id}</p>
                                        <a href="/">Go to Home Page</a>
                                    </div>
                                }
                            </form>
                        </div>
                    </Popup>

                </Card.Body>
            </Card>
        </div>
    );
};

export default AppointmentType;