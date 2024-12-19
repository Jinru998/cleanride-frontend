import  { FC, Fragment, useEffect } from 'react';
import { Button, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import media88 from "../../../assets/images/media/media-88.svg";
import { Link } from 'react-router-dom';
import togglelogo from "../../../assets/images/brand-logos/toggle-logo.png";
import { DayCounter } from './counterdata';

interface UndermaintenanceProps { }

const Undermaintenance: FC<UndermaintenanceProps> = () => {
    useEffect(() => {
        const rootDiv = document.getElementById('root');
        if (rootDiv) {
            // rootDiv.className = 'grid grid-cols-12 gap-6 w-full';
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
            <div className="row authentication under-maintenance mx-0">

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
                                    <h1 className="fw-bold mb-3">Under Maintenance</h1>
                                    <p className="mb-4">Our website is under maintenance, wait for some time.</p>
                                    <div className="row mt-4 gy-xxl-0 gy-3 mb-5" id="timer">
                                        <DayCounter />
                                    </div>
                                    <div className="mt-5">
                                        <div className="btn-list">
                                            <Button variant='primary' className="btn btn-icon btn-wave waves-effect waves-light">
                                                <i className="ri-facebook-line fw-bold"></i>
                                            </Button>
                                            <Button variant='secondary' className="btn btn-icon btn-wave waves-effect waves-light">
                                                <i className="ri-twitter-line fw-bold"></i>
                                            </Button>
                                            <Button variant='warning' className="btn btn-icon btn-wave waves-effect waves-light">
                                                <i className="ri-instagram-line fw-bold"></i>
                                            </Button>
                                            <Button variant='success' className="btn btn-icon btn-wave waves-effect waves-light">
                                                <i className="ri-github-line fw-bold"></i>
                                            </Button>
                                            <Button variant='danger' className="btn btn-icon btn-wave waves-effect waves-light">
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
                    <div className="bg-light w-100 h-100 d-flex align-items-center justify-content-center under-maintenance-image-container">
                        <img src={media88} alt="" className="imig-fluid" />
                    </div>
                </Col>

            </div>
        </Fragment>
    );
};

export default Undermaintenance;
