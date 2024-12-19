import  { FC, Fragment } from 'react';
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import image34 from "../../../../assets/images/nft-images/34.png";
import image35 from "../../../../assets/images/nft-images/35.png";
import image36 from "../../../../assets/images/nft-images/36.png";
import image37 from "../../../../assets/images/nft-images/37.png";
import image39 from "../../../../assets/images/nft-images/39.png";
import image38 from "../../../../assets/images/nft-images/38.png";
import image40 from "../../../../assets/images/nft-images/40.png";
import image41 from "../../../../assets/images/nft-images/41.png";
import image42 from "../../../../assets/images/nft-images/42.png";
import image43 from "../../../../assets/images/nft-images/43.png";
import image44 from "../../../../assets/images/nft-images/44.png";
import image45 from "../../../../assets/images/nft-images/45.png";
import { Link } from 'react-router-dom';

interface WalletintegrationProps { }

const Walletintegration: FC<WalletintegrationProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Wallet Integration" heading="NFT" active="Wallet Integration" />
            <div className="container">
                <Row>
                    <Col xl={3}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header>
                                <Card.Title>
                                    Choose Network
                                </Card.Title>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <ListGroup variant="flush" className=" list-group-flush">
                                    <ListGroup.Item>
                                        <Link to="#" className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                    <img src={image34} alt="" />
                                                </span>
                                            </div>
                                            <div className="fs-14 fw-semibold">Etherium</div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to="#" className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                    <img src={image35} alt="" />
                                                </span>
                                            </div>
                                            <div className="fs-14 fw-semibold">Binance</div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to="#" className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                    <img src={image36} alt="" />
                                                </span>
                                            </div>
                                            <div className="fs-14 fw-semibold">Solana</div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to="#" className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                    <img src={image39} alt="" />
                                                </span>
                                            </div>
                                            <div className="fs-14 fw-semibold">Tezos</div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to="#" className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                    <img src={image37} alt="" />
                                                </span>
                                            </div>
                                            <div className="fs-14 fw-semibold">Avalanche</div>
                                        </div>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Link to="#" className="stretched-link"></Link>
                                        <div className="d-flex align-items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-rounded avatar-sm bg-light p-1">
                                                    <img src={image38} alt="" />
                                                </span>
                                            </div>
                                            <div className="fs-14 fw-semibold">Cardano</div>
                                        </div>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={9}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    Choose Wallet
                                </Card.Title>
                                <div>
                                    <Button variant="secondary" className="btn  btn-wave">Add New Wallet</Button>
                                </div>
                            </Card.Header>
                            <Card.Body className="p-4">
                                <div className="row justify-content-center gy-4">
                                    <Col xxl={3}>
                                        <Card className="custom-card nft-wallet active">
                                        <Card.Body className="p-3">
                                            <Link to="#" className="stretched-link"></Link>
                                            <div className="d-flex align-items-center justify-content-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-rounded p-2 bg-light">
                                                        <img src={image42} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-semibold mb-0">MetaMask</h6>
                                                </div>
                                            </div>
                                        </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3}>
                                    <Card className="custom-card nft-wallet">
                                        <Card.Body className="p-3">
                                           <Link to="#" className="stretched-link"></Link>
                                            <div className="d-flex align-items-center justify-content-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-rounded p-2 bg-light">
                                                        <img src={image41} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-semibold mb-0">Enjin Wallet</h6>
                                                </div>
                                            </div>
                                        </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3}>
                                    <Card className="custom-card nft-wallet">
                                        <Card.Body className="p-3">
                                            <Link to="#" className="stretched-link"></Link>
                                            <div className="d-flex align-items-center justify-content-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-rounded bg-light">
                                                        <img src={image43} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-semibold mb-0">Trust Wallet</h6>
                                                </div>
                                            </div>
                                        </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3}>
                                    <Card className="custom-card nft-wallet">
                                        <Card.Body className="p-3">
                                           <Link to="#" className="stretched-link"></Link>
                                            <div className="d-flex align-items-center justify-content-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-rounded bg-light p-2">
                                                        <img src={image40} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-semibold mb-0">Coinbase Wallet</h6>
                                                </div>
                                            </div>
                                        </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3}>
                                    <Card className="custom-card nft-wallet">
                                        <Card.Body className="p-3">
                                           <Link to="#" className="stretched-link"></Link>
                                            <div className="d-flex align-items-center justify-content-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-rounded bg-light p-2">
                                                        <img src={image44} alt="" className='dark-filter-img'/>
                                                    </span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-semibold mb-0">Lido</h6>
                                                </div>
                                            </div>
                                        </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={3}>
                                    <Card className="custom-card nft-wallet">
                                        <Card.Body className="p-3">
                                           <Link to="#" className="stretched-link"></Link>
                                            <div className="d-flex align-items-center justify-content-center gap-3">
                                                <div className="lh-1">
                                                    <span className="avatar avatar-rounded bg-light">
                                                        <img src={image45} alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <h6 className="fw-semibold mb-0">Huobi Wallet</h6>
                                                </div>
                                            </div>
                                        </Card.Body>
                                        </Card>
                                    </Col>
                                </div>
                            </Card.Body>
                            <Card.Footer className="card-footer">
                                <div>
                                    <Button variant="success" className="btn  float-end btn-wave">Connect</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </div>

        </Fragment>
    );
};

export default Walletintegration;
