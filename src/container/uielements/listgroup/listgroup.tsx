import { FC, Fragment, useState } from 'react';
import { Badge, Button, Card, Col, Collapse, ListGroup, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { ActiveButtons, BasicButtons, ContextualButtons, CustomButtons, HorizontalButtons, LinksButtons, ListbadgesButtons, SubheadingsButtons } from './listgroupdata';

interface ListgroupProps { }

const Listgroup: FC<ListgroupProps> = () => {
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
    return (
        <Fragment>
            <Pageheader title="Listgroup" heading="Ui Elements" active="Listgroup" />
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Basic List
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen1(!open1)} aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup as="ul">
                                {BasicButtons.map((idx) => (
                                    <ListGroup.Item as="li" key={Math.random()}>
                                        <div className="d-flex align-items-center">
                                            <span className="avatar avatar-sm">
                                                <img src={idx.src} alt="img" />
                                            </span>
                                            <div className="ms-2 fw-semibold">
                                                {idx.text}
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                            <Collapse in={open1} className="card-body"><pre>
                                <code>{`{BasicButtons.map((idx)=>(
<ListGroup.Item as="li" key={Math.random()}>
    <div className="d-flex align-items-center">
        <span className="avatar avatar-sm">
            <img src={idx.src} alt="img"/>
        </span>
        <div className="ms-2 fw-semibold">
            {idx.text}
        </div>
    </div>
</ListGroup.Item>
))}`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Active items
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen2(!open2)} aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup as="ul">
                                {ActiveButtons.map((idx) => (
                                    <ListGroup.Item as="li" className={`list-group-item ${idx.class1}`} aria-current="true" key={Math.random()}>
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <span className="fs-15">
                                                    <i className={`bi bi-${idx.class}`}></i>
                                                </span>
                                            </div>
                                            <div className="ms-2">
                                                {idx.text}
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                            <Collapse in={open2} className="card-body"><pre>
                                <code>{`
                  <ListGroup as="ul"><ListGroup.Item as="li">
 <div className="d-flex align-items-center">
     <div>
         <span className="fs-15">
             <i className="bi bi-bell"></i>
         </span>
     </div>
     <div className="ms-2">
         Notifications
     </div>
 </div>
</ListGroup.Item>
</ListGroup>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Disabled items
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen3(!open3)} aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup as="ul">
                                <ListGroup.Item as="li" className="list-group-item disabled" aria-disabled="true">A disabled item meant to be disabled
                                </ListGroup.Item>
                                <ListGroup.Item as="li">Simply dummy text of the printing</ListGroup.Item>
                                <ListGroup.Item as="li">There are many variations of passages</ListGroup.Item>
                                <ListGroup.Item as="li">All the Lorem Ipsum generators</ListGroup.Item>
                                <ListGroup.Item as="li">Written in 45 BC. This book is a treatise on the theory</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                            <Collapse in={open3} className="card-body"><pre>
                            <code>{`<ListGroup as="ul">
<ListGroup.Item as="li"className="list-group-item disabled" aria-disabled="true">A disabled item meant to be disabled
</ListGroup.Item>
<ListGroup.Item as="li">Simply dummy text of the printing</ListGroup.Item>
<ListGroup.Item as="li">There are many variations of passages</ListGroup.Item>
<ListGroup.Item as="li">All the Lorem Ipsum generators</ListGroup.Item>
<ListGroup.Item as="li">Written in 45 BC. This book is a treatise on the theory</ListGroup.Item>
 </ListGroup>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Flush
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen4(!open4)} aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup variant='flush' className="">
                                <ListGroup.Item className="list-group-item fw-semibold"><i className="bi bi-envelope align-middle me-2 text-muted"></i>Asish Trivedhi<span className="ms-1 text-muted fw-normal d-inline-block">(+1023-84534)</span></ListGroup.Item>
                                <ListGroup.Item className="list-group-item fw-semibold"><i className="bi bi-tiktok align-middle me-2 text-muted"></i>Alezander Russo<span className="ms-1 text-muted fw-normal d-inline-block">(+7546-12342)</span></ListGroup.Item>
                                <ListGroup.Item className="list-group-item fw-semibold"><i className="bi bi-whatsapp align-middle me-2 text-muted"></i>Karem Smith<span className="ms-1 text-muted fw-normal d-inline-block">(+9944-56632)</span></ListGroup.Item>
                                <ListGroup.Item className="list-group-item fw-semibold"><i className="bi bi-facebook align-middle me-2 text-muted"></i>Melissa Brien<span className="ms-1 text-muted fw-normal d-inline-block">(+1023-34323)</span></ListGroup.Item>
                                <ListGroup.Item className="list-group-item fw-semibold"><i className="bi bi-instagram align-middle me-2 text-muted"></i>Kamala Harris<span className="ms-1 text-muted fw-normal d-inline-block">(+91-63421)</span></ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                            <Collapse in={open4} className="card-body"><pre>
                            <code>{`<ListGroup variant='flush' className="">
 <ListGroup.Item className="list-group-item fw-semibold"><i className="bi bi-envelope align-middle me-2 text-muted"></i>Asish Trivedhi<span className="ms-1 text-muted fw-normal d-inline-block">(+1023-84534)</span></ListGroup.Item>
 <ListGroup.Item className="list-group-item fw-semibold"><i className="bi bi-tiktok align-middle me-2 text-muted"></i>Alezander Russo<span className="ms-1 text-muted fw-normal d-inline-block">(+7546-12342)</span></ListGroup.Item>
 <ListGroup.Item className="list-group-item fw-semibold"><i className="bi bi-whatsapp align-middle me-2 text-muted"></i>Karem Smith<span className="ms-1 text-muted fw-normal d-inline-block">(+9944-56632)</span></ListGroup.Item>
 <ListGroup.Item className="list-group-item fw-semibold"><i className="bi bi-facebook align-middle me-2 text-muted"></i>Melissa Brien<span className="ms-1 text-muted fw-normal d-inline-block">(+1023-34323)</span></ListGroup.Item>
 <ListGroup.Item className="list-group-item fw-semibold"><i className="bi bi-instagram align-middle me-2 text-muted"></i>Kamala Harris<span className="ms-1 text-muted fw-normal d-inline-block">(+91-63421)</span></ListGroup.Item>
</ListGroup>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Links
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen5(!open5)} aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup className="list-group">
                                {LinksButtons.map((idx) => (
                                    <ListGroup.Item  action className={`list-group-item list-group-item-action ${idx.class1}`} key={Math.random()}
                                        aria-current="true">
                                        <div className="d-flex align-items-center">
                                            <div>
                                                <span className={`avatar avatar-xs bg-${idx.class} text-${idx.color} avatar-rounded`}>
                                                    {idx.text1}
                                                </span>
                                            </div>
                                            <div className="ms-2">{idx.text}</div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                            <Collapse in={open5} className="card-body"><pre>
                            <code>{`<ListGroup>
 <Link to="#" className="list-group-item list-group-item-action">
 <div className="d-flex align-items-center">
     <div>
         <span className="avatar avatar-xs bg-secondary avatar-rounded">
             N
         </span>
     </div>
     <div className="ms-2">New Jersey</div>
 </div>
</Link>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                buttons
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen6(!open6)} aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup className="list-group">
                                <ListGroup.Item type="button" className="list-group-item list-group-item-action active" aria-current="true">Simply dummy text of the printing<span className="badge float-end bg-primary">243</span></ListGroup.Item>
                                <ListGroup.Item type="button" className="list-group-item list-group-item-action">There are many variations of passages<span className="badge float-end bg-secondary-transparent">35</span></ListGroup.Item>
                                <ListGroup.Item type="button" className="list-group-item list-group-item-action">All the Lorem Ipsum generators<span className="badge float-end bg-info-transparent">132</span></ListGroup.Item>
                                <ListGroup.Item type="button" className="list-group-item list-group-item-action">All the Lorem Ipsum generators<span className="badge float-end bg-success-transparent">2525</span></ListGroup.Item>
                                <ListGroup.Item type="button" className="list-group-item list-group-item-action" disabled>A disabled item meant to be disabled<span className="badge float-end bg-danger-transparent">21</span></ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                            <Collapse in={open6} className="card-body"><pre>
                            <code>{`<ListGroup className="list-group">
<ListGroup.Item type="button" className="list-group-item list-group-item-action active" aria-current="true">Simply dummy text of the printing<span className="badge float-end bg-primary">243</span></ListGroup.Item>
<ListGroup.Item type="button" className="list-group-item list-group-item-action">There are many variations of passages<span className="badge float-end bg-secondary-transparent">35</span></ListGroup.Item>
<ListGroup.Item type="button" className="list-group-item list-group-item-action">All the Lorem Ipsum generators<span className="badge float-end bg-info-transparent">132</span></ListGroup.Item>
<ListGroup.Item type="button" className="list-group-item list-group-item-action">All the Lorem Ipsum generators<span className="badge float-end bg-success-transparent">2525</span></ListGroup.Item>
<ListGroup.Item type="button" className="list-group-item list-group-item-action" disabled>A disabled item meant to be disabled<span className="badge float-end bg-danger-transparent">21</span></ListGroup.Item>
</ListGroup>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Contextual classes
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen7(!open7)} aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup as="ul">
                                {ContextualButtons.map((idx) => (
                                    <ListGroup.Item as="li" variant={idx.class} key={Math.random()}>{idx.text}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                            <Collapse in={open7} className="card-body"><pre>
                            <code>{` <ListGroup as="ul">
{ContextualButtons.map((idx)=>(
<ListGroup.Item as="li" variant={idx.class} key={Math.random()}>{idx.text}</ListGroup.Item>
))}</ListGroup>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Contextual classes with hover styles
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen8(!open8)} aria-controls="example-collapse-text" aria-expanded={open8}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup>
                                {ContextualButtons.map((idx) => (
                                    <ListGroup.Item variant={idx.class} href="#" action className="list-group-item list-group-item-action" key={Math.random()}>{idx.text}</ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                            <Collapse in={open8} className="card-body"><pre>
                            <code>{` <ListGroup as="ul">
{ContextualButtons.map((idx)=>(
    <ListGroup.Item variant={idx.class} href="#" action className="list-group-item list-group-item-action">{idx.text}</ListGroup.Item>
))}</ListGroup>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Solid Colored Lists
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen9(!open9)} aria-controls="example-collapse-text" aria-expanded={open9}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup as="ul">
                                {ContextualButtons.map((idx) => (
                                    <ListGroup.Item className={`list-group-item list-item-solid-${idx.class} ${idx.class1}`} as="li" key={Math.random()}>{idx.text}</ListGroup.Item>
                                ))}

                            </ListGroup>
                        </Card.Body>
                        <Collapse in={open9} className="card-body"><pre>
                            <code>{` <ListGroup as="ul">
<ListGroup.Item className="list-group-item list-item-solid-primary">A simple primary list
group
item</ListGroup.Item>
<ListGroup.Item className="list-group-item list-item-solid-secondary">A simple secondary
list
group item</ListGroup.Item>
<ListGroup.Item className="list-group-item list-item-solid-success">A simple success list
group
item</ListGroup.Item>
<ListGroup.Item className="list-group-item list-item-solid-danger">A simple danger list
group
item</ListGroup.Item>
<ListGroup.Item className="list-group-item list-item-solid-warning">A simple warning list
group
item</ListGroup.Item>
<ListGroup.Item className="list-group-item list-item-solid-info">A simple info list group
item
</ListGroup.Item>
<ListGroup.Item className="list-group-item list-item-solid-light">A simple light list group
item
</ListGroup.Item>
<ListGroup.Item className="list-group-item list-item-solid-dark text-white">A simple dark list group
item
</ListGroup.Item> </ListGroup>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Custom content
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen10(!open10)} aria-controls="example-collapse-text" aria-expanded={open10}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup className="list-group">
                                {CustomButtons.map((idx) => (
                                    <ListGroup.Item href="#" action className={`list-group-item list-group-item-action ${idx.class1}`} key={Math.random()}
                                        aria-current="true">
                                        <div className="d-flex w-100 justify-content-between">
                                            <h6 className="mb-1 fw-semibold">{idx.heading}</h6>
                                            <small className={idx.class2}>{idx.text1}</small>
                                        </div>
                                        <p className="mb-1">{idx.text2}</p>
                                        <small>{idx.text3}.</small>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                            <Collapse in={open10} className="card-body"><pre>
                            <code>{` <ListGroup as="ul">
 <ListGroup.Item  to="#" className="list-group-item list-group-item-action">
 <div className="d-flex w-100 justify-content-between">
     <h6 className="mb-1 fw-semibold">Richard McClintock, a Latin professor?</h6>
     <small className="text-muted">4 hrs ago</small>
 </div>
 <p className="mb-1">Contrary to popular belief, Lorem Ipsum is not simply random text.
  It has roots in a piece of classical Latin literature.</p>
 <small className="text-muted">30,Nov 2022.</small>
</ListGroup.Item> </ListGroup>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Sub headings
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen11(!open11)} aria-controls="example-collapse-text" aria-expanded={open11}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup as="ol" numbered>
                                {SubheadingsButtons.map((idx) => (
                                    <ListGroup.Item as="li" className="list-group-item d-flex justify-content-between align-items-start" key={Math.random()}>
                                        <div className="ms-2 me-auto text-muted">
                                            <div className="fw-semibold fs-14 text-default">{idx.text1}</div>
                                            {idx.text2}
                                        </div>
                                        <Badge bg={idx.class}>{idx.text3}</Badge>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                            <Collapse in={open11} className="card-body"><pre>
                            <code>{` <ListGroup as="ol" numbered>
 {SubheadingsButtons.map((idx)=>(
<ListGroup.Item as="li" className="list-group-item d-flex justify-content-between align-items-start" key={Math.random()}>
     <div className="ms-2 me-auto text-muted">
         <div className="fw-semibold fs-14 text-default">{idx.text1}</div>
         {idx.text2}
     </div>
     <Badge bg={idx.class}>{idx.text3}</Badge>
 </ListGroup.Item>
 ))}</ListGroup>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Numbered Lists
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen12(!open12)} aria-controls="example-collapse-text" aria-expanded={open12}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup as="ol" numbered>
                                <ListGroup.Item as="li">Simply dummy text of the printing.</ListGroup.Item>
                                <ListGroup.Item as="li">There are many variations of passages.</ListGroup.Item>
                                <ListGroup.Item as="li">All the Lorem Ipsum generators.</ListGroup.Item>
                                <ListGroup.Item as="li">Written in 45 BC. This book is a treatise on the theory.</ListGroup.Item>
                                <ListGroup.Item as="li">Randomised words which don't look.</ListGroup.Item>
                                <ListGroup.Item as="li">Always free from repetition, injected humour.</ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Collapse in={open12} className="card-body"><pre>
                            <code>{`<ListGroup as="ol" numbered>
<ListGroup.Item as="li">Simply dummy text of the printing.</ListGroup.Item>
<ListGroup.Item as="li">There are many variations of passages.</ListGroup.Item>
<ListGroup.Item as="li">All the Lorem Ipsum generators.</ListGroup.Item>
<ListGroup.Item as="li">Written in 45 BC. This book is a treatise on the theory.</ListGroup.Item>
<ListGroup.Item as="li">Randomised words which don't look.</ListGroup.Item>
<ListGroup.Item as="li">Always free from repetition, injected humour.</ListGroup.Item>
 </ListGroup>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                List With Checkboxes
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen13(!open13)} aria-controls="example-collapse-text" aria-expanded={open13}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup as="ul">
                                <ListGroup.Item as="li">
                                    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
                                        aria-label="..." defaultChecked />
                                    Accurate information at any given point.
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
                                        aria-label="..." />
                                    Hearing the information and responding.
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
                                        aria-label="..." defaultChecked />
                                    Setting up and customizing your own sales.
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
                                        aria-label="..." defaultChecked />
                                    New Admin Launched.
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
                                        aria-label="..." />
                                    To maximize profits and improve productivity.
                                </ListGroup.Item>
                                <ListGroup.Item as="li">
                                    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
                                        aria-label="..." />
                                    To have a complete 360° overview of sales information, having.
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                       <Collapse in={open13} className="card-body"><pre>
                            <code>{` <ListGroup as="ul">
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." defaultChecked/>
        Accurate information at any given point.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..."/>
        Hearing the information and responding.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." defaultChecked/>
        Setting up and customizing your own sales.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..." defaultChecked/>
        New Admin Launched.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..."/>
        To maximize profits and improve productivity.
</ListGroup.Item>
<ListGroup.Item as="li">
    <input className="form-check-input me-2 fw-semibold" type="checkbox" value=""
        aria-label="..."/>
        To have a complete 360° overview of sales information, having.
</ListGroup.Item>
</ListGroup>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                List With Radios
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen14(!open14)} aria-controls="example-collapse-text" aria-expanded={open14}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup className="list-group">
                                <ListGroup.Item className="list-group-item">
                                    <input className="form-check-input me-1" type="radio" value=""
                                        name="list-radio" defaultChecked />
                                    Accurate information at any given point.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item">
                                    <input className="form-check-input me-1" type="radio" value=""
                                        name="list-radio" defaultChecked />
                                    Hearing the information and responding.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item">
                                    <input className="form-check-input me-1" type="radio" value=""
                                        name="list-radio" defaultChecked />
                                    Setting up and customizing your own sales.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item">
                                    <input className="form-check-input me-1" type="radio" value=""
                                        name="list-radio" />
                                    New Admin Launched.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item">
                                    <input className="form-check-input me-1" type="radio" value=""
                                        name="list-radio" />
                                    To maximize profits and improve productivity.
                                </ListGroup.Item>
                                <ListGroup.Item className="list-group-item">
                                    <input className="form-check-input me-1" type="radio" value=""
                                        name="list-radio" />
                                    To have a complete 360° overview of sales information, having.
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                        <Collapse in={open14} className="card-body"><pre>
                            <code>{`  <ListGroup className="list-group">
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-1" type="radio" value=""
        name="list-radio" defaultChecked/>
        Accurate information at any given point.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-1" type="radio" value=""
        name="list-radio" defaultChecked/>
        Hearing the information and responding.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-1" type="radio" value=""
        name="list-radio" defaultChecked/>
        Setting up and customizing your own sales.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-1" type="radio" value=""
        name="list-radio"/>
        New Admin Launched.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-1" type="radio" value=""
        name="list-radio"/>
        To maximize profits and improve productivity.
</ListGroup.Item>
<ListGroup.Item className="list-group-item">
    <input className="form-check-input me-1" type="radio" value=""
        name="list-radio"/>
        To have a complete 360° overview of sales information, having.
</ListGroup.Item>
</ListGroup>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                List With badges
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen15(!open15)} aria-controls="example-collapse-text" aria-expanded={open15}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup as="ul">
                                {ListbadgesButtons.map((idx) => (
                                    <ListGroup.Item key={Math.random()}
                                        className="list-group-item d-flex justify-content-between align-items-center fw-semibold">
                                        {idx.text1}
                                        <Badge bg={idx.class} className={idx.color}>{idx.text2}</Badge>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                       <Collapse in={open15} className="card-body"><pre>
                            <code>{`{ListbadgesButtons.map((idx)=>(
<ListGroup.Item key={Math.random()}
    className="list-group-item d-flex justify-content-between align-items-center fw-semibold">
    {idx.text1}
    <Badge bg={idx.class} className={idx.color}>{idx.text2}</Badge>
</ListGroup.Item>
))}`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Horizontal
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen16(!open16)} aria-controls="example-collapse-text" aria-expanded={open16}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {HorizontalButtons.map((idx) => (
                                <ListGroup as="ul" className={`list-group-horizontal${idx.class} mb-3`} key={Math.random()}>
                                    <ListGroup.Item as="li">An item</ListGroup.Item>
                                    <ListGroup.Item as="li">A second item</ListGroup.Item>
                                    <ListGroup.Item as="li">A third item</ListGroup.Item>
                                </ListGroup>
                            ))}
                        </Card.Body>
                        <Collapse in={open16} className="card-body"><pre>
                            <code>{`<ListGroup as="ul" className="list-group list-group-horizontal-md">
<ListGroup.Item as="li">An item</ListGroup.Item>
<ListGroup.Item as="li">A second item</ListGroup.Item>
<ListGroup.Item as="li">A third item</ListGroup.Item>
</ListGroup>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Listgroup;
