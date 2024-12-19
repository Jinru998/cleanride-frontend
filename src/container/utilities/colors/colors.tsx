import  { FC, Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { Backgrounddata, Othercolors, Outlinedata } from './colordata';

interface ColorsProps { }

const Colors: FC<ColorsProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Colors" heading="Utilities" active="Colors" />
            <Row>
                <Col lg={12} sm={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Background Colors
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className="row-cols-12 d-flex align-items-center">
                                {Backgrounddata.map((idx) => (
                                    <div className="p-3 col" key={Math.random()}>
                                        <div className={`m-2 ${idx.class} mx-auto color-container`}></div>
                                        <p className="pb-0 mb-0 fw-semibold text-center"><code>.{idx.class}</code></p>
                                    </div>
                                ))}
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={12} sm={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Background gradients
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row row-cols-12 d-flex align-items-center">
                                {Backgrounddata.map((idx) => (
                                    <div className="p-3 col" key={Math.random()}>
                                        <div className={`m-2 ${idx.class}-gradient mx-auto color-container`}></div>
                                        <p className="pb-0 mb-0 fw-semibold text-center"><code>.bg-{idx.class}</code></p>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={12} sm={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Background transparent colors
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row row-cols-12 d-flex align-items-center">
                                {Backgrounddata.map((idx) => (
                                    <div className="p-3 col" key={Math.random()}>
                                        <div className={`m-2 ${idx.class}-transparent mx-auto color-container shadow-none`}></div>
                                        <p className="pb-0 mb-0 fw-semibold text-center"><code>.{idx.class}-transparent</code></p>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={12} sm={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Background outline colors
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row row-cols-12 d-flex align-items-center">
                                {Outlinedata.map((idx) => (
                                    <div className="p-3 col" key={Math.random()}>
                                        <div className={`m-2 bg-outline-${idx.class} mx-auto color-container`}><i className="bi bi-emoji-smile fs-18"></i></div>
                                        <p className="pb-0 mb-0 fw-semibold text-center"><code>.bg-outline-{idx.class}</code></p>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={12} sm={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Border Colors
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row row-cols-12 d-flex align-items-center">
                                {Outlinedata.map((idx) => (
                                    <div className="p-3 col" key={Math.random()}>
                                        <div className={`m-2 border border-${idx.class} mx-auto color-container`}></div>
                                        <p className="pb-0 mb-0 fw-semibold text-center"><code>.border-{idx.class}</code></p>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={12} sm={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Background Opacity
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row row-cols-12 d-flex align-items-center">
                                <div className="p-3 col">
                                    <div className="m-2 bg-success bg-opacity-100 text-fixed-white mx-auto color-container">100%</div>
                                    <p className="pb-0 mb-0 fw-semibold text-center"><code>.bg-opacity-75</code></p>
                                </div>
                                <div className="p-3 col">
                                    <div className="m-2 bg-success text-fixed-white bg-opacity-75 mx-auto color-container">75%</div>
                                    <p className="pb-0 mb-0 fw-semibold text-center"><code>.bg-opacity-75</code></p>
                                </div>
                                <div className="p-3 col">
                                    <div className="m-2 bg-success text-fixed-dark bg-opacity-50 mx-auto color-container">50%</div>
                                    <p className="pb-0 mb-0 fw-semibold text-center"><code>.bg-opacity-50</code></p>
                                </div>
                                <div className="p-3 col">
                                    <div className="m-2 bg-success text-fixed-dark bg-opacity-25 mx-auto color-container">25%</div>
                                    <p className="pb-0 mb-0 fw-semibold text-center"><code>.bg-opacity-25</code></p>
                                </div>
                                <div className="p-3 col">
                                    <div className="m-2 bg-success text-fixed-dark bg-opacity-10 mx-auto color-container">10%</div>
                                    <p className="pb-0 mb-0 fw-semibold text-center"><code>.bg-opacity-10</code></p>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Text Colors
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row row-cols-12 d-flex align-items-center">
                                {Outlinedata.map((idx) => (
                                    <div className="p-3 col" key={Math.random()}>
                                        <div className={`m-2 text-${idx.class} ${idx.color} fw-semibold fs-14 text-center`}>{idx.class}</div>
                                        <p className="pb-0 mb-0 fw-semibold text-center"><code>.text-{idx.class}</code></p>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>

                <Col xl={12}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Text Opacity
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="row row-cols-12 d-flex align-items-center">
                                        <div className="p-3 col">
                                            <div className="m-2 text-primary fw-semibold fs-14 text-center">Opacity-100</div>
                                            <p className="pb-0 mb-0 fw-semibold text-center"><code>100% opacity</code></p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 text-primary text-opacity-75 fw-semibold fs-14 text-center">Opacity-100</div>
                                            <p className="pb-0 mb-0 fw-semibold text-center"><code>.text-opacity-75</code></p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 text-primary text-opacity-50 fw-semibold fs-14 text-center">Opacity-100</div>
                                            <p className="pb-0 mb-0 fw-semibold text-center"><code>.text-opacity-50</code></p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 text-primary text-opacity-25 fw-semibold fs-14 text-center">Opacity-100</div>
                                            <p className="pb-0 mb-0 fw-semibold text-center"><code>.text-opacity-25</code></p>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Callout
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="callout">Lorem ipsum dolor sit amet consectetur adipisicing
                                elit. </div>
                            <div className="callout callout-info">Lorem ipsum dolor sit amet consectetur
                                adipisicing
                                elit. </div>
                            <div className="callout callout-warning">Lorem ipsum dolor sit amet
                                consectetur
                                adipisicing elit. </div>
                            <div className="callout callout-danger">Lorem ipsum dolor sit amet
                                consectetur
                                adipisicing elit.
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <h6 className="mb-3">Other Colors:</h6>
            <Row>
                {Othercolors.map((idx) => (
                    <Col xl={12} key={Math.random()}>
                        <Card className="custom-card">
                            <div className="card-body d-xl-flex">
                                <div className={`flex-fill p-3 bd-${idx.color}-100`}>${idx.color}-100</div>

                                <div className={`flex-fill p-3 bd-${idx.color}-200`}>${idx.color}-200</div>

                                <div className={`flex-fill p-3 bd-${idx.color}-300`}>${idx.color}-300</div>

                                <div className={`flex-fill p-3 bd-${idx.color}-400`}>${idx.color}-400</div>

                                <div className={`flex-fill p-3 bd-${idx.color}-500`}>${idx.color}-500</div>

                                <div className={`flex-fill p-3 bd-${idx.color}-600`}>${idx.color}-600</div>

                                <div className={`flex-fill p-3 bd-${idx.color}-700`}>${idx.color}-700</div>

                                <div className={`flex-fill p-3 bd-${idx.color}-800`}>${idx.color}-800</div>

                                <div className={`flex-fill p-3 bd-${idx.color}-900`}>${idx.color}-900</div>

                                <div className={`flex-fill p-3 bd-${idx.color}`}>${idx.color}</div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Fragment>
    );
};

export default Colors;
