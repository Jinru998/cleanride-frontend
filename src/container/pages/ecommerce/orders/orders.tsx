import { FC, Fragment } from 'react';
import { Button, Card, Col, Dropdown, Form, Pagination, Row } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import ecommerceimg1 from "../../../../assets/images/ecommerce/png/1.png";
import ecommerceimg2 from "../../../../assets/images/ecommerce/png/2.png";
import ecommerceimg3 from "../../../../assets/images/ecommerce/png/3.png";
import ecommerceimg4 from "../../../../assets/images/ecommerce/png/4.png";
import ecommerceimg7 from "../../../../assets/images/ecommerce/png/7.png";
import ecommerceimg8 from "../../../../assets/images/ecommerce/png/8.png";
import ecommerceimg9 from "../../../../assets/images/ecommerce/png/9.png";
import ecommerceimg10 from "../../../../assets/images/ecommerce/png/10.png";
import ecommerceimg11 from "../../../../assets/images/ecommerce/png/11.png";
import ecommerceimg13 from "../../../../assets/images/ecommerce/png/13.png";
import ecommerceimg14 from "../../../../assets/images/ecommerce/png/14.png";
import ecommerceimg16 from "../../../../assets/images/ecommerce/png/16.png";

interface OrdersProps { }

const Orders: FC<OrdersProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Orders" heading="Ecommerce" active="Orders" />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="card-body d-flex align-items-center flex-wrap">
                            <div className="flex-fill">
                                <span className="mb-0 fs-14 text-muted">Total number of orders placed upto now : <span className="fw-semibold text-success">28</span></span>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle variant='' className="btn btn-light dropdown-toggle m-1" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sort By
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <Dropdown.Item className="dropdown-item" href="#">Date</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-item" href="#">Price</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-item" href="#">Category</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className="d-flex align-items-center m-1" role="search">
                                <Form.Control className="form-control" type="search" placeholder="Search" aria-label="Search" />
                                <Button variant='' className="btn btn-light ms-2" type="submit">Search</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="card-header d-block">
                            <div className="d-sm-flex d-block align-items-center">
                                <div className="me-2">
                                    <span className="avatar bg-light avatar-md mb-1">
                                        <img src={ecommerceimg1} alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link to="#">
                                        <span className="fs-14 fw-semibold">Denim Zep.Co Sweat Shirt</span>
                                    </Link>
                                    <span className="d-block text-success">$1,299</span>
                                </div>
                                <div className="text-sm-center">
                                    <span className="fs-14 fw-semibold">Order Id :</span>
                                    <span className="d-sm-block">#SPK-1203</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="orders-delivery-address">
                                    <p className="mb-1 fw-semibold">Delivery Address</p>
                                    <p className="text-muted mb-0">
                                        mig-1-11,monroe street,georgetown,Washington D.C
                                    </p>
                                </div>
                                <div className="delivery-date text-center ms-auto">
                                    <span className="fs-18 text-primary fw-bold">13</span>
                                    <span className="fw-semibold">Dec</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer d-sm-flex d-block align-items-center justify-content-between">
                            <div><span className="text-muted me-2">Status:</span><span className="badge bg-success-transparent">Shipped</span></div>
                            <div className="mt-sm-0 mt-2">
                                <Button variant='' className="btn btn-sm btn-danger-light">Cancel Order</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="card-header d-block">
                            <div className="d-sm-flex d-block align-items-center ">
                                <div className="me-2">
                                    <span className="avatar bg-light avatar-md mb-1">
                                        <img src={ecommerceimg2} alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link to="#">
                                        <span className="fs-14 fw-semibold">Jimmy Lolfiger Jacket</span>
                                    </Link>
                                    <span className="d-block text-success">$499</span>
                                </div>
                                <div className="text-sm-center">
                                    <span className="fs-14 fw-semibold">Order Id :</span>
                                    <span className="d-sm-block">#SPK-2936</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="orders-delivery-address">
                                    <p className="mb-1 fw-semibold">Delivery Address</p>
                                    <p className="text-muted mb-0">
                                        mig-1-11,monroe street,georgetown,Washington D.C
                                    </p>
                                </div>
                                <div className="delivery-date text-center ms-auto">
                                    <span className="fs-18 text-primary fw-bold">25</span>
                                    <span className="fw-semibold">Nov</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer d-sm-flex d-block align-items-center justify-content-between">
                            <div>
                                <span className="text-muted me-2">Status:</span>
                                <span className="badge bg-primary-transparent">Confirmed</span>
                            </div>
                            <div className="mt-sm-0 mt-2">
                                <Button variant='' className="btn btn-sm btn-danger-light">Cancel Order</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header
                            className="card-header d-block">
                            <div className="d-sm-flex d-block align-items-center ">
                                <div className="me-2">
                                    <span className="avatar bg-light avatar-md mb-1">
                                        <img src={ecommerceimg3} alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link to="#">
                                        <span className="fs-14 fw-semibold">Louie Phillippe Coat</span>
                                    </Link>
                                    <span className="d-block text-success">$1,899</span>
                                </div>
                                <div className="text-sm-center">
                                    <span className="fs-14 fw-semibold">Order Id :</span>
                                    <span className="d-sm-block">#SPK-1855</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="orders-delivery-address">
                                    <p className="mb-1 fw-semibold">Delivery Address</p>
                                    <p className="text-muted mb-0">
                                        mig-1-11,monroe street,georgetown,Washington D.C
                                    </p>
                                </div>
                                <div className="ms-auto">
                                    <span className="badge bg-success">Delivered</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer d-sm-flex d-block justify-content-between align-items-center">
                            <div className="fs-11">
                                <span>Delivered on:</span>
                                <span className="fw-semibold">29,Oct 2022 - 12:47PM</span>
                            </div>
                            <div className="mt-sm-0 mt-2">
                                <Button variant='' className="btn btn-sm btn-primary-light">Rate Product<i className="bi bi-star-fill ms-2 fs-12 text-warning"></i></Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="card-header d-block">
                            <div className="d-sm-flex d-block align-items-center ">
                                <div className="me-2">
                                    <span className="avatar bg-light avatar-md mb-1">
                                        <img src={ecommerceimg4} alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link to="#">
                                        <span className="fs-14 fw-semibold">Denim Corp</span>
                                    </Link>
                                    <span className="d-block text-success">$2,499</span>
                                </div>
                                <div className="text-sm-center">
                                    <span className="fs-14 fw-semibold">Order Id :</span>
                                    <span className="d-sm-block">#SPK-1234</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="orders-delivery-address">
                                    <p className="mb-1 fw-semibold">Delivery Address</p>
                                    <p className="text-muted mb-0">
                                        mig-1-11,monroe street,georgetown,Washington D.C
                                    </p>
                                </div>
                                <div className="ms-auto">
                                    <span className="badge bg-danger">Cancelled</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            <div className="float-end">
                                <Button variant='' className="btn btn-sm btn-light">Buy Now</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="card-header d-block">
                            <div className="d-sm-flex d-block align-items-center ">
                                <div className="me-2">
                                    <span className="avatar bg-light avatar-md mb-1">
                                        <img src={ecommerceimg13} alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link to="#">
                                        <span className="fs-14 fw-semibold">Orange Watch</span>
                                    </Link>
                                    <span className="d-block text-success">$249</span>
                                </div>
                                <div className="text-sm-center">
                                    <span className="fs-14 fw-semibold">Order Id :</span>
                                    <span className="d-sm-block">#SPK-1645</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="orders-delivery-address">
                                    <p className="mb-1 fw-semibold">Delivery Address</p>
                                    <p className="text-muted mb-0">
                                        mig-1-11,monroe street,georgetown,Washington D.C
                                    </p>
                                </div>
                                <div className="ms-auto">
                                    <span className="badge bg-success">Delivered</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer d-sm-flex d-block justify-content-between align-items-center">
                            <div className="fs-11">
                                <span>Delivered on:</span>
                                <span className="fw-semibold">4,Nov 2022 - 10:24AM</span>
                            </div>
                            <div className="mt-sm-0 mt-2">
                                <Button variant='' className="btn btn-sm btn-primary-light">Rate Product<i className="bi bi-star-fill ms-2 fs-12 text-warning"></i></Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="card-header d-block">
                            <div className="d-sm-flex d-block align-items-center ">
                                <div className="me-2">
                                    <span className="avatar bg-light avatar-md mb-1">
                                        <img src={ecommerceimg8} alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link to="#">
                                        <span className="fs-14 fw-semibold">Pufa Sweat Shirt</span>
                                    </Link>
                                    <span className="d-block text-success">$2,399</span>
                                </div>
                                <div className="text-sm-center">
                                    <span className="fs-14 fw-semibold">Order Id :</span>
                                    <span className="d-sm-block">#SPK-1346</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="orders-delivery-address">
                                    <p className="mb-1 fw-semibold">Delivery Address</p>
                                    <p className="text-muted mb-0">
                                        mig-1-11,monroe street,georgetown,Washington D.C
                                    </p>
                                </div>
                                <div className="delivery-date text-center ms-auto">
                                    <span className="fs-18 text-primary fw-bold">16</span>
                                    <span className="fw-semibold">Jan</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer d-sm-flex d-block align-items-center justify-content-between">
                            <div><span className="text-muted me-2">Status:</span><span className="badge bg-success-transparent">Shipped</span></div>
                            <div className="mt-sm-0 mt-2">
                                <Button variant='' className="btn btn-sm btn-danger-light">Cancel Order</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="card-header d-block">
                            <div className="d-sm-flex d-block align-items-center ">
                                <div className="me-2">
                                    <span className="avatar bg-light avatar-md mb-1">
                                        <img src={ecommerceimg9} alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link to="#">
                                        <span className="fs-14 fw-semibold">Bluberry Co.In</span>
                                    </Link>
                                    <span className="d-block text-success">$499</span>
                                </div>
                                <div className="text-sm-center">
                                    <span className="fs-14 fw-semibold">Order Id :</span>
                                    <span className="d-sm-block">#SPK-2936</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="orders-delivery-address">
                                    <p className="mb-1 fw-semibold">Delivery Address</p>
                                    <p className="text-muted mb-0">
                                        mig-1-11,monroe street,georgetown,Washington D.C
                                    </p>
                                </div>
                                <div className="delivery-date text-center ms-auto">
                                    <span className="fs-18 text-primary fw-bold">19</span>
                                    <span className="fw-semibold">Dec</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer d-sm-flex d-block align-items-center justify-content-between">
                            <div><span className="text-muted me-2">Status:</span><span className="badge bg-warning-transparent">Out For Delivery</span></div>
                            <div className="mt-sm-0 mt-2">
                                <Button variant='' className="btn btn-sm btn-danger-light">Cancel Order</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="card-header d-block">
                            <div className="d-sm-flex d-block align-items-center ">
                                <div className="me-2">
                                    <span className="avatar bg-light avatar-md mb-1">
                                        <img src={ecommerceimg11} alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link to="#">
                                        <span className="fs-14 fw-semibold">Garage & Co</span>
                                    </Link>
                                    <span className="d-block text-success">$499</span>
                                </div>
                                <div className="text-sm-center">
                                    <span className="fs-14 fw-semibold">Order Id :</span>
                                    <span className="d-sm-block">#SPK-1376</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="orders-delivery-address">
                                    <p className="mb-1 fw-semibold">Delivery Address</p>
                                    <p className="text-muted mb-0">
                                        mig-1-11,monroe street,georgetown,Washington D.C
                                    </p>
                                </div>
                                <div className="delivery-date text-center ms-auto">
                                    <span className="fs-18 text-primary fw-bold">24</span>
                                    <span className="fw-semibold">Dec</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className="card-footer d-sm-flex d-block align-items-center justify-content-between">
                            <div><span className="text-muted me-2">Status:</span><span className="badge bg-success-transparent">Shipped</span></div>
                            <div className="mt-sm-0 mt-2">
                                <Button variant='' className="btn btn-sm btn-danger-light">Cancel Order</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="card-header d-block">
                            <div className="d-sm-flex d-block align-items-center ">
                                <div className="me-2">
                                    <span className="avatar bg-light avatar-md mb-1">
                                        <img src={ecommerceimg14} alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link to="#">
                                        <span className="fs-14 fw-semibold">Hadimo Smart Watch(44mm)</span>
                                    </Link>
                                    <span className="d-block text-success">$499</span>
                                </div>
                                <div className="text-sm-center">
                                    <span className="fs-14 fw-semibold">Order Id :</span>
                                    <span className="d-sm-block">#SPK-2903</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="orders-delivery-address">
                                    <p className="mb-1 fw-semibold">Delivery Address</p>
                                    <p className="text-muted mb-0">
                                        mig-1-11,monroe street,georgetown,Washington D.C
                                    </p>
                                </div>
                                <div className="delivery-date text-center ms-auto">
                                    <span className="fs-18 text-primary fw-bold">16</span>
                                    <span className="fw-semibold">Nov</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer d-sm-flex d-block align-items-center justify-content-between">
                            <div>
                                <span className="text-muted me-2">Status:</span>
                                <span className="badge bg-primary-transparent">Confirmed</span>
                            </div>
                            <div className="mt-sm-0 mt-2">
                                <Button variant='' className="btn btn-sm btn-danger-light">Cancel Order</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="card-header d-block">
                            <div className="d-sm-flex d-block align-items-center ">
                                <div className="me-2">
                                    <span className="avatar bg-light avatar-md mb-1">
                                        <img src={ecommerceimg7} alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link to="#">
                                        <span className="fs-14 fw-semibold">BMW Denim JAcket</span>
                                    </Link>
                                    <span className="d-block text-success">$1,899</span>
                                </div>
                                <div className="text-sm-center">
                                    <span className="fs-14 fw-semibold">Order Id :</span>
                                    <span className="d-sm-block">#SPK-1976</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="orders-delivery-address">
                                    <p className="mb-1 fw-semibold">Delivery Address</p>
                                    <p className="text-muted mb-0">
                                        mig-1-11,monroe street,georgetown,Washington D.C
                                    </p>
                                </div>
                                <div className="ms-auto">
                                    <span className="badge bg-success">Delivered</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer d-sm-flex d-block justify-content-between align-items-center">
                            <div className="fs-11">
                                <span>Delivered on:</span>
                                <span className="fw-semibold">04,Nov 2022 - 03:12PM</span>
                            </div>
                            <div className="mt-sm-0 mt-2">
                                <Button variant='' className="btn btn-sm btn-primary-light">Rate Product<i className="bi bi-star-fill ms-2 fs-12 text-warning"></i></Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="card-header d-block">
                            <div className="d-sm-flex d-block align-items-center ">
                                <div className="me-2">
                                    <span className="avatar bg-light avatar-md mb-1">
                                        <img src={ecommerceimg16} alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link to="#">
                                        <span className="fs-14 fw-semibold">Totoya Watch For Kids</span>
                                    </Link>
                                    <span className="d-block text-success">$799</span>
                                </div>
                                <div className="text-sm-center">
                                    <span className="fs-14 fw-semibold">Order Id :</span>
                                    <span className="d-sm-block">#SPK-8765</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="orders-delivery-address">
                                    <p className="mb-1 fw-semibold">Delivery Address</p>
                                    <p className="text-muted mb-0">
                                        mig-1-11,monroe street,georgetown,Washington D.C
                                    </p>
                                </div>
                                <div className="ms-auto">
                                    <span className="badge bg-danger">Cancelled</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            <div className="float-end">
                                <Button variant='' className="btn btn-sm btn-light">Buy Now</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={6} xxl={3} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="card-header d-block">
                            <div className="d-sm-flex align-items-center ">
                                <div className="me-2">
                                    <span className="avatar bg-light avatar-md mb-1">
                                        <img src={ecommerceimg10} alt="" />
                                    </span>
                                </div>
                                <div className="flex-fill">
                                    <Link to="#">
                                        <span className="fs-14 fw-semibold">Garage & Co</span>
                                    </Link>
                                    <span className="d-block text-success">$249</span>
                                </div>
                                <div className="text-sm-center">
                                    <span className="fs-14 fw-semibold">Order Id :</span>
                                    <span className="d-sm-block">#SPK-1645</span>
                                </div>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center">
                                <div className="orders-delivery-address">
                                    <p className="mb-1 fw-semibold">Delivery Address</p>
                                    <p className="text-muted mb-0">
                                        mig-1-11,monroe street,georgetown,Washington D.C
                                    </p>
                                </div>
                                <div className="ms-auto">
                                    <span className="badge bg-success">Delivered</span>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer d-sm-flex d-block justify-content-between align-items-center">
                            <div className="fs-11">
                                <span>Delivered on:</span>
                                <span className="fw-semibold">22,Oct 2022 - 05:15PM</span>
                            </div>
                            <div className="mt-sm-0 mt-2">
                                <Button variant='' className="btn btn-sm btn-primary-light">Rate Product<i className="bi bi-star-fill ms-2 fs-12 text-warning"></i></Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>

            <Pagination className=" justify-content-end">
                <Pagination.Item disabled href="#">Previous
                </Pagination.Item>
                <Pagination.Item href="#">1</Pagination.Item>
                <Pagination.Item href="#">2</Pagination.Item>
                <Pagination.Item href="#">3</Pagination.Item>
                <Pagination.Item href="#">Next
                </Pagination.Item>
            </Pagination>

        </Fragment>
    );
};

export default Orders;
