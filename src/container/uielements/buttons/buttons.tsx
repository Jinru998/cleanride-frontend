import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Collapse, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { ColoredButtons, DefaultButtons, GhostButtons, GradientButtons, LightButtons, OutlineButtons, SocialIconButtons } from './buttonsdata';

interface ButtonsProps { }

const Buttons: FC<ButtonsProps> = () => {
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
    const [open16, setOpen16] = useState(false);
    const [open17, setOpen17] = useState(false);
    const [open18, setOpen18] = useState(false);
    const [open19, setOpen19] = useState(false);
    const [open20, setOpen20] = useState(false);
    const [open21, setOpen21] = useState(false);
    const [open22, setOpen22] = useState(false);
    const [open23, setOpen23] = useState(false);
    const [open24, setOpen24] = useState(false);
    return (
        <Fragment>
            <Pageheader title="Buttons" heading="Ui Elements" active="Buttons" />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Default Buttons
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen1(!open1)} aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {DefaultButtons.map((idx) => (
                                    <Button variant={idx.class} type="button" className="btn-wave" key={Math.random()}>{idx.text}</Button>
                                ))}
                            </div>
                        </Card.Body>
                            <Collapse in={open1} className="card-body"><pre>
                                <code>{`{DefaultButtons.map((idx)=>(
 <Button variant={idx.class} type="button" className="btn-wave">{idx.text}</Button>
 ))}`}</code></pre>

                            </Collapse>

                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Rounded Buttons
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen2(!open2)} aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {DefaultButtons.map((idx) => (
                                    <Button variant={idx.class} type="button" className="rounded-pill btn-wave" key={Math.random()}>{idx.text}</Button>
                                ))}
                            </div>
                        </Card.Body>
                        
                            <Collapse in={open2} className="card-body"><pre>
                                <code>{`{DefaultButtons.map((idx)=>(
 <Button variant={idx.class} type="button" className="rounded-pill btn-wave">{idx.text}</Button>
 ))}`}</code></pre>

                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Light Buttons
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen3(!open3)} aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {LightButtons.map((idx) => (
                                    <Button type="button" variant={idx.class} className="btn btn-wave" key={Math.random()}>{idx.text}</Button>
                                ))}
                            </div>
                        </Card.Body>
                            <Collapse in={open3} className="card-body"><pre>
                                <code>{` {LightButtons.map((idx)=>(
 <Button type="button" variant={idx.class} className="btn btn-wave">{idx.text}</Button>
 ))}`}</code></pre>

                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Light Rounded Buttons
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen4(!open4)} aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {LightButtons.map((idx) => (
                                    <Button type="button" variant={idx.class} className="btn rounded-pill btn-wave" key={Math.random()}>{idx.text}</Button>
                                ))}
                            </div>
                        </Card.Body>
                            <Collapse in={open4} className="card-body"><pre>
                                <code>{` {LightButtons.map((idx)=>(
 <Button type="button" variant={idx.class} className="btn rounded-pill btn-wave">{idx.text}</Button>
 ))}`}</code></pre>

                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Outline Buttons
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen5(!open5)} aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {OutlineButtons.map((idx) => (
                                    <Button type="button" variant={idx.class} className="btn  btn-wave" key={Math.random()}>{idx.text}</Button>
                                ))}
                            </div>
                        </Card.Body>
                        <Collapse in={open5} className="card-body"><pre>
                            <code>{`{OutlineButtons.map((idx)=>(
 <Button type="button" variant={idx.class} className="btn  btn-wave">{idx.text}</Button>
 ))}`}</code></pre>

                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Rounded Outline Buttons
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen6(!open6)} aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {OutlineButtons.map((idx) => (
                                    <Button type="button" variant={idx.class} className="btn rounded-pill  btn-wave" key={Math.random()}>{idx.text}</Button>
                                ))}
                            </div>
                        </Card.Body>
                        <Collapse in={open6} className="card-body"><pre>
                            <code>{` {OutlineButtons.map((idx)=>(
<Button type="button" variant={idx.class} className="btn rounded-pill  btn-wave">{idx.text}</Button>
))}`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Gradient Buttons
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen7(!open7)} aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {GradientButtons.map((idx) => (
                                    <Button type="button" variant={idx.class} className="btn btn-wave" key={Math.random()}>{idx.text}</Button>
                                ))}
                            </div>
                        </Card.Body>
                            <Collapse in={open7} className="card-body"><pre>
                                <code>{`{GradientButtons.map((idx)=>(
<Button type="button" variant={idx.class} className="btn btn-wave">{idx.text}</Button>
))}`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Rounded Gradient Buttons
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen8(!open8)} aria-controls="example-collapse-text" aria-expanded={open8}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {GradientButtons.map((idx) => (
                                    <Button type="button" variant={idx.class} className="btn rounded-pill btn-wave" key={Math.random()}>{idx.text}</Button>
                                ))}
                            </div>
                        </Card.Body>
                        <Collapse in={open8} className="card-body"><pre>
                            <code>{`{GradientButtons.map((idx)=>(
<Button type="button" variant={idx.class} className="btn rounded-pill btn-wave">{idx.text}</Button>
))}`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Ghost Buttons
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen9(!open9)} aria-controls="example-collapse-text" aria-expanded={open9}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {GhostButtons.map((idx) => (
                                    <Button type="button" variant={idx.class} className="btn btn-wave" key={Math.random()}>{idx.text}</Button>
                                ))}
                            </div>
                        </Card.Body>
                            <Collapse in={open9} className="card-body"><pre>
                                <code>{` {GhostButtons.map((idx)=>(
<Button type="button" variant={idx.class} className="btn btn-wave">{idx.text}</Button>
))}`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Button tags
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen10(!open10)} aria-controls="example-collapse-text" aria-expanded={open10}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                <Button variant='primary' className="btn  btn-wave" href="#" role="button">Link</Button>
                                <Button variant='secondary' className="btn  btn-wave" type="submit">Button</Button>
                                <Button variant='info' as="input" className="btn " type="button" value="Input" />
                                <Button variant='warning' as="input" className="btn" type="submit" value="Submit" />
                                <Button variant='success' as="input" className="btn " type="reset" value="Reset" />
                            </div>
                        </Card.Body>
                            <Collapse in={open10} className="card-body"><pre>
                                <code>{` <Button variant='primary' className="btn  btn-wave" href="#" role="button">Link</Button>
 <Button variant='secondary' className="btn  btn-wave" type="submit">Button</Button>
 <Button variant='info' as="input" className="btn " type="button" value="Input"/>
 <Button variant='warning' as="input" className="btn" type="submit" value="Submit"/>
 <Button variant='success' as="input" className="btn " type="reset" value="Reset"/>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                disabled state with anchor tags
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen11(!open11)} aria-controls="example-collapse-text" aria-expanded={open11}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                <div className="mb-4">
                                    <Button type="button" variant='primary' className="btn btn-primary" disabled>Primary
                                        button</Button>
                                    <Button type="button" variant='secondary' className="btn btn-secondary" disabled>Button</Button>
                                    <Button type="button" variant='outline-primary' className="btn btn-outline-primary" disabled>Primary
                                        button</Button>
                                    <Button type="button" variant='outline-secondary' className="btn btn-outline-secondary" disabled>Button</Button>
                                </div>

                                <div>
                                    <Button variant='primary' className="btn disabled" role="button">Primary
                                        link</Button>
                                    <Button variant='secondary' className="btn disabled" role="button">Link</Button>
                                </div>
                            </div>
                        </Card.Body>
                        <Collapse in={open11} className="card-body"><pre>
                            <code>{` <div className="mb-4">
 <Button type="button" variant='primary' className="btn btn-primary" disabled>Primary
     button</Button>
 <Button type="button" variant='secondary' className="btn btn-secondary" disabled>Button</Button>
 <Button type="button" variant='outline-primary' className="btn btn-outline-primary" disabled>Primary
     button</Button>
 <Button type="button" variant='outline-secondary' className="btn btn-outline-secondary" disabled>Button</Button>
</div>

<div>
 <Button variant='primary' className="btn disabled" role="button">Primary
     link</Button>
 <Button variant='secondary' className="btn disabled" role="button">Link</Button>
</div>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                button plugin toggle states
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen12(!open12)} aria-controls="example-collapse-text" aria-expanded={open12}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                <div className="mb-4">
                                    <Button type="button" variant='primary' className="btn btn-wave"
                                    >Toggle button</Button>
                                    <Button type="button" variant='secondary' active className="btn  btn-wave">
                                        Active toggle button</Button>
                                    <Button type="button" variant='teal' className="btn btn-wave" disabled>Disabled toggle
                                        button</Button>
                                </div>
                                <div>
                                    <Button variant='primary' href="#" className="btn btn-wave" role="button" >Toggle
                                        link</Button>
                                    <Button href="#" variant='secondary' active className="btn btn-wave" role="button">
                                        Active toggle link</Button>
                                    <Button variant='teal' className="btn  btn-wave" role="button" disabled>Disabled toggle link</Button>
                                </div>
                            </div>
                        </Card.Body>
                        <Collapse in={open12} className="card-body"><pre>
                            <code>{`<div className="mb-4">
<Button type="button" variant='primary' className="btn btn-wave">
Toggle button</Button>
<Button type="button" variant='secondary' active className="btn  btn-wave">
Active toggle button</Button>
<Button type="button" variant='teal' className="btn btn-wave" disabled>
Disabled toggle button</Button>
</div>
<div>
<Button variant='primary' href="#" className="btn btn-wave" role="button" >Toggle
    link</Button>
<Button href="#" variant='secondary' active className="btn btn-wave" role="button">
Active toggle link</Button>
<Button variant='teal' className="btn  btn-wave" role="button" disabled>
Disabled toggle link</Button>
</div>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Link functionally caveat
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen13(!open13)} aria-controls="example-collapse-text" aria-expanded={open13}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                <Button variant='primary' disabled className="btn" tabIndex={-1} role="button">Primary link</Button>
                                <Button variant='secondary' disabled className="btn" tabIndex={-1} role="button">Link</Button>
                            </div>
                        </Card.Body>
                       <Collapse in={open13} className="card-body"><pre>
                            <code>{`  <div className="btn-list">
<Button variant='primary' disabled className="btn" tabIndex={-1} role="button">Primary link</Button>
<Button variant='secondary' disabled className="btn" tabIndex={-1} role="button">Link</Button>
 </div>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Loading Buttons
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button className="btn btn-sm" onClick={() => setOpen14(!open14)} aria-controls="example-collapse-text" aria-expanded={open14}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list d-md-flex flex-wrap">
                                <Button variant='primary' className="btn  btn-loader">
                                    <span className="me-2">Loading</span>
                                    <span className="loading"><i className="ri-loader-2-fill fs-16"></i></span>
                                </Button>
                                <Button variant='outline-secondary' className="btn btn-loader">
                                    <span className="me-2">Loading</span>
                                    <span className="loading"><i className="ri-loader-2-fill fs-16"></i></span>
                                </Button>
                                <Button variant='info-transparent' className="btn  btn-loader">
                                    <span className="me-2">Loading</span>
                                    <span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
                                </Button>
                                <Button variant='warning-transparent' className="btn  btn-loader">
                                    <span className="me-2">Loading</span>
                                    <span className="loading"><i className="ri-loader-5-line fs-16"></i></span>
                                </Button>
                                <Button variant='success' className="btn btn-loader" disabled>
                                    <span className="me-2">Disabled</span>
                                    <span className="loading"><i className="ri-refresh-line fs-16"></i></span>
                                </Button>
                            </div>
                        </Card.Body>
                        <Collapse in={open14} className="card-body"><pre>
                            <code>{`<Button variant='primary' className="btn  btn-loader">
<span className="me-2">Loading</span>
<span className="loading"><i className="ri-loader-2-fill fs-16"></i></span>
 </Button>
 <Button  variant='outline-secondary' className="btn btn-loader">
<span className="me-2">Loading</span>
<span className="loading"><i className="ri-loader-2-fill fs-16"></i></span>
 </Button>
 <Button variant='info-transparent' className="btn  btn-loader">
<span className="me-2">Loading</span>
<span className="loading"><i className="ri-loader-4-line fs-16"></i></span>
 </Button>
 <Button variant='warning-transparent' className="btn  btn-loader">
<span className="me-2">Loading</span>
<span className="loading"><i className="ri-loader-5-line fs-16"></i></span>
 </Button>
 <Button variant='success' className="btn btn-loader" disabled>
<span className="me-2">Disabled</span>
<span className="loading"><i className="ri-refresh-line fs-16"></i></span>
 </Button>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Icon Buttons</Card.Title>
                            <div className="prism-toggle">
                                <Button className="btn btn-sm" onClick={() => setOpen15(!open15)} aria-controls="example-collapse-text" aria-expanded={open15}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list d-md-flex d-block">
                                <div className="mb-md-0 mb-2">
                                    <Button variant="primary" className="btn btn-icon  btn-wave">
                                        <i className="ri-bank-fill"></i>
                                    </Button>
                                    <Button variant="info" className="btn btn-icon  btn-wave">
                                        <i className="ri-medal-line"></i>
                                    </Button>
                                    <Button variant="danger" className="btn btn-icon  btn-wave">
                                        <i className="ri-archive-line"></i>
                                    </Button>
                                    <Button variant="warning" className="btn btn-icon  btn-wave me-5">
                                        <i className="ri-calendar-2-line"></i>
                                    </Button>
                                </div>
                                <div className="mb-md-0 mb-2">
                                    <Button variant="primary-transparent" className="btn btn-icon rounded-pill btn-wave">
                                        <i className="ri-home-smile-line"></i>
                                    </Button>
                                    <Button variant="secondary-transparent" className="btn btn-icon  rounded-pill btn-wave">
                                        <i className="ri-delete-bin-line"></i>
                                    </Button>
                                    <Button variant="success-transparent" className="btn btn-icon  rounded-pill btn-wave">
                                        <i className="ri-notification-3-line"></i>
                                    </Button>
                                    <Button variant="danger-transparent" className="btn btn-icon  rounded-pill btn-wave me-5">
                                        <i className="ri-chat-settings-line"></i>
                                    </Button>
                                </div>
                                <div className="">
                                    <Button variant="outline-primary" className="btn btn-icon  rounded-pill btn-wave">
                                        <i className="ri-phone-line"></i>
                                    </Button>
                                    <Button variant="outline-teal" className="btn btn-icon  rounded-pill btn-wave">
                                        <i className="ri-customer-service-2-line"></i>
                                    </Button>
                                    <Button variant="outline-success" className="btn btn-icon  rounded-pill btn-wave">
                                        <i className="ri-live-line"></i>
                                    </Button>
                                    <Button variant="outline-secondary" className="btn btn-icon  rounded-pill btn-wave">
                                        <i className="ri-save-line"></i>
                                    </Button>
                                </div>
                            </div>
                        </Card.Body>
                        <Collapse in={open15} className="card-body"><pre>
                            <code>{` <div className="mb-md-0 mb-2">
 <Button variant="primary" className="btn btn-icon  btn-wave">
     <i className="ri-bank-fill"></i>
 </Button>
 <Button variant="info" className="btn btn-icon  btn-wave">
     <i className="ri-medal-line"></i>
 </Button>
 <Button variant="danger" className="btn btn-icon  btn-wave">
     <i className="ri-archive-line"></i>
 </Button>
 <Button variant="warning" className="btn btn-icon  btn-wave me-5">
     <i className="ri-calendar-2-line"></i>
 </Button>
</div>

<div className="mb-md-0 mb-2">
 <Button variant="primary-transparent" className="btn btn-icon rounded-pill btn-wave">
     <i className="ri-home-smile-line"></i>
 </Button>
 <Button variant="secondary-transparent" className="btn btn-icon  rounded-pill btn-wave">
     <i className="ri-delete-bin-line"></i>
 </Button>
 <Button variant="success-transparent" className="btn btn-icon  rounded-pill btn-wave">
     <i className="ri-notification-3-line"></i>
 </Button>
 <Button variant="danger-transparent" className="btn btn-icon  rounded-pill btn-wave me-5">
     <i className="ri-chat-settings-line"></i>
 </Button>
  </div>

  <div className="">
 <Button variant="outline-primary" className="btn btn-icon  rounded-pill btn-wave">
     <i className="ri-phone-line"></i>
 </Button>
 <Button variant="outline-teal" className="btn btn-icon  rounded-pill btn-wave">
     <i className="ri-customer-service-2-line"></i>
 </Button>
 <Button variant="outline-success" className="btn btn-icon  rounded-pill btn-wave">
     <i className="ri-live-line"></i>
 </Button>
 <Button variant="outline-secondary" className="btn btn-icon  rounded-pill btn-wave">
     <i className="ri-save-line"></i>
 </Button>
  </div>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Social Buttons
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button className="btn btn-sm" onClick={() => setOpen16(!open16)} aria-controls="example-collapse-text" aria-expanded={open16}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {SocialIconButtons.map((idx) => (
                                    <Button variant={idx.class} className="btn btn-icon btn-wave" key={Math.random()}>
                                        <i className={`ri-${idx.class}-line`}></i>
                                    </Button>
                                ))}
                            </div>
                        </Card.Body>
                        <Collapse in={open16} className="card-body"><pre>
                            <code>{`<Button className="btn btn-icon btn-facebook btn-wave">
<i className="ri-facebook-line"></i>
</Button>
<Button className="btn btn-icon btn-twitter btn-wave">
 <i className="ri-twitter-line"></i>
 </Button>
 <Button className="btn btn-icon btn-instagram btn-wave">
<i className="ri-instagram-line"></i>
 </Button>
 <Button className="btn btn-icon btn-github btn-wave">
     <i className="ri-github-line"></i>
 </Button>
 <Button className="btn btn-icon btn-youtube btn-wave">
     <i className="ri-youtube-line"></i>
 </Button>
 <Button className="btn btn-icon btn-google btn-wave">
     <i className="ri-google-line"></i>
 </Button>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Sizes
                                    </Card.Title>
                                    <div className="prism-toggle">
                                        <Button className="btn btn-sm" onClick={() => setOpen17(!open17)} aria-controls="example-collapse-text" aria-expanded={open17}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="btn-list">
                                        <Button type="button" variant='primary' className="btn  btn-sm btn-wave">Small
                                            button</Button>
                                        <Button type="button" variant='secondary' className="btn  btn-wave">Default
                                            button</Button>
                                        <Button type="button" variant='success' className="btn  btn-lg btn-wave">Large
                                            button</Button>
                                    </div>
                                </Card.Body>
                                    <Collapse in={open17} className="card-body"><pre>
                                        <code>{`<Button type="button" variant='primary' className="btn  btn-sm btn-wave">Small button</Button>
<Button type="button" variant='secondary' className="btn  btn-wave">Default button</Button>
<Button type="button" variant='success' className="btn  btn-lg btn-wave">Large button</Button>`}</code></pre>
                                    </Collapse>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>
                                        Button Widths
                                    </Card.Title>
                                    <div className="prism-toggle">
                                        <Button className="btn btn-sm" onClick={() => setOpen18(!open18)} aria-controls="example-collapse-text" aria-expanded={open18}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="btn-list">
                                        <Button type="button" variant='primary' className="btn btn-w-xs btn-wave">XS</Button>
                                        <Button type="button" variant='secondary' className="btn btn-w-sm btn-wave">SM</Button>
                                        <Button type="button" variant='warning' className="btn btn-w-md btn-wave">MD</Button>
                                        <Button type="button" variant='info' className="btn btn-w-lg btn-wave">LG</Button>
                                    </div>
                                </Card.Body>
                                <Collapse in={open18} className="card-body"><pre>
                                    <code>{`<Button type="button" variant='primary' className="btn btn-w-xs btn-wave">XS</Button>
<Button type="button" variant='secondary' className="btn btn-w-sm btn-wave">SM</Button>
<Button type="button" variant='warning' className="btn btn-w-md btn-wave">MD</Button>
<Button type="button" variant='info' className="btn btn-w-lg btn-wave">LG</Button>`}</code></pre>
                                </Collapse>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Buttons With Different Shadows
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button className="btn btn-sm" onClick={() => setOpen19(!open19)} aria-controls="example-collapse-text" aria-expanded={open19}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list d-flex">
                                <div className="me-5">
                                    <Button variant='primary' className="btn  shadow-sm btn-wave">Button</Button>
                                    <Button variant='primary' className="btn btn-primary shadow btn-wave">Button</Button>
                                    <Button variant='primary' className="btn btn-primary shadow-lg btn-wave">Button</Button>
                                </div>
                                <div>
                                    <Button variant='secondary' className="btn  btn-sm shadow-sm btn-wave">Button</Button>
                                    <Button variant='info' className="btn  shadow btn-wave">Button</Button>
                                    <Button variant='success' className="btn btn-lg  shadow-lg btn-wave">Button</Button>
                                </div>
                            </div>
                        </Card.Body>
                        <Collapse in={open19} className="card-body"><pre>
                            <code>{` <div className="me-5">
 <Button variant='primary' className="btn  shadow-sm btn-wave">Button</Button>
 <Button variant='primary' className="btn btn-primary shadow btn-wave">Button</Button>
 <Button variant='primary' className="btn btn-primary shadow-lg btn-wave">Button</Button>
</div>
<div>
 <Button variant='secondary' className="btn  btn-sm shadow-sm btn-wave">Button</Button>
 <Button variant='info' className="btn  shadow btn-wave">Button</Button>
 <Button variant='success' className="btn btn-lg  shadow-lg btn-wave">Button</Button>
</div>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Different Colored Buttons With Shadows
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button className="btn btn-sm" onClick={() => setOpen20(!open20)} aria-controls="example-collapse-text" aria-expanded={open20}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {ColoredButtons.map((idx) => (
                                    <Button variant={idx.class} className={`btn shadow-${idx.class} btn-wave`} key={Math.random()}>Button</Button>
                                ))}
                            </div>
                        </Card.Body>
                        <Collapse in={open20} className="card-body"><pre>
                            <code>{` <Button variant='primary' className="btn shadow-primary btn-wave">Button</Button>
<Button variant='secondary' className="btn shadow-secondary btn-wave">Button</Button>
<Button variant='success' className="btn shadow-success btn-wave">Button</Button>
<Button variant='info' className="btn shadow-info btn-wave">Button</Button>
<Button variant='warning' className="btn shadow-warning btn-wave">Button</Button>
<Button variant='danger' className="btn shadow-danger btn-wave">Button</Button>
<Button variant='purple' className="btn shadow-purple btn-wave">Button</Button>
<Button variant='orange' className="btn shadow-orange btn-wave">Button</Button> `}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Raised Buttons
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button className="btn btn-sm" onClick={() => setOpen21(!open21)} aria-controls="example-collapse-text" aria-expanded={open21}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {ColoredButtons.map((idx) => (
                                    <Button variant={idx.class} className="btn  btn-raised-shadow btn-wave" key={Math.random()}>Button</Button>
                                ))}
                            </div>
                        </Card.Body>
                            <Collapse in={open21} className="card-body"><pre>
                                <code>{`  {ColoredButtons.map((idx)=>(
<Button variant={idx.class} className="btn  btn-raised-shadow btn-wave" key={Math.random()}>Button</Button>
))} `}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Label Buttons
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button className="btn btn-sm" onClick={() => setOpen22(!open22)} aria-controls="example-collapse-text" aria-expanded={open22}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                <Button className="btn btn-primary label-btn">
                                    <i className="ri-chat-smile-line label-btn-icon me-2"></i>
                                    Primary
                                </Button>
                                <Button className="btn btn-secondary label-btn">
                                    <i className="ri-settings-4-line label-btn-icon me-2"></i>
                                    Secondary
                                </Button>
                                <Button className="btn btn-warning label-btn rounded-pill">
                                    <i className="ri-spam-2-line label-btn-icon me-2 rounded-pill"></i>
                                    Warning
                                </Button>
                                <Button className="btn btn-info label-btn rounded-pill">
                                    <i className="ri-phone-line label-btn-icon me-2 rounded-pill"></i>
                                    Info
                                </Button>
                                <Button className="btn btn-success label-btn label-end">
                                    Success
                                    <i className="ri-thumb-up-line label-btn-icon ms-2"></i>
                                </Button>
                                <Button className="btn btn-danger label-btn label-end rounded-pill">
                                    Cancel
                                    <i className="ri-close-line label-btn-icon ms-2 rounded-pill"></i>
                                </Button>
                            </div>
                        </Card.Body>
                            <Collapse in={open22} className="card-body"><pre>
                                <code>{`  <div className="btn-list">
 <Button className="btn btn-primary label-btn">
     <i className="ri-chat-smile-line label-btn-icon me-2"></i>
     Primary
 </Button>
 <Button className="btn btn-secondary label-btn">
     <i className="ri-settings-4-line label-btn-icon me-2"></i>
     Secondary
 </Button>
 <Button className="btn btn-warning label-btn rounded-pill">
     <i className="ri-spam-2-line label-btn-icon me-2 rounded-pill"></i>
     Warning
 </Button>
 <Button className="btn btn-info label-btn rounded-pill">
     <i className="ri-phone-line label-btn-icon me-2 rounded-pill"></i>
     Info
 </Button>
 <Button className="btn btn-success label-btn label-end">
     Success
     <i className="ri-thumb-up-line label-btn-icon ms-2"></i>
 </Button>
 <Button className="btn btn-danger label-btn label-end rounded-pill">
     Cancel
     <i className="ri-close-line label-btn-icon ms-2 rounded-pill"></i>
 </Button>
</div>`}</code></pre>
                            </Collapse>
                        
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Custom Buttons
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button className="btn btn-sm" onClick={() => setOpen23(!open23)} aria-controls="example-collapse-text" aria-expanded={open23}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                <Button variant='info' className="btn  custom-button rounded-pill">
                                    <span className="custom-btn-icons"><i className="ri-twitter-line text-info"></i></span>
                                    Twitter
                                </Button>
                                <Button variant='teal-light' className="btn  btn-border-down">Border</Button>
                                <Button variant='secondary-light' className="btn  btn-border-start">Border</Button>
                                <Button variant='purple-light' className="btn  btn-border-end">Border</Button>
                                <Button variant='warning-light' className="btn  btn-border-top">Border</Button>
                                <Button variant='secondary' className="btn  btn-glare"><span>Glare Button</span></Button>
                                <Button variant='danger' className="btn  btn-hover btn-hover-animate">Like</Button>
                                <Button variant='success' className="btn  btn-darken-hover">Hover</Button>
                                <Button variant='orange' className="btn  btn-custom-border">Hover</Button>
                            </div>
                        </Card.Body>
                            <Collapse in={open23} className="card-body"><pre>
                                <code>{` <div className="btn-list">
<Button variant='info' className="btn  custom-button rounded-pill"><span className="custom-btn-icons">
<i className="ri-twitter-line text-info"></i></span>Twitter</Button>
<Button variant='teal-light' className="btn  btn-border-down">Border</Button>
<Button variant='secondary-light' className="btn  btn-border-start">Border</Button>
<Button variant='purple-light' className="btn  btn-border-end">Border</Button>
<Button variant='warning-light' className="btn  btn-border-top">Border</Button>
<Button variant='secondary' className="btn  btn-glare"><span>Glare Button</span></Button>
<Button variant='danger' className="btn  btn-hover btn-hover-animate">Like</Button>
<Button variant='success' className="btn  btn-darken-hover">Hover</Button>
<Button variant='orange' className="btn  btn-custom-border">Hover</Button>
</div>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Block buttons
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button className="btn btn-sm" onClick={() => setOpen24(!open24)} aria-controls="example-collapse-text" aria-expanded={open24}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                <div className="d-grid gap-2 mb-4">
                                    <Button variant='primary' className="btn  btn-wave" type="button">Button</Button>
                                    <Button variant='secondary' className="btn  btn-wave" type="button">Button</Button>
                                </div>
                                <div className="d-grid gap-2 d-md-block">
                                    <Button variant='info' className="btn  btn-wave" type="button">Button</Button>
                                    <Button variant='success' className="btn  btn-wave" type="button">Button</Button>
                                </div>
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <Button variant='danger' className="btn  btn-wave" type="button">Button</Button>
                                    <Button variant='warning' className="btn  btn-wave" type="button">Button</Button>
                                </div>
                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <Button variant='teal' className="btn me-md-2 btn-wave" type="button">Button</Button>
                                    <Button variant='purple' className="btn  btn-wave" type="button">Button</Button>
                                </div>
                            </div>
                        </Card.Body>
                        <Collapse in={open24} className="card-body"><pre>
                            <code>{`<div className="d-grid gap-2 mb-4">
<Button variant='primary' className="btn  btn-wave" type="button">Button</Button>
<Button variant='secondary' className="btn  btn-wave" type="button">Button</Button>
  </div>
  <div className="d-grid gap-2 d-md-block">
<Button variant='info' className="btn  btn-wave" type="button">Button</Button>
<Button variant='success' className="btn  btn-wave" type="button">Button</Button>
  </div>
  <div className="d-grid gap-2 col-6 mx-auto">
<Button variant='danger' className="btn  btn-wave" type="button">Button</Button>
<Button variant='warning' className="btn  btn-wave" type="button">Button</Button>
  </div>
  <div className="d-grid gap-2 d-md-flex justify-content-md-end">
<Button variant='teal' className="btn me-md-2 btn-wave" type="button">Button</Button>
<Button variant='purple' className="btn  btn-wave" type="button">Button</Button>
  </div>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Buttons;
