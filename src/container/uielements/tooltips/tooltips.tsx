import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Collapse, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { SVGtooltip, Tooltipdirtooltip } from './tooltipsdata';
import { Link } from 'react-router-dom';
import face12 from '../../../assets/images/faces/12.jpg';
import face3 from '../../../assets/images/faces/3.jpg';
import face15 from '../../../assets/images/faces/15.jpg';

interface TooltipsProps { }

const Tooltips: FC<TooltipsProps> = () => {
    //collapse1
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    return (
        <Fragment>
            <Pageheader title="Tooltips" heading="Ui Elements" active="Tooltips" />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Tooltip Directions
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {Tooltipdirtooltip.map((idx: any) => (
                                    <OverlayTrigger placement={idx.text} overlay={<Tooltip>Tooltip on {idx.text} </Tooltip>} key={Math.random()}>
                                        <Button type="button" className="btn btn-primary btn-wave">
                                            Tooltip on {idx.text}
                                        </Button>
                                    </OverlayTrigger>
                                ))}
                            </div>
                        </Card.Body>
                            <Collapse in={open1} className="card-body"><pre><code>{`
  {Tooltipdirtooltip.map((idx)=>(
<OverlayTrigger placement={idx.text} overlay={<Tooltip>Tooltip on {idx.text} </Tooltip>} key={Math.random()}>
<Button type="button" className="btn btn-primary btn-wave">
Tooltip on {idx.text}
</Button>
</OverlayTrigger>
))}`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Colored Tooltips
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen2(!open2)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>Primary Tooltip </Tooltip>}>
                                    <Button type="button" variant='primary' className="btn  btn-wave">
                                        Primary Tooltip
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger placement="right" overlay={<Tooltip className='tooltip-secondary'>Secondary Tooltip </Tooltip>}>
                                    <Button type="button" variant='secondary' className="btn  btn-wave">
                                        Secondary Tooltip
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger placement="bottom" overlay={<Tooltip className='tooltip-warning'>Warning Tooltip </Tooltip>}>
                                    <Button type="button" variant='warning' className="btn  btn-wave">
                                        Warning Tooltip
                                    </Button>
                                </OverlayTrigger>

                                <OverlayTrigger placement="bottom" overlay={<Tooltip className='tooltip-info'>Info Tooltip </Tooltip>}>
                                    <Button type="button" variant='info' className="btn  btn-wave">
                                        Info Tooltip
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-success'>Success Tooltip </Tooltip>}>
                                    <Button type="button" variant='success' className="btn  btn-wave">
                                        Success Tooltip
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-danger'>Danger Tooltip </Tooltip>}>
                                    <Button type="button" variant='danger' className="btn  btn-wave">
                                    Danger Tooltip
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-light'>Light Tooltip </Tooltip>}>
                                    <Button type="button" variant='light' className="btn  btn-wave">
                                    Light Tooltip
                                    </Button>
                                </OverlayTrigger>
                                <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-dark'>Dark Tooltip </Tooltip>}>
                                    <Button type="button" variant='dark' className="btn  btn-wave">
                                    Dark Tooltip
                                    </Button>
                                </OverlayTrigger>
                                
                            </div>
                        </Card.Body>
                            <Collapse in={open2} className="card-body"><pre><code>{`
  {Tooltipdirtooltip.map((idx)=>(
<OverlayTrigger placement={idx.text} overlay={<Tooltip>Tooltip on {idx.text} </Tooltip>} key={Math.random()}>
<Button type="button" className="btn btn-primary btn-wave">
Tooltip on {idx.text}
</Button>
</OverlayTrigger>
))}`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Tooltips on links
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen3(!open3)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted mb-0">
                                Hover on the link to view the
                                <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>Link Tooltip </Tooltip>}>
                                    <Link to="#" className="text-primary ms-1">Tooltip</Link>
                                </OverlayTrigger>
                            </p>
                        </Card.Body>
                            <Collapse in={open3} className="card-body"><pre><code>{`
  <p className="text-muted mb-0">
  Hover on the link to view the
  <OverlayTrigger placement="top" overlay={<Tooltip className='tooltip-primary'>
  Link Tooltip </Tooltip>}>
  <Link to="#" className="text-primary">Tooltip</Link>
       </OverlayTrigger> 
</p>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                With an SVG's
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen4(!open4)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {SVGtooltip.map((idx) => (
                                <OverlayTrigger key={Math.random()} placement="top" overlay={<Tooltip className={`tooltip-${idx.color}`}>{idx.text} </Tooltip>}>
                                    <Link to="#" className="me-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className={`svg-${idx.color}`} height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                            <path d="M0 0h24v24H0V0z" fill="none" /><path
                                                d={idx.class} /></svg>
                                    </Link>
                                </OverlayTrigger>
                            ))}

                        </Card.Body>
                            <Collapse in={open4} className="card-body"><pre><code>{`<OverlayTrigger placement="top" overlay={
<Tooltip className="tooltip-secondary">Message </Tooltip>}>
<Link to="#"  className="me-3">
    <svg xmlns="http://www.w3.org/2000/svg" className="svg-secondary" 
    height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
        <path d="M0 0h24v24H0V0z" fill="none"/><path 
d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 
2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
        </svg>
</Link>
</OverlayTrigger>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Disabled elements
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen5(!open5)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Default tooltip!</Tooltip>}>
                                <span className="d-inline-block">
                                    <Button disabled style={{ pointerEvents: 'none' }}>
                                        Disabled button
                                    </Button>
                                </span>
                            </OverlayTrigger>
                        </Card.Body>
                            <Collapse in={open5} className="card-body"><pre><code>{`
  <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Default tooltip!</Tooltip>}>
  <span className="d-inline-block">
   <Button disabled style={{ pointerEvents: 'none' }}>
              Disabled button
        </Button>
     </span>
  </OverlayTrigger>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Tooltip For Images
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen6(!open6)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Alex Carey</Tooltip>}>
                                <Link to="#"
                                    className="avatar avatar-md me-2 online avatar-rounded">
                                    <img src={face12} alt="img" />
                                </Link>
                            </OverlayTrigger>

                            <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Marina Kai</Tooltip>}>
                                <Link to="#"
                                    className="avatar avatar-lg me-2 online avatar-rounded">
                                    <img src={face3} alt="img" />
                                </Link>
                            </OverlayTrigger>
                            <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">Tim Cook</Tooltip>}>
                                <Link to="#"
                                    className="avatar avatar-xl me-2 online avatar-rounded">
                                    <img src={face15} alt="img" />
                                </Link>
                            </OverlayTrigger>
                        </Card.Body>
                            <Collapse in={open6} className="card-body"><pre><code>{`
 <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">
 Alex Carey</Tooltip>}>
 <Link to="#"
  className="avatar avatar-md me-2 online avatar-rounded">
         <img src={face12} alt="img"/>
     </Link>
 </OverlayTrigger>
 
 <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">
 Marina Kai</Tooltip>}>
 <Link to="#"
  className="avatar avatar-lg me-2 online avatar-rounded">
         <img src={face3} alt="img"/>
     </Link>
 </OverlayTrigger>
 <OverlayTrigger placement="top" overlay={<Tooltip className="tooltip-primary">
 Tim Cook</Tooltip>}>
 <Link to="#"
  className="avatar avatar-xl me-2 online avatar-rounded">
         <img src={face15} alt="img"/>
     </Link>
 </OverlayTrigger>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Tooltips;
