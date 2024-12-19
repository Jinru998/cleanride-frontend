import  { FC, Fragment, useState } from 'react';
import { Badge, Button, Card, Col, Collapse, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import face1 from "../../../assets/images/faces/1.jpg";
import face2 from "../../../assets/images/faces/2.jpg";
import face3 from "../../../assets/images/faces/3.jpg";
import { Avataricons, Avatarindicators, Avatarinitials, Avataroffline, Avatarsizes, Avatarstacked } from './avatarsdata';
import { Link } from 'react-router-dom';

interface AvatarsProps { }

const Avatars: FC<AvatarsProps> = () => {
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
    return (
        <Fragment>
            <Pageheader title="Avatars" heading="Utilities" active="Avatars" />
            <Row>
                <Col xl={4} lg={6} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Avatars
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="card-body py-4">
                            <span className="avatar me-2 avatar-radius-0">
                                <img src={face1} alt="img" />
                            </span>
                            <span className="avatar me-2">
                                <img src={face2} alt="img" />
                            </span>
                            <span className="avatar me-2 avatar-rounded">
                                <img src={face3} alt="img" />
                            </span>
                        </Card.Body>
                            <Collapse in={open1} className="card-body"><pre><code>{`
<span className="avatar me-2 avatar-radius-0">
<img src={face1} alt="img"/>
</span>
<span className="avatar me-2">
<img src={face2} alt="img"/>
</span>
<span className="avatar me-2 avatar-rounded">
<img src={face3} alt="img"/>
</span>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Avatar Sizes
                                <p className="subtitle text-muted fs-12 fw-normal">
                                    Avatars of different sizes
                                </p>
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen2(!open2)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {Avatarsizes.map((idx) => (
                                <span className={`avatar avatar-${idx.class} me-2`} key={Math.random()}>
                                    <img src={idx.src} alt="img" />
                                </span>
                            ))}
                        </Card.Body>
                            <Collapse in={open2} className="card-body"><pre><code>{`
 <span className="avatar avatar-xs me-2">
 <img src={face4} alt="img"/>
</span>
<span className="avatar avatar-sm me-2">
 <img src={face5} alt="img"/>
</span>
<span className="avatar avatar-md me-2">
 <img src={face6} alt="img"/>
</span>
<span className="avatar avatar-lg me-2">
 <img src={face7} alt="img"/>
</span>
<span className="avatar avatar-xl me-2">
 <img src={face8} alt="img"/>
</span>
<span className="avatar avatar-xxl me-2">
 <img src={face9} alt="img"/>
</span>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Avatar With Icons
                                <p className="subtitle text-muted fs-12 fw-normal">
                                    Avatar contains icons to perform respective action.
                                </p>
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen3(!open3)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {Avataricons.map((idx) => (
                                <span className={`avatar avatar-${idx.class} me-2 avatar-rounded`} key={Math.random()}>
                                    <img src={idx.src} alt="img" />
                                    <Badge bg={idx.color} className="badge rounded-pill avatar-badge"><i className={idx.icon}></i></Badge>
                                </span>
                            ))}
                        </Card.Body>
                            <Collapse in={open3} className="card-body"><pre><code>{`
 <span className="avatar avatar-xs me-2 avatar-rounded">
 <img src={face2} alt="img"/>
 <Link to="#" className="badge bg-success rounded-pill avatar-badge">
 <i className="fe fe-camera"></i></Link>
</span>
<span className="avatar avatar-sm me-2 avatar-rounded">
 <img src={face3} alt="img"/>
 <Link to="#" className="badge rounded-pill bg-secondary avatar-badge">
 <i className="fe fe-edit"></i></Link>
</span>
<span className="avatar avatar-md me-2 avatar-rounded">
 <img src={face14} alt="img"/>
 <Link to="#" className="badge rounded-pill bg-warning avatar-badge">
 <i className="fe fe-plus"></i></Link>
</span>
<span className="avatar avatar-lg me-2 avatar-rounded">
 <img src={face13} alt="img"/>
 <Link to="#" className="badge rounded-pill bg-info avatar-badge">
 <i className="fe fe-edit"></i></Link>
</span>
<span className="avatar avatar-xl me-2 avatar-rounded">
 <img src={face15} alt="img"/>
 <Link to="#" className="badge rounded-pill bg-success avatar-badge">
 <i className="fe fe-camera"></i></Link>
</span>
<span className="avatar avatar-xxl me-2 avatar-rounded">
 <img src={face9} alt="img"/>
 <Link to="#" className="badge rounded-pill bg-danger avatar-badge">
 <i className="fe fe-plus"></i></Link>
</span>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4} lg={6} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Avatar With Online Status Indicators
                                <p className="subtitle text-muted fs-12 fw-normal">
                                    avatars having online status indicator.
                                </p>
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen4(!open4)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {Avatarindicators.map((idx) => (
                                <span className={`avatar avatar-${idx.class} me-2 online avatar-rounded`} key={Math.random()}>
                                    <img src={idx.src} alt="img" />
                                </span>
                            ))}
                        </Card.Body>
                            <Collapse in={open4} className="card-body"><pre><code>{`
  <span className="avatar avatar-sm online me-2 avatar-rounded">
  <img src={face10} alt="img"/>
</span>
<span className="avatar avatar-md me-2 online avatar-rounded">
  <img src={face12} alt="img"/>
</span>
<span className="avatar avatar-lg me-2 online avatar-rounded">
  <img src={face13} alt="img"/>
</span>
<span className="avatar avatar-xl me-2 online avatar-rounded">
  <img src={face14} alt="img"/>
</span>
<span className="avatar avatar-xxl me-2 online avatar-rounded">
  <img src={face15} alt="img"/>
</span>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Avatar With Ofline Status Indicators
                                <p className="subtitle text-muted fs-12 fw-normal">
                                    avatars having a offline status indicator.
                                </p>
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen5(!open5)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {Avataroffline.map((idx) => (
                                <span className={`avatar avatar-${idx.class} me-2 offline avatar-rounded`} key={Math.random()}>
                                    <img src={idx.src} alt="img" />
                                </span>
                            ))}
                        </Card.Body>
                            <Collapse in={open5} className="card-body"><pre><code>{`
  <span className="avatar avatar-sm offline me-2 avatar-rounded">
  <img src={face3} alt="img"/>
</span>
<span className="avatar avatar-md me-2 offline avatar-rounded">
  <img src={face4} alt="img"/>
</span>
<span className="avatar avatar-lg me-2 offline avatar-rounded">
  <img src={face5} alt="img"/>
</span>
<span className="avatar avatar-xl me-2 offline avatar-rounded">
  <img src={face6} alt="img"/>
</span>
<span className="avatar avatar-xxl me-2 offline avatar-rounded">
  <img src={face7} alt="img"/>
</span>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Avatars With Number Badges
                                <p className="subtitle text-muted fs-12 fw-normal">
                                    Avatar numbers indicates the no. of unread notififactions/messages.
                                </p>
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen6(!open6)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {Avataricons.map((idx) => (
                                <span className={`avatar avatar-${idx.class} me-2 avatar-rounded`} key={Math.random()}>
                                    <img src={idx.src} alt="img" />
                                    <Badge bg={idx.color} className="badge rounded-pill  avatar-badge">{idx.text}</Badge>
                                </span>
                            ))}
                        </Card.Body>
                            <Collapse in={open6} className="card-body"><pre><code>{`
   <span className="avatar avatar-sm me-2 avatar-rounded">
   <img src={face3} alt="img"/>
   <span className="badge rounded-pill bg-secondary avatar-badge">5</span>
</span>
<span className="avatar avatar-md me-2 avatar-rounded">
   <img src={face14} alt="img"/>
   <span className="badge rounded-pill bg-warning avatar-badge">1</span>
</span>
<span className="avatar avatar-lg me-2 avatar-rounded">
   <img src={face13} alt="img"/>
   <span className="badge rounded-pill bg-info avatar-badge">7</span>
</span>
<span className="avatar avatar-xl me-2 avatar-rounded">
   <img src={face15} alt="img"/>
   <span className="badge rounded-pill bg-success avatar-badge">3</span>
</span>
<span className="avatar avatar-xxl me-2 avatar-rounded">
   <img src={face9} alt="img"/>
   <span className="badge rounded-pill bg-danger avatar-badge">9</span>
</span>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4} lg={6} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Avatar With Initials
                                <p className="subtitle text-muted fs-12 fw-normal">
                                    Avatar contains intials when user profile doesn't exist.
                                </p>
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen7(!open7)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {Avatarinitials.map((idx) => (
                                <span className={`avatar avatar-${idx.class} m-2 bg-${idx.color}`} key={Math.random()}>{idx.text}
                                </span>
                            ))}
                        </Card.Body>
                            <Collapse in={open7} className="card-body"><pre><code>{`
<span className="avatar avatar-xs m-2 bg-primary">
 xs
</span>
<span className="avatar avatar-sm m-2 bg-secondary">
    SM
</span>
<span className="avatar avatar-md m-2 bg-warning">
    MD
</span>
<span className="avatar avatar-lg m-2 bg-danger">
    LG
</span>
<span className="avatar avatar-xl m-2 bg-success">
    XL
</span>
<span className="avatar avatar-xxl m-2 bg-info">
    XXL
</span>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Stacked Avatars
                                <p className="subtitle text-muted fs-12 fw-normal">
                                    Group of avatars stacked together.
                                </p>
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen8(!open8)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open8}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="avatar-list-stacked">
                                {Avatarstacked.map((idx) => (
                                    <span className="avatar" key={Math.random()}>
                                        <img src={idx.src} alt="img" />
                                    </span>
                                ))}
                                <Link className="avatar bg-primary text-fixed-white" to="#">
                                    +8
                                </Link>
                            </div>
                        </Card.Body>
                            <Collapse in={open8} className="card-body"><pre><code>{`
{Avatarstacked.map((idx)=>(
    <span className="avatar" key={Math.random()}>
        <img src={idx.src} alt="img"/>
    </span>
    ))}
<Link className="avatar bg-primary text-fixed-white" to="#">
+8
</Link>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Rounded Stacked Avatars
                                <p className="subtitle text-muted fs-12 fw-normal">
                                    Group of avatars stacked together.
                                </p>
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen9(!open9)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open9}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="avatar-list-stacked">
                                {Avatarstacked.map((idx) => (
                                    <span className="avatar avatar-rounded" key={Math.random()}>
                                        <img src={idx.src} alt="img" />
                                    </span>
                                ))}
                                <Link className="avatar bg-primary avatar-rounded text-fixed-white" to="#">
                                    +8
                                </Link>
                            </div>
                        </Card.Body>
                            <Collapse in={open9} className="card-body"><pre><code>{`
{Avatarstacked.map((idx)=>(
<span className="avatar avatar-rounded" key={Math.random()}>
<img src={idx.src} alt="img"/>
</span>
))}
<Link className="avatar bg-primary avatar-rounded text-fixed-white" to="#">
+8
</Link>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Avatars;
