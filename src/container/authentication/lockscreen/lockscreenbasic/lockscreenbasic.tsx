import  { FC, Fragment , useState} from 'react';
import { Button, Card, Col, Form, InputGroup } from 'react-bootstrap';
import desktoplogo from "../../../../assets/images/brand-logos/desktop-logo.png";
import desktopdarklogo from "../../../../assets/images/brand-logos/desktop-dark.png";
import face15 from "../../../../assets/images/faces/15.jpg";
import { Link } from 'react-router-dom';

interface LockscreenbasicProps { }

const Lockscreenbasic: FC<LockscreenbasicProps> = () => {
    const [passwordshow, setpasswordshow] = useState(false);
    // useEffect(() => {
    //     LocalStorageBackup(ThemeChanger);
    // }, []);
    return (
        <Fragment>
            <div className="container-lg">
                <div className="row justify-content-center authentication authentication-basic align-items-center h-100">
                    <Col xxl={4} xl={5} lg={5} md={6} sm={8} className="col-12">
                        <div className="my-5 d-flex justify-content-center">
                            <Link to={`${import.meta.env.BASE_URL}dashboards/crm/`}>
                                <img src={desktoplogo} alt="logo" className="desktop-logo" />
                                <img src={desktopdarklogo} alt="logo" className="desktop-dark" />
                            </Link>
                        </div>
                        <Card className="custom-card">
                            <Card.Body className="p-5">
                                <p className="h5 fw-semibold mb-2 text-center">Lock Screen</p>
                                <p className="mb-3 text-muted op-7 fw-normal text-center">Hello Jhon !</p>
                                <div className="d-flex align-items-center mb-3">
                                    <div className="lh-1">
                                        <span className="avatar avatar-md avatar-rounded">
                                            <img src={face15} alt="" />
                                        </span>
                                    </div>
                                    <div className="ms-3">
                                        <p className="mb-0 fw-semibold text-dark">jhonslicer21@gmail.com</p>
                                    </div>
                                </div>
                                <div className="row gy-3">
                                    <Col xl={12} className="mb-2">
                                        <Form.Label htmlFor="lockscreen-password" className=" text-default">Password</Form.Label>
                                        <InputGroup>
                                        <Form.Control type={(passwordshow) ? 'text' : "password"} className="form-control-lg" id="lockscreen-password" placeholder="password" />
                                            <Button variant='light' className="input-group-text" onClick={()=>setpasswordshow(!passwordshow)}>
														<i className={`${passwordshow ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} aria-hidden="true"></i>
													</Button>
                                        </InputGroup>
                                        <div className="mt-3">
                                            <div className="form-check">
                                                <Form.Check className="" type="checkbox" value="" id="defaultCheck1" />
                                                <Form.Label className="text-muted fw-normal" htmlFor="defaultCheck1">
                                                    Remember password ?
                                                </Form.Label>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xl={12} className="d-grid mt-2">
                                        <Link to={`${import.meta.env.BASE_URL}dashboards/crm/`} className="btn btn-lg btn-primary">Unlock</Link>
                                    </Col>
                                </div>
                                <div className="text-center">
                                    <p className="fs-12 text-muted mt-3 mb-0">Try unlock with different methods <Link className="text-success" to="#"><u>Finger print</u></Link> / <Link className="text-success" to="#"><u>Face Id</u></Link></p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
            </div>
        </Fragment>
    );
};
export default Lockscreenbasic;
