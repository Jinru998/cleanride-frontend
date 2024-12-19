import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Dropdown, Form, Nav, Pagination, Row, Tab } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { Countries, Earning, ProductsOverview, Productsselling, Recentorders } from './ecommerecedata';
import { Link } from 'react-router-dom';
import ecommerce35 from "../../../assets/images/ecommerce/png/35.png";
import face2 from "../../../assets/images/faces/2.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import face10 from "../../../assets/images/faces/10.jpg";
import face12 from "../../../assets/images/faces/12.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face6 from "../../../assets/images/faces/6.jpg";
import face7 from "../../../assets/images/faces/7.jpg";
import face3 from "../../../assets/images/faces/3.jpg";
import face9 from "../../../assets/images/faces/9.jpg";
import face13 from "../../../assets/images/faces/13.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import face16 from "../../../assets/images/faces/16.jpg";
import face14 from "../../../assets/images/faces/14.jpg";
import ecommerce1 from "../../../assets/images/ecommerce/png/1.png";
import ecommerce2 from "../../../assets/images/ecommerce/png/2.png";
import ecommerce3 from "../../../assets/images/ecommerce/png/3.png";
import ecommerce4 from "../../../assets/images/ecommerce/png/4.png";
import ecommerce5 from "../../../assets/images/ecommerce/png/5.png";
import ecommerce6 from "../../../assets/images/ecommerce/png/6.png";
import ecommerce7 from "../../../assets/images/ecommerce/png/7.png";
import ecommerce8 from "../../../assets/images/ecommerce/png/8.png";
import ecommerce9 from "../../../assets/images/ecommerce/png/9.png";
import ecommerce10 from "../../../assets/images/ecommerce/png/10.png";
import ecommerce11 from "../../../assets/images/ecommerce/png/11.png";
import ecommerce12 from "../../../assets/images/ecommerce/png/12.png";
import ecommerce13 from "../../../assets/images/ecommerce/png/13.png";
import ecommerce14 from "../../../assets/images/ecommerce/png/14.png";
import ecommerce15 from "../../../assets/images/ecommerce/png/15.png";

interface EcommerceProps { }

