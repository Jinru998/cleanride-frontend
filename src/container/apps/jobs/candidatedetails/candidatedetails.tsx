import { FC, Fragment } from 'react';
import { Button, Card, Col, OverlayTrigger, Row, Table, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pageheader from '../../../../components/pageheader/pageheader';
import logo1 from "../../../../assets/images/company-logos/1.png";
import logo2 from "../../../../assets/images/company-logos/2.png";
import logo3 from "../../../../assets/images/company-logos/3.png";
import logo6 from "../../../../assets/images/company-logos/6.png";
import logo4 from "../../../../assets/images/company-logos/4.png";
import logo5 from "../../../../assets/images/company-logos/5.png";
import face1 from "../../../../assets/images/faces/1.jpg";
import face21 from "../../../../assets/images/faces/21.jpg";
import face3 from "../../../../assets/images/faces/3.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

interface CandidatedetailsProps { }

const Candidatedetails: FC<CandidatedetailsProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Candidate Details" heading="Jobs" active="Candidate Details" />
            <div className="container">
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center flex-wrap justify-content-between gap-2">
                                    <div className="d-flex flex-wrap gap-2">
                                        <div>
                                            <span className="avatar avatar-xxl avatar-rounded">
                                                <img src={face1} className="rounded-circle img-fluid" alt="" />
                                            </span>
                                        </div>
                                        <div className="ms-3">
                                            <h4 className="fw-bold mb-0 d-flex align-items-center"><Link to="#"> Brenda Simpson <i className="bi bi-check-circle-fill text-success fs-16" data-bs-toggle="tooltip" title="Verified candidate"></i></Link></h4>
                                            <Link to="#" className="fw-semibold"><i className="bi bi-briefcase me-1"></i> Software Developer</Link>
                                            <div className="d-flex flex-wrap gap-2 align-items-center fs-11 text-muted">
                                                <p className="fs-11 mb-0">Ratings : </p>
                                                <div className="min-w-fit-content ms-2">
                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                                </div>
                                                <Link to="#" className="ms-1 min-w-fit-content text-muted">
                                                    <span>(142)</span>
                                                    <span>Ratings</span>
                                                </Link>
                                            </div>
                                            <div className="d-flex fs-14 mt-3">
                                                <div>
                                                    <p className="mb-1"><i className="bi bi-geo-alt me-2"></i>Banglore, Karnataka</p>
                                                    <p><i className="bi bi-briefcase me-2"></i>1 Year Experience</p>
                                                </div>
                                                <div className="ms-4">
                                                    <p className="mb-1"><i className="bi bi-coin me-2"></i>Package (Yearly) : <span className="fw-semibold" data-bs-toggle="tooltip" title="Current Salary">$10,000</span> - <span className="fw-semibold" data-bs-toggle="tooltip" title="Expected Salary">$20,000</span></p>
                                                    <p><i className="bi bi-mortarboard me-2"></i>Graduate</p>
                                                </div>
                                            </div>
                                            <div className="popular-tags">
                                                <Link to="#" className="badge rounded-pill bg-info-transparent me-1"><i className="bi bi-moon-stars me-1"></i>Full Time</Link>
                                                <Link to="#" className="badge rounded-pill bg-danger-transparent"><i className="bi bi-clock me-1"></i> Immediate Joinee</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-list">
                                        <Link to="#" className="btn btn-primary"><i className="bi bi-download me-1"></i> Download CV</Link>
                                        <Link to="#" className="btn btn-icon btn-primary-light btn-wave">
                                            <i className="ri-heart-line fs-13"></i>
                                        </Link>
                                        <Link to="#" className="btn btn-icon btn-primary-light btn-wave">
                                            <i className="ri-share-line"></i>
                                        </Link>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>

                    <Col lg={8}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    <h5 className="mb-0 fw-semibold fs-22">
                                        Candidate Profile Information
                                    </h5>
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="card-body p-0 candidate-edu-timeline">
                                <div className="p-4 border-bottom">
                                    <h5 className="fw-semibold fs-17 d-flex align-items-center gap-2"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="bi bi-briefcase fs-13"></i></span> Career Objective :</h5>
                                    <div className="ms-4 ps-3">
                                        <p className="op-9">Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore.A officiis optio temporibus minima facilis...</p>
                                        <p className="mb-0 op-9">Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..</p>
                                    </div>
                                </div>
                                <div className="p-4 border-bottom">
                                    <h5 className="fw-semibold fs-17 d-flex align-items-center gap-2"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="bi bi-mortarboard fs-13"></i></span> Education :</h5>
                                    <div className="ms-4 ps-3">
                                        <p className="fw-semibold fs-14 mb-0">Bachelors of science in computer science</p>
                                        <div className="d-flex gap-2">
                                            <p className="mb-0">Dwayne University</p>
                                            <p className="mb-0 text-muted"><i className="bi bi-geo-alt fs-12"></i> Nellore</p>
                                        </div>
                                        <p className="mb-4"> (2019 Mar - 2022 Apr)</p>
                                        <p className="fw-semibold fs-14 mb-0">Intermediate (MPC)</p>
                                        <div className="d-flex gap-2">
                                            <p className="mb-0">Sprect College</p>
                                            <p className="mb-0 text-muted"><i className="bi bi-geo-alt fs-12"></i> Warangal</p>
                                        </div>
                                        <p className="mb-0"> (2017 Mar - 2019 Apr)</p>
                                    </div>
                                </div>
                                <div className="p-4 border-bottom">
                                    <h5 className="fw-semibold fs-17 d-flex align-items-center gap-2"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="bi bi-award fs-13"></i></span> Certifications :</h5>
                                    <div className="ms-4 ps-3">
                                        <p className="fw-semibold fs-14 mb-0">Web Development (3 Months)</p>
                                        <p className="mb-4">EMC Solutions Pvt Ltd</p>
                                        <p className="fw-semibold fs-14 mb-0">Python Development (6 Months)</p>
                                        <p className="mb-0">Dabre Services Pvt Ltd</p>
                                    </div>
                                </div>
                                <div className="p-4 border-bottom">
                                    <h5 className="fw-semibold fs-17 d-flex align-items-center gap-2"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="bi bi-journal-medical fs-13"></i></span> Publications :</h5>
                                    <div className="ms-3">
                                        <ol className="list-group border-0 list-bullets">
                                            <li className="border-0 py-1"><span className="fw-semibold">“One of a Kind Design,”</span> Web Design Book, Poulin Publishing, 2018</li>
                                            <li className="border-0 py-1"><span className="fw-semibold">“Website Design in 2019,”</span> A List Apart, June 2019</li>
                                            <li className="border-0 py-1"><span className="fw-semibold">“Usable Information Architecture,”</span> SitePoint, Feb 2019</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-4 border-bottom">
                                    <h5 className="fw-semibold fs-17 d-flex align-items-center gap-2"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="bi bi-activity fs-13"></i></span> Activities and Interests :</h5>
                                    <div className="ms-3">
                                        <ol className="list-group border-0 list-bullets">
                                            <li className="border-0 py-1">Community Involvement</li>
                                            <li className="border-0 py-1">Yoga</li>
                                            <li className="border-0 py-1">Travel</li>
                                            <li className="border-0 py-1">Art</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-4 border-bottom">
                                    <h5 className="fw-semibold fs-17 d-flex align-items-center gap-2"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="bi bi-link-45deg fs-13"></i></span> References :</h5>
                                    <div className="ms-4 ps-3">
                                        <p><span className="fw-semibold">Name : </span> Nicole Chiu</p>
                                        <p><span className="fw-semibold">Designation : </span> Software Developer</p>
                                        <p><span className="fw-semibold">Company Name : </span> Spotech Technical Solutions</p>
                                        <p><span className="fw-semibold">Mobile : </span> +91 7865443679</p>
                                        <p><span className="fw-semibold">Email : </span> nchiu@email.com</p>
                                        <p className="mb-0"><span className="fw-semibold">Location : </span> Hyderabad</p>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    <h5 className="mb-0 fw-semibold">Experience Overview</h5>
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="card-body p-0 candidate-edu-timeline">
                                <div className="p-4 border-bottom">
                                    <h5 className="fw-semibold fs-17 d-flex align-items-center gap-2"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="bi bi-briefcase fs-13"></i></span> Experience :</h5>
                                    <div className="ms-4 ps-3">
                                        <p className="fw-semibold fs-14 mb-0">Full Stack Developer (2019 Mar - 2022 Apr)</p>
                                        <div className="d-flex gap-2">
                                            <p>Spotech Technical Solutions</p>
                                            <p className="mb-0 fs-12 text-muted"><i className="bi bi-geo-alt fs-11"></i> Kondapur, Hyderabad</p>
                                        </div>
                                        <p className="fw-semibold mb-2">Responsibilities :</p>
                                        <ol className="list-group border-0 list-bullets">
                                            <li className="border-0 py-1">Design thoughtful, beautiful, and useful software user interfaces and experiences in a team environment..</li>
                                            <li className="border-0 py-1">Create user-centered designs by considering market analysis, customer feedback, and usability findings.</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-4 border-bottom">
                                    <h5 className="fw-semibold fs-17 d-flex align-items-center gap-2"><span className="avatar avatar-rounded bg-primary avatar-sm"><i className="bi bi-people fs-13"></i></span> Volunteer Experience :</h5>
                                    <div className="ms-4 ps-3">
                                        <p className="fw-semibold fs-14 mb-0">Volunteer in the Student Organization</p>
                                        <p className="mb-2 text-muted"><i className="bi bi-geo-alt fs-12"></i> Warangal, 2015</p>
                                        <ol className="list-group border-0 list-bullets">
                                            <li className="border-0 py-1">In charge of Organizing activities for approximately 100+ internation schools in 2015</li>
                                            <li className="border-0 py-1">In charge of Organizing activities for approximately 100+ internation schools in 2015</li>
                                        </ol>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card border bg-primary-transparent shadow-none">
                            <Card.Body>
                                <div className="row align-items-center">
                                    <Col lg={6}>
                                        <h5 className="fw-semibold mb-0">&#128400; Was this profile fit for someone?</h5>
                                    </Col>
                                    <Col lg={6} className=" text-end">
                                        <Link to="#" className="btn btn-success btn-lg" role="button">
                                            <i className="ri-share-line me-2"></i>Share Now
                                        </Link>
                                    </Col>
                                </div>
                            </Card.Body>
                        </Card>
                        <div>
                            <h4 className="fw-semibold mb-0">Related Profiles</h4>
                            <p className="">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            <div className="swiper swiper-related-jobs">
                                <div className="swiper-wrapper">
                                    <Swiper spaceBetween={30} centeredSlides={true} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper" autoplay={{ delay: 2500, disableOnInteraction: false, }} >
                                        <SwiperSlide>
                                            <Card className="custom-card">
                                                <Card.Body>
                                                    <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                                                        <div>
                                                            <span className="avatar avatar-lg avatar-rounded">
                                                                <img src={face1} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <h5 className="fw-semibold mb-0 d-flex align-items-center"><Link to="#"> Brenda Simpson
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Verified candidate</Tooltip>}>
                                                                    <i className="bi bi-check-circle-fill text-success fs-16 ms-1"></i>
                                                                </OverlayTrigger>
                                                                </Link></h5>
                                                            <div className="d-flex gap-2">
                                                                <Link to="#">Software Developer</Link>
                                                                <p className="mb-0 fs-12 text-muted"><i className="bi bi-geo-alt fs-11"></i> Kondapur, Hyderabad</p>
                                                            </div>
                                                            <div className="d-flex align-items-center fs-12 text-muted">
                                                                <p className="fs-12 mb-0">Ratings : </p>
                                                                <div className="min-w-fit-content ms-2">
                                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                                                </div>
                                                                <Link to="#" className="ms-1 min-w-fit-content text-muted">
                                                                    <span>(142)</span>
                                                                    <span>Ratings</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="btn-list">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Download Resume</Tooltip>}>
                                                                <Link to="#" className="avatar avatar-rounded avatar-sm bg-primary text-fixed-white">
                                                                    <span><i className="bi bi-download"></i></span></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                                                <Link to="#" className="avatar avatar-rounded avatar-sm bg-light text-default">
                                                                    <span><i className="bi bi-heart"></i></span></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>View Profile</Tooltip>}>
                                                                <Link to="#" className="avatar avatar-rounded avatar-sm bg-light text-default">
                                                                    <span><i className="bi bi-eye"></i></span></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                    <div className="popular-tags">
                                                        <Link to="#" className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-mortarboard text-muted me-1"></i> Graduate</Link>
                                                        <Link to="#" className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-moon-stars text-muted me-1"></i> flexible-shift</Link>
                                                        <Link to="#" className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-clock text-muted me-1"></i> Immediate Joinee</Link>
                                                        <Link to="#" className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-broadcast text-muted me-1"></i> Good at English</Link>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer className="card-footer">
                                                    <div className="d-flex align-items-center gap-3 flex-wrap">
                                                        <h6 className="mb-0 fw-semibold">Skills :</h6>
                                                        <div className="popular-tags flex-grow-1">
                                                            <Link to="#" className="badge rounded-pill bg-light text-default me-1">HTML</Link>
                                                            <Link to="#" className="badge rounded-pill bg-light text-default me-1">CSS</Link>
                                                            <Link to="#" className="badge rounded-pill bg-light text-default me-1">Javascript</Link>
                                                            <Link to="#" className="badge rounded-pill bg-light text-default me-1">Angular</Link>
                                                            <Link to="#" className="badge rounded-pill bg-primary-transparent"><i className="bi bi-plus"></i> More</Link>
                                                        </div>
                                                        <div>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>1 year bond accepted</Tooltip>}>
                                                                <Link to="#" className="badge badge-md rounded-pill bg-info-transparent" data-bs-toggle="tooltip" title="1 year bond accepted"><i className="bi bi-hand-thumbs-up me-1"></i>1 year bond accepted</Link>
                                                            </OverlayTrigger>
                                                            <Link to="#" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Exp : 2 Years</Link>
                                                        </div>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Card className="custom-card">
                                                <Card.Body>
                                                    <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                                                        <div>
                                                            <span className="avatar avatar-lg avatar-rounded">
                                                                <img src={face3} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <h5 className="fw-semibold mb-0 d-flex align-items-center"><Link to="#"> Dwayne Stort
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Verified candidate</Tooltip>}>
                                                                    <i className="bi bi-check-circle-fill text-success fs-16 ms-1"></i>
                                                                </OverlayTrigger></Link></h5>
                                                            <div className="d-flex gap-2">
                                                                <Link to="#">Web Developer</Link>
                                                                <p className="mb-0 fs-12 text-muted"><i className="bi bi-geo-alt fs-11"></i> Gachibowli, Hyderabad</p>
                                                            </div>
                                                            <div className="d-flex align-items-center fs-12 text-muted">
                                                                <p className="fs-12 mb-0">Ratings : </p>
                                                                <div className="min-w-fit-content ms-2">
                                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning me-1"><i className="bi bi-star"></i></span>
                                                                    <span className="text-warning me-1"><i className="bi bi-star"></i></span>
                                                                </div>
                                                                <Link to="#" className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                    <span>(35)</span>
                                                                    <span>Ratings</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="btn-list">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Download Resume</Tooltip>}>
                                                                <Link to="#" className="avatar avatar-rounded avatar-sm bg-primary text-fixed-white">
                                                                    <span><i className="bi bi-download"></i></span></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                                                <Link to="#" className="avatar avatar-rounded avatar-sm bg-light text-default">
                                                                    <span><i className="bi bi-heart"></i></span></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>View Profile</Tooltip>}>
                                                                <Link to="#" className="avatar avatar-rounded avatar-sm bg-light text-default">
                                                                    <span><i className="bi bi-eye"></i></span></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                    <div className="popular-tags">
                                                        <Link to="#" className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-mortarboard text-muted me-1"></i> Post Graduate</Link>
                                                        <Link to="#" className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-moon-stars text-muted me-1"></i> flexible-shift</Link>
                                                        <Link to="#" className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-clock text-muted me-1"></i> Within 10 Days</Link>
                                                        <Link to="#" className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-broadcast text-muted me-1"></i> Good at English</Link>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer className="card-footer">
                                                    <div className="d-flex align-items-center gap-3 flex-wrap">
                                                        <h6 className="mb-0 fw-semibold">Skills :</h6>
                                                        <div className="popular-tags flex-grow-1">
                                                            <Link to="#" className="badge rounded-pill bg-light text-default me-1">React</Link>
                                                            <Link to="#" className="badge rounded-pill bg-light text-default me-1">Javascript</Link>
                                                            <Link to="#" className="badge rounded-pill bg-light text-default me-1">React Navtive</Link>
                                                            <Link to="#" className="badge rounded-pill bg-primary-transparent"><i className="bi bi-plus"></i> More</Link>
                                                        </div>
                                                        <div>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>1 year bond accepted</Tooltip>}>
                                                                <Link to="#" className="badge badge-md rounded-pill bg-info-transparent" data-bs-toggle="tooltip" title="1 year bond accepted">
                                                                    <i className="bi bi-hand-thumbs-up me-1"></i>2 years bond accepted</Link>
                                                            </OverlayTrigger>
                                                            <Link to="#" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Exp : 4 Years</Link>
                                                        </div>
                                                    </div>
                                                </Card.Footer>
                                            </Card>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <Card className="custom-card">
                                                <Card.Body>
                                                    <div className="d-flex mb-3 align-items-center flex-wrap gap-2">
                                                        <div>
                                                            <span className="avatar avatar-lg avatar-rounded">
                                                                <img src={face21} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <h5 className="fw-semibold mb-0 d-flex align-items-center"><Link to="#"> Jasmine Kova
                                                                <OverlayTrigger placement="top" overlay={<Tooltip>Verified candidate</Tooltip>}>
                                                                    <i className="bi bi-check-circle-fill text-success fs-16 ms-1"></i>
                                                                </OverlayTrigger></Link></h5>
                                                            <div className="d-flex gap-2">
                                                                <Link to="#">Python Developer</Link>
                                                                <p className="mb-0 fs-12 text-muted"><i className="bi bi-geo-alt fs-11"></i> Gachibowli, Chennai</p>
                                                            </div>
                                                            <div className="d-flex align-items-center fs-12 text-muted">
                                                                <p className="fs-12 mb-0">Ratings : </p>
                                                                <div className="min-w-fit-content ms-2">
                                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                                    <span className="text-warning me-1"><i className="bi bi-star"></i></span>
                                                                    <span className="text-warning me-1"><i className="bi bi-star"></i></span>
                                                                </div>
                                                                <Link to="#" className="mb-0 ms-1 min-w-fit-content text-muted">
                                                                    <span>(56)</span>
                                                                    <span>Ratings</span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                        <div className="btn-list">
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Download Resume</Tooltip>}>
                                                                <Link to="#" className="avatar avatar-rounded avatar-sm bg-primary text-fixed-white">
                                                                    <span><i className="bi bi-download"></i></span></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add to Wishlist</Tooltip>}>
                                                                <Link to="#" className="avatar avatar-rounded avatar-sm bg-light text-default">
                                                                    <span><i className="bi bi-heart"></i></span></Link>
                                                            </OverlayTrigger>
                                                            <OverlayTrigger placement="top" overlay={<Tooltip>View Profile</Tooltip>}>
                                                                <Link to="#" className="avatar avatar-rounded avatar-sm bg-light text-default">
                                                                    <span><i className="bi bi-eye"></i></span></Link>
                                                            </OverlayTrigger>
                                                        </div>
                                                    </div>
                                                    <div className="popular-tags">
                                                        <Link to="#" className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-mortarboard text-muted me-1"></i> MBA</Link>
                                                        <Link to="#" className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-moon-stars text-muted me-1"></i> Day-shift</Link>
                                                        <Link to="#" className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-clock text-muted me-1"></i> Within 30 Days</Link>
                                                        <Link to="#" className="badge rounded-pill bg-light text-default me-1"><i className="bi bi-broadcast text-muted me-1"></i> Avg at English</Link>
                                                    </div>
                                                </Card.Body>
                                                <div className="card-footer">
                                                    <div className="d-flex align-items-center gap-3 flex-wrap">
                                                        <h6 className="mb-0 fw-semibold">Skills :</h6>
                                                        <div className="popular-tags flex-grow-1">
                                                            <Link to="#" className="badge rounded-pill bg-light text-default me-1">Python</Link>
                                                            <Link to="#" className="badge rounded-pill bg-light text-default me-1">Java</Link>
                                                            <Link to="#" className="badge rounded-pill bg-light text-default me-1">React</Link>
                                                            <Link to="#" className="badge rounded-pill bg-primary-transparent"><i className="bi bi-plus"></i> More</Link>
                                                        </div>
                                                        <div>
                                                            <Link to="#" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Exp : 5 Years</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card>
                                        </SwiperSlide>

                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Skills
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="popular-tags">
                                    <Link to="#" className="badge rounded-pill bg-light text-default me-1">HTML</Link>
                                    <Link to="#" className="badge rounded-pill bg-light text-default me-1">CSS</Link>
                                    <Link to="#" className="badge rounded-pill bg-light text-default me-1">Javascript</Link>
                                    <Link to="#" className="badge rounded-pill bg-light text-default me-1">Angular</Link>
                                    <Link to="#" className="badge rounded-pill bg-light text-default me-1">React</Link>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header>
                                <Card.Title>
                                    Tools Used
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="card-body d-flex flex-wrap gap-2">
                                <span className="avatar me-2 avatar-rounded bg-white shadow-sm border p-2">
                                    <img src={logo1} alt="" />
                                </span>
                                <span className="avatar me-2 avatar-rounded bg-white shadow-sm border p-2">
                                    <img src={logo2} alt="" />
                                </span>
                                <span className="avatar me-2 avatar-rounded bg-white shadow-sm border p-2">
                                    <img src={logo3} alt="" />
                                </span>
                                <span className="avatar me-2 avatar-rounded bg-white shadow-sm border p-2">
                                    <img src={logo4} alt="" />
                                </span>
                                <span className="avatar me-2 avatar-rounded bg-white shadow-sm border p-2">
                                    <img src={logo5} alt="" />
                                </span>
                                <span className="avatar avatar-rounded bg-white shadow-sm border p-2">
                                    <img src={logo6} alt="" />
                                </span>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Languages
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <p><span className="fw-semibold">English : </span>Fluent</p>
                                <p><span className="fw-semibold">Hindi : </span>Intermediate</p>
                                <p className="mb-0"><span className="fw-semibold">Telugu : </span>Expert</p>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header>
                                <Card.Title>
                                    Personal Information
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="card-body p-2">
                                <div className="table-responsive">
                                    <Table className="table-responsive table-borderless">
                                        <tbody>
                                            <tr>
                                                <td className="w-50">
                                                    <span className="fw-semibold">Full Name</span>
                                                </td>
                                                <td>: Brenda Simpson</td>
                                            </tr>
                                            <tr>
                                                <td className="w-50">
                                                    <span className="fw-semibold">Email</span>
                                                </td>
                                                <td>: brendra@gmail.com</td>
                                            </tr>
                                            <tr>
                                                <td className="w-50">
                                                    <span className="fw-semibold">D.O.B</span>
                                                </td>
                                                <td>: 13 Jan 2022</td>
                                            </tr>
                                            <tr>
                                                <td className="w-50">
                                                    <span className="fw-semibold">Gender</span>
                                                </td>
                                                <td>: Female</td>
                                            </tr>
                                            <tr>
                                                <td className="w-50">
                                                    <span className="fw-semibold">Age</span>
                                                </td>
                                                <td>: 35</td>
                                            </tr>
                                            <tr>
                                                <td className="w-50">
                                                    <span className="fw-semibold">Mobile </span>
                                                </td>
                                                <td>: +91 7865343874</td>
                                            </tr>
                                            <tr>
                                                <td className="w-50">
                                                    <span className="fw-semibold">Mother Tongue </span>
                                                </td>
                                                <td>: Telugu</td>
                                            </tr>
                                            <tr>
                                                <td className="w-50">
                                                    <span className="fw-semibold">Marital Status </span>
                                                </td>
                                                <td>: Unmarried</td>
                                            </tr>
                                            <tr>
                                                <td className="w-50">
                                                    <span className="fw-semibold">Blood Group </span>
                                                </td>
                                                <td>: o +ve</td>
                                            </tr>
                                            <tr>
                                                <td className="w-50">
                                                    <span className="fw-semibold">Address </span>
                                                </td>
                                                <td> Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </Card.Body>
                            <Card.Footer className="card-footer">
                                <div className="d-flex align-items-center">
                                    <p className="fs-15 mb-0 me-4 fw-semibold">Social :</p>
                                    <div className="btn-list mb-0">
                                        <Button variant='primary-light' className="btn btn-sm btn-icon btn-wave waves-effect waves-light mb-xl-0">
                                            <i className="ri-facebook-line"></i>
                                        </Button>
                                        <Button variant='secondary-light' className="btn btn-sm btn-icon  btn-wave waves-effect waves-light mb-xl-0">
                                            <i className="ri-twitter-line"></i>
                                        </Button>
                                        <Button variant='warning-light' className="btn btn-sm btn-icon btn-wave waves-effect waves-light mb-xl-0">
                                            <i className="ri-instagram-line"></i>
                                        </Button>
                                        <Button variant='success-light' className="btn btn-sm btn-icon  btn-wave waves-effect waves-light mb-xl-0">
                                            <i className="ri-github-line"></i>
                                        </Button>
                                        <Button variant='danger-light' className="btn btn-sm btn-icon  btn-wave waves-effect waves-light mb-xl-0">
                                            <i className="ri-youtube-line"></i>
                                        </Button>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="">
                                    <h5 className="fw-semibold mb-3">Get Latest Alerts</h5>
                                    <p>Latest candidate updates on the go to recieved direct to your email. Stay updated with your latest new candidates list.</p>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Email Here" aria-label="blog-email" aria-describedby="blog-subscribe" />
                                        <Button variant='primary' className="btn btn-primary" type="button" id="blog-subscribe">Subscribe</Button>
                                    </div>
                                    <label className="form-check-label">
                                        By Subscribing you accept to <Link to="#" className="text-success"><u>privacy policy</u></Link>
                                    </label>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default Candidatedetails;
