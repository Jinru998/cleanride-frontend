import  { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Dropdown, Form, ListGroup, Pagination, ProgressBar, Row, Table } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import nftimage1 from "../../../assets/images/nft-images/1.png";
import nftimage6 from "../../../assets/images/nft-images/6.png";
import nftimage7 from "../../../assets/images/nft-images/7.png";
import nftimage8 from "../../../assets/images/nft-images/8.png";
import nftimage9 from "../../../assets/images/nft-images/9.png";
import nftimage10 from "../../../assets/images/nft-images/10.png";
import nftimage11 from "../../../assets/images/nft-images/11.png";
import nftimage12 from "../../../assets/images/nft-images/12.png";
import nftimage13 from "../../../assets/images/nft-images/13.png";
import nftimage14 from "../../../assets/images/nft-images/14.png";
import nftimage15 from "../../../assets/images/nft-images/15.png";
import nftimage16 from "../../../assets/images/nft-images/16.png";
import nftimage17 from "../../../assets/images/nft-images/17.png";
import face3 from "../../../assets/images/faces/3.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import face13 from "../../../assets/images/faces/13.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face10 from "../../../assets/images/faces/10.jpg";
import face12 from "../../../assets/images/faces/12.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import { NFTStatistics, TopCollectors, Totalbalance, TrendingNFTs, TrendingNFTs1, Trendingauctions } from './nftdata';
import ethereum from "../../../assets/images/crypto-currencies/regular/Ethereum.svg";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

interface NftProps { }

