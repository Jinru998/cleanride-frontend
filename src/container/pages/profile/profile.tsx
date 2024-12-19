import { FC, Fragment } from 'react';
import { Badge, Button, Card, Col, Dropdown, Form, ListGroup, Nav, ProgressBar, Row, Tab } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
// import { Scrollbar } from 'react-scrollbars-custom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Followersdata, Friendsdata, Gallerydata, Personalinfodata, RecentPostsdata, Skillsdata, Suggestionsdata } from './profiledata';
import media17 from "../../../assets/images/media/media-17.jpg";
import media75 from "../../../assets/images/media/media-75.jpg";
import media18 from "../../../assets/images/media/media-18.jpg";
import media39 from "../../../assets/images/media/media-39.jpg";
import media59 from "../../../assets/images/media/media-59.jpg";
import media60 from "../../../assets/images/media/media-60.jpg";
import media61 from "../../../assets/images/media/media-61.jpg";
import media26 from "../../../assets/images/media/media-26.jpg";
import media29 from "../../../assets/images/media/media-29.jpg";
import media52 from "../../../assets/images/media/media-52.jpg";
import media40 from "../../../assets/images/media/media-40.jpg";
import media45 from "../../../assets/images/media/media-45.jpg";
import media56 from "../../../assets/images/media/media-56.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face2 from "../../../assets/images/faces/2.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import face9 from "../../../assets/images/faces/9.jpg";
import face1 from "../../../assets/images/faces/1.jpg";
import face10 from "../../../assets/images/faces/10.jpg";
import face16 from "../../../assets/images/faces/16.jpg";
import filemanager3 from "../../../assets/images/media/file-manager/3.png";

interface ProfileProps { }

