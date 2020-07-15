import React from 'react';
import { Nav } from 'react-bootstrap';
import './MainPage.css';
import image from '../../images/Mask Group 1.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import dental from '../../images/001-dental.png';
import tooth1 from '../../images/tooth (1).png';
import tooth from '../../images/tooth.png';
import maskGroup3 from '../../images/Mask Group 3.png';
import { Button } from '@material-ui/core';
import bgRemoveDoctor from '../../images/5790-removebg.png';

const MainPage = () => {
    return (
        <div className="doctorPortal">
            <div className="doctorHeading">
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
                        <Nav.Link className="navLink2" href="/reviews">Reviews</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navLink2" href="/dashboard">Doctors Zone</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className="navLink2" href="/contactUs">Contact Us</Nav.Link>
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
                        <Link style={{textDecoration:"none"}} to="/appointment">
                            <Button className="button">GET APPOINTMENT</Button>
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
            <div className="publicServices">
                <div>
                    <FontAwesomeIcon className="icon" icon={faClock} />
                    <div>
                        <p>Opening Hours</p>
                        <small>
                            Officia enim ut deserunt
                            <br />
                            aute nisi.
                        </small>
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon className="icon" icon={faMapMarkerAlt} />
                    <div>
                        <p>Visit our location</p>
                        <small>Barisal, Bangladesh</small>
                    </div>
                </div>
                <div>
                    <FontAwesomeIcon className="icon" icon={faPhoneAlt} />
                    <div>
                        <p>Contact us now</p>
                        <small>+8809638164898</small>
                    </div>
                </div>
            </div>
            <div className="ourServices">
                <div>
                    <p>OUR SERVICES</p>
                    <h2>Services We Provide</h2>
                    <div className="servicesDetails">
                        <div>
                            <img src={dental} alt=""/>
                            <p>Fluoride Treatment</p>
                            <p>Cupidatat laborum qui excepteur anim magna occaecat veniam et consequat ad eiusmod et incididunt. Occaecat nisi amet eiusmod elit. Est culpa culpa nisi excepteur duis ad duis mollit.</p>
                        </div>
                        <div>
                            <img src={tooth1} alt=""/>
                            <p>Cavity Filling</p>
                            <p>Cupidatat laborum qui excepteur anim magna occaecat veniam et consequat ad eiusmod et incididunt. Occaecat nisi amet eiusmod elit. Est culpa culpa nisi excepteur duis ad duis mollit.</p>
                        </div>
                        <div>
                            <img src={tooth} alt=""/>
                            <p>Teeth Whitening</p>
                            <p>Cupidatat laborum qui excepteur anim magna occaecat veniam et consequat ad eiusmod et incididunt. Occaecat nisi amet eiusmod elit. Est culpa culpa nisi excepteur duis ad duis mollit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dentalCare">
                <div className="col-md-5">
                    <img src={maskGroup3} alt=""/>
                </div>
                <div className="col-md-5">
                    <h1>Exceptional Dental<br/>Care, on Your Terms</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero dolor cumque officia natus quaerat a vitae. Dolorum, quae aperiam fugit corporis deleniti doloribus at excepturi. Aspernatur quia sint earum dolore eius voluptatem maiores laborum. Ipsam voluptates iusto laborum recusandae at optio, eum quas aliquam cumque maxime consequuntur, possimus sunt atque modi odit tempora? Quas enim sed qui ipsam consectetur laborum amet reprehenderit suscipit ab corporis. Velit unde dicta quia? Voluptas ad officia fugiat ducimus aperiam temporibus, quis omnis voluptatibus.</p>
                    <Button className="button">Learn More</Button>
                </div>
            </div>
            <div className="makeAppointment">
                <div className="col-md-5">
                    <img src={bgRemoveDoctor} alt=""/>
                </div>
                <div className="col-md-6">
                    <h4>APPOINTMENT</h4>
                    <h1>Make an Appointment <br/>Today</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui doloremque dolore ipsa dolorem exercitationem culpa in inventore asperiores nostrum tenetur.</p>
                    <Button className="button">LEARN MORE</Button>
                </div>
            </div>
        </div>
    );
};

export default MainPage;