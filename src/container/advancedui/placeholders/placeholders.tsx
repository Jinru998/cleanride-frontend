import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Collapse, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import media60 from "../../../assets/images/media/media-60.jpg";
import media61 from "../../../assets/images/media/media-61.jpg";
import { Link } from 'react-router-dom';

interface PlaceholdersProps { }

const Placeholders: FC<PlaceholdersProps> = () => {
    //collapse1
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    return (
        <Fragment>
            <Pageheader title="Placeholders" heading="Advanced Ui" active="Placeholders" />
            <Row>
                <Col xl={6}>
                    <Row>
                        <Col xl={6} lg={6} md={6} sm={12}>
                            <Card className="custom-card">
                                <img className="card-img-top" src={media60} alt="" />
                                <Card.Body>
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make
                                        up
                                        the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6} lg={6} md={6} sm={12}>
                            <Card aria-hidden="true">
                                <img className="card-img-top" src={media61} alt="" />
                                <Card.Body>
                                    <div className="h5 card-title placeholder-glow">
                                        <span className="placeholder col-6"></span>
                                    </div>
                                    <p className="card-text placeholder-glow">
                                        <span className="placeholder col-7"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-4"></span>
                                        <span className="placeholder col-6"></span>
                                    </p>
                                    <Link to="#" tabIndex={-1} className="btn btn-primary disabled placeholder col-6"></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Animation
                                    </Card.Title>
                                    <div className="prism-toggle">
                                        <Button onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <p className="placeholder-glow mb-0">
                                        <span className="placeholder col-12"></span>
                                    </p>
                                    <p className="placeholder-wave mb-0">
                                        <span className="placeholder col-12"></span>
                                    </p>
                                </Card.Body>
                                    <Collapse in={open1} className="card-body"><pre><code>{`<p className="placeholder-glow mb-0">
<span className="placeholder col-12"></span>
 </p>
<p className="placeholder-wave mb-0">
<span className="placeholder col-12"></span>
 </p>`}</code></pre></Collapse>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <Row>
                                <Col xl={12}>
                                    <Card className="custom-card">
                                        <Card.Header className="justify-content-between">
                                            <Card.Title>
                                                Sizing
                                            </Card.Title>
                                            <div className="prism-toggle">
                                                <Button onClick={() => setOpen2(!open2)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                                            </div>
                                        </Card.Header>
                                        <Card.Body>
                                            <span className="placeholder col-12 placeholder-xl mb-1"></span>
                                            <span className="placeholder col-12 placeholder-lg"></span>
                                            <span className="placeholder col-12"></span>
                                            <span className="placeholder col-12 placeholder-sm"></span>
                                            <span className="placeholder col-12 placeholder-xs"></span>
                                        </Card.Body>
                                            <Collapse in={open2} className="card-body"><pre><code>{`<span className="placeholder col-12 placeholder-xl mb-1"></span>
 <span className="placeholder col-12 placeholder-lg"></span>
 <span className="placeholder col-12"></span>
 <span className="placeholder col-12 placeholder-sm"></span>
 <span className="placeholder col-12 placeholder-xs"></span>`}</code></pre></Collapse>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Colors
                                    </Card.Title>
                                    <div className="prism-toggle">
                                        <Button onClick={() => setOpen3(!open3)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <span className="placeholder col-12"></span>
                                    <span className="placeholder col-12 bg-primary"></span>
                                    <span className="placeholder col-12 bg-secondary"></span>
                                    <span className="placeholder col-12 bg-success"></span>
                                    <span className="placeholder col-12 bg-danger"></span>
                                    <span className="placeholder col-12 bg-warning"></span>
                                    <span className="placeholder col-12 bg-info"></span>
                                    <span className="placeholder col-12 bg-light"></span>
                                    <span className="placeholder col-12 bg-dark"></span>
                                </Card.Body>
                                    <Collapse in={open3} className="card-body"><pre><code>{`<span className="placeholder col-12"></span>
 <span className="placeholder col-12 bg-primary"></span>
 <span className="placeholder col-12 bg-secondary"></span>
 <span className="placeholder col-12 bg-success"></span>
 <span className="placeholder col-12 bg-danger"></span>
 <span className="placeholder col-12 bg-warning"></span>
 <span className="placeholder col-12 bg-info"></span>
 <span className="placeholder col-12 bg-light"></span>
 <span className="placeholder col-12 bg-dark"></span>`}</code></pre></Collapse>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Width
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen4(!open4)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <span className="placeholder bg-primary col-6"></span>
                            <span className="placeholder bg-primary w-75"></span>
                            <span className="placeholder bg-primary" style={{ width: 25 }}></span>
                        </Card.Body>
                            <Collapse in={open4} className="card-body"><pre><code>{`<span className="placeholder bg-primary col-6"></span>
<span className="placeholder bg-primary w-75"></span>
<span className="placeholder bg-primary" style={{width: 25}}></span>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Placeholders;
