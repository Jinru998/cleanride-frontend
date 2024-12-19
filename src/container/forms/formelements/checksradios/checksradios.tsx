import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Collapse, Form, Row } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import { Checkdata1 } from './radiosdata';

interface ChecksradiosProps { }

const Checksradios: FC<ChecksradiosProps> = () => {
    const [secondary1, setsecondary1] = useState("on");
    const [success1, setsuccess1] = useState("on");
    const [dark1, setdark1] = useState("on");
    const [primary1, setprimary1] = useState("on");
    const [warning1, setwarning1] = useState("on");
    const [info1, setinfo1] = useState("on");
    const [danger1, setdanger1] = useState("on");
    const [light1, setlight1] = useState("on");

    //sizes 
    const [primary2, setprimary2] = useState("on");
    const [secondary2, setsecondary2] = useState("on");
    const [success2, setsuccess2] = useState("on");
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

            <Pageheader title="Checks & Radios" heading="Form Elements" active="Checks & Radios" />

            <Row>
                <Col xl={3} lg={6} md={6} sm={12} >
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Checks
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Check label="Default checkbox" />
                            <Form.Check defaultChecked label="Checked checkbox" />
                        </Card.Body>
                            <Collapse in={open1} className="card-body"><pre><code>{`
 <Form.Check  label="Default checkbox"/>
 <Form.Check defaultChecked     
  label="Checked checkbox"/>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={3} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Disabled
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen2(!open2)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Check disabled label="Disabled checkbox" />
                            <Form.Check disabled defaultChecked label="Disabled checked checkbox" />
                        </Card.Body>
                            <Collapse in={open2} className="card-body"><pre><code>{`
 <Form.Check disabled  label="Disabled checkbox"/>
 <Form.Check disabled defaultChecked
  label="Disabled checked checkbox"/>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={3} lg={6} md={6} sm={12} >
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Radios
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen3(!open3)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Check type="radio" label="Default radio" name="example-radios" />
                            <Form.Check type="radio" defaultChecked label="Default checked radio" name="example-radios" />
                        </Card.Body>
                            <Collapse in={open3} className="card-body"><pre><code>{`
<Form.Check type="radio"  label="Default radio"/>
<Form.Check type="radio" defaultChecked  
label="Default checked radio"/>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={3} lg={6} md={6} sm={12} >
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Disabled
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen4(!open4)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Check type="radio" disabled label="Default radio" />
                            <Form.Check type="radio" disabled defaultChecked label="Default checked radio" />
                        </Card.Body>
                            <Collapse in={open4} className="card-body"><pre><code>{`
<Form.Check type="radio" disabled  label="Default radio"/>
<Form.Check type="radio" disabled defaultChecked 
 label="Default checked radio"/>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Default (stacked)
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen5(!open5)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Check label="Default checkbox" />
                            <Form.Check disabled label="Default checkbox" />
                            <Form.Check type="radio" label="Default checkbox" />
                            <Form.Check type="radio" disabled label="Default checkbox" />
                        </Card.Body>
                            <Collapse in={open5} className="card-body"><pre><code>{`
<Form.Check  label="Default checkbox"/>
<Form.Check disabled  label="Default checkbox"/>
<Form.Check type="radio"  label="Default checkbox"/>
<Form.Check type="radio" disabled  label="Default checkbox"/>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Switches
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen6(!open6)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Check type="switch" label="Default switch checkbox input" />
                            <Form.Check type="switch" defaultChecked label="Default switch checkbox input" />
                            <Form.Check type="switch" disabled label="Default switch checkbox input" />
                            <Form.Check type="switch" disabled defaultChecked label="Default switch checkbox input" />
                        </Card.Body>
                            <Collapse in={open6} className="card-body"><pre><code>{`
<Form.Check type="switch"  label="Default switch checkbox input"/>
<Form.Check type="switch" defaultChecked  label="Default switch checkbox input"/>
<Form.Check type="switch" disabled  label="Default switch checkbox input"/>
<Form.Check type="switch" disabled defaultChecked  label="Default switch checkbox input"/>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={4} xl={12} lg={12} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Checkbox Sizes
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen7(!open7)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="d-sm-flex align-items-center justify-content-between">
                            <Form.Check type="checkbox" defaultChecked label="Default" />
                            <Form.Check className="form-check-md d-flex align-items-center"
                                type="checkbox" defaultChecked id="checkebox-md" label="Medium" />
                            <Form.Check className="form-check-lg d-flex align-items-center"
                                type="checkbox" defaultChecked id="checkebox-lg" label="Large" />
                        </Card.Body>
                            <Collapse in={open7} className="card-body"><pre><code>{`
<Form.Check type="checkbox" defaultChecked  label="Default"/>
<Form.Check className="form-check-md d-flex align-items-center"
 type="checkbox" defaultChecked id="checkebox-md"  label="Medium"/>
<Form.Check className="form-check-lg d-flex align-items-center" 
type="checkbox" defaultChecked id="checkebox-lg"  label="Large"/>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xxl={4} xl={12} lg={12} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Radio Sizes
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen8(!open8)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open8}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="card-body d-sm-flex align-items-center justify-content-between">
                            <Form.Check type="radio" label="Default" name="example-radios" />
                            <Form.Check type="radio" className="form-check-md" id="Radio-md" name="example-radios" label="Medium" />
                            <Form.Check type="radio" className="form-check-lg" name="example-radios"
                                defaultChecked id="Radio-lg" label="Large" />
                        </Card.Body>
                            <Collapse in={open8} className="card-body"><pre><code>{`
 <Form.Check type="radio" label="Default"/>
 <Form.Check type="radio" className="form-check-md" id="Radio-md"  label="Medium"/>
 <Form.Check type="radio" className="form-check-lg" 
  defaultChecked id="Radio-lg"  label="Large"/>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xxl={4} xl={12} lg={12} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Switch Sizes
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen9(!open9)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open9}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className=" d-sm-flex align-item-center justify-content-between">
                            <Form.Check type="switch" label="Default" />
                            <Form.Check type="switch" className="form-check-md form-switch" id="switch-md" label="Medium" />
                            <Form.Check type="switch" className="form-check-lg form-switch"
                                defaultChecked id="switch-lg" label="Large" />
                        </Card.Body>
                            <Collapse in={open9} className="card-body"><pre><code>{`
 <Form.Check type="switch" label="Default"/>
 <Form.Check type="switch" className="form-check-md form-switch" id="switch-md"  label="Medium"/>
 <Form.Check type="switch" className="form-check-lg form-switch" 
  defaultChecked id="switch-lg"  label="Large"/>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6} lg={12} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Inline
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen10(!open10)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open10}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Check className="form-check-inline" type="checkbox" label="1" />
                            <Form.Check className="form-check-inline" type="checkbox" label="2" />
                            <Form.Check className="form-check-inline" disabled type="checkbox" label="3 (disabled)" />
                            <Form.Check className="form-check-inline" type="radio" label="1" />
                            <Form.Check className="form-check-inline" type="radio" label="2" />
                            <Form.Check className="form-check-inline" disabled type="radio" label="3 (disabled)" />
                        </Card.Body>
                            <Collapse in={open10} className="card-body"><pre><code>{`
 <Form.Check className="form-check-inline" type="checkbox" label="1"/>
 <Form.Check className="form-check-inline" type="checkbox" label="2"/>
 <Form.Check className="form-check-inline" disabled type="checkbox"
  label="3 (disabled)"/>
 <Form.Check className="form-check-inline" type="radio" label="1"/>
 <Form.Check className="form-check-inline" type="radio" label="2"/>
 <Form.Check className="form-check-inline" disabled type="radio"
  label="3 (disabled)"/>`}</code></pre></Collapse>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Without labels
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen11(!open11)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open11}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="d-flex">
                                <Form.Check className="me-4" type="checkbox" />
                                <Form.Check className="" type="radio" />
                        </Card.Body>
                            <Collapse in={open11} className="card-body"><pre><code>{`
<span className="me-3">
<Form.Check className="" type="checkbox" /></span>
<span><Form.Check className="" type="radio" /></span>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={3} lg={12} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Reverse
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen12(!open12)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open12}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Check className="form-check-reverse mb-3" type="checkbox" label="Reverse checkbox" />
                            <Form.Check className="form-check-reverse mb-3" type="checkbox" disabled label="Disabled reverse checkbox" />
                            <Form.Check className="form-check-reverse mb-3" type="switch" label="Reverse switch checkbox input" />
                        </Card.Body>
                            <Collapse in={open12} className="card-body"><pre><code>{`
 <Form.Check 
 className="form-check-reverse mb-3"
  type="checkbox" 
  label="Reverse checkbox" />
 <Form.Check 
 className="form-check-reverse mb-3" 
 type="checkbox" disabled 
 label="Disabled reverse checkbox" />
 <Form.Check 
 className="form-check-reverse mb-3" 
 type="switch" 
 label="Reverse switch checkbox input" />`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={3} lg={12} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Outlined styles
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen13(!open13)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open13}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Control type="checkbox" className="btn-check" id="btn-check-outlined" />
                            <Button variant='outline-primary' className="mb-3">Single toggle</Button><br />
                            <Form.Check type="checkbox" className="btn-check" id="btn-check-2-outlined" defaultChecked />
                            <Button variant='outline-secondary' className=" mb-3">Checked</Button><br />
                            <Form.Check type="radio" className="btn-check" name="options-outlined" id="success-outlined"
                                defaultChecked />
                            <Button variant='outline-success' className="m-1">Checked success
                                radio</Button>
                            <Form.Check type="radio" className="btn-check" name="options-outlined" id="danger-outlined"
                            />
                            <Button variant='outline-danger' className="m-1" >Danger radio</Button>
                        </Card.Body>
                            <Collapse in={open13} className="card-body"><pre><code>{`
<Form.Control type="checkbox" 
className="btn-check"id="btn-check-outlined"/>
<Button variant='outline-primary' 
className="mb-3">Single toggle</Button><br/>
<Form.Check type="checkbox"
className="btn-check" id="btn-check-2-outlined" defaultChecked />
<Button variant='outline-secondary' 
className=" mb-3">Checked</Button><br/>
<Form.Check type="radio" className="btn-check" 
name="options-outlined" id="success-outlined"
 defaultChecked/>
<Button variant='outline-success' 
className="m-1">Checked success
radio</Button>
<Form.Check type="radio" className="btn-check"
 name="options-outlined" id="danger-outlined"
/>
<Button variant='outline-danger'className="m-1"
 >Danger radio</Button>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={6} lg={12} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Radio toggle buttons
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen14(!open14)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open14}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Check type="radio" className="btn-check" name="options" id="option1" defaultChecked />
                            <Button className="btn btn-primary m-1">Checked</Button>
                            <Form.Check type="radio" className="btn-check" name="options" id="option2" />
                            <Button className="btn btn-primary m-1">Radio</Button>
                            <Form.Check type="radio" className="btn-check" name="options" id="option3" disabled />
                            <Button disabled className="btn btn-primary m-1">Disabled</Button>
                            <Form.Check type="radio" className="btn-check" name="options" id="option4" />
                            <Button className="btn btn-primary m-1">Radio</Button>
                        </Card.Body>
                            <Collapse in={open14} className="card-body"><pre><code>{`
<Form.Check type="radio" className="btn-check" name="options"
 id="option1" defaultChecked/>
<Button className="btn btn-primary m-1">Checked</Button>
<Form.Check type="radio" className="btn-check" name="options" 
id="option2" />
<Button className="btn btn-primary m-1">Radio</Button>
<Form.Check type="radio" className="btn-check" name="options" 
id="option3" disabled/>
<Button disabled className="btn btn-primary m-1">Disabled</Button>
<Form.Check type="radio" className="btn-check" name="options" 
id="option4"/>
<Button className="btn btn-primary m-1">Radio</Button>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6} lg={12} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Checkbox toggle buttons
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen15(!open15)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open15}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Check type="checkbox" className="btn-check" id="btn-check" />
                            <Button className="btn btn-primary m-1">Single toggle</Button>
                            <Form.Check type="checkbox" className="btn-check" id="btn-check-2" defaultChecked />
                            <Button className="btn btn-primary m-1">Checked</Button>
                            <Form.Check type="checkbox" className="btn-check" id="btn-check-3" disabled />
                            <Button disabled className="btn btn-primary m-1">Disabled</Button>
                        </Card.Body>
                            <Collapse in={open15} className="card-body"><pre><code>{`
<Form.Check type="checkbox" className="btn-check" id="btn-check"/>
<Button className="btn btn-primary m-1">Single toggle</Button>
<Form.Check type="checkbox" className="btn-check" id="btn-check-2" defaultChecked />
<Button className="btn btn-primary m-1">Checked</Button>
<Form.Check type="checkbox" className="btn-check" id="btn-check-3"disabled/>
<Button disabled className="btn btn-primary m-1">Disabled</Button>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row className="row row-cols-12">
                <Col>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Colored Checkboxes
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen16(!open16)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open16}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {Checkdata1.map((idx) => (
                                <div className={`form-check ${idx.class1}`} key={Math.random()}>
                                    <input id={idx.id} className={`form-check-input form-checked-${idx.class2}`}
                                        type="checkbox" defaultChecked />
                                    <label className=''>{idx.text}</label>
                                </div>
                            ))}
                        </Card.Body>
                            <Collapse in={open16} className="card-body"><pre><code>{`
 <div className="form-check mb-2">
 <input type="checkbox" value=""  className="form-check-input form-checked"
   id="primaryChecked" defaultChecked/>
   <label className="form-check-label" htmlFor="primaryChecked">
       Primary
   </label>
</div>
<div className="form-check mb-2">
<input type="checkbox" value="" 
className="form-check-input form-checked-secondary"
id="primaryChecked" defaultChecked/>
<label className="form-check-label" htmlFor="primaryChecked">
    Secondary
</label>
</div>
<div className="form-check mb-2">
<input type="checkbox" value="" 
className="form-check-input form-checked-warning"
id="primaryChecked" defaultChecked/>
<label className="form-check-label" htmlFor="primaryChecked">
    Warning
</label>
</div>
<div className="form-check mb-2">
<input type="checkbox" value="" 
className="form-check-input form-checked-info"
id="primaryChecked" defaultChecked/>
<label className="form-check-label" htmlFor="primaryChecked">
    info
</label>
</div>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <Col>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Outline Checkboxes
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen17(!open17)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open17}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {Checkdata1.map((idx) => (
                                <div className={`form-check ${idx.class1}`} key={Math.random()}>
                                    <input id={idx.id} className={`form-check-input form-checked-outline form-checked-${idx.class2}`}
                                        type="checkbox" defaultChecked />
                                    <label className=''>{idx.text}</label>
                                </div>
                            ))}
                        </Card.Body>
                            <Collapse in={open17} className="card-body"><pre><code>{`
<div className="form-check mb-2">
<input type="checkbox" className="form-check-input form-checked-outline"
  id="primaryChecked" defaultChecked/>
  <label className="form-check-label" htmlFor="primaryChecked">
      Primary
  </label>
</div>
<div className="form-check mb-2">
<input type="checkbox" value="" 
className="form-check-input form-checked-outline-secondary"
id="primaryChecked" defaultChecked/>
<label className="form-check-label" htmlFor="primaryChecked">
   Secondary
</label>
</div>
<div className="form-check mb-2">
<input type="checkbox" value="" 
className="form-check-input form-checked-outline-warning"
id="primaryChecked" defaultChecked/>
<label className="form-check-label" htmlFor="primaryChecked">
   Warning
</label>
</div>
<div className="form-check mb-2">
<input type="checkbox" value="" 
className="form-check-input form-checked-info"
id="primaryChecked" defaultChecked/>
<label className="form-check-label" htmlFor="primaryChecked">
   info
</label>
</div>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Colored Radios
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen18(!open18)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open18}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {Checkdata1.map((idx) => (
                                <div className={`form-check ${idx.class1}`} key={Math.random()}>
                                    <input id={idx.id} className={`form-check-input form-checked form-checked-${idx.class2}`}
                                        type="radio" defaultChecked />
                                    <label className=''>{idx.text}</label>
                                </div>
                            ))}
                        </Card.Body>
                            <Collapse in={open18} className="card-body"><pre><code>{`
 <div className="form-check mb-2">
 <input type="radio" className="form-check-input form-checked"
   id="primaryChecked" defaultChecked/>
   <label className="form-check-label" htmlFor="primaryChecked">
       Primary
   </label>
</div>
<div className="form-check mb-2">
<input type="radio" value="" 
className="form-check-input form-checked-secondary"
id="primaryChecked" defaultChecked/>
<label className="form-check-label" htmlFor="primaryChecked">
    Secondary
</label>
</div>
<div className="form-check mb-2">
<input type="radio" value="" 
className="form-check-input form-checked-warning"
id="primaryChecked" defaultChecked/>
<label className="form-check-label" htmlFor="primaryChecked">
    Warning
</label>
</div>
<div className="form-check mb-2">
<input type="radio" value="" 
className="form-check-input form-checked-info"
id="primaryChecked" defaultChecked/>
<label className="form-check-label" htmlFor="primaryChecked">
    info
</label>
</div>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Outline Radios
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen19(!open19)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open19}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {Checkdata1.map((idx) => (
                                <div className={`form-check ${idx.class1}`} key={Math.random()}>
                                    <input id={idx.id} className={`form-check-input form-checked-outline form-checked-${idx.class2}`}
                                        type="radio" defaultChecked />
                                    <label className=''>{idx.text}</label>
                                </div>
                            ))}
                        </Card.Body>
                            <Collapse in={open19} className="card-body"><pre><code>{`
 <div className="form-check mb-2">
 <input type="radio" className="form-check-input form-checked-outline form-checked"
   id="primaryChecked" defaultChecked/>
   <label className="form-check-label" htmlFor="primaryChecked">
       Primary
   </label>
</div>
<div className="form-check mb-2">
<input type="radio" 
className="form-check-input form-checked-outline form-checked-secondary"
id="primaryChecked" defaultChecked/>
<label className="form-check-label" htmlFor="primaryChecked">
    Secondary
</label>
</div>
<div className="form-check mb-2">
<input type="radio" 
className="form-check-input form-checked-outline form-checked-warning"
id="primaryChecked" defaultChecked/>
<label className="form-check-label" htmlFor="primaryChecked">
    Warning
</label>
</div>
<div className="form-check mb-2">
<input type="radio" 
className="form-check-input form-checked-outline form-checked-info"
id="primaryChecked" defaultChecked/>
<label className="form-check-label" htmlFor="primaryChecked">
    info
</label>
</div>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <Col>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Switches Colors
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen20(!open20)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open20}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {Checkdata1.map((idx) => (
                                <div className={`form-check form-switch ${idx.class1}`} key={Math.random()}>
                                    <input id={idx.id} className={`form-check-input form-checked-${idx.class2}`}
                                        type="checkbox" defaultChecked />
                                    <label className=''>{idx.text}</label>
                                </div>
                            ))}
                        </Card.Body>
                            <Collapse in={open20} className="card-body"><pre><code>{`
 <div className="form-check form-switch mb-2">
 <input type="radio" className="form-check-input  form-checked"
   id="primaryChecked"  role="switch"defaultChecked/>
   <label className="form-check-label" htmlFor="primaryChecked">
       Primary
   </label>
</div>
<div className="form-check form-switch mb-2">
<input type="radio" 
className="form-check-input  form-checked-secondary"
id="secondaryChecked"  role="switch"defaultChecked/>
<label className="form-check-label" htmlFor="primaryChecked">
    Secondary
</label>
</div>
<div className="form-check form-switch mb-2">
<input type="radio" 
className="form-check-input  form-checked-warning"
id="warningChecked"  role="switch"defaultChecked/>
<label className="form-check-label" htmlFor="primaryChecked">
    Warning
</label>
</div>
<div className="form-check form-switch mb-2">
<input type="radio" 
className="form-check-input  form-checked-info"
id="infoChecked"  role="switch"defaultChecked/>
<label className="form-check-label" htmlFor="primaryChecked">
    info
</label>
</div>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Toggle Switches Style-1
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen21(!open21)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open21}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row className="row gy-1">

                                <Col xl={4}>
                                    <div className={`toggle  ${primary1}`} onClick={() => { primary1 == "on" ? setprimary1("off") : setprimary1("on"); }}>
                                        <span></span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className={`toggle mb-3  toggle-secondary ${secondary1}`} onClick={() => { secondary1 == "on" ? setsecondary1("off") : setsecondary1("on"); }}>
                                        <span></span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className={`toggle mb-3  toggle-warning ${warning1}`} onClick={() => { warning1 == "on" ? setwarning1("off") : setwarning1("on"); }} >
                                        <span></span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className={`toggle mb-3  toggle-info ${info1}`} onClick={() => { info1 == "on" ? setinfo1("off") : setinfo1("on"); }} >
                                        <span></span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className={`toggle mb-3  toggle-success ${success1}`} onClick={() => { success1 == "on" ? setsuccess1("off") : setsuccess1("on"); }} >
                                        <span></span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className={`toggle mb-3  toggle-danger ${danger1}`} onClick={() => { danger1 == "on" ? setdanger1("off") : setdanger1("on"); }} >
                                        <span></span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className={`toggle mb-3  toggle-light ${light1}`} onClick={() => { light1 == "on" ? setlight1("off") : setlight1("on"); }} >
                                        <span></span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className={`toggle ms-sm-2  toggle-dark ${dark1}`} onClick={() => { dark1 == "on" ? setdark1("off") : setdark1("on"); }}>
                                        <span></span>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                            <Collapse in={open21} className="card-body"><pre><code>{`export default function BasicModal () {   
    const [secondary1, setsecondary1] = useState("on");
    const [success1, setsuccess1] = useState("on");
    const [dark1, setdark1] = useState("on");
    const [primary1, setprimary1] = useState("on");
    const [warning1, setwarning1] = useState("on");
    const [info1, setinfo1] = useState("on");
    const [danger1, setdanger1] = useState("on");
    const [light1, setlight1] = useState("on");
**Note: "Here In place of dolor we have given the dolor value."
return(
    <Row className="row gy-1">

    <Col xl={4}>
       <div className={toggle  00024{primary1}} onClick={() => { primary1 == "on" ? setprimary1("off") : setprimary1("on"); }}>
        <span></span>
        </div>
    </Col>
    <Col xl={4}>
    <div className={toggle mb-3  toggle-secondary 00024{secondary1}} onClick={() => { secondary1 == "on" ? setsecondary1("off") : setsecondary1("on"); }}>
        <span></span>
        </div>
    </Col>
    <Col xl={4}>
    <div className={toggle mb-3  toggle-warning 00024{warning1}} onClick={() => { warning1 == "on" ? setwarning1("off") : setwarning1("on"); }} >
        <span></span>
        </div>
    </Col>
</Row>
)}`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Toggle Switches Style-2
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen22(!open22)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open22}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-1">
                                <Col xl={4}>
                                    <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                        <Form.Control id="toggleswitchPrimary" name="toggleswitch001" type="checkbox" defaultChecked />
                                        <Form.Label htmlFor="toggleswitchPrimary" className="label-primary"></Form.Label><span className="ms-3">Primary</span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                        <Form.Control id="toggleswitchSecondary" name="toggleswitch001" type="checkbox" defaultChecked />
                                        <Form.Label htmlFor="toggleswitchSecondary" className="label-secondary"></Form.Label><span className="ms-3">Secondary</span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                        <Form.Control id="toggleswitchWarning" name="toggleswitch001" type="checkbox" defaultChecked />
                                        <Form.Label htmlFor="toggleswitchWarning" className="label-warning"></Form.Label><span className="ms-3">Warning</span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                        <Form.Control id="toggleswitchInfo" name="toggleswitch001" type="checkbox" defaultChecked />
                                        <Form.Label htmlFor="toggleswitchInfo" className="label-info"></Form.Label><span className="ms-3">Info</span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                        <Form.Control id="toggleswitchSuccess" name="toggleswitch001" type="checkbox" defaultChecked />
                                        <Form.Label htmlFor="toggleswitchSuccess" className="label-success"></Form.Label><span className="ms-3">Success</span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                        <Form.Control id="toggleswitchDanger" name="toggleswitch001" type="checkbox" defaultChecked />
                                        <Form.Label htmlFor="toggleswitchDanger" className="label-danger"></Form.Label><span className="ms-3">Danger</span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                        <Form.Control id="toggleswitchLight" name="toggleswitch001" type="checkbox" defaultChecked />
                                        <Form.Label htmlFor="toggleswitchLight" className="label-light"></Form.Label><span className="ms-3">Light</span>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="custom-toggle-switch d-flex align-items-center mb-4">
                                        <Form.Control id="toggleswitchDark" name="toggleswitch001" type="checkbox" defaultChecked />
                                        <Form.Label htmlFor="toggleswitchDark" className="label-dark"></Form.Label><span className="ms-3">Dark</span>
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                            <Collapse in={open22} className="card-body"><pre><code>{`
 <div className="form-check form-switch mb-2">
 <input type="radio" className="form-check-input  form-checked"
   id="primaryChecked"  role="switch"defaultChecked/>
   <label className="form-check-label" htmlFor="primaryChecked">
       Primary
   </label>
</div>
<div className="form-check form-switch mb-2">
<input type="radio" 
className="form-check-input  form-checked-secondary"
id="secondaryChecked"  role="switch"defaultChecked/>
<label className="form-check-label" htmlFor="primaryChecked">
    Secondary
</label>
</div>
<div className="form-check form-switch mb-2">
<input type="radio" 
className="form-check-input  form-checked-warning"
id="warningChecked"  role="switch"defaultChecked/>
<label className="form-check-label" htmlFor="primaryChecked">
    Warning
</label>
</div>
<div className="form-check form-switch mb-2">
<input type="radio" 
className="form-check-input  form-checked-info"
id="infoChecked"  role="switch"defaultChecked/>
<label className="form-check-label" htmlFor="primaryChecked">
    info
</label>
</div>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6} lg={12} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Toggle Switch-1 Sizes
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen23(!open23)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open23}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center flex-wrap mb-3">
                                <div className=""> <p className="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>

                                <div className={`toggle  toggle-sm mb-0 ${primary2}`} onClick={() => { primary2 == "on" ? setprimary2("off") : setprimary2("on"); }}>
                                    <span></span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center flex-wrap mb-3">
                                <div className=""> <p className="text-muted m-0">Default toggle switch <code></code></p></div>

                                <div className={`toggle mb-0  toggle-secondary ${secondary2}`} onClick={() => { secondary2 == "on" ? setsecondary2("off") : setsecondary2("on"); }}>
                                    <span></span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center flex-wrap">
                                <div className=""> <p className="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>

                                <div className={`toggle toggle-lg mb-0  toggle-success ${success2}`} onClick={() => { success2 == "on" ? setsuccess2("off") : setsuccess2("on"); }} >
                                    <span></span>
                                </div>
                            </div>
                        </Card.Body>
                            <Collapse in={open23} className="card-body"><pre><code>{`
 <div className="d-flex align-items-center flex-wrap mb-3">
 <div className=""> <p className="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>
 <div className="toggle toggle-sm on mb-0">
     <span></span>
 </div>
</div>
<div className="d-flex align-items-center flex-wrap mb-3">
 <div className=""> <p className="text-muted m-0">Default toggle switch <code></code></p></div>
 <div className="toggle toggle-secondary on mb-0">
     <span></span>
 </div>
</div>
<div className="d-flex align-items-center flex-wrap">
 <div className=""> <p className="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>
 <div className="toggle toggle-lg toggle-success on mb-0">
     <span></span>
 </div>
</div>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6} lg={12} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Toggle Switch-2 Sizes
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen24(!open24)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open24}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex align-items-center flex-wrap mb-4">
                                <div className=""><p className="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>
                                <div className="custom-toggle-switch toggle-sm ms-2">
                                    <Form.Control id="size-sm" name="toggleswitchsize" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="size-sm" className="label-primary"></Form.Label>
                                </div>
                            </div>
                            <div className="d-flex align-items-center flex-wrap mb-4">
                                <div className=""><p className="text-muted m-0">Default toggle switch</p></div>
                                <div className="custom-toggle-switch ms-2">
                                    <Form.Control id="size-default" name="toggleswitchsize" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="size-default" className="label-secondary mb-1"></Form.Label>
                                </div>
                            </div>
                            <div className="d-sm-flex d-block align-items-center flex-wrap">
                                <div className="mb-sm-0 mb-2"><p className="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>
                                <div className="custom-toggle-switch toggle-lg ms-sm-2 ms-0">
                                    <Form.Control id="size-lg" name="toggleswitchsize" type="checkbox" defaultChecked />
                                    <Form.Label htmlFor="size-lg" className="label-success mb-2"></Form.Label>
                                </div>
                            </div>
                        </Card.Body>
                            <Collapse in={open24} className="card-body"><pre><code>{`
<div className="d-flex align-items-center flex-wrap mb-4">
<div className=""><p className="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>
<div className="custom-toggle-switch toggle-sm ms-2">
    <Form.Control id="size-sm" name="toggleswitchsize" type="checkbox" defaultChecked/>
    <Form.Label htmlFor="size-sm" className="label-primary"></Form.Label>
</div>
</div>
<div className="d-flex align-items-center flex-wrap mb-4">
<div className=""><p className="text-muted m-0">Default toggle switch</p></div>
<div className="custom-toggle-switch ms-2">
    <Form.Control id="size-default" name="toggleswitchsize" type="checkbox" defaultChecked/>
    <Form.Label htmlFor="size-default" className="label-secondary mb-1"></Form.Label>
</div>
</div>
<div className="d-sm-flex d-block align-items-center flex-wrap">
<div className="mb-sm-0 mb-2"><p className="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>
<div className="custom-toggle-switch toggle-lg ms-sm-2 ms-0">
    <Form.Control id="size-lg" name="toggleswitchsize" type="checkbox" defaultChecked/>
    <Form.Label htmlFor="size-lg" className="label-success mb-2"></Form.Label>
</div>
</div>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Checksradios;
