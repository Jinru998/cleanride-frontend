import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Collapse, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { Buttonspinner, Colorspinner } from './spinnersdata';

interface SpinnersProps { }

const Spinners: FC<SpinnersProps> = () => {
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
    return (
        <Fragment>
            <Pageheader title="Spinners" heading="Ui Elements" active="Spinners" />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Border spinner
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </Card.Body>
                            <Collapse in={open1} className="card-body"><pre><code>{`
 <div className="spinner-border" role="status">
 <span className="visually-hidden">Loading...</span>
</div>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Colors
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen2(!open2)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {Colorspinner.map((idx) => (
                                <div className={`spinner-border text-${idx.color}`} role="status" key={Math.random()}>
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            ))}
                        </Card.Body>
                            <Collapse in={open2} className="card-body"><pre><code>{`<div className="spinner-border text-secondary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-border text-success" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-border text-danger" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-border text-warning" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-border text-info" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-border text-light" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-border text-dark" role="status">
  <span className="visually-hidden">Loading...</span>
</div>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Growing spinner
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen3(!open3)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="spinner-grow" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </Card.Body>
                            <Collapse in={open3} className="card-body"><pre><code>{`<div className="spinner-grow" role="status">
<span className="visually-hidden">Loading...</span>
</div>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Growing spinner
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen4(!open4)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {Colorspinner.map((idx) => (
                                <div className={`spinner-grow me-1 text-${idx.color}`} role="status" key={Math.random()}>
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            ))}
                        </Card.Body>
                            <Collapse in={open4} className="card-body"><pre><code>{` <div className="spinner-grow text-secondary" role="status">
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-success" role="status">
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-danger" role="status">
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-warning" role="status">
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-info" role="status">
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-light" role="status">
<span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow text-dark" role="status">
<span className="visually-hidden">Loading...</span>
</div>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Alignment Flex
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen5(!open5)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-flex justify-content-center mb-4">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            <div className="d-flex align-items-center">
                                <strong>Loading...</strong>
                                <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                            </div>
                        </Card.Body>
                            <Collapse in={open5} className="card-body"><pre><code>{` <div className="d-flex justify-content-center mb-4">
<div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
</div>
 </div>
 <div className="d-flex align-items-center">
<strong>Loading...</strong>
<div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
 </div>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Alignment Float
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen6(!open6)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="clearfix mb-4">
                                <div className="spinner-border float-end" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            <div className="clearfix">
                                <div className="spinner-border float-start" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </Card.Body>
                            <Collapse in={open6} className="card-body"><pre><code>{`<div className="clearfix mb-4">
<div className="spinner-border float-end" role="status">
    <span className="visually-hidden">Loading...</span>
</div>
 </div>
 <div className="clearfix">
<div className="spinner-border float-start" role="status">
    <span className="visually-hidden">Loading...</span>
</div>
 </div>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Alignment Text center
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen7(!open7)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="text-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                        </Card.Body>
                            <Collapse in={open7} className="card-body"><pre><code>{`<div className="text-center">
<div className="spinner-border" role="status">
    <span className="visually-hidden">Loading...</span>
</div></div>`}</code></pre></Collapse>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Spinner Sizes
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen8(!open8)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open8}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="d-flex align-items-center">
                            <div className="spinner-border spinner-border-sm me-4" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-grow spinner-grow-sm me-4" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-border me-4"
                                style={{ width: '3rem', height: '3rem' }}
                                role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <div className="spinner-grow"
                                style={{ width: '3rem', height: '3rem' }}
                                role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </Card.Body>
                            <Collapse in={open8} className="card-body"><pre><code>{` <div className="spinner-border spinner-border-sm me-4" role="status">
 <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow spinner-grow-sm me-4" role="status">
 <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-border me-4" 
style={{ width: '3rem' , height: '3rem'}}
 role="status">
 <span className="visually-hidden">Loading...</span>
</div>
<div className="spinner-grow" 
style={{ width: '3rem' , height: '3rem'}}
 role="status">
 <span className="visually-hidden">Loading...</span>
</div>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Alignment Margin
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen9(!open9)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open9}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="spinner-border m-5" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </Card.Body>
                            <Collapse in={open9} className="card-body"><pre><code>{`<div className="spinner-border m-5" role="status">
<span className="visually-hidden">Loading...</span>
</div>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>Buttons</Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen10(!open10)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open10}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                <Button variant='' className="btn btn-primary-light" type="button" disabled>
                                    <span className="spinner-border spinner-border-sm align-middle" role="status"
                                        aria-hidden="true"></span>
                                    <span className="visually-hidden">Loading...</span>
                                </Button>
                                <Button variant='' className="btn btn-primary-light" type="button" disabled>
                                    <span className="spinner-border spinner-border-sm align-middle" role="status"
                                        aria-hidden="true"></span>
                                    Loading...
                                </Button>
                                <Button variant='' className="btn btn-primary-light" type="button" disabled>
                                    <span className="spinner-grow spinner-grow-sm align-middle" role="status"
                                        aria-hidden="true"></span>
                                    <span className="visually-hidden">Loading...</span>
                                </Button>
                                {Buttonspinner.map((idx) => (
                                    <Button variant={idx.color} className="btn" type="button" disabled key={Math.random()}>
                                        <span className="spinner-grow spinner-grow-sm align-middle" role="status"
                                            aria-hidden="true"></span>
                                        Loading...
                                    </Button>
                                ))}
                            </div>
                        </Card.Body>
                            <Collapse in={open10} className="card-body"><pre><code>{`<div className="btn-list">
<Button variant='' className="btn btn-primary-light" type="button" disabled>
    <span className="spinner-border spinner-border-sm align-middle" role="status"
        aria-hidden="true"></span>
    <span className="visually-hidden">Loading...</span>
</Button>
<Button variant='' className="btn btn-primary-light" type="button" disabled>
    <span className="spinner-border spinner-border-sm align-middle" role="status"
        aria-hidden="true"></span>
    Loading...
</Button>
<Button variant='' className="btn btn-primary-light" type="button" disabled>
    <span className="spinner-grow spinner-grow-sm align-middle" role="status"
        aria-hidden="true"></span>
    <span className="visually-hidden">Loading...</span>
</Button>
{Buttonspinner.map((idx)=>(
<Button variant={idx.color} className="btn" type="button" disabled>
    <span className="spinner-grow spinner-grow-sm align-middle" role="status"
        aria-hidden="true"></span>
    Loading...
</Button>
))}</div>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Spinners;
