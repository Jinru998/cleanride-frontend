import  { FC, Fragment, useEffect } from 'react';
import { Button, Col, Form, InputGroup } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import togglelogo from "../.././../assets/images/brand-logos/toggle-logo.png";
import media87 from "../../../assets/images/media/media-87.svg";
import { Link } from 'react-router-dom';
import { DayCounter } from '../undermaintenance/counterdata';

interface ComingsoonProps { }

const Comingsoon: FC<ComingsoonProps> = () => {
    useEffect(() => {
        const rootDiv = document.getElementById('root');
        if (rootDiv) {
        }
        return () => {
            if (rootDiv) {

                rootDiv.className = ''; // Remove the className when component unmounts
            }
        };
    }, []);

    return (
        <Fragment>
            <Helmet>
                <body className="bg-white"></body>
            </Helmet>
            <div className="row authentication coming-soon mx-0">
                <Col xxl={8} xl={8} lg={8} className="col-12">
                    <div className="authentication-cover">
                        <div className="aunthentication-cover-content text-center">
                            <div className="row justify-content-center align-items-center h-100">
                                <Col xxl={6} xl={8} lg={8} md={12} sm={12} className="col-12">
                                    <div className="mb-2">
                                        <Link to={`${import.meta.env.BASE_URL}dashboards/crm/`}>
                                            <img src={togglelogo} alt="" className="authentication-brand" />
                                        </Link>
                                    </div>
                                    <p className="fw-semibold fs-12 mb-1 op-4">STAY TUNED</p>
                                    <h1 className="fw-bold mb-3">Coming Soon</h1>
                                    <p className="mb-4">Our website is currently under construction, enter your email id to get latest updates and notifications about the website.</p>
                                    <InputGroup className="input-group mb-5">
                                        <Form.Control type="email" className="form-control form-control-lg" placeholder="info@gmail.com" aria-label="info@gmail.com" aria-describedby="button-addon2" />
                                        <Button variant="" className="btn btn-primary" type="button" id="button-addon2">Subscribe</Button>
                                    </InputGroup>
                                    <div className="row mt-4 mb-5 gy-xxl-0 gy-3 justify-content-center" id="timer">
                                        <DayCounter />
                                    </div>
                                    <div className="mt-5">
                                        <div className="btn-list">
                                            <Button variant="primary" className="btn btn-icon btn-wave">
                                                <i className="ri-facebook-line fw-bold"></i>
                                            </Button>
                                            <Button variant="secondary" className="btn btn-icon  btn-wave">
                                                <i className="ri-twitter-line fw-bold"></i>
                                            </Button>
                                            <Button variant="warning" className="btn btn-icon btn-wave">
                                                <i className="ri-instagram-line fw-bold"></i>
                                            </Button>
                                            <Button variant="success" className="btn btn-icon  btn-wave">
                                                <i className="ri-github-line fw-bold"></i>
                                            </Button>
                                            <Button variant="danger" className="btn btn-icon  btn-wave">
                                                <i className="ri-youtube-line fw-bold"></i>
                                            </Button>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xxl={4} xl={4} lg={4} className="d-lg-block d-none px-0">
                    <div className="bg-light w-100 h-100 d-flex align-items-center justify-content-center coming-soom-image-container">
                        <img src={media87} alt="" className="imig-fluid" />
                    </div>
                </Col>

            </div>
        </Fragment>
    );
};

export default Comingsoon;
