import { Fragment, useState } from 'react';
import { Button, Card, Col, Dropdown, Form, ListGroup, ProgressBar, Row, Table } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import { Candidatesdata, Recentemployers, Registersbycountry, Subscriptions, TopCompanies } from './jobsdata';
import face4 from "../../../assets/images/faces/4.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import face21 from "../../../assets/images/faces/21.jpg";
import PerfectScrollbar from 'react-perfect-scrollbar';

const Jobs = () => {
    // for User search function
    const [Data, setData] = useState(Recentemployers);

    const userdata: any = [];

    const myfunction = (idx: any) => {
        let Data;
        for (Data of Recentemployers) {
            if (Data.name[0] == " ") {
                Data.name = Data.name.trim();
            }
            if (Data.name.toLowerCase().includes(idx.toLowerCase())) {
                if (Data.name.toLowerCase().startsWith(idx.toLowerCase())) {
                    userdata.push(Data);
                }
            }

        }
        setData(userdata);
    };
    return (
        <Fragment>
            <Pageheader title="Jobs" heading="Dashboards" active="Jobs" />
            <Row>
                <Col xxl={6} xl={12}>
                    <Row className="row row-cols-12">
                        <div className="col">
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex align-items-top">
                                        <div className="me-3">
                                            <span className="avatar avatar-md p-2 bg-primary">
                                                <svg className="svg-white" xmlns="http://www.w3.org/2000/svg"
                                                    height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                                    <path
                                                        d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="d-flex mb-1 align-items-top justify-content-between">
                                                <h5 className="fw-semibold mb-0 lh-1">256</h5>
                                                <div className="text-danger fw-semibold"><i
                                                    className="ri-arrow-down-s-fill me-1 align-middle"></i>-1.05%</div>
                                            </div>
                                            <p className="mb-0 fs-10 op-7 text-muted fw-semibold">TOTAL EMPLOYERS</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex align-items-top">
                                        <div className="me-3">
                                            <span className="avatar avatar-md p-2 bg-secondary">
                                                <svg className="svg-white" xmlns="http://www.w3.org/2000/svg"
                                                    enableBackground="new 0 0 24 24" height="24px"
                                                    viewBox="0 0 24 24" width="24px" fill="#000000">
                                                    <rect fill="none" height="24" width="24" />
                                                    <g>
                                                        <path
                                                            d="M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14 c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14 c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9 c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61C18,15.21,17.32,14.13,16.24,13.65z M8.07,16 c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69H8.07z M12,8 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8 M12,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3 C15,7.34,13.66,6,12,6L12,6z" />
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="d-flex mb-1 align-items-top justify-content-between">
                                                <h5 className="fw-semibold mb-0 lh-1">4,026</h5>
                                                <div className="text-success fw-semibold"><i
                                                    className="ri-arrow-up-s-fill me-1 align-middle"></i>+0.40%</div>
                                            </div>
                                            <p className="mb-0 fs-10 op-7 text-muted fw-semibold">TOTAL CANDIDATES</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex align-items-top">
                                        <div className="me-3">
                                            <span className="avatar avatar-md p-2 bg-warning">
                                                <svg className="svg-white" xmlns="http://www.w3.org/2000/svg"
                                                    height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                                    <path
                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-.61.08-1.21.21-1.78L8.99 15v1c0 1.1.9 2 2 2v1.93C7.06 19.43 4 16.07 4 12zm13.89 5.4c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4z" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="d-flex mb-1 align-items-top justify-content-between">
                                                <h5 className="fw-semibold mb-0 lh-1">48</h5>
                                                <div className="text-success fw-semibold"><i
                                                    className="ri-arrow-up-s-fill me-1 align-middle"></i>+0.82%</div>
                                            </div>
                                            <p className="mb-0 fs-10 op-7 text-muted fw-semibold">TOTAL LOCATIONS</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex align-items-top">
                                        <div className="me-3">
                                            <span className="avatar avatar-md p-2 bg-success">
                                                <svg className="svg-white" xmlns="http://www.w3.org/2000/svg"
                                                    enableBackground="new 0 0 24 24" height="24px"
                                                    viewBox="0 0 24 24" width="24px" fill="#000000">
                                                    <g>
                                                        <rect fill="none" height="24" width="24" />
                                                    </g>
                                                    <g>
                                                        <g>
                                                            <path
                                                                d="M9,14c1.65,0,3-1.35,3-3s-1.35-3-3-3s-3,1.35-3,3S7.35,14,9,14z M9,10c0.54,0,1,0.46,1,1s-0.46,1-1,1s-1-0.46-1-1 S8.46,10,9,10z" />
                                                            <path
                                                                d="M22,3H2C0.9,3,0,3.9,0,5v14c0,1.1,0.9,2,2,2h20c1.1,0,1.99-0.9,1.99-2L24,5C24,3.9,23.1,3,22,3z M4.54,19 c1.1-1.22,2.69-2,4.46-2s3.36,0.78,4.46,2H4.54z M22,19h-6.08c-1.38-2.39-3.96-4-6.92-4s-5.54,1.61-6.92,4H2V5h20V19z" />
                                                            <polygon
                                                                points="15.78,11.15 17.25,10.3 17.25,12 18.75,12 18.75,10.3 20.22,11.15 20.97,9.85 19.5,9 20.97,8.15 20.22,6.85 18.75,7.7 18.75,6 17.25,6 17.25,7.7 15.78,6.85 15.03,8.15 16.5,9 15.03,9.85" />
                                                        </g>
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="d-flex mb-1 align-items-top justify-content-between">
                                                <h5 className="fw-semibold mb-0 lh-1">1,116</h5>
                                                <div className="text-success fw-semibold"><i
                                                    className="ri-arrow-up-s-fill me-1 align-middle"></i>+0.21%</div>
                                            </div>
                                            <p className="mb-0 fs-10 op-7 text-muted fw-semibold">TOTAL RECRUITERS</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex align-items-top">
                                        <div className="me-3">
                                            <span className="avatar avatar-md p-2 bg-pink">
                                                <svg className="svg-white" xmlns="http://www.w3.org/2000/svg"
                                                    height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                                    <path
                                                        d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="d-flex mb-1 align-items-top justify-content-between">
                                                <h5 className="fw-semibold mb-0 lh-1">1,468</h5>
                                                <div className="text-danger fw-semibold"><i
                                                    className="ri-arrow-down-s-fill me-1 align-middle"></i>-0.153%</div>
                                            </div>
                                            <p className="mb-0 fs-10 op-7 text-muted fw-semibold">TOTAL SUBSCRIPTIONS</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col">
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex align-items-top">
                                        <div className="me-3">
                                            <span className="avatar avatar-md p-2 bg-teal">
                                                <svg className="svg-white" xmlns="http://www.w3.org/2000/svg"
                                                    enableBackground="new 0 0 24 24" height="24px"
                                                    viewBox="0 0 24 24" width="24px" fill="#000000">
                                                    <g>
                                                        <rect fill="none" height="24" width="24" />
                                                        <g>
                                                            <path
                                                                d="M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z" />
                                                        </g>
                                                        <path
                                                            d="M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z" />
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <div className="d-flex mb-1 align-items-top justify-content-between">
                                                <h5 className="fw-semibold mb-0 lh-1">34%</h5>
                                                <div className="text-success fw-semibold"><i
                                                    className="ri-arrow-up-s-fill me-1 align-middle"></i>+0.165%</div>
                                            </div>
                                            <p className="mb-0 fs-10 op-7 text-muted fw-semibold">RESSUME UPLOAD RATIO</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <Col xl={12}>
                            <Card className="custom-card overflow-hidden">
                                <div className="card-header justify-content-between">
                                    <Card.Title>Subscriptions Overview</Card.Title>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='' className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown"
                                            aria-expanded="false">
                                            View All<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu role="menu">
                                            <Dropdown.Item href="#">Today</Dropdown.Item>
                                            <Dropdown.Item href="#">This Week</Dropdown.Item>
                                            <Dropdown.Item href="#">Last Week</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <Card.Body className="p-0">
                                    <div className="row border-bottom border-block-end-dashed">
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                            <div className="p-3 border-sm-end border-inline-end-dashed text-sm-start text-center">
                                                <p className="fs-20 fw-semibold mb-0">1,117</p>
                                                <p className="mb-0 text-muted">Total Subscriptions</p>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                            <div className="p-3 border-sm-end border-inline-end-dashed text-sm-start text-center">
                                                <p className="fs-20 fw-semibold mb-0"><span className="basic-subscription">742</span></p>
                                                <p className="mb-0 text-muted">Basic Subscriptions</p>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                                            <div className="p-3 text-sm-start text-center">
                                                <p className="fs-20 fw-semibold mb-0"><span className="pro-subscription">259</span></p>
                                                <p className="mb-0 text-muted">Pro Subscriptions</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="subscriptionOverview" className="px-3 mt-sm-0 mt-3">
                                        <Subscriptions />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={6} xl={12}>
                    <Row>
                        <Col xxl={6} xl={6}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Recent Jobs
                                    </Card.Title>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='' className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                            View All<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu role="menu">
                                            <Dropdown.Item href="#">Today</Dropdown.Item>
                                            <Dropdown.Item href="#">This Week</Dropdown.Item>
                                            <Dropdown.Item href="#">Last Week</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <ListGroup className="list-group list-group-flush" id="recent-jobs">
                                        <PerfectScrollbar>
                                            <ListGroup.Item className="list-group-item border-top-0 border-start-0 border-end-0">
                                                <Link to="#">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-md avatar-rounded bg-primary-transparent">
                                                                AC
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-semibold">Ui Developer</p>
                                                            <p className="fs-12 text-muted mb-0">Achies - 12 hrs ago</p>
                                                        </div>
                                                        <div className="text-end">
                                                            <p className="mb-0 fs-12">Full Time</p>
                                                            <span className="badge bg-success-transparent">Fresher</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </ListGroup.Item>
                                            <ListGroup.Item className="list-group-item border-start-0 border-end-0">
                                                <Link to="#">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-md avatar-rounded bg-secondary-transparent">
                                                                SI
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-semibold">AWS Engineer</p>
                                                            <p className="fs-12 text-muted mb-0">Siachles - 2 hrs ago</p>
                                                        </div>
                                                        <div className="text-end">
                                                            <p className="mb-0 fs-12">Part Time</p>
                                                            <span className="badge bg-info-transparent">+1 yrs - Experience</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </ListGroup.Item>
                                            <ListGroup.Item className="list-group-item border-start-0 border-end-0">
                                                <Link to="#">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-md avatar-rounded bg-success">
                                                                LS
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-semibold">React Developer</p>
                                                            <p className="fs-12 text-muted mb-0">LifeSpace - 6 hrs ago</p>
                                                        </div>
                                                        <div className="text-end">
                                                            <p className="mb-0 fs-12 text-primary fw-semibold">Freelancer</p>
                                                            <span className="badge bg-success-transparent">Fresher</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </ListGroup.Item>
                                            <ListGroup.Item className="list-group-item border-start-0 border-end-0">
                                                <Link to="#">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-md avatar-rounded bg-warning-transparent">
                                                                MS
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-semibold">Angular Developer</p>
                                                            <p className="fs-12 text-muted mb-0">MegaSoft - 14 hrs ago</p>
                                                        </div>
                                                        <div className="text-end">
                                                            <p className="mb-0 fs-12">Full Time</p>
                                                            <span className="badge bg-info-transparent">+2 yrs - Experience</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </ListGroup.Item>
                                            <ListGroup.Item className="list-group-item border-start-0 border-end-0">
                                                <Link to="#">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-md avatar-rounded bg-danger-transparent">
                                                                J
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-semibold">UI Tester</p>
                                                            <p className="fs-12 text-muted mb-0">Joggle - 2 days ago</p>
                                                        </div>
                                                        <div className="text-end">
                                                            <p className="mb-0 fs-12">Full Time</p>
                                                            <span className="badge bg-info-transparent">+3 yrs - Experience</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </ListGroup.Item>
                                            <ListGroup.Item className="list-group-item border-start-0 border-end-0 border-bottom-0">
                                                <Link to="#">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-md avatar-rounded bg-info-transparent">
                                                                NL
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="mb-0 fw-semibold">Php - Laravel Develope</p>
                                                            <p className="fs-12 text-muted mb-0">Nirlog - 2 days ago</p>
                                                        </div>
                                                        <div className="text-end">
                                                            <p className="mb-0 fs-12">Part Time Time</p>
                                                            <span className="badge bg-success-transparent">Fresher</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </ListGroup.Item>
                                        </PerfectScrollbar>
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6} xl={6}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className="card-header justify-content-between">
                                    <Card.Title>Candidates</Card.Title>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='' className="p-2 fs-12 text-muted no-caret"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            View All<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu role="menu">
                                            <Dropdown.Item href="#">Today</Dropdown.Item>
                                            <Dropdown.Item href="#">This Week</Dropdown.Item>
                                            <Dropdown.Item href="#">Last Week</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <div id="candidates-chart" className="p-3">
                                        <Candidatesdata />
                                    </div>
                                    <div className="row row-cols-12 border-top border-block-start-dashed">
                                        <div className="col">
                                            <div className="p-3 border-end border-inline-end-dashed">
                                                <div className="text-muted fs-12 text-center mb-1">Male Candidates
                                                </div>
                                                <div className="d-flex justify-content-center align-items-center"> <span
                                                    className="me-3 fs-26 fw-semibold">1,234</span> <span
                                                        className="text-success fw-semibold"><i
                                                            className="ri-arrow-up-s-fill align-middle me-1"></i>0.23%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="p-3">
                                                <div className="text-muted fs-12 text-center mb-1">Female Candidates
                                                </div>
                                                <div className="d-flex justify-content-center align-items-center"> <span
                                                    className="me-3 fs-26 fw-semibold">1,754</span> <span
                                                        className="text-danger fw-semibold"><i
                                                            className="ri-arrow-down-s-fill align-middle me-1"></i>0.11%</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={12} xl={12}>
                            <Card className="custom-card">
                                <Card.Header className=" justify-content-between">
                                    <Card.Title>
                                        Recent Recruiter Registrations
                                    </Card.Title>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='' className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                            View All<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu role="menu">
                                            <Dropdown.Item href="#">Today</Dropdown.Item>
                                            <Dropdown.Item href="#">This Week</Dropdown.Item>
                                            <Dropdown.Item href="#">Last Week</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Header>
                                <Card.Body className=" p-0 recruiter">
                                    <div className="row row-cols-12">
                                        <div className="col">
                                            <div className="p-3 border-md-end border-inline-end-dashed">
                                                <div className="d-flex align-items-top mb-4">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face4} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <div className="recent-recruiter">
                                                            <Link to="#" className="fw-semibold mb-0 text-truncate">Hr@Spruko</Link>
                                                            <p className="mb-0 fs-12 text-muted text-truncate">hr.spruko@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <Button variant='' aria-label="button" type="button" className="btn btn-icon btn-sm btn-light btn-wave">
                                                            <i className="ri-arrow-right-s-line"></i>
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-top justify-content-between mb-2">
                                                    <div className="text-muted fs-12">
                                                        Vacancies
                                                    </div>
                                                    <div className="fw-semibold">
                                                        07
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-top justify-content-between mb-0">
                                                    <div className="text-muted fs-12">
                                                        Position
                                                    </div>
                                                    <div>
                                                        <span className="badge bg-info-transparent">Aws Engineer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="p-3 border-md-end border-inline-end-dashed">
                                                <div className="d-flex align-items-top mb-4">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face21} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <div className="recent-recruiter">
                                                            <Link to="#" className="fw-semibold mb-0 text-truncate">Hr@Nicero</Link>
                                                            <p className="mb-0 fs-12 text-muted text-truncate">nicero.help@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <Button variant='' type="button" aria-label="button" className="btn btn-icon btn-sm btn-light btn-wave">
                                                            <i className="ri-arrow-right-s-line"></i>
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-top justify-content-between mb-2">
                                                    <div className="text-muted fs-12">
                                                        Vacancies
                                                    </div>
                                                    <div className="fw-semibold">
                                                        16
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-top justify-content-between mb-0">
                                                    <div className="text-muted fs-12">
                                                        Position
                                                    </div>
                                                    <div>
                                                        <span className="badge bg-warning-transparent">React Developer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="p-3">
                                                <div className="d-flex align-items-top mb-4">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face15} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <div className="recent-recruiter">
                                                            <Link to="#" className="fw-semibold mb-0 text-truncate">JosephSmith</Link>
                                                            <p className="mb-0 fs-12 text-muted text-truncate">josephsmith@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <Button variant='' type="button" aria-label="button" className="btn btn-icon btn-sm btn-light btn-wave">
                                                            <i className="ri-arrow-right-s-line"></i>
                                                        </Button>
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-top justify-content-between mb-2">
                                                    <div className="text-muted fs-12">
                                                        Vacancies
                                                    </div>
                                                    <div className="fw-semibold">
                                                        32
                                                    </div>
                                                </div>
                                                <div className="d-flex align-items-top justify-content-between mb-0">
                                                    <div className="text-muted fs-12">
                                                        Position
                                                    </div>
                                                    <div>
                                                        <span className="badge bg-primary-transparent">UI Developer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header>
                            <Card.Title>
                                Registers By Country
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body p-0">
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Country</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Total Registers</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Registersbycountry.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-xs avatar-rounded">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="fw-semibold">
                                                                {idx.city}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>{idx.date}</td>
                                                <td>{idx.total}</td>
                                                <td>
                                                    <Button variant='' type="button" className="btn btn-success-light btn-wave btn-sm">View</Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={5}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Top Companies
                            </Card.Title>
                            <Dropdown>
                                <Dropdown.Toggle variant='' className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                    View All<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu role="menu">
                                    <Dropdown.Item href="#">Today</Dropdown.Item>
                                    <Dropdown.Item href="#">This Week</Dropdown.Item>
                                    <Dropdown.Item href="#">Last Week</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body className="card-body p-0">
                            <div className="table-responsive">
                                <Table className="table table-hover text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Subscription</th>
                                            <th scope="col">Total Employees</th>
                                            <th scope="col">Recruiter Since</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {TopCompanies.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md p-1 bg-light avatar-rounded">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="fw-semibold mb-0">{idx.text1}</p>
                                                            <p className="fs-12 text-muted mb-0">Remote/Onsite</p>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>
                                                    <span className={`badge bg-${idx.color}`}>{idx.text2}</span>
                                                </td>
                                                <td>{idx.total}</td>
                                                <td>{idx.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3} className="col-xl-3">
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Acquisitions
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ProgressBar className="progress progress-lg mb-4" >
                                <ProgressBar variant="primary" now={52} key={1} label={`${52}%`} />
                                <ProgressBar variant="secondary" now={12} key={2} label={`${12}%`} />
                                <ProgressBar variant="success" now={16} key={3} label={`${16}%`} />
                                <ProgressBar variant="warning" now={12} key={4} label={`${12}%`} />
                                <ProgressBar variant="danger" now={8} key={5} label={`${8}%`} />
                            </ProgressBar>
                            <ListGroup>
                                <ListGroup.Item>
                                    Total Applications
                                    <span className="badge float-end bg-primary-transparent">1,982</span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Recruited
                                    <span className="badge float-end bg-secondary-transparent">214</span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Short Listed
                                    <span className="badge float-end bg-success-transparent">262</span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Rejected
                                    <span className="badge float-end bg-warning-transparent">395</span>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Blocked
                                    <span className="badge float-end bg-danger-transparent">79</span>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Recent Employers
                            </Card.Title>
                            <div className="d-flex">
                                <div className="me-3">
                                    <Form.Control className="form-control form-control-sm" type="text" onChange={(ele) => { myfunction(ele.target.value); }}
                                        placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle variant='primary' className="btn  btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu role="menu">
                                        <Dropdown.Item href="#">New</Dropdown.Item>
                                        <Dropdown.Item href="#">Popular</Dropdown.Item>
                                        <Dropdown.Item href="#">Relevant</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table bordered hover className="table text-nowrap  border ">
                                    <thead>
                                        <tr>
                                            <th scope="row" className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." /></th>
                                            <th scope="col">Employer</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Role</th>
                                            <th scope="col">Mail</th>
                                            <th scope="col">Location</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row" className="ps-4"><input className="form-check-input" type="checkbox" id={idx.id} defaultChecked={idx.checked === 'defaultChecked'} value="" aria-label="..." /></th>
                                                <td>
                                                    <div className="d-flex align-items-center fw-semibold">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src={idx.src} alt="img" />
                                                        </span>{idx.name}
                                                    </div>
                                                </td>
                                                <td>{idx.place}</td>
                                                <td><span className={`badge bg-${idx.color}`}>{idx.role}</span></td>
                                                <td>{idx.mail}</td>
                                                <td>
                                                    <div className="d-inline-flex align-items-center">
                                                        <i className="ri-map-pin-fill text-muted fs-10"></i>
                                                        <span className="ms-1">{idx.location}</span>
                                                    </div>
                                                </td>
                                                <td>{idx.date}</td>
                                                <td>
                                                    <div className="hstack gap-2 fs-15">
                                                        <Link aria-label="anchor" to="#" className="btn btn-icon btn-wave waves-effect waves-light btn-sm btn-success-light"><i className="ri-download-2-line"></i></Link>
                                                        <Link aria-label="anchor" to="#" className="btn btn-icon btn-wave waves-effect waves-light btn-sm btn-primary-light"><i className="ri-edit-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="pagination mb-0">
                                            <li className="page-item disabled">
                                                <Link className="page-link" to="#">
                                                    Prev
                                                </Link>
                                            </li>
                                            <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link text-primary" to="#">
                                                    next
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Jobs;
