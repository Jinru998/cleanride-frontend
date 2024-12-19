import { FC, Fragment } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import face2 from "../../../../assets/images/faces/2.jpg";
import face4 from "../../../../assets/images/faces/4.jpg";
import face5 from "../../../../assets/images/faces/5.jpg";
import face8 from "../../../../assets/images/faces/8.jpg";
import face9 from "../../../../assets/images/faces/9.jpg";
import face10 from "../../../../assets/images/faces/10.jpg";
import face11 from "../../../../assets/images/faces/11.jpg";
import face13 from "../../../../assets/images/faces/13.jpg";
import media26 from "../../../../assets/images/media/media-26.jpg";
import media29 from "../../../../assets/images/media/media-29.jpg";
import media39 from "../../../../assets/images/media/media-39.jpg";
import media18 from "../../../../assets/images/media/media-18.jpg";
import filemanager1 from "../../../../assets/images/media/file-manager/1.png";
import filemanager3 from "../../../../assets/images/media/file-manager/3.png";
import { Link } from 'react-router-dom';

interface ProjectoverviewProps { }

const Projectoverview: FC<ProjectoverviewProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Projects Overview" heading="Projects" active="Projects Overview" />
            <Row>
                <Col xl={9}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <Card.Title>
                                Project Details
                            </Card.Title>
                            <div>
                                <Link to={`${import.meta.env.BASE_URL}apps/projects/createproject/`} className="btn btn-sm btn-secondary btn-wave"><i className="ri-add-line align-middle me-1 fw-semibold"></i>Create Project</Link>
                            </div>
                        </div>
                        <Card.Body>
                            <h5 className="fw-semibold mb-4 task-title">
                                Ynex new angular project.
                            </h5>
                            <div className="fs-15 fw-semibold mb-2">Project Description :</div>
                            <p className="text-muted task-description">The current website design needs a refresh to improve user experience and enhance visual appeal. The goal is to create a modern and responsive design that aligns with the latest web design trends. The updated design should ensure seamless navigation, easy readability, and a cohesive visual identity.</p>
                            <div className="fs-15 fw-semibold mb-2">Key tasks :</div>
                            <div className="mb-3">
                                <ul className="task-details-key-tasks mb-0">
                                    <li>Conducting a comprehensive analysis of the existing website design.</li>
                                    <li>Collaborating with the UI/UX team to develop wireframes and mockups.</li>
                                    <li>Iteratively refining the design based on feedback.</li>
                                    <li>Implementing the finalized design changes using HTML, CSS, and JavaScript.</li>
                                    <li>Testing the website across different devices and browsers.</li>
                                    <li>Conducting a final review to ensure all design elements are consistent and visually appealing.</li>
                                </ul>
                            </div>
                            <div className="fs-15 fw-semibold mb-2">Skills :</div>
                            <div>
                                <span className="badge bg-light text-default">UI/Ux</span>
                                <span className="badge bg-light text-default">JavaScript</span>
                                <span className="badge bg-light text-default">Responsive Design</span>
                                <span className="badge bg-light text-default">Web Accessibility</span>
                                <span className="badge bg-light text-default">Front-End Build Tools</span>
                                <span className="badge bg-light text-default">RESTful APIs</span>
                                <span className="badge bg-light text-default">Performance Testing</span>
                                <span className="badge bg-light text-default">Angular</span>
                                <span className="badge bg-light text-default">Vue.js</span>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                <div>
                                    <span className="d-block text-muted fs-12">Project Manager</span>
                                    <div className="d-flex align-items-center">
                                        <div className="me-2 lh-1">
                                            <span className="avatar avatar-xs avatar-rounded">
                                                <img src={face13} alt="" />
                                            </span>
                                        </div>
                                        <span className="d-block fs-14 fw-semibold">S.K.Jacob</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="d-block text-muted fs-12">Start Date</span>
                                    <span className="d-block fs-14 fw-semibold">22,June 2023</span>
                                </div>
                                <div>
                                    <span className="d-block text-muted fs-12">End Date</span>
                                    <span className="d-block fs-14 fw-semibold">10,July 2023</span>
                                </div>
                                <div>
                                    <span className="d-block text-muted fs-12">Assigned To</span>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-original-title="Simon">
                                            <img src={face2} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-original-title="Sasha">
                                            <img src={face8} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-original-title="Anagha">
                                            <img src={face5} alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-original-title="Hishen">
                                            <img src={face10} alt="img" />
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <span className="d-block text-muted fs-12">Status</span>
                                    <span className="d-block"><span className="badge bg-primary-transparent">In Progress</span></span>
                                </div>
                                <div>
                                    <span className="d-block text-muted fs-12">Priority</span>
                                    <span className="d-block fs-14 fw-semibold"><span className="badge bg-success-transparent">Low</span></span>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Project Discussions</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled profile-timeline">
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm bg-primary-transparent avatar-rounded profile-timeline-avatar">
                                            E
                                        </span>
                                        <p className="mb-2">
                                            <b>You</b> Commented on <b>Work Process</b> in this project <Link className="text-secondary" to="#"><u>#New Project</u></Link>.<span className="float-end fs-11 text-muted">24,Dec 2023 - 14:34</span>
                                        </p>
                                        <p className="text-muted mb-0">
                                            Project is important and need to be completed on time to meet company work flow.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                            <img src={face11} alt="" />
                                        </span>
                                        <p className="text-muted mb-2">
                                            <span className="text-default"><b>Json Smith</b> reacted to the project &#128077;</span>.<span className="float-end fs-11 text-muted">18,Dec 2023 - 12:16</span>
                                        </p>
                                        <p className="text-muted mb-0">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellendus rem rerum excepturi aperiam ipsam temporibus inventore ullam tempora eligendi libero sequi dignissimos cumque, et a sint tenetur consequatur omnis!
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                            <img src={face4} alt="" />
                                        </span>
                                        <p className="text-muted mb-2">
                                            <span className="text-default"><b>Alicia Keys</b> shared a document with <b>you</b></span>.<span className="float-end fs-11 text-muted">21,Dec 2023 - 15:32</span>
                                        </p>
                                        <p className="profile-activity-media mb-0">
                                            <Link to="#">
                                                <img src={filemanager3} alt="" />
                                            </Link>
                                            <span className="fs-11 text-muted">432.87KB</span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm bg-success-transparent avatar-rounded profile-timeline-avatar">
                                            P
                                        </span>
                                        <p className="text-muted mb-2">
                                            <span className="text-default"><b>You</b> shared a post with 4 people <b>Simon,Sasha,Anagha,Hishen</b></span>.<span className="float-end fs-11 text-muted">28,Dec 2023 - 18:46</span>
                                        </p>
                                        <p className="profile-activity-media mb-2">
                                            <Link to="#">
                                                <img src={media18} alt="" />
                                            </Link>
                                        </p>
                                        <div>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face2} alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face8} alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face5} alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face10} alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                            <img src={media39} alt="" />
                                        </span>
                                        <p className="mb-1">
                                            <b>Json</b> Commented on Project <Link className="text-secondary" to="#"><u>#UI Technologies</u></Link>.<span className="float-end fs-11 text-muted">24,Dec 2023 - 14:34</span>
                                        </p>
                                        <p className="text-muted">Technology id developing rapidly keep up your work &#128076;</p>
                                        <p className="profile-activity-media mb-0">
                                            <Link to="#">
                                                <img src={media26} alt="" />
                                            </Link>
                                            <Link to="#">
                                                <img src={media29} alt="" />
                                            </Link>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            <div className="d-sm-flex align-items-center lh-1">
                                <div className="me-sm-3 mb-2 mb-sm-0">
                                    <span className="avatar avatar-md avatar-rounded">
                                        <img src={face9} alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill me-2">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Post Anything" aria-label="Recipient's username with two button addons" />
                                        <Button variant="" className="btn btn-outline-light btn-wave waves-effect waves-light" type="button"><i className="bi bi-emoji-smile"></i></Button>
                                        <Button variant="" className="btn btn-outline-light btn-wave waves-effect waves-light" type="button"><i className="bi bi-paperclip"></i></Button>
                                        <Button variant="" className="btn btn-outline-light btn-wave waves-effect waves-light" type="button"><i className="bi bi-camera"></i></Button>
                                        <Button variant="primary" className="btn btn-primary btn-wave waves-effect waves-light" type="button">Post</Button>
                                    </div>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Project Team
                            </Card.Title>
                            <div>
                                <Button variant="" className="btn btn-light btn-sm btn-wave"><i className="ri-add-line align-middle me-1 fw-semibold"></i>Add Member</Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="card-body p-0">
                            <div className="table-responsive">
                                <table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Designation</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src={face2} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-semibold">Simon Conway</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-primary-transparent">UI Developer</span>
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <Button variant="info-light" className="btn btn-sm btn-icon btn-wave waves-effect waves-light"><i className="ri-edit-line"></i></Button>
                                                    <Button variant="danger-light" className="btn btn-sm btn-icon  btn-wave waves-effect waves-light"><i className="ri-delete-bin-line"></i></Button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src={face8} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-semibold">Sasha Banks</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-pink-transparent">Ui Designer</span>
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <Button variant="info-light" className="btn btn-sm btn-icon  btn-wave waves-effect waves-light"><i className="ri-edit-line"></i></Button>
                                                    <Button variant="danger-light" className="btn btn-sm btn-icon btn-wave waves-effect waves-light"><i className="ri-delete-bin-line"></i></Button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src={face5} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-semibold">Anagha May</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-warning-transparent">UI Tester</span>
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <Button variant="info-light" className="btn btn-sm btn-icon  btn-wave waves-effect waves-light"><i className="ri-edit-line"></i></Button>
                                                    <Button variant="danger-light" className="btn btn-sm btn-icon  btn-wave waves-effect waves-light"><i className="ri-delete-bin-line"></i></Button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src={face10} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-semibold">Hishen Stuart</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-success-transparent">Angular Developer</span>
                                            </td>
                                            <td>
                                                <div className="btn-list">
                                                    <Button variant="" className="btn btn-sm btn-icon btn-info-light btn-wave waves-effect waves-light"><i className="ri-edit-line"></i></Button>
                                                    <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light"><i className="ri-delete-bin-line"></i></Button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>Project Goals</Card.Title>
                            <div className="btn btn-sm btn-light btn-wave"><i className="ri-add-line align-middle me-1 fw-semibold"></i>Add Goal</div>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked1" defaultChecked /></div>
                                        <div className="fw-semibold">Increase Efficiency</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked2" /></div>
                                        <div className="fw-semibold">Enhance Customer Satisfaction</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked3" /></div>
                                        <div className="fw-semibold">Expand Market Reach</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked4" /></div>
                                        <div className="fw-semibold">Improve Profitability</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked5" defaultChecked /></div>
                                        <div className="fw-semibold">Enhance Product/Service Quality</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked6" defaultChecked /></div>
                                        <div className="fw-semibold">Develop Innovative Solutions</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked7" defaultChecked /></div>
                                        <div className="fw-semibold">Increase Employee Engagement</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked77" /></div>
                                        <div className="fw-semibold">Enhance Brand Reputation</div>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-3 text-center">
                                <Button variant="" className="btn btn-success btn-wave">View All</Button>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header>
                            <Card.Title>
                                Project Documents
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded p-2 bg-light">
                                                <img src={filemanager1} alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <Link to="#"><span className="d-block fw-semibold">Full Project</span></Link>
                                            <span className="d-block text-muted fs-12 fw-normal">0.45MB</span>
                                        </div>
                                        <div className="btn-list">
                                            <Button variant="info-light" className="btn btn-sm btn-icon  btn-wave"><i className="ri-edit-line"></i></Button>
                                            <Button variant="danger-light " className="btn btn-sm btn-icon btn-btn-wave"><i className="ri-delete-bin-line"></i></Button>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded bg-light">
                                                <img src={filemanager3} alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <Link to="#"><span className="d-block fw-semibold">assets.zip</span></Link>
                                            <span className="d-block text-muted fs-12 fw-normal">0.99MB</span>
                                        </div>
                                        <div className="btn-list">
                                            <Button variant="info-light" className="btn btn-sm btn-icon - btn-wave"><i className="ri-edit-line"></i></Button>
                                            <Button variant="danger-light" className="btn btn-sm btn-icon  btn-wave"><i className="ri-delete-bin-line"></i></Button>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded p-2 bg-light">
                                                <img src={filemanager1} alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <Link to="#"><span className="d-block fw-semibold">image-1.png</span></Link>
                                            <span className="d-block text-muted fs-12 fw-normal">245KB</span>
                                        </div>
                                        <div className="btn-list">
                                            <Button variant="info-light" className="btn btn-sm btn-icon  btn-wave"><i className="ri-edit-line"></i></Button>
                                            <Button variant="danger-light" className="btn btn-sm btn-icon  btn-wave"><i className="ri-delete-bin-line"></i></Button>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded bg-light">
                                                <img src={filemanager3} alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <Link to="#"><span className="d-block fw-semibold">documentation.zip</span></Link>
                                            <span className="d-block text-muted fs-12 fw-normal">2MB</span>
                                        </div>
                                        <div className="btn-list">
                                            <Button variant="" className="btn btn-sm btn-icon btn-info-light btn-wave"><i className="ri-edit-line"></i></Button>
                                            <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave"><i className="ri-delete-bin-line"></i></Button>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="d-flex align-items-center flex-wrap gap-2">
                                        <div className="lh-1">
                                            <span className="avatar avatar-rounded bg-light">
                                                <img src={filemanager3} alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <Link to="#"><span className="d-block fw-semibold">landing.zip</span></Link>
                                            <span className="d-block text-muted fs-12 fw-normal">3.46MB</span>
                                        </div>
                                        <div className="btn-list">
                                            <Button variant="" className="btn btn-sm btn-icon btn-info-light btn-wave"><i className="ri-edit-line"></i></Button>
                                            <Button variant="" className="btn btn-sm btn-icon btn-danger-light btn-wave"><i className="ri-delete-bin-line"></i></Button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Projectoverview;
