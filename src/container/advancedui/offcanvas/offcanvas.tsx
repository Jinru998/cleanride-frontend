import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Collapse, Offcanvas, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import face12 from "../../../assets/images/faces/12.jpg";
import face1 from "../../../assets/images/faces/1.jpg";
import face6 from "../../../assets/images/faces/6.jpg";
import face14 from "../../../assets/images/faces/14.jpg";

interface OffcanvaProps { }

const Offcanva: FC<OffcanvaProps> = () => {
    //collapse1
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    // OffCanvas Enable
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    //static
    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    //Placement
    const [showt, setShowt] = useState(false);

    const handleCloset = () => setShowt(false);
    const handleShowt = () => setShowt(true);

    //right

    const [showr, setShowr] = useState(false);

    const handleCloser = () => setShowr(false);
    const handleShowr = () => setShowr(true);

    //bottom

    const [showb, setShowb] = useState(false);

    const handleCloseb = () => setShowb(false);
    const handleShowb = () => setShowb(true);
    return (
        <Fragment>
            <Pageheader title="Offcanvas" heading="Advanced Ui" active="Offcanvas" />
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Live demo
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Button variant='primary' className="btn mb-1 me-1" href="#offcanvasExample" onClick={handleShow}
                                role="button" aria-controls="offcanvasExample">
                                Link with href
                            </Button>
                            <Button variant='primary' className="btn mb-1" type="button" onClick={handleShow}>
                                Button with data-bs-target
                            </Button>
                            <Offcanvas show={show} onHide={handleClose} backdrop={true} className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample">
                                <Offcanvas.Header closeButton className="border-bottom border-block-end-dashed">
                                    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Notifications</h5>
                                </Offcanvas.Header>
                                <Offcanvas.Body className=" p-0">
                                    <div>
                                        <ul className="list-group list-group-flush mb-0">
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-primary avatar-rounded">
                                                            NW
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face12} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face1} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-secondary avatar-rounded">
                                                            M
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Medeleine Hey! there i'm available<span className="badge bg-light text-muted float-end">5 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            OL
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Olivia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-warning avatar-rounded">
                                                            A
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face6} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face14} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </Card.Body>
                            <Collapse in={open1} className="card-body"><pre><code>{`export function Defaultlink() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Link with href
      </Button>

<Offcanvas show={show} onHide={handleClose} backdrop={true} 
    className="offcanvas offcanvas-start" tabIndex={-1} 
  id="offcanvasExample">
 <Offcanvas.Header closeButton 
 className="border-bottom border-block-end-dashed">
 <h5 className="offcanvas-title" id="offcanvasExampleLabel">
 Notifications</h5>
 </Offcanvas.Header>
 <Offcanvas.Body className=" p-0">
     ..................
 </Offcanvas.Body>
</Offcanvas>
    </>
  );
}`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Body scrolling
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen2(!open2)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Button variant='primary' className="btn" type="button" onClick={handleShow1}>Enable
                                body scrolling
                            </Button>
                            <Offcanvas show={show1} onHide={handleClose1} className="offcanvas offcanvas-start" data-bs-scroll="true" backdrop={false}
                                tabIndex={-1} id="offcanvasScrolling">
                                <Offcanvas.Header closeButton className="border-bottom border-block-end-dashed">
                                    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Notifications</h5>
                                </Offcanvas.Header>
                                <Offcanvas.Body className="p-0">
                                    <div>
                                        <ul className="list-group list-group-flush mb-0">
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-primary avatar-rounded">
                                                            NW
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face12} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face1} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-secondary avatar-rounded">
                                                            M
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Medeleine Hey! there i'm available<span className="badge bg-light text-muted float-end">5 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            OL
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Olivia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-warning avatar-rounded">
                                                            A
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face6} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face14} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </Card.Body>
                            <Collapse in={open2} className="card-body"><pre><code>{`export function Defaultlink() {
  const [show1, setShow1] = useState(false)

  const handleClose1 = () => setShow1(false)
  const handleShow1 = () => setShow1(true)

  return (
    <>
    <Button variant='primary' className="btn" type="button"
     onClick={handleShow1}>Enable
    body scrolling
    </Button>
<Offcanvas show={show1} onHide={handleClose1} 
className="offcanvas offcanvas-start" backdrop={false} 
        tabIndex={-1} id="offcanvasScrolling">
 <Offcanvas.Header closeButton 
 className="border-bottom border-block-end-dashed">
     <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
     Notifications</h5>
 </Offcanvas.Header>
 <Offcanvas.Body className="p-0">
            .........
              </div>
        </Offcanvas.Body>
    </Offcanvas>
    </>
  );
}`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Static backdrop
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen3(!open3)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open3}
                                >Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" onClick={handleShow2}
                                data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                                Toggle static offcanvas
                            </Button>
                            <Offcanvas show={show2} onHide={handleClose2} backdrop="static" className="offcanvas offcanvas-start" tabIndex={-1}
                                id="staticBackdrop" >
                                <Offcanvas.Header closeButton className="offcanvas-header border-bottom border-block-end-dashed">
                                    <h5 className="offcanvas-title" id="staticBackdropLabel">Notifications</h5>
                                </Offcanvas.Header>
                                <Offcanvas.Body className="offcanvas-body p-0">
                                    <div>
                                        <ul className="list-group list-group-flush mb-0">
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-primary avatar-rounded">
                                                            NW
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face12} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face1} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-secondary avatar-rounded">
                                                            M
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Medeleine Hey! there i'm available<span className="badge bg-light text-muted float-end">5 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            OL
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Olivia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-warning avatar-rounded">
                                                            A
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face6} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face14} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </Card.Body>
                            <Collapse in={open3} className="card-body"><pre><code>{`export function Defaultlink() {
//static
const [show2, setShow2] = useState(false);

const handleClose2 = () => setShow2(false);
const handleShow2 = () => setShow2(true);

  return (
    <>
<Button className="btn btn-primary" type="button"
onClick={handleShow2}> Toggle static offcanvas
</Button>
<Offcanvas show={show2} onHide={handleClose2} backdrop="static" 
className="offcanvas offcanvas-start" tabIndex={-1}
id="staticBackdrop" >
<Offcanvas.Header closeButton 
className="offcanvas-header border-bottom border-block-end-dashed">
    <h5 className="offcanvas-title" id="staticBackdropLabel">
    Notifications</h5>
</Offcanvas.Header>
<Offcanvas.Body className="offcanvas-body p-0">
................
</Offcanvas.Body>
</Offcanvas>
    </>
  );
}`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Body scrolling and backdrop
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen4(!open4)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Button className="btn btn-primary" type="button" onClick={handleShow3}>Enable both scrolling &amp;
                                backdrop</Button>
                            <Offcanvas show={show3} onHide={handleClose3} backdrop={true} className="offcanvas offcanvas-start" tabIndex={-1}
                                id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                <Offcanvas.Header closeButton className="border-bottom border-block-end-dashed">
                                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Notifications</h5>
                                </Offcanvas.Header>
                                <Offcanvas.Body className="p-0">
                                    <div>
                                        <ul className="list-group list-group-flush mb-0">
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-primary avatar-rounded">
                                                            NW
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face12} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face1} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-secondary avatar-rounded">
                                                            M
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Medeleine Hey! there i'm available<span className="badge bg-light text-muted float-end">5 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            OL
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Olivia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-warning avatar-rounded">
                                                            A
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face6} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face14} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </Card.Body>
                            <Collapse in={open4} className="card-body"><pre><code>{`export function Defaultlink() {
  const [show3, setShow3] = useState(false);

  const handleClose3 = () => setShow3(false);
  const handleShow3 = () => setShow(true);

  return (
    <>
<Button className="btn btn-primary" type="button" 
onClick={handleShow3}>Enable both scrolling &amp; 
backdrop</Button>

<Offcanvas show={show3} onHide={handleClose3} 
backdrop={true}    tabIndex={-1}
className="offcanvas offcanvas-start" 
id="offcanvasWithBothOptions">
<Offcanvas.Header closeButton 
className="border-bottom border-block-end-dashed">
<h5 className="offcanvas-title
 " id="offcanvasWithBothOptionsLabel">
 Notifications</h5>
</Offcanvas.Header>
<Offcanvas.Body className="p-0">
...................
</Offcanvas.Body>
</Offcanvas>
    </>
  );
}`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={5}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Placement
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen5(!open5)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Button className="btn btn-primary mb-1 me-1" type="button" data-bs-toggle="offcanvas" onClick={handleShowt}
                                data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Toggle top
                                offcanvas</Button>
                            <Offcanvas placement='top' show={showt} onHide={handleCloset} className="offcanvas offcanvas-top" tabIndex={-1} id="offcanvasTop"
                                aria-labelledby="offcanvasTopLabel">
                                <Offcanvas.Header closeButton className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasTopLabel">Offcanvas top</h5>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    ...
                                </Offcanvas.Body>
                            </Offcanvas>
                            <Button className="btn btn-primary mb-1 me-1" type="button" data-bs-toggle="offcanvas" onClick={handleShowr}
                                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right
                                offcanvas</Button>
                            <Offcanvas placement='end' show={showr} onHide={handleCloser} className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight"
                                aria-labelledby="offcanvasRightLabel1">
                                <Offcanvas.Header closeButton className="offcanvas-header border-bottom border-block-end-dashed">
                                    <h5 className="offcanvas-title" id="offcanvasRightLabel1">Notifications
                                    </h5>
                                </Offcanvas.Header>
                                <Offcanvas.Body className="p-0">
                                    <div>
                                        <ul className="list-group list-group-flush mb-0">
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-primary avatar-rounded">
                                                            NW
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">New Website Created<span className="badge bg-light text-muted float-end">20 Nov 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>30 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face12} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face1} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Brenda New product launching<span className="badge bg-light text-muted float-end">1 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>7 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-secondary avatar-rounded">
                                                            M
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Medeleine Hey! there i'm available<span className="badge bg-light text-muted float-end">5 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            OL
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Olivia New schedule release<span className="badge bg-light text-muted float-end">6 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>45 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-warning avatar-rounded">
                                                            A
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-muted float-end">7 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>28 mins ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face6} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-muted float-end">10 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>14 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-danger avatar-rounded">
                                                            CH
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for the new project<span className="badge bg-light text-muted float-end">3 Jan 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>2 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-info avatar-rounded">
                                                            S
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Decide the live discussion<span className="badge bg-light text-muted float-end">17 Feb 2023</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>3 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src={face14} alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-muted float-end">29 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="d-flex align-items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-md bg-success avatar-rounded">
                                                            RC
                                                        </span>
                                                    </div>
                                                    <div className="flex-fill">
                                                        <p className="fw-semibold mb-0">Prepare for presentation<span className="badge bg-light text-muted float-end">31 Dec 2022</span></p>
                                                        <span className="fs-12 text-muted"><i className="ri-time-line align-middle me-1 d-inline-block"></i>4 hrs ago</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </Offcanvas.Body>
                            </Offcanvas>
                            <Button className="btn btn-primary mb-1" type="button" data-bs-toggle="offcanvas" onClick={handleShowb}
                                data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Toggle
                                bottom
                                offcanvas</Button>
                            <Offcanvas placement='bottom' show={showb} onHide={handleCloseb} className="offcanvas offcanvas-bottom" tabIndex={-1} id="offcanvasBottom"
                                aria-labelledby="offcanvasBottomLabel">
                                <Offcanvas.Header closeButton className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasBottomLabel">Offcanvas bottom
                                    </h5>
                                </Offcanvas.Header>
                                <Offcanvas.Body className="offcanvas-body small">
                                    ...
                                </Offcanvas.Body>
                            </Offcanvas>
                        </Card.Body>
                            <Collapse in={open5} className="card-body"><pre><code>{`export function Defaultlink() {
const [showb, setShowb] = useState(false);

const handleCloseb = () => setShowb(false);
const handleShowb = () => setShowb(true);

  return (
    <>
    <Button className="btn btn-primary mb-1" type="button" 
     onClick={handleShowb}>Toggle bottom offcanvas</Button>
<Offcanvas placement='bottom' show={showb} onHide={handleCloseb} 
className="offcanvas offcanvas-bottom" tabIndex={-1} id="offcanvasBottom">
    <Offcanvas.Header closeButton className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasBottomLabel">
        Offcanvas bottom
        </h5>
    </Offcanvas.Header>
    <Offcanvas.Body className="offcanvas-body small">
        ...
    </Offcanvas.Body>
</Offcanvas>
    </>
  );
}`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Offcanva;