const Nft: FC<NftProps> = () => {
    // for User search function
    const [Data, setData] = useState(TrendingNFTs);

    const userdata: any = [];

    const myfunction = (idx: any) => {
        let Data;
        for (Data of TrendingNFTs) {
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
            <Pageheader title="NFT" heading="Dashboards" active="NFT" />
            <Row>
                <Col xxl={6} xl={12} lg={12}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Body>
                            <div className="row gap-3 gap-sm-0">
                                <div className="col-sm-8 col-12">
                                    <div className="">
                                        <h4 className="fw-semibold mb-2">Discover, collect and sell your <span className="text-primary">NFTs</span> at one place</h4>
                                        <p className="mb-4 text-muted fs-14 op-7">
                                            NFT means non-fungible tokens (NFTs), which are generally created using the same type of programming used for cryptocurrencies.It is is a unique digital identifier that cannot be copied.
                                        </p>
                                        <div className="btn-list pt-1">
                                            <Button variant="" className="btn btn-primary btn-wave m-1 waves-effect waves-light">Discover Now</Button>
                                            <Button variant="" className="btn btn-outline-primary btn-wave m-1 waves-effect waves-light">Create Yours</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4 col-auto my-auto">
                                    <div className="featured-nft">
                                        <img src={nftimage1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={4} xl={6} lg={6}>
                    <Row>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} className="col-12">
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex flex-wrap align-items-top">
                                        <div className="me-3 lh-1">
                                            <span className="avatar avatar-lg bg-primary">
                                                <svg className="svg-white" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z" /></svg>
                                            </span>
                                        </div>
                                        <div>
                                            <p className="mb-1 text-muted">Total Assets</p>
                                            <h5 className="fw-semibold mb-2">596</h5>
                                            <p className="fs-11 text-muted mb-0"><span className="text-success fw-semibold">0.25%<i className="ri-arrow-up-s-line align-middle mx-1"></i></span> This month</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} className="col-12">
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex flex-wrap align-items-top">
                                        <div className="me-3 lh-1">
                                            <span className="avatar avatar-lg bg-secondary">
                                                <svg className="svg-white" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0,0h24v24H0V0z" fill="none" /><g><path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" /><rect height="2" width="6" x="9" y="7" /><rect height="2" width="2" x="16" y="7" /><rect height="2" width="6" x="9" y="10" /><rect height="2" width="2" x="16" y="10" /></g></svg>
                                            </span>
                                        </div>
                                        <div>
                                            <p className="mb-1 text-muted">Total Value</p>
                                            <h5 className="fw-semibold mb-2">$1,298</h5>
                                            <p className="fs-11 text-muted mb-0"><span className="text-success fw-semibold">0.74%<i className="ri-arrow-up-s-line align-middle mx-1"></i></span> This month</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} className="col-12">
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex flex-wrap align-items-top">
                                        <div className="me-3 lh-1">
                                            <span className="avatar avatar-lg bg-success">
                                                <svg className="svg-white" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none" /></g><g><g><path d="M21.41,11.41l-8.83-8.83C12.21,2.21,11.7,2,11.17,2H4C2.9,2,2,2.9,2,4v7.17c0,0.53,0.21,1.04,0.59,1.41l8.83,8.83 c0.78,0.78,2.05,0.78,2.83,0l7.17-7.17C22.2,13.46,22.2,12.2,21.41,11.41z M12.83,20L4,11.17V4h7.17L20,12.83L12.83,20z" /><circle cx="6.5" cy="6.5" r="1.5" /></g></g></svg>
                                            </span>
                                        </div>
                                        <div>
                                            <p className="mb-1 text-muted">Total Sales</p>
                                            <h5 className="fw-semibold mb-2">821</h5>
                                            <p className="fs-11 text-muted mb-0"><span className="text-success fw-semibold">1.52%<i className="ri-arrow-up-s-line align-middle mx-1"></i></span> This month</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6} sm={6} className="col-12">
                            <Card className="custom-card">
                                <Card.Body>
                                    <div className="d-flex flex-wrap align-items-top">
                                        <div className="me-3 lh-1">
                                            <span className="avatar avatar-lg bg-warning">
                                                <svg className="svg-white" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8 s8,3.59,8,8C20,16.41,16.41,20,12,20z M12.89,11.1c-1.78-0.59-2.64-0.96-2.64-1.9c0-1.02,1.11-1.39,1.81-1.39 c1.31,0,1.79,0.99,1.9,1.34l1.58-0.67c-0.15-0.44-0.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6,0.56-2.62,2.85-2.62,2.96 c0,2.27,2.25,2.91,3.35,3.31c1.58,0.56,2.28,1.07,2.28,2.03c0,1.13-1.05,1.61-1.98,1.61c-1.82,0-2.34-1.87-2.4-2.09L8.1,14.75 c0.63,2.19,2.28,2.78,3.02,2.96V19h1.75v-1.24c0.52-0.09,3.02-0.59,3.02-3.22C15.9,13.15,15.29,11.93,12.89,11.1z" /></g></svg>
                                            </span>
                                        </div>
                                        <div>
                                            <p className="mb-1 text-muted">Total Revenue</p>
                                            <h5 className="fw-semibold mb-2">$7,63,129.09</h5>
                                            <p className="fs-11 text-muted mb-0"><span className="text-danger fw-semibold">0.124%<i className="ri-arrow-down-s-line align-middle mx-1"></i></span> This month</p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={2} xl={6} lg={6} >
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex flex-wrap align-items-center justify-content-between mb-2">
                                <div>
                                    <p className="mb-0 text-muted">Your Balance</p>
                                    <h5 className="fw-semibold">$19,867.96</h5>
                                </div>
                                <div>
                                    <span className="avatar avatar-md bg-primary-transparent">
                                        <svg className="svg-primary" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" /><circle cx="16" cy="12" r="1.5" /></svg>
                                    </span>
                                </div>
                            </div>
                            <p className="mb-0 text-muted fs-11 op-7">Top offers on USD-27,981 <span className="text-success fw-semibold">(+29.09%)</span></p>
                            <div id="nft-balance-chart" className="px-3 py-4">
                                <Totalbalance />
                            </div>
                            <div className="d-grid mt-3">
                                <Button variant="" className="btn btn-sm btn-success-light btn-wave">Top Up Wallet</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={8} xl={12} lg={12}>
                    <div className="mb-4 d-flex align-items-center justify-content-between">
                        <h6 className="fw-semibold mb-0">Trending Auctions :</h6>
                        <div>
                            <Button variant="" className="btn btn-sm btn-primary-light btn-wave">View All</Button>
                        </div>
                    </div>
                    <Row>
                        {Trendingauctions.map((idx) => (
                            <Col xxl={3} xl={3} lg={3} md={3} sm={6} className="col-12" key={Math.random()}>
                                <Card className="custom-card">
                                    <img src={idx.src1} className="card-img-top" alt="..." />
                                    <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                        <div className="flex-fill">
                                            <Button variant="" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave">
                                                <i className="ri-heart-fill"></i>
                                            </Button>
                                        </div>
                                        <div>
                                            <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>{idx.likes}</span>
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
                                                <p className="mb-0 fw-semibold">{idx.name}</p>
                                                <p className="fs-12 text-muted mb-0">{idx.mail}</p>
                                            </div>
                                        </div>
                                        <p className="mb-0 text-fixed-white nft-auction-time">
                                            04hrs : 24m : 38s
                                        </p>
                                        <p className="fs-15 fw-semibold mb-2">{idx.color}- NFT</p>
                                        <div className="d-flex flex-wrap align-itesm-center justify-content-between mb-4">
                                            <div className="fw-semibold">
                                                Highest Bid -
                                            </div>
                                            <div className="d-flex flex-wrap align-items-center lh-1">
                                                <span className="avatar avatar-xs me-1">
                                                    <img src={ethereum} alt="" />
                                                </span>{idx.bid}
                                            </div>
                                        </div>
                                        <div className="d-grid">
                                            <Button variant="" className="btn btn-primary-light btn-wave">Place Bid</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xxl={4} xl={12} lg={12} className="">
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Top Creators
                            </Card.Title>
                            <Dropdown>
                                <Dropdown.Toggle variant='' className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown">
                                    <i className="fe fe-more-vertical"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="row">Name</th>
                                            <th scope="row">Items Sold</th>
                                            <th scope="row">Total Value</th>
                                            <th scope="row">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded me-2">
                                                            <img src={face4} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-semibold">Amanda Nanes<i className="bi bi-patch-check-fill text-success ms-2"></i></p>
                                                        <span className="fs-12 text-muted">amandananes@</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="align-items-center">
                                                    <span className="fs-12 text-muted">Total Sold</span>
                                                    <p className="mb-0 fw-semibold">18</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="align-items-center">
                                                    <span className="fs-12 text-muted">Sale Value</span>
                                                    <p className="mb-0 fw-semibold">$1,982</p>
                                                </div>
                                            </td>
                                            <td>
                                                <Button variant="" className="btn btn-sm btn-primary btn-wave">Follow</Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded me-2">
                                                            <img src={face15} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-semibold">Charles Achilles<i className="bi bi-patch-check-fill text-success ms-2"></i></p>
                                                        <span className="fs-12 text-muted">@charlesachilles</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="align-items-center">
                                                    <span className="fs-12 text-muted">Total Sold</span>
                                                    <p className="mb-0 fw-semibold">126</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="align-items-center">
                                                    <span className="fs-12 text-muted">Sale Value</span>
                                                    <p className="mb-0 fw-semibold">$16,982</p>
                                                </div>
                                            </td>
                                            <td>
                                                <Button variant="" className="btn btn-sm btn-wave btn-primary-light">Unfollow</Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded me-2">
                                                            <img src={face5} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-semibold">Julia Camo<i className="bi bi-patch-check-fill text-success ms-2"></i></p>
                                                        <span className="fs-12 text-muted">@juliacamo</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="align-items-center">
                                                    <span className="fs-12 text-muted">Total Sold</span>
                                                    <p className="mb-0 fw-semibold">42</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="align-items-center">
                                                    <span className="fs-12 text-muted">Sale Value</span>
                                                    <p className="mb-0 fw-semibold">$3,432</p>
                                                </div>
                                            </td>
                                            <td>
                                                <Button variant="" className="btn btn-sm btn-primary btn-wave">Follow</Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded me-2">
                                                            <img src={face12} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-semibold">Json Taylor<i className="bi bi-patch-check-fill text-success ms-2"></i></p>
                                                        <span className="fs-12 text-muted">@jsontaylor</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="align-items-center">
                                                    <span className="fs-12 text-muted">Total Sold</span>
                                                    <p className="mb-0 fw-semibold">63</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="align-items-center">
                                                    <span className="fs-12 text-muted">Sale Value</span>
                                                    <p className="mb-0 fw-semibold">$9,236</p>
                                                </div>
                                            </td>
                                            <td>
                                                <Button variant="" className="btn btn-sm btn-primary btn-wave">Follow</Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded me-2">
                                                            <img src={face3} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-semibold">Elisha Sean<i className="bi bi-patch-check-fill text-success ms-2"></i></p>
                                                        <span className="fs-12 text-muted">elishasean</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="align-items-center">
                                                    <span className="fs-12 text-muted">Total Sold</span>
                                                    <p className="mb-0 fw-semibold">59</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="align-items-center">
                                                    <span className="fs-12 text-muted">Sale Value</span>
                                                    <p className="mb-0 fw-semibold">$7,783</p>
                                                </div>
                                            </td>
                                            <td>
                                                <Button variant="" className="btn btn-sm btn-primary btn-wave">Follow</Button>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar avatar-md avatar-rounded me-2">
                                                            <img src={face13} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="align-items-center">
                                                        <p className="mb-0 fw-semibold">Joseph Smith<i className="bi bi-patch-check-fill text-success ms-2"></i></p>
                                                        <span className="fs-12 text-muted">@josephsmith</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="align-items-center">
                                                    <span className="fs-12 text-muted">Total Sold</span>
                                                    <p className="mb-0 fw-semibold">137</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="align-items-center">
                                                    <span className="fs-12 text-muted">Sale Value</span>
                                                    <p className="mb-0 fw-semibold">$13,562</p>
                                                </div>
                                            </td>
                                            <td>
                                                <Button variant="" className="btn btn-sm btn-primary-light btn-wave">Unfollow</Button>
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
                <Col xxl={3} xl={12} lg={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Top Collectors
                            </Card.Title>
                            <Dropdown>
                                <Dropdown.Toggle variant='' className="py-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown">
                                    View All<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu role="menu">
                                    <Dropdown.Item href="#">Download</Dropdown.Item>
                                    <Dropdown.Item href="#">Import</Dropdown.Item>
                                    <Dropdown.Item href="#">Export</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body className="p-0" id="top-collector">
                            <div className="table-responsive">
                                <table className="table table-hover text-nowrap">
                                    <tbody>
                                        {TopCollectors.map((idx) => (
                                            <tr key={Math.random()}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md p-2 avatar-rounded bg-light">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="fw-semibold">{idx.name}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <ProgressBar className="progress progress-xs progress-animate nft-collector-progress" variant='primary-gradient' now={idx.progress} />
                                                </td>
                                                <td>
                                                    <span className="text-muted fs-12">{idx.value}</span>
                                                </td>
                                                <td>
                                                    <p className="mb-0 fw-semibold">{idx.text1}</p>
                                                    <span className="fs-11 fw-normal text-success">{idx.text2}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6} xl={8} lg={7} md={12} sm={12}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between flex-wrap">
                            <Card.Title>
                                NFTs Statistics
                            </Card.Title>
                            <div className="btn-group" role="group" aria-label="Basic example">
                                <Button variant="" type="button" className="btn btn-primary btn-sm btn-wave">1D</Button>
                                <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave">1W</Button>
                                <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave">1M</Button>
                                <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave">3M</Button>
                                <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave">6M</Button>
                                <Button variant="" type="button" className="btn btn-primary-light btn-sm btn-wave">1Y</Button>
                            </div>
                        </div>
                        <Card.Body className="p-0">
                            <div className="d-flex flex-wrap p-3 border-bottom border-block-end-dashed">
                                <div className="me-3">
                                    <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                        <img src={ethereum} alt="" />
                                    </span>
                                </div>
                                <div className="d-flex flex-wrap justify-content-evenly flex-fill">
                                    <div className="m-sm-0 m-2">
                                        <span>Symbol</span>
                                        <p className="fw-semibold mb-0">ETH</p>
                                    </div>
                                    <div className="m-sm-0 m-2">
                                        <span>Price Benchmark</span>
                                        <p className="fw-semibold mb-0">-0.39%</p>
                                    </div>
                                    <div className="m-sm-0 m-2">
                                        <span>Price (USD)</span>
                                        <p className="text-success fe-semibold mb-0">$1,212.67</p>
                                    </div>
                                    <div className="m-sm-0 m-2">
                                        <span>Change (24H)</span>
                                        <p className="text-danger fw-semibold mb-0">-0.14%</p>
                                    </div>
                                    <div className="m-sm-0 m-2">
                                        <span>Market Cap</span>
                                        <p className="fw-semibold mb-0">$148.20B</p>
                                    </div>
                                </div>
                            </div>
                            <div id="nft-statistics" className="p-3">
                                <NFTStatistics />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={4} lg={5} md={12} sm={12} className="">
                    <div className="mb-3 d-flex align-items-center justify-content-between">
                        <h6 className="fw-semibold mb-0">Featured Collections :</h6>
                        <div>
                            <Button variant="" className="btn btn-sm btn-primary-light btn-wave waves-effect waves-light">View All</Button>
                        </div>
                    </div>
                    <div className="swiper pagination-dynamic text-start" id="nft-collections-slide">
                        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                            modules={[Autoplay]} className="mySwiper swiper swiper-basic">
                            <SwiperSlide>
                                <Card className="custom-card overflow-visible">
                                    <Card.Body>
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <img src={nftimage6} alt="" className="nft-featuredcollect-image" />
                                            </div>
                                            <div className="col-6">
                                                <img src={nftimage7} alt="" className="nft-featuredcollect-image" />
                                            </div>
                                            <div className="col-6">
                                                <img src={nftimage8} alt="" className="nft-featuredcollect-image" />
                                            </div>
                                            <div className="col-6">
                                                <img src={nftimage9} alt="" className="nft-featuredcollect-image" />
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer className="">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <div className="text-muted fs-12 d-flex align-items-center">Collection Rank :
                                                    <span className="fw-semibold text-success fs-15 mb-0 ms-1">#1</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2 lh-1">
                                                    <span className="avatar avatar-rounded bg-light p-1 avatar-xs">
                                                        <img src={ethereum} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="fw-semibold">1.0979ETH</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Footer>
                                    <Card.Footer className="">
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex align-items-center flex-fill">
                                                <div className="me-2 lh-1">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face15} alt="" />
                                                        <Link to="#" className="badge rounded-pill bg-primary avatar-badge"><i className="ri-check-line align-mmiddle"></i></Link>
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="mb-0 fw-semibold"><Link to="#">Simon Cowell</Link></p>
                                                    <p className="text-muted fs-12 mb-0">@simon</p>
                                                </div>
                                            </div>
                                            <Dropdown drop="up">
                                                <Dropdown.Toggle variant='' className="btn btn-icon btn-sm btn-primary-light no-caret carousel-dropdown" data-bs-toggle="dropdown">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className="custom-card overflow-visible">
                                    <Card.Body>
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <img src={nftimage11} alt="" className="nft-featuredcollect-image" />
                                            </div>
                                            <div className="col-6">
                                                <img src={nftimage12} alt="" className="nft-featuredcollect-image" />
                                            </div>
                                            <div className="col-6">
                                                <img src={nftimage13} alt="" className="nft-featuredcollect-image" />
                                            </div>
                                            <div className="col-6">
                                                <img src={nftimage14} alt="" className="nft-featuredcollect-image" />
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer className="">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <div className="text-muted fs-12 d-flex align-items-center">Collection Rank :
                                                    <span className="fw-semibold text-success fs-15 mb-0 ms-1">#2</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2 lh-1">
                                                    <span className="avatar avatar-rounded bg-light p-1 avatar-xs">
                                                        <img src={ethereum} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="fw-semibold">1.0466ETH</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Footer>
                                    <Card.Footer className="">
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex align-items-center flex-fill">
                                                <div className="me-2 lh-1">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face5} alt="" />
                                                        <Link to="#" className="badge rounded-pill bg-primary avatar-badge"><i className="ri-check-line align-mmiddle"></i></Link>
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="mb-0 fw-semibold"><Link to="#">Melissa Smith</Link></p>
                                                    <p className="text-muted fs-12 mb-0">@melissa</p>
                                                </div>
                                            </div>
                                            <Dropdown drop="up">
                                                <Dropdown.Toggle variant='' className="btn btn-icon btn-sm btn-primary-light no-caret carousel-dropdown" data-bs-toggle="dropdown">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item className="dropdown-item" href="#">Action</Dropdown.Item>
                                                    <Dropdown.Item className="dropdown-item" href="#">Another action</Dropdown.Item>
                                                    <Dropdown.Item className="dropdown-item" href="#">Something else here</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card className="custom-card overflow-visible">
                                    <Card.Body>
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <img src={nftimage10} alt="" className="nft-featuredcollect-image" />
                                            </div>
                                            <div className="col-6">
                                                <img src={nftimage15} alt="" className="nft-featuredcollect-image" />
                                            </div>
                                            <div className="col-6">
                                                <img src={nftimage17} alt="" className="nft-featuredcollect-image" />
                                            </div>
                                            <div className="col-6">
                                                <img src={nftimage16} alt="" className="nft-featuredcollect-image" />
                                            </div>
                                        </div>
                                    </Card.Body>
                                    <Card.Footer className="card-footer">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <div className="text-muted fs-12 d-flex align-items-center">Collection Rank :
                                                    <span className="fw-semibold text-success fs-15 mb-0 ms-1">#3</span>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="me-2 lh-1">
                                                    <span className="avatar avatar-rounded bg-light p-1 avatar-xs">
                                                        <img src={ethereum} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="fw-semibold">1.0355ETH</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Footer>
                                    <Card.Footer className="card-footer">
                                        <div className="d-flex align-items-center">
                                            <div className="d-flex align-items-center flex-fill">
                                                <div className="me-2 lh-1">
                                                    <span className="avatar avatar-md avatar-rounded">
                                                        <img src={face10} alt="" />
                                                        <Link to="#" className="badge rounded-pill bg-primary avatar-badge"><i className="ri-check-line align-mmiddle"></i></Link>
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="mb-0 fw-semibold"><Link to="#">Json Talor</Link></p>
                                                    <p className="text-muted fs-12 mb-0">@taylor</p>
                                                </div>
                                            </div>
                                            <Dropdown drop="up">
                                                <Dropdown.Toggle variant='' className="btn btn-icon btn-sm btn-primary-light no-caret carousel-dropdown" data-bs-toggle="dropdown">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xl={9}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Trending NFTs
                            </Card.Title>
                            <div className="d-flex">
                                <div className="me-3">
                                    <Form.Control className="form-control form-control-sm" type="text" onChange={(ele) => { myfunction(ele.target.value); }}
                                        placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle variant='' className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block d-inline-block"></i>
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
                                <Table bordered hover className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>Collection</th>
                                            <th>Rank</th>
                                            <th>Volume</th>
                                            <th>24h %</th>
                                            <th>7d %</th>
                                            <th>Floor Price</th>
                                            <th>Items</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-semibold"><Link to="#" title="nft_name">{idx.name}</Link></p>
                                                            <Link to="javscript:void(0);" className="fs-12 text-muted fw-normal" title="creator_name">{idx.mail}</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="fw-semibold text-primary">{idx.rank}</span></td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-xs avatar-rounded">
                                                                <img src={ethereum} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-semibold"><Link to="#" title="nft_name">{idx.volume}</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className={idx.color1}><i className={`ti ti-trending-${idx.class1} me-1 align-middle d-inline-block`}></i>{idx.value1}</span>
                                                </td>
                                                <td><span className={idx.color2}><i className={`ti ti-trending-${idx.class2} me-1 align-middle d-inline-block`}></i>{idx.value2}</span></td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-xs avatar-rounded">
                                                                <img src={ethereum} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-semibold"><Link to="#" title="nft_name">{idx.price}</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{idx.items}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <Pagination className="mb-0">
                                            <Pagination.Item disabled href="#">Prev</Pagination.Item>
                                            <Pagination.Item active href="#">1</Pagination.Item>
                                            <Pagination.Item href="#">2</Pagination.Item>
                                            <Pagination.Item href="#" className='pagination-next'>next</Pagination.Item>
                                        </Pagination>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Personal Listings
                            </Card.Title>
                            <Dropdown>
                                <Dropdown.Toggle variant='' className="p-2 fs-12 text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                    View All<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu role="menu">
                                    <Dropdown.Item href="#">Today</Dropdown.Item>
                                    <Dropdown.Item href="#">This Week</Dropdown.Item>
                                    <Dropdown.Item href="#">Last Week</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <ListGroup variant='flush' className="">
                                {TrendingNFTs1.map((idx) => (
                                    <ListGroup.Item key={Math.random()}>
                                        <Link to="#">
                                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2 lh-1">
                                                        <span className="avatar avatar-md">
                                                            <img src={idx.src} alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="fw-semibold mb-0">{idx.name}</p>
                                                        <span className="text-muted fs-12">{idx.mail}<span className={`ms-2 text-${idx.color} fs-11`}><i className="ri-arrow-up-s-line align-middle me-1"></i>{idx.value}</span></span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="fs-10 text-muted ps-4">PRICE</span>
                                                    <p className="mb-0 fw-semibold d-flex align-items-center"><span className="avatar avatar-sm p-1"><img src={ethereum} alt="" /></span>{idx.price}</p>
                                                </div>
                                            </div>
                                        </Link>
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

export default Nft;
