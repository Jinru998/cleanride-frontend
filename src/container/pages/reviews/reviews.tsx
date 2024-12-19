import { FC, Fragment } from 'react';
import { Card, Col, Pagination } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import { Reviewslist } from './reviewsdata';

interface ReviewsProps { }

const Reviews: FC<ReviewsProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Reviews" heading="Pages" active="Reviews" />
            <div className="container-lg reviews-container">
                <div className="row justify-content-center">
                    <Col xxl={10} xl={12} lg={12} md={12} sm={12}>
                        <div className="row gy-4">
                            {Reviewslist.map((idx) => (
                                <Col xxl={4} xl={6} lg={6} md={6} sm={12} key={Math.random()}>
                                    <Card className="custom-card">
                                        <Card.Body>
                                            <div className="d-flex align-items-center mb-3">
                                                <span className="avatar avatar-md avatar-rounded me-3">
                                                    <img src={idx.src} alt="" />
                                                </span>
                                                <div>
                                                    <p className="mb-0 fw-semibold fs-14 text-primary">{idx.name}</p>
                                                    <p className="mb-0 fs-10 fw-semibold text-muted">{idx.title}</p>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <span className="text-muted">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  -- <Link to="#" className="fw-semibold fs-11 text-primary" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" data-bs-placement="top" data-bs-title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio">Read More</Link></span>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <span className="text-muted">Rating : </span>
                                                    <span className="text-warning d-block ms-1">
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-fill"></i>
                                                        <i className="ri-star-fill"></i>
                                                        <i className={`ri-star-${idx.class}`}></i>
                                                    </span>
                                                </div>
                                                <div className="float-end fs-12 fw-semibold text-muted text-end">
                                                    <span>{idx.text}</span>
                                                    <span className="d-block fw-normal fs-12 text-success"><i>{idx.name}</i></span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                            <Pagination className="mb-5 justify-content-end">
                                <Pagination.Item disabled href="#">Prev </Pagination.Item>
                                <Pagination.Item active href="#">1</Pagination.Item>
                                <Pagination.Item href="#">2</Pagination.Item>
                                <Pagination.Item href="#">3</Pagination.Item>
                                <Pagination.Item className="pagination-next" href="#"> next </Pagination.Item>
                            </Pagination>
                        </div>
                    </Col>
                </div>
            </div>
        </Fragment>
    );
};
export default Reviews;
