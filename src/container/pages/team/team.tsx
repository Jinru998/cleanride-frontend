import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Dropdown, Form, Modal, OverlayTrigger, Pagination, Row, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Teamuidata } from './teamdata';
import face1 from "../../../assets/images/faces/1.jpg";
import face6 from "../../../assets/images/faces/6.jpg";
import face3 from "../../../assets/images/faces/3.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import face12 from "../../../assets/images/faces/12.jpg";
import face7 from "../../../assets/images/faces/7.jpg";
import face10 from "../../../assets/images/faces/10.jpg";
import face2 from "../../../assets/images/faces/2.jpg";
import face14 from "../../../assets/images/faces/14.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import face13 from "../../../assets/images/faces/13.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face16 from "../../../assets/images/faces/16.jpg";
import face9 from "../../../assets/images/faces/9.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import PerfectScrollbar from 'react-perfect-scrollbar';

interface TeamProps { }

const Team: FC<TeamProps> = () => {
    // for User search function
    const [Data, setData] = useState(Teamuidata);

    const userdata: any = [];

    const myfunction = (idx: any) => {
        let Data;
        for (Data of Teamuidata) {
            if (Data.name[0] == " ") {
                Data.name = Data.name.trim();
            }
            if (Data.name.toLowerCase().includes(idx.toLowerCase())) {
                if (Data.name.toLowerCase().startsWith(idx.toLowerCase())) {
                    userdata.push(Data);
                }
            }

        }
        setData(userdata);
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    return (
        <Fragment>
            <div className="row mt-4">
                <Col xl={9}>
                    <div className="team-members" id="team-members">
                        <Row>
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Body>
                                        <div className="team-header">
                                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                                <div className="h5 fw-semibold mb-0">Team</div>
                                                <div className="d-flex align-items-center">
                                                    <div className="input-group">
                                                        <Form.Control type="text" className="form-control bg-light border-0"
                                                            placeholder="Search Person Name" onChange={(ele) => { myfunction(ele.target.value); }} />
                                                        <Button variant='' className="btn btn-light" type="button" id="search-team-member">
                                                            <i className="ri-search-line text-muted"></i></Button>
                                                    </div>
                                                    <Dropdown className="ms-2">
                                                        <Dropdown.Toggle variant='' className="btn btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="ti ti-dots-vertical"></i>
                                                        </Dropdown.Toggle>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item href="#">Delete Team</Dropdown.Item>
                                                            <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                            <Dropdown.Item href="#">Add Member</Dropdown.Item>
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            {Data.map((idx) => (
                                <Col xxl={4} xl={6} lg={6} md={6} sm={12} key={Math.random()}>
                                    <Card className="custom-card team-member-card">
                                        <div className="teammember-cover-image">
                                            <img src={idx.src1} className="card-img-top" alt="..." />
                                            <span className="avatar avatar-xl avatar-rounded">
                                                <img src={idx.src2} alt="" />
                                            </span>
                                            <Link to="#" className={`team-member-star text-${idx.class}`}>
                                                <i className="ri-star-fill fs-16"></i>
                                            </Link>
                                        </div>
                                        <Card.Body className="p-0">
                                            <div className="d-flex flex-wrap align-item-center mt-sm-0 mt-5 justify-content-between border-bottom border-block-end-dashed p-3">
                                                <div className="team-member-details flex-fill">
                                                    <p className="mb-0 fw-semibold fs-16 text-truncate">
                                                        <Link to="#">{idx.name}</Link>
                                                    </p>
                                                    <p className="mb-0 fs-12 text-muted text-truncate">{idx.name}</p>
                                                </div>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant='' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button">
                                                        <i className="ti ti-dots-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#">Move To</Dropdown.Item>
                                                        <Dropdown.Item href="#">Edit</Dropdown.Item>
                                                        <Dropdown.Item href="#">Remove</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                            <div className="team-member-stats d-sm-flex align-items-center justify-content-evenly">
                                                <div className="text-center p-3">
                                                    <p className="fw-semibold mb-0">Member Since</p>
                                                    <span className="text-muted fs-12">{idx.text1}</span>
                                                </div>
                                                <div className="text-center p-3">
                                                    <p className="fw-semibold mb-0">Projects</p>
                                                    <span className="text-muted fs-12">{idx.text2}</span>
                                                </div>
                                                <div className="text-center p-3">
                                                    <p className="fw-semibold mb-0">Position</p>
                                                    <span className="text-muted fs-12">{idx.text3}</span>
                                                </div>
                                            </div>
                                        </Card.Body>
                                        <Card.Footer className="border-block-start-dashed text-center">
                                            <div className="btn-list">
                                                <div className="btn-list">
                                                    <Button variant='light' className="btn btn-sm btn-icon  btn-wave waves-effect waves-light">
                                                        <i className="ri-facebook-line fw-bold"></i>
                                                    </Button>
                                                    <Button variant='secondary-light' className="btn btn-sm btn-icon  btn-wave waves-effect waves-light">
                                                        <i className="ri-twitter-line fw-bold"></i>
                                                    </Button>
                                                    <Button variant='warning-light' className="btn btn-sm btn-icon  btn-wave waves-effect waves-light">
                                                        <i className="ri-instagram-line fw-bold"></i>
                                                    </Button>
                                                    <Button variant='success-light' className="btn btn-sm btn-icon  btn-wave waves-effect waves-light">
                                                        <i className="ri-github-line fw-bold"></i>
                                                    </Button>
                                                    <Button variant='danger-light' className="btn btn-sm btn-icon  btn-wave waves-effect waves-light">
                                                        <i className="ri-youtube-line fw-bold"></i>
                                                    </Button>
                                                </div>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            ))}
                            <nav aria-label="...">
                                <Pagination className="justify-content-end">
                                    <Pagination.Item disabled href="#">Previous</Pagination.Item>
                                    <Pagination.Item href="#">1</Pagination.Item>
                                    <Pagination.Item active href="#">2</Pagination.Item>
                                    <Pagination.Item href="#">3</Pagination.Item>
                                    <Pagination.Item href="#">Next </Pagination.Item>
                                </Pagination>
                            </nav>
                        </Row>
                    </div>
                </Col>
                <Col xl={3}>
                    <div className="team-groups">
                        <Card className="custom-card">
                            <Card.Header className="card-header d-flex align-items-center justify-content-between">
                                <h6 className="fw-semibold mb-0">All Teams</h6>
                                <div>
                                    <Button variant='' className="btn btn-sm btn-primary-light" onClick={handleShow}>Create Team<i className="ri-add-line ms-1 align-middle"></i></Button>
                                    <Modal centered show={show} onHide={handleClose} className="modal fade" id="create-team" tabIndex={-1} aria-labelledby="create-teamLabel" aria-hidden="true">

                                        <Modal.Header closeButton>
                                            <h6 className="modal-title" id="create-teamLabel">Create Team</h6>
                                        </Modal.Header>
                                        <Modal.Body className="px-4">
                                            <div className="row gy-3">
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="team-name" className="form-label">Team Name</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="team-name" placeholder="Enter Name" />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label className="form-label">Maximum Team Limit</Form.Label>
                                                    <select className="form-control" data-trigger name="choices-single-default" id="choices-single-default">
                                                        <option value="10"
                                                        //  selected
                                                        >10</option>
                                                        <option value="20">20</option>
                                                        <option value="30">30</option>
                                                    </select>
                                                </Col>
                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant='' type="button" className="btn btn-sm btn-light" data-bs-dismiss="modal">Cancel</Button>
                                            <Button variant='' type="button" className="btn btn-sm btn-primary">Create</Button>
                                        </Modal.Footer>
                                    </Modal>
                                </div>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <Modal centered show={show1} onHide={handleClose1} className="modal fade" id="create-teamui-mem"
                                    tabIndex={-1}> <Modal.Header closeButton className="modal-header">
                                        <h6 className="modal-title" id="create-teamuiLabel">Add Member</h6>
                                    </Modal.Header>
                                    <Modal.Body className="px-4">
                                        <div className="row">
                                            <Col xl={12}>
                                                <Form.Label htmlFor="team-name3" className="form-label">Name</Form.Label>
                                                <Form.Control type="text" className="form-control" id="team-name3" placeholder="Enter Name" />
                                            </Col>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant='light' type="button" className="btn btn-sm">Cancel</Button>
                                        <Button variant='primary' type="button" className="btn btn-sm">Add</Button>
                                    </Modal.Footer>
                                </Modal>
                                <PerfectScrollbar>
                                    <div className="teams-nav" id="teams-nav">
                                        <ul className="list-unstyled mb-0 mt-2">
                                            <li className="pb-0">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="fs-10 fw-semibold mb-2 text-muted">TEAM UI</div>
                                                    <div data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add Member">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add Member</Tooltip>}>
                                                            <Button variant='success-light' className="btn btn-icon btn-sm  btn-wave" onClick={handleShow1}>
                                                                <i className="ri-add-line"></i></Button>
                                                        </OverlayTrigger>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 d-flex align-items-center">
                                                            <span className="avatar avatar-sm avatar-rounded online">
                                                                <img src={face3} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span>Angelica Hale</span>
                                                        </div>
                                                        <div>
                                                            <span className="fs-10 fw-semibold text-muted">

                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 d-flex align-items-center">
                                                            <span className="avatar avatar-sm avatar-rounded offline">
                                                                <img src={face5} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span>Mona Magore</span>
                                                        </div>
                                                        <div>
                                                            <span className="fs-10 fw-semibold text-muted">
                                                                8 min
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 d-flex align-items-center">
                                                            <span className="avatar avatar-sm avatar-rounded online">
                                                                <img src={face15} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span>Mark Wains</span>
                                                        </div>
                                                        <div>
                                                            <span className="fs-10 fw-semibold text-muted">

                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 d-flex align-items-center">
                                                            <span className="avatar avatar-sm avatar-rounded online">
                                                                <img src={face12} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span>Alex Carey</span>
                                                        </div>
                                                        <div>
                                                            <span className="fs-10 fw-semibold text-muted">

                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 d-flex align-items-center">
                                                            <span className="avatar avatar-sm avatar-rounded offline">
                                                                <img src={face7} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span>Monika Karen</span>
                                                        </div>
                                                        <div>
                                                            <span className="fs-10 fw-semibold text-muted">
                                                                24 mins
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="pb-0">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="fs-10 fw-semibold mb-2 text-muted">TEAM REACT</div>
                                                    <div data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add Member">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add Member</Tooltip>}>
                                                            <Button variant='success-light' className="btn btn-icon btn-sm  btn-wave" onClick={handleShow1}>
                                                                <i className="ri-add-line"></i></Button>
                                                        </OverlayTrigger>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 d-flex align-items-center">
                                                            <span className="avatar avatar-sm avatar-rounded online">
                                                                <img src={face10} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span>Matthew Ray</span>
                                                        </div>
                                                        <div>
                                                            <span className="fs-10 fw-semibold text-muted">

                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 d-flex align-items-center">
                                                            <span className="avatar avatar-sm avatar-rounded online">
                                                                <img src={face8} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span>Melissa Blue</span>
                                                        </div>
                                                        <div>
                                                            <span className="fs-10 fw-semibold text-muted">

                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 d-flex align-items-center">
                                                            <span className="avatar avatar-sm avatar-rounded online">
                                                                <img src={face2} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span>Brenda Sams</span>
                                                        </div>
                                                        <div>
                                                            <span className="fs-10 fw-semibold text-muted">

                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 d-flex align-items-center">
                                                            <span className="avatar avatar-sm avatar-rounded offline">
                                                                <img src={face14} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span>Muhammed Kher</span>
                                                        </div>
                                                        <div>
                                                            <span className="fs-10 fw-semibold text-muted ms-1">
                                                                13 mins
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 d-flex align-items-center">
                                                            <span className="avatar avatar-sm avatar-rounded online">
                                                                <img src={face4} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span>Dorga Boavan</span>
                                                        </div>
                                                        <div>
                                                            <span className="fs-10 fw-semibold text-muted">

                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 d-flex align-items-center">
                                                            <span className="avatar avatar-sm avatar-rounded offline">
                                                                <img src={face13} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span>Yashna Polana</span>
                                                        </div>
                                                        <div>
                                                            <span className="fs-10 fw-semibold text-muted">
                                                                19 mins
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li className="pb-0">
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div className="fs-10 fw-semibold mb-2 text-muted">TEAM TESTING</div>
                                                    <div data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Add Member">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add Member</Tooltip>}>
                                                            <Button variant='success-light' className="btn btn-icon btn-sm  btn-wave" onClick={handleShow1}>
                                                                <i className="ri-add-line"></i></Button>
                                                        </OverlayTrigger>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 d-flex align-items-center">
                                                            <span className="avatar avatar-sm avatar-rounded online">
                                                                <img src={face11} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span>Jason Smith</span>
                                                        </div>
                                                        <div>
                                                            <span className="fs-10 fw-semibold text-muted">

                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 d-flex align-items-center">
                                                            <span className="avatar avatar-sm avatar-rounded offline">
                                                                <img src={face6} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span>Sasha Hops</span>
                                                        </div>
                                                        <div>
                                                            <span className="fs-10 fw-semibold text-muted">
                                                                21 mins
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 d-flex align-items-center">
                                                            <span className="avatar avatar-sm avatar-rounded online">
                                                                <img src={face9} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span>Mark Zaker</span>
                                                        </div>
                                                        <div>
                                                            <span className="fs-10 fw-semibold text-muted">
                                                                38 mins
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 d-flex align-items-center">
                                                            <span className="avatar avatar-sm avatar-rounded online">
                                                                <img src={face16} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span>Suarez Adam</span>
                                                        </div>
                                                        <div>
                                                            <span className="fs-10 fw-semibold text-muted">

                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#">
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 d-flex align-items-center">
                                                            <span className="avatar avatar-sm avatar-rounded offline">
                                                                <img src={face1} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-fill">
                                                            <span>Kiara Advensh</span>
                                                        </div>
                                                        <div>
                                                            <span className="fs-10 fw-semibold text-muted">
                                                                1 hr
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </PerfectScrollbar>
                                
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </div>
        </Fragment>
    );
};

export default Team;
