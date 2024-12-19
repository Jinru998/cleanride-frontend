import { FC, Fragment } from 'react';
import { Card, Col, Dropdown, Pagination, ProgressBar, Row, Table } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import { ProjectAnalysis, Teammembers1, Teammembers2, Teammembers3, Teammembers4, Teammembers5 } from './projectsdata';
import media86 from "../../../assets/images/media/media-86.svg";
import face1 from "../../../assets/images/faces/1.jpg";
import face2 from "../../../assets/images/faces/2.jpg";
import face3 from "../../../assets/images/faces/3.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face6 from "../../../assets/images/faces/6.jpg";
import face7 from "../../../assets/images/faces/7.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import face9 from "../../../assets/images/faces/9.jpg";
import face10 from "../../../assets/images/faces/10.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face12 from "../../../assets/images/faces/12.jpg";
import face13 from "../../../assets/images/faces/13.jpg";
import face14 from "../../../assets/images/faces/14.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import face16 from "../../../assets/images/faces/16.jpg";

interface ProjectsProps { }

const Projects: FC<ProjectsProps> = () => (
    <Fragment>

        <Pageheader title="Projects" heading="Dashboards" active="Projects" />
        <Row>
            <Col xxl={9}>
                <Row>
                    <Col xxl={5}>
                        <Row>
                            <Col sm={6}>
                                <Card className="custom-card">
                                    <Card.Body className="card-body d-flex justify-content-between align-items-center">
                                        <div>
                                            <p className="mb-2">Completed Projects</p>
                                            <h4 className="mb-0 fw-semibold mb-2">109</h4>
                                            <span className="badge bg-success-transparent">1.5% <i className="ti ti-trending-up"></i></span><span className="text-muted fs-11 ms-1">this month</span>
                                        </div>
                                        <div>
                                            <span className="avatar avatar-md bg-primary p-2">
                                                <i className="ti ti-file-check fs-20 op-7"></i>
                                            </span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={6}>
                                <Card className="custom-card">
                                    <Card.Body className="card-body d-flex justify-content-between align-items-center">
                                        <div>
                                            <p className="mb-2">Overdue Projects</p>
                                            <h4 className="mb-0 fw-semibold mb-2">18</h4>
                                            <span className="badge bg-danger-transparent">0.23% <i className="ti ti-trending-down"></i></span><span className="text-muted fs-11 ms-1">this month</span>
                                        </div>
                                        <div>
                                            <span className="avatar avatar-md bg-secondary p-2">
                                                <i className="ti ti-briefcase fs-20 op-7"></i>
                                            </span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={6}>
                                <Card className="custom-card">
                                    <Card.Body className="card-body d-flex justify-content-between align-items-center">
                                        <div>
                                            <p className="mb-2">Total Projects</p>
                                            <h4 className="mb-0 fw-semibold mb-2">389</h4>
                                            <span className="badge bg-success-transparent">0.67% <i className="ti ti-trending-up"></i></span><span className="text-muted fs-11 ms-1">this month</span>
                                        </div>
                                        <div>
                                            <span className="avatar avatar-md bg-success p-2">
                                                <i className="ti ti-album fs-20 op-7"></i>
                                            </span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col sm={6}>
                                <Card className="custom-card">
                                    <Card.Body className="card-body d-flex justify-content-between align-items-center">
                                        <div>
                                            <p className="mb-2">Pending Projects</p>
                                            <h4 className="mb-0 fw-semibold mb-2">227</h4>
                                            <span className="badge bg-success-transparent">0.53% <i className="ti ti-trending-up"></i></span><span className="text-muted fs-11 ms-1">this month</span>
                                        </div>
                                        <div>
                                            <span className="avatar avatar-md bg-warning p-2">
                                                <i className="ti ti-chart-pie-2 fs-20 op-7"></i>
                                            </span>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Header className="card-header justify-content-between">
                                        <Card.Title>
                                            Project Analysis
                                        </Card.Title>
                                        <Dropdown>
                                            <Dropdown.Toggle variant='' className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown">
                                                View All<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu" role="menu">
                                                <Dropdown.Item href="#">Download</Dropdown.Item>
                                                <Dropdown.Item href="#">Import</Dropdown.Item>
                                                <Dropdown.Item href="#">Export</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Card.Header>
                                    <Card.Body>
                                        <div id="projectAnalysis">
                                            <ProjectAnalysis />
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <div className="col-xxl-4">
                        <Row>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Header className="card-header justify-content-between">
                                        <Card.Title>
                                            Team Members
                                        </Card.Title>
                                        <Dropdown>
                                            <Dropdown.Toggle variant='' className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                View All<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu" role="menu">
                                                <Dropdown.Item href="#">Download</Dropdown.Item>
                                                <Dropdown.Item href="#">Import</Dropdown.Item>
                                                <Dropdown.Item href="#">Export</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </Card.Header>
                                    <Card.Body>
                                        <ul className="list-unstyled team-members-card mb-0">
                                            <li>
                                                <Link to="#">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-top">
                                                            <span className="avatar avatar-sm lh-1">
                                                                <img src={face2} alt="" />
                                                            </span>
                                                            <div className="ms-3 lh-1">
                                                                <span className="fw-semibold">Melissa Smith</span>
                                                                <span className="d-block fs-11 text-muted mt-2">Ui Developer</span>
                                                            </div>
                                                        </div>
                                                        <div id="user1">
                                                            <Teammembers1 />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-top">
                                                            <span className="avatar avatar-sm lh-1">
                                                                <img src={face12} alt="" />
                                                            </span>
                                                            <div className="ms-3 lh-1">
                                                                <span className="fw-semibold">Jason Momoa</span>
                                                                <span className="d-block fs-11 text-muted mt-2">React Developer</span>
                                                            </div>
                                                        </div>
                                                        <div id="user2">
                                                            <Teammembers2 />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-top">
                                                            <span className="avatar avatar-sm lh-1">
                                                                <img src={face1} alt="" />
                                                            </span>
                                                            <div className="ms-3 lh-1">
                                                                <span className="fw-semibold">Kamala Hars</span>
                                                                <span className="d-block fs-11 text-muted mt-2">Testing</span>
                                                            </div>
                                                        </div>
                                                        <div id="user3">
                                                            <Teammembers3 />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-top">
                                                            <span className="avatar avatar-sm lh-1">
                                                                <img src={face15} alt="" />
                                                            </span>
                                                            <div className="ms-3 lh-1">
                                                                <span className="fw-semibold">Diego Sanch</span>
                                                                <span className="d-block fs-11 text-muted mt-2">Angular Developer</span>
                                                            </div>
                                                        </div>
                                                        <div id="user4">
                                                            <Teammembers4 />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-top">
                                                            <span className="avatar avatar-sm lh-1">
                                                                <img src={face10} alt="" />
                                                            </span>
                                                            <div className="ms-3 lh-1">
                                                                <span className="fw-semibold">Jake Sully</span>
                                                                <span className="d-block fs-11 text-muted mt-2">Web Designer</span>
                                                            </div>
                                                        </div>
                                                        <div id="user5">
                                                            <Teammembers5 />
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <div className="card-header justify-content-between">
                                        <Card.Title>
                                            Main Tasks
                                        </Card.Title>
                                        <Dropdown>
                                            <Dropdown.Toggle variant='' className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                Today<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="" role="menu">
                                                <Dropdown.Item href="#">Week</Dropdown.Item>
                                                <Dropdown.Item href="#">Month</Dropdown.Item>
                                                <Dropdown.Item href="#">Year</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                    <Card.Body>
                                        <ul className="list-unstyled projects-maintask-card">
                                            <li>
                                                <div className="d-flex align-items-top">
                                                    <div className="d-flex align-items-top flex-fill">
                                                        <span className="me-3">
                                                            <input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." />
                                                        </span>
                                                        <div className="flex-fill">
                                                            <span>
                                                                Designing a landing page
                                                            </span>
                                                            <span className="d-block mt-1">
                                                                <span className="avatar-list-stacked">
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src={face2} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src={face8} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src={face2} alt="img" />
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="badge bg-primary-transparent">
                                                            In progress
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top">
                                                    <div className="d-flex align-items-top flex-fill">
                                                        <span className="me-3">
                                                            <input className="form-check-input" type="checkbox" id="checkboxNoLabel2" value="" aria-label="..." defaultChecked />
                                                        </span>
                                                        <div className="flex-fill">
                                                            <span>
                                                                Testing of new project ui
                                                            </span>
                                                            <span className="d-block mt-1">
                                                                <span className="avatar-list-stacked">
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src={face10} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src={face15} alt="img" />
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="badge bg-success-transparent">
                                                            Completed
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top">
                                                    <div className="d-flex align-items-top flex-fill">
                                                        <span className="me-3">
                                                            <input className="form-check-input" type="checkbox" id="checkboxNoLabel3" value="" aria-label="..." />
                                                        </span>
                                                        <div className="flex-fill">
                                                            <span>
                                                                Fixing bugs in registration page
                                                            </span>
                                                            <span className="d-block mt-1">
                                                                <span className="avatar-list-stacked">
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src={face11} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src={face4} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src={face8} alt="img" />
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="badge bg-warning-transparent">
                                                            pending
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top">
                                                    <div className="d-flex align-items-top flex-fill">
                                                        <span className="me-3">
                                                            <input className="form-check-input" type="checkbox" id="checkboxNoLabel4" value="" aria-label="..." defaultChecked />
                                                        </span>
                                                        <div className="flex-fill">
                                                            <span>
                                                                Designing new dashboard
                                                            </span>
                                                            <span className="d-block mt-1">
                                                                <span className="avatar-list-stacked">
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src={face10} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-xs avatar-rounded">
                                                                        <img src={face11} alt="img" />
                                                                    </span>
                                                                </span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="badge bg-primary-transparent">
                                                            In progress
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <Col xxl={3}>
                        <Card className="custom-card">
                            <div className="card-header justify-content-between">
                                <Card.Title>
                                    Daily Tasks
                                </Card.Title>
                                <Dropdown>
                                    <Dropdown.Toggle variant='' className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                        View All<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu" role="menu">
                                        <Dropdown.Item href="#">Download</Dropdown.Item>
                                        <Dropdown.Item href="#">Import</Dropdown.Item>
                                        <Dropdown.Item href="#">Export</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <Card.Body>
                                <ul className="list-unstyled daily-task-card my-2">
                                    <li>
                                        <Card className="card border border-primary border-opacity-25 shadow-none custom-card mb-0">
                                            <Card.Body>
                                                <p className="fs-14 fw-semibold mb-2 lh-1">Home Page Design
                                                    <Link aria-label="anchor" to="#"><i className="bi bi-plus-square float-end text-primary fs-18"></i></Link>
                                                </p>
                                                <div className="d-flex flex-wrap gap-2 mb-4">
                                                    <span className="badge bg-primary-transparent">Framework</span>
                                                    <span className="badge bg-secondary-transparent">Angular</span>
                                                    <span className="badge bg-info-transparent">Php</span>
                                                </div>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face2} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face8} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face2} alt="img" />
                                                    </span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </li>
                                    <li>
                                        <Card className="card border border-warning border-opacity-25 shadow-none custom-card">
                                            <Card.Body>
                                                <p className="fs-14 fw-semibold mb-2 lh-1">About Us Page redesign
                                                    <Link aria-label="anchor" to="#"><i className="bi bi-plus-square float-end text-warning fs-18"></i></Link>
                                                </p>
                                                <div className="d-flex flex-wrap gap-2 mb-4">
                                                    <span className="badge bg-danger-transparent">Html</span>
                                                    <span className="badge bg-warning-transparent">Symphony</span>
                                                    <span className="badge bg-success-transparent">Php</span>
                                                </div>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face6} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face9} alt="img" />
                                                    </span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </li>
                                    <li>
                                        <Card className="card border border-success border-opacity-25 shadow-none custom-card">
                                            <Card.Body>
                                                <p className="fs-14 fw-semibold mb-2 lh-1">About Us Page redesign
                                                    <Link aria-label="anchor" to="#"><i className="bi bi-plus-square float-end text-success fs-18"></i></Link>
                                                </p>
                                                <div className="d-flex flex-wrap gap-2 mb-4">
                                                    <span className="badge bg-danger-transparent">Html</span>
                                                    <span className="badge bg-warning-transparent">Symphony</span>
                                                    <span className="badge bg-success-transparent">Php</span>
                                                </div>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face6} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face9} alt="img" />
                                                    </span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </li>
                                    <li>
                                        <Card className="card border border-secondary border-opacity-25 shadow-none custom-card">
                                            <Card.Body>
                                                <p className="fs-14 fw-semibold mb-2 lh-1">New Project Discussion
                                                    <Link aria-label="anchor" to="#"><i className="bi bi-plus-square float-end text-secondary fs-18"></i></Link>
                                                </p>
                                                <div className="d-flex flex-wrap gap-2 mb-4">
                                                    <span className="badge bg-info-transparent">React</span>
                                                    <span className="badge bg-primary-transparent">Typescript</span>
                                                </div>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face3} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face14} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face11} alt="img" />
                                                    </span>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col xxl={3}>
                <Row>
                    <Col xxl={12}>
                        <Card className="custom-card shadow-none projects-tracking-card overflow-hidden text-center">
                            <Card.Body>
                                <img src={media86} alt="" className="mb-1" />
                                <div>
                                    <span className="fs-15 fw-semibold d-block mt-4 mb-3">Track your work progress here</span>
                                    <button type="button" className="btn btn-primary btn-sm btn-wave">Track Here</button>
                                </div>
                                <span className="shape-1 text-primary"><i className="ti ti-circle fs-20 fw-bold"></i></span>
                                <span className="shape-2 text-secondary"><i className="ti ti-triangle fs-20 fw-bold"></i></span>
                                <span className="shape-3 text-warning"><i className="ti ti-square fs-20 fw-bold"></i></span>
                                <span className="shape-4 text-info"><i className="ti ti-square-rotated fs-20 fw-bold"></i></span>
                                <span className="shape-5 text-success"><i className="ti ti-pentagon fs-20 fw-bold"></i></span>
                                <span className="shape-6 text-danger"><i className="ti ti-star fs-20 fw-bold"></i></span>
                                <span className="shape-7 text-pink"><i className="ti ti-hexagon fs-20 fw-bold"></i></span>
                                <span className="shape-8 text-teal"><i className="ti ti-octagon fs-20 fw-bold"></i></span>
                                <span className="shape-9 text-primary"><i className="ti ti-circle fs-20 fw-bold"></i></span>
                                <span className="shape-10 text-secondary"><i className="ti ti-triangle fs-20 fw-bold"></i></span>
                                <span className="shape-11 text-warning"><i className="ti ti-square fs-20 fw-bold"></i></span>
                                <span className="shape-12 text-info"><i className="ti ti-square-rotated fs-20 fw-bold"></i></span>
                                <span className="shape-13 text-success"><i className="ti ti-pentagon fs-20 fw-bold"></i></span>
                                <span className="shape-14 text-danger"><i className="ti ti-star fs-20 fw-bold"></i></span>
                                <span className="shape-15 text-pink"><i className="ti ti-hexagon fs-20 fw-bold"></i></span>
                                <span className="shape-16 text-teal"><i className="ti ti-octagon fs-20 fw-bold"></i></span>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={12}>
                        <Card className="custom-card">
                            <div className="card-header justify-content-between">
                                <Card.Title>
                                    Recent Transactions
                                </Card.Title>
                                <Dropdown>
                                    <Dropdown.Toggle variant='' className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                        View All<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu" role="menu">
                                        <Dropdown.Item href="#">Download</Dropdown.Item>
                                        <Dropdown.Item href="#">Import</Dropdown.Item>
                                        <Dropdown.Item href="#">Export</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <Card.Body>
                                <ul className="list-unstyled project-transactions-card">
                                    <li>
                                        <div className="d-flex align-items-top">
                                            <div className="me-3">
                                                <span className="avatar avatar-rounded fw-bold avatar-md bg-primary-transparent">
                                                    S
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="d-block fw-semibold">Simon Cowall</span>
                                                <span className="d-block text-muted fs-11">Feb 28,2023 - 12:54PM</span>
                                            </div>
                                            <div>
                                                <h6 className="fw-semibold">$21,442</h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-top">
                                            <div className="me-3">
                                                <span className="avatar avatar-rounded fw-bold avatar-md bg-secondary-transparent">
                                                    M
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="d-block fw-semibold">Melissa Blue</span>
                                                <span className="d-block text-muted fs-11">Mar 28,2023 - 10:14AM</span>
                                            </div>
                                            <div>
                                                <h6 className="fw-semibold">$8,789</h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-top">
                                            <div className="me-3">
                                                <span className="avatar avatar-rounded fw-bold avatar-md bg-success-transparent">
                                                    G
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="d-block fw-semibold">Gabriel Shin</span>
                                                <span className="d-block text-muted fs-11">Mar 16,2023 - 05:27PM</span>
                                            </div>
                                            <div>
                                                <h6 className="fw-semibold">$13,677</h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-top">
                                            <div className="me-3">
                                                <span className="avatar avatar-rounded fw-bold avatar-md bg-warning-transparent">
                                                    Y
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="d-block fw-semibold">Yohasimi Nakiyaro</span>
                                                <span className="d-block text-muted fs-11">Mar 19,2023 - 04:45PM</span>
                                            </div>
                                            <div>
                                                <h6 className="fw-semibold">$3,543</h6>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-top">
                                            <div className="me-3">
                                                <span className="avatar avatar-rounded fw-bold avatar-md bg-info-transparent">
                                                    B
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <span className="d-block fw-semibold">Brenda Lynn</span>
                                                <span className="d-block text-muted fs-11">Mar 10,2023 - 05:25PM</span>
                                            </div>
                                            <div>
                                                <h6 className="fw-semibold">$7,890</h6>
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
        <Row>
            <Col xxl={12}>
                <Card className="custom-card">
                    <Card.Header className="card-header justify-content-between">
                        <Card.Title>
                            Projects Summary
                        </Card.Title>
                        <div className="d-flex flex-wrap">
                            <div className="me-3 my-1">
                                <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                            </div>
                            <Dropdown className="dropdown my-1">
                                <Dropdown.Toggle className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu" role="menu">
                                    <Dropdown.Item href="#">New</Dropdown.Item>
                                    <Dropdown.Item href="#">Popular</Dropdown.Item>
                                    <Dropdown.Item href="#">Relevant</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </Card.Header>
                    <Card.Body>
                        <div className="table-responsive">
                            <Table bordered hover className="table text-nowrap">
                                <thead>
                                    <tr>
                                        <th scope="col">S.No</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Assigned To</th>
                                        <th scope="col">Tasks</th>
                                        <th scope="col">Progress</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Due Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            1
                                        </th>
                                        <td>
                                            Home Page
                                        </td>
                                        <td>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src={face2} alt="img" />
                                                </span>
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src={face8} alt="img" />
                                                </span>
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src={face2} alt="img" />
                                                </span>
                                                <Link className="avatar avatar-xs bg-primary avatar-rounded text-fixed-white" to="#">
                                                    +2
                                                </Link>
                                            </div>
                                        </td>
                                        <td>110/180</td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <ProgressBar striped animated className="progress progress-animate progress-xs w-100" variant='primary' now={0} />
                                                <div className="ms-2">0%</div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge bg-primary-transparent">In Progress</span>
                                        </td>
                                        <td>
                                            14-04-2023
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            2
                                        </th>
                                        <td>
                                            Landing Design
                                        </td>
                                        <td>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src={face5} alt="img" />
                                                </span>
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src={face6} alt="img" />
                                                </span>
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src={face9} alt="img" />
                                                </span>
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src={face15} alt="img" />
                                                </span>
                                            </div>
                                        </td>
                                        <td>95/100</td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <ProgressBar striped animated className="progress-xs w-100" variant='primary' now={95} />
                                                <div className="ms-2">95%</div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge bg-primary-transparent">In Progress</span>
                                        </td>
                                        <td>
                                            20-04-2023
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            3
                                        </th>
                                        <td>
                                            New Template Design
                                        </td>
                                        <td>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src={face1} alt="img" />
                                                </span>
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src={face3} alt="img" />
                                                </span>
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src={face4} alt="img" />
                                                </span>
                                            </div>
                                        </td>
                                        <td>90/100</td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <ProgressBar variant='primary' className="progress progress-animate progress-xs w-100" striped animated now={0} />
                                                <div className="ms-2">0%</div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge bg-warning-transparent">Pending</span>
                                        </td>
                                        <td>
                                            29-05-2023
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            4
                                        </th>
                                        <td>
                                            HR Management Template Design
                                        </td>
                                        <td>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src={face10} alt="img" />
                                                </span>
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src={face11} alt="img" />
                                                </span>
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src={face4} alt="img" />
                                                </span>
                                                <Link className="avatar avatar-xs bg-primary avatar-rounded text-fixed-white" to="#">
                                                    +5
                                                </Link>
                                            </div>
                                        </td>
                                        <td>26/71</td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <ProgressBar variant='primary' className="progress progress-animate progress-xs w-100" now={35} />
                                                <div className="ms-2">35%</div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge bg-primary-transparent">In Progress</span>
                                        </td>
                                        <td>
                                            18-04-2023
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            5
                                        </th>
                                        <td>
                                            Designing New Template
                                        </td>
                                        <td>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src={face2} alt="img" />
                                                </span>
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src={face9} alt="img" />
                                                </span>
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src={face16} alt="img" />
                                                </span>
                                                <Link className="avatar avatar-xs bg-primary avatar-rounded text-fixed-white" to="#">
                                                    +3
                                                </Link>
                                            </div>
                                        </td>
                                        <td>26/71</td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <ProgressBar striped animated variant='primary' className="progress progress-animate progress-xs w-100" now={100} />
                                                <div className="ms-2">100%</div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge bg-success-transparent">Completed</span>
                                        </td>
                                        <td>
                                            11-04-2023
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            6
                                        </th>
                                        <td>
                                            Documentation Project
                                        </td>
                                        <td>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src={face4} alt="img" />
                                                </span>
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src={face7} alt="img" />
                                                </span>
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src={face12} alt="img" />
                                                </span>
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src={face13} alt="img" />
                                                </span>
                                                <span className="avatar avatar-xs avatar-rounded">
                                                    <img src={face15} alt="img" />
                                                </span>
                                            </div>
                                        </td>
                                        <td>45/90</td>
                                        <td>
                                            <div className="d-flex align-items-center">
                                                <ProgressBar striped animated variant='primary' className="progress progress-animate progress-xs w-100" now={50} />
                                                <div className="ms-2">50%</div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge bg-primary-transparent">In Progress</span>
                                        </td>
                                        <td>
                                            18-04-2023
                                        </td>
                                    </tr>
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
                                    <Pagination className="pagination mb-0">
                                        <Pagination.Item disabled href="#">Prev</Pagination.Item>
                                        <Pagination.Item active href="#">1</Pagination.Item>
                                        <Pagination.Item href="#">2</Pagination.Item>
                                        <Pagination.Item href="#" className='pagination-next'>next</Pagination.Item>
                                    </Pagination>
                                </nav>
                            </div>
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    </Fragment>
);

export default Projects;
