import { FC, Fragment } from 'react';
import { Accordion, Button, Card, Col, Row, Table } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import ecommerceimg1 from "../../../../assets/images/ecommerce/png/1.png";
import ecommerceimg11 from "../../../../assets/images/ecommerce/png/11.png";
import ecommerceimg14 from "../../../../assets/images/ecommerce/png/14.png";
import ecommerceimg32 from "../../../../assets/images/ecommerce/png/32.png";
import ecommerceimg33 from "../../../../assets/images/ecommerce/png/33.png";
import ecommerceimg34 from "../../../../assets/images/ecommerce/png/34.png";
import face9 from "../../../../assets/images/faces/9.jpg";

interface OrderdetailsProps { }

const Orderdetails: FC<OrderdetailsProps> = () => {
    const print = () => {
        window.print();
    };
    return (
        <Fragment>
            <Pageheader title="Order Details" heading="Ecommerce" active="Order Details" />
            <Row>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="d-flex justify-content-between">
                                    <Card.Title>
                                        Order No - <span className="text-primary">#SPK-1023</span>
                                    </Card.Title>
                                    <div>
                                        <span className="badge bg-primary-transparent">
                                            Estimated delivery : 30,Nov 2022
                                        </span>
                                    </div>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <div className="table-responsive">
                                        <Table className="table text-nowrap">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Item</th>
                                                    <th scope="col">Tracking No</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope="col">Total Price</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-3">
                                                                <span className="avatar avatar-xxl bg-light">
                                                                    <img src={ecommerceimg14} alt="" />
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <div className="mb-1 fs-14 fw-semibold">
                                                                    <Link to="#">Orange Watch Series 4</Link>
                                                                </div>
                                                                <div className="mb-1">
                                                                    <span className="me-1">Dial Size:</span><span className="text-muted">44mm</span>
                                                                </div>
                                                                <div className="mb-1">
                                                                    <span className="me-1">Color:</span><span className="text-muted">Metallic Black</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td><Link to="#" className="text-primary">SPK1218153635</Link></td>
                                                    <td>
                                                        <span className="fs-15 fw-semibold">$1,249</span>
                                                    </td>
                                                    <td>1</td>
                                                    <td>$1,249</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-3">
                                                                <span className="avatar avatar-xxl bg-light">
                                                                    <img src={ecommerceimg1} alt="" />
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <div className="mb-1 fs-14 fw-semibold">
                                                                    <Link to="#">DapZem & Co Sweat Shirt</Link>
                                                                </div>
                                                                <div className="mb-1">
                                                                    <span className="me-1">Size:</span><span className="text-muted">Large</span>
                                                                </div>
                                                                <div className="mb-1">
                                                                    <span className="me-1">Color:</span><span className="text-muted">Grey<span className="badge bg-success ms-3">In Offer</span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td><Link to="#" className="text-primary">SPK3789423789</Link></td>
                                                    <td>
                                                        <span className="fs-15 fw-semibold">$499</span>
                                                    </td>
                                                    <td>2</td>
                                                    <td>$998</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="me-3">
                                                                <span className="avatar avatar-xxl bg-light">
                                                                    <img src={ecommerceimg11} alt="" />
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <div className="mb-1 fs-14 fw-semibold">
                                                                    <Link to="#">Denim Corporation Sweat Shirt</Link>
                                                                </div>
                                                                <div className="mb-1">
                                                                    <span className="me-1">Size:</span><span className="text-muted">Large</span>
                                                                </div>
                                                                <div className="mb-1">
                                                                    <span className="me-1">Color:</span><span className="text-muted">Orange<span className="badge bg-info ms-3">32% Off</span></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td><Link to="#" className="text-primary">SPK1120324532</Link></td>
                                                    <td>
                                                        <span className="fs-15 fw-semibold">$799</span>
                                                    </td>
                                                    <td>1</td>
                                                    <td>$799</td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}></td>
                                                    <td colSpan={2}>
                                                        <div className="fw-semibold">Total Items :</div>
                                                    </td>
                                                    <td>
                                                        04
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}></td>
                                                    <td colSpan={2}>
                                                        <div className="fw-semibold">Sub Total :</div>
                                                    </td>
                                                    <td>
                                                        $3,100
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}></td>
                                                    <td colSpan={2}>
                                                        <div className="fw-semibold">Applied Coupon :</div>
                                                    </td>
                                                    <td>
                                                        <span className="badge bg-success-transparent">SPKFIR</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}></td>
                                                    <td colSpan={2}>
                                                        <div className="fw-semibold">Delivery Fees :</div>
                                                    </td>
                                                    <td>
                                                        <span className="text-danger">+$29</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}></td>
                                                    <td colSpan={2}>
                                                        <div className="fw-semibold">Total Saved :</div>
                                                    </td>
                                                    <td>
                                                        <span className="fs-14 fw-semibold text-success">$3,799</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={2}></td>
                                                    <td colSpan={2}>
                                                        <div className="fw-semibold">Total Price :</div>
                                                    </td>
                                                    <td>
                                                        <span className="fs-16 fw-semibold">$3,129</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </Card.Body>
                                <Card.Footer className="border-top-0">
                                    <div className="btn-list float-end">
                                        <Button variant='' className="btn btn-primary btn-wave btn-sm"
                                            onClick={() => print()}
                                        ><i className="ri-printer-line me-1 align-middle d-inline-block"></i>Print</Button>
                                        <Button variant='' className="btn btn-secondary btn-wave btn-sm"><i className="ri-share-forward-line me-1 align-middle d-inline-block"></i>Share Details</Button>
                                    </div>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={3}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        User Details
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className="p-0">
                                    <div className="d-flex align-items-center border-bottom border-block-end-dashed p-3 flex-wrap">
                                        <div className="me-2">
                                            <span className="avatar avatar-lg avatar-rounded">
                                                <img src={face9} alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-fill">
                                            <p className="mb-0">Json Taylor</p>
                                            <p className="mb-0 text-muted fs-12">jsontaylor2135@gmail.com</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-primary-transparent">Prime User</span>
                                        </div>
                                    </div>
                                    <div className="p-3 border-bottom border-block-end-dashed">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <span className="fs-14 fw-semibold">Delivery address :</span>
                                            <Button variant='' className="btn btn-icon btn-wave btn-primary btn-sm"><i className="ri-pencil-line"></i></Button>
                                        </div>
                                        <p className="mb-2 text-muted"><span className="fw-semibold text-default">Landmark : </span>MIG-1-11</p>
                                        <p className="mb-2 text-muted"><span className="fw-semibold text-default">Street : </span>Monroe Street</p>
                                        <p className="mb-2 text-muted"><span className="fw-semibold text-default">City : </span>Georgetown</p>
                                        <p className="mb-2 text-muted"><span className="fw-semibold text-default">State : </span>Washington,D.C</p>
                                        <p className="mb-2 text-muted"><span className="fw-semibold text-default">Country : </span>USA</p>
                                        <p className="mb-0 text-muted"><span className="fw-semibold text-default">Zipcode : </span>200071</p>
                                    </div>
                                    <div className="p-3 border-bottom border-block-end-dashed">
                                        <div className="mb-3">
                                            <span className="fs-14 fw-semibold">Send updates to :</span>
                                        </div>
                                        <p className="mb-2 text-muted">
                                            <span className="fw-semibold text-default">Phone : </span>
                                            (555)-0123-1210
                                        </p>
                                        <p className="mb-0 text-muted">
                                            <span className="fw-semibold text-default">Email : </span>
                                            jsontaylor2134@gmail.com
                                        </p>
                                    </div>
                                    <div className="p-3 border-bottom border-block-end-dashed">
                                        <div className="mb-3">
                                            <span className="fs-14 fw-semibold">Order Summary</span>
                                        </div>
                                        <p className="mb-2 text-muted">
                                            <span className="fw-semibold text-default">Ordered Date</span>
                                            24,Nov 2022
                                        </p>
                                        <p className="mb-2 text-muted">
                                            <span className="fw-semibold text-default">Ordered Time :</span>
                                            11:47AM
                                        </p>
                                        <p className="mb-0 text-muted">
                                            <span className="fw-semibold text-default">Payment Interface :</span>
                                            UPI
                                        </p>
                                    </div>
                                </Card.Body>
                                <Card.Footer>Total
                                    <span className="text-success"> 294 items</span> purchased upto now
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Order Tracking
                            </Card.Title>
                            <div className="ms-auto text-success">#SPK1218153635</div>
                        </Card.Header>
                        <Card.Body className="px-0">
                            <div className="order-track">
                                <Accordion alwaysOpen>
                                    <Accordion.Item eventKey="0" className="accordion-item border-0 bg-transparent">
                                        <Accordion.Header className="accordion-header" id="headingOne">
                                            <Link className="px-0 pt-0" to="#" role="button" data-bs-toggle="collapse" data-bs-target="#basicOne" aria-expanded="true" aria-controls="basicOne">
                                                <div className="d-flex mb-0">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={ecommerceimg32} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0 fs-14">Order Placed</p>
                                                        <span className="fs-11 text-success">Nov 03, 2022</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Accordion.Header>
                                        <Accordion.Body id="basicOne" className="accordion-body pt-0">
                                            <div className="fs-11">
                                                <p className="mb-0">Order placed successfully by <Link to="#" className="font-weight-semibold text-primary">Sansa Taylor</Link></p>
                                                <span className="text-muted op-5">Nov 03, 2022, 15:36</span>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1" className="accordion-item border-0 bg-transparent">
                                        <Accordion.Header className="accordion-header" id="headingTwo">
                                            <Link className="px-0 pt-0" to="#" role="button" data-bs-toggle="collapse" data-bs-target="#basicTwo" aria-expanded="true" aria-controls="basicTwo">
                                                <div className="d-flex mb-0">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={ecommerceimg33} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0 fs-14">Picked</p>
                                                        <span className="fs-12">Nov 03, 15:10</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Accordion.Header>
                                        <Accordion.Body id="basicTwo" className="accordion-body pt-0">
                                            <div className="fs-11">
                                                <p className="mb-0">Your order has been picked up by <span className="font-weight-semibold">Smart Good Services</span></p>
                                                <span className="text-muted op-5">Nov 03, 2022, 15:36</span>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2" className=" border-0 bg-transparent">
                                        <Accordion.Header className="accordion-header" id="headingThree">
                                            <Link className="px-0 pt-0" to="#" role="button" data-bs-toggle="collapse" data-bs-target="#basicThree" aria-expanded="true" aria-controls="basicThree">
                                                <div className="d-flex mb-0">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={ecommerceimg34} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0 fs-14">Shipping</p>
                                                        <span className="fs-12">Nov 03, 15:10</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Accordion.Header>
                                        <Accordion.Body id="basicThree" className="accordion-body pt-0">
                                            <div className="fs-11 mb-3">
                                                <p className="mb-0">Arrived USA <span className="font-weight-semibold">SGS Warehouse</span></p>
                                                <span className="text-muted op-5">Nov 03, 2022, 15:36</span>
                                            </div>
                                            <div className="fs-11 mb-3">
                                                <p className="mb-0">picked up by <span className="font-weight-semibold">SGS Agent</span> and on the way to Hyderabad</p>
                                                <span className="text-muted op-5">Nov 03, 2022, 15:36</span>
                                            </div>
                                            <div className="fs-11">
                                                <p className="mb-0">Arrived in Hyderabad and expected Delivery is <span className="font-weight-semibold">Apr 16, 2022</span> </p>
                                                <span className="text-muted op-5">Nov 03, 2022, 15:36</span>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3" className="border-0 bg-transparent next-step">
                                        <Accordion.Header className="accordion-header" id="headingFour">
                                            <Link className="collapsed px-0 pt-0" to="#" role="button" data-bs-toggle="collapse" data-bs-target="#basicFour" aria-expanded="true" aria-controls="basicFour">
                                                <div className="d-flex mb-2">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded bg-primary-transparent text-primary border"><i className="fe fe-package fs-12"></i></span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0 fs-14">Out For Delivery</p>
                                                        <span className="text-muted fs-12">Nov 03, 15:10 (expected)</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </Accordion.Header>
                                        <Accordion.Body id="basicFour" className="accordion-body pt-0">
                                            <div className="fs-11">
                                                <p className="mb-0">Your order is out for devlivery</p>
                                                <span className="text-muted op-5">Nov 03, 2022, 15:36 (expected)</span>
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                {/* <Accordion className="accordion" id="basicAccordion">
                                        <div className="accordion-item border-0 bg-transparent">
                                            <div className="accordion-header" id="headingOne">
                                                <Link className="px-0 pt-0" to="#" role="button" data-bs-toggle="collapse" data-bs-target="#basicOne" aria-expanded="true" aria-controls="basicOne">
                                                    <div className="d-flex mb-0">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <img src={ecommerceimg32} alt=""/>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0 fs-14">Order Placed</p>
                                                            <span className="fs-11 text-success">Nov 03, 2022</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div id="basicOne" className="accordion-collapse collapse show border-top-0" aria-labelledby="headingOne" data-bs-parent="#basicAccordion">
                                                <div className="accordion-body pt-0 ps-5">
                                                    <div className="fs-11">
                                                        <p className="mb-0">Order placed successfully by <Link to="#" className="font-weight-semibold text-primary">Sansa Taylor</Link></p>
                                                        <span className="text-muted op-5">Nov 03, 2022, 15:36</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Accordion>
                                    <div className="accordion" id="basicAccordion1">
                                        <div className="accordion-item border-0 bg-transparent">
                                            <div className="accordion-header" id="headingTwo">
                                                <Link className="px-0 pt-0" to="#" role="button" data-bs-toggle="collapse" data-bs-target="#basicTwo" aria-expanded="true" aria-controls="basicTwo">
                                                    <div className="d-flex mb-0">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <img src={ecommerceimg33} alt=""/>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0 fs-14">Picked</p>
                                                            <span className="fs-12">Nov 03, 15:10</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div id="basicTwo" className="accordion-collapse show collapse border-top-0" aria-labelledby="headingTwo" data-bs-parent="#basicAccordion1">
                                                <div className="accordion-body pt-0 ps-5">
                                                    <div className="fs-11">
                                                        <p className="mb-0">Your order has been picked up by <span className="font-weight-semibold">Smart Good Services</span></p>
                                                        <span className="text-muted op-5">Nov 03, 2022, 15:36</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion" id="basicAccordion2">
                                        <div className="accordion-item border-0 bg-transparent">
                                            <div className="accordion-header" id="headingThree">
                                                <Link className="px-0 pt-0" to="#" role="button" data-bs-toggle="collapse" data-bs-target="#basicThree" aria-expanded="true" aria-controls="basicThree">
                                                    <div className="d-flex mb-0">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <img src={ecommerceimg34} alt=""/>
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0 fs-14">Shipping</p>
                                                            <span className="fs-12">Nov 03, 15:10</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div id="basicThree" className="accordion-collapse show collapse border-top-0" aria-labelledby="headingThree" data-bs-parent="#basicAccordion2">
                                                <div className="accordion-body pt-0 ps-5">
                                                    <div className="fs-11 mb-3">
                                                        <p className="mb-0">Arrived USA <span className="font-weight-semibold">SGS Warehouse</span></p>
                                                        <span className="text-muted op-5">Nov 03, 2022, 15:36</span>
                                                    </div>
                                                    <div className="fs-11 mb-3">
                                                        <p className="mb-0">picked up by <span className="font-weight-semibold">SGS Agent</span> and on the way to Hyderabad</p>
                                                        <span className="text-muted op-5">Nov 03, 2022, 15:36</span>
                                                    </div>
                                                    <div className="fs-11">
                                                        <p className="mb-0">Arrived in Hyderabad and expected Delivery is <span className="font-weight-semibold">Apr 16, 2022</span> </p>
                                                        <span className="text-muted op-5">Nov 03, 2022, 15:36</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion" id="basicAccordion3">
                                        <div className="accordion-item border-0 bg-transparent next-step">
                                            <div className="accordion-header" id="headingFour">
                                                <Link className="collapsed px-0 pt-0" to="#" role="button" data-bs-toggle="collapse" data-bs-target="#basicFour" aria-expanded="true" aria-controls="basicFour">
                                                    <div className="d-flex mb-2">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded bg-primary-transparent text-primary border"><i className="fe fe-package fs-12"></i></span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0 fs-14">Out For Delivery</p>
                                                            <span className="text-muted fs-12">Nov 03, 15:10 (expected)</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div id="basicFour" className="accordion-collapse collapse border-top-0" aria-labelledby="headingFour" data-bs-parent="#basicAccordion3">
                                                <div className="accordion-body pt-0 ps-5">
                                                    <div className="fs-11">
                                                        <p className="mb-0">Your order is out for devlivery</p>
                                                        <span className="text-muted op-5">Nov 03, 2022, 15:36 (expected)</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion" id="basicAccordion4">
                                        <div className="accordion-item border-0 bg-transparent next-step">
                                            <div className="accordion-header" id="headingFive">
                                               <Link className="collapsed px-0 pt-0" to="#" role="button" data-bs-toggle="collapse" aria-expanded="true" >
                                                    <div className="d-flex mb-2">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded bg-primary-transparent text-primary border"><i className="fe fe-package fs-12"></i></span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <p className="fw-semibold mb-0 fs-14">Delivered</p>
                                                            <span className="fs-12 text-muted">Nov 03, 18:42</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div> */}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Orderdetails;
