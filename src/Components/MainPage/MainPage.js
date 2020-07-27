import React from 'react';
import { Nav, Card } from 'react-bootstrap';
import './MainPage.css';
import image from '../../images/Mask Group 1.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt, faPhoneAlt, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import dental from '../../images/001-dental.png';
import tooth1 from '../../images/tooth (1).png';
import tooth from '../../images/tooth.png';
import maskGroup3 from '../../images/Mask Group 3.png';
import { Button } from '@material-ui/core';
import bgRemoveDoctor from '../../images/5790-removebg.png';
import ellips1 from '../../images/Ellipse 1.png';
import drImage from '../../images/dr-image.png';
import Footer from '../Footer/Footer';

const MainPage = () => {
    return (
        <div className="doctorPortal">
            <div className="doctorHeading">
                <div className="doctorNav">
                    <Nav className="justify-content-end">
                        <Nav.Item>
                            <Nav.Link className="navLink" href="/">Home</Nav.Link>
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
                            <Link style={{ textDecoration: "none" }} to="/appointment">
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
                            <img src={dental} alt="" />
                            <p>Fluoride Treatment</p>
                            <p>Cupidatat laborum qui excepteur anim magna occaecat veniam et consequat ad eiusmod et incididunt. Occaecat nisi amet eiusmod elit. Est culpa culpa nisi excepteur duis ad duis mollit.</p>
                        </div>
                        <div>
                            <img src={tooth1} alt="" />
                            <p>Cavity Filling</p>
                            <p>Cupidatat laborum qui excepteur anim magna occaecat veniam et consequat ad eiusmod et incididunt. Occaecat nisi amet eiusmod elit. Est culpa culpa nisi excepteur duis ad duis mollit.</p>
                        </div>
                        <div>
                            <img src={tooth} alt="" />
                            <p>Teeth Whitening</p>
                            <p>Cupidatat laborum qui excepteur anim magna occaecat veniam et consequat ad eiusmod et incididunt. Occaecat nisi amet eiusmod elit. Est culpa culpa nisi excepteur duis ad duis mollit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dentalCare">
                <div>
                    <div>
                        <img src={maskGroup3} alt="" />
                    </div>
                    <div>
                        <div>
                            <h1>Exceptional Dental<br />Care, on Your Terms</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vero dolor cumque officia natus quaerat a vitae. Dolorum, quae aperiam fugit corporis deleniti doloribus at excepturi. Aspernatur quia sint earum dolore eius voluptatem maiores laborum. Ipsam voluptates iusto laborum recusandae at optio, eum quas aliquam cumque maxime consequuntur, possimus sunt atque modi odit tempora? Quas enim sed qui ipsam consectetur laborum amet reprehenderit suscipit ab corporis. Velit unde dicta quia? Voluptas ad officia fugiat ducimus aperiam temporibus, quis omnis voluptatibus.</p>
                            <Button className="button">Learn More</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="makeAppointment">
                <div>
                    <img src={bgRemoveDoctor} alt="" />
                </div>
                <div>
                    <h4>APPOINTMENT</h4>
                    <h1>Make an Appointment <br />Today</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui doloremque dolore ipsa dolorem exercitationem culpa in inventore asperiores nostrum tenetur.</p>
                    <Button className="button">LEARN MORE</Button>
                </div>
            </div>
            <div className="testimonial">
                <div>
                    <h4>Testimonial</h4>
                    <h1>What's Our Patients <br />Says</h1>
                    <div className="testimonialDetails">
                        <Card style={{ width: '21rem', border: "none", boxShadow: "5px 5px 10px lightGray" }}>
                            <Card.Body style={{ textAlign: "center" }}>
                                <Card.Text>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, corporis molestiae maiores nihil dicta expedita ipsum, reiciendis natus eligendi libero sit quisquam quod ut nostrum voluptate accusamus atque dolorem maxime.
                                </Card.Text>
                            </Card.Body>
                            <Card.Header style={{ border: "none", display: "flex" }}>
                                <img src={ellips1} alt="" />
                                <div className="patientinfo">
                                    <p>Robiul Islam</p>
                                    <p>Barisal</p>
                                </div>
                            </Card.Header>
                        </Card>
                        <Card style={{ width: '21rem', border: "none", boxShadow: "5px 5px 10px lightGray" }}>
                            <Card.Body style={{ textAlign: "center" }}>
                                <Card.Text>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, corporis molestiae maiores nihil dicta expedita ipsum, reiciendis natus eligendi libero sit quisquam quod ut nostrum voluptate accusamus atque dolorem maxime.
                                </Card.Text>
                            </Card.Body>
                            <Card.Header style={{ border: "none", display: "flex" }}>
                                <img src={ellips1} alt="" />
                                <div className="patientinfo">
                                    <p>Robiul Islam</p>
                                    <p>Barisal</p>
                                </div>
                            </Card.Header>
                        </Card>
                        <Card style={{ width: '21rem', border: "none", boxShadow: "5px 5px 10px lightGray" }}>
                            <Card.Body style={{ textAlign: "center" }}>
                                <Card.Text>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, corporis molestiae maiores nihil dicta expedita ipsum, reiciendis natus eligendi libero sit quisquam quod ut nostrum voluptate accusamus atque dolorem maxime.
                                </Card.Text>
                            </Card.Body>
                            <Card.Header style={{ border: "none", display: "flex" }}>
                                <img src={ellips1} alt="" />
                                <div className="patientinfo">
                                    <p>Robiul Islam</p>
                                    <p>Barisal</p>
                                </div>
                            </Card.Header>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="ourBlog">
                <div>
                    <h4>Our Blog</h4>
                    <h1>From Our Blog News</h1>
                    <div className="ourBlogDetails">
                        <Card style={{ width: '21rem', border: "none", boxShadow: "5px 5px 10px lightGray" }}>
                            <Card.Body>
                                <p style={{ fontSize: "20px", fontWeight: "600", marginBottom: "-5px" }}>Muhid Hossain</p>
                                <p>21 July 2020</p>
                                <p style={{ fontSize: "20px", fontWeight: "700", marginTop: "30px" }}>Check at least a doctor in a <br />year for your teeth.</p>
                                <FontAwesomeIcon style={{ fontSize: "30px", marginTop: "50px" }} icon={faLongArrowAltRight} />
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '21rem', border: "none", boxShadow: "5px 5px 10px lightGray" }}>
                            <Card.Header style={{ border: "none", display: "flex" }}>
                                <img src={ellips1} alt="" />
                                <div className="doctorinfo">
                                    <p>Dr. Robiul Islam</p>
                                    <p>15 July 2020</p>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p style={{ fontSize: "20px", fontWeight: "700" }}>2 times of brush in a day can <br />keep you healthy</p>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint consequuntur non beatae alias dolorem!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '21rem', border: "none", boxShadow: "5px 5px 10px lightGray" }}>
                            <Card.Header style={{ border: "none", display: "flex" }}>
                                <img src={ellips1} alt="" />
                                <div className="doctorinfo">
                                    <p>Dr. MK Roman</p>
                                    <p>13 July 2020</p>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <p style={{ fontSize: "20px", fontWeight: "700" }}>The tooth cancere is taking a <br />Challenge</p>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sint consequuntur non beatae alias dolorem!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="ourDoctors">
                <div>
                    <h4>Our Doctors</h4>
                    <div className="ourDoctorsDetails">
                        <Card style={{ width: '21rem', border: "none" }}>
                            <img style={{ height: "300px" }} src={drImage} alt="" />
                            <div className="doctorsInfo">
                                <p>Dr. Robiul Islam</p>
                                <p><FontAwesomeIcon icon={faPhoneAlt} /> +8809638164898</p>
                            </div>
                        </Card>
                        <Card style={{ width: '21rem', border: "none" }}>
                            <img style={{ height: "300px" }} src={drImage} alt="" />
                            <div className="doctorsInfo">
                                <p>Dr. Robiul Islam</p>
                                <p><FontAwesomeIcon icon={faPhoneAlt} /> +8809638164898</p>
                            </div>
                        </Card>
                        <Card style={{ width: '21rem', border: "none" }}>
                            <img style={{ height: "300px" }} src={drImage} alt="" />
                            <div className="doctorsInfo">
                                <p>Dr. Robiul Islam</p>
                                <p><FontAwesomeIcon icon={faPhoneAlt} /> +8809638164898</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="contactUs">
                <div>
                    <h4>Contact Us</h4>
                    <h1>Always contact with us</h1>
                    <div className="contactUsDetails">
                        <div>
                            <input placeholder="Email Address*" type="text" />
                            <br />
                            <input placeholder="Subject*" type="text" />
                            <br />
                            <input placeholder="Your Message*" type="text" />
                            <br />
                            <Button className="submitBtn">Submit</Button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div >
    );
};

export default MainPage;