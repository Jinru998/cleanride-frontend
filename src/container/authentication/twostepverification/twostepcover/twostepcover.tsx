import  { FC, Fragment, useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import desktoplogo from "../../../../assets/images/brand-logos/desktop-logo.png";
import desktopdarklogo from "../../../../assets/images/brand-logos/desktop-dark.png";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from 'swiper/react';
import img2 from "../../../../assets/images/authentication/2.png";
import img3 from "../../../../assets/images/authentication/3.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

interface TwostepcoverProps { }

const Twostepcover: FC<TwostepcoverProps> = () => {
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
            <div className="row authentication mx-0">

                <Col xxl={7} xl={7} lg={12}>
                    <div className="row justify-content-center align-items-center h-100">
                        <Col xxl={6} xl={7} lg={7} md={7} sm={8} className=" col-12">
                            <div className="p-5">
                                <div className="mb-3">
                                    <Link to={`${import.meta.env.BASE_URL}dashboards/crm/`}>
                                        <img src={desktoplogo} alt="" className="authentication-brand desktop-logo"/>
                                        <img src={desktopdarklogo} alt="" className="authentication-brand desktop-dark"/>
                                    </Link>
                                </div>
                                <p className="h5 fw-semibold mb-1">Verify Your Account</p>
                                <p className="mb-4 text-muted op-7 fw-normal">Enter the 4 digit code sent to the registered email Id.</p>
                                <Row>
                                    <Col xl={12} className=" mb-4">
                                        <Row>
                                            <div className="col-3">
                                                <Form.Control type="text" className="form-control-lg text-center" id="one"
                                                    maxLength={1} />
                                            </div>
                                            <div className="col-3">
                                                <Form.Control type="text" className="form-control-lg text-center" id="two"
                                                    maxLength={1} />
                                            </div>
                                            <div className="col-3">
                                                <Form.Control type="text" className="form-control-lg text-center" id="three"
                                                    maxLength={1} />
                                            </div>
                                            <div className="col-3">
                                                <Form.Control type="text" className="form-control-lg text-center" id="four"
                                                    maxLength={1} />
                                            </div>
                                        </Row>
                                        <div className="form-check mt-2 mb-0">
                                            <Form.Check className="" type="checkbox" value="" id="defaultCheck1" />
                                            <Form.Label className="form-check-label" htmlFor="defaultCheck1">
                                                Did not recieve a code ?<Link to={`${import.meta.env.BASE_URL}pages/email/mailapp/`} className="text-primary ms-2 d-inline-block">Resend</Link>
                                            </Form.Label>
                                        </div>
                                    </Col>
                                    <Col xl={12} className="d-grid">
                                        <Link to={`${import.meta.env.BASE_URL}dashboards/crm/`} className="btn btn-lg btn-primary">Verify</Link>
                                    </Col>
                                </Row>
                                <div className="text-center">
                                    <p className="fs-12 text-danger mt-3"><sup><i className="ri-asterisk"></i></sup>Don't share the verification code with anyone !</p>
                                </div>
                            </div>
                        </Col>
                    </div>
                </Col>
                <Col xxl={5} xl={5} lg={5} className=" d-xl-block d-none px-0">
                    <div className="authentication-cover">
                        <div className="aunthentication-cover-content rounded">
                            <div className="swiper keyboard-control">
                                <Swiper spaceBetween={30} navigation={true} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, }} modules={[Pagination, Autoplay, Navigation]} className="mySwiper">
                                    <SwiperSlide>
                                        <div className="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                                            <div>
                                                <div className="mb-5">
                                                    <img src={img2} className="authentication-image" alt="" />
                                                </div>
                                                <h6 className="fw-semibold text-fixed-white">Create Password</h6>
                                                <p className="fw-normal fs-14 op-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis. Porro rem voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                                                <div>
                                                    <div className="mb-5">
                                                        <img src={img3} className="authentication-image" alt="" />
                                                    </div>
                                                    <h6 className="fw-semibold text-fixed-white">Create Password</h6>
                                                    <p className="fw-normal fs-14 op-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis. Porro rem voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="text-fixed-white text-center p-5 d-flex align-items-center justify-content-center">
                                            <div>
                                                <div className="mb-5">
                                                    <img src={img2} className="authentication-image" alt="" />
                                                </div>
                                                <h6 className="fw-semibold text-fixed-white">Create Password</h6>
                                                <p className="fw-normal fs-14 op-7"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis. Porro rem voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </Col>

            </div>
        </Fragment>
    );
};

export default Twostepcover;
