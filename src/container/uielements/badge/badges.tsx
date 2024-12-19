import  { FC, Fragment, useState } from 'react';
import { Badge, Button, Card, Col, Collapse, Row, } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { badges, badges1 } from './badgesdata';
import face1 from "../../../assets/images/faces/2.jpg";
import face2 from "../../../assets/images/faces/15.jpg";
import face3 from "../../../assets/images/faces/10.jpg";

interface BadgesProps { }

const Badges: FC<BadgesProps> = () => {
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
    return (
        <Fragment>
            <Pageheader title="Badge" heading="Ui Elements" active="Badge" />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Badges
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen1(!open1)} aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>

                        <Card.Body className=" d-flex flex-wrap gap-2" >
                            {badges.map((badge) => (
                                <Badge key={Math.random()} bg={badge.color} className={`badge bg-${badge.color} ${badge.class}`}>{badge.heading}</Badge>
                            ))}
                        </Card.Body>
                            <Collapse in={open1} className="card-body"><pre>
                            <code>{`<Badge bg="primary">Primary</Badge>
<Badge bg="secondary">Secondary</Badge>
<Badge bg="success">Success</Badge>
<Badge bg="danger">Danger</Badge>
<Badge bg="warning">Warning</Badge>
<Badge bg="info">Info</Badge>
<Badge bg="light">Light</Badge>
<Badge bg="dark">Dark</Badge>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Pill badges
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen2(!open2)} aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className=" d-flex flex-wrap gap-2">
                            {badges.map((badge) => (
                                <Badge key={Math.random()} bg={badge.color} className={`badge bg-${badge.color} ${badge.class} rounded-pill`}>{badge.heading}</Badge>
                            ))}
                        </Card.Body>
                            <Collapse in={open2} className="card-body"><pre>
                            <code>{`<Badge bg="primary" className="rounded-pill">Primary</Badge>
<Badge bg="secondary" className="rounded-pill">Secondary</Badge>
<Badge bg="success" className="rounded-pill">Success</Badge>
<Badge bg="danger" className="rounded-pill">Danger</Badge>
<Badge bg="warning" className="rounded-pill">Warning</Badge>
<Badge bg="info" className="rounded-pill">Info</Badge>
<Badge bg="light" className="rounded-pill">Light</Badge>
<Badge bg="dark" className="rounded-pill">Dark</Badge>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Light Badges
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen3(!open3)} aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className=" d-flex flex-wrap gap-2">
                            {badges.map((badge) => (
                                <Badge key={Math.random()} bg={badge.color} className={`badge bg-${badge.color}-transparent ${badge.class}`}>{badge.heading}</Badge>
                            ))}
                        </Card.Body>
                            <Collapse in={open3} className="card-body"><pre>
                            <code>{`<Badge bg="primary-transparent">Primary</Badge>
<Badge bg="secondary-transparent">Secondary</Badge>
<Badge bg="success-transparent">Success</Badge>
<Badge bg="danger-transparent">Danger</Badge>
<Badge bg="warning-transparent">Warning</Badge>
<Badge bg="info-transparent">Info</Badge>
<Badge bg="light-transparent">Light</Badge>
<Badge bg="dark-transparent">Dark</Badge>`}</code></pre>

                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Light Pill Badges
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen4(!open4)} aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className=" d-flex flex-wrap gap-2">
                            {badges.map((badge) => (
                                <Badge key={Math.random()} bg={badge.color} className={`badge bg-${badge.color}-transparent ${badge.class} rounded-pill`}>{badge.heading}</Badge>
                            ))}
                        </Card.Body>
                            <Collapse in={open4} className="card-body"><pre>
                            <code>{`<Badge bg="primary-transparent" className="rounded-pill">Primary</Badge>
<Badge bg="secondary-transparent" className="rounded-pill">Secondary</Badge>
<Badge bg="success-transparent" className="rounded-pill">Success</Badge>
<Badge bg="danger-transparent" className="rounded-pill">Danger</Badge>
<Badge bg="warning-transparent" className="rounded-pill">Warning</Badge>
<Badge bg="info-transparent" className="rounded-pill">Info</Badge>
<Badge bg="light-transparent" className="rounded-pill">Light</Badge>
<Badge bg="dark-transparent" className="rounded-pill">Dark</Badge>`}</code></pre>

                        </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Gradient Badges
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen5(!open5)} aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className=" d-flex flex-wrap gap-2">
                            {badges1.map((badge1) => (
                                <Badge key={Math.random()} bg={badge1.color} className={`badge bg-${badge1.color}-gradient`}>{badge1.heading}</Badge>
                            ))}
                        </Card.Body>
                            <Collapse in={open5} className="card-body"><pre>
                            <code>{`<Badge bg="primary-gradient">Primary</Badge>
<Badge bg="secondary-gradient">Secondary</Badge>
<Badge bg="success-gradient">Success</Badge>
<Badge bg="danger-gradient">Danger</Badge>
<Badge bg="warning-gradient">Warning</Badge>
<Badge bg="info-gradient">Info</Badge>
<Badge bg="orange-gradient">Light</Badge>
<Badge bg="purple-gradient">Dark</Badge>`}</code></pre>
                        </Collapse>

                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Gradient Pill Badges
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen6(!open6)} aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className=" d-flex flex-wrap gap-2">
                            {badges1.map((badge1) => (
                                <Badge key={Math.random()} bg={badge1.color} className={`badge bg-${badge1.color}-gradient rounded-pill`}>{badge1.heading}</Badge>
                            ))}
                        </Card.Body>
                            <Collapse in={open6} className="card-body"><pre>
                            <code>{` <Badge bg="primary-gradient" className="rounded-pill">Primary</Badge>
<Badge bg="secondary-gradient" className="rounded-pill">Secondary</Badge>
<Badge bg="success-gradient" className="rounded-pill">Success</Badge>
<Badge bg="danger-gradient" className="rounded-pill">Danger</Badge>
<Badge bg="warning-gradient" className="rounded-pill">Warning</Badge>
<Badge bg="info-gradient" className="rounded-pill">Info</Badge>
<Badge bg="orange-gradient" className="rounded-pill">Light</Badge>
<Badge bg="purple-gradient" className="rounded-pill">Dark</Badge>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Outline Badges
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen7(!open7)} aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className=" d-flex flex-wrap gap-2">
                            {badges.map((badge) => (
                                <Badge key={Math.random()} bg={`outline-${badge.color}`} className={`badge outline-${badge.color}-transparent ${badge.class}`}>{badge.heading}</Badge>
                            ))}
                        </Card.Body>
                            <Collapse in={open7} className="card-body"><pre>
                            <code>{`<Badge bg="primary">Primary</Badge>
<Badge bg="secondary">Secondary</Badge>
<Badge bg="success">Success</Badge>
<Badge bg="danger">Danger</Badge>
<Badge bg="warning">Warning</Badge>
<Badge bg="info">Info</Badge>
<Badge bg="light" className="text-dark">Light</Badge>
<Badge bg="dark">Dark</Badge>`}</code></pre>

                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Outline Pill Badges
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen8(!open8)} aria-controls="example-collapse-text" aria-expanded={open8}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className=" d-flex flex-wrap gap-2">
                            {badges.map((badge) => (
                                <Badge key={Math.random()} bg={`outline-${badge.color}`} className={`badge outline-${badge.color}-transparent ${badge.class} rounded-pill`}>{badge.heading}</Badge>
                            ))}
                        </Card.Body>
                            <Collapse in={open8} className="card-body"><pre>
                            <code>{`<Badge bg="outline-primary" className=" rounded-pill">Primary</Badge>
<Badge bg="outline-secondary" className=" rounded-pill ">Secondary</Badge>
<Badge bg="outline-success" className=" rounded-pill ">Success</Badge>
<Badge bg="outline-danger" className=" rounded-pill ">Danger</Badge>
<Badge bg="outline-warning" className=" rounded-pill ">Warning</Badge>
<Badge bg="outline-info" className=" rounded-pill ">Info</Badge>
<Badge bg="outline-light" className=" rounded-pill  text-dark">Light</Badge>
<Badge bg="outline-dark" className=" rounded-pill">Dark</Badge>`}</code></pre>

                        </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Buttons With Badges
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen9(!open9)} aria-controls="example-collapse-text" aria-expanded={open9}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className=" d-flex flex-wrap gap-2">
                            <Button variant='primary' type="button" className="btn  my-1 me-2">
                                Notifications <Badge bg="secondary" className="badge ms-2 ">4</Badge>
                            </Button>
                            <Button variant='secondary' type="button" className="btn  my-1 me-2">
                                Notifications <Badge bg="primary" className="badge ms-2 ">7</Badge>
                            </Button>
                            <Button variant='success' type="button" className="btn  my-1 me-2">
                                Notifications <Badge bg="danger" className="badge ms-2 ">12</Badge>
                            </Button>
                            <Button variant='info' type="button" className="btn  my-1 me-2">
                                Notifications <Badge bg="warning" className="badge ms-2 ">32</Badge>
                            </Button>
                        </Card.Body>
                            <Collapse in={open9} className="card-body"><pre>
                            <code>{`<Button variant='primary' type="button" className="btn  my-1 me-2">
 Notifications <Badge bg="secondary" className="badge ms-2 ">4</Badge>
</Button>
<Button variant='secondary' type="button" className="btn  my-1 me-2">
 Notifications <Badge bg="primary" className="badge ms-2 ">7</Badge>
</Button>
<Button variant='success' type="button" className="btn  my-1 me-2">
 Notifications <Badge bg="danger" className="badge ms-2 ">12</Badge>
</Button>
<Button variant='info' type="button" className="btn  my-1 me-2">
 Notifications <Badge bg="warning" className="badge ms-2 ">32</Badge>
</Button>`}</code></pre>

                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Outline Button Badges
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen10(!open10)} aria-controls="example-collapse-text" aria-expanded={open10}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className=" d-flex flex-wrap gap-2">
                            <Button variant='outline-primary' type="button" className="btn  my-1 me-2">
                                Notifications <Badge bg="" className="badge ms-2">4</Badge>
                            </Button>
                            <Button variant='outline-secondary' type="button" className="btn  my-1 me-2">
                                Notifications <Badge bg="" className="badge ms-2">7</Badge>
                            </Button>
                            <Button variant='outline-success' type="button" className="btn  my-1 me-2">
                                Notifications <Badge bg="" className="badge ms-2">12</Badge>
                            </Button>
                            <Button variant='outline-info' type="button" className="btn  my-1 me-2">
                                Notifications <Badge bg="" className="badge ms-2">32</Badge>
                            </Button>
                        </Card.Body>
                            <Collapse in={open10} className="card-body"><pre>
                            <code>{`<Button variant='outline-primary' type="button" className="btn  my-1 me-2">
Notifications <Badge bg="" className="badge ms-2">4</Badge>
</Button>
<Button variant='outline-secondary' type="button" className="btn  my-1 me-2">
Notifications <Badge bg="" className="badge ms-2">7</Badge>
</Button>
<Button variant='outline-success' type="button" className="btn  my-1 me-2">
Notifications <Badge bg="" className="badge ms-2">12</Badge>
</Button>
<Button variant='outline-info' type="button" className="btn  my-1 me-2">
Notifications <Badge bg="" className="badge ms-2">32</Badge>
</Button>`}</code></pre>

                        </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Headings
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen11(!open11)} aria-controls="example-collapse-text" aria-expanded={open11}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <h1>Example heading <Badge bg="primary" className="badge">New</Badge></h1>
                            <h2>Example heading <Badge bg="primary" className="badge">New</Badge></h2>
                            <h3>Example heading <Badge bg="primary" className="badge">New</Badge></h3>
                            <h4>Example heading <Badge bg="primary" className="badge">New</Badge></h4>
                            <h5>Example heading <Badge bg="primary" className="badge">New</Badge></h5>
                            <h6>Example heading <Badge bg="primary" className="badge">New</Badge></h6>
                        </Card.Body>
                            <Collapse in={open11} className="card-body"><pre>
                            <code>{`<h1>Example heading <Badge bg="primary" className="badge">New</Badge></h1>
<h2>Example heading <Badge bg="primary" className="badge">New</Badge></h2>
<h3>Example heading <Badge bg="primary" className="badge">New</Badge></h3>
<h4>Example heading <Badge bg="primary" className="badge">New</Badge></h4>
<h5>Example heading <Badge bg="primary" className="badge">New</Badge></h5>
<h6>Example heading <Badge bg="primary" className="badge">New</Badge></h6>`}</code></pre>

                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>Positioned Badges</Card.Title>
                                    <div className="prism-toggle">
                                        <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen12(!open12)} aria-controls="example-collapse-text" aria-expanded={open12}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                                    </div>
                                </Card.Header>
                                <Card.Body className=" d-flex flex-wrap gap-4">
                                    <Button variant='primary' type="button" className="btn  position-relative">
                                        Inbox
                                        <span
                                            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                            99+
                                            <span className="visually-hidden">unread messages</span>
                                        </span>
                                    </Button>
                                    <Button variant='secondary' type="button" className="btn  position-relative">
                                        Profile
                                        <span
                                            className="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
                                            <span className="visually-hidden">New alerts</span>
                                        </span>
                                    </Button>
                                    <span className="avatar">
                                        <img src={face1} alt="img" />
                                        <span
                                            className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                                            <span className="visually-hidden">New alerts</span>
                                        </span>
                                    </span>
                                    <span className="avatar avatar-rounded">
                                        <img src={face2} alt="img" />
                                        <span className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                                            <span className="visually-hidden">New alerts</span>
                                        </span>
                                    </span>
                                    <span className="avatar avatar-rounded">
                                        <img src={face3} alt="img" />
                                        <span className="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">1000+
                                            <span className="visually-hidden">New alerts</span>
                                        </span>
                                    </span>
                                </Card.Body>
                                    <Collapse in={open12} className="card-body"><pre>
                                    <code>{`<Button variant='primary' type="button" className="btn  position-relative">
Inbox
<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span className="visually-hidden">unread messages</span>
</span>
</Button>
<Button variant='secondary' type="button" className="btn  position-relative">
Profile
<span className="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
    <span className="visually-hidden">New alerts</span>
</span>
</Button>
<span className="avatar">
<img src={face1} alt="img"/>
<span className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
<span className="visually-hidden">New alerts</span>
</span>
</span>
<span className="avatar avatar-rounded">
<img src={face2} alt="img"/>
<span className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
    <span className="visually-hidden">New alerts</span>
</span>
</span>
<span className="avatar avatar-rounded">
<img src={face3} alt="img"/>
<span className="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">1000+
    <span className="visually-hidden">New alerts</span>
</span>
</span>`}</code></pre>

                                </Collapse>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="justify-content-between">
                                    <Card.Title>Custom Badges</Card.Title>
                                    <div className="prism-toggle">
                                        <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen13(!open13)} aria-controls="example-collapse-text" aria-expanded={open13}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <Badge bg="outline-secondary" className="badge  custom-badge fs-15 me-5 m-2"><i className="ti ti-flame me-1"></i>Hot</Badge>
                                    <Badge bg="" className="icon-badge me-5 m-2">
                                        <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" /></svg>
                                        <Badge className="badge rounded-pill bg-success">14</Badge>
                                    </Badge>
                                    <Badge bg="" className="badge border bg-light text-default custom-badge me-5 m-2"><i className="fe fe-eye me-1 d-inline-block"></i>13.2k</Badge>
                                    <span className="text-badge me-5 m-2">
                                        <span className="text fs-18">Inbox</span>
                                        <Badge bg="success" className="badge rounded-pill bg-success">32</Badge>
                                    </span>
                                </Card.Body>
                                    <Collapse in={open13} className="card-body"><pre>
                                    <code>{`<Badge bg="outline-secondary" className="badge  custom-badge fs-15 me-5 m-2"><i className="ti ti-flame me-1"></i>Hot</Badge>
<Badge bg="" className="icon-badge me-5 m-2">
    <svg className="icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>
    <Badge className="badge rounded-pill bg-success">14</Badge>
</Badge>
<Badge bg="" className="badge border bg-light text-default custom-badge me-5 m-2"><i className="fe fe-eye me-1 d-inline-block"></i>13.2k</Badge>
<span className="text-badge me-5 m-2">
    <span className="text fs-18">Inbox</span>
    <Badge bg="success" className="badge rounded-pill bg-success">32</Badge>
</span>`}</code></pre>

                                </Collapse>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Badges;
