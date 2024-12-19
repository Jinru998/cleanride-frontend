import { FC, Fragment } from 'react';
import { Badge, Button, Card, Col, Dropdown, ListGroup, Nav, ProgressBar, Row, Tab, Table } from 'react-bootstrap';
import Pageheader from '../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import { Applicants, BTC, DASH, ETH, GLM, Salesdata, Sessions, Targetreport, TotalRevenue, Trafficsources, WorldMap, } from './widgetsdata';
import face1 from "../../assets/images/faces/1.jpg";
import face2 from "../../assets/images/faces/2.jpg";
import face4 from "../../assets/images/faces/4.jpg";
import face6 from "../../assets/images/faces/6.jpg";
import face12 from "../../assets/images/faces/12.jpg";
import face10 from "../../assets/images/faces/10.jpg";
import face11 from "../../assets/images/faces/11.jpg";
import face9 from "../../assets/images/faces/9.jpg";
import face8 from "../../assets/images/faces/8.jpg";
import face20 from "../../assets/images/faces/20.jpg";
import face15 from "../../assets/images/faces/15.jpg";
import face5 from "../../assets/images/faces/5.jpg";
import face13 from "../../assets/images/faces/13.jpg";
import face16 from "../../assets/images/faces/16.jpg";

interface WidgetsProps { }

