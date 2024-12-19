import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Collapse, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import { Colorheaderalerts, Colredalerts, Defaultalerts, Dismissiblealerts } from './popoverdata';

interface PopooversProps { }

const Popoovers: FC<PopooversProps> = () => {
    //collapse1
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    return (
        <Fragment>
            <Pageheader title="Popovers" heading="Ui Elements" active="Popovers" />
            <Row>
                <Col xl={5}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Default Popovers
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {Defaultalerts.map((idx: any) => (
                                    <OverlayTrigger trigger="click" placement={idx.class} key={Math.random()}
                                        overlay={<Popover>
                                            <Popover.Header as="h3"> Popover {idx.text}</Popover.Header>
                                            <Popover.Body>
                                                And here's some amazing content. It's very engaging. Right?
                                            </Popover.Body>
                                        </Popover>}>
                                        <Button variant='' href="#" className="btn btn-outline-primary btn-wave">Popover {idx.text}</Button>
                                    </OverlayTrigger>
                                ))}
                            </div>
                        </Card.Body>
                            <Collapse in={open1} className="card-body"><pre><code>{`{Defaultalerts.map((idx)=>(
<OverlayTrigger trigger="click" placement={idx.class}  key={Math.random()}
overlay={<Popover>
<Popover.Header as="h3"> Popover {idx.text}</Popover.Header>
<Popover.Body>
Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
</Popover.Body>
</Popover>}>
<Button variant='' href="#" className="btn btn-outline-primary btn-wave">Popover {idx.text}</Button>
</OverlayTrigger>))}`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={7}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Colored Headers
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen2(!open2)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">{Colorheaderalerts.map((idx: any) => (
                                <OverlayTrigger trigger="click" placement={idx.class} key={Math.random()}
                                    // autoclose='true' 
                                    overlay={<Popover className={`header-${idx.color1} ${idx.color2}`}>
                                        <Popover.Header as="h3" data-bs-custom-classname={`header-${idx.color1}`}> Color Header</Popover.Header>
                                        <Popover.Body>
                                            Popover with primary header.
                                        </Popover.Body>
                                    </Popover>}>
                                    <Button variant={idx.color} href="#" className="btn btn-wave">Header {idx.text}</Button>
                                </OverlayTrigger>
                            ))}
                            </div>
                        </Card.Body>
                         <Collapse in={open2} className="card-body"><pre><code>{`<OverlayTrigger trigger="click" placement={idx.class}  key={Math.random()}
  overlay={<Popover>
<Popover.Header as="h3" data-bs-custom-classname="header-primary"> Color Header</Popover.Header>
     <Popover.Body>
     Popover with primary header.
   </Popover.Body>
      </Popover>}>
<Button variant={idx.color} href="#"  className="btn btn-wave">Header {idx.text}</Button>
 </OverlayTrigger> ))}`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Colored Popovers
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen3(!open3)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {Colredalerts.map((idx: any) => (
                                    <OverlayTrigger key={Math.random()} placement={idx.class} trigger="click" overlay={<Popover className={`popover-${idx.color1}`}>
                                        <Popover.Header as="h3">Color Background</Popover.Header>
                                        <Popover.Body>Popover with {idx.text} background.</Popover.Body>
                                    </Popover>}>
                                        <Button variant={idx.color1}>{idx.text} </Button>
                                    </OverlayTrigger>
                                ))}
                            </div>
                        </Card.Body>
                        <Collapse in={open3} className="card-body"><pre><code>{`
<OverlayTrigger placement="top trigger="click" overlay={<Popover className="popover-primary">
 <Popover.Header as="h3">Color Background</Popover.Header>
<Popover.Body>Popover with primary background.</Popover.Body>
</Popover>}>
 <Button variant="primary">Primary </Button>
</OverlayTrigger>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Light Popovers
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen4(!open4)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {Colredalerts.map((idx: any) => (
                                    <OverlayTrigger key={Math.random()} placement={idx.class} trigger="click" overlay={<Popover className={`popover-${idx.color1}-light`} id="tooltip-disabled">
                                        <Popover.Header as="h3">Light Background</Popover.Header>
                                        <Popover.Body>Popover with light {idx.text} background.</Popover.Body>
                                    </Popover>}>
                                        <Button variant='' className={`btn btn-${idx.color1}-light btn-wave`}>{idx.text} </Button>
                                    </OverlayTrigger>
                                ))}
                            </div>
                        </Card.Body>
                            <Collapse in={open4} className="card-body"><pre><code>{`
<OverlayTrigger placement="top trigger="click" overlay={<Popover className="popover-primary-light">
 <Popover.Header as="h3">Light Background</Popover.Header>
<Popover.Body>Popover with light primary background.</Popover.Body>
</Popover>}>
 <Button variant="primary-light">Primary </Button>
</OverlayTrigger>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Dismissible Popovers
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen5(!open5)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="card-body d-flex flex-wrap justify-content-between dismissiable-popovers">
                            {Dismissiblealerts.map((idx: any) => (
                                <OverlayTrigger rootClose={true} trigger="click" placement={idx.class} key={Math.random()}
                                    overlay={<Popover>
                                        <Popover.Header as="h3"> Dismissible Popover</Popover.Header>
                                        <Popover.Body>
                                            And here's some amazing content. It's very engaging. Right?
                                        </Popover.Body>
                                    </Popover>}>
                                    <Button variant={idx.color} className="btn  btn-wave">Popover Dismiss</Button>
                                </OverlayTrigger>
                            ))}

                        </Card.Body>
                            <Collapse in={open5} className="card-body"><pre><code>{`
{Dismissiblealerts.map((idx)=>(
    <OverlayTrigger trigger="click" placement={idx.class}  key={Math.random()}
    autoclose='true' 
overlay={<Popover>
<Popover.Header as="h3"> Dismissible Popover</Popover.Header>
   <Popover.Body>
   And here's some amazing content. It's very engaging. Right?
 </Popover.Body>
    </Popover>}>
<Button variant={idx.color}   className="btn  btn-wave">Popover Dismiss</Button>
</OverlayTrigger>))}`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Disabled Popover
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen6(!open6)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <OverlayTrigger placement='right' overlay={<Popover id="tooltip-disabled">
                                <Popover.Body>Disabled Popover!</Popover.Body>
                            </Popover>}>
                                <span className="d-inline-block">
                                    <Button disabled style={{ pointerEvents: 'none' }}>
                                        Disabled button
                                    </Button>
                                </span>
                            </OverlayTrigger>
                        </Card.Body>
                         <Collapse in={open6} className=""><pre><code>{`<OverlayTrigger placement='right' 
overlay={<Popover id="tooltip-disabled">
<Popover.Body>Disabled Popover!</Popover.Body>
</Popover>}>
     <span className="d-inline-block">
<Button disabled style={{ pointerEvents: 'none' }}>
         Disabled button
       </Button>
     </span>
</OverlayTrigger>   `}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Icon Popovers
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen7(!open7)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <OverlayTrigger placement='top' trigger="click" overlay={<Popover className='popover-primary only-body' id="tooltip-disabled">
                                <Popover.Body>This popover is used to provide details about this icon.</Popover.Body>
                            </Popover>}>
                                <Link className="me-4" to="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-primary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                        <path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" /></svg>
                                </Link>
                            </OverlayTrigger>
                            <OverlayTrigger placement='left' trigger="click" overlay={<Popover className='popover-secondary only-body' id="tooltip-disabled">
                                <Popover.Body>This popover is used to provide details about this icon.</Popover.Body>
                            </Popover>}>
                                <Link className="me-4" to="#" >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="svg-secondary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                                </Link>
                            </OverlayTrigger>
                        </Card.Body>
                            <Collapse in={open7} className="card-body">
                                <pre><code>{`<OverlayTrigger placement='top' trigger="click" overlay={<Popover className='popover-primary' id="tooltip-disabled">
<Popover.Body>This popover is used to provide details about this icon.</Popover.Body>
</Popover>}>
<Link className="me-4" to="#">
<svg xmlns="http://www.w3.org/2000/svg" 
className="svg-primary" height="24px"
 viewBox="0 0 24 24" width="24px" fill="#000000">
<path d="M0 0h24v24H0V0z" fill="none"/>
<path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 
2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2
 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/>
 </svg>

</Link>
</OverlayTrigger>
<OverlayTrigger placement='left' trigger="click" 
overlay={<Popover className='popover-secondary' id="tooltip-disabled">
<Popover.Body>This popover is used to provide details about this icon.</Popover.Body>
</Popover>}>
<Link className="me-4" to="#" >

<svg xmlns="http://www.w3.org/2000/svg" className="svg-secondary" 
height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
<path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 
4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 
18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>

</Link>
</OverlayTrigger>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Popoovers;
