import  { FC, Fragment, useState } from 'react';
import { Button, ButtonGroup, ButtonToolbar, Card, Col, Collapse, Dropdown, DropdownButton, Form, InputGroup, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { SocialIconButtons } from '../buttons/buttonsdata';

interface ButtongroupProps { }

const Buttongroup: FC<ButtongroupProps> = () => {
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

    return (
        <Fragment>
            <Pageheader title="Buttongroup" heading="Ui Elements" active="Buttongroup" />
            <Row>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Basic example
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen1(!open1)} aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ButtonGroup className="btn-group" role="group" aria-label="Basic example">
                                <Button variant="info" type="button" className="btn btn-wave"><i className="bi bi-skip-backward"></i></Button>
                                <Button variant="info" type="button" className="btn btn-wave"><i className="bi bi-pause"></i></Button>
                                <Button variant="info" type="button" className="btn btn-wave"><i className="bi bi-skip-forward"></i></Button>
                            </ButtonGroup>
                        </Card.Body>
                            <Collapse in={open1} className="card-body"><pre>
                                <code>{`<ButtonGroup className="btn-group" role="group" aria-label="Basic example">
<Button variant="info" type="button" className="btn btn-wave"><i className="bi bi-skip-backward"></i></Button>
<Button variant="info" type="button" className="btn btn-wave"><i className="bi bi-pause"></i></Button>
<Button variant="info" type="button" className="btn btn-wave"><i className="bi bi-skip-forward"></i></Button>
  </ButtonGroup>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Navigation
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant="primary-light" className="btn btn-sm" onClick={() => setOpen2(!open2)} aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ButtonGroup className="btn-group">
                                <Button variant='primary' active href="#" className="btn  active btn-wave" aria-current="page">Active
                                    link</Button>
                                <Button variant='primary' href="#" className="btn">Link</Button>
                                <Button variant='primary' href="#" className="btn ">Link</Button>
                            </ButtonGroup>
                        </Card.Body>
                            <Collapse in={open2} className="card-body"><pre>
                                <code>{` <ButtonGroup className="btn-group">
 <Button variant='primary' active href="#" className="btn  active btn-wave" aria-current="page">Active link</Button>
 <Button variant='primary' href="#" className="btn">Link</Button>
 <Button variant='primary' href="#" className="btn ">Link</Button>
</ButtonGroup>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <div className="col-xl-3">
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Mixed style
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant="primary-light" className="btn btn-sm" onClick={() => setOpen3(!open3)} aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ButtonGroup className="btn-group" role="group" aria-label="Basic mixed styles example">
                                <Button variant="danger" type="button" className="btn btn-wave">Left</Button>
                                <Button variant="warning" type="button" className="btn btn-wave">Middle</Button>
                                <Button variant="success" type="button" className="btn btn-wave">Right</Button>
                            </ButtonGroup>
                        </Card.Body>
                            <Collapse in={open3} className="card-body"><pre>
                                <code>{`<ButtonGroup className="btn-group" role="group" aria-label="Basic mixed styles example">
 <Button variant="danger" type="button" className="btn btn-wave">Left</Button>
 <Button variant="warning" type="button" className="btn btn-wave">Middle</Button>
 <Button variant="success" type="button" className="btn btn-wave">Right</Button>
 </ButtonGroup>`}</code></pre>
                            </Collapse>
                    </Card>
                </div>
                <div className="col-xl-3">
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Outline styled
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant="primary-light" className="btn btn-sm" onClick={() => setOpen4(!open4)} aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ButtonGroup className="btn-group" role="group" aria-label="Basic outlined example">
                                <Button variant="outline-primary" type="button" className="btn btn-wave">Left</Button>
                                <Button variant="outline-primary" type="button" className="btn btn-wave">Middle</Button>
                                <Button variant="outline-primary" type="button" className="btn btn-wave">Right</Button>
                            </ButtonGroup>
                        </Card.Body>
                            <Collapse in={open4} className="card-body"><pre>
                                <code>{`<ButtonGroup className="btn-group" role="group" aria-label="Basic outlined example">
<Button variant="outline-primary" type="button" className="btn btn-wave">Left</Button>
<Button variant="outline-primary" type="button" className="btn btn-wave">Middle</Button>
<Button variant="outline-primary" type="button" className="btn btn-wave">Right</Button>
</ButtonGroup>`}</code></pre>
                            </Collapse>
                    </Card>
                </div>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Checkbox button groups
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant="primary-light" className="btn btn-sm" onClick={() => setOpen5(!open5)} aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="checkbox-button-group">
                            <ButtonGroup className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                <input type="checkbox" className="btn-check" id="btncheck1" />
                                <label className="btn btn-outline-primary" htmlFor="btncheck1">Checkbox 1</label>

                                <input type="checkbox" className="btn-check" id="btncheck2" />
                                <label className="btn btn-outline-primary" htmlFor="btncheck2">Checkbox 2</label>

                                <input type="checkbox" className="btn-check" id="btncheck3" />
                                <label className="btn btn-outline-primary" htmlFor="btncheck3">Checkbox 3</label>
                            </ButtonGroup>
                        </Card.Body>
                            <Collapse in={open5} className="card-body"><pre>
                                <code>{`  <ButtonGroup className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
 <input type="checkbox" className="btn-check" id="btncheck1"/>
 <label className="btn btn-outline-primary" htmlFor="btncheck1">Checkbox 1</label>

 <input type="checkbox" className="btn-check" id="btncheck2"/>
 <label className="btn btn-outline-primary" htmlFor="btncheck2">Checkbox 2</label>

 <input type="checkbox" className="btn-check" id="btncheck3"/>
 <label className="btn btn-outline-primary" htmlFor="btncheck3">Checkbox 3</label>
 </ButtonGroup>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Radio button groups
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant="primary-light" className="btn btn-sm" onClick={() => setOpen6(!open6)} aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Header className="card-body radio-button-group">
                            <ButtonGroup className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                <input type="radio" className="btn-check" name="btnradio" id="btnradio1"
                                    defaultChecked />
                                <label className="btn btn-outline-primary" htmlFor="btnradio1">Radio 1</label>

                                <input type="radio" className="btn-check" name="btnradio" id="btnradio2"
                                />
                                <label className="btn btn-outline-primary" htmlFor="btnradio2">Radio 2</label>

                                <input type="radio" className="btn-check" name="btnradio" id="btnradio3"
                                />
                                <label className="btn btn-outline-primary" htmlFor="btnradio3">Radio 3</label>
                            </ButtonGroup>
                        </Card.Header>
                            <Collapse in={open6} className="card-body"><pre>
                                <code>{`  <ButtonGroup className="btn-group" role="group" aria-label="Basic radio toggle button group">
<input type="radio" className="btn-check" name="btnradio" id="btnradio1"
    defaultChecked/>
<label className="btn btn-outline-primary" htmlFor="btnradio1">Radio 1</label>

<input type="radio" className="btn-check" name="btnradio" id="btnradio2"
   />
<label className="btn btn-outline-primary" htmlFor="btnradio2">Radio 2</label>

<input type="radio" className="btn-check" name="btnradio" id="btnradio3"
   />
<label className="btn btn-outline-primary" htmlFor="btnradio3">Radio 3</label>
   </ButtonGroup>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="card-header justify-content-between">
                                    <Card.Title>
                                        Sizing
                                    </Card.Title>
                                    <div className="prism-toggle">
                                        <Button className="btn btn-sm" onClick={() => setOpen7(!open7)} aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <ButtonGroup className="btn-group btn-group-lg my-1 me-1" role="group" aria-label="Large button group">
                                        <Button variant="outline-success" type="button" className="btn">Left</Button>
                                        <Button variant="outline-success" type="button" className="btn">Middle</Button>
                                        <Button variant="outline-success" type="button" className="btn">Right</Button>
                                    </ButtonGroup>
                                    <ButtonGroup className="btn-group my-1 me-1" role="group" aria-label="Default button group">
                                        <Button variant="outline-success" type="button" className="btn">Left</Button>
                                        <Button variant="outline-success" type="button" className="btn">Middle</Button>
                                        <Button variant="outline-success" type="button" className="btn">Right</Button>
                                    </ButtonGroup>
                                    <ButtonGroup className="btn-group btn-group-sm my-1 me-1" role="group" aria-label="Small button group">
                                        <Button variant="outline-success" type="button" className="btn">Left</Button>
                                        <Button variant="outline-success" type="button" className="btn">Middle</Button>
                                        <Button variant="outline-success" type="button" className="btn">Right</Button>
                                    </ButtonGroup>
                                </Card.Body>
                                    <Collapse in={open7} className="card-body"><pre>
                                        <code>{`<ButtonGroup className="btn-group btn-group-lg my-1" role="group" aria-label="Large button group">
<Button variant="outline-success" type="button" className="btn">Left</Button>
<Button variant="outline-success" type="button" className="btn">Middle</Button>
<Button variant="outline-success" type="button" className="btn">Right</Button>
</ButtonGroup>
<ButtonGroup className="btn-group my-1" role="group" aria-label="Default button group">
<Button variant="outline-success" type="button" className="btn">Left</Button>
<Button variant="outline-success" type="button" className="btn">Middle</Button>
<Button variant="outline-success" type="button" className="btn">Right</Button>
</ButtonGroup>
<ButtonGroup className="btn-group btn-group-sm my-1" role="group" aria-label="Small button group">
<Button variant="outline-success" type="button" className="btn">Left</Button>
<Button variant="outline-success" type="button" className="btn">Middle</Button>
<Button variant="outline-success" type="button" className="btn">Right</Button>
</ButtonGroup>`}</code></pre>
                                    </Collapse> 
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="card-header justify-content-between">
                                    <Card.Title>
                                        Button toolbar
                                    </Card.Title>
                                    <div className="prism-toggle">
                                        <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen8(!open8)} aria-controls="example-collapse-text" aria-expanded={open8}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <ButtonToolbar className="mb-4" role="toolbar"
                                        aria-label="Toolbar with button groups">
                                        <ButtonGroup className="btn-group me-2 my-1" role="group" aria-label="First group">
                                            <Button variant="primary" type="button" className="btn">1</Button>
                                            <Button variant="primary" type="button" className="btn">2</Button>
                                            <Button variant="primary" type="button" className="btn">3</Button>
                                            <Button variant="primary" type="button" className="btn">4</Button>
                                        </ButtonGroup>
                                        <ButtonGroup className="btn-group me-2 my-1" role="group" aria-label="Second group">
                                            <Button variant="secondary" type="button" className="btn">5</Button>
                                            <Button variant="secondary" type="button" className="btn">6</Button>
                                            <Button variant="secondary" type="button" className="btn">7</Button>
                                        </ButtonGroup>
                                        <ButtonGroup className="btn-group my-1" role="group" aria-label="Third group">
                                            <Button variant="info" type="button" className="btn btn-info">8</Button>
                                        </ButtonGroup>
                                    </ButtonToolbar>
                                    <ButtonToolbar className="mb-3" role="toolbar"
                                        aria-label="Toolbar with button groups">
                                        <ButtonGroup className="btn-group me-2 my-1" role="group" aria-label="First group">
                                            <Button variant="outline-secondary" type="button" className="btn">1</Button>
                                            <Button variant="outline-secondary" type="button" className="btn">2</Button>
                                            <Button variant="outline-secondary" type="button" className="btn">3</Button>
                                            <Button variant="outline-secondary" type="button" className="btn">4</Button>
                                        </ButtonGroup>
                                        <InputGroup>
                                            <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
                                            <Form.Control type="text"
                                                placeholder="Input group example"
                                                aria-label="Input group example"
                                                aria-describedby="btnGroupAddon" />
                                        </InputGroup>
                                    </ButtonToolbar>
                                    <ButtonToolbar className="justify-content-between" role="toolbar"
                                        aria-label="Toolbar with button groups">
                                        <ButtonGroup className="btn-group my-1" role="group" aria-label="First group">
                                            <Button variant="outline-secondary" type="button" className="btn">1</Button>
                                            <Button variant="outline-secondary" type="button" className="btn">2</Button>
                                            <Button variant="outline-secondary" type="button" className="btn">3</Button>
                                            <Button variant="outline-secondary" type="button" className="btn">4</Button>
                                        </ButtonGroup>
                                        <InputGroup>
                                            <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
                                            <Form.Control type="text"
                                                placeholder="Input group example"
                                                aria-label="Input group example"
                                                aria-describedby="btnGroupAddon2" />
                                        </InputGroup>
                                    </ButtonToolbar>
                                </Card.Body>
                                    <Collapse in={open8} className="card-body"><pre>
                                        <code>{`<ButtonToolbar className="mb-4" role="toolbar"
 aria-label="Toolbar with button groups">
 <ButtonGroup className="btn-group me-2 my-1" role="group" aria-label="First group">
     <Button variant="primary" type="button" className="btn">1</Button>
     <Button variant="primary" type="button" className="btn">2</Button>
     <Button variant="primary" type="button" className="btn">3</Button>
     <Button variant="primary" type="button" className="btn">4</Button>
 </ButtonGroup>
 <ButtonGroup className="btn-group me-2 my-1" role="group" aria-label="Second group">
     <Button variant="secondary" type="button" className="btn">5</Button>
     <Button variant="secondary" type="button" className="btn">6</Button>
     <Button variant="secondary" type="button" className="btn">7</Button>
 </ButtonGroup>
 <ButtonGroup className="btn-group my-1" role="group" aria-label="Third group">
     <Button variant="info" type="button" className="btn btn-info">8</Button>
 </ButtonGroup>
</ButtonToolbar>
<ButtonToolbar className="mb-3" role="toolbar"
 aria-label="Toolbar with button groups">
 <ButtonGroup className="btn-group me-2 my-1" role="group" aria-label="First group">
     <Button variant="outline-secondary" type="button" className="btn">1</Button>
     <Button variant="outline-secondary" type="button" className="btn">2</Button>
     <Button variant="outline-secondary" type="button" className="btn">3</Button>
     <Button variant="outline-secondary" type="button" className="btn">4</Button>
 </ButtonGroup>
 <InputGroup>
     <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
     <Form.Control type="text"
         placeholder="Input group example"
         aria-label="Input group example"
         aria-describedby="btnGroupAddon"/>
 </InputGroup>
</ButtonToolbar>
<ButtonToolbar className="justify-content-between" role="toolbar"
 aria-label="Toolbar with button groups">
 <ButtonGroup className="btn-group my-1" role="group" aria-label="First group">
     <Button variant="outline-secondary" type="button" className="btn">1</Button>
     <Button variant="outline-secondary" type="button" className="btn">2</Button>
     <Button variant="outline-secondary" type="button" className="btn">3</Button>
     <Button variant="outline-secondary" type="button" className="btn">4</Button>
 </ButtonGroup>
 <InputGroup>
     <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
     <Form.Control type="text"
         placeholder="Input group example"
         aria-label="Input group example"
         aria-describedby="btnGroupAddon2"/>
 </InputGroup>
</ButtonToolbar>`}</code></pre>
                                    </Collapse>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="card-header justify-content-between">
                                    <Card.Title>
                                        Nesting
                                    </Card.Title>
                                    <div className="prism-toggle">
                                        <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen9(!open9)} aria-controls="example-collapse-text" aria-expanded={open9}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <ButtonGroup className="btn-group" role="group"
                                        aria-label="Button group with nested dropdown">
                                        <Button variant="" type="button" className="btn btn-primary">1</Button>
                                        <Button variant="" type="button" className="btn btn-primary">2</Button>

                                        <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                                            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                        </DropdownButton>
                                    </ButtonGroup>
                                </Card.Body>
                                    <Collapse in={open9} className="card-body"><pre>
                                        <code>{`<ButtonGroup className="btn-group" role="group"
aria-label="Button group with nested dropdown">
<Button variant="" type="button" className="btn btn-primary">1</Button>
<Button variant="" type="button" className="btn btn-primary">2</Button>

<DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
   </DropdownButton>
</ButtonGroup>`}</code></pre>
                                    </Collapse>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="card-header justify-content-between">
                                    <Card.Title>
                                        Vertical variation
                                    </Card.Title>
                                    <div className="prism-toggle">
                                        <Button className="btn btn-sm" onClick={() => setOpen10(!open10)} aria-controls="example-collapse-text" aria-expanded={open10}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <div className="row gap-2">
                                        <Col sm={3}>
                                            <ButtonGroup vertical role="group" aria-label="Vertical button group">
                                                <Button variant="primary" type="button" className="btn ">Button</Button>
                                                <Button variant="primary" type="button" className="btn ">Button</Button>
                                                <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                                                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                                </DropdownButton>
                                                <Button variant="primary" type="button" className="btn ">Button</Button>
                                                <Button variant="primary" type="button" className="btn ">Button</Button>
                                                <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                                                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                                </DropdownButton>
                                                <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                                                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                                </DropdownButton>
                                                <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
                                                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                                                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                                                </DropdownButton>
                                            </ButtonGroup>
                                        </Col>
                                        <Col sm={3}>
                                            <ButtonGroup vertical role="group" aria-label="Vertical button group">
                                                <Button variant="" type="button" className="btn btn-info">Button</Button>
                                                <Button variant="" type="button" className="btn btn-info">Button</Button>
                                                <Button variant="" type="button" className="btn btn-info">Button</Button>
                                                <Button variant="" type="button" className="btn btn-info">Button</Button>
                                                <Button variant="" type="button" className="btn btn-info">Button</Button>
                                                <Button variant="" type="button" className="btn btn-info">Button</Button>
                                            </ButtonGroup>
                                        </Col>
                                        <Col sm={3}>
                                            <ButtonGroup vertical role="group"
                                                aria-label="Vertical radio toggle button group">
                                                <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1"
                                                    defaultChecked />
                                                <label className="btn btn-outline-danger" htmlFor="vbtn-radio1">Radio 1</label>
                                                <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2"
                                                />
                                                <label className="btn btn-outline-danger" htmlFor="vbtn-radio2">Radio 2</label>
                                                <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio3"
                                                />
                                                <label className="btn btn-outline-danger" htmlFor="vbtn-radio3">Radio 3</label>
                                            </ButtonGroup>
                                        </Col>
                                    </div>
                                </Card.Body> 
                                <Collapse in={open10} className="card-body"><pre>
                                    <code>{`<Col sm={3}>
<ButtonGroup vertical role="group" aria-label="Vertical button group">
    <Button variant="primary" type="button" className="btn ">Button</Button>
    <Button variant="primary" type="button" className="btn ">Button</Button>
    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
    </DropdownButton>
    <Button variant="primary" type="button" className="btn ">Button</Button>
    <Button variant="primary" type="button" className="btn ">Button</Button>
    <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
         <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
         <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
         </DropdownButton>
      <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
         <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
         <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
         </DropdownButton>
      <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-1">
         <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
         <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
         </DropdownButton>
</ButtonGroup>
</Col>
<Col sm={3}>
 <ButtonGroup vertical role="group" aria-label="Vertical button group">
     <Button variant="" type="button" className="btn btn-info">Button</Button>
     <Button variant="" type="button" className="btn btn-info">Button</Button>
     <Button variant="" type="button" className="btn btn-info">Button</Button>
     <Button variant="" type="button" className="btn btn-info">Button</Button>
     <Button variant="" type="button" className="btn btn-info">Button</Button>
     <Button variant="" type="button" className="btn btn-info">Button</Button>
 </ButtonGroup>
</Col>
<Col sm={3}>
 <ButtonGroup vertical role="group"
     aria-label="Vertical radio toggle button group">
     <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1"
         defaultChecked/>
     <Button variant='outline-danger' className="btn btn-outline-danger" htmlFor="vbtn-radio1">Radio 1</Button>
     <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2"
        />
     <Button variant='outline-danger' className="btn btn-outline-danger" htmlFor="vbtn-radio2">Radio 2</Button>
     <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio3"
        />
     <Button variant='outline-danger' className="btn btn-outline-danger" htmlFor="vbtn-radio3">Radio 3</Button>
 </ButtonGroup>
 </Col>`}</code></pre>
                                </Collapse>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header className="card-header justify-content-between">
                                    <Card.Title>Social Group Buttons</Card.Title>
                                    <div className="prism-toggle">
                                        <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen11(!open11)} aria-controls="example-collapse-text" aria-expanded={open11}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                                    </div>
                                </Card.Header>
                                <Card.Body>
                                    <ButtonGroup className="btn-group" role="group" aria-label="Basic example">
                                        {SocialIconButtons.map((idx) => (
                                            <Button variant={idx.class} className="btn btn-icon btn-wave" key={Math.random()}>
                                                <i className={`ri-${idx.class}-line`}></i>
                                            </Button>
                                        ))}
                                    </ButtonGroup>
                                </Card.Body>
                                    <Collapse in={open11} className="card-body"><pre>
                                        <code>{`<ButtonGroup className="btn-group" role="group" aria-label="Basic example"> 
 <Button variant="" className="btn btn-icon btn-facebook btn-wave">
 <i className="ri-facebook-line"></i>
</Button>
 <Button variant="" className="btn btn-icon btn-twitter btn-wave">
     <i className="ri-twitter-line"></i>
 </Button>
 <Button variant="" className="btn btn-icon btn-instagram btn-wave">
     <i className="ri-instagram-line"></i>
 </Button>
 <Button variant="" className="btn btn-icon btn-github btn-wave">
     <i className="ri-github-line"></i>
 </Button>
 <Button variant="" className="btn btn-icon btn-youtube btn-wave">
     <i className="ri-youtube-line"></i>
 </Button>
 <Button variant="" className="btn btn-icon btn-google btn-wave">
     <i className="ri-google-line"></i>
 </Button>
    </ButtonGroup>`}</code></pre>
                                    </Collapse>

                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Buttongroup;
