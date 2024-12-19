import  { FC, Fragment, useState } from 'react';
import { Breadcrumb, Button, Card, Col, Collapse, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';

interface BreadcrumbsProps { }

const Breadcrumbs: FC<BreadcrumbsProps> = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);

    return (
        <Fragment>
            <Pageheader title="Breadcrumb" heading="Ui Elements" active="Breadcrumb" />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Example
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' onClick={() => setOpen1(!open1)}
                                    className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <nav aria-label="breadcrumb">
                                <Breadcrumb>
                                    <Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>

                            <nav aria-label="breadcrumb">
                                <Breadcrumb>
                                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>

                            <nav aria-label="breadcrumb">
                                <Breadcrumb className="mb-0">
                                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                                    <Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>
                        </Card.Body>
                            <Collapse in={open1} className="card-body"><pre>
                                <code>{`<nav aria-label="breadcrumb">
     <Breadcrumb>
         <Breadcrumb.Item active  aria-current="page">Home</Breadcrumb.Item>
     </Breadcrumb>
 </nav>

 <nav aria-label="breadcrumb">
     <Breadcrumb>
         <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
         <Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
     </Breadcrumb>
 </nav>

 <nav aria-label="breadcrumb">
     <Breadcrumb className="mb-0">
         <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
         <Breadcrumb.Item><a href="#">Library</a></Breadcrumb.Item>
         <Breadcrumb.Item active  aria-current="page">Data</Breadcrumb.Item>
     </Breadcrumb>
 </nav>`}</code></pre>

                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Example1
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light'
                                    onClick={() => setOpen2(!open2)} className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <nav aria-label="breadcrumb">
                                <Breadcrumb className="breadcrumb-example1">
                                    <Breadcrumb.Item active aria-current="page">Home</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>

                            <nav aria-label="breadcrumb">
                                <Breadcrumb className="breadcrumb-example1">
                                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item active aria-current="page">Library</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>

                            <nav aria-label="breadcrumb">
                                <Breadcrumb className="breadcrumb-example1 mb-0">
                                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                                    <Breadcrumb.Item active aria-current="page">Data</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>
                        </Card.Body>
                            <Collapse in={open2} className="card-body"><pre>
                                <code>{`<nav aria-label="breadcrumb">
<Breadcrumb className="breadcrumb-example1">
    <Breadcrumb.Item active  aria-current="page">Home</Breadcrumb.Item>
</Breadcrumb>
</nav>

<nav aria-label="breadcrumb">
<Breadcrumb className="breadcrumb-example1">
    <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
    <Breadcrumb.Item active  aria-current="page">Library</Breadcrumb.Item>
</Breadcrumb>
</nav>

<nav aria-label="breadcrumb">
<Breadcrumb className="breadcrumb-example1 mb-0">
    <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
    <Breadcrumb.Item><a href="#">Library</a></Breadcrumb.Item>
    <Breadcrumb.Item active  aria-current="page">Data</Breadcrumb.Item>
</Breadcrumb>
</nav>`}</code></pre>

                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Dividers
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light'
                                    onClick={() => setOpen3(!open3)} className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <nav
                                aria-label="breadcrumb">
                                <Breadcrumb className="mb-0">
                                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item active className="active" aria-current="page">Library</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>
                        </Card.Body>
                            <Collapse in={open3} className="card-body"><pre>
                                <code>{` <nav 
 aria-label="breadcrumb">
    <Breadcrumb className="mb-0">
        <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
        <Breadcrumb.Item active className="active" aria-current="page">Library</Breadcrumb.Item>
    </Breadcrumb>
</nav>`}</code></pre>

                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Embedded SVG icon
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light'
                                    onClick={() => setOpen4(!open4)} className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <nav
                                aria-label="breadcrumb">
                                <Breadcrumb className=" mb-0">
                                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item active className="active embedded-breadcrumb" aria-current="page">Library</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>
                        </Card.Body>
                            <Collapse in={open4} className="card-body"><pre>
                                <code>{`  <nav 
    aria-label="breadcrumb">
    <Breadcrumb className=" mb-0">
        <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
        <Breadcrumb.Item active className="active embedded-breadcrumb" aria-current="page">Library</Breadcrumb.Item>
    </Breadcrumb>
</nav>`}</code></pre>

                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Breadcrumb Style-1
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' onClick={() => setOpen5(!open5)} className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <nav aria-label="breadcrumb">
                                <Breadcrumb className="breadcrumb breadcrumb-style1 mb-0">
                                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
                                    <Breadcrumb.Item active className="active" aria-current="page">Data</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>
                        </Card.Body>
                            <Collapse in={open5} className="card-body"><pre>
                                <code>{`<nav aria-label="breadcrumb">
 <Breadcrumb className="breadcrumb breadcrumb-style1 mb-0">
     <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
     <Breadcrumb.Item><a href="#">Library</a></Breadcrumb.Item>
     <Breadcrumb.Item active className="active" aria-current="page">Data</Breadcrumb.Item>
 </Breadcrumb>
 </nav>`}</code></pre>

                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Breadcrumb Style-2
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' onClick={() => setOpen6(!open6)} className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <nav aria-label="breadcrumb">
                                <Breadcrumb className="breadcrumb breadcrumb-style2 mb-0">
                                    <Breadcrumb.Item href="#"><i className="ti ti-home-2 me-1 fs-15 d-inline-block"></i>Home</Breadcrumb.Item>
                                    <Breadcrumb.Item href="#"><i className="ti ti-apps me-1 fs-15 d-inline-block"></i>About</Breadcrumb.Item>
                                    <Breadcrumb.Item active className="active" aria-current="page">Services</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>
                        </Card.Body>
                            <Collapse in={open6} className="card-body"><pre>
                                <code>{`<nav aria-label="breadcrumb">
<Breadcrumb className="breadcrumb breadcrumb-style2 mb-0">
    <Breadcrumb.Item><a href="#"><i className="ti ti-home-2 me-1 fs-15 d-inline-block"></i>Home</a></Breadcrumb.Item>
    <Breadcrumb.Item><a href="#"><i className="ti ti-apps me-1 fs-15 d-inline-block"></i>About</a></Breadcrumb.Item>
    <Breadcrumb.Item active className="active" aria-current="page">Services</Breadcrumb.Item>
</Breadcrumb>
    </nav>`}</code></pre>

                            </Collapse>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Background colors
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' onClick={() => setOpen7(!open7)} className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <nav
                                aria-label="breadcrumb">
                                <Breadcrumb className="breadcrumb mb-0">
                                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                    <Breadcrumb.Item active className="active" aria-current="page">Library</Breadcrumb.Item>
                                </Breadcrumb>
                            </nav>
                        </Card.Body>
                            <Collapse in={open7} className="card-body"><pre>
                                <code>{`  <nav
 aria-label="breadcrumb">
    <Breadcrumb className="breadcrumb mb-0">
        <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
        <Breadcrumb.Item active className="active" aria-current="page">Library</Breadcrumb.Item>
    </Breadcrumb>
</nav>`}</code></pre>

                            </Collapse>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Breadcrumbs;