const Ecommerce: FC<EcommerceProps> = () => {
    // for User search function
    const [Data, setData] = useState(ProductsOverview);

    const userdata: any = [];

    const myfunction = (idx: any) => {
        let Data;
        for (Data of ProductsOverview) {
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
            <Pageheader title="Ecommerce" heading="Dashboards" active="Ecommerce" />
            <Row>
                <Col xxl={6} xl={12}>
                    <Row>
                        <Col lg={6} sm={6} md={6} xl={6}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <Row>
                                        <Col xxl={3} xl={4} lg={4} md={4} sm={4} className=" col-4 d-flex align-items-center justify-content-center ecommerce-icon px-0">
                                            <span className="rounded p-3 bg-primary-transparent">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-white primary" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /><path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z" /></g></svg>
                                            </span>
                                        </Col>
                                        <Col xxl={9} xl={8} lg={8} md={8} sm={8} className="col-8 ps-0">
                                            <div className="mb-2">Total Sales</div>
                                            <div className="text-muted mb-1 fs-12">
                                                <span className="text-dark fw-semibold fs-20 lh-1 vertical-bottom">
                                                    14,732
                                                </span>
                                            </div>
                                            <div>
                                                <span className="fs-12 mb-0">Increase by <span className="badge bg-success-transparent text-success mx-1">+4.2%</span> this month</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} sm={6} md={6} xl={6}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <Row>
                                        <Col xl={3} lg={4} md={4} sm={4} className="col-4 d-flex align-items-center justify-content-center ecommerce-icon secondary  px-0">
                                            <span className="rounded p-3 bg-secondary-transparent">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-white secondary" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0,0h24v24H0V0z" fill="none" /><g><path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" /><rect height="2" width="6" x="9" y="7" /><rect height="2" width="2" x="16" y="7" /><rect height="2" width="6" x="9" y="10" /><rect height="2" width="2" x="16" y="10" /></g></svg>
                                            </span>
                                        </Col>
                                        <Col xl={9} lg={8} md={8} sm={8} className=" col-8 ps-0">
                                            <div className="mb-2">Total Expenses</div>
                                            <div className="text-muted mb-1 fs-12">
                                                <span className="text-dark fw-semibold fs-20 lh-1 vertical-bottom">
                                                    $28,346.00
                                                </span>
                                            </div>
                                            <div>
                                                <span className="fs-12 mb-0">Increase by <span className="badge bg-success-transparent text-success mx-1">+12.0%</span> this month</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} sm={6} md={6} xl={6}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <Row>
                                        <Col xl={3} lg={4} md={4} sm={4} className="col-4 d-flex align-items-center justify-content-center ecommerce-icon success px-0">
                                            <span className="rounded p-3 bg-success-transparent">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-white success" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                                            </span>
                                        </Col>
                                        <Col xl={9} lg={8} md={8} sm={8} className=" col-8 ps-0">
                                            <div className="mb-2">Total Visitors</div>
                                            <div className="text-muted mb-1 fs-12">
                                                <span className="text-dark fw-semibold fs-20 lh-1 vertical-bottom">
                                                    1,29,368
                                                </span>
                                            </div>
                                            <div>
                                                <span className="fs-12 mb-0">Decreased by <span className="badge bg-danger-transparent text-danger mx-1">-7.6%</span> this month</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col lg={6} sm={6} md={6} xl={6}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <Row>
                                        <Col xl={3} lg={4} md={4} sm={4} className="col-4 d-flex align-items-center justify-content-center ecommerce-icon warning px-0">
                                            <span className="rounded p-3 bg-warning-transparent">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-white warning" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>
                                            </span>
                                        </Col>
                                        <Col xl={9} lg={8} md={8} sm={8} className="col-8 ps-0">
                                            <div className="mb-2">Total Orders</div>
                                            <div className="text-muted mb-1 fs-12">
                                                <span className="text-dark fw-semibold fs-20 lh-1 vertical-bottom">
                                                    35,367
                                                </span>
                                            </div>
                                            <div>
                                                <span className="fs-12 mb-0">Increased by <span className="badge bg-success-transparent text-success mx-1">+2.5%</span> this month</span>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6}>
                            <Card className="custom-card overflow-hidden">
                                <div className="ecommerce-sale-image">
                                    <img src={ecommerce35} className="card-img-top" alt="..." />
                                    <div className="card-img-overlay d-flex flex-column p-4 text-fixed-white">
                                        <p className="mb-1 op-7 fs-12">Spruko Official.Inc</p>
                                        <h6 className="fw-semibold mb-4">BIG SAVING DAYS</h6>
                                        <p className="ecommerce-bankoffer-details">Bank Offer 10% off on Aches Bank Credit Cards, up to $10. On orders of $500 and above <Link to="#" className="text-decoration-underline text-fixed-white">T&amp;C</Link></p>
                                        <p className="ecommerce-sale-days mb-0">15, Jan 2022 - 19, Jan 2022</p>
                                        <p className="ecommerce-sales-calendar text-center mb-0">
                                            <span>15</span>
                                            <span className="d-block fs-15 lh-1 fw-semibold">Jan</span>
                                        </p>
                                    </div>
                                </div>
                                <Card.Body>
                                    <Link to="#" className="text-primary fs-15 fw-semibold">Biggest sale is back.</Link>
                                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore harum accusamus eum dolorum sapiente. Saepe</p>
                                    <Button variant='' type="button" className="btn btn-primary btn-wave me-2">Notify Me</Button>
                                    <Button variant='' type="button" className="btn btn-outline-primary btn-wave">Offers</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xxl={6} xl={6} lg={6} md={6}>
                            <Card className="custom-card">
                                <Card.Header className="card-header justify-content-between">
                                    <Card.Title>
                                        Recent Orders
                                    </Card.Title>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown">
                                            <i className="fe fe-more-vertical"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="list-unstyled mb-0">
                                        {Recentorders.map((idx) => (
                                            <li className={idx.class} key={Math.random()}>
                                                <Link to="#">
                                                    <div className="d-flex algn-items-center">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-md">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill ms-2">
                                                            <p className="fw-semibold mb-0">{idx.product}</p>
                                                            <p className="fs-12 text-muted mb-0">
                                                                {idx.text}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <span className="text-success fw-semibold">${idx.price}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}

                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Tab.Container defaultActiveKey="1">
                                    <Card.Header className="justify-content-between d-sm-flex d-block">
                                        <Card.Title>
                                            Orders
                                        </Card.Title>
                                        <div>
                                            <Nav className="nav nav-tabs justify-content-end nav-tabs-header mb-0 d-sm-flex d-block mt-sm-0 mt-2" role="tablist">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="1"
                                                        href="#active-orders" aria-selected="true">Active Orders</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="2"
                                                        href="#completed-orders" aria-selected="true">Completed</Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="3"
                                                        href="#cancelled-orders" aria-selected="true">Cancelled</Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                        </div>
                                    </Card.Header>
                                    <Card.Body className="p-0">
                                        <Tab.Content className="">
                                            <Tab.Pane eventKey="1" className="text-muted border-0 p-0" id="active-orders"
                                                role="tabpanel">
                                                <div className="table-responsive">
                                                    <table className="table card-table table-vcenter text-nowrap mb-0">
                                                        <tbody className="active-tab">
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md online avatar-rounded me-2">
                                                                                <img src={face4} alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Amanda Nanes</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$229.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Delivery Date</span>
                                                                        <p className="mb-0">24 May 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src={ecommerce1} alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" to="#">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md online avatar-rounded me-2">
                                                                                <img src={face10} alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Peter Parkour</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$135.29</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Delivery Date</span>
                                                                        <p className="mb-0">18 May 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src={ecommerce2} alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" to="#">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md offline avatar-rounded me-2">
                                                                                <img src={face12} alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Jackie Chen</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$1,299.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Delivery Date</span>
                                                                        <p className="mb-0">29 May 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src={ecommerce3} alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" to="#">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md online avatar-rounded me-2">
                                                                                <img src={face5} alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Ryan Gercia</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$249.29</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Delivery Date</span>
                                                                        <p className="mb-0">05 Jun 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src={ecommerce4} alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" to="#">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md offline avatar-rounded me-2">
                                                                                <img src={face14} alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Hugh Jackma</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$499.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Delivery Date</span>
                                                                        <p className="mb-0">15 May 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src={ecommerce5} alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" to="#">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="2" className="text-muted border-0 p-0" id="completed-orders"
                                                role="tabpanel">
                                                <div className="table-responsive">
                                                    <table className="table card-table table-vcenter text-nowrap mb-0">
                                                        <tbody className="active-tab">
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md offline avatar-rounded me-2">
                                                                                <img src={face2} alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Lisa Rebecca</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$1,199.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-success">Delivered On</span>
                                                                        <p className="mb-0">24 Dec 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src={ecommerce6} alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" to="#">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md offline avatar-rounded me-2">
                                                                                <img src={face13} alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Matt Martin</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$799.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-success">Delived On</span>
                                                                        <p className="mb-0">18 Nov 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src={ecommerce7} alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" to="#">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md online avatar-rounded me-2">
                                                                                <img src={face7} alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Mitchell Osama</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$279.00</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-success">Delivery On</span>
                                                                        <p className="mb-0">29 Dec 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src={ecommerce8} alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" to="#">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md online avatar-rounded me-2">
                                                                                <img src={face12} alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Cornor Mcgood</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$79.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-success">Delivered On</span>
                                                                        <p className="mb-0">05 Dec 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src={ecommerce9} alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" to="#">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md online avatar-rounded me-2">
                                                                                <img src={face15} alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Kishan Patel</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$1449.29</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-success">Delivered On</span>
                                                                        <p className="mb-0">20 Nov 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src={ecommerce10} alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" to="#">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="3" className="text-muted border-0 p-0" id="cancelled-orders"
                                                role="tabpanel">
                                                <div className="table-responsive">
                                                    <table className="table card-table table-vcenter text-nowrap mb-0">
                                                        <tbody className="active-tab">
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md online avatar-rounded me-2">
                                                                                <img src={face6} alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Hailey Bobber</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$199.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-danger">Cancelled Date</span>
                                                                        <p className="mb-0">09 Dec 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src={ecommerce11} alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" to="#">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md offline avatar-rounded me-2">
                                                                                <img src={face14} alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Anthony Mansion</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$179.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-danger">Cancelled Date</span>
                                                                        <p className="mb-0">28 Dec 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src={ecommerce12} alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" to="#">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md online avatar-rounded me-2">
                                                                                <img src={face16} alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Simon Carter</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$149.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-danger">Cancelled Date</span>
                                                                        <p className="mb-0">30 Dec 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src={ecommerce13} alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" to="#">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md online avatar-rounded me-2">
                                                                                <img src={face3} alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Sofia Sekh</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$1439.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-danger">Cancelled Date</span>
                                                                        <p className="mb-0">03 Dec 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src={ecommerce14} alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" to="#">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="d-flex align-items-center">
                                                                        <div className="lh-1">
                                                                            <span className="avatar avatar-md offline avatar-rounded me-2">
                                                                                <img src={face9} alt="" />
                                                                            </span>
                                                                        </div>
                                                                        <div className="align-items-center">
                                                                            <span className="fs-12 text-muted">Name</span>
                                                                            <p className="mb-0">Kimura Kai</p>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-muted">Price</span>
                                                                        <p className="mb-0 fw-semibold">$1092.99</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="align-items-center">
                                                                        <span className="fs-12 text-danger">Cancelled Date</span>
                                                                        <p className="mb-0">02 Dec 2022</p>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="avatar avatar-md">
                                                                        <img src={ecommerce15} alt="" />
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <Link aria-label="anchor" to="#">
                                                                        <span className="orders-arrow"><i className="ri-arrow-right-s-line fs-18"></i></span>
                                                                    </Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Card.Body>
                                </Tab.Container>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={6} xl={12}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>Earnings</Card.Title>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='' className="fs-12 text-muted no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                            View All<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu role="menu">
                                            <Dropdown.Item href="#">Download</Dropdown.Item>
                                            <Dropdown.Item href="#">Import</Dropdown.Item>
                                            <Dropdown.Item href="#">Export</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Header>
                                <Card.Body>
                                    <div className="row ps-lg-5 mb-4 pb-4 gy-sm-0 gy-3">
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                            <div className="mb-1 earning first-half ms-3">First Half</div>
                                            <div className="mb-0">
                                                <span className="mt-1 fs-16 fw-semibold">$51.94k</span>
                                                <span className="text-success"><i className="fa fa-caret-up mx-1"></i>
                                                    <span className="badge bg-success-transparent text-success px-1 py-2 fs-10">+0.9%</span></span>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                            <div className="mb-1 earning top-gross ms-3">Top Gross</div>
                                            <div className="mb-0">
                                                <span className="mt-1 fs-16 fw-semibold">$18.32k</span>
                                                <span className="text-success"><i className="fa fa-caret-up mx-1"></i>
                                                    <span className="badge bg-success-transparent text-success px-1 py-2 fs-10">+0.39%</span></span>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                                            <div className="mb-1 earning second-half ms-3">Second Half</div>
                                            <div className="mb-0">
                                                <span className="mt-1 fs-16 fw-semibold">$38k</span>
                                                <span className="text-danger"><i className="fa fa-caret-up mx-1"></i>
                                                    <span className="badge bg-danger-transparent text-danger px-1 py-2 fs-10">-0.15%</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="earnings">
                                        <Earning />
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>Top Selling Products</Card.Title>
                                </Card.Header>
                                <Card.Body className="card-body p-0">
                                    <div className="table-responsive">
                                        <table className="table text-nowrap mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="text-center">S.no</th>
                                                    <th scope="col">Product Name</th>
                                                    <th scope="col">Category</th>
                                                    <th scope="col">Stock</th>
                                                    <th scope="col">Total Sales</th>
                                                </tr>
                                            </thead>
                                            <tbody className="top-selling">
                                                {Productsselling.map((idx) => (
                                                    <tr key={Math.random()}>
                                                        <td className="text-center lh-1">
                                                            <span className="avatar avatar-md">
                                                                <img src={idx.src} className="p-2 rounded-pill bg-light" alt="" />
                                                            </span>
                                                        </td>
                                                        <td>{idx.name}</td>
                                                        <td>{idx.text}</td>
                                                        <td><span className={`"badge badge-sm bg-${idx.color}-transparent text-${idx.color}"`}>{idx.status}</span></td>
                                                        <td>
                                                            <span className="fw-semibold">{idx.sales}</span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <Card.Header className="card-header justify-content-between">
                                    <Card.Title>
                                        Top Countries By Sales
                                    </Card.Title>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown">
                                            <i className="fe fe-more-vertical"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Header>
                                <Card.Body>
                                    <div className="d-flex align-items-center mb-3">
                                        <div>
                                            <h4 className="mb-0 lh-1">38,256</h4>
                                        </div>
                                        <div><span className="badge bg-primary-transparent mx-1">12.24%</span><span className="text-muted fs-11">Since last week</span></div>
                                    </div>
                                    <ul className="mb-0 pt-3 list-unstyled">
                                        {Countries.map((idx) => (
                                            <li className={idx.class2} key={Math.random()}>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="d-flex align-items-center lh-1">
                                                        <span className="avatar avatar-xs me-2 avatar-rounded">
                                                            <img src={idx.src} alt="" />
                                                        </span>
                                                        <span className="top-country-name">{idx.text}</span>
                                                    </div>
                                                    <div>
                                                        <i className={`ti ti-trending-${idx.class1} fs-16 text-${idx.color}`}></i>
                                                    </div>
                                                    <div className="fs-14">{idx.price}</div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <Card.Header className="card-header justify-content-between">
                                    <Card.Title>
                                        Top Customers
                                    </Card.Title>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='' className="p-2 fs-12 text-muted no-caret">
                                            View All<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu role="menu">
                                            <Dropdown.Item href="#">Download</Dropdown.Item>
                                            <Dropdown.Item href="#">Import</Dropdown.Item>
                                            <Dropdown.Item href="#">Export</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Card.Header>
                                <Card.Body>
                                    <ul className="list-unstyled mb-0">
                                        <li className="mb-3">
                                            <Link to="#">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-top justify-content-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <img src={face4} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-semibold">Emma Wilson</p>
                                                            <p className="mb-0 text-muted fs-12">15 Purchases<i className="bi bi-patch-check-fill fs-14 text-primary ms-2"></i></p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="fs-14">$1,835</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="#">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-top justify-content-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <img src={face15} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-semibold">Robert Lewis</p>
                                                            <p className="mb-0 text-muted fs-12">18 Purchases<i className="bi bi-patch-check-fill fs-14 text-primary ms-2"></i></p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="fs-14">$2,415</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mb-3">
                                            <Link to="#">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-top justify-content-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <img src={face5} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-semibold">Angelina Hose</p>
                                                            <p className="mb-0 text-muted fs-12">21 Purchases<i className="bi bi-patch-check-fill fs-14 text-primary ms-2"></i></p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="fs-14">$2,341</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mb-0">
                                            <Link to="#">
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <div className="d-flex align-items-top justify-content-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <img src={face2} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-semibold">Samantha Sam</p>
                                                            <p className="mb-0 text-muted fs-12">24 Purchases<i className="bi bi-patch-check-fill fs-14 text-primary ms-2"></i></p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="fs-14">2,624</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Products Overview
                            </Card.Title>
                            <div className="d-flex">
                                <div className="me-3">
                                    <Form.Control className="form-control-sm" type="text" onChange={(ele) => { myfunction(ele.target.value); }}
                                        placeholder="Search" aria-label=".form-control-sm example" />
                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle variant='' className="btn btn-primary btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu role="menu">
                                        <Dropdown.Item className="dropdown-item" href="#">New</Dropdown.Item>
                                        <Dropdown.Item className="dropdown-item" href="#">Popular</Dropdown.Item>
                                        <Dropdown.Item className="dropdown-item" href="#">Relevant</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <table className="table text-nowrap table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Product Id</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Sales</th>
                                            <th scope="col">Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-sm">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="fs-14">{idx.name}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="fw-semibold">{idx.productid}</span>
                                                </td>
                                                <td>
                                                    {idx.price}
                                                </td>
                                                <td>
                                                    <span className={`badge bg-${idx.color}`}>{idx.status}</span>
                                                </td>
                                                <td>
                                                    <span className="">{idx.sales}</span>
                                                </td>
                                                <td>
                                                    <span className="">{idx.text}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                        <Card.Footer className="">
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 5 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <Pagination className="pagination mb-0">
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
            </Row>
        </Fragment>
    );
};

export default Ecommerce;
