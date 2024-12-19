import { FC, Fragment } from 'react';
import { Button, Card, Col, Dropdown, ListGroup, Pagination, Row } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import image34 from "../../../../assets/images/nft-images/34.png";
import image31 from "../../../../assets/images/nft-images/31.png";
import image25 from "../../../../assets/images/nft-images/25.png";
import image21 from "../../../../assets/images/nft-images/21.png";
import image26 from "../../../../assets/images/nft-images/26.png";
import { Loopingdata, Loopingdata1 } from './auctiondata';
interface LiveauctionProps { }

const Liveauction: FC<LiveauctionProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Live Auction" heading="NFT" active="Live Auction" />
            <Row>
                <Col xxl={9} xl={9} lg={8} >
                    <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-4">
                        <div className="nft-tag nft-tag-primary active">
                            <Link to="#" className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-world fs-20"></i></span>
                            <span className="nft-tag-text">All</span>
                        </div>
                        <div className="nft-tag nft-tag-secondary">
                            <Link to="#" className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-flame fs-20"></i></span>
                            <span className="nft-tag-text">New Trends</span>
                        </div>
                        <div className="nft-tag nft-tag-info">
                            <Link to="#" className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-palette fs-20"></i></span>
                            <span className="nft-tag-text">Art Work</span>
                        </div>
                        <div className="nft-tag nft-tag-success">
                            <Link to="#" className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-device-gamepad-2 fs-20"></i></span>
                            <span className="nft-tag-text">Games</span>
                        </div>
                        <div className="nft-tag nft-tag-danger">
                            <Link to="#" className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-tie fs-20"></i></span>
                            <span className="nft-tag-text">Fashion</span>
                        </div>
                        <div className="nft-tag nft-tag-warning">
                            <Link to="#" className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-music fs-20"></i></span>
                            <span className="nft-tag-text">Music</span>
                        </div>
                        <div className="nft-tag nft-tag-dark">
                            <Link to="#" className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-gift fs-20"></i></span>
                            <span className="nft-tag-text">Others</span>
                        </div>
                    </div>
                    <Row>
                        <h6 className="fw-semibold mb-3">Live Auction:</h6>
                        {Loopingdata.map((idx) => (
                            <Col xxl={3} xl={4} lg={6} md={6} sm={6} className="col-12" key={Math.random()}>
                                <Card className="custom-card">
                                    <Card.Body className="card-body p-3">
                                        <div className="mb-3 overflow-hidden position-relative">
                                            <Link to="#" className="stretched-link"></Link>
                                            <img src={idx.src1} alt="img" className="nft-img img-fluid" />
                                            <Link to="#" className="nft-btn" data-bs-toggle="tooltip" aria-label="Like"><i className="ti ti-heart"></i></Link>
                                            <span className="nft-timer-container">
                                                <i className="ti ti-bolt fs-14"></i>
                                                <span className="nft-timer ms-1 fs-11">04 Days 03 : 44 : 04</span>
                                            </span>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-start mb-3 flex-wrap">
                                            <div className="d-inline-flex align-items-start position-relative">
                                                <Link to={`${import.meta.env.BASE_URL}pages/profile/`} className="stretched-link"></Link>
                                                <div className="me-2">
                                                    <span className="avatar avatar-rounded">
                                                        <img src={idx.src2} alt="img" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <span className="mb-0 d-block fs-14 fw-semibold">{idx.name}</span>
                                                    <span className="fs-13 text-muted">{idx.text1}<i className="bi bi-patch-check-fill text-success ms-1 fs-15"></i></span>
                                                </div>
                                            </div>
                                            <span className="fs-13 text-muted">{idx.text2}</span>
                                        </div>
                                        <div className="fs-15 fw-semibold mb-2"><Link to="#">{idx.heading}</Link></div>
                                        <div className="d-flex align-items-end flex-wrap gap-2">
                                            <div className="flex-fill">
                                                <p className="fs-14 mb-1 text-muted">Highest Bid</p>
                                                <div className="fs-16 mb-0 d-flex align-items-center fw-semibold">
                                                    <span className="avatar avatar-xs me-1"><img src={image34} alt="" /></span>
                                                    {idx.text3}
                                                </div>
                                            </div>
                                            <Link to="#" className="btn btn-primary-light btn-wave">Place Bid</Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                        <nav aria-label="Page navigation">
                            <Pagination className="pagination justify-content-end mb-4">
                                <Pagination.Item disabled href="#">Previous
                                </Pagination.Item>
                                <Pagination.Item href="#">1</Pagination.Item>
                                <Pagination.Item href="#">2</Pagination.Item>
                                <Pagination.Item href="#">3</Pagination.Item>
                                <Pagination.Item href="#">Next</Pagination.Item>
                            </Pagination>
                        </nav>
                    </Row>
                </Col>
                <Col xxl={3} xl={3} lg={4}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card overflow-hidden">
                                <div className="card-header justify-content-between">
                                    <Card.Title>
                                        Featured Creators
                                    </Card.Title>
                                    <div>
                                        <Button variant='primary-light' className="btn btn-primary-light btn-sm btn-wave">View All</Button>
                                    </div>
                                </div>
                                <div className="card-body p-0">
                                    <ListGroup variant="flush" className="list-group-flush">
                                        {Loopingdata1.map((idx) => (
                                            <ListGroup.Item key={Math.random()}>
                                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                    <div className="d-flex align-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-md avatar-rounded me-2">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="align-items-center">
                                                            <p className="mb-0 fw-semibold">{idx.text1}<i className="bi bi-patch-check-fill text-success ms-2"></i></p>
                                                            <span className="fs-12 text-muted">{idx.text2}</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <span className="d-block fw-semibold text-success">{idx.text3}</span>
                                                        <span className="d-block text-muted fs-11">{idx.text4}</span>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup>
                                </div>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card overflow-hidden">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Recent Activity
                                    </Card.Title>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='' className="p-2 fs-12 text-muted no-caret">
                                            Today<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu role="menu">
                                            <Dropdown.Item href="#">Today</Dropdown.Item >
                                            <Dropdown.Item href="#">This Week</Dropdown.Item >
                                            <Dropdown.Item href="#">Last Week</Dropdown.Item >
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <ListGroup variant="flush" className=" list-group-flush">
                                        <ListGroup.Item>
                                            <div className="d-flex gap-3 align-items-center flex-wrap">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-xl">
                                                        <img src={image31} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="mb-1"><Link to="#" className="fw-semibold">DreamSpace</Link><span className="fs-12 text-muted ms-2">24 mins ago</span></div>
                                                    <div className="fs-13">Purchsed from you by <Link className="text-decoration-underline" to="#">Mitchell</Link> for <span className="text-success fw-semibold fs-12">0.57ETH</span>.</div>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex gap-3 align-items-center flex-wrap">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-xl">
                                                        <img src={image25} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="mb-1"><span className="fw-semibold">DreamSpace</span><span className="fs-12 text-muted ms-2">16 mins ago</span></div>
                                                    <div className="fs-13">You started following mark zensberg.</div>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex gap-3 align-items-center flex-wrap">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-xl">
                                                        <img src={image21} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="mb-1"><span className="fw-semibold">Neo Nebulae</span><span className="fs-12 text-muted ms-2">5 mins ago</span></div>
                                                    <div className="fs-13">You showed interest in purchasing <Link to="#" className="fs-12 text-warning fw-semibold">NeoNebulae</Link>.</div>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
                                        <ListGroup.Item>
                                            <div className="d-flex gap-3 align-items-center flex-wrap">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-xl">
                                                        <img src={image26} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="mb-1"><span className="fw-semibold">Neo Nebulae</span><span className="fs-12 text-muted ms-2">16 mins ago</span></div>
                                                    <div className="fs-13">Purchased from <Link to="#" className="text-decoration-underline">CyberCanvas</Link> for <span className="fw-semibold fs-12 text-pink">1.345ETH</span>.</div>
                                                </div>
                                            </div>
                                        </ListGroup.Item>
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

export default Liveauction;
