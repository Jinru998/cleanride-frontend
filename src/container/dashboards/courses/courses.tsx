import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Dropdown, Form, ProgressBar, Row, Table } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import { Courselist, Earningsreport, Payouts } from './coursesdata';
import face1 from "../../../assets/images/faces/1.jpg";
import face2 from "../../../assets/images/faces/2.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import face9 from "../../../assets/images/faces/9.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import face10 from "../../../assets/images/faces/10.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face12 from "../../../assets/images/faces/12.jpg";
import face13 from "../../../assets/images/faces/13.jpg";
import face14 from "../../../assets/images/faces/14.jpg";

interface CoursesProps { }

const Courses: FC<CoursesProps> = () => {
    // for User search function
    const [Data, setData] = useState(Courselist);

    const userdata: any = [];

    const myfunction = (idx: any) => {
        let Data;
        for (Data of Courselist) {
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
            <Pageheader title="Courses" heading="Dashboards" active="Courses" />
            <Row>
                <Col xxl={7} xl={7} lg={12}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Top Categories
                                    </Card.Title>
                                    <div>
                                        <Button variant="" type="button" className="btn btn-light btn-wave btn-sm">View All</Button>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="row gy-xl-0 gy-3">
                                        <Col xxl={3} xl={3} lg={6} md={6} sm={6} className="col-12">
                                            <div>
                                                <Link to="#" className="category-link primary text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="category-svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3"></path><path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z"></path></svg>
                                                    <p className="fs-14 mb-1 text-default fw-semibold">UI/UX Design</p>
                                                    <span className="fs-11 text-muted">1000+ Courses</span>
                                                </Link>
                                            </div>
                                        </Col>
                                        <Col xxl={3} xl={3} lg={6} md={6} sm={6} className="col-12">
                                            <div>
                                                <Link to="#" className="category-link secondary text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="category-svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"></rect></g><g><g opacity=".3"><path d="M6.71,18.71c-0.28,0.28-2.17,0.76-2.17,0.76s0.47-1.88,0.76-2.17C5.47,17.11,5.72,17,6,17c0.55,0,1,0.45,1,1 C7,18.28,6.89,18.53,6.71,18.71z M7.41,10.83L5.5,10.01l1.97-1.97l1.44,0.29C8.34,9.16,7.83,10.03,7.41,10.83z M13.99,18.5 l-0.82-1.91c0.8-0.42,1.67-0.93,2.49-1.5l0.29,1.44L13.99,18.5z M19.99,4.01c0,0-3.55-0.69-8.23,3.99 c-1.32,1.32-2.4,3.38-2.73,4.04l2.93,2.93c0.65-0.32,2.71-1.4,4.04-2.73C20.68,7.56,19.99,4.01,19.99,4.01z M15,11 c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C17,10.1,16.1,11,15,11z"></path></g><g><path d="M6,15c-0.83,0-1.58,0.34-2.12,0.88C2.7,17.06,2,22,2,22s4.94-0.7,6.12-1.88C8.66,19.58,9,18.83,9,18C9,16.34,7.66,15,6,15 z M6.71,18.71c-0.28,0.28-2.17,0.76-2.17,0.76s0.47-1.88,0.76-2.17C5.47,17.11,5.72,17,6,17c0.55,0,1,0.45,1,1 C7,18.28,6.89,18.53,6.71,18.71z M17.42,13.65L17.42,13.65c6.36-6.36,4.24-11.31,4.24-11.31s-4.95-2.12-11.31,4.24l-2.49-0.5 C7.21,5.95,6.53,6.16,6.05,6.63L2,10.69l5,2.14L11.17,17l2.14,5l4.05-4.05c0.47-0.47,0.68-1.15,0.55-1.81L17.42,13.65z M7.41,10.83L5.5,10.01l1.97-1.97l1.44,0.29C8.34,9.16,7.83,10.03,7.41,10.83z M13.99,18.5l-0.82-1.91 c0.8-0.42,1.67-0.93,2.49-1.5l0.29,1.44L13.99,18.5z M16,12.24c-1.32,1.32-3.38,2.4-4.04,2.73l-2.93-2.93 c0.32-0.65,1.4-2.71,2.73-4.04c4.68-4.68,8.23-3.99,8.23-3.99S20.68,7.56,16,12.24z M15,11c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2 S13.9,11,15,11z"></path></g></g></svg>
                                                    <p className="fs-14 mb-1 text-default fw-semibold">Digital Marketing</p>
                                                    <span className="fs-11 text-muted">90+ Courses</span>
                                                </Link>
                                            </div>
                                        </Col>
                                        <Col xxl={3} xl={3} lg={6} md={6} sm={6} className="col-12">
                                            <div>
                                                <Link to="#" className="category-link warning text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="category-svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="swatchbook"><path opacity="0.2" d="M9 22H5a3.003 3.003 0 0 1-3-3V5a3.003 3.003 0 0 1 3-3h4a3.003 3.003 0 0 1 3 3v14a3.003 3.003 0 0 1-3 3z"></path><path opacity="0.4" d="m20.293 6.535-2.828-2.828a3.004 3.004 0 0 0-4.243 0l-1.229 1.228c0 .022.007.043.007.065v14c0 .027-.007.052-.008.08l8.301-8.302a3.004 3.004 0 0 0 0-4.243z"></path><circle cx="7" cy="17" r="1" opacity="1"></circle><path opacity="1" d="m19.065 12.007-7.073 7.072c0-.027.008-.052.008-.079a3.003 3.003 0 0 1-3 3h10a3.003 3.003 0 0 0 3-3v-4a3 3 0 0 0-2.935-2.993z"></path></svg>
                                                    <p className="fs-14 mb-1 text-default fw-semibold">Web Development</p>
                                                    <span className="fs-11 text-muted">250+ Courses</span>
                                                </Link>
                                            </div>
                                        </Col>
                                        <Col xxl={3} xl={3} lg={6} md={6} sm={6} className="col-12">
                                            <div>
                                                <Link to="#" className="category-link success">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="category-svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><rect fill="none" height="24" width="24"></rect><g opacity=".3"><path d="M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"></path></g><g><path d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"></path></g></svg>
                                                    <p className="fs-14 mb-1 text-default fw-semibold">Stocks &amp; Trading</p>
                                                    <span className="fs-11 text-muted">100+ Courses</span>
                                                </Link>
                                            </div>
                                        </Col>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>Earnings Report</Card.Title>
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        <Button variant="" type="button" className="btn btn-primary btn-sm btn-wave">1M</Button>
                                        <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave">6M</Button>
                                        <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave">1Y</Button>
                                        <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave">All</Button>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div id="courses-earnings">
                                        <Earningsreport />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={5} xl={5} lg={12}>
                    <Row>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex flex-wrap align-items-top gap-2">
                                        <div className="me-1">
                                            <span className="avatar avatar-lg bg-primary">
                                                <i className="ti ti-wallet fs-20"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <h5 className="d-block fw-semibold fs-18 mb-1">$98,312</h5>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="text-muted fs-12">YTD Earnings</div>
                                                <div className="text-success"><i className="ti ti-trending-up fs-16 me-1 align-middle d-inline-flex"></i>+2.02%</div>
                                            </div>
                                            <Link to="#" className="text-primary fs-12">View All<i className="ti ti-arrow-narrow-right ms-2 fw-semibold d-inline-block"></i></Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex flex-wrap gap-2 align-items-top">
                                        <div className="me-1">
                                            <span className="avatar avatar-lg bg-secondary">
                                                <i className="ti ti-users fs-20"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <h5 className="d-block fw-semibold fs-18 mb-1">35,393</h5>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="text-muted fs-12">Total Students</div>
                                                <div className="text-danger"><i className="ti ti-trending-down fs-16 me-1 align-middle d-inline-flex"></i>-0.24%</div>
                                            </div>
                                            <Link to="#" className="text-secondary fs-12">View All<i className="ti ti-arrow-narrow-right ms-2 fw-semibold d-inline-block"></i></Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex flex-wrap gap-2 align-items-top">
                                        <div className="me-1">
                                            <span className="avatar avatar-lg bg-warning">
                                                <i className="ti ti-id fs-20"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <h5 className="d-block fw-semibold fs-18 mb-1">573</h5>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="text-muted fs-12">Total Instructors</div>
                                                <div className="text-danger"><i className="ti ti-trending-down fs-16 me-1 align-middle d-inline-flex"></i>-1.32%</div>
                                            </div>
                                            <Link to="#" className="text-warning fs-12">View All<i className="ti ti-arrow-narrow-right ms-2 fw-semibold d-inline-block"></i></Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex flex-wrap gap-2 align-items-top">
                                        <div className="me-1">
                                            <span className="avatar avatar-lg bg-danger">
                                                <i className="ti ti-gift fs-20"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <h5 className="d-block fw-semibold fs-18 mb-1">2,389</h5>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="text-muted fs-12">Total Courses</div>
                                                <div className="text-success"><i className="ti ti-trending-up fs-16 me-1 align-middle d-inline-flex"></i>+0.89%</div>
                                            </div>
                                            <Link to="#" className="text-danger fs-12">View All<i className="ti ti-arrow-narrow-right ms-2 fw-semibold d-inline-block"></i></Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        My Courses
                                    </Card.Title>
                                    <div>
                                        <Button variant="light" type="button" className="btn btn-light btn-sm">View All</Button>
                                    </div>
                                </Card.Header>
                                <Card.Body className=" p-0">
                                    <div className="table-responsive">
                                        <Table className="table text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Course Title</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Duration</th>
                                                    <th scope="col">Type</th>
                                                    <th scope="col">Instructor</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <span className="align-items-center"></span>
                                                            </div>
                                                            <div>
                                                                ui/ux Designing
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <ProgressBar variant='primary' striped animated className="progress progress-xs course-status-progress  me-2" now={60} />
                                                            <div>60%</div>
                                                        </div>
                                                    </td>
                                                    <td>3 Months</td>
                                                    <td><span className="badge bg-outline-primary">Full Time</span></td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <img src={face2} alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="fw-semibold">Sarah Taylor</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <span className="align-items-center"></span>
                                                            </div>
                                                            <div>
                                                                Project Management
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <ProgressBar variant='success' striped animated className="progress progress-xs course-status-progress  me-2" now={100} />
                                                            <div>100%</div>
                                                        </div>
                                                    </td>
                                                    <td>45 Days</td>
                                                    <td><span className="badge bg-outline-success">Completed</span></td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <img src={face11} alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="fw-semibold">Jason Smith</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <span className="align-items-center"></span>
                                                            </div>
                                                            <div>
                                                                Python
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <ProgressBar variant='warning' striped animated className="progress progress-xs course-status-progress  me-2" now={38} />
                                                            <div>38%</div>
                                                        </div>
                                                    </td>
                                                    <td>90 Days</td>
                                                    <td><span className="badge bg-outline-warning">Part Time</span></td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <img src={face14} alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="fw-semibold">Alex Perira</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <span className="align-items-center"></span>
                                                            </div>
                                                            <div>
                                                                Digital Marketing
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <ProgressBar variant='info' striped animated className="progress progress-xs course-status-progress  me-2" now={75} />
                                                            <div>75%</div>
                                                        </div>
                                                    </td>
                                                    <td>24 Days</td>
                                                    <td><span className="badge bg-outline-info">Week End</span></td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <img src={face8} alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="fw-semibold">Kamala Singh</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <span className="align-items-center"></span>
                                                            </div>
                                                            <div>
                                                                Full Stack Development
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <ProgressBar variant='primary' striped animated className="progress progress-xs course-status-progress  me-2" now={55} />
                                                            <div>55%</div>
                                                        </div>
                                                    </td>
                                                    <td>6 Months</td>
                                                    <td><span className="badge bg-outline-primary">Full Time</span></td>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <img src={face4} alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="fw-semibold">Jessica Leon</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" className="border-bottom-0">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <span className="align-items-center"></span>
                                                            </div>
                                                            <div>
                                                                Stocks &amp; Trading
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="border-bottom-0">
                                                        <div className="d-flex align-items-center">
                                                            <ProgressBar variant='danger' striped animated className="progress progress-xs course-status-progress  me-2" now={29} />
                                                            <div>29%</div>
                                                        </div>
                                                    </td>
                                                    <td className="border-bottom-0">1 Month</td>
                                                    <td className="border-bottom-0"><span className="badge bg-outline-danger">Stopped</span></td>
                                                    <td className="border-bottom-0">
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <img src={face12} alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="fw-semibold">Israel Khan</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Top Instructors</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled courses-instructors mb-0">
                                <li>
                                    <div className="d-flex">
                                        <div className="d-flex flex-fill align-items-center">
                                            <div className="me-2">
                                                <span className="avatar avatar-rounded">
                                                    <img src={face1} alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="d-block fw-semibold">John Henry</span>
                                                <span className="text-muted">M.Tech</span>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <span className="d-block text-primary fw-semibold">321 Classes</span>
                                            <span className="text-muted">Digital Marketing</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <div className="d-flex flex-fill align-items-center">
                                            <div className="me-2">
                                                <span className="avatar avatar-rounded">
                                                    <img src={face5} alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="d-block fw-semibold">Mortal Yun</span>
                                                <span className="text-muted">P.H.D</span>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <span className="d-block text-primary fw-semibold">25 Classes</span>
                                            <span className="text-muted">Stocks &amp; Trading</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <div className="d-flex flex-fill align-items-center">
                                            <div className="me-2">
                                                <span className="avatar avatar-rounded">
                                                    <img src={face8} alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="d-block fw-semibold">Trex Con</span>
                                                <span className="text-muted">MBBS</span>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <span className="d-block text-primary fw-semibold">39 Classes</span>
                                            <span className="text-muted">Science</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <div className="d-flex flex-fill align-items-center">
                                            <div className="me-2">
                                                <span className="avatar avatar-rounded">
                                                    <img src={face12} alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="d-block fw-semibold">Saiu Sarah</span>
                                                <span className="text-muted">P.H.D</span>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <span className="d-block text-primary fw-semibold">11 Classes</span>
                                            <span className="text-muted">Science</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="d-flex">
                                        <div className="d-flex flex-fill align-items-center">
                                            <div className="me-2">
                                                <span className="avatar avatar-rounded">
                                                    <img src={face15} alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="d-block fw-semibold">Ion Hau</span>
                                                <span className="text-muted">M.Tech</span>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <span className="d-block text-primary fw-semibold">124 Classes</span>
                                            <span className="text-muted">Web Development</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={5} className="col-xl-5">
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                New Students
                            </Card.Title>
                            <div>
                                <Button variant="" type="button" className="btn btn-sm btn-light">View All</Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <thead className="bg-light">
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Courses</th>
                                            <th scope="col">Completed</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-rounded">
                                                            <img src={face13} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="d-blockfw-semibold">Richard Dom</span>
                                                        <span className="d-block fs-12 text-muted">richarddom1116@demo.com</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td>9</td>
                                            <td>1</td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-info-transparent rounded-pill"><i className="ri-edit-line"></i></Link>
                                                    <Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i className="ri-delete-bin-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-rounded">
                                                            <img src={face5} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="d-blockfw-semibold">Alicia Keys</span>
                                                        <span className="d-block fs-12 text-muted">aliciakeys89@gmail.com</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td>1</td>
                                            <td>0</td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-info-transparent rounded-pill"><i className="ri-edit-line"></i></Link>
                                                    <Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i className="ri-delete-bin-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-rounded">
                                                            <img src={face10} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="d-blockfw-semibold">Robert Brook</span>
                                                        <span className="d-block fs-12 text-muted">robertbrook95@gmail.com</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td>15</td>
                                            <td>0</td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-info-transparent rounded-pill"><i className="ri-edit-line"></i></Link>
                                                    <Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i className="ri-delete-bin-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="border-bottom-0">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-rounded">
                                                            <img src={face9} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="d-blockfw-semibold">Alex Boi</span>
                                                        <span className="d-block fs-12 text-muted">alexboi555@gmail.com</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td className="border-bottom-0">16</td>
                                            <td className="border-bottom-0">3</td>
                                            <td className="border-bottom-0">
                                                <div className="hstack gap-2 fs-15">
                                                    <Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-info-transparent rounded-pill"><i className="ri-edit-line"></i></Link>
                                                    <Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i className="ri-delete-bin-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4} className="col-xl-4">
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Payouts
                            </Card.Title>
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <Button variant="" type="button" className="btn btn-primary btn-sm btn-wave waves-effect waves-light">1M</Button>
                                <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">6M</Button>
                                <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">1Y</Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="course-payouts">
                                <Payouts />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Course List
                            </Card.Title>
                            <div className="d-flex flex-wrap">
                                <div className="me-3 my-1">
                                    <Form.Control className="form-control form-control-sm" onChange={(ele) => { myfunction(ele.target.value); }}
                                        type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <Dropdown className="dropdown m-1">
                                    <Dropdown.Toggle variant='' className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
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
                                <Table bordered className="table text-nowrap table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Course</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Classes</th>
                                            <th scope="col">Last Updated</th>
                                            <th scope="col">Instructor</th>
                                            <th scope="col">Students</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <td>
                                                    {idx.id}
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center lh-1">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-xs">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>{idx.name}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.category}
                                                </td>
                                                <td>
                                                    {idx.classes}
                                                </td>
                                                <td>
                                                    {idx.last}
                                                </td>
                                                <td>
                                                    {idx.instructor}
                                                </td>
                                                <td>
                                                    {idx.students}
                                                </td>
                                                <td>
                                                    <div className="hstack gap-2 fs-1">
                                                        <Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light"><i className="ri-edit-line"></i></Link>
                                                        <Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light"><i className="ri-delete-bin-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            <div className="d-flex flex-wrap align-items-center">
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

export default Courses;
