import { FC, Fragment } from 'react';
import { Card, Col, Row, } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import ecommereceimg1 from "../../../../assets/images/ecommerce/png/1.png";
import ecommereceimg7 from "../../../../assets/images/ecommerce/png/7.png";
import { Basicwizard } from './checkoutdata';

interface CheckoutProps { }

const Checkout: FC<CheckoutProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Checkout" heading="Ecommerce" active="Checkout" />
            <div className="container">
                <Row>
                    <Col xl={9}>
                        <Card className="custom-card">
                            <Card.Body className="card-body p-0 product-checkout">
                                <Basicwizard />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card">
                            <Card.Header>
                                <div className="card-title me-1">Order Summary</div><span className="badge bg-primary-transparent rounded-pill">02</span>
                            </Card.Header>
                            <Card.Body className="card-body p-0">
                                <ul className="list-group mb-0 border-0 rounded-0">
                                    <li className="list-group-item border-top-0 border-start-0 border-end-0">
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="me-2">
                                                <span className="avatar avatar-lg bg-light">
                                                    <img src={ecommereceimg1} alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <p className="mb-0 fw-semibold">Blue sweatshirt</p>
                                                <p className="mb-0 text-muted fs-12">Quantity : 2  <span className="badge bg-success-transparent ms-3">30% Off</span></p>
                                            </div>
                                            <div>
                                                <p className="mb-0 text-end">
                                                    <Link aria-label="anchor" to="#">
                                                        <i className="ri-close-line fs-16 text-muted"></i>
                                                    </Link>
                                                </p>
                                                <p className="mb-0 fs-14 fw-semibold">$189<span className="ms-1 text-muted fs-11"><s>$329</s></span></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item  border-bottom border-block-end-dashed border-start-0 border-end-0">
                                        <div className="d-flex align-items-center flex-wrap">
                                            <div className="me-2">
                                                <span className="avatar avatar-lg bg-light">
                                                    <img src={ecommereceimg7} alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-fill">
                                                <p className="mb-0 fw-semibold">Denim Jacket</p>
                                                <p className="mb-0 text-muted fs-12">Quantity : 1  <span className="badge bg-success-transparent ms-3">10% Off</span></p>
                                            </div>
                                            <div>
                                                <p className="mb-0 text-end">
                                                    <Link aria-label="anchor" to="#">
                                                        <i className="ri-close-line fs-16 text-muted"></i>
                                                    </Link>
                                                </p>
                                                <p className="mb-0 fs-14 fw-semibold">$129<span className="ms-1 text-muted fs-11"><s>$139</s></span></p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="p-3 border-bottom border-block-end-dashed">
                                    <div className="d-flex align-items-center justify-content-between flex-wrap">
                                        <div className="fs-12 fw-semibold bg-primary-transparent p-1 rounded">SPRUKO25</div>
                                        <div className="text-success">COUPON APPLIED</div>
                                    </div>
                                </div>
                                <div className="p-3 border-bottom border-block-end-dashed">
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="text-muted op-7">Sub Total</div>
                                        <div className="fw-semibold fs-14">$318</div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="text-muted op-7">Discount</div>
                                        <div className="fw-semibold fs-14 text-success">10% - $31.8</div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between mb-3">
                                        <div className="text-muted op-7">Delivery Charges</div>
                                        <div className="fw-semibold fs-14 text-danger">- $29</div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="text-muted op-7">Service Tax (18%)</div>
                                        <div className="fw-semibold fs-14">- $45.29</div>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="fs-15">Total :</div>
                                        <div className="fw-semibold fs-16 text-dark"> $1,387</div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default Checkout;
