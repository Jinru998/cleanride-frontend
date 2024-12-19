import { FC, Fragment } from 'react';
import { Button, Card, Col, Dropdown, Form, Pagination, ProgressBar, Row } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import logo1 from "../../../../assets/images/company-logos/1.png";
import logo2 from "../../../../assets/images/company-logos/2.png";
import logo3 from "../../../../assets/images/company-logos/3.png";
import logo8 from "../../../../assets/images/company-logos/8.png";
import logo6 from "../../../../assets/images/company-logos/6.png";
import logo9 from "../../../../assets/images/company-logos/9.png";
import logo10 from "../../../../assets/images/company-logos/10.png";
import logo5 from "../../../../assets/images/company-logos/5.png";
import face1 from "../../../../assets/images/faces/1.jpg";
import face2 from "../../../../assets/images/faces/2.jpg";
import face3 from "../../../../assets/images/faces/3.jpg";
import face4 from "../../../../assets/images/faces/4.jpg";
import face5 from "../../../../assets/images/faces/5.jpg";
import face6 from "../../../../assets/images/faces/6.jpg";
import face7 from "../../../../assets/images/faces/7.jpg";
import face8 from "../../../../assets/images/faces/8.jpg";
import face9 from "../../../../assets/images/faces/9.jpg";
import face10 from "../../../../assets/images/faces/10.jpg";
import face11 from "../../../../assets/images/faces/11.jpg";
import face12 from "../../../../assets/images/faces/12.jpg";
import face13 from "../../../../assets/images/faces/13.jpg";
import face14 from "../../../../assets/images/faces/14.jpg";
import face15 from "../../../../assets/images/faces/15.jpg";
import face16 from "../../../../assets/images/faces/16.jpg";
import Select from 'react-select';
import { Link } from 'react-router-dom';

interface ProjectslistProps { }

