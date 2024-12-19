import  { FC, Fragment, useState } from 'react';
import { Badge, Button, Card, Col, Collapse, Dropdown, Modal, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import media22 from "../../../assets/images/media/media-22.jpg";
import media23 from "../../../assets/images/media/media-23.jpg";
import media24 from "../../../assets/images/media/media-24.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import face3 from "../../../assets/images/faces/3.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import face6 from "../../../assets/images/faces/6.jpg";
import face7 from "../../../assets/images/faces/7.jpg";
import face9 from "../../../assets/images/faces/9.jpg";
import face10 from "../../../assets/images/faces/10.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face12 from "../../../assets/images/faces/12.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face1 from "../../../assets/images/faces/1.jpg";
import face2 from "../../../assets/images/faces/2.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import face14 from "../../../assets/images/faces/14.jpg";
import face16 from "../../../assets/images/faces/16.jpg";
import media29 from "../../../assets/images/media/media-29.jpg";
import media28 from "../../../assets/images/media/media-28.jpg";
import media30 from "../../../assets/images/media/media-30.jpg";
import media31 from "../../../assets/images/media/media-31.jpg";
import media32 from "../../../assets/images/media/media-32.jpg";
import media33 from "../../../assets/images/media/media-33.jpg";
import media35 from "../../../assets/images/media/media-35.jpg";
import media36 from "../../../assets/images/media/media-36.jpg";
import media34 from "../../../assets/images/media/media-34.jpg";
import media37 from "../../../assets/images/media/media-37.jpg";
import media38 from "../../../assets/images/media/media-38.jpg";
import media39 from "../../../assets/images/media/media-39.jpg";
import media40 from "../../../assets/images/media/media-40.jpg";
import media41 from "../../../assets/images/media/media-41.jpg";
import media42 from "../../../assets/images/media/media-42.jpg";
import media47 from "../../../assets/images/media/media-47.jpg";
import { Backgroundcards, Gridcards, Gridmarkupcards, Mountaincards } from './cardsdata';

interface CardsProps { }

const Cards: FC<CardsProps> = () => {
    // Card With Collapse Button
    const [BasicExpanded, setBasicExpanded] = useState(true);

    const BasicHandleExpandClick = () => {
        setBasicExpanded(!BasicExpanded);
    };
    //Card With Close Button
    const [Basicshow, setBasicshow] = useState(true);

    //fullscreen
    const [fullScreen, setFullscreen] = useState('true');
    const [fullscreenshow, setfullscreenShow] = useState(false);

    const fullscreenmodalClose = () => setfullscreenShow(false);

    function handleShow(breakpoint: any) {
        setFullscreen(breakpoint);
        setfullscreenShow(true);
    }

    return (
        <Fragment>
            <Pageheader title="Cards" heading="Ui Elements" active="Cards" />
            <Row>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <img src={media22} className="card-img-top" alt="..." />
                        <Card.Body>
                            <h6 className="card-title fw-semibold">Card title</h6>
                            <p className="card-text text-muted">when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            <Link to="#" className="btn btn-primary">Read More</Link>
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            <span className="card-text">Last updated 3 mins ago</span>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Featured</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <h6 className="card-title fw-semibold">Special title treatment</h6>
                            <p className="card-text">Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage</p>
                            <Link to="#" className="btn btn-primary">Read More</Link>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body>
                            <h6 className="card-title fw-semibold mb-2">Card title</h6>
                            <p className="card-subtitle mb-3 text-muted">Card subtitle</p>
                            <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration many variations of passages of Lorem Ipsum available there are so many ways to solve but the majority have suffered.</p>
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            <Link to="#" className="card-link text-danger m-1">Buy Now</Link>
                            <Link to="#" className="card-link text-success m-1"><u>Review</u></Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <img src={media23} className="card-img-top" alt="..." />
                        <Card.Body>
                            <p className="card-text">Some quick example text to build on the card title and
                                make up the bulk of the card's content.</p>
                        </Card.Body>
                    </Card>
                    <h6 className="mb-3">Only Card Body:</h6>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="card-text">
                                <p className="mb-0">It is a long established fact that a reader will be distracted by the readable content.</p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <img src={media24} className="card-img-top" alt="..." />
                        <Card.Body>
                            <h6 className="card-title fw-semibold">Card title</h6>
                            <p className="card-text">Some quick example text to build on the card title and
                                make up the bulk of the card's content.</p>
                        </Card.Body>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                        </ul>
                        <Card.Body>
                            <Link to="#" className="card-link text-primary">Card link</Link>
                            <Link to="#" className="card-link text-secondary d-inline-block">Another link</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={6} xl={6} lg={12}>
                    <Row>
                        <h6 className="mb-3">Quote:</h6>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <blockquote className="blockquote mb-0 text-center">
                                        <h6>The greatest glory in living lies not in never falling, but in rising every time we fall.</h6>
                                        <footer className="blockquote-footer mt-2 fs-14">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <h6 className="mb-3">List Group:</h6>
                            <Row>
                                <Col xxl={4} xl={4} lg={4} md={4} sm={4}>
                                    <Card className="custom-card">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">An item</li>
                                            <li className="list-group-item">A second item</li>
                                            <li className="list-group-item">A third item</li>
                                            <li className="list-group-item">A fourth item</li>
                                        </ul>
                                    </Card>
                                </Col>
                                <Col xxl={4} xl={4} lg={4} md={4} sm={4}>
                                    <Card className="custom-card">
                                        <Card.Header>
                                            Featured
                                        </Card.Header>
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">An item</li>
                                            <li className="list-group-item">A second item</li>
                                            <li className="list-group-item">A third item</li>
                                        </ul>
                                    </Card>
                                </Col>
                                <Col xxl={4} xl={4} lg={4} md={4} sm={4}>
                                    <Card className="custom-card">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item">An item</li>
                                            <li className="list-group-item">A second item</li>
                                            <li className="list-group-item">A third item</li>
                                        </ul>
                                        <Card.Footer className="card-footer">
                                            Card footer
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={6} xl={6} lg={12}>
                    <h6 className="mb-3">Using Grid Markups:</h6>
                    <div className="row row-cols-12">
                        {Gridmarkupcards.map((idx) => (
                            <div className="col" key={Math.random()}>
                                <Card className="custom-card">
                                    <Card.Body>
                                        <img src={idx.src} className="card-img mb-3" alt="..." />
                                        <h6 className="card-title fw-semibold">{idx.text1}</h6>
                                        <p className="card-text">With supporting text below as a natural
                                            lead-in to additional content.</p>
                                        <Link to="#" className={`btn btn-${idx.color}`}>Purchase</Link>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xl={9}>
                    <h6 className="mb-3">Text Alignment:</h6>
                    <Row>
                        <Col xl={4}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="mb-2">
                                        <span className="avatar avatar-md">
                                            <img src={face15} alt="img" />
                                        </span>
                                    </div>
                                    <h6 className="card-title fw-semibold">Where it come from</h6>
                                    <p className="card-text">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
                                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card className="card text-center custom-card">
                                <Card.Body>
                                    <div className="mb-2">
                                        <span className="avatar avatar-md">
                                            <img src={face3} alt="img" />
                                        </span>
                                    </div>
                                    <h6 className="card-title fw-semibold">Why do we use it?</h6>
                                    <p className="card-text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={4}>
                            <Card className="card text-end custom-card">
                                <Card.Body>
                                    <div className="mb-2">
                                        <span className="avatar avatar-md">
                                            <img src={face11} alt="img" />
                                        </span>
                                    </div>
                                    <h6 className="card-title fw-semibold">What is special?</h6>
                                    <p className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={3}>
                    <Row>
                        <h6 className="mb-3">Mixins utilities:</h6>
                        <Col xl={12}>
                            <Card className="card border border-success mb-3">
                                <Card.Header className="card-header bg-transparent border-bottom border-success">Header</Card.Header>
                                <Card.Body className="card-body text-success">
                                    <h6 className="card-title fw-semibold">Looking For Success?</h6>
                                    <p className="card-text">If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.</p>
                                </Card.Body>
                                <div className="card-footer bg-transparent border-top border-success">Footer</div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <h6 className="mb-3">Card Header & Footer:</h6>
            <Row>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="d-flex align-items-center w-100">
                                <div className="me-2">
                                    <span className="avatar avatar-rounded">
                                        <img src={face11} alt="img" />
                                    </span>
                                </div>
                                <div className="">
                                    <div className="fs-15 fw-semibold">Adam Smith</div>
                                    <p className="mb-0 text-muted fs-11">28 Years, Male</p>
                                </div>
                                <Dropdown className="dropdown ms-auto">
                                    <Dropdown.Toggle variant='' className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown">
                                        <i className="fe fe-more-vertical"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu">
                                        <Dropdown.Item className="dropdown-item" href="#">Week</Dropdown.Item>
                                        <Dropdown.Item className="dropdown-item" href="#">Month</Dropdown.Item>
                                        <Dropdown.Item className="dropdown-item" href="#">Year</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            If you are going to use, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators.
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            <div className="d-flex justify-content-between">
                                <div className="fs-semibold fs-14">28,Nov 2022</div>
                                <div className="fw-semibold text-success">Assistant Professor</div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="card-header border-bottom-0 pb-0">
                            <div>
                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                <span className="text-black op-1"><i className="bi bi-star-fill"></i></span>
                                <p className="d-block text-muted mb-0 fs-12 fw-semibold">1 year ago</p>
                            </div>
                        </Card.Header>
                        <Card.Body className="card-body pt-3">
                            <div className="fw-semibold fs-15 mb-2">Very Great!</div>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            <div className="d-flex align-items-center">
                                <span className="avatar avatar-sm avatar-rounded me-2">
                                    <img src={face12} alt="img" />
                                </span>
                                <div className="fw-semibold fs-14">Corey Anderson</div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card text-center">
                        <Card.Header className="card-header border-bottom-0 pb-0">
                            <span className="ms-auto shadow-lg fs-17"><i className="ri-heart-fill text-danger"></i></span>
                        </Card.Header>
                        <Card.Body className="card-body pt-1">
                            <span className="avatar avatar-xl avatar-rounded me-2 mb-2">
                                <img src={face5} alt="img" />
                            </span>
                            <div className="fw-semibold fs-16">Sasha Max</div>
                            <p className="mb-4 text-muted fs-11">Web Developer</p>
                            <div className="btn-list">
                                <button className="btn btn-icon btn-facebook btn-wave">
                                    <i className="ri-facebook-line"></i>
                                </button>
                                <button className="btn btn-icon btn-twitter btn-wave">
                                    <i className="ri-twitter-line"></i>
                                </button>
                                <button className="btn btn-icon btn-instagram btn-wave">
                                    <i className="ri-instagram-line"></i>
                                </button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card border border-primary">
                        <Card.Body>
                            <svg className="footer-card-icon my-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#C6CDD1" d="M19 21H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2z" /><path fill="#C6CDD1" d="M11 1H3a2 2 0 0 0-2 2v8h10V1z" /><path fill="#A1ABB2" d="M21 11V3a2 2 0 0 0-2-2h-8v10h10z" /><path fill="#878A8F" d="M1 11v8a2 2 0 0 0 2 2h8V11H1z" /><path fill="#797D82" d="M11 11v10h8a2 2 0 0 0 2-2v-8H11z" /><path fill="#FFF" d="M14 6h5v1h-5z" /><path d="M19 20.75H3a2 2 0 0 1-2-2V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-.25a2 2 0 0 1-2 2z" opacity=".1" /><circle cx="16" cy="16" r="7" fill="#136ad0" /><path d="M16 22.75c-3.08 0-5.704-1.97-6.696-4.713C10.18 20.907 12.85 23 16 23s5.82-2.094 6.696-4.963C21.704 20.781 19.08 22.75 16 22.75z" opacity=".1" /><path fill="#FFF" d="M16 9.25c3.08 0 5.704 1.97 6.696 4.713C21.82 11.093 19.15 9 16 9s-5.82 2.094-6.696 4.963C10.296 11.219 12.92 9.25 16 9.25z" opacity=".2" /><path fill="#FFF" d="M4 6h5v1H4z" /><path fill="#FFF" d="M6 4h1v5H6zM13 14h6v1h-6zM13 17h6v1h-6zM4.379 15.086l.707-.707 3.535 3.535-.707.707z" /><path fill="#FFF" d="m4.379 17.914 3.535-3.535.707.707-3.535 3.535z" /><path fill="#FFF" d="M19 1H3a2 2 0 0 0-2 2v.25a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2V3a2 2 0 0 0-2-2z" opacity=".2" /><linearGradient id="a" x1="14.367" x2="19.862" y1="14.367" y2="19.862" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#3E2723" stopOpacity=".2" /><stop offset="1" stopColor="#3E2723" stopOpacity=".02" /></linearGradient><path fill="url(#a)" d="M19 14v1h-6l2 2h4v1h-6l4.766 4.766a7.014 7.014 0 0 0 5-5L19 14z" /><linearGradient id="b" x1="-.448" x2="23.366" y1="5.662" y2="16.766" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#FFF" stopOpacity=".2" /><stop offset="1" stopColor="#FFF" stopOpacity="0" /></linearGradient><path fill="url(#b)" d="M21 11.11V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8.11A6.974 6.974 0 0 0 16 23c3.86 0 7-3.14 7-7a6.974 6.974 0 0 0-2-4.89z" /></svg>
                            <p className="mb-0 mt-3 fs-20 fw-semibold lh-1">
                                Calculations
                            </p>
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            Lorem Ipsum is therefore always free from repetition, injected humour.
                        </Card.Footer>
                    </Card>
                </Col>
                {Mountaincards.map((idx) => (
                    <Col xl={2} key={Math.random()}>
                        <Card className="custom-card">
                            <Card.Body>
                                <img src={idx.src} className="card-img mb-3" alt="..." />
                                <h6 className="card-title fw-semibold mb-3">{idx.text1}<Badge bg={idx.color} className=" float-end fs-10">{idx.text2}</Badge></h6>
                                <p className="card-text">With supporting text below as a natural
                                    lead-in.</p>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                <Col xl={3}>
                    <Card className="custom-card text-center">
                        <Card.Header>
                            <Card.Title>Featured</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <h6 className="card-title fw-semibold mb-2">Breaking News !</h6>
                            <p className="card-text mb-4">With supporting text below as a natural lead-in to
                                additional content.</p>
                            <Link to="#" className="btn btn-primary mt-2 me-2">Read More</Link>
                            <Link to="#" className="btn btn-outline-secondary mt-2">Close</Link>
                        </Card.Body>
                        <div className="card-footer text-muted">
                            11.32pm
                        </div>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header>
                            <div className="d-flex w-100">
                                <div className="me-4">
                                    <span className="avatar avatar-lg avatar-rounded">
                                        <img src={face12} alt="img" />
                                    </span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between w-100 flex-wrap">
                                    <div className="me-3">
                                        <p className="text-muted mb-0">Posts</p>
                                        <p className="fw-semibold fs-16 mb-0">25</p>
                                    </div>
                                    <div className="me-3">
                                        <p className="text-muted mb-0">Followers</p>
                                        <p className="fw-semibold fs-16 mb-0">1253</p>
                                    </div>
                                    <div className="me-3">
                                        <p className="text-muted mb-0">Following</p>
                                        <p className="fw-semibold fs-16 mb-0">367</p>
                                    </div>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="fw-semibold fs-16">Angelina Caprio</div>
                            <div className="text-muted fs-11 mb-4">Angular Developer</div>
                            <p className="fs-14 fw-semibold mb-1">About:</p>
                            <p className="mb-0 card-text">Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions </p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Card With Collapse Button
                            </Card.Title>
                            <Link to="#" onClick={BasicHandleExpandClick}><i className={`fe ${BasicExpanded ? 'fe-chevron-up' : 'fe-chevron-down'}`}></i></Link>
                        </Card.Header>
                        <Collapse in={BasicExpanded} timeout={3000}>
                            <div>
                                <Card.Body>
                                    <h6 className="card-text fw-semibold">Collapsible Card</h6>
                                    <p className="card-text mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                                </Card.Body>
                                <Card.Footer className="card-footer">
                                    <button className="btn btn-primary">Read More</button>
                                </Card.Footer>
                            </div>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    {Basicshow ?
                        <Card className="custom-card">
                            <Card.Header className="card-header justify-content-between">
                                <Card.Title>
                                    Card With Close Button
                                </Card.Title>
                                <Link to="#" data-bs-toggle="card-remove" onClick={() => setBasicshow(false)}>
                                    <i className="ri-close-line fs-18"></i>
                                </Link>
                            </Card.Header>
                            <Card.Body>
                                <h6 className="card-text fw-semibold">Closed Card</h6>
                                <p className="card-text mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                            </Card.Body>
                            <Card.Footer className="card-footer">
                                <button className="btn btn-primary">Read More</button>
                            </Card.Footer>
                        </Card>
                        : null}
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Card With Fullscreen Button
                            </Card.Title>
                            <Link to="#" data-bs-toggle="card-fullscreen" onClick={() => handleShow(true)}>
                                <i className="ri-fullscreen-line"></i>
                            </Link>
                            <Modal show={fullscreenshow} fullscreen={fullScreen} onHide={() => setfullscreenShow(false)}>
                                <Modal.Header>
                                    <Modal.Title className="fs-15">Fullscreen Button</Modal.Title>
                                    <span className="d-flex ms-auto" onClick={fullscreenmodalClose}><i className='fe fe-x ms-auto' ></i></span>
                                </Modal.Header>
                                <Modal.Body>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={fullscreenmodalClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={fullscreenmodalClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Card.Header>
                        <Card.Body>
                            <h6 className="card-text fw-semibold">FullScreen Card</h6>
                            <p className="card-text mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            <button className="btn btn-primary">Read More</button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={6} xl={12}>
                    <h6 className="mb-3">Using Utilities:</h6>
                    <Row>
                        <Col xl={6}>
                            <Card className="custom-card w-75">
                                <Card.Header>
                                    <Card.Title>Using Width 75%</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nostrum omnis excepturi consequatur molestiae
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <Link to="#" className="btn btn-primary d-grid">Button</Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className="custom-card w-50">
                                <Card.Header>
                                    <Card.Title>Using Width 50%</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                                    </div>
                                </Card.Body>
                                <Card.Footer >
                                    <Link to="#" className="btn btn-primary d-grid">Button</Link>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={6} xl={12}>
                    <h6 className="mb-3">Navigation:</h6>
                    <Row>
                        <Col xl={6}>
                            <Card className="custom-card text-center">
                                <Card.Header>
                                    <ul className="nav nav-tabs card-header-tabs ms-1">
                                        <li className="nav-item">
                                            <Link className="nav-link active" aria-current="true" to="#">Active</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">Link</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link disabled" to="#">Disabled</Link>
                                        </li>
                                    </ul>
                                </Card.Header>
                                <Card.Body>
                                    <h6 className="card-title fw-semibold">Special title treatment</h6>
                                    <p className="card-text">With supporting text below as a natural lead-in to
                                        additional content.</p>
                                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className="text-center custom-card">
                                <Card.Header>
                                    <ul className="nav nav-pills card-header-pills ms-1">
                                        <li className="nav-item">
                                            <Link className="nav-link active" to="#">Active</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="#">Link</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="#" className="nav-link disabled">Disabled</Link>
                                        </li>
                                    </ul>
                                </Card.Header>
                                <Card.Body>
                                    <h6 className="card-title fw-semibold">Special title treatment</h6>
                                    <p className="card-text">With supporting text below as a natural lead-in to
                                        additional content.</p>
                                    <Link to="#" className="btn btn-primary">Go somewhere</Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <h6 className="mb-3">Image Caps:</h6>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <img src={media29} className="card-img-top" alt="..." />
                        <Card.Body>
                            <h6 className="card-title fw-semibold">Image caps are widely used in Blog's</h6>
                            <p className="card-text mb-3 text-muted">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings.</p>
                            <p className="card-text mb-0"><small>Last updated 3 mins
                                ago</small></p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Body>
                            <h6 className="card-title fw-semibold">Image caps are widely used in Blog's</h6>
                            <p className="card-text mb-3 text-muted">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound.</p>
                            <p className="card-text mb-0"><small>Last updated 3 mins
                                ago</small></p>
                        </Card.Body>
                        <img src={media28} className="card-img-bottom" alt="..." />
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Body>
                            <h6 className="card-title fw-semibold mb-1">Image caps are widely used in Blog's</h6>
                            <p className="card-text mb-1 text-muted">This is a wider card with supporting text below
                                as
                                a natural lead-in to additional content. This content is a
                                little
                                bit longer.</p>
                        </Card.Body>
                        <img src={media30} className="card-img rounded-0" alt="..." />
                        <Card.Body>
                            <p className="card-text mb-0"><small>Last updated 3 mins
                                ago</small></p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Image caps are widely used in Blog's</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p className="card-text mb-1 text-muted">This is a wider card with supporting text below
                                as
                                a natural lead-in to additional content. This content is a
                                little
                                bit longer.</p>
                        </Card.Body>
                        <img src={media31} className="card-img rounded-0" alt="..." />
                        <Card.Footer className="card-footer">
                            <p className="card-text mb-0"><small>Last updated 3 mins
                                ago</small></p>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <img src={media32} className="card-img-top" alt="..." />
                        <Card.Header>
                            <Card.Title>Image caps are widely used in Blog's</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p className="card-text mb-1 text-muted">This is a wider card with supporting text below
                                as
                                a natural lead-in to additional content. This content is a
                                little
                                bit longer.</p>
                        </Card.Body>
                        <Card.Footer>
                            <p className="card-text mb-0"><small>Last updated 3 mins
                                ago</small></p>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Image caps are widely used in Blog's</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <p className="card-text mb-1 text-muted">This is a wider card with supporting text below
                                as
                                a natural lead-in to additional content. This content is a
                                little
                                bit longer.</p>
                        </Card.Body>
                        <Card.Body>
                            <p className="card-text mb-0"><small>Last updated 3 mins
                                ago</small></p>
                        </Card.Body>
                        <img src={media33} className="card-img-bottom" alt="..." />
                    </Card>
                </Col>
            </Row>

            <h6 className="mb-3">Image Overlays:</h6>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card overlay-card">
                        <img src={media35} className="card-img" alt="..." />
                        <div className="card-img-overlay d-flex flex-column p-0">
                            <Card.Header>
                                <Card.Title className="card-title text-fixed-white">
                                    Image Overlays Are Awesome!
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="card-body text-fixed-white">
                                <div className="card-text mb-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</div>
                                <div className="card-text">Last updated 3 mins ago</div>
                            </Card.Body>
                        </div>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card overlay-card">
                        <img src={media36} className="card-img" alt="..." />
                        <div className="card-img-overlay d-flex flex-column p-0 over-content-bottom">
                            <Card.Body className="card-body text-fixed-white">
                                <div className="card-text text-fixed-white">
                                    Image Overlays Are Awesome!
                                </div>
                                <div className="card-text mb-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</div>
                                <div className="card-text">Last updated 3 mins ago</div>
                            </Card.Body>
                            <Card.Footer className="card-footer text-fixed-white">Last updated 3 mins ago</Card.Footer>
                        </div>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card overlay-card">
                        <img src={media34} className="card-img" alt="..." />
                        <div className="card-img-overlay d-flex flex-column p-0">
                            <Card.Header>
                                <div className="card-title text-fixed-white">
                                    Image Overlays Are Awesome!
                                </div>
                            </Card.Header>
                            <Card.Body className="card-body text-fixed-white">
                                <div className="card-text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</div>
                            </Card.Body>
                            <Card.Footer className="card-footer text-fixed-white">Last updated 3 mins ago</Card.Footer>
                        </div>
                    </Card>
                </Col>
            </Row>
            <h6 className="mb-3">Horizontal Cards:</h6>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <div className="row g-0">
                            <Col md={4}>
                                <img src={media37} className="img-fluid rounded-start h-100 w-100" alt="..." />
                            </Col>
                            <Col md={8}>
                                <Card.Header>
                                    <Card.Title>Horizontal Cards</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <h6 className="card-title fw-semibold">Horizontal cards are awesome!</h6>
                                    <p className="card-text">This is a wider card with supporting text below as a natural .</p>
                                </Card.Body>
                                <Card.Footer className="card-footer">
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </Card.Footer>
                            </Col>
                        </div>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Row className="row g-0">
                            <Col md={8}>
                                <Card.Header>
                                    <Card.Title>Horizontal Cards</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <h6 className="card-title fw-semibold">Horizontal cards are awesome!</h6>
                                    <p className="card-text mb-3">This is a wider card with suppo    rting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </Card.Body>
                            </Col>
                            <Col md={4}>
                                <img src={media38} className="img-fluid rounded-end h-100 w-100" alt="..." />
                            </Col>
                        </Row>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <div className="row g-0">
                            <Col md={8}>
                                <Card.Body>
                                    <h6 className="card-title fw-semibold mb-2">Horizontal Cards</h6>
                                    <div className="card-title mb-3">Horizontal cards are awesome!</div>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </Card.Body>
                                <div className="card-footer">
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </Col>
                            <Col md={4}>
                                <img src={media39} className="img-fluid rounded-end h-100 w-100" alt="..." />
                            </Col>
                        </div>
                    </Card>
                </Col>
            </Row>
            <h6 className="mb-3">Background Colored Cards:</h6>
            <Row>
                {Backgroundcards.map((idx) => (
                    <Col xl={3} key={Math.random()}>
                        <Card className={`custom-card card-bg-${idx.color}`}>
                            <Card.Body>
                                <div className="d-flex align-items-center w-100">
                                    <div className="me-2">
                                        <span className="avatar avatar-rounded">
                                            <img src={idx.src} alt="img" />
                                        </span>
                                    </div>
                                    <div className="">
                                        <div className="fs-15 fw-semibold">{idx.text1}</div>
                                        <p className={`mb-0 text-fixed-${idx.class} op-7 fs-12`}>{idx.text2}</p>
                                    </div>
                                    <div className="ms-auto">
                                        <Link to="#" className="text-fixed-white"><i className="bi bi-three-dots-vertical"></i></Link>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <h6 className="mb-3">Colored Border Cards:</h6>
            <Row>
                <Col xl={3}>
                    <div className="card border border-primary custom-card">
                        <Card.Body>
                            <p className="fs-14 fw-semibold mb-2 lh-1">Home Page Design
                                <Link to="#"><i className="bi bi-plus-square float-end text-primary fs-18"></i></Link>
                            </p>
                            <div className="d-flex flex-wrap gap-2 mb-4">
                                <Badge bg="" className="badge bg-primary-transparent">Framework</Badge>
                                <Badge bg="" className="badge bg-secondary-transparent">Angular</Badge>
                                <Badge bg="" className="badge bg-info-transparent">Php</Badge>
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
                    </div>
                </Col>
                <Col xl={3}>
                    <div className="card border border-secondary custom-card">
                        <Card.Body>
                            <p className="fs-14 fw-semibold mb-2 lh-1">Landing Page Design
                                <Link to="#"><i className="bi bi-plus-square float-end text-secondary fs-18"></i></Link>
                            </p>
                            <div className="d-flex flex-wrap gap-2 mb-4">
                                <span className="badge bg-danger-transparent">Laravel</span>
                                <span className="badge bg-teal-transparent">Codeignitor</span>
                                <span className="badge bg-success-transparent">Php</span>
                            </div>
                            <div className="avatar-list-stacked">
                                <span className="avatar avatar-sm avatar-rounded">
                                    <img src={face4} alt="img" />
                                </span>
                                <span className="avatar avatar-sm avatar-rounded">
                                    <img src={face6} alt="img" />
                                </span>
                            </div>
                        </Card.Body>
                    </div>
                </Col>
                <Col xl={3}>
                    <div className="card border border-warning custom-card">
                        <Card.Body>
                            <p className="fs-14 fw-semibold mb-2 lh-1">Update New Project
                                <Link to="#"><i className="bi bi-plus-square float-end text-warning fs-18"></i></Link>
                            </p>
                            <div className="d-flex flex-wrap gap-2 mb-4">
                                <span className="badge bg-warning-transparent">Html</span>
                                <span className="badge bg-secondary-transparent">Bootstrap</span>
                                <span className="badge bg-info-transparent">React</span>
                            </div>
                            <div className="avatar-list-stacked">
                                <span className="avatar avatar-sm avatar-rounded">
                                    <img src={face1} alt="img" />
                                </span>
                                <span className="avatar avatar-sm avatar-rounded">
                                    <img src={face12} alt="img" />
                                </span>
                                <span className="avatar avatar-sm avatar-rounded">
                                    <img src={face10} alt="img" />
                                </span>
                                <span className="avatar avatar-sm avatar-rounded">
                                    <img src={face16} alt="img" />
                                </span>
                            </div>
                        </Card.Body>
                    </div>
                </Col>
                <Col xl={3}>
                    <div className="card border border-info custom-card">
                        <Card.Body>
                            <p className="fs-14 fw-semibold mb-2 lh-1">New Project Discussion
                                <Link to="#"><i className="bi bi-plus-square float-end text-info fs-18"></i></Link>
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
                    </div>
                </Col>
                <Col xl={3}>
                    <div className="card border border-danger custom-card">
                        <Card.Body>
                            <p className="fs-14 fw-semibold mb-2 lh-1">Recent Projects Testing
                                <Link to="#"><i className="bi bi-plus-square float-end text-danger fs-18"></i></Link>
                            </p>
                            <div className="d-flex flex-wrap gap-2 mb-4">
                                <span className="badge bg-primary-transparent">Ui</span>
                                <span className="badge bg-secondary-transparent">Angular</span>
                                <span className="badge bg-info-transparent">Java</span>
                            </div>
                            <div className="avatar-list-stacked">
                                <span className="avatar avatar-sm avatar-rounded">
                                    <img src={face15} alt="img" />
                                </span>
                            </div>
                        </Card.Body>
                    </div>
                </Col>
                <Col xl={3}>
                    <div className="card border border-success custom-card">
                        <Card.Body>
                            <p className="fs-14 fw-semibold mb-2 lh-1">About Us Page redesign
                                <Link to="#"><i className="bi bi-plus-square float-end text-success fs-18"></i></Link>
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
                    </div>
                </Col>
                <Col xl={3}>
                    <div className="card border border-light custom-card">
                        <Card.Body>
                            <p className="fs-14 fw-semibold mb-2 lh-1">New Employees
                                <Link to="#"><i className="bi bi-plus-square float-end text-default fs-18"></i></Link>
                            </p>
                            <div className="d-flex flex-wrap gap-2 mb-4">
                                <span className="badge bg-warning-transparent">Html</span>
                                <span className="badge bg-info-transparent">Cake Php</span>
                                <span className="badge bg-success-transparent">React</span>
                            </div>
                            <div className="avatar-list-stacked">
                                <span className="avatar avatar-sm avatar-rounded">
                                    <img src={face5} alt="img" />
                                </span>
                                <span className="avatar avatar-sm avatar-rounded">
                                    <img src={face6} alt="img" />
                                </span>
                                <span className="avatar avatar-sm avatar-rounded">
                                    <img src={face7} alt="img" />
                                </span>
                            </div>
                        </Card.Body>
                    </div>
                </Col>
                <Col xl={3}>
                    <div className="card border border-dark custom-card">
                        <Card.Body>
                            <p className="fs-14 fw-semibold mb-2 lh-1">Terminated Employees
                                <Link to="#"><i className="bi bi-plus-square float-end text-dark fs-18"></i></Link>
                            </p>
                            <div className="d-flex flex-wrap gap-2 mb-4">
                                <span className="badge bg-primary-transparent">Angular</span>
                            </div>
                            <div className="avatar-list-stacked">
                                <span className="avatar avatar-sm avatar-rounded">
                                    <img src={face9} alt="img" />
                                </span>
                                <span className="avatar avatar-sm avatar-rounded">
                                    <img src={face11} alt="img" />
                                </span>
                                <span className="avatar avatar-sm avatar-rounded">
                                    <img src={face12} alt="img" />
                                </span>
                                <span className="avatar avatar-sm avatar-rounded">
                                    <img src={face15} alt="img" />
                                </span>
                            </div>
                        </Card.Body>
                    </div>
                </Col>
            </Row>
            <h6 className="mb-3">Card Groups With Footer:</h6>
            <Row>
                <Col xl={12}>
                    <div className="card-group">
                        <Card className="custom-card">
                            <img src={media40} className="card-img-top" alt="..." />
                            <Card.Body>
                                <h6 className="card-title fw-semibold">Delecious food is a blessing!</h6>
                                <p className="card-text">This is a wider card with supporting text below as
                                    a
                                    natural lead-in to additional content. This content is a little bit
                                    longer.</p>
                            </Card.Body>
                            <Card.Footer className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className="custom-card">
                            <img src={media41} className="card-img-top" alt="..." />
                            <Card.Body>
                                <h6 className="card-title fw-semibold">Is office the best place to earn knowledge?</h6>
                                <p className="card-text">This card has supporting text below as a natural
                                    lead-in to additional content.</p>
                            </Card.Body>
                            <Card.Footer className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className="custom-card">
                            <img src={media42} className="card-img-top" alt="..." />
                            <Card.Body>
                                <h6 className="card-title fw-semibold">Writing is an art.</h6>
                                <p className="card-text">This is a wider card with supporting text below as
                                    a
                                    natural lead-in to additional content. This card has even longer
                                    content
                                    than the first to show that equal height action.</p>
                            </Card.Body>
                            <Card.Footer className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </div>
                </Col>
            </Row>
            <h6 className="mb-3">Cards With Link:</h6>
            <Row>
                <Col xxl={3} xl={12}>
                    <Card className="custom-card">
                        <Link to="#" className="card-anchor"></Link>
                        <img src={media23} className="card-img-top" alt="..." />
                        <Card.Body>
                            <h6 className="card-title fw-semibold mb-0">Forests are Awesome.</h6>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} xl={6}>
                    <Row>
                        <Col xxl={12} xl={12}>
                            <Card className="custom-card card-bg-primary">
                                <Link to="#" className="card-anchor"></Link>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0 text-center">
                                        <h6 className="text-fixed-white">The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart..</h6>
                                        <footer className="blockquote-footer mt-3 fs-14 text-fixed-white op-7">Someone famous as <cite title="Source Title">-Helen Keller</cite></footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={5} xl={12}>
                            <Card className="custom-card">
                                <Link to="#" className="card-anchor"></Link>
                                <Card.Body>
                                    <div className="d-flex align-items-center">
                                        <div className="me-3">
                                            <span className="avatar avatar-md">
                                                <img src={face15} alt="img" />
                                            </span>
                                        </div>
                                        <div>
                                            <p className="card-text mb-0 fs-14 fw-semibold">Atharva Simon.</p>
                                            <div className="card-title text-muted fs-12 mb-0">Correspondent Professor</div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="custom-card border border-info">
                                <Link to="#" className="card-anchor"></Link>
                                <Card.Body>
                                    <div className="d-flex align-items-center">
                                        <div className="me-3">
                                            <span className="avatar avatar-xl">
                                                <img src={face8} alt="img" />
                                            </span>
                                        </div>
                                        <div>
                                            <p className="card-text text-info mb-1 fs-14 fw-semibold">Alicia Keys.</p>
                                            <div className="card-title fs-12 mb-1">Department Of Commerce</div>
                                            <div className="card-title text-muted fs-11 mb-0">24 Years, Female</div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={7} xl={12}>
                            <Card className="custom-card">
                                <Link to="#" className="card-anchor"></Link>
                                <div className="row g-0">
                                    <Col md={8}>
                                        <Card.Body>
                                            <h6 className="card-title mb-2 fw-semibold">Fox is Beautiful ?</h6>
                                            <p className="card-text mb-0">This is a wild animal with supporting tactics and are very efficient at kill,they are very Dangerous.</p>
                                            <p className="mb-0 card-text">
                                                Fox lives mainly in forests and are well known for their hunting skills.
                                            </p>
                                        </Card.Body>
                                        <Card.Footer className="card-footer">
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </Card.Footer>
                                    </Col>
                                    <Col md={4}>
                                        <img src={media39} className="img-fluid rounded-end h-100" alt="..." />
                                    </Col>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card">
                        <Link to="#" className="card-anchor"></Link>
                        <img src={media47} className="card-img-top" alt="..." />
                        <Card.Body>
                            <h6 className="card-title fw-semibold">Most tropical areas are suitable</h6>
                            <p className="card-text"> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <h6 className="mb-3">Grid Cards:</h6>
            <Row>
                <Col xl={12}>
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {Gridcards.map((idx) => (
                            <div className="col" key={Math.random()}>
                                <Card className="custom-card">
                                    <img src={idx.src} className="card-img-top" alt="..." />
                                    <Card.Body>
                                        <h6 className="card-title fw-semibold">{idx.text1}</h6>
                                        <p className="card-text"> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Cards;
