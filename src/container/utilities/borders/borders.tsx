import  { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Collapse, Form, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import media58 from "../../../assets/images/media/media-58.jpg";

interface BordersProps { }

const Borders: FC<BordersProps> = () => {
    //collapse1
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    return (
        <Fragment>
            <Pageheader title="Borders" heading="Utilities" active="Borders" />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Borders
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <span className="border border-container"></span>
                            <span className="border-top border-container"></span>
                            <span className="border-end border-container"></span>
                            <span className="border-bottom border-container"></span>
                            <span className="border-start border-container"></span>
                        </Card.Body>
                            <Collapse in={open1} className="card-body"><pre><code>{`
<span className="border border-container"></span>
<span className="border-top border-container"></span>
<span className="border-end border-container"></span>
<span className="border-bottom border-container"></span>
<span className="border-start border-container"></span>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Remove borders
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen2(!open2)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <span className="border-0 border-container"></span>
                            <span className="border border-top-0 border-container"></span>
                            <span className="border border-end-0 border-container"></span>
                            <span className="border border-bottom-0 border-container"></span>
                            <span className="border border-start-0 border-container"></span>
                        </Card.Body>
                            <Collapse in={open2} className="card-body"><pre><code>{`
<span className="border-0 border-container"></span>
<span className="border border-top-0 border-container"></span>
<span className="border border-end-0 border-container"></span>
<span className="border border-bottom-0 border-container"></span>
<span className="border border-start-0 border-container"></span>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={5}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Border Widths
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen3(!open3)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <span className="border border-container border-1"></span>
                            <span className="border border-container border-2"></span>
                            <span className="border border-container border-3"></span>
                            <span className="border border-container border-4"></span>
                            <span className="border border-container border-5"></span>
                        </Card.Body>
                            <Collapse in={open3} className="card-body"><pre><code>{`
 <span className="border border-container border-1"></span>
 <span className="border border-container border-2"></span>
 <span className="border border-container border-3"></span>
 <span className="border border-container border-4"></span>
 <span className="border border-container border-5"></span>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={7}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Border colors
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen4(!open4)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <span className="border border-container border-primary"></span>
                            <span className="border border-container border-secondary"></span>
                            <span className="border border-container border-success"></span>
                            <span className="border border-container border-danger"></span>
                            <span className="border border-container border-warning"></span>
                            <span className="border border-container border-info"></span>
                            <span className="border border-container border-light"></span>
                            <span className="border border-container border-dark"></span>
                            <span className="border border-container border-white"></span>
                        </Card.Body>
                            <Collapse in={open4} className="card-body"><pre><code>{`
<span className="border border-container border-primary"></span>
<span className="border border-container border-secondary"></span>
<span className="border border-container border-success"></span>
<span className="border border-container border-danger"></span>
<span className="border border-container border-warning"></span>
<span className="border border-container border-info"></span>
<span className="border border-container border-light"></span>
<span className="border border-container border-dark"></span>
<span className="border border-container border-white"></span>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Border color Styling
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen5(!open5)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="mb-4">
                                <Form.Label htmlFor="exampleFormControlInput1" className="form-label">Email
                                    address</Form.Label>
                                <Form.Control type="email" className="form-control border-success"
                                    id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="h4 pb-3 mb-4 text-danger border-bottom border-danger">
                                Below Shows Danger Border
                            </div>
                            <div
                                className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end mb-1">
                                Customizing borders with backgrounud colors
                            </div>
                        </Card.Body>
                            <Collapse in={open5} className="card-body"><pre><code>{`
<div className="mb-4">
<Form.Label htmlFor="exampleFormControlInput1" className="form-label">Email
    address</Form.Label>
<Form.Control type="email" className="form-control border-success"
    id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="h4 pb-3 mb-4 text-danger border-bottom border-danger">
Below Shows Danger Border
</div>
<div
className="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end mb-1">
Customizing borders with backgrounud colors
</div>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Border with opacity
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen6(!open6)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="border border-success p-2 mb-2">This is default success border</div>
                            <div className="border border-success p-2 mb-2 border-opacity-75">This is 75%
                                opacity
                                success border
                            </div>
                            <div className="border border-success p-2 mb-2 border-opacity-50">This is 50%
                                opacity
                                success border
                            </div>
                            <div className="border border-success p-2 mb-2 border-opacity-25">This is 25%
                                opacity
                                success border
                            </div>
                            <div className="border border-success p-2 border-opacity-10">This is 10% opacity
                                success
                                border
                            </div>
                        </Card.Body>
                            <Collapse in={open6} className="card-body"><pre><code>{`
 <div className="border border-success p-2 mb-2">This is default success border</div>
 <div className="border border-success p-2 mb-2 border-opacity-75">This is 75%
     opacity
     success border
 </div>
 <div className="border border-success p-2 mb-2 border-opacity-50">This is 50%
     opacity
     success border
 </div>
 <div className="border border-success p-2 mb-2 border-opacity-25">This is 25%
     opacity
     success border
 </div>
 <div className="border border-success p-2 border-opacity-10">This is 10% opacity
     success
     border
 </div>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Border Radius
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen7(!open7)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <img src={media58} className="bd-placeholder-img rounded" alt="..." />
                            <img src={media58} className="bd-placeholder-img rounded-top" alt="..." />
                            <img src={media58} className="bd-placeholder-img rounded-end" alt="..." />
                            <img src={media58} className="bd-placeholder-img rounded-bottom" alt="..." />
                            <img src={media58} className="bd-placeholder-img rounded-start" alt="..." />
                            <img src={media58} className="bd-placeholder-img rounded-circle" alt="..." />
                            <img src={media58} className="bd-placeholder-img  rounded-pill" alt="..." />
                        </Card.Body>
                            <Collapse in={open7} className="card-body"><pre><code>{`
 <img src={media58} className="bd-placeholder-img rounded" alt="..."/>
 <img src={media58} className="bd-placeholder-img rounded-top" alt="..."/>
 <img src={media58} className="bd-placeholder-img rounded-end" alt="..."/>
 <img src={media58} className="bd-placeholder-img rounded-bottom" alt="..."/>
 <img src={media58} className="bd-placeholder-img rounded-start" alt="..."/>
 <img src={media58} className="bd-placeholder-img rounded-circle" alt="..."/>
 <img src={media58} className="bd-placeholder-img  rounded-pill" alt="..."/>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Sizes
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen8(!open8)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open8}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <img src={media58} className="bd-placeholder-img bd-placeholder-img rounded-0" alt="..." />
                            <img src={media58} className="bd-placeholder-img bd-placeholder-img rounded-1" alt="..." />
                            <img src={media58} className="bd-placeholder-img bd-placeholder-img rounded-2" alt="..." />
                            <img src={media58} className="bd-placeholder-img bd-placeholder-img rounded-3" alt="..." />
                            <img src={media58} className="bd-placeholder-img bd-placeholder-img rounded-4" alt="..." />
                            <img src={media58} className="bd-placeholder-img bd-placeholder-img rounded-5" alt="..." />
                        </Card.Body>
                            <Collapse in={open8} className="card-body"><pre><code>{`
<img src={media58} className="bd-placeholder-img bd-placeholder-img rounded-0" alt="..."/>
<img src={media58} className="bd-placeholder-img bd-placeholder-img rounded-1" alt="..."/>
<img src={media58} className="bd-placeholder-img bd-placeholder-img rounded-2" alt="..."/>
<img src={media58} className="bd-placeholder-img bd-placeholder-img rounded-3" alt="..."/>
<img src={media58} className="bd-placeholder-img bd-placeholder-img rounded-4" alt="..."/>
<img src={media58} className="bd-placeholder-img bd-placeholder-img rounded-5" alt="..."/>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Borders;
