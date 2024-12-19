import { FC, Fragment } from 'react';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import bitcoin from "../../../../assets/images/crypto-currencies/square-color/Bitcoin.svg";
import litecoin from "../../../../assets/images/crypto-currencies/square-color/Litecoin.svg";
import ethereum from "../../../../assets/images/crypto-currencies/square-color/Ethereum.svg";
import { Data1, Data2, Statistics } from './selldata';
import Select from 'react-select';

interface BuysellProps { }

const Buysell: FC<BuysellProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Buy & Sell" heading="Crypto" active="Buy & Sell" />
            <div className="container">
                <Row>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Buy Crypto
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div>
                                    <InputGroup className="mb-3 d-flex d-block flex-nowrap">
                                        <Form.Control type="text" className="crypto-buy-sell-input" aria-label="crypto buy select"
                                            placeholder="Select Currency" />
                                        <Select name="colors" options={Data1} className="basic-multi-select buysell" placeholder="BTC"
                                            menuPlacement='auto' classNamePrefix="Select2"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3 d-flex d-block flex-nowrap">
                                        <Form.Control type="text" className="crypto-buy-sell-input" aria-label="crypto buy select"
                                            placeholder="36,335.00" />
                                        <Select name="colors" options={Data2} className="basic-multi-select buysell" placeholder="USD"
                                            menuPlacement='auto' classNamePrefix="Select2"
                                        />
                                    </InputGroup>
                                    <div>
                                        <div className="fs-14 py-2"><span className="fw-semibold text-dark">Price:</span><span className="text-muted ms-2 fs-14 d-inline-block">6.003435</span><span className="text-dark fw-semibold float-end">BTC</span></div>
                                        <div className="fs-14 py-2"><span className="fw-semibold text-dark">Amount:</span><span className="text-muted ms-2 fs-14 d-inline-block">2,34,4543.00</span><span className="text-dark fw-semibold float-end">LTC</span></div>
                                        <div className="fw-semibold fs-14 py-2">Total: <span className="fs-14 d-inline-block">22.00 BTC</span></div>
                                        <div className="fs-12 text-success">Additional Charges: 0.32%(0.0001231 BTC)</div>
                                        <label className="fw-semibold fs-12 mt-4 mb-2">SELECT PAYMENT METHOD :</label>
                                        <div className="row g-2">
                                            <Col xl={6}>
                                                <div className="p-2 border rounded">
                                                    <div className="form-check mb-0">
                                                        <Form.Check className="" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                                        <label className="form-check-label fs-12" htmlFor="flexRadioDefault1">
                                                            Credit / Debit Cards
                                                        </label>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={6}>
                                                <div className="p-2 border rounded">
                                                    <div className="form-check mb-0">
                                                        <Form.Check className="" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                        <label className="form-check-label fs-12" htmlFor="flexRadioDefault2">
                                                            Paypal
                                                        </label>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xl={12}>
                                                <div className="p-2 border rounded">
                                                    <div className="form-check mb-0">
                                                        <Form.Check className="" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                                        <label className="form-check-label fs-12" htmlFor="flexRadioDefault3">
                                                            Wallet
                                                        </label>
                                                    </div>
                                                </div>
                                            </Col>
                                        </div>
                                    </div>
                                    <div className="d-grid mt-4 pt-1">
                                        <Button variant="" type="button" className="btn btn-primary btn-wave btn-lg">BUY</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Sell Crypto
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="tab-pane border-0 p-0" id="sell-crypto1" role="tabpanel"
                                    aria-labelledby="sell-crypto1">
                                    <InputGroup className="mb-3 d-flex d-block flex-nowrap">
                                        <Form.Control type="text" className="form-control crypto-buy-sell-input" aria-label="crypto buy select"
                                            placeholder="Select Currency" />
                                        <Select name="colors" options={Data1} className="basic-multi-select buysell" placeholder="BTC"
                                            menuPlacement='auto' classNamePrefix="Select2"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3 d-flex d-block flex-nowrap">
                                        <Form.Control type="text" className="form-control crypto-buy-sell-input"
                                            aria-label="crypto buy select" placeholder="36,335.00" />
                                        <Select name="colors" options={Data2} className="basic-multi-select buysell" placeholder="USD"
                                            menuPlacement='auto' classNamePrefix="Select2"
                                        />
                                    </InputGroup>
                                    <div className="mb-3">
                                        <span className="form-label">Crypto Value :</span>
                                        <div className="position-relative">
                                            <a href="#" className="stretched-link"></a>
                                            <div className="p-2 border rounded d-flex align-items-center justify-content-between gap-3 mt-1">
                                                <div className="gap-2 d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar bg-light p-2">
                                                            <img src={bitcoin} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-semibold">Bitcoin - BTC</div>
                                                </div>
                                                <div className="text-end">
                                                    <span className="fw-semibold d-block">0.374638535 BTC</span>
                                                    <span className="text-muted">$5,364.65</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <span className="form-label">Deposit To :</span>
                                        <div className="position-relative">
                                            <a href="#" className="stretched-link"></a>
                                            <div className="p-2 border rounded d-flex align-items-center gap-2 mt-1">
                                                <div className="lh-1">
                                                    <span className="avatar bg-light p-2">
                                                        <i className="ri-bank-line text-info fs-20"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="fw-semibold d-block">Banking</span>
                                                    <span className="text-muted">Checking ...</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="fs-14 py-2"><span className="fw-semibold text-dark">Price:</span><span className="text-muted ms-2 fs-14">6.003435</span><span className="text-dark fw-semibold float-end">BTC</span></div>
                                        <div className="fs-14 py-2"><span className="fw-semibold text-dark">Amount:</span><span className="text-muted ms-2 fs-14">2,34,4543.00</span><span className="text-dark fw-semibold float-end">LTC</span></div>
                                    </div>
                                    <div className="d-grid mt-4">
                                        <Button variant="" type="button" className="btn btn-danger btn-wave btn-lg">SELL</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Quick Secure Transfer
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="tab-pane border-0 p-0" id="sell-crypto" role="tabpanel"
                                    aria-labelledby="sell-crypto">
                                    <div className="mb-3">
                                        <span className="form-label">Crypto Value :</span>
                                        <div className="position-relative">
                                            <a href="#" className="stretched-link"></a>
                                            <div className="p-2 border rounded d-flex align-items-center justify-content-between gap-3 mt-1">
                                                <div className="gap-2 d-flex align-items-center">
                                                    <div className="lh-1">
                                                        <span className="avatar bg-light p-2">
                                                            <img src={bitcoin} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="fw-semibold">Bitcoin - BTC</div>
                                                </div>
                                                <div className="text-end">
                                                    <span className="fw-semibold d-block">0.374638535 BTC</span>
                                                    <span className="text-muted">$5,364.65</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <span className="form-label">Deposit To :</span>
                                        <div className="position-relative">
                                            <a href="#" className="stretched-link"></a>
                                            <div className="p-2 border rounded d-flex align-items-center gap-2 mt-1">
                                                <div className="lh-1">
                                                    <span className="avatar bg-light p-2">
                                                        <i className="ri-bank-line text-info fs-20"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="fw-semibold d-block">Banking</span>
                                                    <span className="text-muted">Checking ...</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <span className="d-block fw-semibold">Amount :</span>
                                        <div className="d-flex align-items-center justify-content-between text-muted">
                                            <div>Weekly Bank Limit</div>
                                            <div>$10,000 remaining</div>
                                        </div>
                                    </div>
                                    <InputGroup className="mb-3 d-flex d-block flex-nowrap">
                                        <Form.Control type="text" className="form-control crypto-buy-sell-input" aria-label="crypto buy select" placeholder="36,335.00" />
                                        <Select name="colors" options={Data2} className="basic-multi-select buysell" placeholder="USD"
                                            menuPlacement='auto' classNamePrefix="Select2"
                                        />
                                    </InputGroup>

                                    <div>
                                        <div className="fs-14 py-2"><span className="fw-semibold text-dark">Price:</span><span className="text-muted ms-2 fs-14">6.003435</span><span className="text-dark fw-semibold float-end">BTC</span></div>
                                        <div className="fs-14 py-2"><span className="fw-semibold text-dark">Amount:</span><span className="text-muted ms-2 fs-14">2,34,4543.00</span><span className="text-dark fw-semibold float-end">LTC</span></div>
                                    </div>
                                    <div className="d-grid mt-4">
                                        <Button variant="" type="button" className="btn btn-success btn-wave btn-lg">Transfer</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header className="justify-content-between">
                                <Card.Title>
                                    Buy & Sell Statistics
                                </Card.Title>
                                <div className="btn-group flex-wrap" role="group" aria-label="Basic example">
                                    <Button variant="primary" type="button" className="btn btn-primary btn-sm btn-wave">1D</Button>
                                    <Button variant="primary-light" type="button" className="btn  btn-sm btn-wave">1W</Button>
                                    <Button variant="primary-light" type="button" className="btn  btn-sm btn-wave">1M</Button>
                                    <Button variant="primary-light" type="button" className="btn  btn-sm btn-wave">3M</Button>
                                    <Button variant="primary-light" type="button" className="btn  btn-sm btn-wave">6M</Button>
                                    <Button variant="primary-light" type="button" className="btn  btn-sm btn-wave">1Y</Button>
                                </div>
                            </Card.Header>
                            <Card.Body className="p-xl-0">
                                <Row>
                                    <Col xl={8} className=" pe-0 border-end border-inline-end-dashed">
                                        <div className="d-flex flex-wrap align-items-center border-bottom border-block-end-dashed mb-3 p-3 gap-4 ps-5">
                                            <div>
                                                <span className="d-block fs-12">Total Buy</span>
                                                <span className="d-block fw-semibold fs-15 text-success">$324.25 USD</span>
                                            </div>
                                            <div>
                                                <span className="d-block fs-12">Total Sell</span>
                                                <span className="d-block fw-semibold fs-15 text-danger">$4,235.25 USD</span>
                                            </div>
                                            <div>
                                                <span className="d-block fs-12">Available Balance</span>
                                                <span className="d-block fw-semibold fs-15 text-primary">$22,803.92 USD</span>
                                            </div>
                                            <div>
                                                <span className="d-block fs-12">Total Crypto Asset Value</span>
                                                <span className="d-block fw-semibold fs-15 text-warning">$4,56,683.00 USD</span>
                                            </div>
                                            <div></div>
                                        </div>
                                        <div id="buy_sell-statistics" className="px-3">
                                            <Statistics />
                                        </div>

                                    </Col>
                                    <Col xl={4} className="ps-xl-0">
                                        <div className="p-3">
                                            <Card className="custom-card bg-light shadow-none">
                                                <Card.Body>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <span className="d-block text-muted fs-12 mb-2">BTC/USD</span>
                                                            <span className="fw-semibold h6 mb-0">27.53612</span>
                                                            <span className="text-danger d-block fs-12 mt-1">-0.06%</span>
                                                        </div>
                                                        <div>
                                                            <span className="avatar avatar-xl avatar-rounded">
                                                                <img src={bitcoin} alt="" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                            <Card className="custom-card bg-light shadow-none">
                                                <Card.Body>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <span className="d-block text-muted fs-12 mb-2">ETH/USD</span>
                                                            <span className="fw-semibold h6 mb-0">20.6782</span>
                                                            <span className="text-success d-block fs-12 mt-1">+2.86%</span>
                                                        </div>
                                                        <div>
                                                            <span className="avatar avatar-xl avatar-rounded">
                                                                <img src={ethereum} alt="" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                            <Card className="custom-card bg-light shadow-none mb-0">
                                                <Card.Body>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <span className="d-block text-muted fs-12 mb-2">LTC/USD</span>
                                                            <span className="fw-semibold h6 mb-0">54.2912</span>
                                                            <span className="text-success d-block fs-12 mt-1">+15.93%</span>
                                                        </div>
                                                        <div>
                                                            <span className="avatar avatar-xl avatar-rounded">
                                                                <img src={litecoin} alt="" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default Buysell;
