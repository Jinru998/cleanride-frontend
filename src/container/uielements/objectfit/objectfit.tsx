import  { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Collapse, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import media28 from "../../../assets/images/media/media-28.jpg";
import video1 from "../../../assets/video/1.mp4";

interface ObjectfitProps { }

const Objectfit: FC<ObjectfitProps> = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    const [open9, setOpen9] = useState(false);
    const [open10, setOpen10] = useState(false);
    const [open11, setOpen11] = useState(false);
    const [open12, setOpen12] = useState(false);
    const [open13, setOpen13] = useState(false);
    const [open14, setOpen14] = useState(false);
    const [open15, setOpen15] = useState(false);
    return (
        <Fragment>
            <Pageheader title="Object Fit" heading="Ui Elements" active="Object Fit" />
            <Row>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Object Fit Contain</Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen1(!open1)} aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="object-fit-container">
                            <img src={media28} className="object-fit-contain border rounded" alt="..." />
                        </Card.Body>
                            <Collapse in={open1} className="card-body"><pre>
                            <code>{`
<img src={media28}
className="object-fit-contain border rounded" 
alt="..."/>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Object Fit Cover</Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen2(!open2)} aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="object-fit-container">
                            <img src={media28} className="object-fit-cover border rounded" alt="..." />
                        </Card.Body>
                            <Collapse in={open2} className="card-body"><pre>
                            <code>{`
<img src={media28}
 className="object-fit-cover border rounded" alt="..."/>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Object Fit Fill</Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen3(!open3)} aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="object-fit-container">
                            <img src={media28} className="object-fit-fill border rounded" alt="..." />
                        </Card.Body>
                            <Collapse in={open3} className="card-body"><pre>
                            <code>{`<img src={media28} 
className="object-fit-fill border rounded" alt="..."/>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Object Fit Scale Down</Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen4(!open4)} aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="object-fit-container">
                            <img src={media28} className="object-fit-scale border rounded" alt="..." />
                        </Card.Body>
                            <Collapse in={open4} className="card-body"><pre>
                            <code>{` <img src={media28} 
className="object-fit-scale border rounded" alt="..."/>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Object Fit None</Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen5(!open5)} aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="object-fit-container">
                            <img src={media28} className="object-fit-none border rounded" alt="..." />
                        </Card.Body>
                            <Collapse in={open5} className="card-body"><pre>
                            <code>{`<img src={media28} 
className="object-fit-none border rounded" alt="..."/>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Object Fit Contain (SM - responsive)</Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen6(!open6)} aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="object-fit-container">
                            <img src={media28} className="object-fit-sm-contain border rounded" alt="..." />
                        </Card.Body>
<Collapse in={open6} className="card-body"><pre>
                            <code>{`<img src={media28} 
className="object-fit-sm-contain border
 rounded" alt="..."/>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Object Fit Contain (MD - responsive)</Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen7(!open7)} aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="object-fit-container">
                            <img src={media28} className="object-fit-md-contain border rounded" alt="..." />
                        </Card.Body>
<Collapse in={open7} className="card-body"><pre>
                            <code>{`<img src={media28} 
className="object-fit-md-contain border 
rounded" alt="..."/>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Object Fit Contain (LG - responsive)</Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen8(!open8)} aria-controls="example-collapse-text" aria-expanded={open8}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Header className="object-fit-container">
                            <img src={media28} className="object-fit-lg-contain border rounded" alt="..." />
                        </Card.Header>
<Collapse in={open8} className="card-body"><pre>
                            <code>{`<img src={media28} 
className="object-fit-lg-contain border 
rounded" alt="..."/>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Object Fit Contain (XL - responsive)</Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen9(!open9)} aria-controls="example-collapse-text" aria-expanded={open9}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="object-fit-container">
                            <img src={media28} className="object-fit-xl-contain border rounded" alt="..." />
                        </Card.Body>
<Collapse in={open9} className="card-body"><pre>
                            <code>{` <img src={media28} 
className="object-fit-xl-contain border 
rounded" alt="..."/>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Object Fit Contain (XXL - responsive)</Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen10(!open10)} aria-controls="example-collapse-text" aria-expanded={open10}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Header className="object-fit-container">
                            <img src={media28} className="object-fit-xxl-contain border rounded" alt="..." />
                        </Card.Header>
<Collapse in={open10} className="card-body"><pre>
                            <code>{`<img src={media28} 
className="object-fit-xxl-contain border
 rounded" alt="..."/>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Object Fit Contain Video
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen11(!open11)} aria-controls="example-collapse-text" aria-expanded={open11}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="object-fit-container">
                            <video src={video1} className="object-fit-contain rounded border" autoPlay></video>
                        </Card.Body>
<Collapse in={open11} className="card-body"><pre>
                            <code>{` <video src={video1} 
className="object-fit-contain rounded border" autoPlay>
</video>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Object Fit Cover Video
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen12(!open12)} aria-controls="example-collapse-text" aria-expanded={open12}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="object-fit-container">
                            <video src={video1} className="object-fit-cover rounded border" autoPlay></video>
                        </Card.Body>
<Collapse in={open12} className="card-body"><pre>
                            <code>{`<video src={video1} 
className="object-fit-cover rounded border" autoPlay>
</video>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Object Fit Fill Video
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen13(!open13)} aria-controls="example-collapse-text" aria-expanded={open13}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="object-fit-container">
                            <video src={video1} className="object-fit-fill rounded border" autoPlay></video>
                        </Card.Body>
<Collapse in={open13} className="card-body"><pre>
                            <code>{`<video src={video1} 
className="object-fit-fill rounded border" autoPlay>
</video>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Object Fit Scale Video
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen14(!open14)} aria-controls="example-collapse-text" aria-expanded={open14}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="object-fit-container">
                            <video src={video1} className="object-fit-scale rounded border" autoPlay></video>
                        </Card.Body>
<Collapse in={open14} className="card-body"><pre>
                            <code>{`<video src={video1} 
className="object-fit-scale rounded border" autoPlay>
</video>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Object Fit None Video
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen15(!open15)} aria-controls="example-collapse-text" aria-expanded={open15}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="object-fit-container">
                            <video src={video1} className="object-fit-none rounded border" autoPlay></video>
                        </Card.Body>
<Collapse in={open15} className="card-body"><pre>
                            <code>{`<video src={video1} 
className="object-fit-none 
rounded border" autoPlay></video>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Objectfit;
