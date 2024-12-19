import  { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Dropdown, Form, InputGroup, Modal, Row } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import face1 from "../../../../assets/images/faces/1.jpg";
import face2 from "../../../../assets/images/faces/2.jpg";
import face3 from "../../../../assets/images/faces/3.jpg";
import face21 from "../../../../assets/images/faces/21.jpg";
import face5 from "../../../../assets/images/faces/5.jpg";
import face6 from "../../../../assets/images/faces/6.jpg";
import face17 from "../../../../assets/images/faces/17.jpg";
import face8 from "../../../../assets/images/faces/8.jpg";
import face9 from "../../../../assets/images/faces/9.jpg";
import face10 from "../../../../assets/images/faces/10.jpg";
import face11 from "../../../../assets/images/faces/11.jpg";
import face12 from "../../../../assets/images/faces/12.jpg";
import face13 from "../../../../assets/images/faces/13.jpg";
import face14 from "../../../../assets/images/faces/14.jpg";
import face15 from "../../../../assets/images/faces/15.jpg";
import face16 from "../../../../assets/images/faces/16.jpg";
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';

interface DealsProps { }

const Deals: FC<DealsProps> = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDateChange = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };

    return (
        <Fragment>
            <Pageheader title="Deals" heading="CRM" active="Deals" />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center flex-wrap gap-2 justify-content-between">
                                <div className="d-flex align-items-center">
                                    <span className="fw-semibold fs-16 me-1">Deals</span><span className="badge bg-light text-default align-middle">16</span>
                                </div>
                                <div className="d-flex flex-wrap gap-2">
                                    <Button variant="primary" className="btn  btn-sm" onClick={handleShow}
                                        data-bs-target="#create-contact"><i className="ri-add-line me-1 fw-semibold align-middle"></i>New Deal</Button>
                                    <Button variant="success-light" className="btn  btn-sm">Export As CSV</Button>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='' className="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                            Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#">Newest</Dropdown.Item>
                                            <Dropdown.Item href="#">Date Added</Dropdown.Item>
                                            <Dropdown.Item href="#">A - Z</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={2}>
                    <Card className="custom-card">
                        <Card.Body className="p-3">
                            <div className="d-flex align-items-top flex-wrap justify-content-between">
                                <div>
                                    <div className="fw-semibold fs-15 lead-discovered">Leads Discovered</div>
                                    <span className=" badge bg-light text-default">24 Leads</span>
                                </div>
                                <div>
                                    <span className="text-primary fw-semibold">$25,238</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={2}>
                    <Card className="custom-card">
                        <Card.Body className="p-3">
                            <div className="d-flex align-items-top flex-wrap justify-content-between">
                                <div>
                                    <div className="fw-semibold fs-15 lead-qualified">Qualified Leads</div>
                                    <span className=" badge bg-light text-default">17 Leads</span>
                                </div>
                                <div>
                                    <span className="text-warning fw-semibold">$32,453</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={2}>
                    <Card className="custom-card">
                        <Card.Body className="p-3">
                            <div className="d-flex align-items-top flex-wrap justify-content-between">
                                <div>
                                    <div className="fw-semibold fs-15 contact-initiated">Contact Initiated</div>
                                    <span className=" badge bg-light text-default">5 Leads</span>
                                </div>
                                <div>
                                    <span className="text-success fw-semibold">$13,756</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={2}>
                    <Card className="custom-card">
                        <Card.Body className="p-3">
                            <div className="d-flex align-items-top flex-wrap justify-content-between">
                                <div>
                                    <div className="fw-semibold fs-15 need-identified">Needs Identified</div>
                                    <span className=" badge bg-light text-default">43 Leads</span>
                                </div>
                                <div>
                                    <span className="text-info fw-semibold">$47,093</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={2}>
                    <Card className="custom-card">
                        <Card.Body className="p-3">
                            <div className="d-flex align-items-top flex-wrap justify-content-between">
                                <div>
                                    <div className="fw-semibold fs-15 negotiation">Negotiation</div>
                                    <span className=" badge bg-light text-default">15 Leads</span>
                                </div>
                                <div>
                                    <span className="text-danger fw-semibold">$26,146</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={2}>
                    <Card className="custom-card">
                        <Card.Body className="p-3">
                            <div className="d-flex align-items-top flex-wrap justify-content-between">
                                <div>
                                    <div className="fw-semibold fs-15 deal-finalized">Deal Finalized</div>
                                    <span className=" badge bg-light text-default">127 Deals</span>
                                </div>
                                <div>
                                    <span className="text-secondary fw-semibold">$1,74,679</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={2} id="leads-discovered">
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face12} alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Service Upgrade</div>
                                </div>
                                <div>$5000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link to="#" className="company-name">Spruko Technologies</Link>
                                </div>
                                <div className="text-muted fs-12">24,Jun 2023 - 12:45PM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face5} alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Product Demo</div>
                                </div>
                                <div>$50,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link to="#" className="company-name">Acme Corporation LTD</Link>
                                </div>
                                <div className="text-muted fs-12">18,Apr 2023 - 11:22AM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face15} alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Website Redesign</div>
                                </div>
                                <div>$20,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link to="#" className="company-name">Embark Technologies</Link>
                                </div>
                                <div className="text-muted fs-12">12,Jul 2023 - 10:15AM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face6} alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Consulting Services</div>
                                </div>
                                <div>$10,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link to="#" className="company-name">Adam Johnson</Link>
                                </div>
                                <div className="text-muted fs-12">29,Jul 2023 - 4:45PM</div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={2} id="leads-qualified">
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face11} alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Event Sponsorship</div>
                                </div>
                                <div>$10,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link to="#" className="company-name">Initech Info</Link>
                                </div>
                                <div className="text-muted fs-12">21,May 2023 - 10:25AM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face11} alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Sales Training</div>
                                </div>
                                <div>$6,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link to="#" className="company-name">Soylent Corp</Link>
                                </div>
                                <div className="text-muted fs-12">10,May 2023 - 9:20AM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face14} alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Content Creation</div>
                                </div>
                                <div>$3,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link to="#" className="company-name">Hooli Technologies</Link>
                                </div>
                                <div className="text-muted fs-12">25,Aug 2023 - 3:38PM</div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={2} id="contact-initiated">
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face3} alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">E-commerce Integration</div>
                                </div>
                                <div>$12,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link to="#" className="company-name">Spice Infotech</Link>
                                </div>
                                <div className="text-muted fs-12">15,Sep 2023 - 8:32PM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face16} alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Ad Campaign</div>
                                </div>
                                <div>$5,500</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link to="#" className="company-name">Umbrella Corp</Link>
                                </div>
                                <div className="text-muted fs-12">17,Jun 2023 - 10:54AM</div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={2} id="needs-identified">
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face10} alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Webinar Series</div>
                                </div>
                                <div>$9,500</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link to="#" className="company-name">Massive Dynamic</Link>
                                </div>
                                <div className="text-muted fs-12">16,May 2023 - 11:22AM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face13} alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">SEO Audit</div>
                                </div>
                                <div>$3,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link to="#" className="company-name">Logitech ecostics</Link>
                                </div>
                                <div className="text-muted fs-12">27,Apr 2023 - 5:15PM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face8} alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Loyalty Program</div>
                                </div>
                                <div>$12,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link to="#" className="company-name">Globex Corp</Link>
                                </div>
                                <div className="text-muted fs-12">26,Jul 2023 - 5:28AM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face9} alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">CRM Integration</div>
                                </div>
                                <div>$10,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link to="#" className="company-name">CrystalClear Consulting</Link>
                                </div>
                                <div className="text-muted fs-12">14,May 2023 - 11:29PM</div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={2} id="negotiation">
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face16} alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Media Analytics</div>
                                </div>
                                <div>$9,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link to="#" className="company-name">GlobalConnect</Link>
                                </div>
                                <div className="text-muted fs-12">18,Mar 2023 - 2:32PM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded bg-light">
                                            <img src={face21} alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Lead Nurturing Strategy</div>
                                </div>
                                <div>$4,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link to="#" className="company-name">AlphaTech Solutions</Link>
                                </div>
                                <div className="text-muted fs-12">16,Jul 2023 - 7:53AM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            PL
                                        </span>
                                    </div>
                                    <div className="fs-14">Website Maintenance</div>
                                </div>
                                <div>$7,500</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link to="#" className="company-name">RedRock Industries</Link>
                                </div>
                                <div className="text-muted fs-12">30,Jul 2023 - 6:30AM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face2} alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Newsletter Campaign</div>
                                </div>
                                <div>$2,500</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link to="#" className="company-name">CoreTech Solutions</Link>
                                </div>
                                <div className="text-muted fs-12">12,May 2023 - 10:22AM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face17} alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Graphic Design</div>
                                </div>
                                <div>$5,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link to="#" className="company-name">TechPro Services</Link>
                                </div>
                                <div className="text-muted fs-12">10,Jul 2023 - 10:15PM</div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={2} id="deal-finalized">
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face1} alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">CRM Training</div>
                                </div>
                                <div>$4,200</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link to="#" className="company-name">BlueSky Industries</Link>
                                </div>
                                <div className="text-muted fs-12">15,May 2023 - 8:20AM</div>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card">
                        <Card.Body>
                            <div className="d-flex align-items-center fw-semibold justify-content-between gap-1 flex-wrap">
                                <div className="d-flex align-items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src={face10} alt="" />
                                        </span>
                                    </div>
                                    <div className="fs-14">Market Research</div>
                                </div>
                                <div>$10,500</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link to="#" className="company-name">BrightStar Solutions</Link>
                                </div>
                                <div className="text-muted fs-12">28,Jun 2023 - 9:27PM</div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Modal show={show} onHide={handleClose} className="modal fade" id="create-contact" tabIndex={-1} aria-hidden="true">
                <Modal.Header closeButton>
                    <h6 className="modal-title">New Deal</h6>
                </Modal.Header>
                <Modal.Body className="modal-body px-4">
                    <div className="row gy-3">
                        <Col xl={12}>
                            <div className="mb-0 text-center">
                                <span className="avatar avatar-xxl avatar-rounded">
                                    <img src={face9} alt="" id="profile-img" />
                                    <span className="badge rounded-pill bg-primary avatar-badge">
                                        <input type="file" name="photo" className="position-absolute w-100 h-100 op-0" id="profile-change" />
                                        <i className="fe fe-camera"></i>
                                    </span>
                                </span>
                            </div>
                        </Col>
                        <Col xl={6}>
                            <Form.Label htmlFor="deal-name" className="form-label">Contact Name</Form.Label>
                            <Form.Control type="text" className="form-control" id="deal-name" placeholder="Contact Name" />
                        </Col>
                        <Col xl={6}>
                            <Form.Label htmlFor="deal-lead-score" className="form-label">Deal Value</Form.Label>
                            <Form.Control type="number" className="form-control" id="deal-lead-score" placeholder="Deal Value" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="company-name" className="form-label">Company Name</Form.Label>
                            <Form.Control type="text" className="form-control" id="company-name" placeholder="Company Name" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label className="form-label">Last Contacted</Form.Label>
                            <div className="form-group">
                                <InputGroup className="input-group">
                                    <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
                                    <DatePicker
                                        placeholderText='Choose date and time'
                                        selected={startDate}
                                        onChange={handleDateChange}
                                        timeInputLabel="Time:"
                                        dateFormat="MM/dd/yyyy h:mm aa"
                                        showTimeInput
                                    />
                                </InputGroup>
                            </div>
                        </Col>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='' type="button" className="btn btn-light" onClick={handleClose}
                        data-bs-dismiss="modal">Cancel</Button>
                    <Button variant='' type="button" className="btn btn-primary">Create Deal</Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default Deals;
