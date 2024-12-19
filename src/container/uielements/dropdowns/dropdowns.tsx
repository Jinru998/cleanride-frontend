import { FC, Fragment, useState } from 'react';
import { Button, ButtonGroup, Card, Col, Collapse, Dropdown, DropdownButton, Form, Row, SplitButton } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { AlignmentButtons, AutocloseButtons, CustomButtons, GhostButtons, OutlineButtons, SingleButtons, SplitButtonsdata } from './dropdownsdata';

interface DropdownsProps { }

const Dropdowns: FC<DropdownsProps> = () => {
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
    const [open25, setOpen25] = useState(false);
    const [open26, setOpen26] = useState(false);
    const [open27, setOpen27] = useState(false);
    const [open28, setOpen28] = useState(false);
    const [open29, setOpen29] = useState(false);
    return (
        <Fragment>
            <Pageheader title="Dropdowns" heading="Ui Elements" active="Dropdowns" />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Dropdowns
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen1(!open1)} aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list d-flex align-items-center flex-wrap">
                                <Dropdown className="dropdown">
                                    <Dropdown.Toggle variant='' className="btn btn-primary dropdown-toggle" type="button"
                                        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown button
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Dropdown className="dropdown">
                                    <Dropdown.Toggle className="btn btn-secondary dropdown-toggle" href="#" role="button"
                                        id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown link
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Body>
                        <Collapse in={open1} className="card-body"><pre>
                            <code>{`<div className="btn-list d-flex align-items-center flex-wrap">
<Dropdown className="dropdown">
    <Dropdown.Toggle variant='' className="btn btn-primary dropdown-toggle" type="button"
        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown button
    </Dropdown.Toggle>
    <Dropdown.Menu as="ul" className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
        <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
        <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
<Dropdown className="dropdown">
    <Dropdown.Toggle className="btn btn-secondary dropdown-toggle" href="#" role="button"
        id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown link
    </Dropdown.Toggle>
    <Dropdown.Menu as="ul" className="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
        <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
        <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
</div>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Single dropdown buttons</Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen2(!open2)} aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {SingleButtons.map((idx) => (
                                    <div className="btn-group" key={Math.random()}>
                                        <Dropdown>
                                            <Dropdown.Toggle type="button" variant={idx.class} className="btn"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                Action
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu as="ul">
                                                <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
                                                <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                        <Collapse in={open2} className="card-body"><pre>
                            <code>{`{SingleButtons.map((idx)=>(
<div className="btn-group" key={Math.random()}>
    <Dropdown>
    <Dropdown.Toggle type="button" variant={idx.class} className="btn"
        data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </Dropdown.Toggle>
    <Dropdown.Menu as="ul">
        <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
        <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
        <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
        <li>
            <hr className="dropdown-divider"/>
        </li>
        <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
</div>
))}`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Rounded Button Dropdowns</Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen3(!open3)} aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {SingleButtons.map((idx) => (
                                    <div className="btn-group" key={Math.random()}>
                                        <Dropdown>
                                            <Dropdown.Toggle variant={idx.class} type="button" className="btn dropdown-toggle rounded-pill"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                Action
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu as="ul">
                                                <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
                                                <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                        <Collapse in={open3} className="card-body"><pre>
                            <code>{` {SingleButtons.map((idx)=>(
<div className="btn-group">
<Dropdown>
    <Dropdown.Toggle variant={idx.class} type="button" className="btn dropdown-toggle rounded-pill"
        data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </Dropdown.Toggle>
    <Dropdown.Menu as="ul">
        <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
        <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
        <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
        <li>
            <hr className="dropdown-divider"/>
        </li>
        <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
</div>
))}`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Outline Button Dropdowns</Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen4(!open4)} aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {OutlineButtons.map((idx) => (
                                    <div className="btn-group" key={Math.random()}>
                                        <Dropdown>
                                            <Dropdown.Toggle variant={idx.class} type="button" className="btn  dropdown-toggle"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                Action
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu as="ul">
                                                <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
                                                <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                        <Collapse in={open4} className="card-body"><pre>
                            <code>{`  {OutlineButtons.map((idx)=>(
<div className="btn-group" key={Math.random()}>
    <Dropdown.Toggle variant={idx.class} type="button" className="btn  dropdown-toggle"
        data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </Dropdown.Toggle>
    <Dropdown.Menu as="ul">
        <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
        <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
        <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
        <li>
            <hr className="dropdown-divider"/>
        </li>
        <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</div>
))}`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Rounded Outline Dropdowns</Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen5(!open5)} aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {OutlineButtons.map((idx) => (
                                    <div className="btn-group" key={Math.random()}>
                                        <Dropdown>
                                            <Dropdown.Toggle variant={idx.class} type="button" className="btn dropdown-toggle rounded-pill"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                Action
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu as="ul">
                                                <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
                                                <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
                                                <Dropdown.Divider className="dropdown-divider" />
                                                <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                        <Collapse in={open5} className="card-body"><pre>
                            <code>{`   {OutlineButtons.map((idx)=>(
<div className="btn-group" key={Math.random()}>
    <Button variant={idx.class} type="button" className="btn dropdown-toggle rounded-pill"
        data-bs-toggle="dropdown" aria-expanded="false">
        Action
    </Button>
    <Dropdown.Menu as="ul">
        <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
        <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
        <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
        <li>
            <hr className="dropdown-divider"/>
        </li>
        <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</div>
))}`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Split buttons</Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen6(!open6)} aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {SplitButtonsdata.map((idx) => (
                                    <SplitButton key={Math.random()} className='me-2'
                                        variant={idx.class}
                                        title="Action"
                                    >
                                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                                        <Dropdown.Item eventKey="3" active>
                                            Active Item
                                        </Dropdown.Item>
                                        <Dropdown.Divider />
                                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                                    </SplitButton>
                            ))}
                        </Card.Body>
                        <Collapse in={open6} className="card-body"><pre>
                            <code>{`{SplitButtons.map((idx)=>(
<div className="btn-group my-1" key={Math.random()}>
    <Button variant={idx.class} type="button" className="btn btn-primary">Action</Button>
    <Dropdown.Toggle variant={idx.class} type="button"
        className="btn btn-primary dropdown-toggle dropdown-toggle-split me-2"
        data-bs-toggle="dropdown" aria-expanded="false">
        <span className="visually-hidden">Toggle Dropdown</span>
    </Dropdown.Toggle>
    <Dropdown.Menu as="ul">
        <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
        <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
        <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
        <li>
            <hr className="dropdown-divider"/>
        </li>
        <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</div>
))}`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Dropdown Sizing
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen7(!open7)} aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-group my-1 me-2">
                                <Dropdown>
                                    <Dropdown.Toggle variant='' className="btn btn-primary btn-lg dropdown-toggle" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Large button
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul">
                                        <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
                                        <Dropdown.Divider className="dropdown-divider" />
                                        <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="btn-group my-1 me-2">
                                <Dropdown as={ButtonGroup}>
                                    <Button variant="light">Large split button</Button>
                                    <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        <Dropdown.Divider className="dropdown-divider" />
                                        <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="btn-group my-1 me-2">
                                <Dropdown>
                                    <Dropdown.Toggle size="sm" variant='' className="btn btn-primary dropdown-toggle" type="button"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Small button
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul">
                                        <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
                                        <Dropdown.Divider className="dropdown-divider" />
                                        <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="btn-group my-1 me-2">
                                <Dropdown as={ButtonGroup}>
                                    <Button size='sm' variant="light">Small split button</Button>
                                    <Dropdown.Toggle split variant="light" id="dropdown-split-basic" />
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                        <Dropdown.Divider className="dropdown-divider" />
                                        <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Body>
                        <Collapse in={open7} className="card-body"><pre>
                            <code>{`<div className="btn-group my-1 me-2">
<Dropdown>
<Dropdown.Toggle variant='' className="btn btn-primary btn-lg dropdown-toggle" type="button"
     data-bs-toggle="dropdown" aria-expanded="false">
     Large button
 </Dropdown.Toggle>
 <Dropdown.Menu as="ul">
     <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
     <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
     <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
     <Dropdown.Divider className="dropdown-divider" />
     <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
 </Dropdown.Menu>
</Dropdown>
</div>
<div className="btn-group my-1 me-2">=
 <Dropdown as={ButtonGroup}>
 <Button variant="light">Large split button</Button>
 <Dropdown.Toggle  split variant="light" id="dropdown-split-basic" />
 <Dropdown.Menu>
     <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
     <Dropdown.Divider className="dropdown-divider" />
     <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
 </Dropdown.Menu>
 </Dropdown>
</div>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Dropup
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen8(!open8)} aria-controls="example-collapse-text" aria-expanded={open8}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Dropdown drop="up" className="btn-group dropup my-1 me-2">
                                <Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropup
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul">
                                    <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
                                    <Dropdown.Divider className="dropdown-divider" />
                                    <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown drop="up" className="btn-group dropup my-1">
                                <Button variant='' type="button" className="btn btn-info">
                                    Split dropup
                                </Button>
                                <Dropdown.Toggle variant='' type="button"
                                    className="btn btn-info dropdown-toggle dropdown-toggle-split"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropdown</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul">
                                    <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
                                    <Dropdown.Divider className="dropdown-divider" />
                                    <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                        <Collapse in={open8} className="card-body"><pre>
                            <code>{` <Dropdown drop="up" className="btn-group dropup my-1 me-2">
<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
    data-bs-toggle="dropdown" aria-expanded="false">
    Dropup
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
    <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
    <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
    <li>
        <hr className="dropdown-divider"/>
    </li>
    <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
<Dropdown drop="up" className="btn-group dropup my-1">
<Button variant='' type="button" className="btn btn-info">
    Split dropup
</Button>
<Dropdown.Toggle variant='' type="button"
    className="btn btn-info dropdown-toggle dropdown-toggle-split"
    data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden">Toggle Dropdown</span>
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
    <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
    <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
    <li>
        <hr className="dropdown-divider"/>
    </li>
    <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Dropup right
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen9(!open9)} aria-controls="example-collapse-text" aria-expanded={open9}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Dropdown className="btn-group dropend my-1 me-2" drop="end">
                                <Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropright
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul">
                                    <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
                                    <Dropdown.Divider className="dropdown-divider" />
                                    <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown drop="end" className="btn-group dropend my-1">
                                <Button variant='' type="button" className="btn btn-info">
                                    Split dropend
                                </Button>
                                <Dropdown.Toggle variant='' type="button"
                                    className="btn btn-info dropdown-toggle dropdown-toggle-split"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    <span className="visually-hidden">Toggle Dropright</span>
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul">
                                    <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
                                    <Dropdown.Divider className="dropdown-divider" />
                                    <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                        <Collapse in={open9} className="card-body"><pre>
                            <code>{`<Dropdown className="btn-group dropend my-1 me-2" drop="end">
<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
    data-bs-toggle="dropdown" aria-expanded="false">
    Dropright
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
    <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
    <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
    <li>
        <hr className="dropdown-divider"/>
    </li>
    <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
</Dropdown.Menu>
 </Dropdown>
 <Dropdown drop="end" className="btn-group dropend my-1">
<Button variant='' type="button" className="btn btn-info">
    Split dropend
</Button>
<Dropdown.Toggle variant='' type="button"
    className="btn btn-info dropdown-toggle dropdown-toggle-split"
    data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden">Toggle Dropright</span>
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
    <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
    <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
    <li>
        <hr className="dropdown-divider"/>
    </li>
    <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
</Dropdown.Menu>
 </Dropdown>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Dropup left
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen10(!open10)} aria-controls="example-collapse-text" aria-expanded={open10}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Dropdown className="btn-group dropstart my-1 me-2" drop="start">
                                <Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropstart
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul">
                                    <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
                                    <Dropdown.Divider className="dropdown-divider" />
                                    <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className="btn-group">
                                <Dropdown className="btn-group dropstart my-1" role="group" drop="start">
                                    <Dropdown.Toggle variant='' type="button"
                                        className="btn btn-info dropdown-toggle dropdown-toggle-split"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="visually-hidden">Toggle Dropstart</span>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul">
                                        <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
                                        <Dropdown.Divider className="dropdown-divider" />
                                        <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' type="button" className="btn btn-info my-1">
                                    Split dropstart
                                </Button>
                            </div>
                        </Card.Body>
                        <Collapse in={open10} className="card-body"><pre>
                            <code>{`<Dropdown className="btn-group dropstart my-1 me-2" drop="start">
<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
    data-bs-toggle="dropdown" aria-expanded="false">
    Dropstart
</Dropdown.Toggle>
<Dropdown.Menu as="ul">
    <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
    <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
    <li>
        <hr className="dropdown-divider"/>
    </li>
    <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
</Dropdown.Menu>
 </Dropdown>
 <div className="btn-group">
<Dropdown className="btn-group dropstart my-1" role="group" drop="start">
    <Dropdown.Toggle variant='' type="button"
        className="btn btn-info dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown" aria-expanded="false">
        <span className="visually-hidden">Toggle Dropstart</span>
    </Dropdown.Toggle>
    <Dropdown.Menu as="ul">
        <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
        <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
        <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
        <li>
            <hr className="dropdown-divider"/>
        </li>
        <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
    </Dropdown.Menu>
</Dropdown>
<Button variant='' type="button" className="btn btn-info my-1">
    Split dropstart
</Button>
 </div>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Active
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen11(!open11)} aria-controls="example-collapse-text" aria-expanded={open11}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Dropdown>
                                <Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropstart
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul">
                                    <Dropdown.Item as="li" href="#">Regular link</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-item active" href="#" aria-current="true">Active
                                        link
                                    </Dropdown.Item>
                                    <Dropdown.Item as="li" href="#">Another link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                        <Collapse in={open11} className="card-body"><pre>
                            <code>{`<Dropdown>
 <Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
     data-bs-toggle="dropdown" aria-expanded="false">
     Dropstart
 </Dropdown.Toggle>
 <Dropdown.Menu as="ul">
     <Dropdown.Item as="li" href="#">Regular link</Dropdown.Item>
     <Dropdown.Item className="dropdown-item active" href="#" aria-current="true">Active
             link
     </Dropdown.Item>
     <Dropdown.Item as="li" href="#">Another link</Dropdown.Item>
 </Dropdown.Menu>
 </Dropdown>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Disabled
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen12(!open12)} aria-controls="example-collapse-text" aria-expanded={open12}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Dropdown>
                                <Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropstart
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul">
                                    <Dropdown.Item as="li" href="#">Regular link</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-item disabled" href="#" aria-current="true">Active
                                        link</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#">Another link</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                        <Collapse in={open12} className="card-body"><pre>
                            <code>{`  <Dropdown>
 <Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
 data-bs-toggle="dropdown" aria-expanded="false">
 Dropstart
 </Dropdown.Toggle>
 <Dropdown.Menu as="ul">
     <Dropdown.Item as="li" href="#">Regular link</Dropdown.Item>
     <Dropdown.Item className="dropdown-item disabled" href="#" aria-current="true">Active
             link</Dropdown.Item>
     <Dropdown.Item as="li" href="#">Another link</Dropdown.Item>
 </Dropdown.Menu>
 </Dropdown>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Auto close behavior
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen13(!open13)} aria-controls="example-collapse-text" aria-expanded={open13}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {AutocloseButtons.map((idx) => (
                                    <div className="btn-group" key={Math.random()}>
                                        <Dropdown>
                                            <Dropdown.Toggle variant={idx.class} className="btn btn-primary dropdown-toggle" type="button"
                                                id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true"
                                                aria-expanded="false">
                                                {idx.text}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu as="ul" aria-labelledby="defaultDropdown">
                                                <Dropdown.Item as="li" href="#">Menu item</Dropdown.Item>
                                                <Dropdown.Item as="li" href="#">Menu item</Dropdown.Item>
                                                <Dropdown.Item as="li" href="#">Menu item</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                        <Collapse in={open13} className="card-body"><pre>
                            <code>{` {AutocloseButtons.map((idx)=>(
 <div className="btn-group">
 <Dropdown>
     <Dropdown.Toggle variant={idx.class} className="btn btn-primary dropdown-toggle" type="button"
         id="defaultDropdown" data-bs-toggle="dropdown" data-bs-auto-close="true"
         aria-expanded="false">
         {idx.text}
     </Dropdown.Toggle>
     <Dropdown.Menu as="ul" aria-labelledby="defaultDropdown">
         <Dropdown.Item as="li" href="#">Menu item</Dropdown.Item>
         <Dropdown.Item as="li" href="#">Menu item</Dropdown.Item>
         <Dropdown.Item as="li" href="#">Menu item</Dropdown.Item>
     </Dropdown.Menu>
     </Dropdown>
 </div>
 ))}`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                dropdowns with Forms
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen14(!open14)} aria-controls="example-collapse-text" aria-expanded={open14}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Dropdown>
                                <Dropdown.Toggle variant='' className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu">
                                    <Form className="px-4 py-3">
                                        <div className="mb-3">
                                            <Form.Label htmlFor="exampleDropdownFormEmail1" className="form-label">Email
                                                address</Form.Label>
                                            <Form.Control type="email" className="form-control" id="exampleDropdownFormEmail1"
                                                placeholder="email@example.com" />
                                        </div>
                                        <div className="mb-3">
                                            <Form.Label htmlFor="exampleDropdownFormPassword1"
                                                className="form-label">Password</Form.Label>
                                            <Form.Control type="password" className="form-control"
                                                id="exampleDropdownFormPassword1" placeholder="Password" />
                                        </div>
                                        <div className="mb-3">
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                                <label className="form-check-label" htmlFor="dropdownCheck">
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <Button variant='' type="submit" className="btn btn-primary">Sign in</Button>
                                    </Form>
                                    <div className="dropdown-divider"></div>
                                    <Dropdown.Item as="li" href="#">New around here? Sign up</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#">Forgot password?</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                        <Collapse in={open14} className="card-body"><pre>
                            <code>{` <Dropdown>
<Dropdown.Toggle variant='' className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
    data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
</Dropdown.Toggle>
<Dropdown.Menu className="dropdown-menu">
    <Form className="px-4 py-3">
        <div className="mb-3">
            <Form.Label htmlFor="exampleDropdownFormEmail1" className="form-label">Email
                address</Form.Label>
            <Form.Control type="email" className="form-control" id="exampleDropdownFormEmail1"
                placeholder="email@example.com"/>
        </div>
        <div className="mb-3">
            <Form.Label htmlFor="exampleDropdownFormPassword1"
                className="form-label">Password</Form.Label>
            <Form.Control type="password" className="form-control"
                id="exampleDropdownFormPassword1" placeholder="Password"/>
        </div>
        <div className="mb-3">
            <div className="form-check">
                <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
                <label className="form-check-label" htmlFor="dropdownCheck">
                    Remember me
                </label>
            </div>
        </div>
        <Button variant='' type="submit" className="btn btn-primary">Sign in</Button>
    </Form>
    <div className="dropdown-divider"></div>
    <Dropdown.Item as="li" href="#">New around here? Sign up</Dropdown.Item>
    <Dropdown.Item as="li" href="#">Forgot password?</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Dropdown menu centered
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen15(!open15)} aria-controls="example-collapse-text" aria-expanded={open15}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="card-title mb-3">Use <code>.dropdown-center</code> on the parent element.
                            </p>
                            <Dropdown className="dropdown-center">
                                <Dropdown.Toggle variant='' className="btn btn-primary dropdown-toggle" type="button"
                                    id="dropdownCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
                                    Centered dropdown
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul" aria-labelledby="dropdownCenterBtn">
                                    <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#">Action two</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#">Action three</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                        <Collapse in={open15} className="card-body"><pre>
                            <code>{`<Dropdown className="dropdown-center">
<Dropdown.Toggle variant='' className="btn btn-primary dropdown-toggle" type="button"
    id="dropdownCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
    Centered dropdown
</Dropdown.Toggle>
<Dropdown.Menu as="ul" aria-labelledby="dropdownCenterBtn">
    <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#">Action two</Dropdown.Item>
    <Dropdown.Item as="li" href="#">Action three</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Dropup centered
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen16(!open16)} aria-controls="example-collapse-text" aria-expanded={open16}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="card-title mb-3">Use <code>.dropup-center</code>
                                on the parent element.
                            </p>
                            <Dropdown className="dropup-center dropup" drop="up">
                                <Dropdown.Toggle variant='' className="btn btn-secondary dropdown-toggle" type="button"
                                    id="dropupCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
                                    Centered dropup
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul" aria-labelledby="dropupCenterBtn">
                                    <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#">Action two</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#">Action three</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                        <Collapse in={open16} className="card-body"><pre>
                            <code>{`<Dropdown className="dropup-center dropup" drop="up">
<Dropdown.Toggle variant='' className="btn btn-secondary dropdown-toggle" type="button"
    id="dropupCenterBtn" data-bs-toggle="dropdown" aria-expanded="false">
    Centered dropup
</Dropdown.Toggle>
<Dropdown.Menu as="ul" aria-labelledby="dropupCenterBtn">
    <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#">Action two</Dropdown.Item>
    <Dropdown.Item as="li" href="#">Action three</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Menu items
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen17(!open17)} aria-controls="example-collapse-text" aria-expanded={open17}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="card-title mb-3">You can use <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code> as
                                dropdown items.</p>
                            <Dropdown className="dropdown">
                                <Dropdown.Toggle variant='' className="btn btn-info dropdown-toggle" type="button"
                                    id="dropdownMenu1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Dropdown.Toggle>
                                <Dropdown.Menu as="ul" aria-labelledby="dropdownMenu1">
                                    <Dropdown.Item>Action</Dropdown.Item>
                                    <Dropdown.Item>Another action
                                    </Dropdown.Item>
                                    <Dropdown.Item>Something else
                                        here
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                        <Collapse in={open17} className="card-body"><pre>
                            <code>{`<Dropdown className="dropdown">
<Dropdown.Toggle variant='' className="btn btn-info dropdown-toggle" type="button"
    id="dropdownMenu1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown
</Dropdown.Toggle>
<Dropdown.Menu as="ul" aria-labelledby="dropdownMenu1">
    <Dropdown.Item><Button variant='' as="li" type="button">Action</Button></Dropdown.Item>
    <Dropdown.Item><Button variant='' as="li" type="button">Another action</Button>
    </Dropdown.Item>
    <Dropdown.Item><Button variant='' as="li" type="button">Something else
            here</Button>
    </Dropdown.Item>
</Dropdown.Menu>
   </Dropdown>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Dropdowns options
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen18(!open18)} aria-controls="example-collapse-text" aria-expanded={open18}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="card-title mb-3">Use <code>data-bs-offset</code> or <code>data-bs-reference</code> to change
                                the location of the dropdown.</p>
                            <div className="d-flex align-items-center flex-wrap">
                                <Dropdown className="dropdown me-1 mt-1">
                                    <Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
                                        id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false"
                                        data-bs-offset="10,20">
                                        Offset
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu as="ul" aria-labelledby="dropdownMenuOffset">
                                        <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
                                        <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <ButtonGroup className="btn-group custom-btn-group mt-1">
                                    <Button variant='' type="button" className="btn btn-info">Reference</Button>
                                    <Dropdown>
                                        <Dropdown.Toggle variant='' type="button"
                                            className="btn btn-info dropdown-toggle dropdown-toggle-split"
                                            id="dropdownMenuReference" data-bs-toggle="dropdown"
                                            aria-expanded="false" data-bs-reference="parent">
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu as="ul" aria-labelledby="dropdownMenuReference">
                                            <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
                                            <Dropdown.Divider className="dropdown-divider" />
                                            <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </ButtonGroup>
                            </div>
                        </Card.Body>
                        <Collapse in={open18} className="card-body"><pre>
                            <code>{`<Dropdown className="dropdown me-1">
<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
    id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false"
    data-bs-offset="10,20">
    Offset
</Dropdown.Toggle>
<Dropdown.Menu as="ul" aria-labelledby="dropdownMenuOffset">
    <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
    <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>
<div className="btn-group">
<Button variant='' type="button" className="btn btn-info">Reference</Button>
<Button variant='' type="button"
    className="btn btn-info dropdown-toggle dropdown-toggle-split"
    id="dropdownMenuReference" data-bs-toggle="dropdown"
    aria-expanded="false" data-bs-reference="parent">
    <span className="visually-hidden">Toggle Dropdown</span>
</Button>
<Dropdown.Menu as="ul" aria-labelledby="dropdownMenuReference">
    <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
    <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
    <li>
        <hr className="dropdown-divider"/>
    </li>
    <Dropdown.Item as="li" href="#">Separated link</Dropdown.Item>
</Dropdown.Menu>
</div>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={9}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Alignment options
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen19(!open19)} aria-controls="example-collapse-text" aria-expanded={open19}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {AlignmentButtons.map((idx: any) => (
                                    <div className="btn-group" key={Math.random()}>
                                        <Dropdown drop={idx.dir}>
                                            <Dropdown.Toggle variant={idx.class} className="btn btn-primary dropdown-toggle mb-0" type="button"
                                                id="dropdownMenuButton" data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                {idx.text}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu as="ul" aria-labelledby="dropdownMenuButton">
                                                <Dropdown.Item as="li" href="#">Menu item</Dropdown.Item>
                                                <Dropdown.Item as="li" href="#">Menu item</Dropdown.Item>
                                                <Dropdown.Item as="li" href="#">Menu item</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                        <Collapse in={open19} className="card-body"><pre>
                            <code>{`{AlignmentButtons.map((idx)=>(
<div className="btn-group" key={Math.random()}>
    <Dropdown drop={idx.dir}>
    <Dropdown.Toggle variant={idx.class} className="btn btn-primary dropdown-toggle mb-0" type="button"
        id="dropdownMenuButton" data-bs-toggle="dropdown"
        aria-expanded="false">
        {idx.text}
    </Dropdown.Toggle>
    <Dropdown.Menu as="ul" aria-labelledby="dropdownMenuButton">
        <Dropdown.Item as="li" href="#">Menu item</Dropdown.Item>
        <Dropdown.Item as="li" href="#">Menu item</Dropdown.Item>
        <Dropdown.Item as="li" href="#">Menu item</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
</div>
))}`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Dark Dropdowns
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen20(!open20)} aria-controls="example-collapse-text" aria-expanded={open20}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Dropdown>
                                <Dropdown.Toggle variant='' className="btn btn-dark dropdown-toggle" type="button"
                                    id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown button
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="dropdown-menu dropdown-menu-dark">
                                    <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Card.Body>
                        <Collapse in={open20} className="card-body"><pre>
                            <code>{`<Dropdown>
<Dropdown.Toggle variant='' className="btn btn-dark dropdown-toggle" type="button"
    id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
</Dropdown.Toggle>
<Dropdown.Menu className="dropdown-menu dropdown-menu-dark">
    <Dropdown.Item as="li" href="#">Action</Dropdown.Item>
    <Dropdown.Item as="li" href="#">Another action</Dropdown.Item>
    <Dropdown.Item as="li" href="#">Something else here</Dropdown.Item>
</Dropdown.Menu>
</Dropdown>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Menu alignment
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen21(!open21)} aria-controls="example-collapse-text" aria-expanded={open21}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="">
                            <div className="btn-group">
                                <Dropdown>
                                    <Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Right-aligned menu example
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                                        <Dropdown.Item>Action
                                        </Dropdown.Item>
                                        <Dropdown.Item>Another
                                            action</Dropdown.Item>
                                        <Dropdown.Item>Something else
                                            here
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Body>
                        <Collapse in={open21} className="card-body"><pre>
                            <code>{`<Dropdown>
<Dropdown.Toggle variant='' type="button" className="btn btn-primary dropdown-toggle"
    data-bs-toggle="dropdown" aria-expanded="false">
    Right-aligned menu example
</Dropdown.Toggle>
<Dropdown.Menu className="dropdown-menu dropdown-menu-end">
    <Dropdown.Item><button className="dropdown-item" type="button">Action</button>
    </Dropdown.Item>
    <Dropdown.Item><button className="dropdown-item" type="button">Another
            action</button></Dropdown.Item>
    <Dropdown.Item><button className="dropdown-item" type="button">Something else
            here</button>
    </Dropdown.Item>
</Dropdown.Menu>
</Dropdown>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Responsive alignment end
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen22(!open22)} aria-controls="example-collapse-text" aria-expanded={open22}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-group">
                                <DropdownButton as={ButtonGroup} align={{ lg: 'end' }} title="Left-aligned but right aligned when large screen" id="dropdown-menu-align-responsive-1" className="text-wrap">
                                    <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </Card.Body>
                        <Collapse in={open22} className="card-body"><pre>
                            <code>{`<div className="btn-group">
<DropdownButton as={ButtonGroup} align={{ lg: 'end' }} title="Left-aligned but right aligned when large screen" id="dropdown-menu-align-responsive-1">
    <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
    <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
  </DropdownButton>
</div>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Responsive alignment left
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen23(!open23)} aria-controls="example-collapse-text" aria-expanded={open23}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-group">
                                <DropdownButton as={ButtonGroup} align={{ lg: 'start' }} title="Left-aligned but right aligned when large screen" className="text-wrap" id="dropdown-menu-align-responsive-1">
                                    <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
                                </DropdownButton>
                            </div>
                        </Card.Body>
                        <Collapse in={open23} className="card-body"><pre>
                            <code>{`<DropdownButton as={ButtonGroup} align={{ lg: 'start' }} title="Left-aligned but right aligned when large screen" id="dropdown-menu-align-responsive-1">
<Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
<Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
</DropdownButton>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Custom Dropdown Menu's
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen24(!open24)} aria-controls="example-collapse-text" aria-expanded={open24}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {CustomButtons.map((idx) => (
                                    <div className="btn-group" key={Math.random()}>
                                        <Dropdown>
                                            <Dropdown.Toggle variant={idx.class} className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                {idx.text}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className={`dropdown-menu dropdown-${idx.class1} dropmenu-${idx.class2}`}>
                                                <Dropdown.Item className="dropdown-item" href="#">Action</Dropdown.Item>
                                                <Dropdown.Item className="dropdown-item" href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item className="dropdown-item" href="#">Something else here</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                        <Collapse in={open24} className="card-body"><pre>
                            <code>{`<DropdownButton as={ButtonGroup} align={{ lg: 'start' }} title="Left-aligned but right aligned when large screen" id="dropdown-menu-align-responsive-1">
<Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
<Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
</DropdownButton>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Ghost Button Dropdowns
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen25(!open25)} aria-controls="example-collapse-text" aria-expanded={open25}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                {GhostButtons.map((idx) => (
                                    <div className="btn-group" key={Math.random()}>
                                        <Dropdown>
                                            <Dropdown.Toggle variant={idx.class} type="button" className="btn btn-primary-ghost dropdown-toggle"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                {idx.text}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item className="dropdown-item" href="#">Action</Dropdown.Item>
                                                <Dropdown.Item className="dropdown-item" href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item className="dropdown-item" href="#">Something else here</Dropdown.Item>
                                                <Dropdown.Divider className="dropdown-divider" />
                                                <Dropdown.Item className="dropdown-item" href="#">Separated link</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                        <Collapse in={open25} className="card-body"><pre>
                            <code>{` {GhostButtons.map((idx)=>(
<div className="btn-group" key={Math.random()}>
    <Dropdown>
    <Dropdown.Toggle variant={idx.class} type="button" className="btn btn-primary-ghost dropdown-toggle"
        data-bs-toggle="dropdown" aria-expanded="false">
        {idx.text}
    </Dropdown.Toggle>
    <Dropdown.Menu>
        <Dropdown.Item className="dropdown-item" href="#">Action</Dropdown.Item>
        <Dropdown.Item className="dropdown-item" href="#">Another action</Dropdown.Item>
        <Dropdown.Item className="dropdown-item" href="#">Something else here</Dropdown.Item>
        <li>
            <hr className="dropdown-divider"/>
        </li>
        <Dropdown.Item className="dropdown-item" href="#">Separated link</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
</div>
))}`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                non-interactive dropdown items
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen26(!open26)} aria-controls="example-collapse-text" aria-expanded={open26}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="card-title mb-3">Use <code>.dropdown-item-text.</code> to create non-interactive dropdown items.</p>
                            <div className="bd-example">
                                <Dropdown.Menu className="dropdown-menu" show>
                                    <Dropdown.Item><span className="dropdown-item-text">Dropdown item text</span>
                                    </Dropdown.Item>
                                    <Dropdown.Item href="#">Action</Dropdown.Item>
                                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#">Something else here
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </div>
                        </Card.Body>
                        <Collapse in={open26} className="card-body"><pre>
                            <code>{` <Dropdown.Menu className="dropdown-menu">
 <Dropdown.Item><span className="dropdown-item-text">Dropdown item text</span>
 </Dropdown.Item>
 <Dropdown.Item><a className="dropdown-item" href="#">Action</a></Dropdown.Item>
 <Dropdown.Item><a className="dropdown-item" href="#">Another action</a></Dropdown.Item>
 <Dropdown.Item><a className="dropdown-item" href="#">Something else here</a>
 </Dropdown.Item>
</Dropdown.Menu>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Dropdown Headers
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen27(!open27)} aria-controls="example-collapse-text" aria-expanded={open27}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="card-titlte mb-3">Add a <code>.dropdown-header</code> to label sections of actions in any dropdown menu.</p>
                            <div className="bd-example">
                                <Dropdown.Menu show>
                                    <Dropdown.Header>
                                        <h6 className="dropdown-header">Dropdown header</h6>
                                    </Dropdown.Header>
                                    <Dropdown.Item className="dropdown-item" href="#">Action</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-item" href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-item" href="#">Something else here</Dropdown.Item>
                                </Dropdown.Menu>
                            </div>
                        </Card.Body>
                        <Collapse in={open27} className="card-body"><pre>
                            <code>{` <Dropdown.Menu className="dropdown-menu">
 <Dropdown.Item><span className="dropdown-item-text">Dropdown item text</span>
 </Dropdown.Item>
 <Dropdown.Item><a className="dropdown-item" href="#">Action</a></Dropdown.Item>
 <Dropdown.Item><a className="dropdown-item" href="#">Another action</a></Dropdown.Item>
 <Dropdown.Item><a className="dropdown-item" href="#">Something else here</a>
 </Dropdown.Item>
</Dropdown.Menu>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Dropdown Dividers
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen28(!open28)} aria-controls="example-collapse-text" aria-expanded={open28}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="bd-example">
                                <Dropdown.Menu className="dropdown-menu" show>
                                    <Dropdown.Header>Heading</Dropdown.Header>
                                    <Dropdown.Item className="dropdown-item" href="#">Action</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-item" href="#">Another action</Dropdown.Item>
                                    <Dropdown.Item className="dropdown-item" href="#">Something else here</Dropdown.Item>
                                    <Dropdown.Divider className="dropdown-divider" />
                                    <Dropdown.Item className="dropdown-item" href="#">Separated link</Dropdown.Item>
                                </Dropdown.Menu>
                            </div>
                        </Card.Body>
                        <Collapse in={open28} className="card-body"><pre>
                            <code>{`<Dropdown.Menu className="dropdown-menu">
<Dropdown.Header className="dropdown-header">Heading</Dropdown.Header>
<Dropdown.Item className="dropdown-item" href="#">Action</Dropdown.Item>
<Dropdown.Item className="dropdown-item" href="#">Another action</Dropdown.Item>
<Dropdown.Item className="dropdown-item" href="#">Something else here</Dropdown.Item>
<li>
    <hr className="dropdown-divider"/>
</li>
<Dropdown.Item className="dropdown-item" href="#">Separated link</Dropdown.Item>
</Dropdown.Menu>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Dropdown Menu Text
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen29(!open29)} aria-controls="example-collapse-text" aria-expanded={open29}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="bd-example">
                                <Dropdown.Menu show className="dropdown-menu p-4 text-muted" style={{ maxWidth: 200 }}>
                                    <p>
                                        Some example text that's free-flowing within the dropdown menu.
                                    </p>
                                    <p className="mb-0">
                                        And this is more example text.
                                    </p>
                                </Dropdown.Menu>
                            </div>
                        </Card.Body>
                        <Collapse in={open29} className="card-body"><pre>
                            <code>{`<Dropdown.Menu className="dropdown-menu">
<Dropdown.Header className="dropdown-header">Heading</Dropdown.Header>
<Dropdown.Item className="dropdown-item" href="#">Action</Dropdown.Item>
<Dropdown.Item className="dropdown-item" href="#">Another action</Dropdown.Item>
<Dropdown.Item className="dropdown-item" href="#">Something else here</Dropdown.Item>
<li>
    <hr className="dropdown-divider"/>
</li>
<Dropdown.Item className="dropdown-item" href="#">Separated link</Dropdown.Item>
</Dropdown.Menu>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
            </Row>

        </Fragment>
    );
};

export default Dropdowns;
