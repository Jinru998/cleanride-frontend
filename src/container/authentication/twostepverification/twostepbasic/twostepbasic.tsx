import { FC, Fragment } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import desktoplogo from "../../../../assets/images/brand-logos/desktop-logo.png";
import desktopdarklogo from "../../../../assets/images/brand-logos/desktop-dark.png";
import { Link } from 'react-router-dom';

interface TwostepbasicProps { }

const Twostepbasic: FC<TwostepbasicProps> = () => {
    return (
        <Fragment>
            <div className="container-lg">
                <div className="row justify-content-center align-items-center authentication authentication-basic h-100">
                    <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
                        <div className="my-5 d-flex justify-content-center">
                            <Link to={`${import.meta.env.BASE_URL}dashboards/crm/`}>
                                <img src={desktoplogo} alt="logo" className="desktop-logo" />
                                <img src={desktopdarklogo} alt="logo" className="desktop-dark" />
                            </Link>
                        </div>
                        <Card className="custom-card">
                            <Card.Body className="p-5">
                                <p className="h5 fw-semibold mb-2 text-center">Verify Your Account</p>
                                <p className="mb-4 text-muted op-7 fw-normal text-center">Enter the 4 digit code sent to the registered email Id.</p>
                                <div className="row gy-3">
                                    <Col xl={12} className="mb-2">
                                        <Row>
                                            <div className="col-3">
                                                <Form.Control type="text" className="form-control-lg text-center" id="one" maxLength={1} />
                                            </div>
                                            <div className="col-3">
                                                <Form.Control type="text" className="form-control-lg text-center" id="two" maxLength={1} />
                                            </div>
                                            <div className="col-3">
                                                <Form.Control type="text" className="form-control-lg text-center" id="three" maxLength={1} />
                                            </div>
                                            <div className="col-3">
                                                <Form.Control type="text" className="form-control-lg text-center" id="four" maxLength={1} />
                                            </div>
                                        </Row>
                                        <div className="form-check mt-2">
                                            <Form.Check className="" type="checkbox" value="" id="defaultCheck1" />
                                            <Form.Label className="form-check-label" htmlFor="defaultCheck1">
                                                Did not recieve a code ?<Link to={`${import.meta.env.BASE_URL}pages/email/mailapp/`} className="text-primary ms-2 d-inline-block">Resend</Link>
                                            </Form.Label>
                                        </div>
                                    </Col>
                                    <Col xl={12} className=" d-grid mt-2">
                                        <Link to={`${import.meta.env.BASE_URL}dashboards/crm/`} className="btn btn-lg btn-primary">Verify</Link>
                                    </Col>
                                </div>
                                <div className="text-center">
                                    <p className="fs-12 text-danger mt-3 mb-0"><sup><i className="ri-asterisk"></i></sup>Don't share the verification code with anyone !</p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
            </div>
        </Fragment>
    );
};

export default Twostepbasic;
