import  { FC, Fragment } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import media80 from "../../../assets/images/media/media-80.svg";
import { Teamdata } from './aboutdata';
import CountUp from 'react-countup';

interface AboutusProps { }

const Aboutus: FC<AboutusProps> = () => {
    return (
        <Fragment>
            <Pageheader title="About Us" heading="Pages" active="About Us" />
            <Row>
                <Col xl={12}>
                    <div className="about-container mb-4">
                        <div className="aboutus-banner">
                            <div className="aboutus-banner-content">
                                <Row>
                                    <Col xxl={6} xl={6} >
                                        <Row className="row justify-content-center">
                                            <Col xxl={9} xl={9} lg={10} md={8} sm={10} className=" col-12">
                                                <div className="p-3 text-start mb-4">
                                                    <h6 className="fw-semibold text-fixed-white pb-4">
                                                        <span className="about-heading-white">About Us</span>
                                                    </h6>
                                                    <h3 className="fw-semibold mb-2 text-fixed-white">
                                                        DISCIPLINE IS WHAT <span className="text-success">MOTIVATES</span>
                                                        YOU MOST
                                                    </h3>
                                                    <p className="mb-4 fw-normal op-7 fs-16">
                                                        You fight like a younger man, there’s nothing held back. It’s
                                                        admirable, but mistaken. When their enemies were at the gates
                                                        the Romans would suspend democracy and appoint one man to
                                                        protect the city...
                                                    </p>
                                                    <Button variant='' className="btn btn-success btn-wave">Get Started</Button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xxl={6} xl={6} className="aboutus-banner-img">
                                        <img src={media80} className="img-fluid" alt="" />
                                    </Col>
                                    <Col xl={12} className="about-company-stats">
                                        <div className="row justify-content-center">
                                            <Col xxl={5} xl={8} lg={10} md={8} sm={10} className="col-10">
                                                <Card className="custom-card text-default shadow border">
                                                    <Card.Body className="card-body p-0">
                                                        <Row>
                                                            <Col xl={4} xxl={4} lg={4} md={4} sm={4} className="about-company-stats-border">
                                                                <div className="text-center p-4 w-100 h-100 d-flex align-items-center justify-content-center">
                                                                    <div>
                                                                        <span className="fw-semibold">Projects</span>
                                                                        <p className="text-dark fs-2 mb-0"> <CountUp className="count-up" end={137} />+</p>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            <Col xl={4} xxl={4} lg={4} md={4} sm={4} className="about-company-stats-border">
                                                                <div className="text-center p-4 w-100 h-100 d-flex align-items-center justify-content-center">
                                                                    <div>
                                                                        <span className="fw-semibold">Happy Customers</span>
                                                                        <p className="text-dark fs-2 mb-0">  <CountUp className="count-up" end={2500} />+</p>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            <Col xl={4} xxl={4} lg={4} md={4} sm={4}>
                                                                <div className="text-center p-4 w-100 h-100 d-flex align-items-center justify-content-center">
                                                                    <div>
                                                                        <span className="fw-semibold">Clients</span>
                                                                        <p className="text-dark fs-2 mb-0">  <CountUp className="count-up" end={22} /></p>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                        <div className="row pb-5 px-3 about-motto">
                            <Col xxl={5} xl={8} lg={10} md={10} sm={12}>
                                <div className="text-justify">
                                    <div className="text-dark fs-26 fw-semibold mb-4"><span className="about-heading">Our Mission</span></div>
                                    <p className="fs-14 mb-4 text-muted">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Quibusdam similique provident Lorem ipsum dolor sit amet consectetur adipisicing
                                        elit. Natus, aliquam voluptas repellat eum beatae veniam, cumque eligendi earum
                                        praesentium, in corrupti reprehenderit cum architecto quisquam? Quibusdam
                                        quaerat veritatis perferendis iusto. !</p>
                                    <div>
                                        <div className="d-flex mb-4">
                                            <div> <svg className="motto-icon" xmlns="http://www.w3.org/2000/svg"
                                                enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                                                <path fill="#28d193"
                                                    d="M20,4H4.30273c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1H20c0.55228,0,1,0.44772,1,1S20.55228,4,20,4z M15,19v3H9v-3c0-1.65685,1.34315-3,3-3l0,0C13.65685,16,15,17.34315,15,19z M4,12L4,12c-1.10457,0-2-0.89543-2-2V7c0-0.55228,0.44772-1,1-1h3v4C6,11.10457,5.10457,12,4,12z">
                                                </path>
                                                <path fill="#94ebcb"
                                                    d="M8,12L8,12c-1.10457,0-2-0.89543-2-2V6h4v4C10,11.10457,9.10457,12,8,12z">
                                                </path>
                                                <path fill="#28d193"
                                                    d="M12,12L12,12c-1.10457,0-2-0.89543-2-2V6h4v4C14,11.10457,13.10457,12,12,12z">
                                                </path>
                                                <path fill="#94ebcb"
                                                    d="M16,12L16,12c-1.10457,0-2-0.89543-2-2V6h4v4C18,11.10457,17.10457,12,16,12z">
                                                </path>
                                                <path fill="#28d193"
                                                    d="M20,12L20,12c-1.10457,0-2-0.89543-2-2V6h3c0.55228,0,1,0.44772,1,1v3C22,11.10457,21.10457,12,20,12z">
                                                </path>
                                                <path fill="#bff3e0"
                                                    d="M18,10c0,1.10455-0.89545,2-2,2s-2-0.89545-2-2c0,1.10455-0.89545,2-2,2s-2-0.89545-2-2c0,1.10455-0.89545,2-2,2s-2-0.89545-2-2c0,1.10455-0.89545,2-2,2v9c0,0.55231,0.44769,1,1,1h4v-3c0-1.65686,1.34314-3,3-3s3,1.34314,3,3v3h4c0.55231,0,1-0.44769,1-1v-9C18.89545,12,18,11.10455,18,10z">
                                                </path>
                                            </svg> </div>
                                            <div className="ms-4">
                                                <h5>High Standards in design !</h5>
                                                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
                                                    quos sint, officia vel ab perferendis, dolores placeat dolor aliquam
                                                    debitis eius, illum ullam ratione blanditiis fugiat omnis beatae
                                                    odio vitae!</p>
                                            </div>
                                        </div>
                                        <div className="d-flex mb-4">
                                            <div> <svg className="motto-icon" xmlns="http://www.w3.org/2000/svg"
                                                enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                                                <path fill="#94ebcb"
                                                    d="M18,20V3c-0.00005-0.55215-0.44769-0.99971-0.99984-0.99966c-0.17446,0.00002-0.34588,0.04569-0.49723,0.13247L13.5,3.85352l-3.00293-1.72071c-0.3079-0.17643-0.68624-0.17643-0.99414,0L6.5,3.85352L3.49707,2.13281c-0.47899-0.27466-1.08994-0.10903-1.3646,0.36996C2.04569,2.65411,2.00002,2.82554,2,3v17c0,1.10457,0.89543,2,2,2h16C18.89543,22,18,21.10457,18,20z">
                                                </path>
                                                <path fill="#28d193"
                                                    d="M21.999,14v6c0,1.10457-0.89543,2-2,2l0,0c-1.10457,0-2-0.89543-2-2v-8h2C21.10357,12,21.999,12.89543,21.999,14z M12,10H8c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h4c0.55229,0,1,0.44771,1,1S12.55229,10,12,10z M9,14H7c-0.55228,0-1-0.44771-1-1s0.44772-1,1-1h2c0.55229,0,1,0.44771,1,1S9.55229,14,9,14z M9,18H7c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1h2c0.55229,0,1,0.44772,1,1S9.55229,18,9,18z M13,14c-0.54662,0.00567-0.99433-0.43286-1-0.97947c-0.00143-0.13758,0.02585-0.27396,0.08008-0.40041c0.19341-0.50537,0.75987-0.75826,1.26524-0.56486c0.13406,0.0513,0.25521,0.13144,0.35488,0.23474c0.09659,0.09256,0.17161,0.20525,0.21972,0.33008C13.97119,12.74027,13.9984,12.86934,14,13C13.99622,13.55071,13.55071,13.99622,13,14z M13,18c-0.13064-0.00161-0.25971-0.02881-0.37988-0.08008c-0.12124-0.05058-0.23289-0.12162-0.33008-0.21c-0.09109-0.09725-0.16564-0.20875-0.2207-0.33008C12.02149,17.25901,11.99793,17.12994,12,17c0.00346-0.26481,0.10708-0.51849,0.29-0.71c0.23601-0.23439,0.57326-0.33583,0.89941-0.27051c0.06633,0.00976,0.13064,0.03021,0.19043,0.06055c0.06372,0.02159,0.12418,0.05182,0.17969,0.08984c0.0525,0.03702,0.10274,0.07713,0.15047,0.12012c0.18254,0.19176,0.28609,0.44528,0.29,0.71c0.00226,0.26594-0.1022,0.52169-0.29,0.71c-0.09735,0.08817-0.20896,0.15918-0.33008,0.21C13.25973,17.97124,13.13065,17.99842,13,18z">
                                                </path>
                                            </svg> </div>
                                            <div className="ms-4">
                                                <h5>Most anticipated techniques .</h5>
                                                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
                                                    quos sint, officia vel ab perferendis illum ullam ratione blanditiis
                                                    fugiat omnis beatae odio vitae!</p>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div> <svg className="motto-icon" xmlns="http://www.w3.org/2000/svg"
                                                data-name="Layer 1" viewBox="0 0 24 24">
                                                <path fill="#94ebcb"
                                                    d="M12,18a3.5,3.5,0,1,1,3.5-3.5A3.50424,3.50424,0,0,1,12,18Z">
                                                </path>
                                                <path fill="#28d193"
                                                    d="M14.64026,16.77179a3.452,3.452,0,0,1-5.28052,0A4.98821,4.98821,0,0,0,7,21a.99974.99974,0,0,0,1,1h8a.99974.99974,0,0,0,1-1A4.98821,4.98821,0,0,0,14.64026,16.77179Z">
                                                </path>
                                                <path fill="#94ebcb"
                                                    d="M21,12a.99554.99554,0,0,1-.66406-.25244L12,4.33789,3.66406,11.74756a.99991.99991,0,0,1-1.32812-1.49512l9-8a.99893.99893,0,0,1,1.32812,0l9,8A1,1,0,0,1,21,12Z">
                                                </path>
                                                <path fill="#bff3e0"
                                                    d="M12,4.33789,4,11.449V21a.99974.99974,0,0,0,1,1H8a.99974.99974,0,0,1-1-1,4.98821,4.98821,0,0,1,2.35974-4.22821l.00006.00006A3.46882,3.46882,0,0,1,8.5,14.5a3.5,3.5,0,0,1,7,0,3.46882,3.46882,0,0,1-.8598,2.27185l.00006-.00006A4.98821,4.98821,0,0,1,17,21a.99974.99974,0,0,1-1,1h3a.99974.99974,0,0,0,1-1V11.449Z">
                                                </path>
                                            </svg> </div>
                                            <div className="ms-4">
                                                <h5>Even rated customers ?</h5>
                                                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
                                                    quos sint, officia vel ab perferendis, dolores placeat dolor aliquam
                                                    debitis eius, illum ullam ratione blanditiis fugiat omnis beatae
                                                    odio vitae!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </div>
                        <div className="py-5 px-3 bg-light">
                            <Row className="row justify-content-center">
                                <Col xxl={8} xl={10}>
                                    <div className="text-dark fs-26 fw-semibold mb-4">
                                        <span className="about-heading">Our Team</span>
                                    </div>
                                    <Row>
                                        {Teamdata.map((idx) => (
                                            <Col xxl={3} xl={3} lg={6} md={6} sm={12} key={Math.random()}>
                                                <Card className="custom-card text-center">
                                                    <Card.Body>
                                                        <span className="avatar avatar-xl avatar-rounded mb-3">
                                                            <img src={idx.src} alt="" />
                                                        </span>
                                                        <p className="fw-semibold fs-15 mb-0">{idx.name}</p>
                                                        <span className="text-muted fs-12">{idx.mail}</span>
                                                    </Card.Body>
                                                    <Card.Footer>
                                                        <div className="btn-list">
                                                            <Button variant='' className="btn btn-sm btn-icon btn-primary-light btn-wave">
                                                                <i className="ri-facebook-line"></i>
                                                            </Button>
                                                            <Button variant='' className="btn btn-sm btn-icon btn-secondary-light btn-wave">
                                                                <i className="ri-twitter-line"></i>
                                                            </Button>
                                                            <Button variant='' className="btn btn-sm btn-icon btn-warning-light btn-wave">
                                                                <i className="ri-instagram-line"></i>
                                                            </Button>
                                                        </div>
                                                    </Card.Footer>
                                                </Card>
                                            </Col>
                                        ))}
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                        <div className="py-5 px-3 bg-primary rounded-bottom">
                            <Row className="row justify-content-center">
                                <Col xl={4}>
                                    <div className="text-center">
                                        <h6 className="fw-semibold text-fixed-white pb-4 mb-0">
                                            <span className="about-heading-white">For any queries</span>
                                        </h6>
                                        <p className="fw-semibold text-fixed-white">
                                            Feel free to contact us any time
                                        </p>
                                        <div className="input-group">
                                            <Form.Control type="text" placeholder="Ask Here" aria-label="Ask Here" aria-describedby="button-addon2" />
                                            <Button variant='' className="btn btn-success btn-wave" type="button" id="button-addon2">Send</Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Aboutus;