const Widgets: FC<WidgetsProps> = ()=> {
    
    return (
        <Fragment>
            <Pageheader title="Widgets" heading="Widgets" active="Widgets" />
            <Row>
                <Col xxl={3} xl={3} lg={6} md={6}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-top">
                                <div className="me-3">
                                    <span className="avatar avatar-sm shadow-sm avatar-rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="svg-info" viewBox="0 0 128 128"><path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z" /><path fill="#fff" d="M94.3 71.4c-.5-3.6-2.3-6.4-5.4-8.2-1.4-.8-3.1-1.4-4.7-2.1.2-.1.3-.3.4-.3 7.9-4.1 7.2-16.3 1.5-20.5-2.3-1.7-4.9-2.8-7.7-3.4-2-.4-3.9-.7-6-1.1 0-3.5.1-8.5.1-12.4H65c0 3.8-.1 8.7-.1 12.1H59c0-3.5 0-8.3.1-12.1h-7.4c0 4-.1 8.8-.1 12.3-5.1 0-10-.1-15-.1 0 2.7 0 5.3-.1 7.9h3c.9 0 1.9 0 2.8.1 2.6.2 3.9 1.6 3.9 4.2l-.3 31.9c0 2.3-1 3.3-3.3 3.3h-5c-.5 3-1 5.9-1.6 8.9 5 .1 10 .1 15 .2 0 3.8 0 8.7-.1 12.7h7.4c0-4 .1-8.7.1-12.5 2.1.1 4 .1 5.9.2 0 3.8-.1 8.4-.1 12.3h7.4c0-4 .1-8.7.1-12.4.3 0 .5-.1.6-.1 3.5-.6 7.2-.9 10.6-1.7 4.5-1.1 8.1-3.7 9.9-8.2 1.7-3.6 2-7.2 1.5-11zM59 44.3c4.6 0 9.1-.4 13.4 1.5 2.8 1.2 4.2 3.5 4 6.3-.2 2.9-1.9 5-4.8 6-4.1 1.3-8.3 1.3-12.7 1.1 0-5 .1-9.8.1-14.9zm16.2 37.1c-4.1 1.8-8.5 1.8-12.8 1.9-1.2 0-2.4-.1-3.8-.1.1-5.5.1-10.9.2-16.4 5.6 0 11.2-.4 16.5 1.9 2.7 1.2 4.3 3.3 4.3 6.4 0 3.1-1.6 5.1-4.4 6.3z" /></svg>
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <div className="d-flex flex-wrap align-items-center justify-content-between fs-14 mb-2">
                                        <span className="flex-fill">Bitcoin</span>
                                        <span className="ms-1 text-muted">BTC</span>
                                    </div>
                                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                                        <h5 className="fw-semibold mb-0">$12,800</h5>
                                        <div className="flex-fill">
                                            <span className="ms-2 badge bg-success-transparent rounded-pill">+25.8%</span>
                                        </div>
                                        <div id="btcCoin">
                                            <BTC />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={3} lg={6} md={6}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-top">
                                <div className="me-3">
                                    <span className="avatar avatar-sm shadow-sm avatar-rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="svg-success" viewBox="0 0 128 128"><path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z" /><path fill="#fff" d="M65.2 87.2v22.7l28.1-39.5zM92.3 63.1l-27.1-45v32.7zM65.2 53.3v28l26.9-15.7zM35.8 63.1l27-45v32.7zM62.8 53.3v28L35.9 65.6zM62.8 87.2v22.7L34.7 70.4z" /></svg>
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <div className="d-flex flex-wrap align-items-center justify-content-between fs-14 mb-2">
                                        <span className="flex-fill">Ethereum</span>
                                        <span className="ms-1 text-muted">ETH</span>
                                    </div>
                                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                                        <h5 className="fw-semibold mb-0">$18,600</h5>
                                        <div className="flex-fill">
                                            <span className="ms-2 badge bg-success-transparent rounded-pill">+12.9%</span>
                                        </div>
                                        <div id="ethCoin">
                                            <ETH />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={3} lg={6} md={6}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-top">
                                <div className="me-3">
                                    <span className="avatar avatar-sm shadow-sm avatar-rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="svg-danger" viewBox="0 0 128 128"><path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z" /><path fill="#fff" d="M20.8 89.3c1.4-4.1 2.7-7.9 4.1-11.8.1-.4.9-.7 1.3-.7 2.3-.1 4.7 0 7 0H79c1.2 0 1.8-.4 2.1-1.5 2.5-7.5 5.2-15 7.8-22.5.1-.4.2-.8.4-1.4H33.8c1.4-4.2 2.8-8.1 4.1-12 .1-.3.7-.6 1.1-.6 1.4-.1 2.8 0 4.2 0 18.8 0 37.6.1 56.3-.1 5.6-.1 11.6 4.3 9.2 12.5-1.8 6.1-4.1 12.1-6.2 18.2-.7 2.1-1.4 4.1-2.1 6.2-2.6 7.2-7.9 11.6-15.2 13.6-.7.2-1.4.2-2.1.2H22.3c-.4-.1-.8-.1-1.5-.1z" /><path fill="#fff" d="M55.9 58.1c-1.4 4-2.8 7.7-4.2 11.4-.1.3-.7.5-1 .5H19.2c-.1 0-.3-.1-.6-.2 1.3-3.7 2.6-7.3 4-10.9.1-.3.7-.7 1-.7 10.7-.1 21.4-.1 32.3-.1z" /></svg>
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <div className="d-flex flex-wrap align-items-center justify-content-between fs-14 mb-2">
                                        <span className="flex-fill">Dash</span>
                                        <span className="ms-1 text-muted">DSH</span>
                                    </div>
                                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                                        <h5 className="fw-semibold mb-0">$16,580</h5>
                                        <div className="flex-fill">
                                            <span className="ms-2 badge bg-success-transparent rounded-pill">+15.7%</span>
                                        </div>
                                        <div id="dshCoin">
                                            <DASH />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={3} lg={6} md={6}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-top">
                                <div className="me-3">
                                    <span className="avatar avatar-sm shadow-sm avatar-rounded">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="svg-warning" viewBox="0 0 128 128"><path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z" /><path fill="#fff" d="M63.8 22.6c3.7-.1 7.2.6 10.2 2.7 1.4.9 2.4.8 3.6-.5 2.4-2.6 5-5 7.5-7.6.9-.9 1.8-1.5 2.9-.2 1.1 1.1.8 2-.2 2.9-2.6 2.6-5 5.2-7.6 7.8-1.1 1.1-1.3 1.9-.5 3.3 5.8 10.4 2.9 22.5-8.6 28.1-1.1.5-2.3.8-3.5 1-1.4.3-1.9 1-1.9 2.5.1 3 .1 6 0 8.9 0 1.6.5 2.3 2.1 2.7 6.2 1.5 10.6 5.2 13.3 10.9 2.6 5.5 1.9 15.4-3.8 21.3-4.8 4.9-13.2 6.9-19.5 4.4-7.5-3-12.1-9.6-12.2-17.5-.1-9.6 5.1-16.4 14.3-19 1.4-.4 2.2-1 2.1-2.5-.1-3.4 0-6.8-.2-10.2 0-.6-1.1-1.4-1.8-1.6-6-1.6-10.4-5.2-12.9-10.8-5.6-13 4.3-27.4 16.7-26.6zM79 92.8c0-7.9-6.9-15.1-14.5-15.1-8-.1-15.3 7-15.4 15-.1 7.9 7.3 15.6 14.9 15.5 8.1-.1 15-7.2 15-15.4zM49.3 41.1c0 8.6 6.6 15.6 14.9 15.6 7.7 0 14.8-7.1 14.8-15.1 0-7.4-5.5-15.2-14.7-15-8.4.1-14.9 6.3-15 14.5z" /></svg>
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <div className="d-flex flex-wrap align-items-center justify-content-between fs-14 mb-2">
                                        <span className="flex-fill">Golem</span>
                                        <span className="ms-1 text-muted">GLM</span>
                                    </div>
                                    <div className="d-flex flex-wrap align-items-center justify-content-between">
                                        <h5 className="fw-semibold mb-0">$12,545</h5>
                                        <div className="flex-fill">
                                            <span className="ms-2 badge bg-success-transparent rounded-pill">+12.1%</span>
                                        </div>
                                        <div id="glmCoin">
                                            <GLM />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={2} xl={4} lg={12}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex flex-wrap align-items-top justify-content-between">
                                        <div className="flex-fill">
                                            <p className="mb-0 text-muted">Total Candidates</p>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 fw-semibold">9,231</span>
                                                <span className="fs-12 text-success ms-2"><i className="ti ti-trending-up me-1 d-inline-block"></i>0.5%</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="avatar avatar-md avatar-rounded bg-primary-transparent text-primary fs-18">
                                                <i className="bi bi-people-fill fs-16"></i>
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex flex-wrap align-items-top justify-content-between">
                                        <div className="flex-fill">
                                            <p className="mb-0 text-muted">Total Subscriptions</p>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 fw-semibold">3,571</span>
                                                <span className="fs-12 text-success ms-2"><i className="ti ti-trending-up me-1 d-inline-block"></i>0.42%</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="avatar avatar-md avatar-rounded bg-secondary-transparent text-secondary fs-18">
                                                <i className="bi bi-person-lines-fill fs-16"></i>
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex flex-wrap align-items-top justify-content-between">
                                        <div className="flex-fill">
                                            <p className="mb-0 text-muted">Page Views</p>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 fw-semibold">1,986</span>
                                                <span className="fs-12 text-success ms-2"><i className="ti ti-trending-up me-1 d-inline-block"></i>5.1%</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="avatar avatar-md avatar-rounded bg-success-transparent text-success fs-18">
                                                <i className="bi bi-eye-fill fs-16"></i>
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex flex-wrap align-items-top justify-content-between">
                                        <div className="flex-fill">
                                            <p className="mb-0 text-muted">New Registrations</p>
                                            <div className="d-flex align-items-center">
                                                <span className="fs-5 fw-semibold">773</span>
                                                <span className="fs-12 text-success ms-2"><i className="ti ti-trending-up me-1 d-inline-block"></i>3.5%</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="avatar avatar-md avatar-rounded bg-info-transparent text-info fs-18">
                                                <i className="bi bi-file-earmark-text-fill fs-16"></i>
                                            </span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={5} xl={8} lg={12} className="col-xxl-5 col-xl-8 col-lg-12">
                    <Row>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex flex-wrap align-items-top mb-2">
                                        <div className="flex-fill">
                                            <p className="mb-0 text-muted">Total Recruiters</p>
                                        </div>
                                        <div className="ms-2">
                                            <span className="avatar avatar-md bg-info fs-18">
                                                <i className="bi bi-person-square"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <span className="fs-5 fw-semibold">9,231</span>
                                    <span className="fs-12 text-success ms-1"><i className="ti ti-trending-up me-1 d-inline-block"></i>0.5%</span>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className="custom-card card-bg-primary text-fixed-white">
                                <Card.Body>
                                    <div className="d-flex align-items-top mb-2">
                                        <div className="flex-fill">
                                            <p className="mb-0 op-7">Premium Recruiters</p>
                                        </div>
                                        <div className="ms-2">
                                            <span className="avatar avatar-md bg-secondary shadow-sm fs-18">
                                                <i className="bi bi-person-square"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <span className="fs-5 fw-semibold">9,231</span>
                                    <span className="fs-12 op-7 ms-1"><i className="ti ti-trending-up me-1 d-inline-block"></i>0.5%</span>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className="custom-card overflow-hidden">
                                <div className="card-body p-0">
                                    <div className="p-3">
                                        <div className="d-flex align-items-center mb-2">
                                            <span className="avatar avatar-md avatar-rounded bg-secondary me-2">
                                                <i className="bi bi-receipt fs-16"></i>
                                            </span>
                                            <p className="mb-0 flex-fill text-muted">Total Revenue</p>
                                        </div>
                                        <span className="fs-5 fw-semibold">$12,897</span>
                                        <span className="fs-12 text-success ms-1"><i className="ti ti-trending-up me-1 d-inline-block"></i>3.5%</span>
                                    </div>
                                    <div id="totalRevenue">
                                        <TotalRevenue />
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex align-items-center mb-3">
                                        <span className="avatar avatar-md avatar-rounded bg-success me-2">
                                            <i className="bi bi-people fs-16"></i>
                                        </span>
                                        <p className="mb-0 flex-fill text-muted">Active Members</p>
                                    </div>
                                    <span className="fs-5 fw-semibold">$12,897</span>
                                    <span className="fs-12 text-success ms-1"><i className="ti ti-trending-up me-1 d-inline-block"></i>3.5%</span>
                                    <div className="fw-normal d-flex align-items-center mb-2 mt-3">
                                        <p className="mb-0 flex-fill">Active Candidates</p>
                                        <span>3,274</span>
                                    </div>
                                    <ProgressBar variant='success' className="progress progress-xs mb-4" now={25} />
                                    <div className="fw-normal d-flex align-items-center mb-2">
                                        <p className="mb-0 flex-fill">Active Recruiters</p>
                                        <span>8,726</span>
                                    </div>
                                    <ProgressBar variant='success' className="progress progress-xs mb-2" now={75} />
                                </Card.Body>
                                <div className="card-footer text-center">
                                    <div className="d-grid">
                                        <Link to="#" className="text-primary">View Details <i className="ti ti-external-link"></i></Link>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={3} xl={7} lg={7}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="flex-fill d-flex align-items-center">
                                            <div className="me-2">
                                                <span className="avatar rounded-2 text-bg-primary fs-20"><i className="bi bi-people"></i></span>
                                            </div>
                                            <div className="flex-fill">
                                                <p className="mb-0 ">Premium Recruiters</p>
                                                <span className="text-success fs-12">7 New</span>
                                            </div>
                                        </div>
                                        <div>
                                            <Link to="#" className="btn btn-icon btn-primary-light rounded-pill btn-wave transform-arrow" data-bs-toggle="tooltip" aria-label="View All"><i className="bi bi-chevron-right"></i></Link>
                                        </div>
                                    </div>
                                    <p className="mb-3 fs-5 fw-semibold">386</p>
                                    <p className="mb-2 text-muted fw-normal">Recents</p>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="avatar-list-stacked">
                                            <Link to="#" className="avatar avatar-sm rounded-circle overflow-hidden" data-bs-toggle="tooltip" aria-label="Mis x matched">
                                                <img src={face2} alt="img" className="w-100" /></Link>
                                            <Link to="#" className="avatar avatar-sm rounded-circle overflow-hidden" data-bs-toggle="tooltip" aria-label="Barbel Bob">
                                                <img src={face12} alt="img" className="w-100" /></Link>
                                            <Link to="#" className="avatar avatar-sm rounded-circle overflow-hidden" data-bs-toggle="tooltip" aria-label="Phan Rel">
                                                <img src={face20} alt="img" className="w-100" /></Link>
                                            <Link to="#" className="avatar avatar-sm rounded-circle overflow-hidden bg-primary text-fixed-white" data-bs-toggle="tooltip">+4</Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-fill">
                                            <p className="mb-1 fs-5 fw-semibold text-default">1,773</p>
                                            <p className="mb-0 text-muted">Active Members</p>
                                            <p className="mb-0 fs-11"><Link to="#" className="text-success text-decoration-underline">View All</Link></p>
                                        </div>
                                        <div className="ms-2">
                                            <span className="avatar text-bg-info rounded-circle fs-20"><i className="bi bi-people-fill"></i></span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex align-items-center">
                                        <div className="flex-fill">
                                            <p className="mb-1 fs-5 fw-semibold text-default">116</p>
                                            <p className="mb-0 text-muted">Registrations</p>
                                            <p className="mb-0 fs-11"><Link to="#" className="text-success text-decoration-underline">View All</Link></p>
                                        </div>
                                        <div className="ms-2">
                                            <span className="avatar text-bg-success rounded-circle fs-20"><i className="bi bi-file-earmark-text"></i></span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={2} xl={5} className="col-xxl-2 col-xl-5 col-lg-5">
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card card-bg-primary">
                                <Card.Header className="card-header justify-content-between border-bottom-0">
                                    <Card.Title className="text-fixed-white">
                                        Premium Recruiters
                                    </Card.Title>
                                    <div>
                                        <Button variant='' className="btn btn-sm btn-icon text-bg-primary transform-arrow"><i className="ti ti-chevron-right"></i></Button>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="d-flex flex-wrap align-items-top">
                                        <div className="flex-fill overflow-hidden">
                                            <p className="mb-2 lh-1 fs-5 fw-semibold">9,231</p>
                                            <p className="mb-0 fs-12 text-fixed-white op-7">
                                                <span><i className="bi bi-caret-up-fill"></i> 2.3%</span>
                                                <span className="op-7 ms-1">From Last Month</span>
                                            </p>
                                        </div>
                                        <div>
                                            <span className="avatar avatar-sm bg-success avatar-rounded"><i className="bi bi-people-fill"></i></span>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Body className="card-body p-0">
                                    <div className="p-3">
                                        <div className="d-flex flex-wrap mb-1">
                                            <Link to="#" className="pe-2">
                                                <span className="avatar border text-muted text-primary"><i className="ri-apple-fill fs-18"></i></span>
                                            </Link>
                                            <div className="flex-fill">
                                                <div className="d-flex flex-wrap align-items-center justify-content-between mb-1">
                                                    <span className="fw-semibold">Apple</span>
                                                    <span className="text-success text-end"><i className="ti ti-trending-up fs-11 me-1 d-inline-block"></i>0.14%</span>
                                                </div>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between fs-12 mb-3">
                                                    <span className="text-muted">$12,289.44</span>
                                                    <span className="text-success text-end">+$1,780.80</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <Link to="#" className="flex-fill btn btn-sm btn-light me-2">Short</Link>
                                            <Link to="#" className="flex-fill btn btn-sm btn-primary-light">Buy</Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Body className="card-body p-0">
                                    <div className="p-3">
                                        <div className="d-flex flex-wrap mb-1">
                                            <Link to="#" className="pe-2">
                                                <span className="avatar border text-muted text-primary"><i className="ri-bit-coin-fill fs-18"></i></span>
                                            </Link>
                                            <div className="flex-fill">
                                                <div className="d-flex flex-wrap align-items-center justify-content-between mb-1">
                                                    <span className="fw-semibold">Bitcoin</span>
                                                    <span className="text-success text-end"><i className="ti ti-trending-up fs-11 me-1 d-inline-block"></i>2.14%</span>
                                                </div>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between fs-12 mb-3">
                                                    <span className="text-muted">$58,151.02</span>
                                                    <span className="text-success text-end">+$5,745.62</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <Link to="#" className="flex-fill btn btn-sm btn-light me-2">Short</Link>
                                            <Link to="#" className="flex-fill btn btn-sm btn-primary-light">Buy</Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xxl={3} sm={6}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-top justify-content-between mb-4">
                                <div className="flex-fill d-flex align-items-top">
                                    <div className="me-2">
                                        <span className="avatar avatar-md text-primary border bg-light"><i className="ti ti-users fs-18"></i></span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-semibold fs-14 mb-0">Total Candidates</p>
                                        <p className="mb-0 text-muted fs-12 op-7">Magna sit elitr kasd consetetur.</p>
                                    </div>
                                </div>
                                <div>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='light' data-bs-toggle="dropdown" className="btn btn-icon btn-sm  no-caret"><i className="ti ti-dots"></i></Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item className="dropdown-item">Action</Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">Another Action</Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">Something Else Here</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-0">
                                <p className="mb-0 fs-20 fw-semibold">2,460</p>
                                <span className="text-muted ms-2"><i className="ti ti-trending-up align-middle text-success me-1 d-inline-block"></i>2.5%</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-fill">
                                    <ProgressBar variant='primary' className="progress progress-xs" now={14} />
                                </div>
                                <div className="ms-3">
                                    <span className="fs-12 text-muted">14% Target</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} sm={6}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-top justify-content-between mb-4">
                                <div className="flex-fill d-flex align-items-top">
                                    <div className="me-2">
                                        <span className="avatar avatar-md text-secondary border bg-light"><i className="ti ti-user-circle fs-18"></i></span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-semibold fs-14 mb-0">Recruiters</p>
                                        <p className="mb-0 text-muted fs-12 op-7">Elitr at gubergren sit sed.</p>
                                    </div>
                                </div>
                                <div>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='light' data-bs-toggle="dropdown" className="btn btn-icon btn-sm  no-caret"><i className="ti ti-dots"></i></Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item className="dropdown-item">Action</Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">Another Action</Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">Something Else Here</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-0">
                                <p className="mb-0 fs-20 fw-semibold">7,539</p>
                                <span className="text-muted ms-2"><i className="ti ti-trending-up align-middle text-success me-1 d-inline-block"></i>3.1%</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-fill">
                                    <ProgressBar variant='secondary' className="progress progress-xs" now={14} />
                                </div>
                                <div className="ms-3">
                                    <span className="fs-12 text-muted">55% Target</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} sm={6}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-top justify-content-between mb-4">
                                <div className="flex-fill d-flex align-items-top">
                                    <div className="me-2">
                                        <span className="avatar avatar-md text-success border bg-light"><i className="ti ti-view-360 fs-18"></i></span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-semibold fs-14 mb-0">Page Views</p>
                                        <p className="mb-0 text-muted fs-12 op-7">Sed duo ut sanctus gubergren.</p>
                                    </div>
                                </div>
                                <div>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='light' data-bs-toggle="dropdown" className="btn btn-icon btn-sm  no-caret"><i className="ti ti-dots"></i></Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item className="dropdown-item">Action</Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">Another Action</Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">Something Else Here</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-0">
                                <p className="mb-0 fs-20 fw-semibold">13,693</p>
                                <span className="text-muted ms-2"><i className="ti ti-trending-up align-middle text-success me-1 d-inline-block"></i>5.4%</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-fill">
                                    <ProgressBar variant='success' className="progress progress-xs" now={14} />
                                </div>
                                <div className="ms-3">
                                    <span className="fs-12 text-muted">24% Target</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} sm={6}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-top justify-content-between mb-4">
                                <div className="flex-fill d-flex align-items-top">
                                    <div className="me-2">
                                        <span className="avatar avatar-md text-indigo border bg-light"><i className="ti ti-view-360 fs-18"></i></span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fw-semibold fs-14 mb-0">Total Subscriptions</p>
                                        <p className="mb-0 text-muted fs-12 op-7">Invidunt magna voluptua.</p>
                                    </div>
                                </div>
                                <div>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='light' data-bs-toggle="dropdown" className="btn btn-icon btn-sm  no-caret"><i className="ti ti-dots"></i></Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item className="dropdown-item">Action</Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">Another Action</Dropdown.Item>
                                            <Dropdown.Item className="dropdown-item">Something Else Here</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-0">
                                <p className="mb-0 fs-20 fw-semibold">1,116</p>
                                <span className="text-muted ms-2"><i className="ti ti-trending-down align-middle text-danger me-1 d-inline-block"></i>3.2%</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="flex-fill">
                                    <ProgressBar variant='indigo' className="progress progress-xs" now={14} />
                                </div>
                                <div className="ms-3">
                                    <span className="fs-12 text-muted">67% Target</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={9}>
                    <Card className="custom-card">
                        <Card.Body className="card-body p-0">
                            <Row>
                                <div className="col-xl-3 border-end border-inline-end-dashed">
                                    <div className="d-flex flex-wrap align-items-top p-4">
                                        <div className="me-3 lh-1">
                                            <span className="avatar avatar-md avatar-rounded bg-primary shadow-sm">
                                                <i className="ti ti-package fs-18"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <h5 className="fw-semibold mb-1">45,280</h5>
                                            <p className="text-muted mb-0 fs-12">Total Products</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-success-transparent"><i className="ri-arrow-up-s-line align-middle me-1 d-inline-block"></i>1.31%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 border-end border-inline-end-dashed">
                                    <div className="d-flex flex-wrap align-items-top p-4">
                                        <div className="me-3 lh-1">
                                            <span className="avatar avatar-md avatar-rounded bg-secondary shadow-sm">
                                                <i className="ti ti-rocket fs-18"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <h5 className="fw-semibold mb-1">10,500</h5>
                                            <p className="text-muted mb-0 fs-12">Total Sales</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-danger-transparent"><i className="ri-arrow-down-s-line align-middle me-1"></i>1.14%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 border-end border-inline-end-dashed">
                                    <div className="d-flex flex-wrap align-items-top p-4">
                                        <div className="me-3 lh-1">
                                            <span className="avatar avatar-md avatar-rounded bg-success shadow-sm">
                                                <i className="ti ti-wallet fs-18"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <h5 className="fw-semibold mb-1">$69,270</h5>
                                            <p className="text-muted mb-0 fs-12">Income</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-success-transparent"><i className="ri-arrow-up-s-line align-middle me-1 d-inline-block"></i>2.58%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3">
                                    <div className="d-flex flex-wrap align-items-top p-4">
                                        <div className="me-3 lh-1">
                                            <span className="avatar avatar-md avatar-rounded bg-warning shadow-sm">
                                                <i className="ti ti-packge-import fs-18"></i>
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <h5 className="fw-semibold mb-1">12,088</h5>
                                            <p className="text-muted mb-0 fs-12">Total Orders</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-success-transparent"><i className="ri-arrow-up-s-line align-middle me-1 d-inline-block"></i>12.05%</span>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card card-bg-primary text-fixed-white">
                        <Card.Body className="p-0">
                            <div className="d-flex align-items-top p-4 flex-wrap">
                                <div className="me-3 lh-1">
                                    <span className="avatar avatar-md avatar-rounded bg-white text-primary shadow-sm">
                                        <i className="ti ti-coin fs-18"></i>
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <h5 className="fw-semibold mb-1 text-fixed-white">$21,520</h5>
                                    <p className="op-7 mb-0 fs-12">Expenses</p>
                                </div>
                                <div>
                                    <span className="badge bg-success"><i className="ri-arrow-up-s-line align-middle me-1 d-inline-block"></i>14.69%</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                {Salesdata.map((idx) => (
                    <Col xl={2} key={Math.random()}>
                        <Card className={`custom-card border-top-card border-top-${idx.color} rounded-0`}>
                            <Card.Body>
                                <div className="text-center">
                                    <span className={`avatar avatar-md bg-${idx.color} shadow-sm avatar-rounded mb-2`}>
                                        <i className={idx.icon}></i>
                                    </span>
                                    <p className="fs-14 fw-semibold mb-2">{idx.text1}</p>
                                    <div className="d-flex align-items-center justify-content-center flex-wrap">
                                        <h5 className="mb-0 fw-semibold">{idx.text2}</h5>
                                        <Badge bg={idx.bg} className="badge  rounded-pill ms-1">{idx.badge}</Badge>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <Card.Title>
                                Upcoming Events
                            </Card.Title>
                            <div>
                                <Button variant='' className="btn btn-sm btn-primary-light">View All</Button>
                            </div>
                        </div>
                        <Card.Body>
                            <Tab.Container defaultActiveKey="1">
                                <Nav className="nav-style-1 nav-pills mb-4 nav-justified" role="tablist">
                                    <Nav.Link eventKey="1" className="" role="tab" aria-current="page" href="#mon" tabIndex={-1}>
                                        <span className="d-block mb-1">09</span>
                                        <span className="d-block mb-0 op-7 fs-12">Mon</span>
                                    </Nav.Link>
                                    <Nav.Link eventKey="2" role="tab" href="#tue" tabIndex={-1}>
                                        <span className="d-block mb-1">10</span>
                                        <span className="d-block mb-0 op-7 fs-12">Tue</span>
                                    </Nav.Link>

                                    <Nav.Link eventKey="3" role="tab" href="#wed" >
                                        <span className="d-block mb-1">11</span>
                                        <span className="d-block mb-0 op-7 fs-12">Wed</span>
                                    </Nav.Link>
                                    <Nav.Link eventKey="4" role="tab" href="#thu">
                                        <span className="d-block mb-1">12</span>
                                        <span className="d-block mb-0 op-7 fs-12">Thu</span>
                                    </Nav.Link>
                                    <Nav.Link eventKey="5" role="tab" href="#fri">
                                        <span className="d-block mb-1">13</span>
                                        <span className="d-block mb-0 op-7 fs-12">Fri</span>
                                    </Nav.Link>
                                    <Nav.Link eventKey="6" role="tab" href="#sat">
                                        <span className="d-block mb-1">14</span>
                                        <span className="d-block mb-0 op-7 fs-12">Sat</span>
                                    </Nav.Link>
                                    <Nav.Link eventKey="7" role="tab" href="#sun">
                                        <span className="d-block mb-1">15</span>
                                        <span className="d-block mb-0 op-7 fs-12">Sun</span>
                                    </Nav.Link>
                                </Nav>
                                <Tab.Content className="pt-3 my-3">
                                    <Tab.Pane eventKey="1" className="border-0 p-0" id="mon" role="tabpanel">
                                        <ul className="list-unstyled mb-0 upcoming-events-list">
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Meeting with client</p>
                                                        <p className="mb-0 text-muted">Video Conference</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block "></i>9:00am - 10:00am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Lunch with team members</p>
                                                        <p className="mb-0 text-muted">Dolores Ait Labore Sit</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>12:00pm - 12:45am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">General board meeting</p>
                                                        <p className="mb-0 text-muted">Golden PArk</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4:00pm - 5:30pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Create New Registration Page</p>
                                                        <p className="mb-0 text-muted">2UA Project</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>5:00pm - 5:45pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="2" className="border-0 p-0" id="tue" role="tabpanel">
                                        <ul className="list-unstyled mb-0 upcoming-events-list">
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Meeting with client</p>
                                                        <p className="mb-0 text-muted">Video Conference</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>9:00am - 10:00am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Lunch with team members</p>
                                                        <p className="mb-0 text-muted">Dolores Ait Labore Sit</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>12:00pm - 12:45am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">General board meeting</p>
                                                        <p className="mb-0 text-muted">Golden PArk</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4:00pm - 5:30pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Create New Registration Page</p>
                                                        <p className="mb-0 text-muted">2UA Project</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>5:00pm - 5:45pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="3" className="border-0 p-0" id="wed" role="tabpanel">
                                        <ul className="list-unstyled mb-0 upcoming-events-list">
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Meeting with client</p>
                                                        <p className="mb-0 text-muted">Video Conference</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>9:00am - 10:00am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Lunch with team members</p>
                                                        <p className="mb-0 text-muted">Dolores Ait Labore Sit</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>12:00pm - 12:45am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">General board meeting</p>
                                                        <p className="mb-0 text-muted">Golden PArk</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4:00pm - 5:30pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Create New Registration Page</p>
                                                        <p className="mb-0 text-muted">2UA Project</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>5:00pm - 5:45pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="4" className="border-0 p-0" id="thu" role="tabpanel">
                                        <ul className="list-unstyled mb-0 upcoming-events-list">
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Meeting with client</p>
                                                        <p className="mb-0 text-muted">Video Conference</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>9:00am - 10:00am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Lunch with team members</p>
                                                        <p className="mb-0 text-muted">Dolores Ait Labore Sit</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>12:00pm - 12:45am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">General board meeting</p>
                                                        <p className="mb-0 text-muted">Golden PArk</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4:00pm - 5:30pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Create New Registration Page</p>
                                                        <p className="mb-0 text-muted">2UA Project</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>5:00pm - 5:45pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="5" className="border-0 p-0" id="fri" role="tabpanel">
                                        <ul className="list-unstyled mb-0 upcoming-events-list">
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Meeting with client</p>
                                                        <p className="mb-0 text-muted">Video Conference</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>9:00am - 10:00am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Lunch with team members</p>
                                                        <p className="mb-0 text-muted">Dolores Ait Labore Sit</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>12:00pm - 12:45am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">General board meeting</p>
                                                        <p className="mb-0 text-muted">Golden PArk</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4:00pm - 5:30pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Create New Registration Page</p>
                                                        <p className="mb-0 text-muted">2UA Project</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>5:00pm - 5:45pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="6" className="border-0 p-0" id="sat" role="tabpanel">
                                        <ul className="list-unstyled mb-0 upcoming-events-list">
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Meeting with client</p>
                                                        <p className="mb-0 text-muted">Video Conference</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>9:00am - 10:00am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Lunch with team members</p>
                                                        <p className="mb-0 text-muted">Dolores Ait Labore Sit</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>12:00pm - 12:45am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">General board meeting</p>
                                                        <p className="mb-0 text-muted">Golden PArk</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4:00pm - 5:30pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Create New Registration Page</p>
                                                        <p className="mb-0 text-muted">2UA Project</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>5:00pm - 5:45pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="7" className="border-0 p-0" id="sun" role="tabpanel">
                                        <ul className="list-unstyled mb-0 upcoming-events-list">
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Meeting with client</p>
                                                        <p className="mb-0 text-muted">Video Conference</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>9:00am - 10:00am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Lunch with team members</p>
                                                        <p className="mb-0 text-muted">Dolores Ait Labore Sit</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>12:00pm - 12:45am</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">General board meeting</p>
                                                        <p className="mb-0 text-muted">Golden PArk</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4:00pm - 5:30pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex align-items-top justify-conent-between">
                                                    <div className="flex-fill">
                                                        <p className="mb-0 fs-14">Create New Registration Page</p>
                                                        <p className="mb-0 text-muted">2UA Project</p>
                                                    </div>
                                                    <div>
                                                        <span className="text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>5:00pm - 5:45pm</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Timeline
                            </Card.Title>
                            <div>
                                <Button variant='' className="btn btn-sm btn-primary-light btn-wave">View All</Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled timeline-widget mb-0 my-3">
                                <li className="timeline-widget-list">
                                    <div className="d-flex align-items-top">
                                        <div className="me-5 text-center">
                                            <span className="d-block fs-20 fw-semibold">02</span>
                                            <span className="d-block fs-12 text-muted">Mon</span>
                                        </div>
                                        <div className="d-flex flex-wrap flex-fill align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-1 text-truncate timeline-widget-content text-wrap">You have an announcement - Ipsum Est Diam Eirmod</p>
                                                <p className="mb-0 fs-12 lh-1 text-muted">10:00AM<span className="badge bg-primary-transparent ms-2">Announcement</span></p>
                                            </div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='' className="p-2 fs-16 text-muted no-caret" data-bs-toggle="dropdown">
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
                                            <span className="d-block fs-20 fw-semibold">15</span>
                                            <span className="d-block fs-12 text-muted">Sun</span>
                                        </div>
                                        <div className="d-flex flex-wrap flex-fill align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-1 text-truncate timeline-widget-content text-wrap">National holiday - Vero Jayanti</p>
                                                <p className="mb-0 fs-12 lh-1 text-muted"><span className="badge bg-warning-transparent">Holiday</span></p>
                                            </div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="" className="p-2 fs-16 text-muted no-caret" data-bs-toggle="dropdown">
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
                                            <span className="d-block fs-20 fw-semibold">23</span>
                                            <span className="d-block fs-12 text-muted">Mon</span>
                                        </div>
                                        <div className="d-flex flex-wrap flex-fill align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-1 text-truncate timeline-widget-content text-wrap">John pup birthday - Team Member</p>
                                                <p className="mb-4 fs-12 lh-1 text-muted">09:00AM<span className="badge bg-success-transparent ms-2">Birthday</span></p>
                                                <p className="mb-1 text-truncate timeline-widget-content text-wrap">Amet sed no dolor kasd - Et Dolores Tempor Erat</p>
                                                <p className="mb-0 fs-12 lh-1 text-muted">04:00PM<span className="badge bg-primary-transparent ms-2">Announcement</span></p>
                                            </div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='' className="p-2 fs-16 text-muted no-caret" data-bs-toggle="dropdown">
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
                                            <span className="d-block fs-20 fw-semibold">31</span>
                                            <span className="d-block fs-12 text-muted">Tue</span>
                                        </div>
                                        <div className="d-flex flex-wrap flex-fill align-items-center justify-content-between">
                                            <div>
                                                <p className="mb-1 text-truncate timeline-widget-content text-wrap">National Holiday - Dolore Ipsum</p>
                                                <p className="mb-0 fs-12 lh-1 text-muted"><span className="badge bg-warning-transparent">Holiday</span></p>
                                            </div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='' className="p-2 fs-16 text-muted no-caret" data-bs-toggle="dropdown">
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
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Traffic Sources
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table bordered hover className="table  text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>Browser</th>
                                            <th>Sessions</th>
                                            <th>Views</th>
                                            <th>Traffic</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Trafficsources.map((idx) => (
                                            <tr key={Math.random()}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-rounded avatar-sm p-2 bg-primary me-2">
                                                            <i className={idx.icon}></i>
                                                        </span>
                                                        <div className="fw-semibold">{idx.text1}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span><i className="ri-arrow-up-s-fill me-1 text-success align-middle fs-18"></i>{idx.text2}</span>
                                                </td>
                                                <td>
                                                    <span>{idx.text3}</span>
                                                </td>
                                                <td>
                                                    <ProgressBar variant='primary' className="progress progress-xs" now={idx.now} />
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Users By Country
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex flex-wrap justify-content-between mb-5">
                                <div className="me-5 d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-rounded bg-primary-transparent text-primary"><i className="ri-user-3-line fs-16"></i></span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fs-18 mb-0 text-primary fw-semibold">25,350</p>
                                        <span className="text-muted fs-12">This month</span>
                                    </div>
                                </div>
                                <div className="me-3 d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-rounded bg-light text-default"><i className="ri-user-3-line fs-16"></i></span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fs-18 mb-0 fw-semibold">19,200</p>
                                        <span className="text-muted fs-12">Last month</span>
                                    </div>
                                </div>
                                <div className="me-3 d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-rounded bg-success-transparent"><i className="ri-user-3-line fs-16"></i></span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fs-18 mb-0 text-success fw-semibold">1,24,890</p>
                                        <span className="text-muted fs-12">This Year</span>
                                    </div>
                                </div>
                                <div className="me-3 d-flex align-items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-rounded bg-secondary-transparent"><i className="ri-user-3-line fs-16"></i></span>
                                    </div>
                                    <div className="flex-fill">
                                        <p className="fs-18 mb-0 text-secondary fw-semibold">97,799</p>
                                        <span className="text-muted fs-12">Last Year</span>
                                    </div>
                                </div>
                            </div>
                            <Row>
                                <Col xl={5}>
                                    <div className="h-100 my-auto">
                                        <ListGroup>
                                            <ListGroup.Item>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div><i className="ri-checkbox-blank-circle-fill text-primary fs-8 me-1 align-middle d-inline-block"></i>Brazil</div>
                                                    <div>1,290</div>
                                                    <div className="text-success"><i className="ri-arrow-up-s-line align-middle me-1 d-inline-block"></i>2.90%</div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div><i className="ri-checkbox-blank-circle-fill text-secondary fs-8 me-1 align-middle d-inline-block"></i>Greenland</div>
                                                    <div>2,596</div>
                                                    <div className="text-danger"><i className="ri-arrow-down-s-line align-middle me-1 d-inline-block"></i>1.1%</div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div><i className="ri-checkbox-blank-circle-fill text-success fs-8 me-1 align-middle d-inline-block"></i>Russia</div>
                                                    <div>3,710</div>
                                                    <div className="text-success"><i className="ri-arrow-up-s-line align-middle me-1 d-inline-block"></i>0.8%</div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div><i className="ri-checkbox-blank-circle-fill text-warning fs-8 me-1 align-middle d-inline-block"></i>Palestine</div>
                                                    <div>1,116</div>
                                                    <div className="text-danger"><i className="ri-arrow-up-s-line align-middle me-1 d-inline-block"></i>10.06%</div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div><i className="ri-checkbox-blank-circle-fill text-danger fs-8 me-1 align-middle d-inline-block"></i>Canada</div>
                                                    <div>12,150</div>
                                                    <div className="text-success"><i className="ri-arrow-up-s-line align-middle me-1 d-inline-block"></i>9.05%</div>
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </div>
                                </Col>
                                <Col xl={7}>
                                    <div id="users-map">
                                        <WorldMap />
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Recent Tasks
                            </Card.Title>
                            <Dropdown>
                                <Link to="#" className="p-2 fs-12 text-muted" data-bs-toggle="dropdown">
                                    View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
                                </Link>
                                <Dropdown.Menu role="menu">
                                    <Dropdown.Item href="#">Download</Dropdown.Item>
                                    <Dropdown.Item href="#">Import</Dropdown.Item>
                                    <Dropdown.Item href="#">Export</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-bordered">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Title</th>
                                            <th>Assigned To</th>
                                            <th>Progress</th>
                                            <th>Status</th>
                                            <th>Due Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>01</td>
                                            <td>Server Side Validation</td>
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
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face10} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-xs bg-primary avatar-rounded text-fixed-white" to="#">
                                                        +2
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar striped className="progress progress-xs" now={60} />

                                            </td>
                                            <td>
                                                <span className="badge bg-primary-transparent">In Progress</span>
                                            </td>
                                            <td>
                                                17-04-2023
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>02</td>
                                            <td>Multipurpose Dashboard Template</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face6} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face8} alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar striped className="progress progress-xs" now={60} />
                                            </td>
                                            <td>
                                                <span className="badge bg-warning-transparent">Pending</span>
                                            </td>
                                            <td>
                                                14-05-2023
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>03</td>
                                            <td>Documentation Project</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face4} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face15} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face11} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-xs bg-primary avatar-rounded text-fixed-white" to="#">
                                                        +1
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar striped className="progress progress-xs" now={100} />
                                            </td>
                                            <td>
                                                <span className="badge bg-success-transparent">Completed</span>
                                            </td>
                                            <td>
                                                20-04-2023
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>04</td>
                                            <td>HR Management Template Design</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face5} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face12} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face13} alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar striped className="progress progress-xs" now={50} />
                                            </td>
                                            <td>
                                                <span className="badge bg-primary-transparent">In Progress</span>
                                            </td>
                                            <td>
                                                29-05-2023
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>05</td>
                                            <td>Developing Backend</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face1} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face8} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face9} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-xs bg-primary avatar-rounded text-fixed-white" to="#">
                                                        +3
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar striped className="progress progress-xs" now={50} />
                                            </td>
                                            <td>
                                                <span className="badge bg-primary-transparent">In Progress</span>
                                            </td>
                                            <td>
                                                25-05-2023
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>06</td>
                                            <td>	Design New Dashboard Template</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face4} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face12} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src={face16} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-xs bg-primary avatar-rounded text-fixed-white" to="#">
                                                        +3
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar striped className="progress progress-xs" now={100} />
                                            </td>
                                            <td>
                                                <span className="badge bg-success-transparent">Completed</span>
                                            </td>
                                            <td>
                                                04-05-2023
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Recent Applicants</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="views">
                                <Applicants />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Sessions By Device</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="sessionsByDevice">
                                <Sessions />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Target Report</Card.Title>
                            <Dropdown className="ms-auto">
                                <Dropdown.Toggle variant='primary-light' className="btn btn-sm  dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    Details
                                </Dropdown.Toggle>
                                <Dropdown.Menu >
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                </Dropdown.Menu>

                            </Dropdown>
                        </Card.Header>
                        <Card.Body className="card-body pb-3">
                            <div className="mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="float-end text-primary" fill="currentColor" width="36px" height="36px" viewBox="0 0 24 24"><path fill="currentColor" d="M11,9h4a1,1,0,0,0,0-2H13V6a1,1,0,0,0-2,0V7a3,3,0,0,0,0,6h2a1,1,0,0,1,0,2H9a1,1,0,0,0,0,2h2v1a1,1,0,0,0,2,0V17a3,3,0,0,0,0-6H11a1,1,0,0,1,0-2Zm1-8A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" /></svg>
                                <p className="text-primary fw-500 mb-2">Revenue by week</p>
                                <h4 className="mb-2 fw-semibold">$54,125.03</h4>
                                <span className="text-danger me-1 fs-14"> - 1.3%<i className="ri-arrow-down-s-fill align-middle ms-1"></i>  </span>
                                <span className="text-muted fs-12">33% of target reached</span>
                            </div>
                            <div id="report">
                                <Targetreport />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Widgets;
