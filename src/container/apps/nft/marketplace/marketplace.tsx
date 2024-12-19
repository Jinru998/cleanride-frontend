import { FC, Fragment } from 'react';
import { Button, Card, Col, Dropdown, Nav, Pagination, Row, Tab } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import face1 from "../../../../assets/images/faces/1.jpg";
import face3 from "../../../../assets/images/faces/3.jpg";
import face4 from "../../../../assets/images/faces/4.jpg";
import face8 from "../../../../assets/images/faces/8.jpg";
import face9 from "../../../../assets/images/faces/9.jpg";
import image21 from '../../../../assets/images/nft-images/21.png';
import image25 from '../../../../assets/images/nft-images/25.png';
import image26 from '../../../../assets/images/nft-images/26.png';
import crypto from "../../../../assets/images/crypto-currencies/square-color/Ethereum.svg";
import { Tabpane1data } from './marketplacedata';
import image18 from '../../../../assets/images/nft-images/18.png';
import image20 from '../../../../assets/images/nft-images/20.png';
import { Link } from 'react-router-dom';

interface MarketplaceProps { }

const Marketplace: FC<MarketplaceProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Marketplace" heading="NFT" active="Marketplace" />
            <Tab.Container defaultActiveKey="one">
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                    <div>
                                        <Nav className="nav-tabs justify-content-end nav-tabs-header mb-0" role="tablist" defaultActiveKey="one">
                                            <Nav.Item >
                                                <Nav.Link eventKey="one" href="#nft-all">All</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item >
                                                <Nav.Link eventKey="two" href="#nft-art" tabIndex={-1}>Art</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item >
                                                <Nav.Link eventKey="three" href="#nft-gaming" tabIndex={-1}>Gaming</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item >
                                                <Nav.Link eventKey="four" href="#nft-domain" tabIndex={-1}>Domain</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item >
                                                <Nav.Link eventKey="five" href="#nft-music" tabIndex={-1}>Music</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item >
                                                <Nav.Link eventKey="six" href="#nft-realestate" tabIndex={-1}>Real Estate</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item >
                                                <Nav.Link eventKey="seven" href="#nft-sports" tabIndex={-1}>Sports</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item >
                                                <Nav.Link eventKey="eight" href="#nft-fashion" tabIndex={-1}>Fashion</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item >
                                                <Nav.Link eventKey="nine" href="#nft-avatars" tabIndex={-1}>Avatars</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item >
                                                <Nav.Link eventKey="ten" href="#nft-memes" tabIndex={-1}>Memes</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div className="btn-list d-flex">
                                        <Button variant='' className="btn btn-sm btn-secondary btn-wave">Filters</Button>
                                        <Dropdown className='m-0'>
                                            <Dropdown.Toggle variant='primary' className="btn btn-sm btn-wave btn- btn-wave waves-effect waves-light no-caret">
                                                Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu role="menu">
                                                <Dropdown.Item>New Collection</Dropdown.Item>
                                                <Dropdown.Item>High - Low</Dropdown.Item>
                                                <Dropdown.Item>Low - High</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="one" className="p-0 border-0" id="nft-all" role="tabpanel">
                                <Row>
                                    {Tabpane1data.map((idx) => (
                                        <Col xxl={2} xl={3} lg={4} md={4} sm={6} className="col-12" key={Math.random()}>
                                            <Card className="custom-card">
                                                <img src={idx.src1}
                                                    className="card-img-top" alt="..." />
                                                <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                    <div className="flex-fill">
                                                        <Button variant='success' className="btn btn-sm btn-icon  rounded-pill btn-wave waves-effect waves-light">
                                                            <i className="ri-heart-fill"></i>
                                                        </Button>
                                                    </div>
                                                    <div>
                                                        <span className="badge nft-like-badge text-fixed-white">
                                                            <i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>{idx.badge}</span>
                                                    </div>
                                                </div>
                                                <Card.Body>
                                                    <div className="d-flex align-items-center mb-3">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-rounded avatar-md">
                                                                <img src={idx.src2} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-semibold">{idx.text1}</p>
                                                            <p className="fs-12 text-muted mb-0">{idx.text2}</p>
                                                        </div>
                                                    </div>
                                                    <p className="mb-0 text-fixed-white nft-auction-time">
                                                        {idx.time}
                                                    </p>
                                                    <p className="fs-15 fw-semibold mb-2"><Link to="#">{idx.heading}</Link></p>
                                                    <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                        <div className="fw-semibold">
                                                            {idx.text4}
                                                        </div>
                                                        <div className="d-flex flex-wrap align-items-center lh-1">
                                                            <span className="avatar avatar-xs me-1">
                                                                <img src={crypto} alt="" />
                                                            </span>{idx.text4}
                                                        </div>
                                                    </div>
                                                    <div className="d-grid">
                                                        <Button variant='' className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</Button>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                    <nav aria-label="Page navigation">
                                        <Pagination className="pagination justify-content-end mb-4">
                                            <Pagination.Item disabled>Previous</Pagination.Item>
                                            <Pagination.Item href="#">1</Pagination.Item>
                                            <Pagination.Item href="#">2</Pagination.Item>
                                            <Pagination.Item href="#">3</Pagination.Item>
                                            <Pagination.Item href="#">Next</Pagination.Item>
                                        </Pagination>
                                    </nav>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="two" className="p-0" id="nft-art" role="tabpanel">
                                <Row>
                                    <Col xxl={2} xl={3} lg={4} md={4} sm={6} className="col-12">
                                        <Card className="custom-card">
                                            <img src={image21} className="card-img-top" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant='success' className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>0.19k</span>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-rounded avatar-md">
                                                            <img src={face4} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">CyberCanvas</p>
                                                        <p className="fs-12 text-muted mb-0">@cybercanvas</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-fixed-white nft-auction-time">
                                                    04hrs : 24m : 38s
                                                </p>
                                                <p className="fs-15 fw-semibold mb-2"><Link to="#">Surreal Synthesis</Link></p>
                                                <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                    <div className="fw-semibold">
                                                        Highest Bid -
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-1">
                                                            <img src={crypto} alt="" />
                                                        </span>0.11ETH
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <Button variant='' className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={2} xl={3} lg={4} md={4} sm={6} className="col-12">
                                        <Card className="custom-card">
                                            <img src={image25} className="card-img-top" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant='success' className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>1.75k</span>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-rounded avatar-md">
                                                            <img src={face8} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">PixelMaestro</p>
                                                        <p className="fs-12 text-muted mb-0">@pixelmaestro</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-fixed-white nft-auction-time">
                                                    04hrs : 24m : 38s
                                                </p>
                                                <p className="fs-15 fw-semibold mb-2"><Link to="#">Pixel Prism</Link></p>
                                                <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                    <div className="fw-semibold">
                                                        Highest Bid -
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-1">
                                                            <img src={crypto} alt="" />
                                                        </span>0.23ETH
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <Button variant='' className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={2} xl={3} lg={4} md={4} sm={6} className="col-12">
                                        <Card className="custom-card">
                                            <img src={image26} className="card-img-top" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant='success' className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>0.83k</span>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-rounded avatar-md">
                                                            <img src={face9} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">BitBard</p>
                                                        <p className="fs-12 text-muted mb-0">@bitbard</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-fixed-white nft-auction-time">
                                                    04hrs : 24m : 38s
                                                </p>
                                                <p className="fs-15 fw-semibold mb-2"><Link to="#">Meta-Morphosis</Link></p>
                                                <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                    <div className="fw-semibold">
                                                        Highest Bid -
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-1">
                                                            <img src={crypto} alt="" />
                                                        </span>0.38ETH
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <Button variant='' className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="three" className="p-0" id="nft-gaming" role="tabpanel">
                                <Row>
                                    <Col xxl={2} xl={3} lg={4} md={4} sm={6} className="col-12">
                                        <Card className="custom-card">
                                            <img src={image18} className="card-img-top" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant='success' className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>0.47k</span>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-rounded avatar-md">
                                                            <img src={face1} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">NFTNinja</p>
                                                        <p className="fs-12 text-muted mb-0">@nftninja</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-fixed-white nft-auction-time">
                                                    04hrs : 24m : 38s
                                                </p>
                                                <p className="fs-15 fw-semibold mb-2"><Link to="#">Digital Dreamscape</Link></p>
                                                <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                    <div className="fw-semibold">
                                                        Highest Bid -
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-1">
                                                            <img src={crypto} alt="" />
                                                        </span>0.24ETH
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <Button variant='' className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={2} xl={3} lg={4} md={4} sm={6} className="col-12">
                                        <Card className="custom-card">
                                            <img src={image20} className="card-img-top" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant='success' className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>2.05k</span>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-rounded avatar-md">
                                                            <img src={face3} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">BitMaster</p>
                                                        <p className="fs-12 text-muted mb-0">@bit_master</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-fixed-white nft-auction-time">
                                                    04hrs : 24m : 38s
                                                </p>
                                                <p className="fs-15 fw-semibold mb-2"><Link to="#">Chromatic Chaos</Link></p>
                                                <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                    <div className="fw-semibold">
                                                        Highest Bid -
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-1">
                                                            <img src={crypto} alt="" />
                                                        </span>0.19ETH
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <Button variant='' className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="four" className="p-0" id="nft-domain" role="tabpanel">
                                <Row>
                                    <Col xxl={2} xl={3} lg={4} md={4} sm={6} className="col-12">
                                        <Card className="custom-card">
                                            <img src={image18} className="card-img-top" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant='success' className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>0.47k</span>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-rounded avatar-md">
                                                            <img src={face1} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">NFTNinja</p>
                                                        <p className="fs-12 text-muted mb-0">@nftninja</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-fixed-white nft-auction-time">
                                                    04hrs : 24m : 38s
                                                </p>
                                                <p className="fs-15 fw-semibold mb-2"><Link to="#">Digital Dreamscape</Link></p>
                                                <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                    <div className="fw-semibold">
                                                        Highest Bid -
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-1">
                                                            <img src={crypto} alt="" />
                                                        </span>0.24ETH
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <Button variant='' className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="five" className="p-0" id="nft-music" role="tabpanel">
                                <Row>
                                    <Col xxl={2} xl={3} lg={4} md={4} sm={6} className="col-12">
                                        <Card className="custom-card">
                                            <img src={image18} className="card-img-top" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant='success' className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>0.47k</span>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-rounded avatar-md">
                                                            <img src={face1} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">NFTNinja</p>
                                                        <p className="fs-12 text-muted mb-0">@nftninja</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-fixed-white nft-auction-time">
                                                    04hrs : 24m : 38s
                                                </p>
                                                <p className="fs-15 fw-semibold mb-2"><Link to="#">Digital Dreamscape</Link></p>
                                                <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                    <div className="fw-semibold">
                                                        Highest Bid -
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-1">
                                                            <img src={crypto} alt="" />
                                                        </span>0.24ETH
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <Button variant='' className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="six" className="p-0" id="nft-realestate" role="tabpanel">
                                <Row>
                                    <Col xxl={2} xl={3} lg={4} md={4} sm={6} className="col-12">
                                        <Card className="custom-card">
                                            <img src={image18} className="card-img-top" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant='success' className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>0.47k</span>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-rounded avatar-md">
                                                            <img src={face1} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">NFTNinja</p>
                                                        <p className="fs-12 text-muted mb-0">@nftninja</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-fixed-white nft-auction-time">
                                                    04hrs : 24m : 38s
                                                </p>
                                                <p className="fs-15 fw-semibold mb-2"><Link to="#">Digital Dreamscape</Link></p>
                                                <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                    <div className="fw-semibold">
                                                        Highest Bid -
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-1">
                                                            <img src={crypto} alt="" />
                                                        </span>0.24ETH
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <Button variant='' className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="seven" className="p-0" id="nft-sports" role="tabpanel">
                                <Row>
                                    <Col xxl={2} xl={3} lg={4} md={4} sm={6} className="col-12">
                                        <Card className="custom-card">
                                            <img src={image18} className="card-img-top" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant='success' className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>0.47k</span>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-rounded avatar-md">
                                                            <img src={face1} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">NFTNinja</p>
                                                        <p className="fs-12 text-muted mb-0">@nftninja</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-fixed-white nft-auction-time">
                                                    04hrs : 24m : 38s
                                                </p>
                                                <p className="fs-15 fw-semibold mb-2"><Link to="#">Digital Dreamscape</Link></p>
                                                <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                    <div className="fw-semibold">
                                                        Highest Bid -
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-1">
                                                            <img src={crypto} alt="" />
                                                        </span>0.24ETH
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <Button variant='' className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="eight" className="p-0" id="nft-fashion" role="tabpanel">
                                <Row>
                                    <Col xxl={2} xl={3} lg={4} md={4} sm={6} className="col-12">
                                        <Card className="custom-card">
                                            <img src={image18} className="card-img-top" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant='success' className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>0.47k</span>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-rounded avatar-md">
                                                            <img src={face1} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">NFTNinja</p>
                                                        <p className="fs-12 text-muted mb-0">@nftninja</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-fixed-white nft-auction-time">
                                                    04hrs : 24m : 38s
                                                </p>
                                                <p className="fs-15 fw-semibold mb-2"><Link to="#">Digital Dreamscape</Link></p>
                                                <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                    <div className="fw-semibold">
                                                        Highest Bid -
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-1">
                                                            <img src={crypto} alt="" />
                                                        </span>0.24ETH
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <Button variant='' className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="nine" className="p-0" id="nft-avatars" role="tabpanel">
                                <Row>
                                    <Col xxl={2} xl={3} lg={4} md={4} sm={6} className="col-12">
                                        <Card className="custom-card">
                                            <img src={image18} className="card-img-top" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant='success' className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>0.47k</span>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-rounded avatar-md">
                                                            <img src={face1} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">NFTNinja</p>
                                                        <p className="fs-12 text-muted mb-0">@nftninja</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-fixed-white nft-auction-time">
                                                    04hrs : 24m : 38s
                                                </p>
                                                <p className="fs-15 fw-semibold mb-2"><Link to="#">Digital Dreamscape</Link></p>
                                                <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                    <div className="fw-semibold">
                                                        Highest Bid -
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-1">
                                                            <img src={crypto} alt="" />
                                                        </span>0.24ETH
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <Button variant='' className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="ten" className="p-0" id="nft-memes" role="tabpanel">
                                <Row>
                                    <Col xxl={2} xl={3} lg={4} md={4} sm={6} className="col-12">
                                        <Card className="custom-card">
                                            <img src={image18} className="card-img-top" alt="..." />
                                            <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                                <div className="flex-fill">
                                                    <Button variant='success' className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                                        <i className="ri-heart-fill"></i>
                                                    </Button>
                                                </div>
                                                <div>
                                                    <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>0.47k</span>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex align-items-center mb-3">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-rounded avatar-md">
                                                            <img src={face1} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">NFTNinja</p>
                                                        <p className="fs-12 text-muted mb-0">@nftninja</p>
                                                    </div>
                                                </div>
                                                <p className="mb-0 text-fixed-white nft-auction-time">
                                                    04hrs : 24m : 38s
                                                </p>
                                                <p className="fs-15 fw-semibold mb-2"><Link to="#">Digital Dreamscape</Link></p>
                                                <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                                    <div className="fw-semibold">
                                                        Highest Bid -
                                                    </div>
                                                    <div className="d-flex flex-wrap align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-1">
                                                            <img src={crypto} alt="" />
                                                        </span>0.24ETH
                                                    </div>
                                                </div>
                                                <div className="d-grid">
                                                    <Button variant='' className="btn btn-primary-light btn-wave waves-effect waves-light">Place Bid</Button>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>

                </Row>
            </Tab.Container>
        </Fragment>
    );
};

export default Marketplace;
