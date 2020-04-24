import React from 'react';
import { Nav } from 'react-bootstrap';
import './MainPage.css';
import image from '../../images/Mask Group 1.png'

const MainPage = () => {
    return (
        <div className="header">
            <div className="header2">
                <div className="top-nav">
                    <div className="col-md-8 center-nav">
                        <Nav className="justify-content-end">
                            <Nav.Item>
                                <Nav.Link className="navLink" href="/home">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="navLink" href="/about">About</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="navLink" href="/dentalService">Dental Service</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <div className="col-md-4 right-nav">
                        <Nav className="justify-content-start">
                            <Nav.Item>
                                <Nav.Link className="navLink" href="/review">Review</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="navLink" href="/blog">Blog</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="navLink" href="/contactUs">Contact Us</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div className="col-md-5 appointment-container">
                        <h1>Your New Smile Starts Here</h1>
                        <p><small>Oral health is a key indicator of overall health, well-being and quality of life. It encompasses a range of diseases and conditions that include dental caries, Periodontal disease, Tooth loss, Oral cancer, Oral manifestations of HIV infection, Oro-dental trauma, Noma and birth defects such as cleft lip and palate.</small></p>
                        <button>GET APPOINTMENT</button>
                    </div>
                    <div className="col-md-7 appointment-image">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;