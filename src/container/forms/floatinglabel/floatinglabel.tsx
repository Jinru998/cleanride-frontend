import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Collapse, FloatingLabel, Form, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';

interface FloatinglabelProps { }

const Floatinglabel: FC<FloatinglabelProps> = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    return (
        <Fragment>

            <Pageheader title="Floating labels" heading="Forms" active="Floating labels" />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Basic Examples
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <FloatingLabel
                                controlId="floatingInput"
                                label="Email address"
                                className="mb-3"
                            >
                                <Form.Control type="email" placeholder="name@example.com" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password">
                                <Form.Control type="password" placeholder="Password" />
                            </FloatingLabel>
                        </Card.Body>
                            <Collapse in={open1} className="card-body"><pre><code>{`
 <FloatingLabel
 controlId="floatingInput"
 label="Email address"
 className="mb-3">
 <Form.Control type="email" placeholder="name@example.com" />
</FloatingLabel>
<FloatingLabel controlId="floatingPassword" label="Password">
 <Form.Control type="password" placeholder="Password" />
</FloatingLabel>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Readonly plain text
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen2(!open2)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Floating className="mb-3">
                                <Form.Control type="email" readOnly
                                    className="form-control-plaintext"
                                    id="floatingEmptyPlaintextInput" placeholder="name@example.com" />
                                <Form.Label htmlFor="floatingEmptyPlaintextInput">Empty input</Form.Label>
                            </Form.Floating>
                            <Form.Floating className="">
                                <Form.Control type="email" readOnly
                                    className="form-control-plaintext"
                                    id="floatingPlaintextInput" placeholder="name@example.com"
                                    defaultValue="name@example.com" />
                                <Form.Label htmlFor="floatingPlaintextInput">Input with value</Form.Label>
                            </Form.Floating>
                        </Card.Body>
                            <Collapse in={open2} className="card-body"><pre><code>{`
 <Form.Floating className="mb-3">
 <Form.Control type="email" readOnly
 className="form-control-plaintext"
     id="floatingEmptyPlaintextInput" placeholder="name@example.com"/>
 <Form.Label htmlFor="floatingEmptyPlaintextInput">Empty input</Form.Label>
</Form.Floating>
<Form.Floating className="">
 <Form.Control type="email"  readOnly
  className="form-control-plaintext"
     id="floatingPlaintextInput" placeholder="name@example.com"
     defaultValue="name@example.com"/>
 <Form.Label htmlFor="floatingPlaintextInput">Input with value</Form.Label>
</Form.Floating>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Floating Labels With Pre Defined Values
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen3(!open3)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Floating className="my-3">
                                <Form.Control type="email" className="" id="floatingInputValue"
                                    placeholder="name@example.com" defaultValue="test@example.com" />
                                <Form.Label htmlFor="floatingInputValue">Input with value</Form.Label>
                            </Form.Floating>
                            <div className="form-flotin">
                                <Form.Control type="email" className="is-invalid"
                                    id="floatingInputInvalid" placeholder="name@example.com"
                                    defaultValue="test@example.com" />
                                <Form.Label htmlFor="floatingInputInvalid">Invalid input</Form.Label>
                            </div>
                        </Card.Body>
                            <Collapse in={open3} className="card-body"><pre><code>{`<Form.Floating className="my-3">
<Form.Control type="email" className="form-control" id="floatingInputValue"
    placeholder="name@example.com" defaultValue="test@example.com"/>
<Form.Label htmlFor="floatingInputValue">Input with value</Form.Label>
</Form.Floating>
<div className="form-flotin">
<Form.Control type="email" className="is-invalid"
    id="floatingInputInvalid" placeholder="name@example.com"
    defaultValue="test@example.com"/>
<Form.Label htmlFor="floatingInputInvalid">Invalid input</Form.Label>
</div>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Textareas
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen4(!open4)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Floating className=" mb-4">
                                <Form.Control as="textarea" className="" placeholder="Leave a comment here"
                                    id="floatingTextarea"></Form.Control>
                                <label htmlFor="floatingTextarea">Description</label>
                            </Form.Floating>
                            <Form.Floating className="">
                                <Form.Control as="textarea" className="form-control" placeholder="Leave a comment here"
                                    id="floatingTextarea2" rows={1} disabled></Form.Control>
                                <Form.Label htmlFor="floatingTextarea2">Disabled</Form.Label>
                            </Form.Floating>
                        </Card.Body>
                            <Collapse in={open4} className="card-body"><pre><code>{`
 <FloatingLabel
 controlId="floatingInput"
 label="Email address"
 className="mb-3">
 <Form.Control type="email" placeholder="name@example.com" />
</FloatingLabel>
<FloatingLabel controlId="floatingPassword" label="Password">
 <Form.Control type="password" placeholder="Password" />
</FloatingLabel>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <Card.Title>
                                Floating Labels In Select
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen5(!open5)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </div>
                        <Card.Body>
                            <FloatingLabel controlId="floatingSelect" label="Works with selects">
                                <Form.Select aria-label="Floating label select example">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Card.Body>
                            <Collapse in={open5} className="card-body"><pre><code>{`
  <FloatingLabel controlId="floatingSelect" label="Works with selects">
  <Form.Select aria-label="Floating label select example">
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
  </Form.Select>
  </FloatingLabel>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Floating Labels With Layouts
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen6(!open6)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="row g-2">
                                <div className="col-md">
                                    <Form.Floating className="">
                                        <Form.Control type="email" className="form-control" id="floatingInputGrid"
                                            placeholder="name@example.com" defaultValue="mdo@example.com" />
                                        <Form.Label htmlFor="floatingInputGrid">Email address</Form.Label>
                                    </Form.Floating>
                                </div>
                                <div className="col-md">
                                    <FloatingLabel controlId="floatingSelect" label="Works with selects">
                                        <Form.Select aria-label="Floating label select example" className='form-select'>
                                            <option>Open this select menu</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>
                                    </FloatingLabel>
                                </div>
                            </div>
                        </Card.Body>
                        <Collapse in={open6} className="card-body"><pre><code>{`
  <div className="row g-2">
  <div className="col-md">
      <Form.Floating className="">
          <Form.Control type="email" className="form-control" id="floatingInputGrid"
              placeholder="name@example.com" defaultValue="mdo@example.com"/>
          <Form.Label htmlFor="floatingInputGrid">Email address</Form.Label>
      </Form.Floating>
  </div>
  <div className="col-md">
  <FloatingLabel controlId="floatingSelect" label="Works with selects">
      <Form.Select aria-label="Floating label select example" className='form-select'>
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
      </Form.Select>
      </FloatingLabel>
  </div>
</div>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title className="card-titlte">
                                Floating Label Colors
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen7(!open7)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row className="gy-4">
                                <Col xl={4} className="">
                                    <Form.Floating className="mb-4 floating-primary">
                                        <Form.Control type="email" className="form-control" id="floatingInputprimary" placeholder="name@example.com" />
                                        <Form.Label htmlFor="floatingInputprimary">primary</Form.Label>
                                    </Form.Floating>
                                </Col>
                                <Col xl={4} className="">
                                    <Form.Floating className="mb-4 floating-secondary">
                                        <Form.Control type="email" className="form-control" id="floatingInputsecondary" placeholder="name@example.com" />
                                        <Form.Label htmlFor="floatingInputsecondary">secondary</Form.Label>
                                    </Form.Floating>
                                </Col>
                                <Col xl={4} className="">
                                    <Form.Floating className="mb-4 floating-warning">
                                        <Form.Control type="email" className="form-control" id="floatingInputwarning" placeholder="name@example.com" />
                                        <Form.Label htmlFor="floatingInputwarning">warning</Form.Label>
                                    </Form.Floating>
                                </Col>
                                <Col xl={4} className="">
                                    <Form.Floating className="mb-4 floating-info">
                                        <Form.Control type="email" className="form-control" id="floatingInputinfo" placeholder="name@example.com" />
                                        <Form.Label htmlFor="floatingInputinfo">info</Form.Label>
                                    </Form.Floating>
                                </Col>
                                <Col xl={4} className="">
                                    <Form.Floating className="mb-4 floating-success">
                                        <Form.Control type="email" className="form-control" id="floatingInputsuccess" placeholder="name@example.com" />
                                        <Form.Label htmlFor="floatingInputsuccess">success</Form.Label>
                                    </Form.Floating>
                                </Col>
                                <Col xl={4} className="">
                                    <Form.Floating className="mb-4 floating-danger">
                                        <Form.Control type="email" className="form-control" id="floatingInputdanger" placeholder="name@example.com" />
                                        <Form.Label htmlFor="floatingInputdanger">danger</Form.Label>
                                    </Form.Floating>
                                </Col>
                            </Row>
                        </Card.Body>
                            <Collapse in={open7} className="card-body"><pre><code>{`
 <Row className="gy-4">
 <Col xl={4} className="">
     <Form.Floating className="mb-4 floating-primary">
         <Form.Control type="email" className="" id="floatingInputprimary" placeholder="name@example.com"/>
         <Form.Label htmlFor="floatingInputprimary">primary</Form.Label>
     </Form.Floating>
 </Col>
 <Col xl={4} className="">
     <Form.Floating className="mb-4 floating-secondary">
         <Form.Control type="email" className="" id="floatingInputsecondary" placeholder="name@example.com"/>
         <Form.Label htmlFor="floatingInputsecondary">secondary</Form.Label>
     </Form.Floating>
 </Col>
 <Col xl={4} className="">
     <Form.Floating className="mb-4 floating-warning">
         <Form.Control type="email" className="" id="floatingInputwarning" placeholder="name@example.com"/>
         <Form.Label htmlFor="floatingInputwarning">warning</Form.Label>
     </Form.Floating>
 </Col>
 <Col xl={4} className="">
     <Form.Floating className="mb-4 floating-info">
         <Form.Control type="email" className="" id="floatingInputinfo" placeholder="name@example.com"/>
         <Form.Label htmlFor="floatingInputinfo">info</Form.Label>
     </Form.Floating>
 </Col>
 <Col xl={4} className="">
     <Form.Floating className="mb-4 floating-success">
         <Form.Control type="email" className="" id="floatingInputsuccess" placeholder="name@example.com"/>
         <Form.Label htmlFor="floatingInputsuccess">success</Form.Label>
     </Form.Floating>
 </Col>
 <Col xl={4} className="">
     <Form.Floating className="mb-4 floating-danger">
         <Form.Control type="email" className="" id="floatingInputdanger" placeholder="name@example.com"/>
         <Form.Label htmlFor="floatingInputdanger">danger</Form.Label>
     </Form.Floating>
 </Col>
</Row>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Floatinglabel;
