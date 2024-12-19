import { FC, Fragment, useState, useEffect } from 'react';
import { Alert, Button, Card, Col, Form, InputGroup } from 'react-bootstrap';
import desktoplogo from "../assets/images/brand-logos/desktop-logo.png";
import desktopdarklogo from "../assets/images/brand-logos/desktop-dark.png";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebaseapi';
import { connect } from 'react-redux';
import { ThemeChanger } from "../redux/action";
import { LocalStorageBackup } from '../components/common/switcher/switcherdata/switcherdata';

interface SignupProps { }

const Signup: FC<SignupProps> = ({ ThemeChanger }: any) => {
    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);
    const [err, setError] = useState("");
    const [data, setData] = useState({
        fullname: "",
        email: "",
        password: "",
    });
    const { email, password, fullname } = data;
    const changeHandler = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const Signup = () => {
        // e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password).then(
            user => { console.log(user); routeChange(); }).catch(err => { console.log(err); setError(err.message); });
    };
    const navigate = useNavigate();
    const routeChange = () => {
        const path = `${import.meta.env.BASE_URL}dashboards/crm/`;
        navigate(path);
    };

    useEffect(() => {
        LocalStorageBackup(ThemeChanger);
    }, []);
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
                            <Card.Body className="card-body p-5">
                                <p className="h5 fw-semibold mb-2 text-center">Sign Up</p>
                                <p className="mb-4 text-muted op-7 fw-normal text-center">Welcome & Join us by creating a free account !</p>
                                <div className="row gy-3">
                                    {err && <Alert variant="danger">{err}</Alert>}
                                    <Col xl={12}>
                                        <Form.Label htmlFor="signup-firstname" className="text-default">First Name</Form.Label>
                                        <Form.Control type="text" className="form-control-lg" id="signup-firstname" placeholder="first name"
                                            value={fullname}
                                            onChange={changeHandler} />
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Label htmlFor="signup-lastname" className="form-label text-default">Email</Form.Label>
                                        <Form.Control type="text" className=" form-control-lg" id="signup-lastname" placeholder="email" name="email"
                                            value={email}
                                            onChange={changeHandler} />
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Label htmlFor="signup-password" className="form-label text-default">Password</Form.Label>
                                        <InputGroup>
                                            <Form.Control type={(passwordshow1) ? 'text' : "password"} className="form-control form-control-lg" id="signup-password"
                                                name="password"
                                                value={password}
                                                onChange={changeHandler} placeholder="password" />
                                            <Button variant='light' className="btn btn-light" type="button" onClick={() => setpasswordshow1(!passwordshow1)}
                                                id="button-addon2"><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} aria-hidden="true"></i></Button>
                                        </InputGroup>
                                    </Col>
                                    <Col xl={12} className="mb-2">
                                        <Form.Label htmlFor="signup-confirmpassword" className="form-label text-default">Confirm Password</Form.Label>
                                        <InputGroup>
                                            <Form.Control value={password}
                                                onChange={changeHandler} type={(passwordshow1) ? 'text' : "password"} className="form-control form-control-lg" id="signup-confirmpassword"
                                                placeholder="confirm password" />
                                            <Button variant='light' className="btn btn-light" type="button" onClick={() => setpasswordshow2(!passwordshow2)}
                                                id="button-addon2"><i className={`${passwordshow2 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} aria-hidden="true"></i></Button>
                                        </InputGroup>
                                        <div className="form-check mt-3">
                                            <Form.Check className="" type="checkbox" value="" id="defaultCheck1" />
                                            <Form.Label className="form-check-label text-muted fw-normal" htmlFor="defaultCheck1">
                                                By creating a account you agree to our <Link to={`${import.meta.env.BASE_URL}pages/termsconditions/`} className="text-success"><u>Terms & Conditions</u></Link> and <Link to="#" className="text-success"><u>Privacy Policy</u></Link>
                                            </Form.Label>
                                        </div>
                                    </Col>
                                    <Col xl={12} className="d-grid mt-2">
                                        <Button variant='light' className="btn btn-lg btn-primary" onClick={Signup}>Sign up </Button>
                                    </Col>
                                </div>
                                <div className="text-center">
                                    <p className="fs-12 text-muted mt-3">Already have an account? <Link to={`${import.meta.env.BASE_URL}firebase/login`} className="text-primary">Sign In</Link></p>
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
                            </Card.Body>
                        </Card>
                    </Col>
                </div>
            </div>
        </Fragment>
    );
};
const mapStateToProps = (state: any) => ({
    local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Signup);

