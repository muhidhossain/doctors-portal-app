import React from 'react';
import { Nav } from 'react-bootstrap';
import './MainPage.css';
import image from '../../images/Mask Group 1.png'
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className="doctorPortal">
            <div className="doctorNav">
                <Nav className="justify-content-end">
                    <Nav.Item>
                        <Nav.Link className="navLink" href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navLink" href="/about">About</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navLink" href="/dentalServices">Dental Services</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navLink" href="/reviews">Reviews</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navLink" href="/dashboard">Doctors Zone</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navLink" href="/contactUs">Contact Us</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <div className='row mainBody'>
                <div className="col-md-5">
                    <div className="doctorText">
                        <h1>Your New Smile
                        <br />
                        Starts Here</h1>
                        <p>Oral health is a key indicator of overall health, well-being and quality of life. It encompasses a range of diseases and conditions that include dental caries, Periodontal disease, Tooth loss, Oral cancer, Oral manifestations of HIV infection, Oro-dental trauma, Noma and birth defects such as cleft lip and palate.</p>
                        <Link to="/appointment">
                            <button>GET APPOINTMENT</button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="doctorImg">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;