const Profile: FC<ProfileProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Profile" heading="Pages" active="Pricing" />
            <Row>
                <Col xxl={4} xl={12}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Body className="card-body p-0">
                            <div className="d-sm-flex align-items-top p-4 border-bottom-0 main-profile-cover">
                                <div>
                                    <span className="avatar avatar-xxl avatar-rounded online me-3">
                                        <img src={face9} alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill main-profile-info">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <h6 className="fw-semibold mb-1 text-fixed-white">Json Taylor</h6>
                                        <Button variant='' className="btn btn-light btn-wave"><i className="ri-add-line me-1 align-middle d-inline-block"></i>Follow</Button>
                                    </div>
                                    <p className="mb-1 text-muted text-fixed-white op-7">Chief Executive Officer (C.E.O)</p>
                                    <p className="fs-12 text-fixed-white mb-4 op-5">
                                        <span className="me-3"><i className="ri-building-line me-1 align-middle"></i>Georgia</span>
                                        <span><i className="ri-map-pin-line me-1 align-middle"></i>Washington D.C</span>
                                    </p>
                                    <div className="d-flex mb-0">
                                        <div className="me-4">
                                            <p className="fw-bold fs-20 text-fixed-white text-shadow mb-0">113</p>
                                            <p className="mb-0 fs-11 op-5 text-fixed-white">Projects</p>
                                        </div>
                                        <div className="me-4">
                                            <p className="fw-bold fs-20 text-fixed-white text-shadow mb-0">12.2k</p>
                                            <p className="mb-0 fs-11 op-5 text-fixed-white">Followers</p>
                                        </div>
                                        <div className="me-4">
                                            <p className="fw-bold fs-20 text-fixed-white text-shadow mb-0">128</p>
                                            <p className="mb-0 fs-11 op-5 text-fixed-white">Following</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-bottom border-block-end-dashed">
                                <div className="mb-4">
                                    <p className="fs-15 mb-2 fw-semibold">Professional Bio :</p>
                                    <p className="fs-12 text-muted op-7 mb-0">
                                        I am <b className="text-default">Sonya Taylor,</b> here by conclude that,i am the founder and managing director of the prestigeous company name laugh at all and acts as the cheif executieve officer of the company.
                                    </p>
                                </div>
                                <div className="mb-0">
                                    <p className="fs-15 mb-2 fw-semibold">Links :</p>
                                    <div className="mb-0">
                                        <p className="mb-1">
                                            <Link to="https://www.spruko.com/" className="text-primary"><u>https://www.spruko.com/</u></Link>
                                        </p>
                                        <p className="mb-0">
                                            <Link to="https://themeforest.net/user/spruko/portfolio" className="text-primary"><u>https://themeforest.net/user/spruko/portfolio</u></Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-bottom border-block-end-dashed">
                                <p className="fs-15 mb-2 me-4 fw-semibold">Contact Information :</p>
                                <div className="text-muted">
                                    <p className="mb-2">
                                        <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                                            <i className="ri-mail-line align-middle fs-14"></i>
                                        </span>
                                        sonyataylor2531@gmail.com
                                    </p>
                                    <p className="mb-2">
                                        <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                                            <i className="ri-phone-line align-middle fs-14"></i>
                                        </span>
                                        +(555) 555-1234
                                    </p>
                                    <p className="mb-0">
                                        <span className="avatar avatar-sm avatar-rounded me-2 bg-light text-muted">
                                            <i className="ri-map-pin-line align-middle fs-14"></i>
                                        </span>
                                        MIG-1-11, Monroe Street, Georgetown, Washington D.C, USA,20071
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 border-bottom border-block-end-dashed d-flex align-items-center">
                                <p className="fs-15 mb-2 me-4 fw-semibold">Social Networks :</p>
                                <div className="btn-list mb-0">
                                    <Button variant='primary-light' className="btn btn-sm btn-icon  btn-wave waves-effect waves-light">
                                        <i className="ri-facebook-line fw-semibold"></i>
                                    </Button>
                                    <Button variant='secondary-light' className="btn btn-sm btn-icon = btn-wave waves-effect waves-light">
                                        <i className="ri-twitter-line fw-semibold"></i>
                                    </Button>
                                    <Button variant='warning-light' className="btn btn-sm btn-icon  btn-wave waves-effect waves-light">
                                        <i className="ri-instagram-line fw-semibold"></i>
                                    </Button>
                                    <Button variant='success-light' className="btn btn-sm btn-icon  btn-wave waves-effect waves-light">
                                        <i className="ri-github-line fw-semibold"></i>
                                    </Button>
                                    <Button variant='danger-light' className="btn btn-sm btn-icon  btn-wave waves-effect waves-light">
                                        <i className="ri-youtube-line fw-semibold"></i>
                                    </Button>
                                </div>
                            </div>
                            <div className="p-4 border-bottom border-block-end-dashed">
                                <p className="fs-15 mb-2 me-4 fw-semibold">Skills :</p>
                                <div>
                                    {Skillsdata.map((idx) => (
                                        <Link to="#" key={Math.random()}>
                                            <span className="badge bg-light text-muted m-1">{idx.text}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                            <div className="p-4">
                                <p className="fs-15 mb-2 me-4 fw-semibold">Followers :</p>
                                <ListGroup>
                                    {Followersdata.map((idx) => (
                                        <ListGroup.Item key={Math.random()}>
                                            <div className="d-sm-flex align-items-top">
                                                <span className="avatar avatar-sm">
                                                    <img src={idx.src} alt="img" />
                                                </span>
                                                <div className="ms-sm-2 ms-0 mt-sm-0 mt-1 fw-semibold flex-fill">
                                                    <p className="mb-0 lh-1">{idx.name}</p>
                                                    <span className="fs-11 text-muted op-7">{idx.mail}</span>
                                                </div>
                                                <Button variant='' className="btn btn-light btn-wave btn-sm">Follow</Button>
                                            </div>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={8} xl={12}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Body className="p-0">
                                    <Tab.Container defaultActiveKey="first">
                                        <div className="p-3 border-bottom border-block-end-dashed d-flex align-items-center justify-content-between">
                                            <div>
                                                <Nav className="nav nav-tabs mb-0 tab-style-6 justify-content-start" id="myTab" role="tablist" defaultActiveKey="first">
                                                    <Nav.Item>
                                                        <Nav.Link href="#activity-tab-pane" eventKey="first">
                                                            <i className="ri-gift-line me-1 align-middle d-inline-block"></i>Activity
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link href="#posts-tab-pane" eventKey="second">
                                                            <i className="ri-bill-line me-1 align-middle d-inline-block"></i>Posts
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item><Nav.Link href="#followers-tab-pane" eventKey="third">
                                                        <i className="ri-money-dollar-box-line me-1 align-middle d-inline-block"></i>Friends
                                                    </Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link href="#gallery-tab-pane" eventKey="fourth">
                                                            <i className="ri-exchange-box-line me-1 align-middle d-inline-block"></i>Gallery
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </div>
                                            <div>
                                                <p className="fw-semibold mb-2">Profile 60% completed - <Link to="javscript:void(0);" className="text-primary fs-12">Finish now</Link></p>
                                                <ProgressBar className="progress progress-xs progress-animate" variant='primary' now={60} />
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <Tab.Content>
                                                <Tab.Pane className="fade p-0 border-0" id="activity-tab-pane" eventKey="first">
                                                    <ul className="list-unstyled profile-timeline">
                                                        <li>
                                                            <div>
                                                                <span className="avatar avatar-sm bg-primary-transparent avatar-rounded profile-timeline-avatar">
                                                                    E
                                                                </span>
                                                                <p className="mb-2">
                                                                    <b>You</b> Commented on <b>alexander taylor</b> post <Link className="text-secondary" to="#"><u>#beautiful day</u></Link>.<span className="float-end fs-11 text-muted">24,Dec 2022 - 14:34</span>
                                                                </p>
                                                                <p className="profile-activity-media mb-0">
                                                                    <Link to="#">
                                                                        <img src={media17} alt="" />
                                                                    </Link>
                                                                    <Link to="#">
                                                                        <img src={media18} alt="" />
                                                                    </Link>
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                                    <img src={face11} alt="" />
                                                                </span>
                                                                <p className="text-muted mb-2">
                                                                    <span className="text-default"><b>Json Smith</b> reacted to the post &#128077;</span>.<span className="float-end fs-11 text-muted">18,Dec 2022 - 12:16</span>
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
                                                                    <span className="text-default"><b>Alicia Keys</b> shared a document with <b>you</b></span>.<span className="float-end fs-11 text-muted">21,Dec 2022 - 15:32</span>
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
                                                                    <span className="text-default"><b>You</b> shared a post with 4 people <b>Simon,Sasha,Anagha,Hishen</b></span>.<span className="float-end fs-11 text-muted">28,Dec 2022 - 18:46</span>
                                                                </p>
                                                                <p className="profile-activity-media mb-2">
                                                                    <Link to="#">
                                                                        <img src={media75} alt="" />
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
                                                                    <img src={face5} alt="" />
                                                                </span>
                                                                <p className="text-muted mb-1">
                                                                    <span className="text-default"><b>Melissa Blue</b> liked your post <b>travel excites</b></span>.<span className="float-end fs-11 text-muted">11,Dec 2022 - 11:18</span>
                                                                </p>
                                                                <p className="text-muted">you are already feeling the tense atmosphere of the video playing in the background</p>
                                                                <p className="profile-activity-media mb-0">
                                                                    <Link to="#">
                                                                        <img src={media59} className="m-1" alt="" />
                                                                    </Link>
                                                                    <Link to="#">
                                                                        <img src={media60} className="m-1" alt="" />
                                                                    </Link>
                                                                    <Link to="#">
                                                                        <img src={media61} className="m-1" alt="" />
                                                                    </Link>
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div>
                                                                <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                                                    <img src={media39} alt="" />
                                                                </span>
                                                                <p className="mb-1">
                                                                    <b>You</b> Commented on <b>Peter Engola</b> post <Link className="text-secondary" to="#"><u>#Mother Nature</u></Link>.<span className="float-end fs-11 text-muted">24,Dec 2022 - 14:34</span>
                                                                </p>
                                                                <p className="text-muted">Technology id developing rapidly kepp uo your work &#128076;</p>
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
                                                </Tab.Pane>
                                                <Tab.Pane className="fade p-0 border-0" id="posts-tab-pane" eventKey="second">
                                                    <ListGroup className="list-group">
                                                        <ListGroup.Item>
                                                            <div className="d-sm-flex align-items-center lh-1">
                                                                <div className="me-3">
                                                                    <span className="avatar avatar-md avatar-rounded">
                                                                        <img src={face9} alt="" />
                                                                    </span>
                                                                </div>
                                                                <div className="flex-fill me-sm-2 mt-1 mt-sm-0">
                                                                    <div className="input-group">
                                                                        <Form.Control type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username with two button addons" />
                                                                        <Button variant='' className="btn btn-light btn-wave d-none d-sm-block" type="button"><i className="bi bi-emoji-smile"></i></Button>
                                                                        <Button variant='' className="btn btn-light btn-wave" type="button"><i className="bi bi-paperclip"></i></Button>
                                                                        <Button variant='' className="btn btn-light btn-wave" type="button"><i className="bi bi-camera"></i></Button>
                                                                        <Button variant='' className="btn btn-primary btn-wave" type="button">Post</Button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item id="profile-posts-scroll">
                                                            
                                                            <PerfectScrollbar>
                                                                <div className="row gy-3">
                                                                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                                        <div className="rounded border">
                                                                            <div className="p-3 d-flex align-items-top flex-wrap">
                                                                                <div className="me-2">
                                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                                        <img src={face9} alt="" />
                                                                                    </span>
                                                                                </div>
                                                                                <div className="flex-fill">
                                                                                    <p className="mb-1 fw-semibold lh-1">You</p>
                                                                                    <p className="fs-11 mb-2 text-muted">24, Dec - 04:32PM</p>
                                                                                    <p className="fs-12 text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                                                    <p className="fs-12 text-muted mb-3">As opposed to using 'Content here &#128076;</p>
                                                                                    <div className="d-flex align-items-center justify-content-between mb-md-0 mb-2">
                                                                                        <div>
                                                                                            <div className="btn-list">
                                                                                                <Button variant='' className="btn btn-primary-light btn-sm btn-wave">
                                                                                                    Comment
                                                                                                </Button>
                                                                                                <Button variant='' className="btn btn-icon btn-sm btn-success-light btn-wave">
                                                                                                    <i className="ri-thumb-up-line"></i>
                                                                                                </Button>
                                                                                                <Button variant='' className="btn btn-icon btn-sm btn-danger-light btn-wave">
                                                                                                    <i className="ri-share-line"></i>
                                                                                                </Button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="d-flex align-items-top">
                                                                                    <div>
                                                                                        <span className="badge bg-primary-transparent me-2">Fashion</span>
                                                                                    </div>
                                                                                    <Dropdown>
                                                                                        <Dropdown.Toggle variant='light' className="btn btn-sm btn-icon  btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                            <i className="ti ti-dots-vertical"></i>
                                                                                        </Dropdown.Toggle>
                                                                                        <Dropdown.Menu>
                                                                                            <Dropdown.Item href="#">Delete</Dropdown.Item>
                                                                                            <Dropdown.Item href="#">Hide</Dropdown.Item>
                                                                                            <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                                                        </Dropdown.Menu>
                                                                                    </Dropdown>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                                        <div className="rounded border">
                                                                            <div className="p-3 d-flex align-items-top flex-wrap">
                                                                                <div className="me-2">
                                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                                        <img src={face9} alt="" />
                                                                                    </span>
                                                                                </div>
                                                                                <div className="flex-fill">
                                                                                    <p className="mb-1 fw-semibold lh-1">You</p>
                                                                                    <p className="fs-11 mb-2 text-muted">26, Dec - 12:45PM</p>
                                                                                    <p className="fs-12 text-muted mb-1">Shared pictures with 4 of friends <span>Hiren,Sasha,Biden,Thara</span>.</p>
                                                                                    <div className="d-flex lh-1 justify-content-between mb-3">
                                                                                        <div>
                                                                                            <Link to="#">
                                                                                                <span className="avatar avatar-md me-1">
                                                                                                    <img src={media52} alt="" />
                                                                                                </span>
                                                                                            </Link>
                                                                                            <Link to="#">
                                                                                                <span className="avatar avatar-md me-1">
                                                                                                    <img src={media56} alt="" />
                                                                                                </span>
                                                                                            </Link>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center justify-content-between mb-md-0 mb-2">
                                                                                        <div>
                                                                                            <div className="btn-list">
                                                                                                <Button variant='' className="btn btn-primary-light btn-sm btn-wave">
                                                                                                    Comment
                                                                                                </Button>
                                                                                                <Button variant='' className="btn btn-icon btn-sm btn-success-light btn-wave">
                                                                                                    <i className="ri-thumb-up-line"></i>
                                                                                                </Button>
                                                                                                <Button variant='' className="btn btn-icon btn-sm btn-danger-light btn-wave">
                                                                                                    <i className="ri-share-line"></i>
                                                                                                </Button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <div className="d-flex align-items-top">
                                                                                        <div>
                                                                                            <span className="badge bg-success-transparent me-2">Nature</span>
                                                                                        </div>
                                                                                        <Dropdown>
                                                                                            <Dropdown.Toggle variant='light' className="btn btn-sm btn-icon  btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                <i className="ti ti-dots-vertical"></i>
                                                                                            </Dropdown.Toggle>
                                                                                            <Dropdown.Menu>
                                                                                                <Dropdown.Item href="#">Delete</Dropdown.Item>
                                                                                                <Dropdown.Item href="#">Hide</Dropdown.Item>
                                                                                                <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                                                            </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                    </div>
                                                                                    <div className="avatar-list-stacked d-block mt-4 text-end">
                                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                                            <img src={face2} alt="img" />
                                                                                        </span>
                                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                                            <img src={face8} alt="img" />
                                                                                        </span>
                                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                                            <img src={face2} alt="img" />
                                                                                        </span>
                                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                                            <img src={face10} alt="img" />
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                                        <div className="rounded border">
                                                                            <div className="p-3 d-flex align-items-top flex-wrap">
                                                                                <div className="me-2">
                                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                                        <img src={face9} alt="" />
                                                                                    </span>
                                                                                </div>
                                                                                <div className="flex-fill">
                                                                                    <p className="mb-1 fw-semibold lh-1">You</p>
                                                                                    <p className="fs-11 mb-2 text-muted">29, Dec - 09:53AM</p>
                                                                                    <p className="fs-12 text-muted mb-1">Sharing an article that excites me about nature more than what i thought.</p>
                                                                                    <p className="mb-3 profile-post-link">
                                                                                        <Link to="#" className="fs-12 text-primary">
                                                                                            <u>https://www.discovery.com/nature/caring-for-coral</u>
                                                                                        </Link>
                                                                                    </p>
                                                                                    <div className="d-flex align-items-center justify-content-between mb-md-0 mb-2">
                                                                                        <div>
                                                                                            <div className="btn-list">
                                                                                                <Button variant='' className="btn btn-primary-light btn-sm btn-wave">
                                                                                                    Comment
                                                                                                </Button>
                                                                                                <Button variant='' className="btn btn-icon btn-sm btn-success-light btn-wave">
                                                                                                    <i className="ri-thumb-up-line"></i>
                                                                                                </Button>
                                                                                                <Button variant='' className="btn btn-icon btn-sm btn-danger-light btn-wave">
                                                                                                    <i className="ri-share-line"></i>
                                                                                                </Button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="d-flex align-items-top">
                                                                                    <div>
                                                                                        <span className="badge bg-secondary-transparent me-2">Travel</span>
                                                                                    </div>
                                                                                    <Dropdown>
                                                                                        <Dropdown.Toggle variant='light' className="btn btn-sm btn-icon btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                            <i className="ti ti-dots-vertical"></i>
                                                                                        </Dropdown.Toggle>
                                                                                        <Dropdown.Menu>
                                                                                            <Dropdown.Item href="#">Delete</Dropdown.Item>
                                                                                            <Dropdown.Item href="#">Hide</Dropdown.Item>
                                                                                            <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                                                        </Dropdown.Menu>
                                                                                    </Dropdown>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                                        <div className="rounded border">
                                                                            <div className="p-3 d-flex align-items-top flex-wrap">
                                                                                <div className="me-2">
                                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                                        <img src={face9} alt="" />
                                                                                    </span>
                                                                                </div>
                                                                                <div className="flex-fill">
                                                                                    <p className="mb-1 fw-semibold lh-1">You</p>
                                                                                    <p className="fs-11 mb-2 text-muted">22, Dec - 11:22PM</p>
                                                                                    <p className="fs-12 text-muted mb-1">Shared pictures with 3 of your friends <span>Maya,Jacob,Amanda</span>.</p>
                                                                                    <div className="d-flex lh-1 justify-content-between mb-3">
                                                                                        <div>
                                                                                            <Link to="#">
                                                                                                <span className="avatar avatar-md me-1">
                                                                                                    <img src={media40} alt="" />
                                                                                                </span>
                                                                                            </Link>
                                                                                            <Link to="#">
                                                                                                <span className="avatar avatar-md me-1">
                                                                                                    <img src={media45} alt="" />
                                                                                                </span>
                                                                                            </Link>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="d-flex align-items-center justify-content-between mb-md-0 mb-2">
                                                                                        <div>
                                                                                            <div className="btn-list">
                                                                                                <Button variant='' className="btn btn-primary-light btn-sm btn-wave">
                                                                                                    Comment
                                                                                                </Button>
                                                                                                <Button variant='' className="btn btn-icon btn-sm btn-success-light btn-wave">
                                                                                                    <i className="ri-thumb-up-line"></i>
                                                                                                </Button>
                                                                                                <Button variant='' className="btn btn-icon btn-sm btn-danger-light btn-wave">
                                                                                                    <i className="ri-share-line"></i>
                                                                                                </Button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div>
                                                                                    <div className="d-flex align-items-top">
                                                                                        <div>
                                                                                            <span className="badge bg-success-transparent me-2">Nature</span>
                                                                                        </div>
                                                                                        <Dropdown>
                                                                                            <Dropdown.Toggle variant='light' className="btn btn-sm btn-icon no-caret btn-wave" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                <i className="ti ti-dots-vertical"></i>
                                                                                            </Dropdown.Toggle>
                                                                                            <Dropdown.Menu>
                                                                                                <Dropdown.Item href="#">Delete</Dropdown.Item>
                                                                                                <Dropdown.Item href="#">Hide</Dropdown.Item>
                                                                                                <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                                                            </Dropdown.Menu>
                                                                                        </Dropdown>
                                                                                    </div>
                                                                                    <div className="avatar-list-stacked d-block mt-4 text-end">
                                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                                            <img src={face1} alt="img" />
                                                                                        </span>
                                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                                            <img src={face5} alt="img" />
                                                                                        </span>
                                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                                            <img src={face16} alt="img" />
                                                                                        </span>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                                        <div className="rounded border">
                                                                            <div className="p-3 d-flex align-items-top flex-wrap">
                                                                                <div className="me-2">
                                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                                        <img src={face9} alt="" />
                                                                                    </span>
                                                                                </div>
                                                                                <div className="flex-fill">
                                                                                    <p className="mb-1 fw-semibold lh-1">You</p>
                                                                                    <p className="fs-11 mb-2 text-muted">18, Dec - 12:28PM</p>
                                                                                    <p className="fs-12 text-muted mb-1">Followed this author for top class themes with best code you can get in the market.</p>
                                                                                    <p className="mb-3 profile-post-link">
                                                                                        <Link to="https://themeforest.net/user/spruko/portfolio" target="_blank" className="fs-12 text-primary">
                                                                                            <u>https://themeforest.net/user/spruko/portfolio</u>
                                                                                        </Link>
                                                                                    </p>
                                                                                    <div className="d-flex align-items-center justify-content-between mb-md-0 mb-2">
                                                                                        <div>
                                                                                            <div className="btn-list">
                                                                                                <Button variant='' className="btn btn-primary-light btn-sm btn-wave">
                                                                                                    Comment
                                                                                                </Button>
                                                                                                <Button variant='' className="btn btn-icon btn-sm btn-success-light btn-wave">
                                                                                                    <i className="ri-thumb-up-line"></i>
                                                                                                </Button>
                                                                                                <Button variant='' className="btn btn-icon btn-sm btn-danger-light btn-wave">
                                                                                                    <i className="ri-share-line"></i>
                                                                                                </Button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="d-flex align-items-top">
                                                                                    <div>
                                                                                        <span className="badge bg-secondary-transparent me-2">Travel</span>
                                                                                    </div>
                                                                                    <Dropdown>
                                                                                        <Dropdown.Toggle variant='light' className="btn btn-sm btn-icon  btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                            <i className="ti ti-dots-vertical"></i>
                                                                                        </Dropdown.Toggle>
                                                                                        <Dropdown.Menu>
                                                                                            <Dropdown.Item href="#">Delete</Dropdown.Item>
                                                                                            <Dropdown.Item href="#">Hide</Dropdown.Item>
                                                                                            <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                                                        </Dropdown.Menu>
                                                                                    </Dropdown>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                                        <div className="rounded border">
                                                                            <div className="p-3 d-flex align-items-top flex-wrap">
                                                                                <div className="me-2">
                                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                                        <img src={face9} alt="" />
                                                                                    </span>
                                                                                </div>
                                                                                <div className="flex-fill">
                                                                                    <p className="mb-1 fw-semibold lh-1">You</p>
                                                                                    <p className="fs-11 mb-2 text-muted">02, Dec - 06:32AM</p>
                                                                                    <p className="fs-12 text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                                                                    <p className="fs-12 text-muted mb-3">There are many variations of passages &#128079;&#128525;</p>
                                                                                    <div className="d-flex align-items-center justify-content-between mb-md-0 mb-2">
                                                                                        <div>
                                                                                            <div className="btn-list">
                                                                                                <Button variant='' className="btn btn-primary-light btn-sm btn-wave">
                                                                                                    Comment
                                                                                                </Button>
                                                                                                <Button variant='' className="btn btn-icon btn-sm btn-success-light btn-wave">
                                                                                                    <i className="ri-thumb-up-line"></i>
                                                                                                </Button>
                                                                                                <Button variant='' className="btn btn-icon btn-sm btn-danger-light btn-wave">
                                                                                                    <i className="ri-share-line"></i>
                                                                                                </Button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="d-flex align-items-top">
                                                                                    <div>
                                                                                        <span className="badge bg-primary-transparent me-2">Fashion</span>
                                                                                    </div>
                                                                                    <Dropdown>
                                                                                        <Dropdown.Toggle variant='light' className="btn btn-sm btn-icon btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                            <i className="ti ti-dots-vertical"></i>
                                                                                        </Dropdown.Toggle>
                                                                                        <Dropdown.Menu>
                                                                                            <Dropdown.Item href="#">Delete</Dropdown.Item>
                                                                                            <Dropdown.Item href="#">Hide</Dropdown.Item>
                                                                                            <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                                                        </Dropdown.Menu>
                                                                                    </Dropdown>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                              
                                                            </PerfectScrollbar>
                                                        </ListGroup.Item>
                                                        <ListGroup.Item>
                                                            <div className="text-center">
                                                                <Button variant='' className="btn btn-primary-light btn-wave">Show All</Button>
                                                            </div>
                                                        </ListGroup.Item>
                                                    </ListGroup>
                                                </Tab.Pane>
                                                <Tab.Pane className="fade p-0 border-0" id="followers-tab-pane" eventKey="third">
                                                    <Row>
                                                        {Friendsdata.map((idx) => (
                                                            <Col xxl={4} xl={4} lg={6} md={6} sm={12} key={Math.random()}>
                                                                <Card className="custom-card shadow-none border">
                                                                    <Card.Body className="card-body p-4">
                                                                        <div className="text-center">
                                                                            <span className="avatar avatar-xl avatar-rounded">
                                                                                <img src={idx.src} alt="" />
                                                                            </span>
                                                                            <div className="mt-2">
                                                                                <p className="mb-0 fw-semibold">{idx.name}</p>
                                                                                <p className="fs-12 op-7 mb-1 text-muted">{idx.mail}</p>
                                                                                <Badge bg={idx.color} className="badge rounded-pill">{idx.badge}</Badge>
                                                                            </div>
                                                                        </div>
                                                                    </Card.Body>
                                                                    <Card.Footer className="text-center">
                                                                        <div className="btn-list">
                                                                            <Button variant='light' className="btn btn-sm  btn-wave">Block</Button>
                                                                            <Button variant='primary' className="btn btn-sm  btn-wave">Unfollow</Button>
                                                                        </div>
                                                                    </Card.Footer>
                                                                </Card>
                                                            </Col>
                                                        ))}
                                                        <Col xl={12}>
                                                            <div className="text-center mt-4">
                                                                <Button variant='' className="btn btn-primary-light btn-wave">Show All</Button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                                <Tab.Pane className=" fade p-0 border-0" id="gallery-tab-pane" eventKey="fourth">
                                                    <Row>
                                                        <Gallerydata />
                                                        <Col xl={12}>
                                                            <div className="text-center mt-4">
                                                                <Button variant='' className="btn btn-primary-light btn-wave">Show All</Button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Tab.Pane>
                                            </Tab.Content>
                                        </div>
                                    </Tab.Container>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4} className="col-xl-">
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Personal Info
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <ListGroup>
                                        {Personalinfodata.map((idx) => (
                                            <ListGroup.Item key={Math.random()}>
                                                <div className="d-flex flex-wrap align-items-center">
                                                    <div className="me-2 fw-semibold">{idx.text1}
                                                    </div>
                                                    <span className="fs-12 text-muted">{idx.text2}</span>
                                                </div>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card className="custom-card">
                                <Card.Header className="card-header d-flex justify-content-between">
                                    <Card.Title>
                                        Recent Posts
                                    </Card.Title>
                                    <div>
                                        <span className="badge bg-primary-transparent">Today</span>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <ListGroup>
                                        {RecentPostsdata.map((idx) => (
                                            <ListGroup.Item key={Math.random()}>
                                                <Link to="#">
                                                    <div className="d-flex flex-wrap align-items-center">
                                                        <span className="avatar avatar-md me-3">
                                                            <img src={idx.src} className="img-fluid" alt="..." />
                                                        </span>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0">{idx.name}</p>
                                                            <p className="mb-1 fs-12 profile-recent-posts text-truncate text-muted">{idx.text}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card className="custom-card">
                                <Card.Header className="card-header d-flex justify-content-between">
                                    <Card.Title>
                                        Suggestions
                                    </Card.Title>
                                    <div>
                                        <Button variant='' className="btn btn-sm btn-success-light btn-wave">View All</Button>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <ListGroup>
                                        {Suggestionsdata.map((idx) => (
                                            <ListGroup.Item key={Math.random()}>
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="fw-semibold d-flex align-items-center">
                                                        <span className="avatar avatar-xs me-2">
                                                            <img src={idx.src} alt="" />
                                                        </span>{idx.name}
                                                    </div>
                                                    <div>
                                                        <Button variant='' className="btn btn-sm btn-icon btn-primary-light">
                                                            <i className="ri-add-line"></i>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Profile;
