import { FC, Fragment } from 'react';
import { Button, Card, Carousel, Col, ListGroup, Pagination, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import media70 from "../../../../assets/images/media/media-70.jpg";
import media71 from "../../../../assets/images/media/media-71.jpg";
import media72 from "../../../../assets/images/media/media-72.jpg";
import media36 from "../../../../assets/images/media/media-36.jpg";
import media31 from "../../../../assets/images/media/media-31.jpg";
import media26 from "../../../../assets/images/media/media-26.jpg";
import media35 from "../../../../assets/images/media/media-35.jpg";
import media39 from "../../../../assets/images/media/media-39.jpg";
import media52 from "../../../../assets/images/media/media-52.jpg";
import media54 from "../../../../assets/images/media/media-54.jpg";
import media56 from "../../../../assets/images/media/media-56.jpg";
import face15 from "../../../../assets/images/faces/15.jpg";
import face10 from "../../../../assets/images/faces/10.jpg";
import face11 from "../../../../assets/images/faces/11.jpg";
import face3 from "../../../../assets/images/faces/3.jpg";

import face5 from "../../../../assets/images/faces/5.jpg";
import face4 from "../../../../assets/images/faces/4.jpg";
import { Populartopics, Populartopics1 } from './blogdata';

interface BlogProps { }

const Blog: FC<BlogProps> = () => {
    return (
        <Fragment>
            <div className="container-lg my-5">

                <Row>
                    <Col xxl={6} xl={12}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Body className=" p-0">
                                <Carousel slide={true} indicators={false} controls={false} fade id="carouselExampleSlidesOnly" className="carousel">
                                    <Carousel.Item interval={2000} className="active">
                                        <Link to="#">
                                            <img src={media70} className="d-block w-100" alt="..." />
                                            <Carousel.Caption className="carousel-caption blog-caption text-start">
                                                <p className="mb-2">The agency has a diverse workforce of just under 18,000 civil servants, and works with many more U.S.</p>
                                                <h6 className="fw-semibold mb-2 text-fixed-white">N.A.S.A</h6>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-sm avatar-rounded me-2">
                                                        <img src={face15} alt="" />
                                                    </span>
                                                    <div className="fw-semibold">Json Taylor - <span className="fs-11 op-7 fw-normal">12,Dec 2022 - 04:34PM</span></div>
                                                </div>
                                            </Carousel.Caption>
                                        </Link>
                                    </Carousel.Item>
                                    <Carousel.Item interval={2000}>
                                        <Link to="#">
                                            <img src={media71} className="d-block w-100" alt="..." />
                                            <Carousel.Caption className="carousel-caption blog-caption text-start">
                                                <p className="mb-2">NASA is committed to providing all categories of businesses in both NASA prime contracts and subcontracts. </p>
                                                <h6 className="fw-semibold mb-2 text-fixed-white">NASA Businesses</h6>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-sm avatar-rounded me-2">
                                                        <img src={face15} alt="" />
                                                    </span>
                                                    <div className="fw-semibold">Elisha Keens - <span className="fs-11 op-7 fw-normal">23,Dec 2022 - 11:27AM</span></div>
                                                </div>
                                            </Carousel.Caption>
                                        </Link>
                                    </Carousel.Item>
                                    <Carousel.Item interval={2000}>
                                        <Link to="#">
                                            <img src={media72} className="d-block w-100" alt="..." />
                                            <Carousel.Caption className="carousel-caption blog-caption text-start">
                                                <p className="mb-2">NASA Nelson served in the U.S. Senate for 18 years from Florida space shuttle mission 61-C in 1986.</p>
                                                <h6 className="fw-semibold mb-2 text-fixed-white">NASA Leadership</h6>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-sm avatar-rounded me-2">
                                                        <img src={face4} alt="" />
                                                    </span>
                                                    <div className="fw-semibold">Melissa Blue - <span className="fs-11 op-7 fw-normal">16,Dec 2022 - 9:45AM</span></div>
                                                </div>
                                            </Carousel.Caption>
                                        </Link>
                                    </Carousel.Item>
                                </Carousel>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={6} xl={12}>
                        <Row>
                            <Col xxl={6} xl={6} lg={6} md={6} sm={6}>
                                <Card className="custom-card">
                                    <Link to="#">
                                        <img src={media36} className="card-img-top" alt="..." />
                                    </Link>
                                    <Card.Body>
                                        <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`} className="fw-semibold fs-14 text-dark mb-1">Touring excites in winter !</Link>
                                        <p className="card-text text-muted mb-3">The holographic principle, theorized to be a property of quantum gravity, postulates that the description.</p>
                                        <Link to="#" className="btn btn-primary-light">Read More</Link>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar avatar-sm avatar-rounded me-2">
                                                    <img src={face10} alt="" />
                                                </div>
                                                <div>
                                                    <p className="mb-0 fw-semibold">Justin Kim</p>
                                                    <p className="text-muted fs-10 mb-0">20,Dec 2022 - 16:32</p>
                                                </div>
                                            </div>
                                            <div className="btn-list">
                                                <Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-thumb-up-line"></i></Button>
                                                <Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-chat-2-line"></i></Button>
                                            </div>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                            <Col xxl={6} xl={6} lg={6} md={6} sm={6}>
                                <Card className="custom-card">
                                    <Link to="#">
                                        <img src={media35} className="card-img-top" alt="..." />
                                    </Link>
                                    <Card.Body>
                                        <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`} className="fw-semibold fs-14 text-dark mb-1"> Boat manufacutrers are in debt !</Link>
                                        <p className="card-text text-muted mb-3">when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        <Link to="#" className="btn btn-primary-light">Read More</Link>
                                    </Card.Body>
                                    <Card.Footer>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className="avatar avatar-sm avatar-rounded me-2">
                                                    <img src={face5} alt="" />
                                                </div>
                                                <div>
                                                    <p className="mb-0 fw-semibold">Monika Karen</p>
                                                    <p className="text-muted fs-10 mb-0">25,Dec 2022 - 12:45</p>
                                                </div>
                                            </div>
                                            <div className="btn-list">
                                                <Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-thumb-up-line"></i></Button>
                                                <Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-chat-2-line"></i></Button>
                                            </div>
                                        </div>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={12}>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h5 className="mb-0 fw-semibold">Popular Topics</h5>
                            <p className="mb-0 fw-semibold">
                                <Link to="#" className="text-primary"><u>View All</u></Link>
                            </p>
                        </div>
                        <Row>
                            {Populartopics.map((idx) => (
                                <Col xxl={2} xl={2} lg={2} md={4} sm={4} className="col-6" key={Math.random()}>
                                    <Link to="#">
                                        <Card className="custom-card bg-dark overlay-card text-fixed-white">
                                            <img src={idx.src} className="card-img" alt="..." />
                                            <div className="card-img-overlay d-flex flex-column p-0 over-content-bottom">
                                                <div className="card-footer border-top-0">
                                                    <h6 className="fw-semibold mb-0 text-fixed-white">{idx.text}</h6>
                                                </div>
                                            </div>
                                        </Card>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col xl={12}>
                        <Row>
                            <Col xl={6} xxl={8} lg={12} md={12}>
                                <Row>
                                    <Col xxl={6} xl={6} lg={6} md={6}>
                                        <Card className="custom-card">
                                            <Link to="#">
                                                <img src={media26} className="card-img-top" alt="..." />
                                            </Link>
                                            <Card.Body>
                                                <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`} className="fw-semibold fs-14 text-dark mb-1">Features of new car !</Link>
                                                <p className="card-text text-muted mb-3">The holographic principle, theorized to be a property of quantum gravity, postulates that the description.</p>
                                                <Link to="#" className="btn btn-primary-light">Read More</Link>
                                            </Card.Body>
                                            <Card.Footer className="card-footer">
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar avatar-sm avatar-rounded me-2">
                                                            <img src={face11} alt="" />
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-semibold">Alister Chuk</p>
                                                            <p className="text-muted fs-10 mb-0">18,Dec 2022 - 12:25</p>
                                                        </div>
                                                    </div>
                                                    <div className="btn-list">
                                                        <Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm m-1"><i className="ri-thumb-up-line"></i></Button>
                                                        <Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm m-1"><i className="ri-chat-2-line"></i></Button>
                                                    </div>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                    <Col xxl={6} xl={6} lg={6} md={6}>
                                        <Card className="custom-card">
                                            <Link to="#">
                                                <img src={media31} className="card-img-top" alt="..." />
                                            </Link>
                                            <Card.Body>
                                                <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`} className="fw-semibold fs-14 text-dark mb-1">Beautiful beach on a sunny day !</Link>
                                                <p className="card-text text-muted mb-3">The holographic principle, theorized to be a property of quantum gravity, postulates that the description.</p>
                                                <Link to="#" className="btn btn-primary-light">Read More</Link>
                                            </Card.Body>
                                            <Card.Footer className="card-footer">
                                                <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar avatar-sm avatar-rounded me-2">
                                                            <img src={face3} alt="" />
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-semibold">Samantha Nans</p>
                                                            <p className="text-muted fs-10 mb-0">25,Dec 2022 - 04:25</p>
                                                        </div>
                                                    </div>
                                                    <div className="btn-list">
                                                        <Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm m-1"><i className="ri-thumb-up-line"></i></Button>
                                                        <Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm m-1"><i className="ri-chat-2-line"></i></Button>
                                                    </div>
                                                </div>
                                            </Card.Footer>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={6} xxl={4} lg={12} md={12}>
                                <Card className="custom-card">
                                    <Card.Header className="card-header d-flex align-items-center justify-content-between">
                                        <Card.Title>
                                            Featured Blogs
                                        </Card.Title>
                                        <div>
                                            <span className="badge bg-primary-transparent">32 Blogs</span>
                                        </div>
                                    </Card.Header>
                                    <Card.Body>
                                        <ListGroup>
                                            <ListGroup.Item>
                                                <div className="d-flex flex-wrap align-items-center">
                                                    <span className="avatar avatar-xl me-3">
                                                        <img src={media39} className="img-fluid" alt="..." />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <Link to="#" className="fs-14 fw-semibold mb-0">Samantha Jack</Link>
                                                        <p className="mb-1 popular-blog-content text-truncate">
                                                            There are many variations of passages of Lorem Ipsum available
                                                        </p>
                                                        <span className="text-muted fs-11">24,Nov 2022 - 18:27</span>
                                                    </div>
                                                    <div>
                                                        <Button variant='' className="btn btn-icon btn-light btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></Button>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex flex-wrap align-items-center">
                                                    <span className="avatar avatar-xl me-3">
                                                        <img src={media56} className="img-fluid" alt="..." />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <Link to="#" className="fs-14 fw-semibold mb-0">Kirsten Sam</Link>
                                                        <p className="mb-1 popular-blog-content text-truncate">
                                                            Latin words, combined with a handful of model sentence
                                                        </p>
                                                        <span className="text-muted fs-11">28,Nov 2022 - 10:45</span>
                                                    </div>
                                                    <div>
                                                        <Button variant='' className="btn btn-icon btn-light btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></Button>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex flex-wrap align-items-center">
                                                    <span className="avatar avatar-xl me-3">
                                                        <img src={media54} className="img-fluid" alt="..." />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <Link to="#" className="fs-14 fw-semibold mb-0">Jessica Karon</Link>
                                                        <p className="mb-1 popular-blog-content text-truncate">
                                                            Contrary to popular belief, Lorem Ipsum is not simply random
                                                        </p>
                                                        <span className="text-muted fs-11">30,Nov 2022 - 08:32</span>
                                                    </div>
                                                    <div>
                                                        <Button variant='' className="btn btn-icon btn-light btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></Button>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="d-flex flex-wrap align-items-center">
                                                    <span className="avatar avatar-xl me-3">
                                                        <img src={media52} className="img-fluid" alt="..." />
                                                    </span>
                                                    <div className="flex-fill">
                                                        <Link to="#" className="fs-14 fw-semibold mb-0">Broad Stuart</Link>
                                                        <p className="mb-1 popular-blog-content text-truncate">
                                                            It was popularised in the 1960s with the release of Letraset sheets containing
                                                        </p>
                                                        <span className="text-muted fs-11">3,Dec 2022 - 12:56</span>
                                                    </div>
                                                    <div>
                                                        <Button variant='' className="btn btn-icon btn-light btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></Button>
                                                    </div>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item className="text-center">
                                                <Button variant='' className="btn btn-primary-light">Load more</Button>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={12}>
                        <Row>
                            {Populartopics1.map((idx) => (
                                <Col xxl={3} xl={6} lg={6} md={6} sm={6} className=" col-12" key={Math.random()}>
                                    <Card className="custom-card">
                                        <Link to="#">
                                            <img src={idx.src1} className="card-img-top" alt="..." />
                                        </Link>
                                        <Card.Body>
                                            <Link to={`${import.meta.env.BASE_URL}pages/blog/blogdetails/`} className="fw-semibold fs-14 text-dark mb-1">{idx.title}</Link>
                                            <p className="card-text text-muted mb-3">{idx.text}</p>
                                            <Link to="#" className="btn btn-primary-light">Read More</Link>
                                        </Card.Body>
                                        <Card.Footer className="card-footer">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm avatar-rounded me-2">
                                                        <img src={idx.src2} alt="" />
                                                    </div>
                                                    <div>
                                                        <p className="mb-0 fw-semibold">{idx.name}</p>
                                                        <p className="text-muted fs-10 mb-0">{idx.time}</p>
                                                    </div>
                                                </div>
                                                <div className="btn-list">
                                                    <Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-thumb-up-line"></i></Button>
                                                    <Button variant='' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm"><i className="ri-chat-2-line"></i></Button>
                                                </div>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
                <div className="float-end mb-4">
                    <nav aria-label="Page navigation" className="">
                        <Pagination className="pagination mb-0">
                            <Pagination.Item disabled href="#">Prev</Pagination.Item>
                            <Pagination.Item active href="#">1</Pagination.Item>
                            <Pagination.Item href="#">2</Pagination.Item>
                            <Pagination.Item href="#">
                                <i className="bi bi-three-dots"></i></Pagination.Item>
                            <Pagination.Item href="#">17</Pagination.Item>
                            <Pagination.Item className="pagination-next" href="#">next</Pagination.Item>
                        </Pagination>
                    </nav>
                </div>

            </div>
        </Fragment>
    );
};

export default Blog;
