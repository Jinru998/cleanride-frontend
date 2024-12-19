import  { FC, Fragment , useState} from 'react';
import { Button, Card, Col, Form, InputGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import desktoplogo from "../../../../assets/images/brand-logos/desktop-logo.png";
import desktopdarklogo from "../../../../assets/images/brand-logos/desktop-dark.png";

interface ResetbasicProps { }

const Resetbasic: FC<ResetbasicProps> = () => {
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);
    const [passwordshow3, setpasswordshow3] = useState(false);
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
                                <p className="h5 fw-semibold mb-2 text-center">Reset Password</p>
                                <p className="mb-4 text-muted op-7 fw-normal text-center">Hello Jhon !</p>
                                <Row className="row gy-3">
                                    <Col xl={12}>
                                        <Form.Label htmlFor="reset-password" className="form-label text-default">Current Password</Form.Label>
                                        <InputGroup>
                                                 <Form.Control type={(passwordshow1) ? 'text' : "password"} className="form-control-lg" id="reset-password" placeholder="password" />
                                            <Button variant='light' className="btn" onClick={()=>setpasswordshow1(!passwordshow1)}>
														<i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} aria-hidden="true"></i>
													</Button>
                                        </InputGroup>
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Label htmlFor="reset-newpassword" className="form-label text-default">New Password</Form.Label>
                                        <InputGroup>
                                                 <Form.Control type={(passwordshow2) ? 'text' : "password"} className="form-control-lg" id="reset-newpassword" placeholder="password" />
                                            <Button variant='light' className="btn" onClick={()=>setpasswordshow2(!passwordshow2)}>
														<i className={`${passwordshow2 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} aria-hidden="true"></i>
													</Button>
                                        </InputGroup>
                                    </Col>
                                    <Col xl={12} className="mb-2">
                                        <Form.Label htmlFor="reset-confirmpassword" className="form-label text-default">Confirm Password</Form.Label>
                                        <InputGroup>
                                                 <Form.Control type={(passwordshow3) ? 'text' : "password"} className="form-control-lg" id="reset-confirmpassword" placeholder="password" />
                                            <Button variant='light' className="btn" onClick={()=>setpasswordshow3(!passwordshow3)}>
														<i className={`${passwordshow3 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} aria-hidden="true"></i>
													</Button>
                                        </InputGroup>
                                        <div className="mt-3">
                                            <div className="form-check">
                                                <Form.Check className="" type="checkbox" value="" id="defaultCheck1" />
                                                <Form.Label className="form-check-label text-muted fw-normal" htmlFor="defaultCheck1">
                                                    Remember password ?
                                                </Form.Label>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12} className=" d-grid mt-2">
                                        <Link to={`${import.meta.env.BASE_URL}authentication/signin/signinbasic/`} className="btn btn-lg btn-primary">Create</Link>
                                    </Col>
                                </Row>
                                <div className="text-center">
                                    <p className="fs-12 text-muted mt-3">Already have an account? <Link to={`${import.meta.env.BASE_URL}authentication/signin/signinbasic/`} className="text-primary">Sign In</Link></p>
                                </div>
                                <div className="text-center my-3 authentication-barrier">
                                    <span>OR</span>
                                </div>
                                <div className="btn-list text-center">
                                    <Button variant='light' className="btn btn-icon ">
                                        <i className="ri-facebook-line fw-bold text-dark op-7"></i>
                                    </Button>
                                    <Button variant='light' className="btn btn-icon">
                                        <i className="ri-google-line fw-bold text-dark op-7"></i>
                                    </Button>
                                    <Button variant='light' className="btn btn-icon">
                                        <i className="ri-twitter-line fw-bold text-dark op-7"></i>
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
            </div>
        </Fragment>
    );
};
export default Resetbasic;
