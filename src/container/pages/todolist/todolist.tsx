import  { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Dropdown, Form, InputGroup, Modal, Nav, Pagination, Row, Tab } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import face1 from "../../../assets/images/faces/1.jpg";
import face2 from "../../../assets/images/faces/2.jpg";
import face3 from "../../../assets/images/faces/3.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face6 from "../../../assets/images/faces/6.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import face9 from "../../../assets/images/faces/9.jpg";
import face10 from "../../../assets/images/faces/10.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face12 from "../../../assets/images/faces/12.jpg";
import face13 from "../../../assets/images/faces/13.jpg";
import face14 from "../../../assets/images/faces/14.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import face16 from "../../../assets/images/faces/16.jpg";
import face21 from "../../../assets/images/faces/21.jpg";
import media66 from "../../../assets/images/media/media-66.png";
import Select from 'react-select';
import { MultiSelect } from 'react-multi-select-component';
import DatePicker from "react-datepicker";

interface TodolistProps { }

const Todolist: FC<TodolistProps> = () => {
    const [startDate, setStartDate] = useState<any>(new Date());
    const handleDateChange = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const Option1 = [
        { value: 'Angelina May', label: 'Angelina May' },
        { value: 'Kiara advain', label: 'Kiara advain' },
        { value: 'Hercules Jhon', label: 'Hercules Jhon' },
        { value: 'Mayor Kim', label: 'Mayor Kim' },
    ];
    const [selected1, setSelected1] = useState([]);
    const Option2 = [
        { value: 'Select', label: 'Select' },
        { value: 'Critical', label: 'Critical' },
        { value: 'High', label: 'High' },
        { value: 'Medium', label: 'Medium' },
        { value: 'Low', label: 'Low' }
    ];
    return (
        <Fragment>
            <Pageheader title="To Do List" heading="Pages" active="To Do List" />
            <Row>
                <Col xl={3}>
                    <Card className="custom-card">
                        <Card.Body className="p-0">
                            <div className="p-3 d-grid border-bottom border-block-end-dashed">
                                <Button variant="primary" onClick={handleShow} className="btn d-flex align-items-center justify-content-center">
                                    <i className="ri-add-circle-line fs-16 align-middle me-1"></i>Create New Task
                                </Button>
                                <Modal show={show} onHide={handleClose} className="modal fade" id="addtask" tabIndex={-1} aria-hidden="true">
                                    <Modal.Header closeButton>
                                        <h6 className="modal-title" id="mail-ComposeLabel">Create Task</h6>
                                    </Modal.Header>
                                    <Modal.Body className="modal-body px-4">
                                        <div className="row gy-2">
                                            <Col xl={12}>
                                                <Form.Label htmlFor="task-name" >Task Name</Form.Label>
                                                <Form.Control type="text" id="task-name" placeholder="Task Name" />
                                            </Col>
                                            <Col xl={12}>
                                                <Form.Label className="form-label">Assigned To</Form.Label>
                                                <Select isMulti name="colors" options={Option1} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Option1[0]]} />
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label className="form-label">Assigned Date</Form.Label>
                                                <div className="form-group">
                                                    <InputGroup>
                                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
                                                        <div className='input-group-text'>
                                                            <DatePicker
                                                                selected={startDate}
                                                                onChange={handleDateChange}
                                                                timeInputLabel="Time:"
                                                                dateFormat="yy/MM/dd h:mm aa"
                                                                placeholderText='Choose date and time'
                                                                showTimeInput
                                                            />
                                                        </div>
                                                      
                                                    </InputGroup>
                                                </div>
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label className="form-label">Target Date</Form.Label>
                                                <div className="form-group">
                                                    <InputGroup>
                                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
                                                        <div className='input-group-text'>
                                                            <DatePicker
                                                                selected={startDate}
                                                                onChange={handleDateChange}
                                                                timeInputLabel="Time:"
                                                                dateFormat="yy/MM/dd h:mm aa"
                                                                placeholderText='Choose date and time'
                                                                showTimeInput
                                                            />
                                                        </div>
                                                    </InputGroup>
                                                </div>
                                            </Col>
                                            <Col xl={12}>
                                                <Form.Label className="form-label">Priority</Form.Label>
                                                <MultiSelect options={Option2} value={selected1} onChange={setSelected1} labelledBy="1" className="rounded-0 custom-select1" />
                                            </Col>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant='light' type="button" className="btn" onClick={handleClose}>Cancel</Button>
                                        <Button variant='primary' type="button" className="btn">Create</Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <InputGroup>
                                    <Form.Control type="text" className="form-control bg-light border-0" placeholder="Search Task Here" aria-describedby="button-addon2" />
                                    <Button variant='' className="btn btn-light" type="button" id="button-addon2"><i className="ri-search-line text-muted"></i></Button>
                                </InputGroup>
                            </div>
                            <div className="p-3 task-navigation border-bottom border-block-end-dashed">
                                <ul className="list-unstyled task-main-nav mb-0">
                                    <li className="px-0 pt-0">
                                        <span className="fs-11 text-muted op-7 fw-semibold">TASKS</span>
                                    </li>
                                    <li className="active">
                                        <Link to="#">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-task-line align-middle fs-14"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    All Tasks
                                                </span>
                                                <span className="badge bg-success-transparent rounded-pill">167</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-star-line align-middle fs-14"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Starred
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-delete-bin-5-line align-middle fs-14"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Trash
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="px-0 pt-2">
                                        <span className="fs-11 text-muted op-7 fw-semibold">CATEGORIES</span>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-price-tag-line align-middle fs-14 fw-semibold text-primary"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Personal
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-price-tag-line align-middle fs-14 fw-semibold text-secondary"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Work
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-price-tag-line align-middle fs-14 fw-semibold text-warning"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Health & Fitness
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-price-tag-line align-middle fs-14 fw-semibold text-success"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Daily Goals
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            <div className="d-flex align-items-center">
                                                <span className="me-2 lh-1">
                                                    <i className="ri-price-tag-line align-middle fs-14 fw-semibold text-danger"></i>
                                                </span>
                                                <span className="flex-fill text-nowrap">
                                                    Financial Management
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-3 text-center">
                                <img src={media66} alt="" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={9}>
                    <Row>
                        <Tab.Container defaultActiveKey="one">
                            <Col xl={12}>
                                <Card className="custom-card">
                                    <Card.Body className="card-body p-0">
                                        <div className="d-flex p-3 align-items-center justify-content-between">
                                            <div>
                                                <h6 className="fw-semibold mb-0">Tasks</h6>
                                            </div>
                                            <div>
                                                <Nav className="nav-tabs nav-tabs-header mb-0 d-sm-flex d-block" role="tablist">
                                                    <Nav.Item className="nav-item m-1">
                                                        <Nav.Link active eventKey="one"
                                                            href="#all-tasks" aria-selected="true">All Tasks</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item className="nav-item m-1">
                                                        <Nav.Link className="" eventKey="two"
                                                            href="#pending" aria-selected="true">Pending</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item className="nav-item m-1">
                                                        <Nav.Link className="" eventKey="three"
                                                            href="#in-progress" aria-selected="true">In Progress</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item className="nav-item m-1">
                                                        <Nav.Link className="" eventKey="four"
                                                            href="#completed" aria-selected="true">Completed</Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </div>
                                            <div>
                                                <Dropdown>
                                                    <Dropdown.Toggle variant='' className="btn btn-icon btn-sm btn-light btn-wave waves-light waves-effect no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <i className="ti ti-dots-vertical"></i>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#">Select All</Dropdown.Item>
                                                        <Dropdown.Item href="#">Share All</Dropdown.Item>
                                                        <Dropdown.Item href="#">Delete All</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Tab.Content className="task-tabs-container">
                                <Tab.Pane className="p-0" id="all-tasks" role="tabpanel" eventKey="one">
                                    <Row id="tasks-container">
                                        <Col xl={4} className="task-card">
                                            <Card className="custom-card task-pending-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link to="#"><i className="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></Link>New Project Blueprint</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">13,Nov 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">20,Nov 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face2} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face8} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face2} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face10} alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='primary-light' className="btn btn-sm btn-icon btn-wave "><i className="ri-edit-line"></i></Button>
                                                                <Button variant='danger-light' className="btn btn-sm btn-icon btn-wave  me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-warning-transparent d-block">High</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                            <Card className="custom-card task-inprogress-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link to="#"><i className="ri-star-s-fill fs-16 me-1 text-warning"></i></Link>Designing New Authentication Pages</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">26,Nov 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">12,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face6} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face15} alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-success-transparent d-block">Low</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                            <Card className="custom-card task-completed-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center">
                                                                <Link to="#"><i className="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></Link>Developing New Events in Plugin</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">5,Dec 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">10,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face5} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face8} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face11} alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-primary-transparent d-block">Medium</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xl={4} className="task-card">
                                            <Card className="custom-card task-inprogress-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link to="#"><i className="ri-star-s-fill fs-16 me-1 text-warning"></i></Link>Design New Landing Pages </p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">21,Nov 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">28,Nov 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face1} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face5} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face12} alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-primary-transparent d-block">Medium</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                            <Card className="custom-card task-completed-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link to="#"><i className="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></Link>New Plugin Development</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">28,Oct 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">28,Nov 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face3} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face8} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face9} alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-success-transparent d-block">Low</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                            <Card className="custom-card task-completed-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link to="#"><i className="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></Link>Documentation For New Template</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">25,Nov 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">10,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face8} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face10} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face11} alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-danger-transparent d-block">Critical</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xl={4} className="task-card">
                                            <Card className="custom-card task-pending-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center">
                                                                <Link to="#"><i className="ri-star-s-fill fs-16 me-1 text-warning"></i></Link>Updating Old Ui</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">30,Nov 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">05,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face14} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face13} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face21} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face16} alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-warning-transparent d-block">High</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                            <Card className="custom-card task-completed-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link to="#"><i className="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></Link>Designing Of New Ecommerce Pages</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">1,Dec 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">15,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face1} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face3} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face6} alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-success-transparent d-block">Low</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                            <Card className="custom-card task-inprogress-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link to="#"><i className="ri-star-s-fill fs-16 me-1 text-warning"></i></Link>Improving Ui Of Updated Templates</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">4,Dec 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">20,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face9} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face13} alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-primary-transparent d-block">Medium</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane className="p-0" id="pending" role="tabpanel" eventKey="two">
                                    <Row>
                                        <Col xl={4}>
                                            <Card className="custom-card task-pending-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link to="#"><i className="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></Link>New Project Blueprint</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">13,Nov 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">20,Nov 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face2} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face8} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face2} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face10} alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-warning-transparent d-block">High</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xl={4}>
                                            <Card className="custom-card task-pending-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center">
                                                                <Link to="#"><i className="ri-star-s-fill fs-16 me-1 text-warning"></i></Link>Updating Old Ui</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">30,Nov 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">05,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face14} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face13} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face21} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face16} alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-warning-transparent d-block">High</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane className="p-0" id="in-progress" role="tabpanel" eventKey="three">
                                    <Row>
                                        <Col xl={4}>
                                            <Card className="custom-card task-inprogress-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link to="#"><i className="ri-star-s-fill fs-16 me-1 text-warning"></i></Link>Design New Landing Pages </p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">21,Nov 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">28,Nov 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face1} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face5} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face12} alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-primary-transparent d-block">Medium</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xl={4}>
                                            <Card className="custom-card task-inprogress-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link to="#"><i className="ri-star-s-fill fs-16 me-1 text-warning"></i></Link>Designing New Authentication Pages</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">26,Nov 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">12,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face6} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face15} alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-success-transparent d-block">Low</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xl={4}>
                                            <Card className="custom-card task-inprogress-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link to="#"><i className="ri-star-s-fill fs-16 me-1 text-warning"></i></Link>Improving Ui Of Updated Templates</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">4,Dec 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">20,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face9} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face13} alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-primary-transparent d-block">Medium</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane className="p-0" id="completed" role="tabpanel" eventKey="four">
                                    <Row>
                                        <Col xl={4}>
                                            <Card className="custom-card task-completed-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link to="#"><i className="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></Link>New Plugin Development</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">28,Oct 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">28,Nov 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face3} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face8} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face9} alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-success-transparent d-block">Low</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xl={4}>
                                            <Card className="custom-card task-completed-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link to="#"><i className="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></Link>Documentation For New Template</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">25,Nov 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">10,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face8} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face10} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face11} alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-danger-transparent d-block">Critical</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xl={4}>
                                            <Card className="custom-card task-completed-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center">
                                                                <Link to="#"><i className="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></Link>Developing New Events in Plugin</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">5,Dec 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">10,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face5} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face8} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face11} alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-primary-transparent d-block">Medium</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xl={4}>
                                            <Card className="custom-card task-completed-card">
                                                <Card.Body>
                                                    <div className="d-flex justify-content-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="fw-semibold mb-3 d-flex align-items-center"><Link to="#"><i className="ri-star-s-fill fs-16 op-5 me-1 text-muted"></i></Link>Designing Of New Ecommerce Pages</p>
                                                            <p className="mb-3">Assigned On : <span className="fs-12 mb-1 text-muted">1,Dec 2022</span></p>
                                                            <p className="mb-3">Target Date : <span className="fs-12 mb-1 text-muted">15,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face1} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face3} alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src={face6} alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-primary-light"><i className="ri-edit-line"></i></Button>
                                                                <Button variant='' className="btn btn-sm btn-icon btn-wave btn-danger-light me-0"><i className="ri-delete-bin-line"></i></Button>
                                                            </div>
                                                            <span className="badge bg-success-transparent d-block">Low</span>
                                                        </div>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Row>
                    <Pagination className="justify-content-end">
                        <Pagination.Item disabled href="#">Previous</Pagination.Item>
                        <Pagination.Item href="#">1</Pagination.Item>
                        <Pagination.Item href="#">2</Pagination.Item>
                        <Pagination.Item href="#">3</Pagination.Item>
                        <Pagination.Item href="#">Next</Pagination.Item>
                    </Pagination>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Todolist;
