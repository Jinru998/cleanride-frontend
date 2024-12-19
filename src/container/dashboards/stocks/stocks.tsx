import { FC, Fragment } from 'react';
import { Card, Col, Dropdown, Nav, Row, Tab, Table } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { NumberofInvested, Portfoliovalue, Returnsrate, Stocksmarketcap, TotalInvested, Totalinvestments } from './stocksdata';

interface StocksProps { }

const Stocks: FC<StocksProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Stocks" heading="Dashboards" active="Stocks" />
            <Tab.Container defaultActiveKey="1">
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-md-flex d-block flex-wrap align-items-center justify-content-between">
                                    <div className="flex-fill">
                                        <Nav variant='pills' className="nav nav-pills nav-style-3" role="tablist">
                                            <Nav.Item>
                                                <Nav.Link eventKey="1" href="#stocks-portfolio">Portfolio</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="2" href="#stocks-market">Market</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <div className="d-flex flex-wrap align-items-center mt-md-0 mt-3 justify-content-evenly gap-4">
                                        <div className="text-md-end">
                                            <span className="d-block fw-semibold">Total Value</span>
                                            <span className="text-primary">$8.89k</span>
                                        </div>
                                        <div className="text-md-end">
                                            <span className="d-block fw-semibold">Market Value</span>
                                            <span className="text-warning">$15.9k</span>
                                        </div>
                                        <div className="text-md-end">
                                            <span className="d-block fw-semibold">Yield</span>
                                            <span className="text-danger">3.4%</span>
                                        </div>
                                        <div className="text-md-end">
                                            <span className="d-block fw-semibold">Dividend</span>
                                            <span className="text-info">$1.3k</span>
                                        </div>
                                        <div className="text-md-end">
                                            <span className="d-block fw-semibold">Gain</span>
                                            <span className="text-success">$116</span>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <Tab.Content className="tab-content">
                            <Tab.Pane eventKey="1" className="p-0 border-0" id="stocks-portfolio" role="tabpanel">
                                <Row>
                                    <Col xl={3} sm={6}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="d-flex gap-3 flex-wrap align-items-top justify-content-between">
                                                    <div className="flex-fill d-flex align-items-top mb-4 mb-sm-0">
                                                        <div className="me-3">
                                                            <span className="avatar avatar-rounded bg-primary">
                                                                <i className="ti ti-wallet fs-16"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">Total amount Invested</span>
                                                            <span className="fs-16 fw-semibold">$23,8998.99</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div id="total-invested">
                                                            <TotalInvested />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={3} sm={6}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="d-flex gap-3 flex-wrap align-items-top justify-content-between">
                                                    <div className="flex-fill d-flex align-items-top mb-4 mb-sm-0">
                                                        <div className="me-3">
                                                            <span className="avatar avatar-rounded bg-secondary">
                                                                <i className="ti ti-arrow-big-up-line fs-16"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">No Of Investments</span>
                                                            <span className="fs-16 fw-semibold">116</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div id="total-investments">
                                                            <NumberofInvested />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={3} sm={6}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="d-flex gap-3 flex-wrap align-items-top justify-content-between">
                                                    <div className="flex-fill d-flex align-items-top mb-4 mb-sm-0">
                                                        <div className="me-3">
                                                            <span className="avatar avatar-rounded bg-warning">
                                                                <i className="ti ti-wallet fs-16"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">Portfolio Value</span>
                                                            <span className="fs-16 fw-semibold">$12,920.20<i className="ti ti-arrow-narrow-up ms-1 text-success"></i></span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div id="portfolio-value">
                                                            <Portfoliovalue />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={3} sm={6}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="d-flex gap-3 flex-wrap align-items-top justify-content-between">
                                                    <div className="flex-fill d-flex align-items-top mb-4 mb-sm-0">
                                                        <div className="me-3">
                                                            <span className="avatar avatar-rounded bg-success">
                                                                <i className="ti ti-wallet fs-16"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted">Returns Rate</span>
                                                            <span className="fs-16 fw-semibold">+12.08%<i className="ti ti-arrow-narrow-up ms-1 text-success"></i></span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div id="returns-rate">
                                                            <Returnsrate />
                                                        </div>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={8}>
                                        <Card className="custom-card">
                                            <div className="card-header justify-content-between">
                                                <div className="card-title mb-2 mb-sm-0">
                                                    Total Investments
                                                </div>
                                                <div className="btn-group" role="group" aria-label="Basic example">
                                                    <button type="button" className="btn btn-primary btn-sm btn-wave waves-effect waves-light">1D</button>
                                                    <button type="button" className="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">1W</button>
                                                    <button type="button" className="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">1M</button>
                                                    <button type="button" className="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">3M</button>
                                                    <button type="button" className="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">6M</button>
                                                    <button type="button" className="btn btn-primary-light btn-sm btn-wave waves-effect waves-light">1Y</button>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <div className="d-flex alilgn-items-center justify-content-between gap-3 flex-wrap">
                                                    <div className="d-flex flex-wrap flex-fill gap-3 ms-sm-5 ms-0">
                                                        <div>
                                                            <span className="d-block text-muted mb-1">Invested Value</span>
                                                            <span className="d-block fw-semibold">$1,290.94<span className="text-success ms-1 fs-12"><i className="ti ti-chevron-up"></i>1.22%</span></span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted mb-1">Total Returns</span>
                                                            <span className="d-block fw-semibold">$25,458.20<span className="text-success ms-1 fs-12"><i className="ti ti-chevron-up"></i>10.14%</span></span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex flex-wrap gap-3 text-end">
                                                        <div>
                                                            <span className="d-block text-muted mb-1">Today Change</span>
                                                            <span className="d-block fw-semibold">$112.09</span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block text-muted mb-1">Change In %</span>
                                                            <span className="d-block fw-semibold">+0.01%<span className="text-success ms-1 fs-12"><i className="ti ti-chevron-up"></i>0.21%</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div id="totalInvestmentsStats">
                                                    <Totalinvestments />
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={4}>
                                        <Card className="custom-card">
                                            <Card.Header className="card-header justify-content-between">
                                                <Card.Title>
                                                    My Stocks
                                                </Card.Title>
                                                <div className="d-flex flex-wrap gap-2">
                                                    <div className="mb-2 mb-sm-0">
                                                        <input className="form-control form-control-sm" type="text" placeholder="Search Any Stock" aria-label=".form-control-sm example" />
                                                    </div>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant='' className="btn btn-primary-light btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="dropdown-menu" role="menu">
                                                            <Dropdown.Item className="dropdown-item" href="#">New</Dropdown.Item>
                                                            <Dropdown.Item className="dropdown-item" href="#">Popular</Dropdown.Item>
                                                            <Dropdown.Item className="dropdown-item" href="#">Relevant</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </Card.Header>
                                            <Card.Body className="card-body p-0">
                                                <ul className="list-unstyled my-stocks-ul mb-0">
                                                    <li>
                                                        <div className="d-flex align-items-center flex-fill lh-1">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded bg-light p-2">
                                                                    <i className="bi bi-github text-dark fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="lh-1 flex-fill">
                                                                <span className="fw-semibold d-block mb-2">GTHB (Gituhb, Demo Inc.)</span>
                                                                <span className="d-block text-muted fs-12">16 Shares</span>
                                                            </div>
                                                            <div className="text-end me-3">
                                                                <span className="d-block fw-semibold mb-1">
                                                                    $12,390.02
                                                                </span>
                                                                <span className="d-block text-success"><i className="ti ti-arrow-narrow-up"></i>0.14%</span>
                                                            </div>
                                                            <div>
                                                                <span className="fs-14">
                                                                    <i className="bi bi-star-fill text-muted op-5"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center flex-fill lh-1">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded bg-light p-2">
                                                                    <i className="bi bi-twitter text-info fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="lh-1 flex-fill">
                                                                <span className="fw-semibold d-block mb-2">TTR (Twiter.com, Inc.)</span>
                                                                <span className="d-block text-muted fs-12">289 Shares</span>
                                                            </div>
                                                            <div className="text-end me-3">
                                                                <span className="d-block fw-semibold mb-1">
                                                                    $15,526.01
                                                                </span>
                                                                <span className="d-block text-success"><i className="ti ti-arrow-narrow-up"></i>2.14%</span>
                                                            </div>
                                                            <div>
                                                                <span className="fs-14">
                                                                    <i className="bi bi-star text-muted op-5"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center flex-fill lh-1">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded bg-light p-2">
                                                                    <i className="bi bi-bootstrap-fill text-primary fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="lh-1 flex-fill">
                                                                <span className="fw-semibold d-block mb-2">BS (Boostrap, Inc.)</span>
                                                                <span className="d-block text-muted fs-12">325 shares</span>
                                                            </div>
                                                            <div className="text-end me-3">
                                                                <span className="d-block fw-semibold mb-1">
                                                                    $30,500.15
                                                                </span>
                                                                <span className="d-block text-danger"><i className="ti ti-arrow-narrow-down"></i>2.73%</span>
                                                            </div>
                                                            <div>
                                                                <span className="fs-14">
                                                                    <i className="bi bi-star-fill text-muted op-5"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center flex-fill lh-1">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded bg-light p-2">
                                                                    <i className="bi bi-windows text-success fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="lh-1 flex-fill">
                                                                <span className="fw-semibold d-block mb-2">MS (Micorsoft, Inc.)</span>
                                                                <span className="d-block text-muted fs-12">1,523 shares</span>
                                                            </div>
                                                            <div className="text-end me-3">
                                                                <span className="d-block fw-semibold mb-1">
                                                                    $1,80,520.02
                                                                </span>
                                                                <span className="d-block text-success"><i className="ti ti-arrow-narrow-up"></i>8.63%</span>
                                                            </div>
                                                            <div>
                                                                <span className="fs-14">
                                                                    <i className="bi bi-star text-muted op-5"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center flex-fill lh-1">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded bg-light p-2">
                                                                    <i className="bi bi-apple text-warning fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="lh-1 flex-fill">
                                                                <span className="fw-semibold d-block mb-2">AAPL (Appil, Inc.)</span>
                                                                <span className="d-block text-muted fs-12">30 shares</span>
                                                            </div>
                                                            <div className="text-end me-3">
                                                                <span className="d-block fw-semibold mb-1">
                                                                    $21,093.20
                                                                </span>
                                                                <span className="d-block text-danger"><i className="ti ti-arrow-narrow-down"></i>4.10%</span>
                                                            </div>
                                                            <div>
                                                                <span className="fs-14">
                                                                    <i className="bi bi-star-fill text-muted op-5"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="d-flex align-items-center flex-fill lh-1">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded bg-light p-2">
                                                                    <i className="bi bi-currency-bitcoin text-danger fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="lh-1 flex-fill">
                                                                <span className="fw-semibold d-block mb-2">Bitcoin (Bioset Coin, Inc.)</span>
                                                                <span className="d-block text-muted fs-12">118 shares</span>
                                                            </div>
                                                            <div className="text-end me-3">
                                                                <span className="d-block fw-semibold mb-1">
                                                                    $14,245.23
                                                                </span>
                                                                <span className="d-block text-success"><i className="ti ti-arrow-narrow-up"></i>0.79%</span>
                                                            </div>
                                                            <div>
                                                                <span className="fs-14">
                                                                    <i className="bi bi-star-fill text-muted op-5"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={12}>
                                        <h6 className="fw-semibold mb-3">
                                            Trending Stocks :
                                        </h6>
                                        <Row>
                                            <Col xxl={2} xl={4} lg={6} md={6} sm={12}>
                                                <div className="p-3 card custom-card border bg-white rounded">
                                                    <div className="d-flex gap-2 flex-wrap align-items-center justify-content-between mb-3">
                                                        <div className="d-flex flex-fill align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded bg-light p-2">
                                                                    <i className="bi bi-apple text-muted fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="lh-1">
                                                                <span className="fw-semibold d-block mb-2 text-default">Apple</span>
                                                                <span className="d-block text-muted fs-12">$12,289.44</span>
                                                            </div>
                                                        </div>
                                                        <div className="text-success fs-12 text-end">
                                                            <span className="d-block">0.14%<i className="ti ti-arrow-bear-right"></i></span>
                                                            <span className="d-block">+$1,780.80</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                        <button type="button" className="btn btn-sm btn-light flex-fill">Short</button>
                                                        <button type="button" className="btn btn-sm btn-primary-light flex-fill">Buy</button>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xxl={2} xl={4} lg={6} md={6} sm={12}>
                                                <div className="p-3 card custom-card border bg-white rounded">
                                                    <div className="d-flex gap-2 flex-wrap align-items-center justify-content-between mb-3">
                                                        <div className="d-flex flex-fill align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded bg-light p-2">
                                                                    <i className="bi bi-currency-bitcoin text-warning fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="lh-1">
                                                                <span className="fw-semibold d-block mb-2 text-default">Bitcoin</span>
                                                                <span className="d-block text-muted fs-12">$58,151.02</span>
                                                            </div>
                                                        </div>
                                                        <div className="text-success fs-12 text-end">
                                                            <span className="d-block">2.14%<i className="ti ti-arrow-bear-right"></i></span>
                                                            <span className="d-block">+$5,745.62</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                        <button type="button" className="btn btn-sm btn-light flex-fill">Short</button>
                                                        <button type="button" className="btn btn-sm btn-primary-light flex-fill">Buy</button>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xxl={2} xl={4} lg={6} md={6} sm={12}>
                                                <div className="p-3 card custom-card border bg-white rounded">
                                                    <div className="d-flex gap-2 flex-wrap align-items-center justify-content-between mb-3">
                                                        <div className="d-flex flex-fill align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded bg-light p-2">
                                                                    <i className="bi bi-card-list text-success fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="lh-1">
                                                                <span className="fw-semibold d-block mb-2 text-default">Tesla</span>
                                                                <span className="d-block text-muted fs-12">$14,452.36</span>
                                                            </div>
                                                        </div>
                                                        <div className="text-success fs-12 text-end">
                                                            <span className="d-block">4.02%<i className="ti ti-arrow-bear-right"></i></span>
                                                            <span className="d-block">+$4,125.63</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                        <button type="button" className="btn btn-sm btn-light flex-fill">Short</button>
                                                        <button type="button" className="btn btn-sm btn-primary-light flex-fill">Buy</button>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xxl={2} xl={4} lg={6} md={6} sm={12}>
                                                <div className="p-3 card custom-card border bg-white rounded">
                                                    <div className="d-flex gap-2 flex-wrap align-items-center justify-content-between mb-3">
                                                        <div className="d-flex flex-fill align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded bg-light p-2">
                                                                    <i className="bi bi-gift text-primary fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="lh-1">
                                                                <span className="fw-semibold d-block mb-2 text-default">Amazon</span>
                                                                <span className="d-block text-muted fs-12">$63,251.11</span>
                                                            </div>
                                                        </div>
                                                        <div className="text-success fs-12 text-end">
                                                            <span className="d-block">5.14%<i className="ti ti-arrow-bear-right"></i></span>
                                                            <span className="d-block">+$936.30</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                        <button type="button" className="btn btn-sm btn-light flex-fill">Short</button>
                                                        <button type="button" className="btn btn-sm btn-primary-light flex-fill">Buy</button>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xxl={2} xl={4} lg={6} md={6} sm={12}>
                                                <div className="p-3 card custom-card border bg-white rounded">
                                                    <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
                                                        <div className="d-flex flex-fill align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded bg-light p-2">
                                                                    <i className="bi bi-truck text-danger fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="lh-1">
                                                                <span className="fw-semibold d-block mb-2 text-default">Aliexpress</span>
                                                                <span className="d-block text-muted fs-12">$5,401.50</span>
                                                            </div>
                                                        </div>
                                                        <div className="text-success fs-12 text-end">
                                                            <span className="d-block">3.32%<i className="ti ti-arrow-bear-right"></i></span>
                                                            <span className="d-block">+$4,360.65</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                        <button type="button" className="btn btn-sm btn-light flex-fill">Short</button>
                                                        <button type="button" className="btn btn-sm btn-primary-light flex-fill">Buy</button>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col xxl={2} xl={4} lg={6} md={6} sm={12}>
                                                <div className="p-3 card custom-card border bg-white rounded">
                                                    <div className="d-flex flex-wrap align-items-center justify-content-between mb-3">
                                                        <div className="d-flex flex-fill align-items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded bg-light p-2">
                                                                    <i className="bi bi-phone text-secondary fs-18"></i>
                                                                </span>
                                                            </div>
                                                            <div className="lh-1">
                                                                <span className="fw-semibold d-block mb-2 text-default">Samsung</span>
                                                                <span className="d-block text-muted fs-12">$10,732.12</span>
                                                            </div>
                                                        </div>
                                                        <div className="text-success fs-12 text-end">
                                                            <span className="d-block">1.24%<i className="ti ti-arrow-bear-right"></i></span>
                                                            <span className="d-block">+$3,221.29</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex gap-2">
                                                        <button type="button" className="btn btn-sm btn-light flex-fill">Short</button>
                                                        <button type="button" className="btn btn-sm btn-primary-light flex-fill">Buy</button>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={5}>
                                        <Card className="custom-card">
                                            <Card.Header className="card-header justify-content-between">
                                                <Card.Title>
                                                    Transaction History
                                                </Card.Title>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant='' className="btn btn-primary-light btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                        All<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="dropdown-menu" role="menu">
                                                        <Dropdown.Item href="#">Buy</Dropdown.Item>
                                                        <Dropdown.Item href="#">Sell</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </Card.Header>
                                            <Card.Body>
                                                <div className="table-responsive">
                                                    <Table bordered className="table text-nowrap  border-primary">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Symbol</th>
                                                                <th scope="col">Date</th>
                                                                <th scope="col">Type</th>
                                                                <th scope="col">Amount</th>
                                                                <th scope="col">Shares</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">
                                                                    EPA:THI
                                                                </th>
                                                                <td>
                                                                    12-06-2023
                                                                </td>
                                                                <td>
                                                                    <span className="badge bg-primary">Buy</span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-danger">-$1,290</span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-success">+20</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    EPA:SCB
                                                                </th>
                                                                <td>
                                                                    11-06-2023
                                                                </td>
                                                                <td>
                                                                    <span className="badge bg-primary">Buy</span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-danger">-$2,150</span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-success">+15</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    EPA:CGIO
                                                                </th>
                                                                <td>
                                                                    11-06-2023
                                                                </td>
                                                                <td>
                                                                    <span className="badge bg-warning">Sell</span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-success">+$22,625</span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-danger">-12</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    EPA:NTIX
                                                                </th>
                                                                <td>
                                                                    05-06-2023
                                                                </td>
                                                                <td>
                                                                    <span className="badge bg-primary">Buy</span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-danger">-$3,680</span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-success">+36</span>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    EPA:MOD
                                                                </th>
                                                                <td>
                                                                    20-05-2023
                                                                </td>
                                                                <td>
                                                                    <span className="badge bg-warning">Sell</span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-success">+$30,750</span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-danger">-25</span>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xl={7}>
                                        <Card className="custom-card">
                                            <Card.Header className="card-header justify-content-between">
                                                <Card.Title>
                                                    Market Movers
                                                </Card.Title>
                                                <div className="d-flex flex-wrap gap-2">
                                                    <div className="me-2">
                                                        <input className="form-control form-control-sm" type="text" placeholder="Search Any Stock" aria-label=".form-control-sm example" />
                                                    </div>
                                                    <Dropdown>
                                                        <Dropdown.Toggle variant='' className="btn btn-primary-light btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu className="dropdown-menu" role="menu">
                                                            <Dropdown.Item href="#">New</Dropdown.Item>
                                                            <Dropdown.Item href="#">Popular</Dropdown.Item>
                                                            <Dropdown.Item href="#">Relevant</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </Card.Header>
                                            <Card.Body>
                                                <div className="table-responsive">
                                                    <table className="table text-nowrap table-bordered border-primary">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Symbol</th>
                                                                <th scope="col">Name</th>
                                                                <th scope="col">Price</th>
                                                                <th scope="col">1D Change</th>
                                                                <th scope="col">1D Return %</th>
                                                                <th scope="col">Volume</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">
                                                                    APPL
                                                                </th>
                                                                <td>
                                                                    App1e Inc.<span className="fw-normal text-primary fs-10 ms-1">NASDAQ</span>
                                                                </td>
                                                                <td>
                                                                    <span>$1,116.90</span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-success">$28.9<i className="ti ti-arrow-bear-right"></i></span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-success">6.8%</span>
                                                                </td>
                                                                <td>
                                                                    12,389.30
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    TTR
                                                                </th>
                                                                <td>
                                                                    Twiter.com Inc.<span className="fw-normal text-primary fs-10 ms-1">NYSE</span>
                                                                </td>
                                                                <td>
                                                                    <span>$993.21</span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-success">$11.6<i className="ti ti-arrow-bear-right"></i></span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-success">10.25%</span>
                                                                </td>
                                                                <td>
                                                                    32,125.03
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    BS
                                                                </th>
                                                                <td>
                                                                    Boostrap.com.<span className="fw-normal text-primary fs-10 ms-1">NSE</span>
                                                                </td>
                                                                <td>
                                                                    <span>$11.00</span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-danger">$16.0<i className="ti ti-arrow-narrow-down"></i></span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-danger">9.0%</span>
                                                                </td>
                                                                <td>
                                                                    27,911.16
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    NFLX
                                                                </th>
                                                                <td>
                                                                    Netfilx.com Inc.<span className="fw-normal text-primary fs-10 ms-1">LSE</span>
                                                                </td>
                                                                <td>
                                                                    <span>$161.72</span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-danger">$9.8<i className="ti ti-arrow-narrow-down"></i></span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-danger">17.8%</span>
                                                                </td>
                                                                <td>
                                                                    27,161.89
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th scope="row">
                                                                    ION
                                                                </th>
                                                                <td>
                                                                    Ion.com Corp.<span className="fw-normal text-primary fs-10 ms-1">FSX</span>
                                                                </td>
                                                                <td>
                                                                    <span>$52.65</span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-success">$14.2<i className="ti ti-arrow-bear-right"></i></span>
                                                                </td>
                                                                <td>
                                                                    <span className="text-success">30.2%</span>
                                                                </td>
                                                                <td>
                                                                    65,785.01
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="2" className="p-0 border-0" id="stocks-market" role="tabpanel">
                                <Row>
                                    <Col xxl={2} xl={4} lg={6} md={6} sm={12}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar bg-danger-transparent">
                                                                <i className="ti ti-trending-down fs-18"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block fw-semibold">Nifty 50</span>
                                                            <span className="d-block">$12,289.44</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-end text-danger fs-12">
                                                        <span className="d-block">-0.14%</span>
                                                        <span className="d-block">-$1,780.80</span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={2} xl={4} lg={6} md={6} sm={12}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar bg-danger-transparent">
                                                                <i className="ti ti-trending-down fs-18"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block fw-semibold">SENSEX</span>
                                                            <span className="d-block">$12,289.44</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-end text-danger fs-12">
                                                        <span className="d-block">-0.14%</span>
                                                        <span className="d-block">-$1,780.80</span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={2} xl={4} lg={6} md={6} sm={12}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar bg-success-transparent">
                                                                <i className="ti ti-trending-up fs-18"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block fw-semibold">DJIA</span>
                                                            <span className="d-block">$12,289.44</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-end text-danger fs-12">
                                                        <span className="d-block">-0.14%</span>
                                                        <span className="d-block">-$1,780.80</span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={2} xl={4} lg={6} md={6} sm={12}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar bg-danger-transparent">
                                                                <i className="ti ti-trending-up fs-18"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block fw-semibold">S&amp;P 500</span>
                                                            <span className="d-block">$12,289.44</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-end text-danger fs-12">
                                                        <span className="d-block">-0.14%</span>
                                                        <span className="d-block">-$1,780.80</span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={2} xl={4} lg={6} md={6} sm={12}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar bg-success-transparent">
                                                                <i className="ti ti-trending-up fs-18"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block fw-semibold">NASDAQ</span>
                                                            <span className="d-block">$12,289.44</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-end text-danger fs-12">
                                                        <span className="d-block">-0.14%</span>
                                                        <span className="d-block">-$1,780.80</span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={2} xl={4} lg={6} md={6} sm={12}>
                                        <Card className="custom-card">
                                            <Card.Body>
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar bg-success-transparent">
                                                                <i className="ti ti-trending-up fs-18"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block fw-semibold">NIFTY IT</span>
                                                            <span className="d-block">$12,289.44</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-end text-danger fs-12">
                                                        <span className="d-block">-0.14%</span>
                                                        <span className="d-block">-$1,780.80</span>
                                                    </div>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={12}>
                                        <Card className="custom-card">
                                            <Card.Header className="card-header justify-content-between">
                                                <Card.Title>
                                                    Market Cap
                                                </Card.Title>
                                                <div>
                                                    <input className="form-control form-control-sm" type="text" placeholder="Search Any Stock Here" aria-label=".form-control-sm example" />
                                                </div>
                                            </Card.Header>
                                            <Card.Body className="p-0">
                                                <Row>
                                                    <Col xl={7} className="border-end">
                                                        <div className="p-3">
                                                            <div className="d-flex flex-wrap alilgn-items-center justify-content-between">
                                                                <div className="d-flex flex-fill gap-3 ms-5">
                                                                    <div>
                                                                        <h5 className="fw-semibold text-primary">$12,390.02<span className="fs-12 ms-1 text-danger">0.14%<i className="ti ti-trending-down ms-1"></i></span></h5>
                                                                        <span className="d-block text-muted mb-1 fs-12"><span className="text-danger me-1">-89.75</span>. Today</span>
                                                                        <span className="d-block text-muted fs-11">Jun 17, 2023  11:25 AM  UTC +5:30</span>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex text-end">
                                                                    <div>
                                                                        <h6 className="fw-semibold">GITUHB</h6>
                                                                        <span className="d-block text-muted fs-11 mb-1">GTHB  INDEXNSE</span>
                                                                        <span className="d-block"><a href="#" className="text-primary fw-semibold">+ Compare</a></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div id="stocks-marketcap">
                                                                <Stocksmarketcap />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className="p-3">
                                                            <div className="table-responsive mb-5">
                                                                <table className="table text-nowrap table-borderless table-sm text-muted">
                                                                    <tbody>
                                                                        <tr>
                                                                            <th scope="row">Open</th>
                                                                            <td>125.80</td>
                                                                            <td>Volume</td>
                                                                            <td>1,253.20</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">High</th>
                                                                            <td>352.15</td>
                                                                            <td>Avg. Volume</td>
                                                                            <td>1.05M</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Low</th>
                                                                            <td>120.13</td>
                                                                            <td>52 Week High</td>
                                                                            <td>2569.25</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">Dividend Yield</th>
                                                                            <td>3.5%</td>
                                                                            <td>52 Week Low</td>
                                                                            <td>1586.20</td>
                                                                        </tr>
                                                                        <tr>
                                                                            <th scope="row">P/E Ratio</th>
                                                                            <td>25%</td>
                                                                            <td>Market Cap</td>
                                                                            <td>2.15Cr</td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                            <div>
                                                                <h6 className="fw-semibold mb-2">
                                                                    Market Depth:
                                                                </h6>
                                                                <Row>
                                                                    <Col xl={6}>
                                                                        <div className="table-responsive">
                                                                            <table className="table text-nowrap table-sm text-center table-borderless text-muted">
                                                                                <thead className="text-default bg-light">
                                                                                    <tr>
                                                                                        <th scope="col">Qty</th>
                                                                                        <th scope="col">Orders</th>
                                                                                        <th scope="col">Bid</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <span className="text-success">20</span>
                                                                                        </th>
                                                                                        <td>2</td>
                                                                                        <td>$12,908</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <span className="text-success">12</span>
                                                                                        </th>
                                                                                        <td>1</td>
                                                                                        <td>$20,632</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <span className="text-success">36</span>
                                                                                        </th>
                                                                                        <td>1</td>
                                                                                        <td>$19,102</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <span className="text-success">10</span>
                                                                                        </th>
                                                                                        <td>3</td>
                                                                                        <td>$16,650</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <span className="text-success">15</span>
                                                                                        </th>
                                                                                        <td>2</td>
                                                                                        <td>$18,850</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </Col>
                                                                    <Col xl={6}>
                                                                        <div className="table-responsive mb-3">
                                                                            <table className="table text-nowrap table-sm text-center table-borderless text-muted">
                                                                                <thead className="text-default bg-light">
                                                                                    <tr>
                                                                                        <th scope="col">Qty</th>
                                                                                        <th scope="col">Orders</th>
                                                                                        <th scope="col">Bid</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <span className="text-danger">20</span>
                                                                                        </th>
                                                                                        <td>2</td>
                                                                                        <td>$12,908</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <span className="text-danger">12</span>
                                                                                        </th>
                                                                                        <td>1</td>
                                                                                        <td>$20,632</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <span className="text-danger">36</span>
                                                                                        </th>
                                                                                        <td>1</td>
                                                                                        <td>$19,102</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <span className="text-danger">10</span>
                                                                                        </th>
                                                                                        <td>3</td>
                                                                                        <td>$16,650</td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <th scope="row">
                                                                                            <span className="text-danger">15</span>
                                                                                        </th>
                                                                                        <td>2</td>
                                                                                        <td>$18,850</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                        <div className="d-flex gap-3">
                                                                            <button type="button" className="flex-fill btn btn-sm btn-primary btn-wave">Buy</button>
                                                                            <button type="button" className="flex-fill btn btn-sm btn-secondary btn-wave">Sell</button>
                                                                        </div>
                                                                    </Col>
                                                                </Row>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
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

export default Stocks;
