import  { FC, Fragment , useState} from 'react';
import { Button, Card, Col, Form, InputGroup } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import desktoplogo from "../../../../assets/images/brand-logos/desktop-logo.png";
import desktopdarklogo from "../../../../assets/images/brand-logos/desktop-dark.png";

interface BasicProps {}

const Basic: FC<BasicProps> = () => {
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);

    return(
  <Fragment>
    <div className="container-lg">
        <div className="row justify-content-center authentication authentication-basic align-items-center h-100">
            <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
                <div className="my-5 d-flex justify-content-center">
                    <Link to={`${import.meta.env.BASE_URL}dashboards/crm/`}>
                        <img src={desktoplogo} alt="logo" className="desktop-logo"/>
                        <img src={desktopdarklogo} alt="logo" className="desktop-dark"/>
                    </Link>
                </div>
                <Card className="custom-card">
                    <div className="card-body p-5">
                        <p className="h5 fw-semibold mb-2 text-center">Create Password</p>
                        <p className="mb-4 text-muted op-7 fw-normal text-center">Hello Jhon !</p>
                        <div className="row gy-3">
                            <Col xl={12}>
                                <Form.Label htmlFor="create-password" className="form-label text-default">Password</Form.Label>
                                <InputGroup>
                                <Form.Control type={(passwordshow1) ? 'text' : "password"} className="form-control-lg" id="create-password" placeholder="password" />
                                    <Button variant='' className="btn btn-light" type="button" onClick={()=>setpasswordshow1(!passwordshow1)}
                                    ><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} aria-hidden="true"></i></Button>
                                </InputGroup>
                            </Col>
                            <Col xl={12} className=" mb-2">
                                <label htmlFor="create-confirmpassword" className="form-label text-default">Confirm Password</label>
                                <InputGroup>
                                     <Form.Control type={(passwordshow2) ? 'text' : "password"} className="form-control-lg" id="create-confirmpassword" placeholder="password" />
                                    <Button variant='' className="btn btn-light" type="button" onClick={()=>setpasswordshow2(!passwordshow2)}
                                    ><i className={`${passwordshow2 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} aria-hidden="true"></i></Button>
                                </InputGroup>
                                <div className="mt-2">
                                    <div className="form-check">
                                        <Form.Check className="" type="checkbox" value="" id="defaultCheck1"/>
                                        <Form.Label className="form-check-label text-muted fw-normal" htmlFor="defaultCheck1">
                                            Remember password ?
                                        </Form.Label>
                                    </div>
                                </div>
                            </Col>
                            <Col xl={12} className=" d-grid mt-2">
                                <Button variant='primary' className="btn btn-lg">Save Password</Button>
                            </Col>
                        </div>
                        <div className="text-center">
                            <p className="fs-12 text-muted mt-3">Back to home ? <Link to={`${import.meta.env.BASE_URL}dashboards/crm/`} className="text-primary">Click Here</Link></p>
                        </div>
                        <div className="text-center my-3 authentication-barrier">
                            <span>OR</span>
                        </div>
                        <div className="btn-list text-center">
                            <Button variant='light' className="btn btn-icon">
                                <i className="ri-facebook-line fw-bold text-dark op-7"></i>
                            </Button>
                            <Button variant='light' className="btn btn-icon">
                                <i className="ri-google-line fw-bold text-dark op-7"></i>
                            </Button>
                            <Button variant='light' className="btn btn-icon">
                                <i className="ri-twitter-line fw-bold text-dark op-7"></i>
                            </Button>
                        </div>
                    </div>
                </Card>
            </Col>
        </div>
    </div>
  </Fragment>
); };

export default Basic;
