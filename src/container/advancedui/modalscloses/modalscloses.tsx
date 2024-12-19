import  { FC, Fragment, useState } from 'react';
import { Button, Card, CloseButton, Col, Collapse, Container, Form, Modal, OverlayTrigger, Popover, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import Rodal from "rodal";
import 'rodal/lib/rodal.css';

interface ModalsclosesProps { }

const Modalscloses: FC<ModalsclosesProps> = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // static
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    //scrolling
    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    //popover
    const [show3, setShow3] = useState(false);

    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    //@mdo
    const [show4, setShow4] = useState(false);

    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    //@fat
    const [show5, setShow5] = useState(false);

    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    //@getbootstrap

    const [show6, setShow6] = useState(false);

    const handleClose6 = () => setShow6(false);
    const handleShow6 = () => setShow6(true);

    //vertically centered modal
    const [modalShow, setModalShow] = useState(false);

    //vertically centered scrollable
    const [modalShow1, setModalShow1] = useState(false);

    //grid
    const [modalShow2, setModalShow2] = useState(false);

    // small modal
    const [smShow, setSmShow] = useState(false);

    //large modal
    const [lgShow, setLgShow] = useState(false);

    //large modal
    const [xlShow, setXlShow] = useState(false);

    //  Twomodals
    const [showt1, setShowt1] = useState(false);
    const [showt2, setShowt2] = useState(false);
    const handleCloset1 = () => setShowt1(false);
    const handleShowt1 = () => setShowt1(true);
    const handleCloset2 = () => setShowt2(false);

    const Handleclose1 = () => {
        setShowt1(false);
        setShowt2(true);
    };
    const Handleclose2 = () => {
        setShowt2(false);
        setShowt1(true);
    };
    //fullscreen modals
    const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down',];
    const colors = ['primary', 'secondary', 'warning', 'info', 'success', 'danger'];
    const [fullscreen, setFullscreen] = useState<any>(true);
    const [showf, setShowf] = useState(false);

    function handleShowf(breakpoint: any, _color: any) {
        setFullscreen(breakpoint);
        setShowf(true);
    }

    // //Animated Modal
    const [, setVisible] = useState(false);

    const [animation1, setanimation1] = useState(false);
    const [animation2, setanimation2] = useState(false);
    const [animation3, setanimation3] = useState(false);
    const [animation4, setanimation4] = useState(false);
    const [animation5, setanimation5] = useState(false);
    const [animation6, setanimation6] = useState(false);
    const [animation7, setanimation7] = useState(false);
    const [animation8, setanimation8] = useState(false);
    const [animation9, setanimation9] = useState(false);

    const hide = () => {
        setVisible(false);
    };

    const viewDemoShow1 = (modal: string) => {
        switch (modal) {
            case "Basic":
                setanimation1(true);
                break;
            case "show2":
                setanimation2(true);
                break;
            case "show3":
                setanimation3(true);
                break;
            case "show4":
                setanimation4(true);
                break;
            case "show5":
                setanimation5(true);
                break;
            case "show6":
                setanimation6(true);
                break;
            case "show7":
                setanimation7(true);
                break;
            case "show8":
                setanimation8(true);
                break;
            case "show9":
                setanimation9(true);
                break;
        }
    };

    const viewDemoClose1 = (modal: string) => {
        switch (modal) {
            case "Basic":
                setanimation1(false);
                break;
            case "show2":
                setanimation2(false);
                break;
            case "show3":
                setanimation3(false);
                break;
            case "show4":
                setanimation4(false);
                break;
            case "show5":
                setanimation5(false);
                break;
            case "show6":
                setanimation6(false);
                break;
            case "show7":
                setanimation7(false);
                break;
            case "show8":
                setanimation8(false);
                break;
            case "show9":
                setanimation9(false);
                break;
        }
    };

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
    return (
        <Fragment>
            <Pageheader title="Modal & Closes" heading="Advanced Ui" active="Modal & Closes" />
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Basic Modal
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Button variant="primary" onClick={handleShow}>
                                Launch demo modal
                            </Button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6">Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={handleClose}>
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Card.Body>
                        <Card.Footer className="border-top-0"><Collapse in={open1} className=""><pre><code>{`
export default function BasicModal () {   
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
<Button variant="primary" onClick={handleShow}>
 Launch demo modal</Button>
<Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
    <Modal.Title as="h6">Modal title</Modal.Title>
    </Modal.Header>
    <Modal.Body>...</Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
        Close
    </Button>
    <Button variant="primary" onClick={handleClose}>
        Save Changes
    </Button>
    </Modal.Footer>
</Modal>
)}`}</code></pre></Collapse>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Static backdrop
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen2(!open2)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Button variant="primary" onClick={handleShow1}>
                                Launch static backdrop modal
                            </Button>

                            <Modal show={show1} onHide={handleClose1} backdrop="static" keyboard={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6">Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    I will not close if you click outside me. Don not even try to press
                                    escape key.
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose1}>
                                        Close
                                    </Button>
                                    <Button variant="primary">Understood</Button>
                                </Modal.Footer>
                            </Modal>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <Collapse in={open2} className=""><pre><code>{`export default function BasicModal () {   
const [show1, setShow1] = useState(false)

const handleClose1 = () => setShow1(false)
const handleShow1 = () => setShow1(true)
return(
<Button variant="primary" onClick={handleShow}>
 Launch static backdrop modal</Button>
<Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
    <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    I will not close if you click outside me. Don not even try to press
    escape key.
    </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
        Close
    </Button>
    <Button variant="primary">Understood</Button>
    </Modal.Footer>
</Modal>
)}`}</code></pre></Collapse>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Scrolling long content
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen3(!open3)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Button variant='primary' type="button" className="btn btn-primary" onClick={handleShow2}>
                                Scrolling long content
                            </Button>
                            <Modal show={show2} onHide={handleClose2} keyboard={false}>
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6">Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Libero
                                        ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                                        nisi
                                        ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                                        voluptatibus, ipsam quo est rerum modi quos expedita facere,
                                        ex
                                        tempore fuga similique ipsa blanditiis et accusamus
                                        temporibus
                                        commodi voluptas! Nobis veniam illo architecto expedita quam
                                        ratione quaerat omnis. In, recusandae eos! Pariatur,
                                        deleniti
                                        quis ad nemo ipsam officia temporibus, doloribus fuga
                                        asperiores
                                        ratione distinctio velit alias hic modi praesentium aperiam
                                        officiis eaque, accusamus aut. Accusantium assumenda,
                                        commodi
                                        nulla provident asperiores fugit inventore iste amet aut
                                        placeat
                                        consequatur reprehenderit. Ratione tenetur eligendi, quis
                                        aperiam dolores magni iusto distinctio voluptatibus minus a
                                        unde
                                        at! Consequatur voluptatum in eaque obcaecati, impedit
                                        accusantium ea soluta, excepturi, quasi quia commodi
                                        blanditiis?
                                        Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                                        consequuntur quod quo veniam? Labore dignissimos reiciendis
                                        accusamus recusandae est consequuntur iure.</p>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose2}>
                                        Close
                                    </Button>
                                    <Button variant="primary">Understood</Button>
                                </Modal.Footer>
                            </Modal>
                            <div className="modal fade" id="exampleModalScrollable" tabIndex={-1}
                                aria-labelledby="exampleModalScrollable" data-bs-keyboard="false"
                                aria-hidden="true">
                                <div className="modal-dialog modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h6 className="modal-title" id="staticBackdropLabel1">Modal title
                                            </h6>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                                Libero
                                                ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                                                nisi
                                                ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
                                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                                                voluptatibus, ipsam quo est rerum modi quos expedita facere,
                                                ex
                                                tempore fuga similique ipsa blanditiis et accusamus
                                                temporibus
                                                commodi voluptas! Nobis veniam illo architecto expedita quam
                                                ratione quaerat omnis. In, recusandae eos! Pariatur,
                                                deleniti
                                                quis ad nemo ipsam officia temporibus, doloribus fuga
                                                asperiores
                                                ratione distinctio velit alias hic modi praesentium aperiam
                                                officiis eaque, accusamus aut. Accusantium assumenda,
                                                commodi
                                                nulla provident asperiores fugit inventore iste amet aut
                                                placeat
                                                consequatur reprehenderit. Ratione tenetur eligendi, quis
                                                aperiam dolores magni iusto distinctio voluptatibus minus a
                                                unde
                                                at! Consequatur voluptatum in eaque obcaecati, impedit
                                                accusantium ea soluta, excepturi, quasi quia commodi
                                                blanditiis?
                                                Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                                                consequuntur quod quo veniam? Labore dignissimos reiciendis
                                                accusamus recusandae est consequuntur iure.</p>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <p>Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save
                                                Changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                            <Collapse in={open3} className="card-body"><pre><code>{`export default function BasicModal () {   
const [show1, setShow1] = useState(false)

const handleClose1 = () => setShow1(false)
const handleShow1 = () => setShow1(true)
return(
    <Button variant='primary' type="button" className="btn btn-primary" onClick={handleShow2}>
    Scrolling long content
    </Button>
    <Modal show={show2} onHide={handleClose2} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
        <Modal.Title as="h6">Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Libero
                        ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                        nisi
                        ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                        voluptatibus, ipsam quo est rerum modi quos expedita facere,
                        ex
                        tempore fuga similique ipsa blanditiis et accusamus
                        temporibus
                        commodi voluptas! Nobis veniam illo architecto expedita quam
                        ratione quaerat omnis. In, recusandae eos! Pariatur,
                        deleniti
                        quis ad nemo ipsam officia temporibus, doloribus fuga
                        asperiores
                        ratione distinctio velit alias hic modi praesentium aperiam
                        officiis eaque, accusamus aut. Accusantium assumenda,
                        commodi
                        nulla provident asperiores fugit inventore iste amet aut
                        placeat
                        consequatur reprehenderit. Ratione tenetur eligendi, quis
                        aperiam dolores magni iusto distinctio voluptatibus minus a
                        unde
                        at! Consequatur voluptatum in eaque obcaecati, impedit
                        accusantium ea soluta, excepturi, quasi quia commodi
                        blanditiis?
                        Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                        consequuntur quod quo veniam? Labore dignissimos reiciendis
                        accusamus recusandae est consequuntur iure.</p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p>Lorem ipsum dolor sit amet.</p>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose2}>
            Close
        </Button>
        <Button variant="primary">Understood</Button>
        </Modal.Footer>
    </Modal>
)}`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Vertically centered modal
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen4(!open4)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Button type="button" className="btn btn-primary" data-bs-toggle="modal" onClick={() => setModalShow(true)}
                                data-bs-target="#exampleModalScrollable2">
                                Vertically centered modal
                            </Button>
                            <Modal centered show={modalShow} onHide={() => setModalShow(false)} keyboard={false} className="modal fade">
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6">Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>This is Jerry.</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setModalShow(false)}>
                                        Close
                                    </Button>
                                    <Button variant="primary">Understood</Button>
                                </Modal.Footer>
                            </Modal>
                        </Card.Body>
                            <Collapse in={open4} className="card-body"><pre><code>{`export default function BasicModal () {   
const [modalShow, setModalShow] = useState(false);
return(
<Button type="button" className="btn btn-primary" 
onClick={() => setModalShow(true)}">
    Vertically centered modal
</Button>
<Modal centered show={modalShow} onHide={() => setModalShow(false)} 
keyboard={false} className="modal fade">
<Modal.Header closeButton>
<Modal.Title as="h6">Modal title</Modal.Title>
</Modal.Header>
<Modal.Body>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
 Libero ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
 nisi ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={() => setModalShow(false)}>
    Close
</Button>
<Button variant="primary">Understood</Button>
</Modal.Footer>
</Modal>
)}`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Vertical Centered Scrollable
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen5(!open5)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Button variant='primary' type="button" className="btn" onClick={() => setModalShow1(true)}>
                                Vertically centered scrollable modal
                            </Button>
                            <div className="modal fade" id="exampleModalScrollable3" tabIndex={-1}
                                aria-labelledby="exampleModalScrollable3" data-bs-keyboard="false"
                                aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h6 className="modal-title" id="staticBackdropLabel3">Modal title
                                            </h6>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <p>This is Jerry!</p>
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <p>Lorem ipsum dolor sit amet.</p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save
                                                Changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Modal centered show={modalShow1} onHide={() => setModalShow1(false)}
                                keyboard={false} className="modal fade">
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6">Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body> <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                                    voluptatibus, ipsam quo est rerum modi quos expedita facere,
                                    ex
                                    tempore fuga similique ipsa blanditiis et accusamus
                                    temporibus
                                    commodi voluptas! Nobis veniam illo architecto expedita quam
                                    ratione quaerat omnis. In, recusandae eos! Pariatur,
                                    deleniti
                                    quis ad nemo ipsam officia temporibus, doloribus fuga
                                    asperiores
                                    ratione distinctio velit alias hic modi praesentium aperiam
                                    officiis eaque, accusamus aut. Accusantium assumenda,
                                    commodi
                                    nulla provident asperiores fugit inventore iste amet aut
                                    placeat
                                    consequatur reprehenderit. Ratione tenetur eligendi, quis
                                    aperiam dolores magni iusto distinctio voluptatibus minus a
                                    unde
                                    at! Consequatur voluptatum in eaque obcaecati, impedit
                                    accusantium ea soluta, excepturi, quasi quia commodi
                                    blanditiis?
                                    Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                                    consequuntur quod quo veniam? Labore dignissimos reiciendis
                                    accusamus recusandae est consequuntur iure.</p>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setModalShow1(false)}>
                                        Close
                                    </Button>
                                    <Button variant="primary">Understood</Button>
                                </Modal.Footer>
                            </Modal>
                        </Card.Body>
                            <Collapse in={open5} className="card-body"><pre><code>{`export default function BasicModal () {   
const [modalShow, setModalShow] = useState(false);
return(
<Button type="button" className="btn btn-primary" 
onClick={() => setModalShow(true)}">
    Vertically centered modal
</Button>
<Modal centered show={modalShow} onHide={() => setModalShow(false)} 
keyboard={false} className="modal fade">
<Modal.Header closeButton>
<Modal.Title as="h6">Modal title</Modal.Title>
</Modal.Header>
<Modal.Body>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
 Libero ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
 nisi ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={() => setModalShow(false)}>
    Close
</Button>
<Button variant="primary">Understood</Button>
</Modal.Footer>
</Modal>
)}`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Tooltips and popovers
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen6(!open6)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Button variant='primary' type="button" className="" onClick={handleShow3}>
                                Launch demo modal
                            </Button>
                            <Modal show={show3} onHide={handleClose3} centered className='popover-modal'>
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6"> Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body> <h5>Popover in a modal</h5>
                                    <p> This
                                        <OverlayTrigger trigger="click"
                                            placement='right'
                                            // autoclose='true'
                                            overlay={
                                                <Popover placement='bottom'>
                                                    <Popover.Header> Popover bottom</Popover.Header>
                                                    <Popover.Body>
                                                        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
                                                    </Popover.Body>
                                                </Popover>
                                            }>
                                            <Button variant="secondary" className="me-2 ms-2">button</Button>
                                        </OverlayTrigger>
                                        triggers a popover on click.
                                    </p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose3}>
                                        Close
                                    </Button>
                                    <Button variant="primary">
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <div className="modal fade" id="exampleModalScrollable4" tabIndex={-1}
                                aria-labelledby="exampleModalScrollable4" data-bs-keyboard="false"
                                aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h6 className="modal-title" id="staticBackdropLabel4">Modal title
                                            </h6>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <h5>Popover in a modal</h5>
                                            <p>This <Link to="#" role="button" className="btn btn-secondary"
                                                data-bs-toggle="popover" title="Popover title"
                                                data-bs-content="Popover body content is set in this attribute.">button</Link>
                                                triggers a popover on click.</p>
                                            <hr />
                                            <h5>Tooltips in a modal</h5>
                                            <p><Link to="#" className="text-primary" data-bs-toggle="tooltip" title="Tooltip">This
                                                link</Link> and <Link to="#" className="text-primary" data-bs-toggle="tooltip"
                                                    title="Tooltip">that link</Link> have tooltips on hover.
                                            </p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save
                                                Changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                            <Collapse in={open6} className="card-body"><pre><code>{`export default function BasicModal () {   
const [show3, setShow3] = useState(false);
const handleClose3 = () => setShow3(false);
const handleShow3 = () => setShow3(true);
return(
<Button variant='primary' type="button" className="" onClick={handleShow3}>
Launch demo modal</Button>
<Modal show={show3} onHide={handleClose3} centered className='popover-modal'>
<Modal.Header closeButton>
<Modal.Title as="h6"> Modal title</Modal.Title>
</Modal.Header>
<Modal.Body> <h5>Popover in a modal</h5>
<p> This
    <OverlayTrigger trigger="click"
    placement='right'
    // autoclose='true'
    overlay={
        <Popover placement='bottom'>
        <Popover.Header> Popover bottom</Popover.Header>
        <Popover.Body>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
        </Popover.Body>
        </Popover>
    }>
    <Button variant="secondary" className="me-2 ms-2">button</Button>
    </OverlayTrigger>
    triggers a popover on click.
</p>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleClose3}>
    Close
</Button>
<Button variant="primary">
    Save Changes
</Button>
</Modal.Footer>
</Modal>
)}`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Using the grid
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen7(!open7)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Button variant='' type="button" className="btn btn-primary" onClick={() => setModalShow2(true)}>
                                Launch demo modal
                            </Button>
                            <Modal show={modalShow2} onHide={() => setModalShow2(false)} centered>
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6"> Modal title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Container fluid>
                                        <Row>
                                            <Col md={4} className=" bg-light border">.col-md-4</Col>
                                            <Col md={4} className=" ms-auto bg-light border">.col-md-4
                                                .ms-auto</Col>
                                        </Row>
                                        <Row className="row mt-3">
                                            <Col md={3} className=" ms-auto bg-light border">.col-md-3
                                                .ms-auto</Col>
                                            <Col md={2} className=" ms-auto bg-light border">.col-md-2
                                                .ms-auto</Col>
                                        </Row>
                                        <Row className="row mt-3">
                                            <Col md={6} className=" ms-auto bg-light border">.col-md-6
                                                .ms-auto</Col>
                                        </Row>
                                        <Row className="row mt-3">
                                            <Col sm={9} className=" bg-light border">
                                                Level 1: .col-sm-9
                                                <Row>
                                                    <Col sm={6} className="col-8 bg-light border">
                                                        Level 2: .col-8 .col-sm-6
                                                    </Col>
                                                    <Col sm={6} className="col-4 bg-light border">
                                                        Level 2: .col-4 .col-sm-6
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setModalShow2(false)}>
                                        Close
                                    </Button>
                                    <Button variant="primary">
                                        Save Changes
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <div className="modal fade" id="exampleModalScrollable5" tabIndex={-1}
                                aria-labelledby="exampleModalScrollable5" data-bs-keyboard="false"
                                aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h6 className="modal-title" id="staticBackdropLabel5">Modal title
                                            </h6>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close">
                                            </button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="container-fluid">
                                                <Row>
                                                    <Col md={4} className=" bg-light border">.col-md-4</Col>
                                                    <Col md={4} className=" ms-auto bg-light border">.col-md-4
                                                        .ms-auto</Col>
                                                </Row>
                                                <Row className="row mt-3">
                                                    <Col md={3} className=" ms-auto bg-light border">.col-md-3
                                                        .ms-auto</Col>
                                                    <Col md={2} className=" ms-auto bg-light border">.col-md-2
                                                        .ms-auto</Col>
                                                </Row>
                                                <Row className="row mt-3">
                                                    <Col md={6} className=" ms-auto bg-light border">.col-md-6
                                                        .ms-auto</Col>
                                                </Row>
                                                <Row className="row mt-3">
                                                    <Col sm={9} className=" bg-light border">
                                                        Level 1: .col-sm-9
                                                        <Row>
                                                            <Col sm={6} className="col-8 bg-light border">
                                                                Level 2: .col-8 .col-sm-6
                                                            </Col>
                                                            <Col sm={6} className="col-4 bg-light border">
                                                                Level 2: .col-4 .col-sm-6
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Save
                                                Changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                            <Collapse in={open7} className="card-body"><pre><code>{`export default function BasicModal () {   
const [modalShow2, setModalShow2] = useState(false)
return(
<Button variant='primary' type="button" className="" onClick={handleShow3}>
Launch demo modal</Button>
<Modal show={modalShow2} onHide={() => setModalShow2(false)} centered>
 <Modal.Header closeButton>
 <Modal.Title as="h6"> Modal title</Modal.Title>
 </Modal.Header>
 <Modal.Body> 
     <Container fluid>
<Row>
    <Col md={4} className=" bg-light border">.col-md-4</Col>
    <Col md={4} className=" ms-auto bg-light border">.col-md-4
        .ms-auto</Col>
</Row>
<Row className="row mt-3">
    <Col md={3} className=" ms-auto bg-light border">.col-md-3
        .ms-auto</Col>
    <Col md={2} className=" ms-auto bg-light border">.col-md-2
        .ms-auto</Col>
</Row>
<Row className="row mt-3">
    <Col md={6} className=" ms-auto bg-light border">.col-md-6
        .ms-auto</Col>
</Row>
<Row className="row mt-3">
    <Col sm={9} className=" bg-light border">
        Level 1: .col-sm-9
        <Row>
<Col sm={6} className="col-8 bg-light border">
        Level 2: .col-8 .col-sm-6
</Col>
<Col sm={6} className="col-4 bg-light border">
     Level 2: .col-4 .col-sm-6
                         </Col>
                     </Row>
                 </Col>
             </Row>
         </Container>
 </Modal.Body>
 <Modal.Footer>
 <Button variant="secondary" onClick={() => setModalShow2(false)}>
     Close
 </Button>
 <Button variant="primary">
     Save Changes
 </Button>
 </Modal.Footer>
</Modal>
)}`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Toggle between modals
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen8(!open8)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open8}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Button variant='primary' className="btn" onClick={handleShowt1}>Open first modal
                            </Button>
                            <Modal id="m1" className="fade" aria-hidden="true"
                                aria-labelledby="contained-modal-title-vcenter" centered show={showt1} onHide={handleCloset1} >
                                <Modal.Header closeButton>
                                    <Modal.Title id="exampleModalToggleLabel">Modal 1</Modal.Title>

                                </Modal.Header>
                                <Modal.Body>
                                    Show a second modal and hide this one with the button below. </Modal.Body>
                                <Modal.Footer>
                                    <Button className="btn btn-primary" id="btn1" onClick={Handleclose1}>Open second modal</Button>
                                </Modal.Footer>

                            </Modal>

                            <Modal id="m2" className='fade' aria-labelledby="contained-modal-title-vcenter"
                                centered show={showt2} onHide={handleCloset2}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal 2</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Hide this modal and show the first with the button below.</Modal.Body>
                                <Modal.Footer>
                                    <Button className="btn btn-primary"
                                        onClick={Handleclose2}>Back to first</Button>
                                </Modal.Footer>

                            </Modal>
                            <div className="modal fade" id="exampleModalToggle"
                                aria-labelledby="exampleModalToggleLabel" tabIndex={-1} aria-hidden="true"
                                style={{ display: "none" }}>
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h6 className="modal-title" id="exampleModalToggleLabel">Modal 1
                                            </h6>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            Show a second modal and hide this one with the button below.
                                        </div>
                                        <div className="modal-footer">
                                            <button className="btn btn-primary"
                                                data-bs-target="#exampleModalToggle2"
                                                data-bs-toggle="modal">Open second modal</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="exampleModalToggle2"
                                aria-labelledby="exampleModalToggleLabel2" tabIndex={-1} aria-hidden="true"
                                style={{ display: "none" }}>
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h6 className="modal-title" id="exampleModalToggleLabel2">Modal 2
                                            </h6>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            Hide this modal and show the first with the button below.
                                        </div>
                                        <div className="modal-footer">
                                            <button className="btn btn-primary" data-bs-target="#exampleModalToggle"
                                                data-bs-toggle="modal">Back to first</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                            <Collapse in={open8} className="card-body"><pre><code>{`export default function BasicModal () {   
const [show3, setShow3] = useState(false);
const handleClose3 = () => setShow3(false);
const handleShow3 = () => setShow3(true);  //  Twomodals
const [showt1, setShowt1] = useState(false)
const [showt2, setShowt2] = useState(false)
const handleCloset1 = () => setShowt1(false)
const handleShowt1 = () => setShowt1(true)
const handleCloset2 = () => setShowt2(false)
const handleShowt2 = () => setShowt2(true)

const Handleclose1 = () => {
  setShowt1(false)
  setShowt2(true)
}
const Handleclose2 = () => {
  setShowt2(false)
  setShowt1(true)
}
return(
    <Button variant='primary' className="btn" onClick={handleShowt1}>Open first modal
    </Button>
    <Modal id="m1" className="fade" aria-hidden="true"
    aria-labelledby="contained-modal-title-vcenter" centered show={showt1} onHide={handleCloset1} >
    <Modal.Header closeButton>
        <Modal.Title id="exampleModalToggleLabel">Modal 1</Modal.Title>

    </Modal.Header>
    <Modal.Body>
        Show a second modal and hide this one with the button below. </Modal.Body>
    <Modal.Footer>
        <Button className="btn btn-primary" id="btn1" onClick={Handleclose1}>Open second modal</Button>
    </Modal.Footer>

    </Modal>

    <Modal id="m2" className='fade' aria-labelledby="contained-modal-title-vcenter"
    centered show={showt2} onHide={handleCloset2}>
    <Modal.Header closeButton>
        <Modal.Title>Modal 2</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        Hide this modal and show the first with the button below.</Modal.Body>
    <Modal.Footer>
        <Button className="btn btn-primary"
        onClick={Handleclose2}>Back to first</Button>
    </Modal.Footer>

    </Modal>
)}`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Optional sizes
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen9(!open9)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open9}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Button variant='primary' type="button" className="btn m-1" onClick={() => setXlShow(true)}
                                data-bs-target="#exampleModalXl">Extra large modal</Button>
                            <Button variant='primary-light' type="button" className="btn  m-1" onClick={() => setLgShow(true)}
                                data-bs-target="#exampleModalLg">Large modal</Button>
                            <Button variant='primary-light' type="button" className="btn  m-1" onClick={() => setSmShow(true)}
                                data-bs-target="#exampleModalSm">Small modal</Button>
                            <div className="modal fade" id="exampleModalXl" tabIndex={-1}
                                aria-labelledby="exampleModalXlLabel" style={{ display: "none" }} aria-hidden="true">
                                <div className="modal-dialog modal-xl">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h6 className="modal-title" id="exampleModalXlLabel">Extra large
                                                modal</h6>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            ...
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="exampleModalLg" tabIndex={-1}
                                aria-labelledby="exampleModalLgLabel" aria-hidden="true">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h6 className="modal-title" id="exampleModalLgLabel">Large modal
                                            </h6>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            ...
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id="exampleModalSm" tabIndex={-1}
                                aria-labelledby="exampleModalSmLabel" aria-hidden="true">
                                <div className="modal-dialog modal-sm">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h6 className="modal-title" id="exampleModalSmLabel">Small modal
                                            </h6>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            ...
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Modal size="xl" show={xlShow} onHide={() => setXlShow(false)}
                                aria-labelledby="example-modal-sizes-title-sm">
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6" id="example-modal-sizes-title-sm">
                                        Extra large Modal
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                            </Modal>
                            <Modal size="lg" show={lgShow} onHide={() => setLgShow(false)} aria-labelledby="example-modal-sizes-title-lg">
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6" id="example-modal-sizes-title-lg">
                                        Large Modal
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                            </Modal>
                            <Modal size="sm" show={smShow} onHide={() => setSmShow(false)}
                                aria-labelledby="example-modal-sizes-title-sm">
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6" id="example-modal-sizes-title-sm">
                                        Small Modal
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>...</Modal.Body>
                            </Modal>
                        </Card.Body>
                            <Collapse in={open9} className="card-body"><pre><code>{`export default function BasicModal () {   
// small modal
const [smShow, setSmShow] = useState(false);

//large modal
const [lgShow, setLgShow] = useState(false);

//large modal
const [xlShow, setXlShow] = useState(false);
return(
    <Modal size="xl" show={xlShow} onHide={() => setXlShow(false)}
    aria-labelledby="example-modal-sizes-title-sm">
    <Modal.Header closeButton>
    <Modal.Title as="h6" id="example-modal-sizes-title-sm">
        Extra large Modal
    </Modal.Title>
    </Modal.Header>
    <Modal.Body>...</Modal.Body>
</Modal>
<Modal size="lg" show={lgShow} onHide={() => 
setLgShow(false)}aria-labelledby="example-modal-sizes-title-lg">
    <Modal.Header closeButton>
    <Modal.Title as="h6" id="example-modal-sizes-title-lg">
        Large Modal
    </Modal.Title>
    </Modal.Header>
    <Modal.Body>...</Modal.Body>
</Modal>
<Modal size="sm" show={smShow} onHide={() => setSmShow(false)}
    aria-labelledby="example-modal-sizes-title-sm">
    <Modal.Header closeButton>
    <Modal.Title as="h6" id="example-modal-sizes-title-sm">
        Small Modal
    </Modal.Title>
    </Modal.Header>
    <Modal.Body>...</Modal.Body>
</Modal>
)}`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Fullscreen modal
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen10(!open10)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open10}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {values.map((v, idx) => (
                                <Button
                                    key={idx}
                                    className={`me-2 mb-2 btn-${colors[idx % colors.length]}`}
                                    onClick={() => handleShowf(v, colors[idx % colors.length])}
                                >
                                    Full screen {typeof v === 'string' && `below ${v.split('-')[0]}`}
                                </Button>
                            ))}
                            <Modal show={showf} fullscreen={fullscreen} onHide={() => setShowf(false)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>Modal body content</Modal.Body>
                            </Modal>
                        </Card.Body>
                            <Collapse in={open10} className="card-body"><pre><code>{`export default function BasicModal () {   
  //fullscreen modals
  const values =  [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down',];
  const colors = ['primary', 'secondary', 'warning', 'info', 'success', 'danger'];
  const [fullscreen, setFullscreen] = useState<any>(true);
  const [showf, setShowf] = useState(false);

  function handleShowf(breakpoint:any, color:any) {
    setFullscreen(breakpoint);
    setShowf(true);
  }
return(
    {values.map((v, idx) => (
        <Button
        key={idx}
        onClick={() => handleShowf(v, colors[idx % colors.length])}
        >
        </Button>
    ))}
    <Modal show={showf} fullscreen={fullscreen} onHide={() => setShowf(false)}>
        <Modal.Header closeButton>
        <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal body content</Modal.Body>
    </Modal>
)}`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Varying modal content
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen11(!open11)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open11}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Button variant='primary' type="button" className="btn  mb-1 me-2" onClick={handleShow4}>Open modal for
                                @mdo</Button>
                            <Modal show={show4} onHide={handleClose4}>
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6">Modal heading
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Recipient:</Form.Label>
                                            <Form.Control type="email" placeholder="@mdo" autoFocus />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="exampleForm.ControlTextarea1"
                                        >
                                            <Form.Label>Message:</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose4}>
                                        Close
                                    </Button>
                                    <Button variant="primary">Send message</Button>
                                </Modal.Footer>
                            </Modal>
                            <Button variant='secondary' type="button" className="btn mb-1 me-2" onClick={handleShow5}>Open modal for
                                @fat</Button>
                            <Modal show={show5} onHide={handleClose5}>
                                <Modal.Header closeButton>
                                    <Modal.Title as="h6">Modal heading
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Recipient:</Form.Label>
                                            <Form.Control type="email" placeholder="@fat" autoFocus />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="exampleForm.ControlTextarea1"
                                        >
                                            <Form.Label>Message:</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose5}>
                                        Close
                                    </Button>
                                    <Button variant="primary">Send message</Button>
                                </Modal.Footer>
                            </Modal>
                            <Button variant='light' type="button" className="btn btn-light mb-1" onClick={handleShow6}>Open modal for
                                @getbootstrap</Button>
                            <Modal show={show6} onHide={handleClose6}>
                                <Modal.Header closeButton >
                                    <Modal.Title as="h6">Modal heading</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Recipient:</Form.Label>
                                            <Form.Control
                                                type="email"
                                                placeholder=" @getbootstrap"
                                                autoFocus
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="exampleForm.ControlTextarea1"
                                        >
                                            <Form.Label>Message:</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose6}>
                                        Close
                                    </Button>
                                    <Button variant="primary">Send message</Button>
                                </Modal.Footer>
                            </Modal>
                            <div className="modal fade" id="formmodal" tabIndex={-1}
                                aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h6 className="modal-title" id="exampleModalLabel">New message</h6>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <form>
                                                <div className="mb-3">
                                                    <label htmlFor="recipient-name"
                                                        className="col-form-label">Recipient:</label>
                                                    <input type="text" className="form-control" id="recipient-name" />
                                                </div>
                                                <div className="mb-3">
                                                    <label htmlFor="message-text"
                                                        className="col-form-label">Message:</label>
                                                    <textarea className="form-control" id="message-text"></textarea>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Send
                                                message</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card.Body> 
                        <Collapse in={open11} className="card-body"><pre><code>{`export default function BasicModal () {   
const [show6, setShow6] = useState(false);

const handleClose6 = () => setShow6(false);
const handleShow6 = () => setShow6(true);
return(
<Button variant='light' type="button" 
className="btn btn-light mb-1" onClick={handleShow6}>Open modal for
@getbootstrap</Button>
<Modal show={show6} onHide={handleClose6}>
        <Modal.Header closeButton>
        <Modal.Title as="h6>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
<Form.Label>Recipient:</Form.Label>
<Form.Control
    type="email"
    placeholder=" @getbootstrap"
    autoFocus
/>
</Form.Group>
<Form.Group
className="mb-3"
controlId="exampleForm.ControlTextarea1">
<Form.Label>Message:</Form.Label>
<Form.Control as="textarea" rows={3} />
</Form.Group>
</Form>
</Modal.Body>
<Modal.Footer>
<Button variant="secondary" onClick={handleClose6}>
    Close
</Button>
<Button variant="primary">Send message</Button>
</Modal.Footer>
</Modal>
)}`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Modal Animation Effects
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen12(!open12)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open12}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row className="row-sm">
                                <Col sm={6} md={4} xl={3} className="col-sm-6 col-md-4 col-xl-3">
                                    <Link to="#" className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("Basic")}>Zoom</Link>
                                    <Rodal onClose={hide} visible={animation1} animation='Scale' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("Basic"); }}>
                                                <i className='fe fe-x ms-auto'></i>
                                            </span>
                                            </Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary" onClick={() => viewDemoClose1("Basic")}>Save Changes</Button>
                                            <Button className='' variant="secondary" onClick={() => viewDemoClose1("Basic")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                                <Col sm={6} md={4} xl={3} className="mg-t-20 mg-sm-t-0">
                                    <Link to="#" className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("show2")}>Fade</Link>
                                    <Rodal onClose={hide} visible={animation2} animation='fade' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show2"); }}><i className='fe fe-x ms-auto'></i></span></Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary" onClick={() => viewDemoClose1("show2")}>Save Changes</Button>
                                            <Button variant="secondary" onClick={() => viewDemoClose1("show2")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                                <Col sm={6} md={4} xl={3} className="mg-t-20 mg-md-t-0">
                                    <Link to="#" className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("show3")}>Flip</Link>
                                    <Rodal onClose={hide} visible={animation3} animation='flip' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show3"); }}><i className='fe fe-x ms-auto'></i></span></Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary" onClick={() => viewDemoClose1("show3")}>Save Changes</Button>
                                            <Button variant="secondary" onClick={() => viewDemoClose1("show3")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                                <Col sm={6} md={4} xl={3} className="mg-t-20 mg-xl-t-0">
                                    <Link to="#" className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("show4")}>Door</Link>
                                    <Rodal onClose={hide} visible={animation4} animation='door' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show4"); }}><i className='fe fe-x ms-auto'></i></span></Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary" onClick={() => viewDemoClose1("show4")}>Save Changes</Button>
                                            <Button variant="secondary" onClick={() => viewDemoClose1("show4")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                                <Col sm={6} md={4} xl={3} className="mg-t-20">
                                    <Link to="#" className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("show5")}>Rotate</Link>
                                    <Rodal onClose={hide} visible={animation5} animation='rotate' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show5"); }}><i className='fe fe-x ms-auto'></i></span></Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary" onClick={() => viewDemoClose1("show5")}>Save Changes</Button>
                                            <Button variant="secondary" onClick={() => viewDemoClose1("show5")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                                <Col sm={6} md={4} xl={3} className="mg-t-20">
                                    <Link to="#" className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("show6")}>Slide-Up</Link>
                                    <Rodal onClose={hide} visible={animation6} animation='slideUp' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show6"); }}><i className='fe fe-x ms-auto'></i></span></Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary" onClick={() => viewDemoClose1("show6")}>Save Changes</Button>
                                            <Button variant="secondary" onClick={() => viewDemoClose1("show6")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                                <Col sm={6} md={4} xl={3} className="mg-t-20">
                                    <Link to="#" className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("show7")}>slide-Down</Link>
                                    <Rodal onClose={hide} visible={animation7} animation='slideDown' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show7"); }}><i className='fe fe-x ms-auto'></i></span></Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary" >Save Changes</Button>
                                            <Button variant="secondary" onClick={() => viewDemoClose1("show7")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                                <Col sm={6} md={4} xl={3} className="mg-t-20">
                                    <Link to="#" className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("show8")}>slide-Left</Link>
                                    <Rodal onClose={hide} visible={animation8} animation='slideLeft' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show8"); }}><i className='fe fe-x ms-auto'></i></span></Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary" onClick={() => viewDemoClose1("show8")}>Save Changes</Button>
                                            <Button variant="secondary" onClick={() => viewDemoClose1("show8")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                                <Col sm={6} md={4} xl={3} className="mg-t-20">
                                    <Link to="#" className="modal-effect btn btn-primary btn-block mb-3" onClick={() => viewDemoShow1("show9")}>slide-Right</Link>
                                    <Rodal onClose={hide} visible={animation9} animation='slideRight' height={330}>
                                        <h6 className='modal-header'>Message Preview
                                            <Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("show9"); }}><i className='fe fe-x ms-auto'></i></span></Link>
                                        </h6>
                                        <div className='modal-body'>
                                            <h6>Why We Use Electoral College, Not Popular Vote</h6>
                                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</div>
                                        <div className='modal-footer'>
                                            <Button className="me-2" variant="primary" onClick={() => viewDemoClose1("show9")}>Save Changes</Button>
                                            <Button variant="secondary" onClick={() => viewDemoClose1("show9")}>Close</Button>
                                        </div>
                                    </Rodal>
                                </Col>
                            </Row>
                        </Card.Body>
                        <Collapse in={open12} className="card-body">
                            <pre>
                                <code>
                                    {`
export const Modal = ()= {
  const [animation1, setanimation1] = useState(false);

  let viewDemoShow1 = (modal) => {
    switch (modal) {
      case "Basic":
        setanimation1(true)
        break;
    }
  let viewDemoClose1 = (modal) => {
      switch (modal) {
        case "Basic":
          setanimation1(false)
          break;
  return(
    <Col sm={6} md={4} xl={3} className="col-sm-6 col-md-4 col-xl-3">
    <Link to="#" className="modal-effect btn btn-primary btn-block"  onClick={() => viewDemoShow1("Basic")}>Zoom</Link>
    <Rodal onClose={hide} visible={animation1} animation='Scale' height={280} onClick={() => viewDemoClose1("Basic")} >
      <div className='modal-header'>Modal Header
        <Link to='#'><span className="d-flex ms-auto text-dark" onClick={() => { viewDemoClose1("Basic") }}><i className='fe fe-x ms-auto'></i></span></Link>
      </div>
      <div className='modal-body'>
        <h6>Modal Body</h6>
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</div>
      <div className='modal-footer'>
        <Button className="me-2" variant="primary" onClick={() => viewDemoClose1("Basic")}>Save Changes</Button>
        <Button variant="secondary" onClick={() => viewDemoClose1("Basic")}>Close</Button>
      </div>
    </Rodal>
  </Col>
   )
  };
`}
                                </code>
                            </pre>
                        </Collapse>
                    </Card>
                </Col>
            </Row>
            <h6 className="mb-3">Close Buttons:</h6>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Basic Close
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen13(!open13)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open13}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Button variant='' type="button" className="btn-close" aria-label="Close"></Button>
                        </Card.Body>
                            <Collapse in={open13} className="card-body"><pre><code>{`<Button variant='' type="button" 
className="btn-close" aria-label="Close"></Button>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Disabel state
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen14(!open14)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open14}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Button variant='' type="button" className="btn-close" disabled aria-label="Close"></Button>
                        </Card.Body>
                            <Collapse in={open14} className="card-body"><pre><code>{`<Button variant='' type="button"
 className="btn-close" disabled aria-label="Close"></Button>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card overflow-hidden">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                White variant
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen15(!open15)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open15}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="bg-black">
                            <CloseButton type="button" className="btn-close btn-close-white" aria-label="Close"></CloseButton>
                            <CloseButton type="button" className="btn-close btn-close-white" disabled
                                aria-label="Close"></CloseButton>
                        </Card.Body>
                            <Collapse in={open15} className="card-body"><pre><code>{`<Button variant='' type="button" 
className="btn-close" disabled aria-label="Close"></Button>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Modalscloses;
