import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Dropdown, Form, Pagination, Row, Table } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { Billssummary, JobsSummary, Performancebycategory } from './hrmdata';
import { Link } from 'react-router-dom';
import face2 from "../../../assets/images/faces/2.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import face13 from "../../../assets/images/faces/13.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face5 from "../../../assets/images/faces/5.jpg";

interface HrmProps { }

const Hrm: FC<HrmProps> = () => {
    // for User search function
    const [Data, setData] = useState(Billssummary);

    const userdata: any = [];

    const myfunction = (idx: any) => {
        let Data;
        for (Data of Billssummary) {
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
            <Pageheader title="HRM" heading="Dashboards" active="HRM" />
            <Row>
                <Col xxl={5} xl={12}>
                    <Row>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                            <Card className="custom-card hrm-main-card primary">
                                <Card.Body>
                                    <div className="d-flex align-items-top">
                                        <div className="me-3">
                                            <span className="avatar bg-primary">
                                                <i className="ri-team-line fs-18"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <span className="fw-semibold text-muted d-block mb-2">Total Employees</span>
                                            <h5 className="fw-semibold mb-2">22,124</h5>
                                            <p className="mb-0">
                                                <span className="badge bg-primary-transparent">This Month</span>
                                            </p>
                                        </div>
                                        <div>
                                            <span className="fs-14 fw-semibold text-success">+1.03%</span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={12}>
                            <Card className="custom-card hrm-main-card secondary">
                                <Card.Body>
                                    <div className="d-flex align-items-top">
                                        <div className="me-3">
                                            <span className="avatar bg-secondary">
                                                <i className="ri-user-unfollow-line fs-18"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <span className="fw-semibold text-muted d-block mb-2">Employees In Leave</span>
                                            <h5 className="fw-semibold mb-2">528</h5>
                                            <p className="mb-0">
                                                <span className="badge bg-secondary-transparent">This Month</span>
                                            </p>
                                        </div>
                                        <div>
                                            <span className="fs-14 fw-semibold text-success">+0.36%</span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <Card className="custom-card  hrm-main-card warning">
                                <Card.Body>
                                    <div className="d-flex align-items-top">
                                        <div className="me-3">
                                            <span className="avatar bg-warning">
                                                <i className="ri-service-line fs-18"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <span className="fw-semibold text-muted d-block mb-2">Total Clients</span>
                                            <h5 className="fw-semibold mb-2">8,289</h5>
                                            <p className="mb-0">
                                                <span className="badge bg-warning-transparent">This Month</span>
                                            </p>
                                        </div>
                                        <div>
                                            <span className="fs-14 fw-semibold text-danger">-1.28%</span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <Card className="custom-card  hrm-main-card danger">
                                <Card.Body>
                                    <div className="d-flex align-items-top">
                                        <div className="me-3">
                                            <span className="avatar bg-danger">
                                                <i className="ri-contacts-line fs-18"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <span className="fw-semibold text-muted d-block mb-2">New Leads</span>
                                            <h5 className="fw-semibold mb-2">1,453</h5>
                                            <p className="mb-0">
                                                <span className="badge bg-danger-transparent">This Month</span>
                                            </p>
                                        </div>
                                        <div>
                                            <span className="fs-14 fw-semibold text-success">+4.25%</span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>Applicants Summary</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="row gy-md-0 gy-3">
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                            <div className="d-flex align-items-top">
                                                <div className="me-3">
                                                    <span className="avatar avatar-rounded bg-light text-primary">
                                                        <i className="ti ti-files fs-18"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block mb-1 text-muted">New Applicants</span>
                                                    <h6 className="fw-semibold mb-0">2,981</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                            <div className="d-flex align-items-top">
                                                <div className="me-3">
                                                    <span className="avatar avatar-rounded bg-light text-secondary">
                                                        <i className="ti ti-file-check fs-18"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block mb-1 text-muted">Selected Candidates</span>
                                                    <h6 className="fw-semibold mb-0">2,981</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-12">
                                            <div className="d-flex align-items-top">
                                                <div className="me-3">
                                                    <span className="avatar avatar-rounded bg-light text-warning">
                                                        <i className="ti ti-file-dislike fs-18"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="d-block mb-1 text-muted">Rejected Candidates</span>
                                                    <h6 className="fw-semibold mb-0">2,981</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={7} xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between align-items-center d-sm-flex d-block">
                            <Card.Title className="card-title mb-sm-0 mb-2">
                                Performance By Category
                            </Card.Title>
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <Button variant='primary-light' type="button" className="btn btn-primary-light btn-sm btn-wave">1W</Button>
                                <Button variant='primary-light' type="button" className="btn btn-primary-light btn-sm btn-wave">1M</Button>
                                <Button variant='primary-light' type="button" className="btn btn-primary-light btn-sm btn-wave">6M</Button>
                                <Button variant='primary' type="button" className="btn btn-primary btn-sm btn-wave">1Y</Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div id="performanceReport">
                                <Performancebycategory />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={3} xl={6} lg={6} md={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Jobs Summary
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="p-4">
                            <div id="jobs-summary">
                                <JobsSummary />
                            </div>
                        </Card.Body>
                        <Card.Footer className="p-4 my-2">
                            <div className="row row-cols-12">
                                <div className="col p-0">
                                    <div className="text-center">
                                        <span className="text-muted fs-12 mb-1 hrm-jobs-legend published d-inline-block ms-2">Published
                                        </span>
                                        <div><span className="fs-16 fw-semibold">1,624</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col p-0">
                                    <div className="text-center">
                                        <span className="text-muted fs-12 mb-1 hrm-jobs-legend private d-inline-block ms-2">Private
                                        </span>
                                        <div><span className="fs-16 fw-semibold">1,267</span></div>
                                    </div>
                                </div>
                                <div className="col p-0">
                                    <div className="text-center">
                                        <span className="text-muted fs-12 mb-1 hrm-jobs-legend closed d-inline-block ms-2">Closed
                                        </span>
                                        <div><span className="fs-16 fw-semibold">1,153</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col p-0">
                                    <div className="text-center">
                                        <span className="text-muted fs-12 mb-1 hrm-jobs-legend onhold d-inline-block ms-2">On Hold
                                        </span>
                                        <div><span className="fs-16 fw-semibold">1,153</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={4} xl={6} lg={6} md={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Upcoming Events</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled timeline-widget mb-0 my-3">
                                <li className="timeline-widget-list">
                                    <div className="d-flex align-items-top">
                                        <div className="me-5 text-center">
                                            <span className="d-block fs-20 fw-semibold text-primary">02</span>
                                            <span className="d-block fs-12 text-muted">Mon</span>
                                        </div>
                                        <div className="d-flex flex-wrap flex-fill align-items-top justify-content-between">
                                            <div>
                                                <p className="mb-1 text-truncate timeline-widget-content text-wrap">You have an announcement - Ipsum Est Diam Eirmod</p>
                                                <p className="mb-0 fs-12 lh-1 text-muted">10:00AM<span className="badge bg-primary-transparent ms-2">Announcement</span></p>
                                            </div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='' aria-label="anchor"  className="p-2 fs-16 text-muted no-caret" data-bs-toggle="dropdown">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item className="dropdown-item" href="#">Action</Dropdown.Item>
                                                    <Dropdown.Item className="dropdown-item" href="#">Another action</Dropdown.Item>
                                                    <Dropdown.Item className="dropdown-item" href="#">Something else here</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-widget-list">
                                    <div className="d-flex align-items-top">
                                        <div className="me-5 text-center">
                                            <span className="d-block fs-20 fw-semibold text-primary">15</span>
                                            <span className="d-block fs-12 text-muted">Sun</span>
                                        </div>
                                        <div className="d-flex flex-wrap flex-fill align-items-top justify-content-between">
                                            <div>
                                                <p className="mb-1 text-truncate timeline-widget-content text-wrap">National holiday - Vero Jayanti</p>
                                                <p className="mb-0 fs-12 lh-1 text-muted"><span className="badge bg-warning-transparent">Holiday</span></p>
                                            </div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='' aria-label="anchor" className="p-2 fs-16 text-muted no-caret" data-bs-toggle="dropdown">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-widget-list">
                                    <div className="d-flex align-items-top">
                                        <div className="me-5 text-center">
                                            <span className="d-block fs-20 fw-semibold text-primary">23</span>
                                            <span className="d-block fs-12 text-muted">Mon</span>
                                        </div>
                                        <div className="d-flex flex-wrap flex-fill align-items-top justify-content-between">
                                            <div>
                                                <p className="mb-1 text-truncate timeline-widget-content text-wrap">John pup birthday - Team Member</p>
                                                <p className="mb-4 fs-12 lh-1 text-muted">09:00AM<span className="badge bg-success-transparent ms-2">Birthday</span></p>
                                                <p className="mb-1 text-truncate timeline-widget-content text-wrap">Amet sed no dolor kasd - Et Dolores Tempor Erat</p>
                                                <p className="mb-0 fs-12 lh-1 text-muted">04:00PM<span className="badge bg-primary-transparent ms-2">Announcement</span></p>
                                            </div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='' aria-label="anchor" className="p-2 fs-16 text-muted no-caret" data-bs-toggle="dropdown">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-widget-list">
                                    <div className="d-flex align-items-top">
                                        <div className="me-5 text-center">
                                            <span className="d-block fs-20 fw-semibold text-primary">31</span>
                                            <span className="d-block fs-12 text-muted">Tue</span>
                                        </div>
                                        <div className="d-flex flex-wrap flex-fill align-items-top justify-content-between">
                                            <div>
                                                <p className="mb-1 text-truncate timeline-widget-content text-wrap">National Holiday - Dolore Ipsum</p>
                                                <p className="mb-0 fs-12 lh-1 text-muted"><span className="badge bg-warning-transparent">Holiday</span></p>
                                            </div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='' aria-label="anchor" className="p-2 fs-16 text-muted no-caret" data-bs-toggle="dropdown">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={5} xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Clients</Card.Title>
                        </Card.Header>
                        <Card.Body className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Client</th>
                                            <th scope="col">Mail</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <div className="d-flex align-items-center lh-1">
                                                    <div className="me-3">
                                                        <span className="avatar avatar-rounded">
                                                            <img src={face2} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="d-block fw-semibold mb-1">Diana Aise</span>
                                                        <span className="d-block text-muted fs-12">C.E.O</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td>diana.1116@demo.com</td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant='outline-light' className='btn-sm'>Active</Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item>Active</Dropdown.Item>
                                                            <Dropdown.Item>In Active</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <Button variant='primary-light' aria-label="button" type="button" className="btn btn-sm btn-primary-light btn-icon"><i className="ri-pencil-line"></i></Button>
                                                    <Button variant='primary-light' aria-label="button" type="button" className="btn btn-sm btn-success-light btn-icon"><i className="ri-delete-bin-line"></i></Button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="d-flex align-items-center lh-1">
                                                    <div className="me-3">
                                                        <span className="avatar avatar-rounded">
                                                            <img src={face8} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="d-block fw-semibold mb-1">Rose Mary</span>
                                                        <span className="d-block text-muted fs-12">C.E.O</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td>rose756@demo.com</td>
                                            <td>
                                                 <Dropdown>
                                                    <Dropdown.Toggle variant='outline-light' className='btn-sm'>Active</Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item>Active</Dropdown.Item>
                                                            <Dropdown.Item>In Active</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <Button variant='primary-light' aria-label="button" type="button" className="btn btn-sm btn-primary-light btn-icon"><i className="ri-pencil-line"></i></Button>
                                                    <Button variant='primary-light' aria-label="button" type="button" className="btn btn-sm btn-success-light btn-icon"><i className="ri-delete-bin-line"></i></Button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="d-flex align-items-center lh-1">
                                                    <div className="me-3">
                                                        <span className="avatar avatar-rounded">
                                                            <img src={face13} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="d-block fw-semibold mb-1">Gretchen Iox</span>
                                                        <span className="d-block text-muted fs-12">Manager</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td>gretchen.1.25@demo.com</td>
                                            <td>
                                                 <Dropdown>
                                                    <Dropdown.Toggle variant='outline-light' className='btn-sm'>Active</Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item>Active</Dropdown.Item>
                                                            <Dropdown.Item>In Active</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <Button variant='primary-light' aria-label="button" type="button" className="btn btn-sm btn-primary-light btn-icon"><i className="ri-pencil-line"></i></Button>
                                                    <Button variant='primary-light' aria-label="button" type="button" className="btn btn-sm btn-success-light btn-icon"><i className="ri-delete-bin-line"></i></Button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="d-flex align-items-center lh-1">
                                                    <div className="me-3">
                                                        <span className="avatar avatar-rounded">
                                                            <img src={face11} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="d-block fw-semibold mb-1">Gray Noal</span>
                                                        <span className="d-block text-muted fs-12">Manager</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td>gray12gray@demo.com</td>
                                            <td>
                                                 <Dropdown>
                                                    <Dropdown.Toggle variant='outline-light' className='btn-sm'>Active</Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item>Active</Dropdown.Item>
                                                            <Dropdown.Item>In Active</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <Button variant='primary-light' aria-label="button" type="button" className="btn btn-sm btn-primary-light btn-icon"><i className="ri-pencil-line"></i></Button>
                                                    <Button variant='primary-light' aria-label="button" type="button" className="btn btn-sm btn-success-light btn-icon"><i className="ri-delete-bin-line"></i></Button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row" className="border-bottom-0">
                                                <div className="d-flex align-items-center lh-1">
                                                    <div className="me-3">
                                                        <span className="avatar avatar-rounded">
                                                            <img src={face5} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="d-block fw-semibold mb-1">Isa Bella</span>
                                                        <span className="d-block text-muted fs-12">C.E.O</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td className="border-bottom-0">isa158@demo.com</td>
                                            <td className="border-bottom-0">
                                                 <Dropdown>
                                                    <Dropdown.Toggle variant='outline-light' className='btn-sm'>Active</Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item>Active</Dropdown.Item>
                                                            <Dropdown.Item>In Active</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                            <td className="border-bottom-0">
                                                <div className="btn-list">
                                                    <Button variant='primary-light' aria-label="button" type="button" className="btn btn-sm btn-primary-light btn-icon"><i className="ri-pencil-line"></i></Button>
                                                    <Button variant='primary-light' aria-label="button" type="button" className="btn btn-sm btn-success-light btn-icon"><i className="ri-delete-bin-line"></i></Button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between flex-wrap">
                            <Card.Title>
                                Bills Summary
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <div className="me-3">
                                    <Form.Control className="form-control-sm" type="text" onChange={(ele) => { myfunction(ele.target.value); }}
                                        placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
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
                                <Table bordered hover className="table  text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Invoice ID</th>
                                            <th scope="col">Client</th>
                                            <th scope="col">Due Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Amount</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <td>{idx.id}</td>
                                                <td>{idx.invoiceid}</td>
                                                <td>
                                                    <div className="d-flex align-items-center lh-1">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block fw-semibold mb-1">{idx.name}</span>
                                                            <span className="text-muted fs-12">{idx.mail}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.duedate}
                                                </td>
                                                <td>
                                                    <span className={`badge bg-${idx.color}`}>{idx.status}</span>
                                                </td>
                                                <td>
                                                    {idx.amount}
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Link aria-label="anchor" to="#" className="btn btn-sm btn-icon btn-info-light"><i className="ri-pencil-line"></i></Link>
                                                        <Link aria-label="anchor" to="#" className="btn btn-icon btn-sm btn-danger-light"><i className="ri-delete-bin-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                        <Card.Footer className="">
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 6 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <Pagination className="pagination mb-0">
                                            <Pagination.Item disabled href="#"> Prev</Pagination.Item>
                                            <Pagination.Item active href="#">1</Pagination.Item>
                                            <Pagination.Item href="#">2</Pagination.Item>
                                            <Pagination.Item href="#" className='pagination-next'> next</Pagination.Item>
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
};

export default Hrm;
