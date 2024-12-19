import  { FC, Fragment, useState } from 'react';
import { Button, Card, CloseButton, Col, Collapse, Row, Toast, ToastContainer } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import favicon from "../../../assets/images/brand-logos/favicon.ico";
import toggledark from "../../../assets/images/brand-logos/toggle-dark.png";

interface ToastsProps { }

const Toasts: FC<ToastsProps> = () => {

    //live example
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);

    const [show7, setShow7] = useState(false);
    const [show8, setShow8] = useState(false);
    const [show9, setShow9] = useState(false);
    const [show10, setShow10] = useState(false);
    const [show11, setShow11] = useState(false);
    const [show12, setShow12] = useState(false);

    const [show13, setShow13] = useState(false);
    const [show14, setShow14] = useState(false);
    const [show15, setShow15] = useState(false);
    const [show16, setShow16] = useState(false);
    const [show17, setShow17] = useState(false);
    const [show18, setShow18] = useState(false);
    const [show19, setShow19] = useState(false);
    const [show20, setShow20] = useState(false);
    const [show21, setShow21] = useState(false);

    const [showA, setShowA] = useState(true);
    const toggleShowA = () => setShowA(!showA);

    const [showB, setShowB] = useState(true);
    const toggleShowB = () => setShowB(!showB);

    // Color toast
    const [showC, setShowC] = useState(true);
    const toggleShowC = () => setShowC(!showC);

    const [showD, setShowD] = useState(true);
    const toggleShowD = () => setShowD(!showD);

    const [showE, setShowE] = useState(true);
    const toggleShowE = () => setShowE(!showE);

    const [showF, setShowF] = useState(true);
    const toggleShowF = () => setShowF(!showF);//

    const [showG, setShowG] = useState(true);
    const toggleShowG = () => setShowG(!showG);

    const [showH, setShowH] = useState(true);
    const toggleShowH = () => setShowH(!showH);

    const [showI, setShowI] = useState(true);
    const toggleShowI = () => setShowI(!showI);

    const [showJ, setShowJ] = useState(true);
    const toggleShowJ = () => setShowJ(!showJ);

    const [showK, setShowK] = useState(true);
    const toggleShowK = () => setShowK(!showK);

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
            <Pageheader title="Toasts" heading="Ui Elements" active="Toasts" />
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Live example
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Button type="button" className="btn btn-primary btn-wave" id="liveToastBtn" onClick={() => setShow(true)}>Show live
                                toast</Button>
                            <Toast className="toast-container position-fixed top-0 end-0 me-4 mt-4" onClose={() => setShow(false)} show={show} delay={3000} autohide>

                                <Toast.Header className="text-default mb-0">
                                    <img className="bd-placeholder-img rounded me-2" src={favicon} alt="..." />
                                    <strong className="me-auto">Ynex</strong>
                                    <small>11 mins ago</small>
                                </Toast.Header>
                                <Toast.Body>
                                    Hello, world! This is a toast message.
                                </Toast.Body>

                            </Toast>

                        </Card.Body>
                            <Collapse in={open1} className="card-body"><pre><code>{`
  <Button type="button" className="btn btn-primary btn-wave" id="liveToastBtn" onClick={() => setShow(true)}>Show live
  toast</Button>
<Toast className="toast-container position-fixed top-0 end-0 p-3" onClose={() => setShow(false)} show={show} delay={3000} autohide>
      <Toast.Header className="toast-header text-default">
          <img className="bd-placeholder-img rounded me-2" src={favicon} alt="..."/>
          <strong className="me-auto">Ynex</strong>
          <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body className="toast-body">
          Hello, world! This is a toast message.
      </Toast.Body>
</Toast>`}</code></pre></Collapse>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Color schemes
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen2(!open2)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Toast className="toast align-items-center text-bg-primary border-0 fade show mb-4" show={showC}>
                                <div className="d-flex">
                                    <Toast.Body className=" text-fixed-white" >Hello, world! This is a toast message. </Toast.Body>
                                    <CloseButton aria-label="Close" variant='' className="btn-close btn-close-white me-2 m-auto" onClick={toggleShowC}></CloseButton>
                                </div></Toast>

                            <Toast className="toast align-items-center text-bg-secondary border-0 fade show mb-4" show={showD}>
                                <div className="d-flex">
                                    <Toast.Body className=" text-fixed-white" >Hello, world! This is a toast message. </Toast.Body>
                                    <CloseButton aria-label="Close" variant='' className="btn-close btn-close-white me-2 m-auto" onClick={toggleShowD}></CloseButton>
                                </div></Toast>

                            <Toast className="toast align-items-center text-bg-success border-0 fade show mb-4" show={showE}>
                                <div className="d-flex">
                                    <Toast.Body className=" text-fixed-white" >Hello, world! This is a toast message. </Toast.Body>
                                    <CloseButton aria-label="Close" variant='' className="btn-close btn-close-white me-2 m-auto" onClick={toggleShowE}></CloseButton>
                                </div></Toast>

                            <Toast className="toast align-items-center text-bg-info border-0 fade show mb-4" show={showF}>
                                <div className="d-flex">
                                    <Toast.Body className=" text-fixed-white" >Hello, world! This is a toast message. </Toast.Body>
                                    <CloseButton aria-label="Close" variant='' className="btn-close btn-close-white me-2 m-auto" onClick={toggleShowF}></CloseButton>
                                </div></Toast>
                        </Card.Body>
                            <Collapse in={open2} className="card-body"><pre><code>{` <Toast className="toast align-items-center text-bg-primary border-0 fade show mb-4"  show={showC}>
<div className="d-flex">
<Toast.Body className=" text-fixed-white" >
Hello, world! This is a toast message.</Toast.Body>
<CloseButton aria-label="Close" variant='' 
className="btn-close btn-close-white me-2 m-auto"
 onClick={toggleShowC}></CloseButton>
 </div></Toast>
 
<Toast className="toast align-items-center text-bg-secondary border-0 fade show mb-4"  show={showC}>
<div className="d-flex">
<Toast.Body className=" text-fixed-white" >
Hello, world! This is a toast message. </Toast.Body>
<CloseButton aria-label="Close" variant='' 
className="btn-close btn-close-white me-2 m-auto" 
onClick={toggleShowC}></CloseButton>
 </div></Toast>

<Toast className="toast align-items-center text-bg-success border-0 fade show mb-4"  show={showC}>
<div className="d-flex">
<Toast.Body className=" text-fixed-white" >
Hello, world! This is a toast message. </Toast.Body>
<CloseButton aria-label="Close" variant=''
 className="btn-close btn-close-white me-2 m-auto"
  onClick={toggleShowC}></CloseButton>
 </div></Toast>

<Toast className="toast align-items-center text-bg-info border-0 fade show mb-4"  show={showC}>
<div className="d-flex">
<Toast.Body className=" text-fixed-white" >
Hello, world! This is a toast message. </Toast.Body>
<CloseButton aria-label="Close" variant='' 
className="btn-close btn-close-white me-2 m-auto"
 onClick={toggleShowC}></CloseButton>
 </div></Toast>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Basic example
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen3(!open3)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>

                            <Toast show={showA} onClose={toggleShowA} className="toast show"
                                role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                                <Toast.Header className="text-default">
                                    <img src={favicon} alt="" className="me-2" height="18" />
                                    <strong className="me-auto">Ynex</strong>
                                    <small>11 mins ago</small>
                                </Toast.Header>
                                <Toast.Body> Hello, world! This is a toast message.</Toast.Body>
                            </Toast>
                        </Card.Body>
                            <Collapse in={open3} className="card-body"><pre><code>{`<Toast show={showA} onClose={toggleShowA} className="toast show"
 role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
  <Toast.Header>
             <img src={favicon} alt="" className="me-2" height="18" />
  <strong className="me-auto">Ynex</strong>
  <small>11 mins ago</small>
  </Toast.Header>
  <Toast.Body> Hello, world! This is a toast message.</Toast.Body>
 </Toast>`}</code></pre></Collapse>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Stacking
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen4(!open4)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ToastContainer className="toast-container position-static">
                                <Toast show={showG} onClose={toggleShowG} className="toast fade show">
                                    <Toast.Header className="toast-header text-default">
                                        <img src={favicon} alt="" className="me-2" height="18" />
                                        <strong className="me-auto">Ynex</strong>
                                        <small>just now</small>
                                    </Toast.Header>
                                    <Toast.Body> See? Just like this.</Toast.Body>
                                </Toast>
                                <Toast show={showH} onClose={toggleShowH} className="toast fade show">
                                    <Toast.Header className="toast-header text-default">
                                        <img src={favicon} alt="" className="me-2" height="18" />
                                        <strong className="me-auto">Ynex</strong>
                                        <small>2 seconds ago</small>
                                    </Toast.Header>
                                    <Toast.Body> Heads up, toasts will stack automatically</Toast.Body>
                                </Toast>
                            </ToastContainer>
                        </Card.Body>
                            <Collapse in={open4} className="card-body"><pre><code>{`<Toast show={showA} onClose={toggleShowA} className="toast show"
 role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
  <Toast.Header>
             <img src={favicon} alt="" className="me-2" height="18" />
  <strong className="me-auto">Ynex</strong>
  <small>11 mins ago</small>
  </Toast.Header>
  <Toast.Body> Hello, world! This is a toast message.</Toast.Body>
 </Toast>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Translucent
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen5(!open5)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Toast show={showB} onClose={toggleShowB} className="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
                                <Toast.Header className="text-default">
                                    <img src={favicon} alt="" className="me-2" height="18" />
                                    <strong className="me-auto">Ynex</strong>
                                    <small>11 mins ago</small>
                                </Toast.Header>
                                <Toast.Body> Hello, world! This is a toast message.</Toast.Body>
                            </Toast>
                        </Card.Body>
                            <Collapse in={open5} className="card-body"><pre><code>{`<Toast show={showA} onClose={toggleShowA} className="toast show"
 role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
  <Toast.Header>
             <img src={favicon} alt="" className="me-2" height="18" />
  <strong className="me-auto">Ynex</strong>
  <small>11 mins ago</small>
  </Toast.Header>
  <Toast.Body> Hello, world! This is a toast message.</Toast.Body>
 </Toast>`}</code></pre></Collapse>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Custom content
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen6(!open6)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Toast role="alert" className="toast align-items-center fade show mb-3" show={showI}>
                                <div className="d-flex">
                                    <Toast.Body className=" text-dark" > Hello, world! This is a toast message.</Toast.Body>
                                    <CloseButton type="button" className="btn-close me-2 m-auto" onClick={toggleShowI}>
                                    </CloseButton>
                                </div>
                            </Toast>
                            <div>
                                <span className="my-4 text-muted">
                                    Alternatively, you can also add additional controls and components to
                                    toasts.
                                </span>
                            </div>
                            <Toast className="toast fade show mt-2" role="alert" aria-live="assertive" show={showJ}>
                                <Toast.Body>
                                    Hello, world! This is a toast message.
                                    <div className="mt-2 pt-2 border-top">
                                        <Button type="button" className="btn btn-primary btn-sm btn-wave me-2">Take
                                            action</Button>
                                        <Button type="button" className="btn btn-secondary btn-sm btn-wave" onClick={toggleShowJ}>Close</Button>
                                    </div>
                                </Toast.Body>
                            </Toast>
                        </Card.Body>
                            <Collapse in={open6} className="card-body"><pre><code>{`<Toast role="alert" 
 className="toast align-items-center fade show mb-3" show={showI}>
<div className="d-flex">
<Toast.Body className="text-dark">Hello, world! This is a toast message.
</Toast.Body>
    <CloseButton type="button" className="btn-close me-2 m-auto" 
     onClick={toggleShowI}>
    </CloseButton>
</div>
 </Toast>
 <div>
<span className="my-4 text-muted">
    Alternatively, you can also add additional controls and components to
    toasts.
</span>
 </div>
 <Toast className="toast fade show mt-2" show={showJ}>
<Toast.Body>
    Hello, world! This is a toast message.
 <div className="mt-2 pt-2 border-top">
 <Button type="button"  className="btn btn-primary btn-sm btn-wave">Take
  action</Button>
  <Button type="button" className="btn btn-secondary btn-sm btn-wave" 
  onClick={toggleShowJ}>Close</Button>
  </div>
</Toast.Body>
</Toast>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Color Variants Live
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen7(!open7)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                <Button type="button" variant='primary-light' className="btn me-2 btn-wave" id="primaryToastBtn" onClick={() => setShow1(true)}>Primary</Button>
                                <Button variant='secondary-light' type="button" className="btn me-2 btn-wave" id="secondaryToastBtn" onClick={() => setShow2(true)}>secondary</Button>
                                <Button variant='warning-light' type="button" className="btn  me-2 btn-wave" id="warningToastBtn" onClick={() => setShow3(true)}>warning</Button>
                                <Button variant='info-light' type="button" className="btn  me-2 btn-wave" id="infoToastBtn" onClick={() => setShow4(true)}>info</Button>
                                <Button variant='success-light' type="button" className="btn  me-2 btn-wave" id="successToastBtn" onClick={() => setShow5(true)}>success</Button>
                                <Button variant='danger-light' type="button" className="btn me-2 btn-wave" id="dangerToastBtn" onClick={() => setShow6(true)}>danger</Button>
                            </div>
                            <ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
                                <Toast id="primaryToast" bg="primary-transparent" className="toast colored-toast"
                                    onClose={() => setShow1(false)} show={show1} delay={3000} autohide
                                    aria-atomic="true">
                                    <Toast.Header className="toast-header bg-primary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast id="secondaryToast" className="toast colored-toast bg-secondary-transparent" role="alert" aria-live="assertive"
                                    aria-atomic="true" onClose={() => setShow2(false)} show={show2} delay={3000} autohide>
                                    <Toast.Header className="toast-header bg-secondary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast id="warningToast" className="toast colored-toast bg-warning-transparent" role="alert" aria-live="assertive"
                                    onClose={() => setShow3(false)} show={show3} delay={3000} autohide
                                    aria-atomic="true">
                                    <Toast.Header className="toast-header bg-warning text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast id="infoToast" className="toast colored-toast bg-info-transparent" role="alert" aria-live="assertive"
                                    onClose={() => setShow4(false)} show={show4} delay={3000} autohide
                                    aria-atomic="true">
                                    <Toast.Header className="bg-info text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast id="successToast" className="toast colored-toast bg-success-transparent" role="alert" aria-live="assertive"
                                    onClose={() => setShow5(false)} show={show5} delay={3000} autohide
                                    aria-atomic="true">
                                    <Toast.Header className="bg-success text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                        <button type="button" className="btn-close" data-bs-dismiss="toast"
                                            aria-label="Close"></button>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast id="dangerToast" className="toast colored-toast bg-danger-transparent" role="alert" aria-live="assertive"
                                    onClose={() => setShow6(false)} show={show6} delay={3000} autohide
                                    aria-atomic="true">
                                    <Toast.Header className="toast-header bg-danger text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                        <button type="button" className="btn-close" data-bs-dismiss="toast"
                                            aria-label="Close"></button>
                                    </Toast.Header>
                                    <Toast.Body className="toast-body">
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                        </Card.Body>
                            <Collapse in={open7} className="card-body"><pre><code>{`<Toast id="primaryToast" bg="primary-transparent" className="toast colored-toast" 
                                        onClose={() => setShow1(false)} show={show1} delay={3000} autohide
                                            aria-atomic="true">
                                            <Toast.Header className="toast-header bg-primary text-fixed-white">
                                                <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
                                                <strong className="me-auto">Ynex</strong>
                                            </Toast.Header>
                                            <Toast.Body>
                                                Your,toast message here.
                                            </Toast.Body>
                                        </Toast>
                                        <Toast id="secondaryToast" className="toast colored-toast bg-secondary-transparent" role="alert" aria-live="assertive"
                                            aria-atomic="true"  onClose={() => setShow2(false)} show={show2} delay={3000} autohide>
                                            <Toast.Header className="toast-header bg-secondary text-fixed-white">
                                                <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
                                                <strong className="me-auto">Ynex</strong>
                                            </Toast.Header>
                                            <Toast.Body>
                                                Your,toast message here.
                                            </Toast.Body>
                                        </Toast>
                                        <Toast id="warningToast" className="toast colored-toast bg-warning-transparent" role="alert" aria-live="assertive"
                                        onClose={() => setShow3(false)} show={show3} delay={3000} autohide
                                            aria-atomic="true">
                                            <Toast.Header className="toast-header bg-warning text-fixed-white">
                                                <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
                                                <strong className="me-auto">Ynex</strong>
                                            </Toast.Header>
                                            <Toast.Body>
                                                Your,toast message here.
                                            </Toast.Body>
                                        </Toast>
                                        <Toast id="infoToast" className="toast colored-toast bg-info-transparent" role="alert" aria-live="assertive"
                                         onClose={() => setShow4(false)} show={show4} delay={3000} autohide
                                            aria-atomic="true">
                                            <Toast.Header className="bg-info text-fixed-white">
                                                <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
                                                <strong className="me-auto">Ynex</strong>
                                            </Toast.Header>
                                            <Toast.Body>
                                                Your,toast message here.
                                            </Toast.Body>
                                        </Toast>
                                        <Toast id="successToast" className="toast colored-toast bg-success-transparent" role="alert" aria-live="assertive"
                                        onClose={() => setShow5(false)} show={show5} delay={3000} autohide
                                            aria-atomic="true">
                                            <Toast.Header className="bg-success text-fixed-white">
                                                <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
                                                <strong className="me-auto">Ynex</strong>
                                            </Toast.Header>
                                            <Toast.Body>
                                                Your,toast message here.
                                            </Toast.Body>
                                        </Toast>
                                        <Toast id="dangerToast" className="toast colored-toast bg-danger-transparent" role="alert" aria-live="assertive"
                                         onClose={() => setShow6(false)} show={show6} delay={3000} autohide
                                            aria-atomic="true">
                                            <Toast.Header className="toast-header bg-danger text-fixed-white">
                                                <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
                                                <strong className="me-auto">Ynex</strong>
                                            </Toast.Header>
                                            <Toast.Body className="toast-body">
                                                Your,toast message here.
                                            </Toast.Body>
                                        </Toast>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Solid Background Toasts
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen8(!open8)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open8}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                <Button variant='primary' type="button" className="btn btn-primary me-2 btn-wave" id="solidprimaryToastBtn" onClick={() => setShow7(true)}>Primary</Button>
                                <Button variant='secondary' type="button" className="btn btn-secondary me-2 btn-wave" id="solidsecondaryToastBtn" onClick={() => setShow8(true)}>secondary</Button>
                                <Button variant='warning' type="button" className="btn btn-warning me-2 btn-wave" id="solidwarningToastBtn" onClick={() => setShow9(true)}>warning</Button>
                                <Button variant='info' type="button" className="btn btn-info me-2 btn-wave" id="solidinfoToastBtn" onClick={() => setShow10(true)}>info</Button>
                                <Button variant='success' type="button" className="btn btn-success me-2 btn-wave" id="solidsuccessToastBtn" onClick={() => setShow11(true)}>success</Button>
                                <Button variant='danger' type="button" className="btn btn-danger me-2 btn-wave" id="soliddangerToastBtn" onClick={() => setShow12(true)}>danger</Button>
                            </div>
                            <ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
                                <Toast id="solid-primaryToast" className="toast colored-toast bg-primary text-fixed-white"
                                    onClose={() => setShow7(false)} show={show7} delay={3000} autohide>
                                    <Toast.Header className="toast-header bg-primary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast id="solid-secondaryToast" className="toast colored-toast bg-secondary text-fixed-white"
                                    onClose={() => setShow8(false)} show={show8} delay={3000} autohide
                                    aria-atomic="true">
                                    <Toast.Header className="toast-header bg-secondary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast id="solid-warningToast" className="toast colored-toast bg-warning text-fixed-white"
                                    onClose={() => setShow9(false)} show={show9} delay={3000} autohide>
                                    <Toast.Header className="toast-header bg-warning text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast id="solid-infoToast" className="toast colored-toast bg-info text-fixed-white"
                                    onClose={() => setShow10(false)} show={show10} delay={3000} autohide>
                                    <Toast.Header className="toast-header bg-info text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast id="solid-successToast" className="toast colored-toast bg-success text-fixed-white"
                                    onClose={() => setShow11(false)} show={show11} delay={3000} autohide>
                                    <Toast.Header className="toast-header bg-success text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                                <Toast id="solid-dangerToast" className="toast colored-toast bg-danger text-fixed-white"
                                    onClose={() => setShow12(false)} show={show12} delay={3000} autohide>
                                    <Toast.Header className="toast-header bg-danger text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body>
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                        </Card.Body>
                            <Collapse in={open8} className="card-body"><pre><code>{`  <ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
                                        <Toast id="solid-primaryToast" className="toast colored-toast bg-primary text-fixed-white"
                                          onClose={() => setShow7(false)} show={show7} delay={3000} autohide>
                                            <Toast.Header className="toast-header bg-primary text-fixed-white">
                                                <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
                                                <strong className="me-auto">Ynex</strong>
                                            </Toast.Header>
                                            <Toast.Body>
                                                Your,toast message here.
                                            </Toast.Body>
                                        </Toast>
                                        <Toast id="solid-secondaryToast" className="toast colored-toast bg-secondary text-fixed-white"  
                                        onClose={() => setShow8(false)} show={show8} delay={3000} autohide
                                            aria-atomic="true">
                                            <Toast.Header className="toast-header bg-secondary text-fixed-white">
                                                <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
                                                <strong className="me-auto">Ynex</strong>
                                            </Toast.Header>
                                            <Toast.Body>
                                                Your,toast message here.
                                            </Toast.Body>
                                        </Toast>
                                        <Toast id="solid-warningToast" className="toast colored-toast bg-warning text-fixed-white"  
                                        onClose={() => setShow9(false)} show={show9} delay={3000} autohide>
                                            <Toast.Header className="toast-header bg-warning text-fixed-white">
                                                <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
                                                <strong className="me-auto">Ynex</strong>
                                            </Toast.Header>
                                            <Toast.Body>
                                                Your,toast message here.
                                            </Toast.Body>
                                        </Toast>
                                        <Toast id="solid-infoToast" className="toast colored-toast bg-info text-fixed-white" 
                                        onClose={() => setShow10(false)} show={show10} delay={3000} autohide>
                                            <Toast.Header className="toast-header bg-info text-fixed-white">
                                                <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
                                                <strong className="me-auto">Ynex</strong>
                                            </Toast.Header>
                                            <Toast.Body>
                                                Your,toast message here.
                                            </Toast.Body>
                                        </Toast>
                                        <Toast id="solid-successToast" className="toast colored-toast bg-success text-fixed-white" 
                                        onClose={() => setShow11(false)} show={show11} delay={3000} autohide>
                                            <Toast.Header className="toast-header bg-success text-fixed-white">
                                                <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
                                                <strong className="me-auto">Ynex</strong>
                                            </Toast.Header>
                                            <Toast.Body>
                                                Your,toast message here.
                                            </Toast.Body>
                                        </Toast>
                                        <Toast id="solid-dangerToast" className="toast colored-toast bg-danger text-fixed-white"
                                         onClose={() => setShow12(false)} show={show12} delay={3000} autohide>
                                            <Toast.Header className="toast-header bg-danger text-fixed-white">
                                                <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
                                                <strong className="me-auto">Ynex</strong>
                                            </Toast.Header>
                                            <Toast.Body>
                                                Your,toast message here.
                                            </Toast.Body>
                                        </Toast>
                                    </ToastContainer>`}</code></pre></Collapse>

                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Toast Placements
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen9(!open9)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open9}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="btn-list">
                                <Button variant='outline-primary' type="button" onClick={() => setShow13(true)} className="btn  me-2 btn-wave" id="topleftToastBtn">Top Left</Button>
                                <Button variant='outline-primary' type="button" onClick={() => setShow14(true)} className="btn  me-2 btn-wave" id="topcenterToastBtn">Top Center</Button>
                                <Button variant='outline-primary' type="button" onClick={() => setShow15(true)} className="btn  me-2 btn-wave" id="toprightToastBtn">Top Right</Button>
                                <Button variant='outline-primary' type="button" onClick={() => setShow16(true)} className="btn  me-2 btn-wave" id="middleleftToastBtn">Middle Left</Button>
                                <Button variant='outline-primary' type="button" onClick={() => setShow17(true)} className="btn  me-2 btn-wave" id="middlecenterToastBtn">Middle Center</Button>
                                <Button variant='outline-primary' type="button" onClick={() => setShow18(true)} className="btn  me-2 btn-wave" id="middlerightToastBtn">Middle Right</Button>
                                <Button variant='outline-primary' type="button" onClick={() => setShow19(true)} className="btn  me-2 btn-wave" id="bottomleftToastBtn">Bottom Left</Button>
                                <Button variant='outline-primary' type="button" onClick={() => setShow20(true)} className="btn  me-2 btn-wave" id="bottomcenterToastBtn">Bottom Center</Button>
                                <Button variant='outline-primary' type="button" onClick={() => setShow21(true)} className="btn  me-2 btn-wave" id="bottomrightToastBtn">Bottom Right</Button>
                            </div>
                            <ToastContainer className="toast-container position-fixed top-0 start-0 p-3">
                                <Toast id="topleft-Toast" className="toast colored-toast bg-primary-transparent text-primary"
                                    onClose={() => setShow13(false)} show={show13} delay={3000} autohide>
                                    <Toast.Header className="toast-header bg-primary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                        <button type="button" className="btn-close" data-bs-dismiss="toast"
                                            aria-label="Close"></button>
                                    </Toast.Header>
                                    <Toast.Body className="toast-body">
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <ToastContainer className="toast-container position-fixed top-0 start-50 translate-middle-x p-3">
                                <Toast id="topcenter-Toast" className="toast colored-toast bg-primary-transparent text-primary" onClose={() => setShow14(false)} show={show14} delay={3000} autohide>
                                    <Toast.Header className="toast-header bg-primary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body className="toast-body">
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <ToastContainer className="toast-container position-fixed top-0 end-0 p-3">
                                <Toast id="topright-Toast" className="toast colored-toast bg-primary-transparent text-primary"
                                    onClose={() => setShow15(false)} show={show15} delay={3000} autohide>
                                    <Toast.Header className="toast-header bg-primary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body className="toast-body">
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <ToastContainer className="toast-container position-fixed top-50 start-0 translate-middle-y p-3">
                                <Toast id="middleleft-Toast" className="toast colored-toast bg-primary-transparent text-primary"
                                    onClose={() => setShow16(false)} show={show16} delay={3000} autohide>
                                    <Toast.Header className="toast-header bg-primary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body className="toast-body">
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <ToastContainer className="toast-container position-fixed top-50 start-50 translate-middle">
                                <Toast id="middlecenter-Toast" className="toast colored-toast bg-primary-transparent text-primary"
                                    onClose={() => setShow17(false)} show={show17} delay={3000} autohide>
                                    <Toast.Header className="toast-header bg-primary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body className="toast-body">
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <ToastContainer className="toast-container position-fixed top-50 end-0 translate-middle-y p-3">
                                <Toast id="middleright-Toast" className="toast colored-toast bg-primary-transparent text-primary"
                                    onClose={() => setShow18(false)} show={show18} delay={3000} autohide>
                                    <Toast.Header className="toast-header bg-primary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body className="toast-body">
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <ToastContainer className="toast-container position-fixed bottom-0 start-0 p-3">
                                <Toast id="bottomleft-Toast" className="toast colored-toast bg-primary-transparent text-primary"
                                    onClose={() => setShow19(false)} show={show19} delay={3000} autohide>
                                    <Toast.Header className="toast-header bg-primary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body className="toast-body">
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <ToastContainer className="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3">
                                <Toast id="bottomcenter-Toast" className="toast colored-toast bg-primary-transparent text-primary"
                                    onClose={() => setShow20(false)} show={show20} delay={3000} autohide>
                                    <Toast.Header className="toast-header bg-primary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body className="toast-body">
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                            <ToastContainer className="toast-container position-fixed bottom-0 end-0 p-3">
                                <Toast id="bottomright-Toast" className="toast colored-toast bg-primary-transparent text-primary"
                                    onClose={() => setShow21(false)} show={show21} delay={3000} autohide>
                                    <Toast.Header className="toast-header bg-primary text-fixed-white">
                                        <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..." />
                                        <strong className="me-auto">Ynex</strong>
                                    </Toast.Header>
                                    <Toast.Body className="toast-body">
                                        Your,toast message here.
                                    </Toast.Body>
                                </Toast>
                            </ToastContainer>
                        </Card.Body>
                            <Collapse in={open9} className=""><pre><code>{` <ToastContainer  className="toast-container position-fixed top-0 start-0 p-3">
                                        <Toast id="topleft-Toast" className="toast colored-toast bg-primary-transparent text-primary"
                                         onClose={() => setShow13(false)} show={show13} delay={3000} autohide>
                                            <Toast.Header className="toast-header bg-primary text-fixed-white">
                                                <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
                                                <strong className="me-auto">Ynex</strong>
                                                <button type="button" className="btn-close" data-bs-dismiss="toast"
                                                    aria-label="Close"></button>
                                            </Toast.Header>
                                            <Toast.Body className="toast-body">
                                                Your,toast message here.
                                            </Toast.Body>
                                        </Toast>
                                    </ToastContainer>
                                    <ToastContainer  className="toast-container position-fixed top-0 start-50 translate-middle-x p-3">
                                        <Toast id="topcenter-Toast" className="toast colored-toast bg-primary-transparent text-primary" onClose={() => setShow14(false)} show={show14} delay={3000} autohide>
                                            <Toast.Header className="toast-header bg-primary text-fixed-white">
                                                <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
                                                <strong className="me-auto">Ynex</strong>
                                            </Toast.Header>
                                            <Toast.Body className="toast-body">
                                                Your,toast message here.
                                            </Toast.Body>
                                        </Toast>
                                    </ToastContainer>
                                    <ToastContainer  className="toast-container position-fixed top-0 end-0 p-3">
                                        <Toast id="topright-Toast" className="toast colored-toast bg-primary-transparent text-primary"
                                         onClose={() => setShow15(false)} show={show15} delay={3000} autohide>
                                            <Toast.Header className="toast-header bg-primary text-fixed-white">
                                                <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
                                                <strong className="me-auto">Ynex</strong>
                                            </Toast.Header>
                                            <Toast.Body className="toast-body">
                                                Your,toast message here.
                                            </Toast.Body>
                                        </Toast>
                                    </ToastContainer>
                                    <ToastContainer  className="toast-container position-fixed top-50 start-0 translate-middle-y p-3">
                                        <Toast id="middleleft-Toast" className="toast colored-toast bg-primary-transparent text-primary" 
                                       onClose={() => setShow16(false)} show={show16} delay={3000} autohide>
                                            <Toast.Header className="toast-header bg-primary text-fixed-white">
                                                <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
                                                <strong className="me-auto">Ynex</strong>
                                            </Toast.Header>
                                            <Toast.Body className="toast-body">
                                                Your,toast message here.
                                            </Toast.Body>
                                        </Toast>
                                    </ToastContainer>
                                    <ToastContainer  className="toast-container position-fixed top-50 start-50 translate-middle">
                                        <Toast id="middlecenter-Toast" className="toast colored-toast bg-primary-transparent text-primary"
                                          onClose={() => setShow17(false)} show={show17} delay={3000} autohide>
                                            <Toast.Header className="toast-header bg-primary text-fixed-white">
                                                <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
                                                <strong className="me-auto">Ynex</strong>
                                            </Toast.Header>
                                            <Toast.Body className="toast-body">
                                                Your,toast message here.
                                            </Toast.Body>
                                        </Toast>
                                    </ToastContainer>
                                    <ToastContainer  className="toast-container position-fixed top-50 end-0 translate-middle-y p-3">
                                        <Toast id="middleright-Toast" className="toast colored-toast bg-primary-transparent text-primary"
                                          onClose={() => setShow18(false)} show={show18} delay={3000} autohide>
                                            <Toast.Header className="toast-header bg-primary text-fixed-white">
                                                <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
                                                <strong className="me-auto">Ynex</strong>
                                            </Toast.Header>
                                            <Toast.Body className="toast-body">
                                                Your,toast message here.
                                            </Toast.Body>
                                        </Toast>
                                    </ToastContainer>
                                    <ToastContainer  className="toast-container position-fixed bottom-0 start-0 p-3">
                                        <Toast id="bottomleft-Toast" className="toast colored-toast bg-primary-transparent text-primary"
                                        onClose={() => setShow19(false)} show={show19} delay={3000} autohide>
                                            <Toast.Header className="toast-header bg-primary text-fixed-white">
                                                <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
                                                <strong className="me-auto">Ynex</strong>
                                            </Toast.Header>
                                            <Toast.Body className="toast-body">
                                                Your,toast message here.
                                            </Toast.Body>
                                        </Toast>
                                    </ToastContainer>
                                    <ToastContainer  className="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3">
                                        <Toast id="bottomcenter-Toast" className="toast colored-toast bg-primary-transparent text-primary" 
                                         onClose={() => setShow20(false)} show={show20} delay={3000} autohide>
                                            <Toast.Header className="toast-header bg-primary text-fixed-white">
                                                <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
                                                <strong className="me-auto">Ynex</strong>
                                            </Toast.Header>
                                            <Toast.Body className="toast-body">
                                                Your,toast message here.
                                            </Toast.Body>
                                        </Toast>
                                    </ToastContainer>
                                    <ToastContainer  className="toast-container position-fixed bottom-0 end-0 p-3">
                                        <Toast id="bottomright-Toast" className="toast colored-toast bg-primary-transparent text-primary" 
                                         onClose={() => setShow21(false)} show={show21} delay={3000} autohide>
                                            <Toast.Header className="toast-header bg-primary text-fixed-white">
                                                <img className="bd-placeholder-img rounded me-2" src={toggledark} alt="..."/>
                                                <strong className="me-auto">Ynex</strong>
                                            </Toast.Header>
                                            <Toast.Body className="toast-body">
                                                Your,toast message here.
                                            </Toast.Body>
                                        </Toast>
                                    </ToastContainer>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Aligning Toast Using Flexbox
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen10(!open10)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open10}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="bd-example bg-light bd-example-toasts d-flex p-0">
                                <div aria-live="polite" aria-atomic="true"
                                    className="d-flex justify-content-center align-items-center w-100">
                                    <Toast show={showK} onClose={toggleShowK} className="toast fade show shadow-lg">
                                        <Toast.Header className="text-default">
                                            <img src={favicon} alt="" className="bd-placeholder-img rounded me-2" />
                                            <strong className="me-auto">Ynex</strong>
                                            <small>11 mins ago</small>
                                        </Toast.Header>
                                        <Toast.Body> Hello, world! This is a toast message.</Toast.Body>
                                    </Toast>
                                </div>
                            </div>
                        </Card.Body>
                            <Collapse in={open10} className=""><pre><code>{` <Toast show={showK} onClose={toggleShowK} className="toast fade show shadow-lg">
  <Toast.Header className="text-default">
<img src={favicon} alt=""className="bd-placeholder-img rounded me-2" />
  <strong className="me-auto">Ynex</strong>
  <small>11 mins ago</small>
</Toast.Header>
 <Toast.Body> Hello, world! This is a toast message.</Toast.Body>
  </Toast>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Toasts;
