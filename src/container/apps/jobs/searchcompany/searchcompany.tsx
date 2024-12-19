import { FC, Fragment, useState } from 'react';
import { Badge, Button, Card, Col, Collapse, Dropdown, Form, OverlayTrigger, Pagination, Row, Tooltip } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import logo1 from "../../../../assets/images/company-logos/1.png";
import logo2 from "../../../../assets/images/company-logos/2.png";
import logo3 from "../../../../assets/images/company-logos/3.png";
import logo7 from "../../../../assets/images/company-logos/7.png";
import logo5 from "../../../../assets/images/company-logos/5.png";
import logo6 from "../../../../assets/images/company-logos/6.png";
import { MultiSelect } from 'react-multi-select-component';

interface SearchcompanyProps { }

const Searchcompany: FC<SearchcompanyProps> = () => {
    const [selected1, setSelected1] = useState([]);
    const Data = [
        { value: 'All Categories', label: 'All Categories' },
        { value: 'Software Dveloper', label: 'Software Dveloper' },
        { value: 'Web Developer', label: 'Web Developer' },
        { value: 'Software Architect', label: 'Software Architect' },
        { value: 'IT Hardware', label: 'IT Hardware' },
        { value: 'Network Engineer', label: 'Network Engineer' },
        { value: 'React Developer', label: 'React Developer' },
    ];

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    return (
        <Fragment>
            <Pageheader title="Company Search" heading="Jobs" active="Company Search" />
            <div className="container">
                <Row>
                    <Col xxl={3} lg={5}>
                        <Card className="custom-card products-navigation-card">
                            <Card.Body className="card-body p-0">
                                <div className="p-4 border-bottom">
                                    <h6 className="fw-semibold mb-0">Industry Type</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <Form.Check type="checkbox" id="c-1" className="me-2" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="c-1">
                                                Research & Developement
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">2,712</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check type="checkbox" id="c-2" className="me-2" />
                                            <Form.Label className="form-check-label" htmlFor="c-2">
                                                Accounting
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">536</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check type="checkbox" id="c-3" className="me-2" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="c-3">
                                                Business Process
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">18,289</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check type="checkbox" id="c-4" className="me-2" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="c-4">
                                                Consulting
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">3,453</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check type="checkbox" id="c-5" className="me-2" />
                                            <Form.Label className="form-check-label" htmlFor="c-5">
                                                Administrative Support
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">7,165</span>
                                        </div>
                                        <Collapse in={open}>
                                            <div>
                                                <div className="form-check mb-2">
                                                    <Form.Check type="checkbox" id="cc-6" className="me-2" />
                                                    <Form.Label className="form-check-label" htmlFor="cc-6">
                                                        Human Resources
                                                    </Form.Label>
                                                    <span className="badge bg-light text-default  float-end">5,964</span>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <Form.Check type="checkbox" id="cc-7" className="me-2" />
                                                    <Form.Label className="form-check-label" htmlFor="cc-7">
                                                        Marketing
                                                    </Form.Label>
                                                    <span className="badge bg-light text-default  float-end">2,123</span>
                                                </div>
                                            </div>
                                        </Collapse>
                                        <Link className="ecommerce-more-link" to="#category-more" role="button" onClick={() => setOpen(!open)}
                                            aria-controls="example-collapse-text" aria-expanded={open}
                                        >MORE</Link>
                                    </div>
                                </div>
                                <div className="p-4 border-bottom">
                                    <h6 className="fw-semibold mb-0">Location</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <Form.Check type="checkbox" id="available-1" className="me-2" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="available-1">
                                                Hyderabad
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">512</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check type="checkbox" id="available-2" className="me-2" />
                                            <Form.Label className="form-check-label" htmlFor="available-2">
                                                Banglore
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">2,186</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check type="checkbox" id="available-3" className="me-2" />
                                            <Form.Label className="form-check-label" htmlFor="available-3">
                                                Chennai
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">734</span>
                                        </div>
                                        <Collapse in={open1}>
                                            <div>
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="c-6" />
                                                    <Form.Label className="form-check-label" htmlFor="c-6">
                                                        Pune
                                                    </Form.Label>
                                                    <span className="badge bg-light text-default  float-end">5,964</span>
                                                </div>
                                                <div className="form-check mb-2">
                                                    <input className="form-check-input me-2" type="checkbox" value="" id="c-7" />
                                                    <Form.Label className="form-check-label" htmlFor="c-7">
                                                        USA
                                                    </Form.Label>
                                                    <span className="badge bg-light text-default  float-end">2,123</span>
                                                </div>
                                            </div>
                                        </Collapse>

                                        <Link className="ecommerce-more-link" to="#location-more" aria-controls="example-collapse-text" aria-expanded={open1}
                                            onClick={() => setOpen1(!open1)}>MORE</Link>
                                    </div>
                                </div>
                                <div className="p-4 border-bottom">
                                    <h6 className="fw-semibold mb-0">Company Size</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <Form.Check type="checkbox" id="bond-1" className="me-2" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="bond-1">
                                                0-50
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">145</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check type="checkbox" id="bond-2" className="me-2" />
                                            <Form.Label className="form-check-label" htmlFor="bond-2">
                                                50 - 100
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">432</span>
                                        </div>
                                        <div className="form-check">
                                            <Form.Check type="checkbox" id="bond-3" className="me-2" />
                                            <Form.Label className="form-check-label" htmlFor="bond-3">
                                                100 - 150
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">123</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-bottom">
                                    <h6 className="fw-semibold mb-0">Recruiter Type</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <Form.Check type="checkbox" id="Recruiter-1" className="me-2" defaultChecked />
                                            <Form.Label htmlFor="Recruiter-1">
                                                Direct Company
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">13</span>
                                        </div>
                                        <div className="form-check">
                                            <Form.Check type="checkbox" id="Recruiter-2" className="me-2" />
                                            <Form.Label htmlFor="Recruiter-2">
                                                Agency
                                            </Form.Label>
                                            <span className="badge bg-light text-default  float-end">67</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-bottom">
                                    <h6 className="fw-semibold mb-0">Job Vacancies</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <Form.Check type="checkbox" id="vacancies-1" className="me-2" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="vacancies-1">
                                                0 -10
                                            </Form.Label>
                                            <Badge bg="light" className="badge bg-light text-default  float-end">13</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check type="checkbox" id="vacancies-2" className="me-2" />
                                            <Form.Label className="form-check-label" htmlFor="vacancies-2">
                                                10 - 20
                                            </Form.Label>
                                            <Badge bg="light" className="badge bg-light text-default  float-end">67</Badge>
                                        </div>
                                        <div className="form-check">
                                            <Form.Check type="checkbox" id="vacancies-3" className="me-2" />
                                            <Form.Label className="form-check-label" htmlFor="vacancies-3">
                                                20 +above
                                            </Form.Label>
                                            <Badge bg="light" className="badge text-default  float-end">67</Badge>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-bottom">
                                    <h6 className="fw-semibold mb-0">Type of Employement</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <Form.Check type="checkbox" id="j-1" className="me-2" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="j-1">
                                                Full Time
                                            </Form.Label>
                                            <Badge bg="light" className="badge text-default  float-end">512</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check type="checkbox" id="j-2" className="me-2" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="j-2">
                                                Part Time
                                            </Form.Label>
                                            <Badge bg="light" className="badge text-default  float-end">2,186</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check type="checkbox" id="j-3" className="me-2" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="j-3">
                                                Internship
                                            </Form.Label>
                                            <Badge bg="light" className="badge text-default  float-end">734</Badge>
                                        </div>
                                        <div className="form-check mb-2">
                                            <Form.Check type="checkbox" id="j-4" className="me-2" />
                                            <Form.Label className="form-check-label" htmlFor="j-4">
                                                Freelancer
                                            </Form.Label>
                                            <Badge bg="light" className="badge text-default  float-end">16</Badge>
                                        </div>
                                        <div className="form-check">
                                            <Form.Check type="checkbox" id="j-5" className="me-2" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="j-5">
                                                Remote Job
                                            </Form.Label>
                                            <Badge bg="light" className="badge text-default  float-end">1,432</Badge>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={9} lg={7}>
                        <div className="row align-items-center mb-4">
                            <Col lg={12}>
                                <div className="input-group companies-search-input">
                                    <Form.Control type="text" className="form-control w-25" aria-label="Text input with segmented dropdown button"
                                        placeholder="Enter your keyword here" />
                                    <MultiSelect options={Data} value={selected1} onChange={setSelected1} labelledBy="1"
                                     className="rounded-0" />
                                    <Form.Control type="text" className=" w-25" aria-label="Text input with segmented dropdown button"
                                        placeholder="Search by location" />
                                    <Button type="button" className="btn btn-primary"><i className="ri-search-line"></i></Button>
                                </div>
                            </Col>
                        </div>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="d-flex align-items-center flex-wrap gap-2">
                                    <h5 className="fw-semibold mb-0 flex-grow-1">1287 <span className="fw-normal fs-18">Companies match for your search</span> </h5>
                                    <div className="btn-group">
                                        <Dropdown>
                                            <Dropdown.Toggle variant='' className="btn btn-outline-light border dropdown-toggle" type="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                Sort By
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#">Premium</Dropdown.Item>
                                                <Dropdown.Item href="#">Newest</Dropdown.Item>
                                                <Dropdown.Item href="#">Most Relevant</Dropdown.Item>
                                                <Dropdown.Item href="#">Fresher</Dropdown.Item>
                                                <Dropdown.Item href="#">Experienced</Dropdown.Item>
                                                <Dropdown.Item href="#">Bond Agreement</Dropdown.Item>
                                                <Dropdown.Item href="#">Flexible Shift</Dropdown.Item>
                                                <Dropdown.Item href="#">Day Shift</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="btn-list float-end">
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                        <Link to="#" className="avatar avatar-rounded bg-light text-default avatar-sm">
                                            <span><i className="bi bi-heart"></i></span></Link>
                                    </OverlayTrigger>
                                </div>
                                <div className="d-flex align-items-center flex-wrap gap-2">
                                    <span className="avatar avatar-xl bg-white shadow-sm border p-2 avatar-rounded">
                                        <img src={logo1} alt="" />
                                    </span>
                                    <div className="ms-2">
                                        <h5 className="fw-semibold mb-0 d-flex align-items-center"><Link to="#"> Spotech Technical Solutions
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Verified company</Tooltip>}>
                                                <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified company"></i>
                                            </OverlayTrigger>
                                        </Link></h5>
                                        <div className="d-flex gap-2">
                                            <Link to="#"><i className="bi bi-geo-alt fs-11"></i> Kondapur, Hyderabad, </Link>
                                            <p className="mb-0 text-muted">Establishment year - 2019</p>
                                        </div>
                                        <div className="d-flex align-items-center fs-12 text-muted">
                                            <p className="fs-12 mb-0">Ratings : </p>
                                            <div className="min-w-fit-content ms-2">
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                            </div>
                                            <Link to="#" className="ms-1 min-w-fit-content text-muted">
                                                <span>(142)</span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-flex align-items-center flex-wrap gap-2">
                                    <div className="flex-grow-1">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>No of employees</Tooltip>}>
                                            <Link to="#" className="badge badge-md rounded-pill bg-info-transparent me-1"><i className="bi bi-people me-1"></i>No. of Emp : 345</Link>
                                        </OverlayTrigger>
                                        <Link to="#" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Vacancies : 50</Link>
                                    </div>
                                    <Link to="#" className="btn btn-wave btn-primary">
                                        View Profile <i className="ri-arrow-right-line"></i>
                                    </Link>
                                </div>
                            </Card.Footer>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="btn-list float-end">
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                        <Link to="#" className="avatar avatar-rounded bg-light text-default avatar-sm">
                                            <span><i className="bi bi-heart"></i></span></Link>
                                    </OverlayTrigger>
                                </div>
                                <div className="d-flex align-items-center flex-wrap gap-2">
                                    <span className="avatar avatar-xl bg-white shadow-sm border p-2 avatar-rounded">
                                        <img src={logo2} alt="" />
                                    </span>
                                    <div className="ms-2">
                                        <h5 className="fw-semibold mb-0 d-flex align-items-center"><Link to="#"> G Technical Solutions
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Verified company</Tooltip>}>
                                                <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified company"></i>
                                            </OverlayTrigger>
                                        </Link></h5>
                                        <div className="d-flex gap-2">
                                            <Link to="#"><i className="bi bi-geo-alt fs-11"></i> Gachibowli, Hyderabad, </Link>
                                            <p className="mb-0 text-muted">Establishment year - 2015</p>
                                        </div>
                                        <div className="d-flex align-items-center fs-12 text-muted">
                                            <p className="fs-12 mb-0">Ratings : </p>
                                            <div className="min-w-fit-content ms-2">
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star"></i></span>
                                            </div>
                                            <Link to="#" className="ms-1 min-w-fit-content text-muted">
                                                <span>(134)</span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-flex align-items-center flex-wrap gap-2">
                                    <div className="flex-grow-1">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>No of employees</Tooltip>}>
                                            <Link to="#" className="badge badge-md rounded-pill bg-info-transparent me-1"><i className="bi bi-people me-1"></i>No. of Emp : 146</Link>
                                        </OverlayTrigger>
                                        <Link to="#" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Vacancies : 40</Link>
                                    </div>
                                    <Link to="#" className="btn btn-wave btn-primary">
                                        View Profile <i className="ri-arrow-right-line"></i>
                                    </Link>
                                </div>
                            </Card.Footer>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="btn-list float-end">
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                        <Link to="#" className="avatar avatar-rounded bg-light text-default avatar-sm">
                                            <span><i className="bi bi-heart"></i></span></Link>
                                    </OverlayTrigger>
                                </div>
                                <div className="d-flex align-items-center flex-wrap gap-2">
                                    <span className="avatar avatar-xl bg-white shadow-sm border p-2 avatar-rounded">
                                        <img src={logo3} alt="" />
                                    </span>
                                    <div className="ms-2">
                                        <h5 className="fw-semibold mb-0 d-flex align-items-center"><Link to="#"> Diego Technical Solutions
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Verified company</Tooltip>}>
                                                <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified company"></i>
                                            </OverlayTrigger>
                                        </Link></h5>
                                        <div className="d-flex gap-2">
                                            <Link to="#"><i className="bi bi-geo-alt fs-11"></i> Gachibowli, Chennai, </Link>
                                            <p className="mb-0 text-muted">Establishment year - 2013</p>
                                        </div>
                                        <div className="d-flex align-items-center fs-12 text-muted">
                                            <p className="fs-12 mb-0">Ratings : </p>
                                            <div className="min-w-fit-content ms-2">
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star"></i></span>
                                            </div>
                                            <Link to="#" className="ms-1 min-w-fit-content text-muted">
                                                <span>(234)</span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-flex align-items-center flex-wrap gap-2">
                                    <div className="flex-grow-1">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>No of employees</Tooltip>}>
                                            <Link to="#" className="badge badge-md rounded-pill bg-info-transparent me-1"><i className="bi bi-people me-1"></i>No. of Emp : 56</Link>
                                        </OverlayTrigger>
                                        <Link to="#" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Vacancies : 35</Link>
                                    </div>
                                    <Link to="#" className="btn btn-wave btn-primary">
                                        View Profile <i className="ri-arrow-right-line"></i>
                                    </Link>
                                </div>
                            </Card.Footer>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="btn-list float-end">
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                        <Link to="#" className="avatar avatar-rounded bg-light text-default avatar-sm">
                                            <span><i className="bi bi-heart"></i></span></Link>
                                    </OverlayTrigger>
                                </div>
                                <div className="d-flex align-items-center flex-wrap gap-2">
                                    <span className="avatar avatar-xl bg-white shadow-sm border p-2 avatar-rounded">
                                        <img src={logo7} alt="" />
                                    </span>
                                    <div className="ms-2">
                                        <h5 className="fw-semibold mb-0 d-flex align-items-center"><Link to="#"> Spoteck Solutions Pvt Ltd
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Verified company</Tooltip>}>
                                                <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified company"></i>
                                            </OverlayTrigger>
                                        </Link></h5>
                                        <div className="d-flex gap-2">
                                            <Link to="#"><i className="bi bi-geo-alt fs-11"></i> Gachibowli, Banglore, </Link>
                                            <p className="mb-0 text-muted">Establishment year - 2002</p>
                                        </div>
                                        <div className="d-flex align-items-center fs-12 text-muted">
                                            <p className="fs-12 mb-0">Ratings : </p>
                                            <div className="min-w-fit-content ms-2">
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                            </div>
                                            <Link to="#" className="ms-1 min-w-fit-content text-muted">
                                                <span>(239)</span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-flex align-items-center flex-wrap gap-2">
                                    <div className="flex-grow-1">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>No of employees</Tooltip>}>
                                            <Link to="#" className="badge badge-md rounded-pill bg-info-transparent me-1"><i className="bi bi-people me-1"></i>No. of Emp : 120</Link>
                                        </OverlayTrigger>
                                        <Link to="#" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Vacancies : 10</Link>
                                    </div>
                                    <Link to="#" className="btn btn-wave btn-primary">
                                        View Profile <i className="ri-arrow-right-line"></i>
                                    </Link>
                                </div>
                            </Card.Footer>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="btn-list float-end">
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                        <Link to="#" className="avatar avatar-rounded bg-light text-default avatar-sm">
                                            <span><i className="bi bi-heart"></i></span></Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Share this company</Tooltip>}>
                                        <Link to="#" className="avatar avatar-rounded bg-light text-default avatar-sm">
                                            <span><i className="bi bi-share"></i></span></Link>
                                    </OverlayTrigger>
                                </div>
                                <div className="d-flex align-items-center flex-wrap gap-2">
                                    <span className="avatar avatar-xl bg-white shadow-sm border p-2 avatar-rounded">
                                        <img src={logo5} alt="" />
                                    </span>
                                    <div className="ms-2">
                                        <h5 className="fw-semibold mb-0 d-flex align-items-center"><Link to="#" className=''> Vehement Capital Partners
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Verified company</Tooltip>}>
                                                <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified company"></i>
                                            </OverlayTrigger>
                                        </Link>
                                        </h5>
                                        <div className="d-flex gap-2">
                                            <Link to="#"><i className="bi bi-geo-alt fs-11"></i> Gachibowli, Banglore, </Link>
                                            <p className="mb-0 text-muted">Establishment year - 2017</p>
                                        </div>
                                        <div className="d-flex align-items-center fs-12 text-muted">
                                            <p className="fs-12 mb-0">Ratings : </p>
                                            <div className="min-w-fit-content ms-2">
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                            </div>
                                            <Link to="#" className="ms-1 min-w-fit-content text-muted">
                                                <span>(239)</span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer>
                                <div className="d-flex align-items-center flex-wrap gap-2">
                                    <div className="flex-grow-1">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>No of employees</Tooltip>}>
                                            <Link to="#" className="badge badge-md rounded-pill bg-info-transparent me-1"><i className="bi bi-people me-1"></i>No. of Emp : 120</Link>
                                        </OverlayTrigger>
                                        <Link to="#" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Vacancies : 10</Link>
                                    </div>
                                    <Link to="#" className="btn btn-wave btn-primary">
                                        View Profile <i className="ri-arrow-right-line"></i>
                                    </Link>
                                </div>
                            </Card.Footer>
                        </Card>
                        <Card className="custom-card">
                            <Card.Body>
                                <div className="btn-list float-end">
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Add to wishlist</Tooltip>}>
                                        <Link to="#" className="avatar avatar-rounded bg-light text-default avatar-sm">
                                            <span><i className="bi bi-heart"></i></span></Link>
                                    </OverlayTrigger>
                                    <OverlayTrigger placement="top" overlay={<Tooltip>Share this company</Tooltip>}>
                                        <Link to="#" className="avatar avatar-rounded bg-light text-default avatar-sm">
                                            <span><i className="bi bi-share"></i></span></Link>
                                    </OverlayTrigger>
                                </div>
                                <div className="d-flex align-items-center flex-wrap gap-2">
                                    <span className="avatar avatar-xl bg-white shadow-sm border p-2 avatar-rounded">
                                        <img src={logo6} alt="" />
                                    </span>
                                    <div className="ms-2">
                                        <h5 className="fw-semibold mb-0 d-flex align-items-center"><Link to="#"> Wonka Industries
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Verified company</Tooltip>}>
                                                <i className="bi bi-check-circle-fill text-success fs-16 ms-1" data-bs-toggle="tooltip" title="Verified company"></i>
                                            </OverlayTrigger>

                                        </Link></h5>
                                        <div className="d-flex gap-2">
                                            <Link to="#"><i className="bi bi-geo-alt fs-11"></i> Kukatpally, Hyderabad, </Link>
                                            <p className="mb-0 text-muted">Establishment year - 2000</p>
                                        </div>
                                        <div className="d-flex align-items-center fs-12 text-muted">
                                            <p className="fs-12 mb-0">Ratings : </p>
                                            <div className="min-w-fit-content ms-2">
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning me-1"><i className="bi bi-star-half"></i></span>
                                            </div>
                                            <Link to="#" className="ms-1 min-w-fit-content text-muted">
                                                <span>(764)</span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                            <Card.Footer className="card-footer">
                                <div className="d-flex align-items-center flex-wrap gap-2">
                                    <div className="flex-grow-1">
                                        <OverlayTrigger placement="top" overlay={<Tooltip>No of employees</Tooltip>}>
                                            <Link to="#" className="badge badge-md rounded-pill bg-info-transparent me-1"><i className="bi bi-people me-1"></i>No. of Emp : 120</Link>
                                        </OverlayTrigger>
                                        <Link to="#" className="badge badge-md rounded-pill bg-primary-transparent"><i className="bi bi-briefcase me-1"></i>Vacancies : 10</Link>
                                    </div>
                                    <Link to="#" className="btn btn-wave btn-primary">
                                        View Profile <i className="ri-arrow-right-line"></i>
                                    </Link>
                                </div>
                            </Card.Footer>
                        </Card>
                        <Pagination className="pagination mb-4 justify-content-end">
                            <Pagination.Item disabled href="#">Prev</Pagination.Item>
                            <Pagination.Item active href="#">1</Pagination.Item>
                            <Pagination.Item href="#">2</Pagination.Item>
                            <Pagination.Item href="#">3</Pagination.Item>
                            <Pagination.Item className="pagination-next" href="#">
                                next
                            </Pagination.Item>
                        </Pagination>
                    </Col>
                </Row>
            </div>
        </Fragment>
    );
};

export default Searchcompany;
