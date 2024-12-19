import  { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Collapse, ProgressBar, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { CustomProgress2data, CustomProgress4data, Multipleprogress } from './progressbardata';

interface ProgressProps { }

const Progress: FC<ProgressProps> = () => {
    //collapse1
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
    return (
        <Fragment>
            <Pageheader title="Progress" heading="Ui Elements" active="Progress" />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <Card.Title>
                                Basic Progress
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm0" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </div>
                        <Card.Body>
                            <ProgressBar now={0} className="progress mb-3" />
                            <ProgressBar now={25} className="progress mb-3" />
                            <ProgressBar now={50} className="progress mb-3" />
                            <ProgressBar now={75} className="progress mb-3" />
                            <ProgressBar now={100} className="progress mb-0" />

                        </Card.Body>
                        <Collapse in={open1} className="card-body"><pre><code>{`
 <ProgressBar now={0} className="progress mb-3" />
 <ProgressBar now={25} className="progress mb-3" />
 <ProgressBar now={50} className="progress mb-3" />
 <ProgressBar now={75} className="progress mb-3" />
 <ProgressBar now={100} className="progress mb-0" />`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Different Colored Progress
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen2(!open2)} variant='primary-light' className="btn btn-sm0" aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ProgressBar variant='secondary' now={20} className="progress mb-3" />
                            <ProgressBar variant='warning' now={40} className="progress mb-3" />
                            <ProgressBar variant='info' now={60} className="progress mb-3" />
                            <ProgressBar variant='success' now={80} className="progress mb-3" />
                            <ProgressBar variant='danger' now={100} className="progress mb-0" />
                        </Card.Body>
                        <Collapse in={open2} className="card-body"><pre><code>{`
<ProgressBar  variant='secondary' now={20} className="progress mb-3" />
<ProgressBar  variant='warning' now={40} className="progress mb-3" />
<ProgressBar  variant='info' now={60} className="progress mb-3" />
<ProgressBar  variant='success' now={80} className="progress mb-3" />
<ProgressBar  variant='danger' now={100} className="progress mb-0" />`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Striped Progress
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen3(!open3)} variant='primary-light' className="btn btn-sm0" aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ProgressBar striped variant='primary' now={10} className="progress mb-3" />
                            <ProgressBar striped variant='secondary' now={25} className="progress mb-3" />
                            <ProgressBar striped variant='success' now={50} className="progress mb-3" />
                            <ProgressBar striped variant='info' now={75} className="progress mb-3" />
                            <ProgressBar striped variant='warning' now={100} className="progress mb-0" />
                        </Card.Body>
                            <Collapse in={open3} className="card-body"><pre><code>{`<ProgressBar striped variant='primary' now={10} className="progress mb-3" />
<ProgressBar striped variant='secondary' now={25} className="progress mb-3" />
<ProgressBar striped variant='success' now={50} className="progress mb-3" />
<ProgressBar striped variant='info' now={75} className="progress mb-3" />
<ProgressBar striped variant='warning' now={100} className="progress mb-0" />`}</code></pre></Collapse>
                       
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Progress Height
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen4(!open4)} variant='primary-light' className="btn btn-sm0" aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ProgressBar variant='primary' now={10} className="progress progress-xs mb-3" />
                            <ProgressBar variant='primary' now={25} className="progress progress-sm mb-3" />
                            <ProgressBar variant='primary' now={50} className="progress  mb-3" />
                            <ProgressBar variant='primary' now={75} className="progress progress-lg mb-3" />
                            <ProgressBar variant='primary' now={100} className="progress progress-xl mb-3" />
                        </Card.Body>
                            <Collapse in={open4} className="card-body">
                            <pre><code>{`<ProgressBar  variant='primary' now={10} className="progress progress-xs mb-3" />
<ProgressBar  variant='primary' now={25} className="progress progress-sm mb-3" />
<ProgressBar  variant='primary' now={50} className="progress  mb-3" />
<ProgressBar  variant='primary' now={75} className="progress progress-lg mb-3" />
<ProgressBar  variant='primary' now={100}className="progress progress-xl mb-3" />`}</code></pre></Collapse>
                       
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title className="card-titlte">
                                Progress With Labels
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen5(!open5)} variant='primary-light' className="btn btn-sm0" aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ProgressBar variant='primary' now={10} label={`${10}%`} className="progress mb-3" />
                            <ProgressBar variant='secondary' now={20} label={`${20}%`} className="progress mb-3" />
                            <ProgressBar variant='success' now={40} label={`${40}%`} className="progress mb-3" />
                            <ProgressBar variant='info' now={60} label={`${60}%`} className="progress mb-3" />
                            <ProgressBar variant='warning' now={80} label={`${80}%`} className="progress mb-0" />
                        </Card.Body>
                        
                            <Collapse in={open5} className="card-body">
                            <pre><code>{`<ProgressBar variant='primary' now={10} label={10} className="progress mb-3" />
<ProgressBar variant='secondary' now={20} label={20} className="progress mb-3" />
<ProgressBar variant='success' now={40} label={40%} className="progress mb-3" />
<ProgressBar variant='info' now={60} label={60}% className="progress mb-3" />
<ProgressBar variant='warning' now={80} label={80%} className="progress mb-0" />`}</code></pre></Collapse>
                       
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Multiple bars With Sizes
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen6(!open6)} variant='primary-light' className="btn btn-sm0" aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {Multipleprogress.map((idx) => (
                                <ProgressBar className={`progress-stacked progress-${idx.size} mb-3`} key={Math.random()}>
                                    <ProgressBar variant={idx.class1} now={idx.now1} key={1} />
                                    <ProgressBar variant={idx.class2} now={idx.now2} key={2} />
                                    <ProgressBar variant={idx.class3} now={idx.now3} key={3} />
                                </ProgressBar>
                            ))}
                        </Card.Body>
                            <Collapse in={open6} className="card-body">
                            <pre><code>{`<ProgressBar className="progress-stacked progress-sm mb-3" >
<ProgressBar striped variant="warning" now={15} key={1} />
<ProgressBar variant="info" now={20} key={2} />
<ProgressBar striped variant="danger" now={25} key={3} />    
</ProgressBar>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Animated Stripped Progress
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen7(!open7)} variant='primary-light' className="btn btn-sm0" aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ProgressBar variant='' className="progress mb-3" animated now={10} />
                            <ProgressBar variant='secondary' className="progress mb-3" animated now={20} />
                            <ProgressBar variant='success' className="progress mb-3" animated now={40} />
                            <ProgressBar variant='info' className="progress mb-3" animated now={60} />
                            <ProgressBar variant='warning' className="progress" animated now={80} />

                        </Card.Body>
                            <Collapse in={open7} className="card-body">
                            <pre><code>{`<ProgressBar  variant='' className="progress mb-3" animated now={10} />
<ProgressBar  variant='secondary' className="progress mb-3" animated now={20} />
<ProgressBar  variant='success' className="progress mb-3" animated now={40} />
<ProgressBar  variant='info' className="progress mb-3" animated now={60} />
<ProgressBar  variant='warning' className="progress" animated now={80} />`}</code></pre></Collapse>
                       
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Gradient Progress
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen8(!open8)} variant='primary-light' className="btn btn-sm0" aria-controls="example-collapse-text" aria-expanded={open8}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ProgressBar variant='primary-gradient' className="progress mb-3" animated now={10} />
                            <ProgressBar variant='secondary-gradient' className="progress mb-3" animated now={20} />
                            <ProgressBar variant='success-gradient' className="progress mb-3" animated now={40} />
                            <ProgressBar variant='info-gradient' className="progress mb-3" animated now={60} />
                            <ProgressBar variant='warning-gradient' className="progress" animated now={80} />
                        </Card.Body>
                        <Collapse in={open8} className="card-body">
                            <pre><code>{` <ProgressBar  variant='primary-gradient' className="progress mb-3" animated now={10} />
 <ProgressBar  variant='secondary-gradient' className="progress mb-3" animated now={20} />
 <ProgressBar  variant='success-gradient' className="progress mb-3" animated now={40} />
 <ProgressBar  variant='info-gradient' className="progress mb-3" animated now={60} />
 <ProgressBar  variant='warning-gradient' className="progress" animated now={80} />`}</code></pre></Collapse>
                       
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Custom Animated Progress
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen9(!open9)} variant='primary-light' className="btn btn-sm0" aria-controls="example-collapse-text" aria-expanded={open9}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ProgressBar variant='primary-gradient' className="progress mb-3 progress-animate" now={10} />
                            <ProgressBar variant='secondary-gradient' className="progress mb-3 progress-animate" now={20} />
                            <ProgressBar variant='success-gradient' className="progress mb-3 progress-animate" now={40} />
                            <ProgressBar variant='info-gradient' className="progress mb-3 progress-animate" now={60} />
                            <ProgressBar variant='warning-gradient' className="progress  progress-animate" now={80} />

                        </Card.Body>
                            <Collapse in={open9} className="card-body">
                            <pre><code>{`<ProgressBar  variant='primary-gradient' className="progress mb-3 progress-animate" animated now={10} />
 <ProgressBar  variant='secondary-gradient' className="progress mb-3 progress-animate" animated now={20} />
 <ProgressBar  variant='success-gradient' className="progress mb-3 progress-animate" animated now={40} />
 <ProgressBar  variant='info-gradient' className="progress mb-3 progress-animate" animated now={60} />
 <ProgressBar  variant='warning-gradient' className="progress  progress-animate" animated now={80} />`}</code></pre></Collapse>
                        
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Custom Progress-1
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen10(!open10)} variant='primary-light' className="btn btn-sm0" aria-controls="example-collapse-text" aria-expanded={open10}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="progress progress-sm progress-custom mb-5 progress-animate">
                                <h6 className="progress-bar-title">Mobiles</h6>
                                <ProgressBar variant="primary" className="w-100 custom-height1" now={50} />
                            </div>
                            <div className="progress progress-sm progress-custom mb-5 progress-animate">
                                <h6 className="progress-bar-title bg-secondary">Watches</h6>
                                <ProgressBar variant="secondary" className="w-100 custom-height1" now={60} />
                            </div>
                            <div className="progress progress-sm progress-custom mb-5 progress-animate">
                                <h6 className="progress-bar-title bg-success">Shirts</h6>
                                <ProgressBar variant="success" className="w-100 custom-height1" now={70} />
                            </div>

                        </Card.Body>
                        
                            <Collapse in={open10} className="card-body">
                            <pre><code>{`<ProgressBar  variant='primary-gradient' className="progress mb-3 progress-animate" animated now={10} />
 <ProgressBar  variant='secondary-gradient' className="progress mb-3 progress-animate" animated now={20} />
 <ProgressBar  variant='success-gradient' className="progress mb-3 progress-animate" animated now={40} />
 <ProgressBar  variant='info-gradient' className="progress mb-3 progress-animate" animated now={60} />
 <ProgressBar  variant='warning-gradient' className="progress  progress-animate" animated now={80} />`}</code></pre></Collapse>
                        
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Custom Progress-2
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen11(!open11)} variant='primary-light' className="btn btn-sm0" aria-controls="example-collapse-text" aria-expanded={open11}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {CustomProgress2data.map((idx) => (
                                <div className="progress progress-bar progress-sm mb-4" key={Math.random()} >
                                    <div className={`progress-item-1 bg-${idx.class}`}></div>
                                    <div className={`progress-item-2 bg-${idx.class}`}></div>
                                    <div className={`progress-item-3 bg-${idx.class1}`}></div>
                                    <ProgressBar variant={idx.class} now={idx.now} />
                                </div>
                            ))}
                        </Card.Body>
                            <Collapse in={open11} className="card-body">
                            <pre><code>{`<ProgressBar className="progress progress-sm mb-4">
<div className="progress-item-1 bg-secondary"></div>
<div className="progress-item-2 bg-secondary"></div>
<div className="progress-item-3"></div>
<ProgressBar variant="secondary" now={60} />
</ProgressBar>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Custom Progress-3
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen12(!open12)} variant='primary-light' className="btn btn-sm0" aria-controls="example-collapse-text" aria-expanded={open12}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ProgressBar className="progress progress-lg mb-5 custom-progress-3 progress-animate">

                                <ProgressBar variant="" now={50} />
                                <div className="progress-bar-value">50%</div>

                            </ProgressBar>
                            <ProgressBar className="progress progress-lg mb-5 custom-progress-3 progress-animate">
                                <ProgressBar variant="secondary" now={60} />
                                <div className="progress-bar-value secondary">60%</div>
                            </ProgressBar>
                            <ProgressBar className="progress progress-lg custom-progress-3 progress-animate">
                                <ProgressBar variant="success" now={70} />
                                <div className="progress-bar-value success">70%</div>
                            </ProgressBar>
                        </Card.Body>
                        <Collapse in={open12} className="card-body">
                            <pre><code>{`<ProgressBar className="progress progress-sm mb-4">
<div className="progress-item-1 bg-secondary"></div>
<div className="progress-item-2 bg-secondary"></div>
<div className="progress-item-3"></div>
<ProgressBar variant="secondary" now={60} />
</ProgressBar>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Custom Progress-4
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen13(!open13)} variant='primary-light' className="btn btn-sm0" aria-controls="example-collapse-text" aria-expanded={open13}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {CustomProgress4data.map((idx) => (
                                <ProgressBar className={`progress progress-xl mb-3 progress-animate custom-progress-4 ${idx.class1} `} key={Math.random()}>
                                    <ProgressBar variant={idx.class} now={idx.now} />
                                    <div className="progress-bar-label">{idx.text} </div>
                                </ProgressBar>
                            ))}

                        </Card.Body>
                            <Collapse in={open13} className="card-body">
                            <pre><code>{`<ProgressBar className="progress progress-xl mb-3 progress-animate custom-progress-4">
<ProgressBar variant='secondary-gradient' now={20} />
<div className="progress-bar-label">20%</div>
</ProgressBar> `}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Custom Progress-5
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen14(!open14)} variant='primary-light' className="btn btn-sm0" aria-controls="example-collapse-text" aria-expanded={open14}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <h6 className="fw-semibold mb-2">Project Dependencies</h6>
                            <ProgressBar className="progress-stacked progress-xl mb-5" >
                                <ProgressBar variant="primary" now={25} label={`${25}%`} key={1} />
                                <ProgressBar variant="secondary" now={35} label={`${35}%`} key={2} />
                                <ProgressBar variant="danger" now={40} label={`${40}%`} key={3} />
                            </ProgressBar>
                            <Row className="justify-content-center">
                                <Col xl={5}>
                                    <div className="border p-3">
                                        <p className="fs-12 fw-semibold mb-0 text-muted">Html<span className="float-end fs-10 fw-normal">25%</span></p>
                                        <ProgressBar className="progress progress-xs mb-4 progress-animate" variant="primary" now={25} />
                                        <p className="fs-12 fw-semibold mb-0 text-muted">Css<span className="float-end fs-10 fw-normal">35%</span></p>
                                        <ProgressBar className="progress progress-xs mb-4 progress-animate" variant="secondary" now={35} />
                                        <p className="fs-12 fw-semibold mb-0 text-muted">Js<span className="float-end fs-10 fw-normal">40%</span></p>
                                        <ProgressBar className="progress progress-xs mb-4 progress-animate" variant="danger" now={40} />
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                            <Collapse in={open14} className="card-body">
                            <pre><code>{`<h6 className="fw-semibold mb-2">Project Dependencies</h6>
 <ProgressBar className="progress-stacked progress-xl mb-5" >
    <ProgressBar  variant="primary" now={25} label={25%} key={1} />
    <ProgressBar  variant="secondary" now={35} label={35%} key={2} />
    <ProgressBar  variant="danger" now={40} label={40%} key={3} />    
</ProgressBar>
 <Row className="justify-content-center">
     <Col xl={5}>
         <div className="border p-3">
             <p className="fs-12 fw-semibold mb-0 text-muted">Html<span className="float-end fs-10 fw-normal">25%<
             /span></p>
             <ProgressBar className="progress progress-xs mb-4 progress-animate"  variant="primary" now={25} />   
             <p className="fs-12 fw-semibold mb-0 text-muted">Css<span className="float-end fs-10 fw-normal">35%
             </span></p>
             <ProgressBar className="progress progress-xs mb-4 progress-animate"  variant="secondary" now={35} />  
             <p className="fs-12 fw-semibold mb-0 text-muted">Js<span className="float-end fs-10 fw-normal">40%
             </span></p>
             <ProgressBar className="progress progress-xs mb-4 progress-animate"  variant="danger" now={40} />  
         </div>
     </Col>
 </Row>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Progress;
