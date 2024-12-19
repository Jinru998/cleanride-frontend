import  { FC, Fragment } from 'react';
import { Button, Card, Col, Form, InputGroup, ListGroup, ProgressBar, Row, Table } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import { Attachmentdata, Subtaskdata } from './taskdata';
import media18 from "../../../assets/images/media/media-18.jpg";
import media29 from "../../../assets/images/media/media-29.jpg";
import media39 from "../../../assets/images/media/media-39.jpg";
import media26 from "../../../assets/images/media/media-26.jpg";
import filemanager3 from "../../../assets/images/media/file-manager/3.png";
import face2 from "../../../assets/images/faces/2.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import face9 from "../../../assets/images/faces/9.jpg";
import face10 from "../../../assets/images/faces/10.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face15 from "../../../assets/images/faces/15.jpg";

interface TaskdetailsProps { }

const Taskdetails: FC<TaskdetailsProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Task Details" heading="Task" active="Task Details" />
            <Row>
                <Col xl={9}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Task Summary</Card.Title>
                            <div className="btn-list">
                                <Button variant='success' className="btn  btn-sm btn-wave me-0"><i className="ri-edit-line me-1 align-middle"></i>Edit Task</Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <h5 className="fw-semibold mb-4 task-title">
                                Update ynex new project design.
                            </h5>
                            <div className="fs-15 fw-semibold mb-2">Task Description :</div>
                            <p className="text-muted task-description">The current website design needs a refresh to improve user experience and enhance visual appeal. The goal is to create a modern and responsive design that aligns with the latest web design trends. The updated design should ensure seamless navigation, easy readability, and a cohesive visual identity.</p>
                            <div className="fs-15 fw-semibold mb-2">Key tasks :</div>
                            <div>
                                <ul className="task-details-key-tasks mb-0">
                                    <li>Conducting a comprehensive analysis of the existing website design.</li>
                                    <li>Collaborating with the UI/UX team to develop wireframes and mockups.</li>
                                    <li>Iteratively refining the design based on feedback.</li>
                                    <li>Implementing the finalized design changes using HTML, CSS, and JavaScript.</li>
                                    <li>Testing the website across different devices and browsers.</li>
                                    <li>Conducting a final review to ensure all design elements are consistent and visually appealing.</li>
                                </ul>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
                                <div>
                                    <span className="d-block text-muted fs-12">Assigned By</span>
                                    <div className="d-flex align-items-center">
                                        <div className="me-2 lh-1">
                                            <span className="avatar avatar-xs avatar-rounded">
                                                <img src={face15} alt="" />
                                            </span>
                                        </div>
                                        <span className="d-block fs-14 fw-semibold">H.J.Taylor</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="d-block text-muted fs-12">Assigned Date</span>
                                    <span className="d-block fs-14 fw-semibold">24,June 2023</span>
                                </div>
                                <div>
                                    <span className="d-block text-muted fs-12">Due Date</span>
                                    <span className="d-block fs-14 fw-semibold">05,July 2023</span>
                                </div>
                                <div className="task-details-progress">
                                    <span className="d-block text-muted fs-12 mb-1">Progress</span>
                                    <div className="d-flex align-items-center">
                                        <ProgressBar variant='primary' now={70} className="progress progress-xs progress-animate flex-fill me-2" />
                                        <div className="text-muted fs-11">70%</div>
                                    </div>
                                </div>
                                <div>
                                    <span className="d-block text-muted fs-12">Efforts</span>
                                    <span className="d-block fs-14 fw-semibold">45H : 35M : 45S</span>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Task Discussions</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled profile-timeline">
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm bg-primary-transparent avatar-rounded profile-timeline-avatar">
                                            E
                                        </span>
                                        <p className="mb-2">
                                            <b>You</b> Commented on <b>Work Process</b> in this task <Link className="text-secondary" to="#"><u>#New Task</u></Link>.<span className="float-end fs-11 text-muted">24,Dec 2023 - 14:34</span>
                                        </p>
                                        <p className="text-muted mb-0">
                                            Task is important and need to be completed on time to meet company work flow.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                            <img src={face11} alt="" />
                                        </span>
                                        <p className="text-muted mb-2">
                                            <span className="text-default"><b>Json Smith</b> reacted to the task &#128077;</span>.<span className="float-end fs-11 text-muted">18,Dec 2023 - 12:16</span>
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
                                                    <img src={face2} alt="img" />
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
                                            <b>Json</b> Commented on Task post <Link className="text-secondary" to="#"><u>#UI Technologies</u></Link>.<span className="float-end fs-11 text-muted">24,Dec 2023 - 14:34</span>
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
                        <Card.Footer>
                            <div className="d-sm-flex align-items-center lh-1">
                                <div className="me-sm-3 mb-2 mb-sm-0">
                                    <span className="avatar avatar-md avatar-rounded">
                                        <img src={face9} alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill me-2">
                                    <InputGroup>
                                        <Form.Control type="text" className="w-lg-50" placeholder="Post Anything" aria-label="Recipient's username with two button addons" />
                                        <Button variant='outline-light' className="btn  btn-wave waves-effect waves-light" type="button"><i className="bi bi-emoji-smile"></i></Button>
                                        <Button variant='outline-light' className="btn  btn-wave waves-effect waves-light" type="button"><i className="bi bi-paperclip"></i></Button>
                                        <Button variant='outline-light' className="btn  btn-wave waves-effect waves-light" type="button"><i className="bi bi-camera"></i></Button>
                                        <Button variant='primary' className="btn  btn-wave waves-effect waves-light" type="button">Post</Button>
                                    </InputGroup>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Additional Details
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" p-0">
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <tbody>
                                        <tr>
                                            <td><span className="fw-semibold">Task ID :</span></td>
                                            <td>SPK - 123</td>
                                        </tr>
                                        <tr>
                                            <td><span className="fw-semibold">Task Tags :</span></td>
                                            <td>
                                                <span className="badge bg-primary-transparent me-1">UI/Ux</span>
                                                <span className="badge bg-primary-transparent me-1">Designing</span>
                                                <span className="badge bg-primary-transparent">Development</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="fw-semibold">Project Name :</span></td>
                                            <td>
                                                Ynex admin & dashboard template
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="fw-semibold">Project Status :</span></td>
                                            <td>
                                                <span className="fw-semibold text-secondary">Inprogress</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="fw-semibold">Project Priority :</span></td>
                                            <td>
                                                <span className="badge bg-danger-transparent">High</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="fw-semibold">Assigned To :</span></td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-original-title="Simon">
                                                        <img src={face2} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-original-title="Sasha">
                                                        <img src={face8} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-original-title="Anagha">
                                                        <img src={face2} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-original-title="Hishen">
                                                        <img src={face10} alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Sub Tasks</Card.Title>
                            <div>
                                <Button variant='secondary-light' className="btn  btn-sm btn-wave"><i className="ri-add-line me-1 align-middle"></i>Sub Task</Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup>
                                {Subtaskdata.map((idx) => (
                                    <ListGroup.Item key={Math.random()}>
                                        <div className="d-flex align-items-center">
                                            <div className="me-2" >
                                                <input id={idx.id} className={`form-check-input form-checked-success form-checked-${idx.class === 'defaultChecked' ? 'success' : ''}`}
                                                    type="checkbox" value="" defaultChecked={idx.class === 'defaultChecked'} /></div>
                                            <div className="fw-semibold">{idx.text}</div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header>
                            <Card.Title>
                                Attachments
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <ListGroup variant='flush'>
                                {Attachmentdata.map((idx) => (
                                    <ListGroup.Item key={Math.random()}>
                                        <div className="d-flex align-items-center flex-wrap gap-2">
                                            <div className="lh-1">
                                                <span className={`avatar avatar-rounded bg-light ${idx.class}`}>
                                                    <img src={idx.src} alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <Link to="#"><span className="d-block fw-semibold">{idx.text1}</span></Link>
                                                <span className="d-block text-muted fs-12 fw-normal">{idx.text2}</span>
                                            </div>
                                            <div className="btn-list">
                                                <Button variant='info-light' className="btn btn-sm btn-icon btn-wave"><i className="ri-edit-line"></i></Button>
                                                <Button variant='danger-light' className="btn btn-sm btn-icon  btn-wave"><i className="ri-delete-bin-line"></i></Button>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Fragment>
    );
};

export default Taskdetails;