const Projectslist: FC<ProjectslistProps> = () => {
    const Optionsdata=[
        {value:'Sort By', label:'Sort By'},
        {value:'Newest', label:'Newest'},
        {value:'Date Added', label:'Date Added'},
        {value:'A - Z', label:'A - Z'},
        {value:'Type', label:'Type'},
    ];
    return (
        <Fragment>
            <Pageheader title="Projects List" heading="Projects" active="Projects List" />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="p-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                <div className="d-flex flex-wrap gap-1">
                                    <Link to={`${import.meta.env.BASE_URL}apps/projects/createproject/`} className="btn btn-primary me-2"><i className="ri-add-line me-1 fw-semibold align-middle"></i>New Project</Link>
                                   
                                     <Select name="colors" options={Optionsdata} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Sort By"
                                    />
                                </div>
                                <div className="avatar-list-stacked">
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src={face1} alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src={face2} alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src={face8} alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src={face12} alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src={face10} alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src={face4} alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src={face5} alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src={face13} alt="img" />
                                    </span>
                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" to="#">
                                        +8
                                    </Link>
                                </div>
                                <div className="d-flex" role="search">
                                    <Form.Control className="form-control me-2" type="search" placeholder="Search Project" aria-label="Search" />
                                    <Button variant='light' className="btn btn-light" type="submit">Search</Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className="align-items-center">
                            <div className="me-2">
                                <span className="avatar avatar-rounded p-1 bg-danger-transparent">
                                    <img src={logo1} alt="" />
                                </span>
                            </div>
                            <div className="flex-fill">
                                <Link to="#" className="fw-semibold fs-14 d-block text-truncate project-list-title">Design & Developing New Project</Link>
                                <span className="text-muted d-block fs-12">Total <strong className="text-default">18/22</strong> tasks completed</span>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-icon btn-sm btn-light no-caret">
                                    <i className="fe fe-more-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item>
                                    <Dropdown.Item href="#"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item>
                                    <Dropdown.Item href="#"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <div className="fw-semibold mb-1">Team :</div>
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
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face10} alt="img" />
                                        </span>
                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" to="#">
                                            +2
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="fw-semibold mb-1">Priority :</div>
                                    <span className="badge bg-success-transparent">Low</span>
                                </div>
                            </div>
                            <div className="fw-semibold mb-1">Description :</div>
                            <p className="text-muted mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.</p>
                            <div className="fw-semibold mb-1">Status :</div>
                            <div>
                                <div></div>
                                <ProgressBar now={80} className="progress progress-xs progress-animate" variant='primary' />
                                <div className="mt-1"><span className="text-primary fw-semibold">80%</span> Completed</div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted fs-11 d-block">Assigned Date :</span>
                                <span className="fw-semibold d-block">24,May 2023</span>
                            </div>
                            <div className="text-end">
                                <span className="text-muted fs-11 d-block">Due Date :</span>
                                <span className="fw-semibold d-block">12,Jul 2023</span>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className=" align-items-center">
                            <div className="me-2">
                                <span className="avatar avatar-rounded p-1 bg-warning-transparent">
                                    <img src={logo2} alt="" />
                                </span>
                            </div>
                            <div className="flex-fill">
                                <Link to="#" className="fw-semibold fs-14 d-block text-truncate project-list-title">Content Management System (CMS) Integration</Link>
                                <span className="text-muted d-block fs-12">Total <strong className="text-default">26/68</strong> tasks completed</span>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-icon btn-sm btn-light no-caret">
                                    <i className="fe fe-more-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item>
                                    <Dropdown.Item href="#"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item>
                                    <Dropdown.Item href="#"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <div className="fw-semibold mb-1">Team :</div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face12} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face9} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face11} alt="img" />
                                        </span>
                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" to="#">
                                            +4
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="fw-semibold mb-1">Priority :</div>
                                    <span className="badge bg-info-transparent">Medium</span>
                                </div>
                            </div>
                            <div className="fw-semibold mb-1">Description :</div>
                            <p className="text-muted mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.</p>
                            <div className="fw-semibold mb-1">Status :</div>
                            <div>
                                <div></div>
                                <ProgressBar now={45} className="progress progress-xs progress-animate" />
                                <div className="mt-1"><span className="text-primary fw-semibold">45%</span> Completed</div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted fs-11 d-block">Assigned Date :</span>
                                <span className="fw-semibold d-block">20,May 2023</span>
                            </div>
                            <div className="text-end">
                                <span className="text-muted fs-11 d-block">Due Date :</span>
                                <span className="fw-semibold d-block">10,Jun 2023</span>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className="align-items-center">
                            <div className="me-2">
                                <span className="avatar avatar-rounded p-1 bg-secondary-transparent">
                                    <img src={logo3} alt="" />
                                </span>
                            </div>
                            <div className="flex-fill">
                                <Link to="#" className="fw-semibold fs-14 d-block text-truncate project-list-title">Task Scheduler and Automation</Link>
                                <span className="text-muted d-block fs-12">Total <strong className="text-default">21/45</strong> tasks completed</span>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-icon btn-sm btn-light no-caret">
                                    <i className="fe fe-more-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item>
                                    <Dropdown.Item href="#"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item>
                                    <Dropdown.Item href="#"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <div className="fw-semibold mb-1">Team :</div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face5} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face6} alt="img" />
                                        </span>
                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" to="#">
                                            +1
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="fw-semibold mb-1">Priority :</div>
                                    <span className="badge bg-success-transparent">Low</span>
                                </div>
                            </div>
                            <div className="fw-semibold mb-1">Description :</div>
                            <p className="text-muted mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.</p>
                            <div className="fw-semibold mb-1">Status :</div>
                            <div>
                                <div></div>
                                <ProgressBar now={66} className="progress progress-xs progress-animate" />
                                <div className="mt-1"><span className="text-primary fw-semibold">66%</span> Completed</div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted fs-11 d-block">Assigned Date :</span>
                                <span className="fw-semibold d-block">31,May 2023</span>
                            </div>
                            <div className="text-end">
                                <span className="text-muted fs-11 d-block">Due Date :</span>
                                <span className="fw-semibold d-block">10,Jul 2023</span>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className="align-items-center">
                            <div className="me-2">
                                <span className="avatar avatar-rounded p-1 bg-success-transparent">
                                    <img src={logo5} alt="" />
                                </span>
                            </div>
                            <div className="flex-fill">
                                <Link to="#" className="fw-semibold fs-14 d-block text-truncate project-list-title">Advanced Search and Filtering</Link>
                                <span className="text-muted d-block fs-12">Total <strong className="text-default">45/54</strong> tasks completed</span>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-icon btn-sm btn-light no-caret">
                                    <i className="fe fe-more-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item>
                                    <Dropdown.Item href="#"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item>
                                    <Dropdown.Item href="#"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <div className="fw-semibold mb-1">Team :</div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face3} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face9} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face12} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face11} alt="img" />
                                        </span>
                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" to="#">
                                            +2
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="fw-semibold mb-1">Priority :</div>
                                    <span className="badge bg-danger-transparent">High</span>
                                </div>
                            </div>
                            <div className="fw-semibold mb-1">Description :</div>
                            <p className="text-muted mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.</p>
                            <div className="fw-semibold mb-1">Status :</div>
                            <div>
                                <div></div>
                                <ProgressBar now={89} className="progress progress-xs progress-animate" />

                                <div className="mt-1"><span className="text-primary fw-semibold">89%</span> Completed</div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted fs-11 d-block">Assigned Date :</span>
                                <span className="fw-semibold d-block">02,Jun 2023</span>
                            </div>
                            <div className="text-end">
                                <span className="text-muted fs-11 d-block">Due Date :</span>
                                <span className="fw-semibold d-block">15,Jun 2023</span>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <div className="card-header align-items-center">
                            <div className="me-2">
                                <span className="avatar avatar-rounded p-1 bg-primary-transparent">
                                    <img src={logo8} alt="" />
                                </span>
                            </div>
                            <div className="flex-fill">
                                <Link to="#" className="fw-semibold fs-14 d-block text-truncate project-list-title">Data Export and Reporting</Link>
                                <span className="text-muted d-block fs-12">Total <strong className="text-default">14/26</strong> tasks completed</span>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-icon btn-sm btn-light no-caret">
                                    <i className="fe fe-more-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item>
                                    <Dropdown.Item href="#"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item>
                                    <Dropdown.Item href="#"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <div className="fw-semibold mb-1">Team :</div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face10} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face2} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face1} alt="img" />
                                        </span>
                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" to="#">
                                            +1
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="fw-semibold mb-1">Priority :</div>
                                    <span className="badge bg-info-transparent">Medium</span>
                                </div>
                            </div>
                            <div className="fw-semibold mb-1">Description :</div>
                            <p className="text-muted mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.</p>
                            <div className="fw-semibold mb-1">Status :</div>
                            <div>
                                <div></div>
                                <ProgressBar now={60} className="progress progress-xs progress-animate" />
                                <div className="mt-1"><span className="text-primary fw-semibold">60%</span> Completed</div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted fs-11 d-block">Assigned Date :</span>
                                <span className="fw-semibold d-block">29,May 2023</span>
                            </div>
                            <div className="text-end">
                                <span className="text-muted fs-11 d-block">Due Date :</span>
                                <span className="fw-semibold d-block">08,Jun 2023</span>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className="card-header align-items-center">
                            <div className="me-2">
                                <span className="avatar avatar-rounded p-1 bg-success-transparent">
                                    <img src={logo10} alt="" />
                                </span>
                            </div>
                            <div className="flex-fill">
                                <Link to="#" className="fw-semibold fs-14 d-block text-truncate project-list-title">Activity Log and Audit Trail</Link>
                                <span className="text-muted d-block fs-12">Total <strong className="text-default">28/64</strong> tasks completed</span>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fe fe-more-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item>
                                    <Dropdown.Item href="#"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item>
                                    <Dropdown.Item href="#"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <div className="fw-semibold mb-1">Team :</div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face7} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face13} alt="img" />
                                        </span>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="fw-semibold mb-1">Priority :</div>
                                    <span className="badge bg-success-transparent">Low</span>
                                </div>
                            </div>
                            <div className="fw-semibold mb-1">Description :</div>
                            <p className="text-muted mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.</p>
                            <div className="fw-semibold mb-1">Status :</div>
                            <div>
                                <div></div>
                                <ProgressBar now={45} className="progress progress-xs progress-animate" />
                                <div className="mt-1"><span className="text-primary fw-semibold">45%</span> Completed</div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted fs-11 d-block">Assigned Date :</span>
                                <span className="fw-semibold d-block">04,Jun 2023</span>
                            </div>
                            <div className="text-end">
                                <span className="text-muted fs-11 d-block">Due Date :</span>
                                <span className="fw-semibold d-block">15,Jun 2023</span>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className="card-header align-items-center">
                            <div className="me-2">
                                <span className="avatar avatar-rounded p-1 bg-info-transparent">
                                    <img src={logo9} alt="" />
                                </span>
                            </div>
                            <div className="flex-fill">
                                <Link to="#" className="fw-semibold fs-14 d-block text-truncate project-list-title">Role-Based Access Control (RBAC) Implementation</Link>
                                <span className="text-muted d-block fs-12">Total <strong className="text-default">86/122</strong> tasks completed</span>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-icon btn-sm btn-light no-caret">
                                    <i className="fe fe-more-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item>
                                    <Dropdown.Item href="#"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item>
                                    <Dropdown.Item href="#"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <div className="fw-semibold mb-1">Team :</div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face5} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face14} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face15} alt="img" />
                                        </span>
                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" to="#">
                                            +2
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="fw-semibold mb-1">Priority :</div>
                                    <span className="badge bg-danger-transparent">High</span>
                                </div>
                            </div>
                            <div className="fw-semibold mb-1">Description :</div>
                            <p className="text-muted mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.</p>
                            <div className="fw-semibold mb-1">Status :</div>
                            <div>
                                <div></div>
                                <ProgressBar now={65} className="progress progress-xs progress-animate" />
                                <div className="mt-1"><span className="text-primary fw-semibold">65%</span> Completed</div>
                            </div>
                        </Card.Body>
                        <div className="card-footer d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted fs-11 d-block">Assigned Date :</span>
                                <span className="fw-semibold d-block">24,Jun 2023</span>
                            </div>
                            <div className="text-end">
                                <span className="text-muted fs-11 d-block">Due Date :</span>
                                <span className="fw-semibold d-block">05,Jul 2023</span>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xxl={3}>
                    <Card className="custom-card">
                        <Card.Header className="card-header align-items-center">
                            <div className="me-2">
                                <span className="avatar avatar-rounded p-1 bg-teal-transparent">
                                    <img src={logo6} alt="" />
                                </span>
                            </div>
                            <div className="flex-fill">
                                <Link to="#" className="fw-semibold fs-14 d-block text-truncate project-list-title">Customizable Themes and Layouts</Link>
                                <span className="text-muted d-block fs-12">Total <strong className="text-default">20/26</strong> tasks completed</span>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-icon btn-sm btn-light no-caret">
                                    <i className="fe fe-more-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#"><i className="ri-eye-line align-middle me-1 d-inline-block"></i>View</Dropdown.Item>
                                    <Dropdown.Item href="#"><i className="ri-edit-line align-middle me-1 d-inline-block"></i>Edit</Dropdown.Item>
                                    <Dropdown.Item href="#"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center justify-content-between mb-3">
                                <div>
                                    <div className="fw-semibold mb-1">Team :</div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face13} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face16} alt="img" />
                                        </span>
                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" to="#">
                                            +2
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="fw-semibold mb-1">Priority :</div>
                                    <span className="badge bg-info-transparent">Medium</span>
                                </div>
                            </div>
                            <div className="fw-semibold mb-1">Description :</div>
                            <p className="text-muted mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.</p>
                            <div className="fw-semibold mb-1">Status :</div>
                            <div>
                                <div></div>
                                <ProgressBar now={75} className="progress progress-xs progress-animate" />
                                <div className="mt-1"><span className="text-primary fw-semibold">75%</span> Completed</div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer d-flex align-items-center justify-content-between">
                            <div>
                                <span className="text-muted fs-11 d-block">Assigned Date :</span>
                                <span className="fw-semibold d-block">20,Jun 2023</span>
                            </div>
                            <div className="text-end">
                                <span className="text-muted fs-11 d-block">Due Date :</span>
                                <span className="fw-semibold d-block">18,Jul 2023</span>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Pagination className="pagination justify-content-end">
                <Pagination.Item disabled className="page-item disabled" href="#">Previous
                </Pagination.Item>
                <Pagination.Item href="#">1</Pagination.Item>
                <Pagination.Item href="#">2</Pagination.Item>
                <Pagination.Item href="#">3</Pagination.Item>
                <Pagination.Item href="#">Next</Pagination.Item>
            </Pagination>
        </Fragment>
    );
};

export default Projectslist;
