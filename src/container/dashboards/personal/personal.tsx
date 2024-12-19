import { FC, Fragment } from 'react';
import { Button, Card, Col, Dropdown, Form, InputGroup, ProgressBar, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { Sleeptracking, Watertracking } from './personaldata';
import face9 from "../../../assets/images/faces/9.jpg";
import face1 from "../../../assets/images/faces/1.jpg";
import face2 from "../../../assets/images/faces/2.jpg";
import face3 from "../../../assets/images/faces/3.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import face6 from "../../../assets/images/faces/6.jpg";
import face7 from "../../../assets/images/faces/7.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import face10 from "../../../assets/images/faces/10.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face12 from "../../../assets/images/faces/12.jpg";
import face13 from "../../../assets/images/faces/13.jpg";
import face14 from "../../../assets/images/faces/14.jpg";
import { Link } from 'react-router-dom';

interface PersonalProps { }

const Personal: FC<PersonalProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Personal" heading="Dashboards" active="Personal" />
            <Row>
                <Col xxl={9} xl={12} className="">
                    <Row>
                        <Col xl={7}>
                            <Row>
                                <Col xl={6} lg={6} md={6} sm={6} className="col-12">
                                    <Card className="custom-card overflow-hidden">
                                        <Card.Body className="card-body p-0">
                                            <div className="p-4">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="mb-3">
                                                        <span className="d-block fw-semibold fs-15">Water Tracking</span>
                                                        <span className="text-muted fs-12 d-block">87 Points</span>
                                                    </div>
                                                    <div>
                                                        <span className="avatar bg-primary">
                                                            <i className="bi bi-droplet fs-18"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="mb-0">
                                                        <span className="fs-24 fw-semibold">8.1</span>
                                                        <span className="text-muted fs-12 ms-1">Lt</span>
                                                    </p>
                                                    <span className="text-muted">0.9 Lt more to reach goal</span>
                                                </div>
                                            </div>
                                            <div id="waterTrack">
                                                <Watertracking />
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={6} lg={6} md={6} sm={6} className="col-12">
                                    <Card className="custom-card overflow-hidden">
                                        <Card.Body className="card-body p-0">
                                            <div className="p-4">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="mb-3">
                                                        <span className="d-block fw-semibold fs-15">Sleep Tracking</span>
                                                        <span className="text-muted fs-12 d-block">54 Points</span>
                                                    </div>
                                                    <div>
                                                        <span className="avatar bg-success">
                                                            <i className="bi bi-alarm fs-18"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="mb-0">
                                                        <span className="fs-24 fw-semibold">5.2</span>
                                                        <span className="text-muted fs-12 ms-1">Hrs</span>
                                                    </p>
                                                    <span className="text-muted">2.8 Hrs more to reach goal</span>
                                                </div>
                                            </div>
                                            <div id="sleepTrack">
                                                <Sleeptracking />
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={5}>
                            <Card className="custom-card">
                                <Card.Body className="card-body p-0">
                                    <div className="d-flex flex-wrap align-items-center border-bottom border-block-end-dashed">
                                        <div className="px-4 py-3 flex-fill border-end border-inline-end-dashed">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <p className="mb-0 flex-fill fs-14 fw-semibold">Instagram</p>
                                                <div className="ms-1">
                                                    <span className="avatar bg-light text-danger"><i className="bi bi-instagram fs-16"></i></span>
                                                </div>
                                            </div>
                                            <p className="mb-2 fs-24 fw-semibold">121K</p>
                                            <div className="flex-between">
                                                <span className="text-muted fs-12">6 min ago</span>
                                                <span className="text-danger"><i className="bi bi-arrow-down-right me-1 fs-10"></i>1.5%</span>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 flex-fill border-bottom-dashed border-start-dashed">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <p className="mb-0 flex-fill fs-14 fw-semibold">Facebook</p>
                                                <div className="ms-2">
                                                    <span className="avatar bg-light text-warning"><i className="bi bi-facebook fs-16"></i></span>
                                                </div>
                                            </div>
                                            <p className="mb-2 fs-24 fw-semibold">2.1K</p>
                                            <div className="flex-between">
                                                <span className="text-muted fs-12">1 hr ago</span>
                                                <span className="text-warning"><i className="bi bi-arrow-down-right me-1 fs-10"></i>1.9%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-wrap align-items-center">
                                        <div className="px-4 py-3 flex-fill border-end border-inline-end-dashed">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <p className="mb-0 flex-fill fs-14 fw-semibold">Youtube</p>
                                                <div className="ms-1">
                                                    <span className="avatar bg-light text-info"><i className="bi bi-youtube fs-16"></i></span>
                                                </div>
                                            </div>
                                            <p className="mb-2 fs-24 fw-semibold">1.1M</p>
                                            <div className="flex-between">
                                                <span className="text-muted fs-12">1 day ago</span>
                                                <span className="text-info"><i className="bi bi-arrow-up-right me-1 fs-10"></i>1.9%</span>
                                            </div>
                                        </div>
                                        <div className="px-4 py-3 flex-fill border-start-dashed">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <p className="mb-0 flex-fill fs-14 fw-semibold">Twitter</p>
                                                <div className="ms-2">
                                                    <span className="avatar bg-light text-purple"><i className="bi bi-twitter fs-16"></i></span>
                                                </div>
                                            </div>
                                            <p className="mb-2 fs-24 fw-semibold">2.1K</p>
                                            <div className="flex-between">
                                                <span className="text-muted fs-12">1 week ago</span>
                                                <span className="text-purple"><i className="bi bi-arrow-up-right me-1 fs-10"></i>1.9%</span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Row>
                                <Col xl={12}>
                                    <Card className="custom-card">
                                        <Card.Body>
                                            <div className="d-flex justify-content-between mb-4">
                                                <div className="me-1">
                                                    <h6 className="fs-15 mg-b-3">Primary Account</h6>
                                                    <Link to="#" className="fs-12 text-primary op-8">Change<i className="bi bi-box-arrow-up-right fs-11 ms-1"></i></Link>
                                                </div>
                                                <div className="min-w-fit-content">
                                                    <div className="avatar bg-primary-transparent">
                                                        <i className="ri-paypal-fill fs-18"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="fs-24 fw-semibold">$1,29,389.00</p>
                                            <p className="mb-1 fs-14">Sarah Jahn SP</p>
                                            <div className="d-flex justify-content-between text-muted">
                                                <span>XXXX XXXX XXXX 1116</span>
                                                <span>12/24</span>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={12}>
                                    <Card className="custom-card">
                                        <Card.Header className="justify-content-between">
                                            <Card.Title>Quick Transfer</Card.Title>
                                            <Link to="#" className="text-primary">View History<i className="bi bi-box-arrow-up-right fs-11 ms-2"></i></Link>
                                        </Card.Header>
                                        <Card.Body>
                                            <div className="avatar-list-stacked mb-4">
                                                <span className="avatar avatar-rounded">
                                                    <img src={face2} alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src={face8} alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src={face2} alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src={face10} alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src={face4} alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src={face13} alt="img" />
                                                </span>
                                                <Link aria-label="anchor" className="avatar bg-light text-default avatar-rounded" to="#">
                                                    <i className="ri-arrow-right-s-line fs-18"></i>
                                                </Link>
                                            </div>
                                            <div className="mt-2">
                                                <div className="mt-2">
                                                    <label className="text-muted mb-1">Send / Receive</label>
                                                    <InputGroup>
                                                        <InputGroup.Text className="">Send To</InputGroup.Text>
                                                        <Form.Control type="text" defaultValue="11167731611" aria-label="First name" className="form-control" />
                                                        <Button variant='' className="btn btn-light" type="button">Check</Button>
                                                    </InputGroup>
                                                    <label className="text-success fs-12">Say Hii</label>
                                                </div>
                                                <InputGroup className="mt-3">
                                                    <InputGroup.Text className="">Amount</InputGroup.Text>
                                                    <Form.Control type="text" defaultValue="2000" aria-label="First name" className="form-control" />
                                                </InputGroup>
                                            </div>
                                            <div className="d-flex gap-3 mt-4">
                                                <Button type="button" aria-label="button" className="btn btn-icon btn-wave btn-primary-light"><i className="bi bi-arrow-down-up"></i></Button>
                                                <Button type="button" className="btn btn-primary btn-wave flex-fill">Proceed To Pay</Button>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={8} className="col-xl-8">
                            <Row>
                                <Col xl={12}>
                                    <Card className="custom-card">
                                        <Card.Header>
                                            <Card.Title>
                                                Discover
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <div className="row gy-sm-0 gy-3">
                                                <Col xxl={2} xl={2} lg={2} sm={2} className="col-4 text-center">
                                                    <Link aria-label="anchor" to="#" className="btn btn-info-light border-0 px-4 py-3 lh-1 rounded">
                                                        <i className="bi bi-cash-coin fs-22"></i>
                                                    </Link>
                                                    <Link to="#" className="d-block pt-2 text-muted fw-semibold">Bills</Link>
                                                </Col>
                                                <Col xxl={2} xl={2} lg={2} sm={2} className="col-4 text-center">
                                                    <Link aria-label="anchor" to="#" className="btn btn-primary-light border-0 px-4 py-3 lh-1 rounded">
                                                        <i className="bi bi-shop-window fs-22"></i>
                                                    </Link>
                                                    <Link to="#" className="d-block pt-2 text-muted fw-semibold">Shopping</Link>
                                                </Col>
                                                <Col xxl={2} xl={2} lg={2} sm={2} className="col-4 text-center">
                                                    <Link aria-label="anchor" to="#" className="btn btn-warning-light border-0 px-4 py-3 lh-1 rounded">
                                                        <i className="bi bi-compass fs-22"></i>
                                                    </Link>
                                                    <Link to="#" className="d-block pt-2 text-muted fw-semibold">Travel</Link>
                                                </Col>
                                                <Col xxl={2} xl={2} lg={2} sm={2} className="col-4 text-center">
                                                    <Link aria-label="anchor" to="#" className="btn btn-secondary-light border-0 px-4 py-3 lh-1 rounded">
                                                        <i className="bi bi-gift fs-22"></i>
                                                    </Link>
                                                    <Link to="#" className="d-block pt-2 text-muted fw-semibold">Food</Link>
                                                </Col>
                                                <Col xxl={2} xl={2} lg={2} sm={2} className="col-4 text-center">
                                                    <Link aria-label="anchor" to="#" className="btn btn-danger-light border-0 px-4 py-3 lh-1 rounded">
                                                        <i className="bi bi-currency-bitcoin fs-22"></i>
                                                    </Link>
                                                    <Link to="#" className="d-block pt-2 text-muted fw-semibold">Stocks</Link>
                                                </Col>
                                                <Col xxl={2} xl={2} lg={2} sm={2} className="col-4 text-center">
                                                    <Link aria-label="anchor" to="#" className="btn btn-light border-0 px-4 py-3 lh-1 rounded">
                                                        <i className="bi bi-three-dots fs-22"></i>
                                                    </Link>
                                                    <Link to="#" className="d-block pt-2 text-muted fw-semibold">Others</Link>
                                                </Col>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={6}>
                                    <Card className="custom-card">
                                        <Card.Header className="justify-content-between">
                                            <Card.Title>
                                                Upcoming Events
                                            </Card.Title>
                                            <Button variant='' type="button" className="btn btn-sm btn-light">View All</Button>
                                        </Card.Header>
                                        <Card.Body>
                                            <ul className="list-unstyled mb-0 personal-upcoming-events">
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light">
                                                                <i className="bi bi-calendar2-heart fs-16 text-primary"></i>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span>Meeting with <span className="text-primary fw-semibold">Umar Xai</span></span>
                                                            <span className="d-block text-muted fs-12">2 Hours</span>
                                                        </div>
                                                        <div>
                                                            <span className="badge bg-primary-transparent">11-06-2023</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded">
                                                                <img src={face2} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span><span className="text-primary fw-semibold">Shin Map</span> Birthday Party</span>
                                                            <span className="d-block text-muted fs-12">5 Hours</span>
                                                        </div>
                                                        <div>
                                                            <span className="badge bg-success-transparent">15-06-2023</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light">
                                                                <i className="bi bi-compass fs-16 text-pink"></i>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span>Holiday Trip To Italy</span>
                                                            <span className="d-block text-muted fs-12">1 Week</span>
                                                        </div>
                                                        <div>
                                                            <span className="badge bg-danger-transparent">20-06-2023</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light">
                                                                <i className="bi bi-balloon-heart fs-16 text-success"></i>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span>Wedding Anniversary</span>
                                                            <span className="d-block text-muted fs-12">1 Day</span>
                                                        </div>
                                                        <div>
                                                            <span className="badge bg-secondary-transparent">24-07-2023</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded">
                                                                <img src={face7} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span>Meeting with <span className="text-primary fw-semibold">Irav Ert</span></span>
                                                            <span className="d-block text-muted fs-12">45 Minutes</span>
                                                        </div>
                                                        <div>
                                                            <span className="badge bg-warning-transparent">15-06-2023</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={6}>
                                    <Card className="custom-card">
                                        <Card.Header className="justify-content-between">
                                            <Card.Title>
                                                Recent Messages
                                            </Card.Title>
                                            <Button type="button" variant='' className="btn btn-light btn-sm btn-wave">View All</Button>
                                        </Card.Header>
                                        <Card.Body>
                                            <div className="avatar-list-stacked mb-4">
                                                <span className="avatar avatar-rounded">
                                                    <img src={face1} alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src={face9} alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src={face3} alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src={face11} alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src={face6} alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src={face14} alt="img" />
                                                </span>
                                                <Link aria-label="anchor" className="avatar bg-light text-default avatar-rounded" to="#">
                                                    <i className="ri-arrow-right-s-line fs-18"></i>
                                                </Link>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="fw-semibold">Messages</div>
                                                <div><i className="ri-check-double-line me-1 align-middle text-muted d-inline-flex"></i>Mark as read</div>
                                            </div>
                                            <div className="mt-4">
                                                <ul className="list-unstyled mb-0 personal-messages-list">
                                                    <li>
                                                        <div className="d-flex flex-wrap align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded">
                                                                    <img src={face12} alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <span className="fw-semibold d-block">Elin Misk</span>
                                                                <span className="fs-12 text-muted d-block text-truncate message">Hello there! How are you doing? Call me when...</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="d-block text-muted fs-12">2 min</span>
                                                                <span className="badge bg-primary rounded-pill">2</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex flex-wrap align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded">
                                                                    <img src={face2} alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <span className="fw-semibold d-block">Shakira Shen</span>
                                                                <span className="fs-12 text-muted d-block text-truncate message">I would like to discuss about that assets...</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="d-block text-muted fs-12">9:43Pm</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex flex-wrap align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar bg-primary-transparent avatar-rounded">
                                                                    <i className="ri-user-line fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="flex-fill">
                                                                <span className="fw-semibold d-block">Sebastian</span>
                                                                <span className="fs-12 text-muted d-block text-truncate message">Shall we go to the cafe at downtown...</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="d-block text-muted fs-12">Yesterday</span>
                                                                <span className="badge bg-primary rounded-pill">2</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3} xl={12}>
                    <Row>
                        <Col xxl={12} xl={4}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex align-items-top justify-content-between mb-4">
                                        <div>
                                            <span className="d-block fs-15 fw-semibold">My Profile</span>
                                            <span className="d-block fs-12 text-muted">67% Completed - <Link to="#" className="text-center text-primary">Click Here<i className="bi bi-box-arrow-up-right fs-10 ms-2 align-middle"></i></Link></span>
                                        </div>
                                        <Dropdown>
                                            <Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown">
                                                <i className="fe fe-more-vertical"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#">Week</Dropdown.Item>
                                                <Dropdown.Item href="#">Month</Dropdown.Item>
                                                <Dropdown.Item href="#">Year</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <div className="text-center mb-4">
                                        <div className="mb-3">
                                            <span className="avatar avatar-xxl avatar-rounded circle-progress p-1">
                                                <img src={face9} alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <h5 className="fw-semibold mb-0">Json Taylor</h5>
                                            <span className="fs-13 text-muted">jsontaylor345@gmail.com</span>
                                        </div>
                                    </div>
                                    <div className="btn-list text-center">
                                        <Link to={`${import.meta.env.BASE_URL}pages/profile/`} className="btn btn-primary-light btn-sm">
                                            Edit Profile
                                        </Link>
                                        <Link to={`${import.meta.env.BASE_URL}pages/profile/`} className="btn btn-primary btn-sm">
                                            View Profile
                                        </Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={12} xl={4}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>My Goals</Card.Title>
                                    <Button type="button" variant='' className="btn btn-sm btn-light">View All</Button>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="list-unstyled personal-goals-list mb-0">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-rounded bg-secondary-transparent">
                                                        <i className="bi bi-globe2 fs-18"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <span className="d-block fw-semibold">Maldives Trip</span>
                                                        <span className="d-block text-secondary">80%</span>
                                                    </div>
                                                    <ProgressBar striped variant='secondary' className="progress progress-animate progress-xs" now={80} />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-rounded bg-warning-transparent">
                                                        <i className="bi bi-balloon-heart fs-18"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <span className="d-block fw-semibold">Savings For Birthday</span>
                                                        <span className="d-block text-warning">90%</span>
                                                    </div>
                                                    <ProgressBar striped variant='warning' className="progress progress-animate progress-xs" now={90} />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-rounded bg-primary-transparent">
                                                        <i className="bi bi-lightning fs-18"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <span className="d-block fw-semibold">Join Guitar Class</span>
                                                        <span className="d-block text-primary">80%</span>
                                                    </div>
                                                    <ProgressBar striped variant='primary' className="progress progress-animate progress-xs" now={40} />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={12} xl={4}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Favourite Contacts
                                    </Card.Title>
                                    <Button type="button" variant='' className="btn btn-sm btn-light">View All</Button>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="list-unstyled personal-favourite-contacts mb-0">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar">
                                                        <img src={face2} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="fw-semibold d-block mb-1">Kiara Advain</span>
                                                    <span className="text-muted d-block fs-12">+(72)-8765700876</span>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <Link aria-label="anchor" to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                    <Dropdown className=''>
                                                        <Dropdown.Toggle variant='' aria-label="anchor" className="text-muted no-caret p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots fs-14"></i></Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item className="mb-0" href="#">Action</Dropdown.Item>
                                                            <Dropdown.Item className="mb-0" href="#">Another Action</Dropdown.Item>
                                                            <Dropdown.Item className="mb-0" href="#">Something Else Here</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar">
                                                        <img src={face9} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="fw-semibold d-block mb-1">Jason Mama</span>
                                                    <span className="text-muted d-block fs-12">+(72)-234226333</span>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <Link aria-label="anchor" to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                    <Dropdown>
                                                        <Dropdown.Toggle aria-label="anchor" variant='' className="text-muted no-caret p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots fs-14"></i></Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item className="mb-0" href="#">Action</Dropdown.Item>
                                                            <Dropdown.Item className="mb-0" href="#">Another Action</Dropdown.Item>
                                                            <Dropdown.Item className="mb-0" href="#">Something Else Here</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2">
                                                    <span className="avatar">
                                                        <img src={face10} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill">
                                                    <span className="fw-semibold d-block mb-1">Stuart Edward</span>
                                                    <span className="text-muted d-block fs-12">+(11)-16743256</span>
                                                </div>
                                                <div className="d-flex align-items-center">
                                                    <Link aria-label="anchor" to="#" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                    <Dropdown>
                                                        <Dropdown.Toggle aria-label="anchor" variant='' className="text-muted no-caret p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="bi bi-three-dots fs-14"></i></Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item className="mb-0" href="#">Action</Dropdown.Item>
                                                            <Dropdown.Item className="mb-0" href="#">Another Action</Dropdown.Item>
                                                            <Dropdown.Item className="mb-0" href="#">Something Else Here</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Personal;
