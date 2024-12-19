import { FC, Fragment, useEffect, useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';
import desktoplogo from "../../../../assets/images/brand-logos/desktop-logo.png";
import desktopdarklogo from "../../../../assets/images/brand-logos/desktop-dark.png";
import { Link } from 'react-router-dom';
import face15 from "../../../../assets/images/faces/15.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import img2 from "../../../../assets/images/authentication/2.png";
import img3 from "../../../../assets/images/authentication/3.png";
import { Helmet } from 'react-helmet';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

interface LockscreencoverProps { }

const Lockscreencover: FC<LockscreencoverProps> = () => {
    const [passwordshow1, setpasswordshow1] = useState(false);
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
                    <Row className=" justify-content-center align-items-center h-100">
                        <Col xxl={6} xl={7} lg={7} md={7} sm={8} className="col-12">
                            <div className="p-5">
                                <div className="mb-3">
                                    <Link to={`${import.meta.env.BASE_URL}dashboards/crm/`}>
                                        <img src={desktoplogo} alt="" className="authentication-brand desktop-logo" />
                                        <img src={desktopdarklogo} alt="" className="authentication-brand desktop-dark" />
                                    </Link>
                                </div>
                                <p className="h5 fw-semibold mb-2">Lock Screen</p>
                                <p className="mb-3 text-muted op-7 fw-normal">Hello Jhon !</p>
                                <div className="d-flex align-items-center mb-4">
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
                                    <Col xl={12} className="mb-3">
                                        <label htmlFor="lockscreen-password" className="form-label text-default">Password</label>
                                        <InputGroup>
                                        <Form.Control type={(passwordshow1) ? 'text' : "password"} className="form-control-lg" id="lockscreen-password" placeholder="password" />
                                            <Button variant='light' className="btn" type="button" onClick={()=>setpasswordshow1(!passwordshow1)}
                                                id="button-addon2"><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`} aria-hidden="true"></i></Button>
                                           
                                        </InputGroup>
                                        <div className="mt-2">
                                            <div className="form-check">
                                                <Form.Check className="" type="checkbox" value="" id="defaultCheck1" />
                                                <Form.Label className=" text-muted fw-normal" htmlFor="defaultCheck1">
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
                                    <p className="fs-12 text-muted mt-4">Try unlock with different methods <Link className="text-success" to="#"><u>Finger print</u></Link> / <Link className="text-success" to="#"><u>Face Id</u></Link></p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xxl={5} xl={5} lg={5} className="d-xl-block d-none px-0">
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

export default Lockscreencover;
