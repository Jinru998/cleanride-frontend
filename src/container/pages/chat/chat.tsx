import { FC, Fragment } from 'react';
import { Button, Col, Dropdown, Nav, OverlayTrigger, Row, Tab, Tooltip, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { Scrollbar } from 'react-scrollbars-custom';
// import RSC from "react-scrollbars-custom";
import { Photosmediadata } from './chatdata';
import face2 from "../../../assets/images/faces/2.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import face1 from "../../../assets/images/faces/1.jpg";
import face3 from "../../../assets/images/faces/3.jpg";
import face21 from "../../../assets/images/faces/21.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face6 from "../../../assets/images/faces/6.jpg";
import face7 from "../../../assets/images/faces/7.jpg";
import face17 from "../../../assets/images/faces/17.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import face9 from "../../../assets/images/faces/9.jpg";
import face10 from "../../../assets/images/faces/10.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face12 from "../../../assets/images/faces/12.jpg";
import face13 from "../../../assets/images/faces/13.jpg";
import face14 from "../../../assets/images/faces/14.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import face16 from "../../../assets/images/faces/16.jpg";
import face18 from "../../../assets/images/faces/18.jpg";
import face19 from "../../../assets/images/faces/19.jpg";
import face20 from "../../../assets/images/faces/20.jpg";
import media62 from "../../../assets/images/media/media-62.jpg";
import media63 from "../../../assets/images/media/media-63.jpg";
import media64 from "../../../assets/images/media/media-64.jpg";
import PerfectScrollbar from 'react-perfect-scrollbar';

interface ChatProps { }

const Chat: FC<ChatProps> = () => {
    return (
        <Fragment>
            <div className="main-chart-wrapper p-2 gap-2 d-lg-flex">
                <div className="chat-info border">
                    <Link aria-label="anchor" to="#" className="btn btn-secondary btn-icon rounded-circle chat-add-icon">
                        <i className="ri-add-line"></i>
                    </Link>
                    <div className="d-flex align-items-center justify-content-between w-100 p-3 border-bottom">
                        <div>
                            <h5 className="fw-semibold mb-0">Messages</h5>
                        </div>
                        <Dropdown className="dropdown">
                            <Dropdown.Toggle variant='secondary-light' className="btn btn-icon btn-wave waves-light no-caret"
                                type="button" >
                                <i className="ri-settings-3-line"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <div className="chat-search p-3 border-bottom">
                        <div className="input-group">
                            <input type="text" className="form-control bg-light border-0" placeholder="Search Chat"
                                aria-describedby="button-addon2" />
                            <Button variant='' aria-label="button" className="btn btn-light" type="button" id="button-addon2"><i
                                className="ri-search-line text-muted"></i></Button>
                        </div>
                    </div>
                    <Tab.Container defaultActiveKey="first">
                        <Nav className="nav nav-tabs tab-style-2 nav-justified mb-0 border-bottom d-flex"
                            id="myTab1" role="tablist" defaultActiveKey="first">
                            <Nav.Item className="nav-item border-end me-0">
                                <Nav.Link href="#" eventKey="first" className="h-100">
                                    <i className="ri-history-line me-1 align-middle d-inline-block"></i>Recent
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="nav-item border-end me-0">
                                <Nav.Link className="h-100" href="#" eventKey="second">
                                    <i className="ri-group-2-line me-1 align-middle d-inline-block"></i>Groups
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#" className="h-100" eventKey="third">
                                    <i className="ri-phone-line me-1 align-middle d-inline-block"></i>Calls
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane className="border-0 chat-users-tab" eventKey="first">
                                <PerfectScrollbar>
                                    <ul className="list-unstyled mb-0 mt-2 chat-users-tab" id="chat-msg-scroll">
                                
                                        <li className="pb-0">
                                            <p className="text-muted fs-11 fw-semibold mb-2 op-7">ACTIVE CHATS</p>
                                        </li>
                                        <li className="checkforactive">
                                            <Link to="#">
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md online me-2 avatar-rounded">
                                                            <img src={face5} alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-semibold">
                                                            Sujika <span
                                                                className="float-end text-muted fw-normal fs-11">1:32PM</span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span className="chat-msg text-truncate">Need to go for lunch?</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                className="ri-check-double-fill"></i></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="checkforactive">
                                            <Link to="#"
                                            >
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md online me-2 avatar-rounded">
                                                            <img src={face2} alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-semibold">
                                                            Emiley Jackson <span
                                                                className="float-end text-muted fw-normal fs-11">12:24PM</span>
                                                        </p>
                                                        <p className="fs-12 mb-0 chat-msg-typing ">
                                                            <span className="chat-msg text-truncate">Typing...</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                className="ri-check-double-fill"></i></span>
                                                            <span
                                                                className="badge bg-success-transparent rounded-circle float-end">2</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="chat-msg-unread checkforactive" >
                                            <Link to="#"
                                            >
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md online me-2 avatar-rounded">
                                                            <img src={face10} alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-semibold">
                                                            McGreggor <span
                                                                className="float-end text-muted fw-normal fs-11">1:16PM</span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span className="chat-msg text-truncate">Nice to meet you &#128522;</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                className="ri-check-double-fill"></i></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="checkforactive">
                                            <Link to="#"
                                            >
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md online me-2 avatar-rounded">
                                                            <img src={face8} alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-semibold">
                                                            Alissa <span
                                                                className="float-end text-muted fw-normal fs-11">12:45PM</span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span className="chat-msg text-truncate">Chat with you
                                                                later,bye</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                className="ri-check-double-fill"></i></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="pb-0">
                                            <p className="text-muted fs-11 fw-semibold mb-2 op-7">ALL CHATS</p>
                                        </li>
                                        <li className="chat-inactive checkforactive" >
                                            <Link to="#"
                                            >
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md offline me-2 avatar-rounded" >
                                                            <img src={face11} alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-semibold">
                                                            Andreas <span
                                                                className="float-end text-muted fw-normal fs-11">11:54AM</span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span className="chat-msg text-truncate">Congratulations on your new
                                                                project</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                className="ri-check-double-fill"></i></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="chat-inactive checkforactive" >
                                            <Link to="#"
                                            //  onclick="changeTheInfo(this,'Melissa Sean','3','offline')"
                                            >
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                            <img src={face3} alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-semibold">
                                                            Melissa Sean <span
                                                                className="float-end text-muted fw-normal fs-11">9:45AM</span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span className="chat-msg text-truncate">Nice work,Congrats
                                                                &#128079;</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                className="ri-check-double-fill"></i></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="chat-inactive checkforactive" >
                                            <Link to="#"
                                            // onclick="changeTheInfo(this,'Samantha Paul','6','offline')"
                                            >
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                            <img src={face6} alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-semibold">
                                                            Samantha Paul <span
                                                                className="float-end text-muted fw-normal fs-11">8:31AM</span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span className="chat-msg text-truncate">Great work keep it up
                                                                :-)</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                className="ri-check-double-fill"></i></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="chat-inactive checkforactive" >
                                            <Link to="#"
                                            // onclick="changeTheInfo(this,'Megan Fox','4','offline')"
                                            >
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                            <img src={face4} alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-semibold">
                                                            Megan Fox <span
                                                                className="float-end text-muted fw-normal fs-11">7:23AM</span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span className="chat-msg text-truncate">You are need to be
                                                                appreaciated for what you have done,congs</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                className="ri-check-double-fill"></i></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="chat-inactive checkforactive" >
                                            <Link to="#"
                                            // onclick="changeTheInfo(this,'Nicholas Sams','13','offline')"
                                            >
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                            <img src={face13} alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-semibold">
                                                            Nicholas Sams <span
                                                                className="float-end text-muted fw-normal fs-11">10:22AM</span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span className="chat-msg text-truncate">Great Project</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                className="ri-check-double-fill"></i></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="chat-inactive checkforactive" >
                                            <Link to="#"
                                            //  onclick="changeTheInfo(this,'Pope Johnson','15','offline')"
                                            >
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                            <img src={face15} alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-semibold">
                                                            Pope Johnson <span
                                                                className="float-end text-muted fw-normal fs-11">9:10AM</span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span className="chat-msg text-truncate">Hike management
                                                                fixed</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                className="ri-check-double-fill"></i></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </PerfectScrollbar>
                            </Tab.Pane>
                            <Tab.Pane className="border-0 chat-groups-tab" eventKey="second" id="groups-tab-pane">
                                <PerfectScrollbar>
                                  
                                    <ul className="list-unstyled mb-0 mt-2 chat-groups-tab">
                                        <li className="pb-0">
                                            <p className="text-muted fs-11 fw-semibold mb-1 op-7">MY CHAT GROUPS</p>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p className="mb-0">1 Family Together</p>
                                                    <p className="mb-0"><span className="badge bg-success-transparent">4
                                                        Online</span></p>
                                                </div>
                                                <div className="avatar-list-stacked my-auto">
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
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                        to="#">
                                                        +19
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p className="mb-0">2 Work Buddies </p>
                                                    <p className="mb-0"><span className="badge bg-secondary-transparent">32
                                                        Online</span></p>
                                                </div>
                                                <div className="avatar-list-stacked my-auto">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face1} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face7} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face3} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face9} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face12} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                        to="#">
                                                        +123
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p className="mb-0">3 Friends Forever</p>
                                                    <p className="mb-0"><span className="badge bg-warning-transparent">3
                                                        Online</span></p>
                                                </div>
                                                <div className="avatar-list-stacked my-auto">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face4} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face8} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face13} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                        to="#">
                                                        +15
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p className="mb-0">4 Social Media Deals</p>
                                                    <p className="mb-0"><span className="badge bg-danger-transparent">5
                                                        Online</span></p>
                                                </div>
                                                <div className="avatar-list-stacked my-auto">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face1} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face7} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face14} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                        to="#">
                                                        +28
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <p className="mb-0">4 Apartment Group</p>
                                                    <p className="mb-0"><span className="badge bg-light text-dark">0 Online</span>
                                                    </p>
                                                </div>
                                                <div className="avatar-list-stacked my-auto">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face5} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face6} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face12} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face3} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                        to="#">
                                                        +53
                                                    </Link>
                                                </div>
                                            </div>
                                        </li>
                                   
                                        <li className="pb-0">
                                            <p className="text-muted fs-11 fw-semibold mb-1 op-7">GROUP CHATS</p>
                                        </li>
                                        <li className="checkforactive">
                                            <Link to="#"
                                            >
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md online me-2 avatar-rounded">
                                                            <img src={face17} alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-semibold" >
                                                            Family Together &#128525; <span
                                                                className="float-end text-muted fw-normal fs-11">12:24PM</span>
                                                        </p>
                                                        <p className="fs-12 mb-0 chat-msg-typing ">
                                                            <span className="chat-msg text-truncate">Hira Typing...</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                className="ri-check-double-fill"></i></span>
                                                            <span
                                                                className="badge bg-success-transparent rounded-circle float-end">2</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="chat-msg-unread checkforactive" >
                                            <Link to="#"
                                            //  onclick="changeTheInfo(this,'Work Buddies','19','online')"
                                            >
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md online me-2 avatar-rounded">
                                                            <img src={face18} alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-semibold" >
                                                            Work Buddies <span
                                                                className="float-end text-muted fw-normal fs-11">1:16PM</span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span className="chat-msg text-truncate"><span
                                                                className="group-indivudial">Rams:</span>Happy to be part of
                                                                this group</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                className="ri-check-double-fill"></i></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="chat-inactive checkforactive" >
                                            <Link to="#"
                                            //  onclick="changeTheInfo(this,'Friends Forever &#128526;','20','offline')"
                                            >
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                            <img src={face19} alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-semibold">
                                                            Friends Forever &#128526; <span
                                                                className="float-end text-muted fw-normal fs-11">3 days
                                                                ago</span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span
                                                                className="chat-msg text-truncate">Simon,Melissa,Amanda,Patrick,Siddique</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                className="ri-check-double-fill"></i></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="chat-inactive checkforactive" >
                                            <Link to="#"
                                            // onclick="changeTheInfo(this,'Social Media Deals','21','offline')"
                                            >
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                            <img src={face20} alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-semibold">
                                                            Social Media Deals <span
                                                                className="float-end text-muted fw-normal fs-11">5 days
                                                                ago</span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span
                                                                className="chat-msg text-truncate">Kamalan,Subha,Ambrose,Kiara,Jackson</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                className="ri-check-double-fill"></i></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="chat-inactive checkforactive" >
                                            <Link to="#"
                                            // onclick="changeTheInfo(this,'Apartment Group','22','offline')"
                                            >
                                                <div className="d-flex align-items-top">
                                                    <div className="me-1 lh-1">
                                                        <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                            <img src={face21} alt="img" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fw-semibold">
                                                            Apartment Group <span
                                                                className="float-end text-muted fw-normal fs-11">12 days
                                                                ago</span>
                                                        </p>
                                                        <p className="fs-12 mb-0">
                                                            <span
                                                                className="chat-msg text-truncate">Subman,Rajen,Kairo,Dibasha,Alexa</span>
                                                            <span className="chat-read-icon float-end align-middle"><i
                                                                className="ri-check-double-fill"></i></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </PerfectScrollbar>
                            </Tab.Pane>
                            <Tab.Pane className="tab-pane fade border-0 chat-calls-tab" id="calls-tab-pane" eventKey="third">
                                <PerfectScrollbar>
                                    <ul className="list-unstyled mb-0 mt-2 chat-calls-tab">
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-1 lh-1">
                                                    <span className="avatar avatar-md online me-2 avatar-rounded">
                                                        <img src={face5} alt="img" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill my-auto">
                                                    <p className="mb-0 fw-semibold">
                                                        Sujika
                                                        <span className="ms-1 incoming-call-success"><i
                                                            className="ti ti-arrow-down-left"></i></span>
                                                    </p>
                                                    <p className="fs-12 mb-0">
                                                        <span className="text-muted text-truncate">Today,12:47PM</span>
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light">
                                                        <i className="ti ti-phone"></i>
                                                    </Button>
                                                </div>
                                            </div>
                                        </li>
                                        <li >
                                            <div className="d-flex align-items-center">
                                                <div className="me-1 lh-1">
                                                    <span className="avatar avatar-md online me-2 avatar-rounded">
                                                        <img src={face7} alt="img" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill my-auto">
                                                    <p className="mb-0 fw-semibold">
                                                        Melissa
                                                        <span className="ms-1 outgoing-call-failed"><i
                                                            className="ti ti-arrow-up-right"></i></span>
                                                    </p>
                                                    <p className="fs-12 mb-0">
                                                        <span className="text-muted text-truncate">Today,10:27AM</span>
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light">
                                                        <i className="ti ti-phone"></i>
                                                    </Button>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-1 lh-1">
                                                    <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                        <img src={face21} alt="img" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill my-auto">
                                                    <p className="mb-0 fw-semibold">
                                                        Sharukh Sam
                                                        <span className="ms-1 outgoing-call-success"><i
                                                            className="ti ti-arrow-up-right"></i></span>
                                                    </p>
                                                    <p className="fs-12 mb-0">
                                                        <span className="text-muted text-truncate">Yesterday,12:45PM</span>
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light">
                                                        <i className="ti ti-video"></i>
                                                    </Button>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-1 lh-1">
                                                    <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                        <img src={face15} alt="img" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill my-auto">
                                                    <p className="mb-0 fw-semibold">
                                                        Kiram Kumal
                                                        <span className="ms-1 incoming-call-success"><i
                                                            className="ti ti-arrow-down-left"></i></span>
                                                    </p>
                                                    <p className="fs-12 mb-0">
                                                        <span className="text-muted text-truncate">3 Days ago</span>
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light">
                                                        <i className="ti ti-phone"></i>
                                                    </Button>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-1 lh-1">
                                                    <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                        <img src={face4} alt="img" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill my-auto">
                                                    <p className="mb-0 fw-semibold">
                                                        Amanda Sams
                                                        <span className="ms-1 incoming-call-success"><i
                                                            className="ti ti-arrow-down-left"></i></span>
                                                    </p>
                                                    <p className="fs-12 mb-0">
                                                        <span className="text-muted text-truncate">22, Oct 2022</span>
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light">
                                                        <i className="ti ti-video"></i>
                                                    </Button>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-1 lh-1">
                                                    <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                        <img src={face16} alt="img" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill my-auto">
                                                    <p className="mb-0 fw-semibold">
                                                        Azimo Peter
                                                        <span className="ms-1 incoming-call-failed"><i
                                                            className="ti ti-arrow-up-right"></i></span>
                                                    </p>
                                                    <p className="fs-12 mb-0">
                                                        <span className="text-muted text-truncate">24, Oct 2022</span>
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light">
                                                        <i className="ti ti-phone"></i>
                                                    </Button>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-1 lh-1">
                                                    <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                        <img src={face8} alt="img" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill my-auto">
                                                    <p className="mb-0 fw-semibold">
                                                        Sierra Adams
                                                        <span className="ms-1 incoming-call-success"><i
                                                            className="ti ti-arrow-down-left"></i></span>
                                                    </p>
                                                    <p className="fs-12 mb-0">
                                                        <span className="text-muted text-truncate">22, Oct 2022</span>
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light">
                                                        <i className="ti ti-phone"></i>
                                                    </Button>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-1 lh-1">
                                                    <span className="avatar avatar-md online me-2 avatar-rounded">
                                                        <img src={face3} alt="img" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill my-auto">
                                                    <p className="mb-0 fw-semibold">
                                                        Dimple Kanns
                                                        <span className="ms-1 incoming-call-success"><i
                                                            className="ti ti-arrow-down-left"></i></span>
                                                    </p>
                                                    <p className="fs-12 mb-0">
                                                        <span className="text-muted text-truncate">13, Oct 2022</span>
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light">
                                                        <i className="ti ti-video"></i>
                                                    </Button>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-1 lh-1">
                                                    <span className="avatar avatar-md online me-2 avatar-rounded">
                                                        <img src={face9} alt="img" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill my-auto">
                                                    <p className="mb-0 fw-semibold">
                                                        Adrea Jaremiah
                                                        <span className="ms-1 outgoing-call-failed"><i
                                                            className="ti ti-arrow-up-right"></i></span>
                                                    </p>
                                                    <p className="fs-12 mb-0">
                                                        <span className="text-muted text-truncate">13, Sep 2022</span>
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light">
                                                        <i className="ti ti-phone"></i>
                                                    </Button>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-1 lh-1">
                                                    <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                        <img src={face21} alt="img" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill my-auto">
                                                    <p className="mb-0 fw-semibold">
                                                        Anjaneliyu
                                                        <span className="ms-1 outgoing-call-success"><i
                                                            className="ti ti-arrow-up-right"></i></span>
                                                    </p>
                                                    <p className="fs-12 mb-0">
                                                        <span className="text-muted text-truncate">10, July 2022</span>
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light">
                                                        <i className="ti ti-phone"></i>
                                                    </Button>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center">
                                                <div className="me-1 lh-1">
                                                    <span className="avatar avatar-md offline me-2 avatar-rounded">
                                                        <img src={face14} alt="img" />
                                                    </span>
                                                </div>
                                                <div className="flex-fill my-auto">
                                                    <p className="mb-0 fw-semibold">
                                                        Jason Steph
                                                        <span className="ms-1 incoming-call-success"><i
                                                            className="ti ti-arrow-down-left"></i></span>
                                                    </p>
                                                    <p className="fs-12 mb-0">
                                                        <span className="text-muted text-truncate">1, Apr 2022</span>
                                                    </p>
                                                </div>
                                                <div className="">
                                                    <Button variant='' aria-label="button" type="button" className="btn btn-sm btn-icon btn-primary-light">
                                                        <i className="ti ti-phone"></i>
                                                    </Button>
                                                </div>
                                            </div>
                                        </li>

                                    </ul>
                                </PerfectScrollbar>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </div>
                <div className="main-chat-area border">
                    <div className="d-flex align-items-center p-2 border-bottom">
                        <div className="me-2 lh-1">
                            <span className="avatar avatar-lg online me-2 avatar-rounded chatstatusperson">
                                <img className="chatimageperson" src={face2} alt="img" />
                            </span>
                        </div>
                        <div className="flex-fill">
                            <p className="mb-0 fw-semibold fs-14">
                                <Link to="#" className="chatnameperson responsive-userinfo-open">Emiley Jackson</Link>
                            </p>
                            <p className="text-muted mb-0 chatpersonstatus">online</p>
                        </div>
                        <div className="d-flex">
                            <Button variant='outline-light' aria-label="button" type="button" className="btn btn-icon ms-2">
                                <OverlayTrigger placement="top" overlay={<Tooltip>call </Tooltip>}>
                                    <i className="ti ti-phone"></i>
                                </OverlayTrigger>
                            </Button>

                            <Button variant='outline-light' aria-label="button" type="button" className="btn btn-icon ms-2">
                                <OverlayTrigger placement="top" overlay={<Tooltip> Video call </Tooltip>}>
                                    <i className="ti ti-video"></i>
                                </OverlayTrigger>
                            </Button>
                            <Button variant='outline-light' aria-label="button" type="button" className="btn btn-icon ms-2 responsive-userinfo-open">
                                <i className="ti ti-user-circle" id="responsive-chat-close"></i>
                            </Button>
                            <Dropdown className="dropdown ms-2">
                                <Dropdown.Toggle variant='outline-light' className="btn btn-icon  btn-wave waves-light no-caret" type="button">
                                    <i className="ti ti-dots-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Profile</Dropdown.Item>
                                    <Dropdown.Item href="#">Clear Chat</Dropdown.Item>
                                    <Dropdown.Item href="#">Delete User</Dropdown.Item>
                                    <Dropdown.Item href="#">Block User</Dropdown.Item>
                                    <Dropdown.Item href="#">Report</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Button variant='outline-light' aria-label="button" type="button" className="btn btn-icon ms-2 responsive-chat-close">
                                <i className="ri-close-line"></i>
                            </Button>
                        </div>
                    </div>
                    <div className="chat-content p-0">
                    <PerfectScrollbar>
                            <ul className="list-unstyled chat-content">
                                <li className="chat-day-label">
                                    <span>Today</span>
                                </li>
                                <li className="chat-item-start">
                                    <div className="chat-list-inner">
                                        <div className="chat-user-profile">
                                            <span className="avatar avatar-md online avatar-rounded chatstatusperson">
                                                <img className="chatimageperson" src={face2} alt="img" />
                                            </span>
                                        </div>
                                        <div className="ms-3">
                                            <span className="chatting-user-info">
                                                <span className="chatnameperson">Emiley Jackson</span> <span className="msg-sent-time">11:48PM</span>
                                            </span>
                                            <div className="main-chat-msg">
                                                <div>
                                                    <p className="mb-0">Nice to meet you &#128512;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="chat-item-end">
                                    <div className="chat-list-inner">
                                        <div className="me-3">
                                            <span className="chatting-user-info">
                                                <span className="msg-sent-time"><span className="chat-read-mark align-middle d-inline-flex"><i
                                                    className="ri-check-double-line"></i></span>11:50PM</span> You
                                            </span>
                                            <div className="main-chat-msg">
                                                <div>
                                                    <p className="mb-0">It is a long established fact that a reader will be
                                                        distracted by the readable content of a page when looking at its
                                                        layout</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-user-profile">
                                            <span className="avatar avatar-md online avatar-rounded">
                                                <img src={face15} alt="img" />
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="chat-item-start">
                                    <div className="chat-list-inner">
                                        <div className="chat-user-profile">
                                            <span className="avatar avatar-md online avatar-rounded chatstatusperson">
                                                <img className="chatimageperson" src={face2} alt="img" />
                                            </span>
                                        </div>
                                        <div className="ms-3">
                                            <span className="chatting-user-info">
                                                <span className="chatnameperson">Emiley Jackson</span> <span className="msg-sent-time">11:51PM</span>
                                            </span>
                                            <div className="main-chat-msg">
                                                <div>
                                                    <p className="mb-0">Who are you ?</p>
                                                </div>
                                                <div>
                                                    <p className="mb-0">I don't know anyone named jeremiah.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="chat-item-end">
                                    <div className="chat-list-inner">
                                        <div className="me-3">
                                            <span className="chatting-user-info">
                                                <span className="msg-sent-time"><span className="chat-read-mark align-middle d-inline-flex"><i
                                                    className="ri-check-double-line"></i></span>11:52PM</span> You
                                            </span>
                                            <div className="main-chat-msg">
                                                <div>
                                                    <p className="mb-0">Some of the recent images taken are nice &#128076;</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-user-profile">
                                            <span className="avatar avatar-md online avatar-rounded">
                                                <img src={face15} alt="img" />
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="chat-item-start">
                                    <div className="chat-list-inner">
                                        <div className="chat-user-profile">
                                            <span className="avatar avatar-md online avatar-rounded chatstatusperson">
                                                <img className="chatimageperson" src={face2} alt="img" />
                                            </span>
                                        </div>
                                        <div className="ms-3">
                                            <span className="chatting-user-info">
                                                <span className="chatnameperson">Emiley Jackson</span> <span className="msg-sent-time">11:55PM</span>
                                            </span>
                                            <div className="main-chat-msg">
                                                <div>
                                                    <p className="mb-0">Here are some of them have a look</p>
                                                </div>
                                                <div>
                                                    <p className="mb-0 d-sm-flex d-block">
                                                        <Link aria-label="anchor" to={`${import.meta.env.BASE_URL}apps/gallery/`} className="avatar avatar-xl m-1"><img src={media64} alt="" /></Link>
                                                        <Link aria-label="anchor" to={`${import.meta.env.BASE_URL}apps/gallery/`} className="avatar avatar-xl m-1"><img src={media63} alt="" /></Link>
                                                        <Link aria-label="anchor" to={`${import.meta.env.BASE_URL}apps/gallery/`} className="avatar avatar-xl m-1"><img src={media62} alt="" /></Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="chat-item-end">
                                    <div className="chat-list-inner">
                                        <div className="me-3">
                                            <span className="chatting-user-info">
                                                <span className="msg-sent-time"><span className="chat-read-mark align-middle d-inline-flex"><i
                                                    className="ri-check-double-line"></i></span>11:52PM</span> You
                                            </span>
                                            <div className="main-chat-msg">
                                                <div className="">
                                                    <Link aria-label="anchor" to="#" className="text-fixed-white"><i
                                                        className="ri-play-circle-line align-middle"></i></Link>
                                                    <span className="mx-1">
                                                        <svg width="20" height="20">
                                                            <defs></defs>
                                                            <g transform="matrix(1,0,0,1,0,0)"><svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                                height="20">
                                                                <path
                                                                    d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                    fill="rgba(255, 255, 255, 0.5)"
                                                                    className="fill-primary"></path>
                                                            </svg></g>
                                                        </svg>
                                                        <svg className="chat_audio" width="20" height="20">
                                                            <defs></defs>
                                                            <g transform="matrix(1,0,0,1,0,0)"><svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                                height="20">
                                                                <path
                                                                    d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                    fill="rgba(255, 255, 255, 0.5)"
                                                                    className="fill-primary"></path>
                                                            </svg></g>
                                                        </svg>
                                                        <svg className="chat_audio" width="20" height="20">
                                                            <defs></defs>
                                                            <g transform="matrix(1,0,0,1,0,0)"><svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                                height="20">
                                                                <path
                                                                    d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                    fill="rgba(255, 255, 255, 0.5)"
                                                                    className="fill-primary"></path>
                                                            </svg></g>
                                                        </svg>
                                                        <svg className="chat_audio" width="20" height="20">
                                                            <defs></defs>
                                                            <g transform="matrix(1,0,0,1,0,0)"><svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                                height="20">
                                                                <path
                                                                    d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                    fill="rgba(255, 255, 255, 0.5)"
                                                                    className="fill-primary"></path>
                                                            </svg></g>
                                                        </svg>
                                                        <svg className="chat_audio" width="20" height="20">
                                                            <defs></defs>
                                                            <g transform="matrix(1,0,0,1,0,0)"><svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                                height="20">
                                                                <path
                                                                    d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                    fill="rgba(255, 255, 255, 0.5)"
                                                                    className="fill-primary"></path>
                                                            </svg></g>
                                                        </svg>
                                                        <svg className="chat_audio" width="20" height="20">
                                                            <defs></defs>
                                                            <g transform="matrix(1,0,0,1,0,0)"><svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                                height="20">
                                                                <path
                                                                    d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                    fill="rgba(255, 255, 255, 0.5)"
                                                                    className="fill-primary"></path>
                                                            </svg></g>
                                                        </svg>
                                                        <svg className="chat_audio" width="20" height="20">
                                                            <defs></defs>
                                                            <g transform="matrix(1,0,0,1,0,0)"><svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                                height="20">
                                                                <path
                                                                    d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                    fill="rgba(255, 255, 255, 0.5)"
                                                                    className="fill-primary"></path>
                                                            </svg></g>
                                                        </svg>
                                                        <svg className="chat_audio" width="20" height="20">
                                                            <defs></defs>
                                                            <g transform="matrix(1,0,0,1,0,0)"><svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                                height="20">
                                                                <path
                                                                    d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                    fill="rgba(255, 255, 255, 0.5)"
                                                                    className="fill-primary"></path>
                                                            </svg></g>
                                                        </svg>
                                                        <svg className="chat_audio" width="20" height="20">
                                                            <defs></defs>
                                                            <g transform="matrix(1,0,0,1,0,0)"><svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                                height="20">
                                                                <path
                                                                    d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                    fill="rgba(255, 255, 255, 0.5)"
                                                                    className="fill-primary"></path>
                                                            </svg></g>
                                                        </svg>
                                                        <svg className="chat_audio" width="20" height="20">
                                                            <defs></defs>
                                                            <g transform="matrix(1,0,0,1,0,0)"><svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                data-name="Layer 3" viewBox="0 0 24 24" width="20"
                                                                height="20">
                                                                <path
                                                                    d="M6 19a1 1 0 0 1-1-1V6A1 1 0 0 1 7 6V18A1 1 0 0 1 6 19zM12 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 12 18zM9 21a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0V20A1 1 0 0 1 9 21zM3 17a1 1 0 0 1-1-1V8A1 1 0 0 1 4 8v8A1 1 0 0 1 3 17zM21 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 21 16zM15 16a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v6A1 1 0 0 1 15 16zM18 18a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0V17A1 1 0 0 1 18 18z"
                                                                    fill="rgba(255, 255, 255, 0.5)"
                                                                    className="fill-primary"></path>
                                                            </svg></g>
                                                        </svg>
                                                    </span>
                                                    <Link aria-label="anchor" to="#" className="text-fixed-white"><i
                                                        className="ri-download-2-line align-middle"></i></Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-user-profile">
                                            <span className="avatar avatar-md online avatar-rounded">
                                                <img src={face15} alt="img" />
                                            </span>
                                        </div>
                                    </div>
                                </li>
                                <li className="chat-item-start">
                                    <div className="chat-list-inner">
                                        <div className="chat-user-profile">
                                            <span className="avatar avatar-md online avatar-rounded">
                                                <img className="chatimageperson" src={face2} alt="img" />
                                            </span>
                                        </div>
                                        <div className="ms-3">
                                            <span className="chatting-user-info chatnameperson">
                                                Emiley Jackson <span className="msg-sent-time">11:45PM</span>
                                            </span>
                                            <div className="main-chat-msg">
                                                <div>
                                                    <p className="mb-0">Happy to talk with you,chat you later &#128075;</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                    </PerfectScrollbar>
                    </div>
                    <div className="chat-footer">
                        <Form.Control className="form-control" placeholder="Type your message here..." type="text" />
                        <Link aria-label="anchor" className="btn btn-icon mx-2 btn-success-light" to="#">
                            <i className="ri-emotion-line"></i>
                        </Link>
                        <Link aria-label="anchor" className="btn btn-primary btn-icon btn-send" to="#">
                            <i className="ri-send-plane-2-line"></i>
                        </Link>
                    </div>
                </div>
                <PerfectScrollbar className='chat-user-details border'>
                    <div className="text-center mb-5">
                        <span className="avatar avatar-rounded online avatar-xxl mt-2 mb-3 chatstatusperson">
                            <img className="chatimageperson" src={face2} alt="img" />
                        </span>
                        <p className="mb-1 fs-15 fw-semibold text-dark lh-1 chatnameperson">Emiley Jackson</p>
                        <p className="fs-12 text-muted"><span className="chatnameperson">emaileyjackson2134</span>@gmail.com</p>
                        <p className="text-center mb-0">
                            <Button variant='' type="button" aria-label="button" className="btn btn-icon rounded-pill btn-primary-light"><i
                                className="ri-phone-line"></i></Button>
                            <Button variant='' type="button" aria-label="button" className="btn btn-icon rounded-pill btn-primary-light ms-2"><i
                                className="ri-video-add-line"></i></Button>
                            <Button variant='' type="button" aria-label="button" className="btn btn-icon rounded-pill btn-primary-light ms-2"><i
                                className="ri-chat-1-line"></i></Button>
                        </p>
                    </div>
                    <div className="mb-5">
                        <div className="fw-semibold mb-4">Shared Files
                            <span className="badge bg-primary-transparent rounded-circle ms-1">4</span>
                            <span className="float-end fs-11"><Link to="#" className="link-primary text-underline"><u>View All</u></Link></span>
                        </div>
                        <ul className="shared-files list-unstyled">
                            <li>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="shared-file-icon">
                                            <i className="ti ti-file-text"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fs-12 fw-semibold mb-0">Project Details.pdf</p>
                                        <p className="mb-0 text-muted fs-11">24,Oct 2022 - 14:24PM</p>
                                    </div>
                                    <div className="fs-18">
                                        <Link aria-label="anchor" to="#"><i className="ri-download-2-line text-muted"></i></Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="shared-file-icon">
                                            <i className="ri-image-line"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fs-12 fw-semibold mb-0">Img_02.Jpg</p>
                                        <p className="mb-0 text-muted fs-11">22,Oct 2022 - 10:19AM</p>
                                    </div>
                                    <div className="fs-18">
                                        <Link aria-label="anchor" to="#"><i className="ri-download-2-line text-muted"></i></Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="shared-file-icon">
                                            <i className="ri-image-line"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fs-12 fw-semibold mb-0">Img_15.Jpg</p>
                                        <p className="mb-0 text-muted fs-11">22,Oct 2022 - 10:18AM</p>
                                    </div>
                                    <div className="fs-18">
                                        <Link aria-label="anchor" to="#"><i className="ri-download-2-line text-muted"></i></Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="shared-file-icon">
                                            <i className="ri-video-line"></i>
                                        </span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fs-12 fw-semibold mb-0">Video_15_02_2022.MP4</p>
                                        <p className="mb-0 text-muted fs-11">22,Oct 2022 - 10:18AM</p>
                                    </div>
                                    <div className="fs-18">
                                        <Link to="#"><i className="ri-download-2-line text-muted"></i></Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-0">
                        <div className="fw-semibold mb-4">Photos & Media
                            <span className="badge bg-primary-transparent rounded-circle ms-1">22</span>
                            <span className="float-end fs-11"><Link to="#" className="link-primary text-underline"><u>View All</u></Link></span>
                        </div>
                        <Row className="mx-0">
                            {Photosmediadata.map((idx) => (
                                <Col xl={4} lg={4} md={4} sm={4} key={Math.random()}>
                                    <Link aria-label="anchor" to={`${import.meta.env.BASE_URL}apps/gallery/`} className="chat-media">
                                        <img src={idx.src} alt="" />
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </PerfectScrollbar>
            </div>
        </Fragment>
    );
};

export default Chat;
