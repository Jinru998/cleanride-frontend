import  { FC, Fragment, useState } from 'react';
import { Badge, Button, Card, Col, Dropdown, Form, InputGroup, Modal, OverlayTrigger, Pagination, Row, Table, Tooltip } from 'react-bootstrap';
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
import { TransactionsStatistics } from '../../apps/crypto/transactions/transactionsdata';
import Select from 'react-select';
import { MultiSelect } from 'react-multi-select-component';
import DatePicker from "react-datepicker";

interface ListviewProps { }

const Listview: FC<ListviewProps> = () => {
    const [startDate, setStartDate] = useState<any>(new Date());
    //Datepicker function
    const handleDateChange = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    const [selected1, setSelected1] = useState([]);
    const Selectdata = [
        { value: 'Angelina May', label: 'Angelina May' },
        { value: 'Kiara advain', label: 'Kiara advain' },
        { value: 'Hercules Jhon', label: 'Hercules Jhon' },
        { value: 'Mayor Kim', label: 'Mayor Kim' },
    ];
    const Option1 = [
        { value: 'New', label: 'New' },
        { value: 'Completed', label: 'Completed' },
        { value: 'Inprogress', label: 'Inprogress' },
        { value: 'Pending', label: 'Pending' }
    ];
    const Option2 = [
        { value: 'High', label: 'High' },
        { value: 'Low', label: 'Low' },
        { value: 'Medium', label: 'Medium' },
    ];
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Fragment>
            <Pageheader title="Task List" heading="Task" active="Task List" />
            <Row>
                <Col xl={8} xxl={9}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Total Tasks
                            </Card.Title>
                            <div className="d-flex">
                                <Button className="btn btn-sm btn-primary btn-wave waves-light"
                                    variant="primary" onClick={handleShow} data-bs-toggle="modal" data-bs-target="#create-task"><i className="ri-add-line fw-semibold align-middle me-1"></i> Create Task</Button>

                                <Modal show={show} onHide={handleClose} className="modal fade" id="create-task" tabIndex={-1} aria-hidden="true">
                                    <Modal.Header closeButton>
                                        <h6 className="modal-title">Add Task</h6>
                                    </Modal.Header>
                                    <Modal.Body className="px-4">
                                        <div className="row gy-2">
                                            <Col xl={6}>
                                                <Form.Label htmlFor="task-name">Task Name</Form.Label>
                                                <Form.Control type="text" id="task-name" placeholder="Task Name" />
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label htmlFor="task-id">Task ID</Form.Label>
                                                <Form.Control type="text" id="task-id" placeholder="Task ID" />
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label>Assigned Date</Form.Label>
                                                <div className="form-group">
                                                    <InputGroup>
                                                        <InputGroup.Text className="text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
                                                        <DatePicker
                                                            selected={startDate}
                                                            onChange={handleDateChange}
                                                            timeInputLabel="Time:"
                                                            dateFormat="yy/MM/dd h:mm aa"
                                                            placeholderText='Choose date and time'
                                                            showTimeInput
                                                        />
                                                    </InputGroup>
                                                </div>
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label>Due Date</Form.Label>
                                                <div className="form-group">
                                                    <InputGroup>
                                                        <InputGroup.Text className="text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
                                                        <DatePicker
                                                            selected={startDate}
                                                            onChange={handleDateChange}
                                                            timeInputLabel="Time:"
                                                            dateFormat="yy/MM/dd h:mm aa"
                                                            placeholderText='Choose date and time'
                                                            showTimeInput
                                                        />
                                                    </InputGroup>
                                                </div>
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label>Status</Form.Label>
                                                <MultiSelect options={Option1} value={selected1} onChange={setSelected1} labelledBy="1" className="rounded-0 custom-select1" />
                                            </Col>
                                            <Col xl={6}>
                                                <Form.Label>Priority</Form.Label>
                                                <Select name="colors" options={Option2} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" placeholder="" defaultValue={[Option2[0]]}
                                                />
                                            </Col>
                                            <Col xl={12}>
                                                <Form.Label>Assigned To</Form.Label>
                                                <Select isMulti name="colors" options={Selectdata} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" placeholder=""
                                                />
                                            </Col>
                                        </div>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant='' type="button" className="btn btn-light" onClick={handleClose}>Cancel</Button>
                                        <Button variant='' type="button" className="btn btn-primary">Add Task</Button>
                                    </Modal.Footer>
                                </Modal>
                                <Dropdown className="dropdown ms-2">
                                    <Dropdown.Toggle variant='secondary-light' className="btn btn-icon  btn-sm btn-wave waves-light no-caret" type="button">
                                        <i className="ti ti-dots-vertical"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">New Tasks</Dropdown.Item>
                                        <Dropdown.Item href="#">Pending Tasks</Dropdown.Item>
                                        <Dropdown.Item href="#">Completed Tasks</Dropdown.Item>
                                        <Dropdown.Item href="#">Inprogress Tasks</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-bordered">
                                    <thead>
                                        <tr>
                                            <th>
                                                <Form.Check className=" check-all" type="checkbox" id="all-tasks" value="" aria-label="..." />
                                            </th>
                                            <th scope="col">Task</th>
                                            <th scope="col">Task ID</th>
                                            <th scope="col">Assigned Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Due Date</th>
                                            <th scope="col">Priority</th>
                                            <th scope="col">Assigned To</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="task-list">
                                            <td className="task-checkbox"><Form.Check className="" type="checkbox" value="" aria-label="..." /></td>
                                            <td>
                                                <span className="fw-semibold">Design New Landing Page</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">SPK - 01</span>
                                            </td>
                                            <td>
                                                02-06-2023
                                            </td>
                                            <td>
                                                <span className="fw-semibold text-primary">New</span>
                                            </td>
                                            <td>
                                                10-06-2023
                                            </td>
                                            <td>
                                                <Badge bg="secondary-transparent" className="badge">Medium</Badge>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face2} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face8} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face2} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" to="#">
                                                        +2
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                <Button variant='primary-light' className="btn btn-icon btn-sm">
                                                        <i className="ri-edit-line"></i></Button></OverlayTrigger>
                                                <Button variant='danger-light' className="btn btn-icon ms-1 btn-sm task-delete-btn">
                                                    <i className="ri-delete-bin-5-line"></i></Button>
                                            </td>
                                        </tr>
                                        <tr className="task-list">
                                            <td className="task-checkbox"><Form.Check className="" type="checkbox" value="" aria-label="..." defaultChecked /></td>
                                            <td>
                                                <span className="fw-semibold">New Project Buleprint</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">SPK - 04</span>
                                            </td>
                                            <td>
                                                05-06-2023
                                            </td>
                                            <td>
                                                <span className="fw-semibold text-secondary">Inprogress</span>
                                            </td>
                                            <td>
                                                15-06-2023
                                            </td>
                                            <td>
                                                <Badge bg="-transparent" className="badge bg-danger-transparent">High</Badge>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face12} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face11} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" to="#">
                                                        +4
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                <Button variant='primary-light' className="btn btn-icon btn-sm">
                                                        <i className="ri-edit-line"></i></Button></OverlayTrigger>
                                                <Button variant='danger-light' className="btn btn-icon ms-1 btn-sm task-delete-btn">
                                                    <i className="ri-delete-bin-5-line"></i></Button>
                                            </td>
                                        </tr>
                                        <tr className="task-list">
                                            <td className="task-checkbox"><Form.Check className="" type="checkbox" value="" aria-label="..." /></td>
                                            <td>
                                                <span className="fw-semibold">Server Side Validation</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">SPK - 11</span>
                                            </td>
                                            <td>
                                                12-06-2023
                                            </td>
                                            <td>
                                                <span className="fw-semibold text-warning">Pending</span>
                                            </td>
                                            <td>
                                                16-06-2023
                                            </td>
                                            <td>
                                                <Badge bg="success-transparent" className="badge">Low</Badge>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face5} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face9} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face13} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" to="#">
                                                        +5
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                <Button variant='primary-light' className="btn btn-icon btn-sm">
                                                        <i className="ri-edit-line"></i></Button></OverlayTrigger>
                                                <Button variant='danger-light' className="btn btn-icon ms-1 btn-sm task-delete-btn">
                                                    <i className="ri-delete-bin-5-line"></i></Button>
                                            </td>
                                        </tr>
                                        <tr className="task-list">
                                            <td className="task-checkbox"><Form.Check className="" type="checkbox" value="" aria-label="..." /></td>
                                            <td>
                                                <span className="fw-semibold">New Plugin Development</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">SPK - 24</span>
                                            </td>
                                            <td>
                                                08-06-2023
                                            </td>
                                            <td>
                                                <span className="fw-semibold text-success">Completed</span>
                                            </td>
                                            <td>
                                                17-06-2023
                                            </td>
                                            <td>
                                                <Badge bg="success-transparent" className="badge">Low</Badge>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face2} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face8} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face2} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" to="#">
                                                        +2
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                <Button variant='primary-light' className="btn btn-icon btn-sm">
                                                        <i className="ri-edit-line"></i></Button></OverlayTrigger>
                                                <Button variant='danger-light' className="btn btn-icon ms-1 btn-sm task-delete-btn">
                                                    <i className="ri-delete-bin-5-line"></i></Button>
                                            </td>
                                        </tr>
                                        <tr className="task-list">
                                            <td className="task-checkbox"><Form.Check className="" type="checkbox" value="" aria-label="..." defaultChecked /></td>
                                            <td>
                                                <span className="fw-semibold">Designing New Authentication Page</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">SPK - 16</span>
                                            </td>
                                            <td>
                                                03-06-2023
                                            </td>
                                            <td>
                                                <span className="fw-semibold text-secondary">Inprogress</span>
                                            </td>
                                            <td>
                                                08-06-2023
                                            </td>
                                            <td>
                                                <Badge bg="secondary-transparent" className="badge">Medium</Badge>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face10} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face15} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" to="#">
                                                        +3
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                <Button variant='primary-light' className="btn btn-icon btn-sm">
                                                        <i className="ri-edit-line"></i></Button></OverlayTrigger>
                                                <Button variant='danger-light' className="btn btn-icon ms-1 btn-sm task-delete-btn">
                                                    <i className="ri-delete-bin-5-line"></i></Button>
                                            </td>
                                        </tr>
                                        <tr className="task-list">
                                            <td className="task-checkbox"><Form.Check className="" type="checkbox" value="" aria-label="..." defaultChecked /></td>
                                            <td>
                                                <span className="fw-semibold">Documentation For New Template</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">SPK - 07</span>
                                            </td>
                                            <td>
                                                12-06-2023
                                            </td>
                                            <td>
                                                <span className="fw-semibold text-primary">New</span>
                                            </td>
                                            <td>
                                                25-06-2023
                                            </td>
                                            <td>
                                                <Badge bg="danger-transparent" className="badge">High</Badge>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face12} alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                <Button variant='primary-light' className="btn btn-icon btn-sm">
                                                        <i className="ri-edit-line"></i></Button></OverlayTrigger>
                                                <Button variant='danger-light' className="btn btn-icon ms-1 btn-sm task-delete-btn">
                                                    <i className="ri-delete-bin-5-line"></i></Button>
                                            </td>
                                        </tr>
                                        <tr className="task-list">
                                            <td className="task-checkbox"><Form.Check className="" type="checkbox" value="" aria-label="..." /></td>
                                            <td>
                                                <span className="fw-semibold">Updating Old UI</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">SPK - 13</span>
                                            </td>
                                            <td>
                                                06-06-2023
                                            </td>
                                            <td>
                                                <span className="fw-semibold text-success">Completed</span>
                                            </td>
                                            <td>
                                                12-06-2023
                                            </td>
                                            <td>
                                                <Badge bg="success-transparent" className="badge">Low</Badge>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face11} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face1} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face10} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" to="#">
                                                        +1
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                <Button variant='primary-light' className="btn btn-icon btn-sm">
                                                        <i className="ri-edit-line"></i></Button></OverlayTrigger>
                                                <Button variant='danger-light' className="btn btn-icon ms-1 btn-sm task-delete-btn">
                                                    <i className="ri-delete-bin-5-line"></i></Button>
                                            </td>
                                        </tr>
                                        <tr className="task-list">
                                            <td className="task-checkbox"><Form.Check className="" type="checkbox" value="" aria-label="..." defaultChecked /></td>
                                            <td>
                                                <span className="fw-semibold">Developing New Events In Plugins</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">SPK - 20</span>
                                            </td>
                                            <td>
                                                14-06-2023
                                            </td>
                                            <td>
                                                <span className="fw-semibold text-warning">Pending</span>
                                            </td>
                                            <td>
                                                19-06-2023
                                            </td>
                                            <td>
                                                <Badge bg="danger-transparent" className="badge">High</Badge>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face3} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face9} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" to="#">
                                                        +2
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                <Button variant='primary-light' className="btn btn-icon btn-sm">
                                                        <i className="ri-edit-line"></i></Button></OverlayTrigger>
                                                <Button variant='danger-light' className="btn btn-icon ms-1 btn-sm task-delete-btn">
                                                    <i className="ri-delete-bin-5-line"></i></Button>
                                            </td>
                                        </tr>
                                        <tr className="task-list">
                                            <td className="task-checkbox"><Form.Check className="" type="checkbox" value="" aria-label="..." /></td>
                                            <td>
                                                <span className="fw-semibold">Fixing Minor Ui Issues</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">SPK - 26</span>
                                            </td>
                                            <td>
                                                11-06-2023
                                            </td>
                                            <td>
                                                <span className="fw-semibold text-success">Completed</span>
                                            </td>
                                            <td>
                                                18-06-2023
                                            </td>
                                            <td>
                                                <Badge bg="secondary-transparent" className="badge">Medium</Badge>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face5} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face14} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face12} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face3} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" to="#">
                                                        +1
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                <Button variant='primary-light' className="btn btn-icon btn-sm">
                                                        <i className="ri-edit-line"></i></Button></OverlayTrigger>
                                                <Button variant='danger-light' className="btn btn-icon ms-1 btn-sm task-delete-btn">
                                                    <i className="ri-delete-bin-5-line"></i></Button>
                                            </td>
                                        </tr>
                                        <tr className="task-list">
                                            <td className="task-checkbox"><Form.Check className="" type="checkbox" value="" aria-label="..." /></td>
                                            <td>
                                                <span className="fw-semibold">Designing Of New Ecommerce Website</span>
                                            </td>
                                            <td>
                                                <span className="fw-semibold">SPK - 32</span>
                                            </td>
                                            <td>
                                                03-06-2023
                                            </td>
                                            <td>
                                                <span className="fw-semibold text-secondary">Inprogress</span>
                                            </td>
                                            <td>
                                                09-06-2023
                                            </td>
                                            <td>
                                                <Badge bg="success-transparent" className="badge">Low</Badge>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face12} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face6} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-fixed-white" to="#">
                                                        +4
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                                                <Button variant='primary-light' className="btn btn-icon btn-sm">
                                                        <i className="ri-edit-line"></i></Button></OverlayTrigger>
                                                <Button variant='danger-light' className="btn btn-icon ms-1 btn-sm task-delete-btn">
                                                    <i className="ri-delete-bin-5-line"></i></Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                        <Card.Footer>
                            <nav aria-label="Page navigation">
                                <Pagination className="pagination mb-0 float-end">
                                    <Pagination.Item disabled href='#'>Previous</Pagination.Item>
                                    <Pagination.Item href="#">1</Pagination.Item>
                                    <Pagination.Item active href="#">2</Pagination.Item>
                                    <Pagination.Item href="#">3</Pagination.Item>
                                    <Pagination.Item href="#">Next</Pagination.Item>
                                </Pagination>
                            </nav>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xl={4} xxl={3}>
                    <Card className="custom-card">
                        <Card.Body className=" p-0">
                            <div className="p-4 border-bottom border-block-end-dashed d-flex align-items-top">
                                <div className="svg-icon-background bg-primary-transparent me-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="svg-primary"><path d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" /></svg>
                                </div>
                                <div className="flex-fill">
                                    <h6 className="mb-2 fs-12">New Tasks
                                        <Badge bg="primary" className="badge fw-semibold float-end">
                                            12,345
                                        </Badge>
                                    </h6>
                                    <div className="pb-0 mt-0">
                                        <div>
                                            <h4 className="fs-18 fw-semibold mb-2"><span className="count-up" data-count="42">42</span><span className="text-muted float-end fs-11 fw-normal">Last Year</span></h4>
                                            <p className="text-muted fs-11 mb-0 lh-1">
                                                <span className="text-success me-1 fw-semibold">
                                                    <i className="ri-arrow-up-s-line me-1 align-middle"></i>3.25%
                                                </span>
                                                <span>this month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-bottom border-block-end-dashed d-flex align-items-top">
                                <div className="svg-icon-background bg-success-transparent me-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="svg-success"><path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z" /></svg>
                                </div>
                                <div className="flex-fill">
                                    <h6 className="mb-2 fs-12">Completed Tasks
                                        <Badge bg="success" className="badge  fw-semibold float-end">
                                            4,176
                                        </Badge>
                                    </h6>
                                    <div>
                                        <h4 className="fs-18 fw-semibold mb-2"><span className="count-up" data-count="319">320</span><span className="text-muted float-end fs-11 fw-normal">Last Year</span></h4>
                                        <p className="text-muted fs-11 mb-0 lh-1">
                                            <span className="text-danger me-1 fw-semibold">
                                                <i className="ri-arrow-down-s-line me-1 align-middle"></i>1.16%
                                            </span>
                                            <span>this month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-top p-4 border-bottom border-block-end-dashed">
                                <div className="svg-icon-background bg-warning-transparent me-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="svg-warning"><path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" /></svg>
                                </div>
                                <div className="flex-fill">
                                    <h6 className="mb-2 fs-12">Pending Tasks
                                        <Badge bg="warning" className="badge fw-semibold float-end">
                                            7,064
                                        </Badge>
                                    </h6>
                                    <div>
                                        <h4 className="fs-18 fw-semibold mb-2"><span className="count-up" data-count="81">82</span><span className="text-muted float-end fs-11 fw-normal">Last Year</span></h4>
                                        <p className="text-muted fs-11 mb-0 lh-1">
                                            <span className="text-success me-1 fw-semibold">
                                                <i className="ri-arrow-up-s-line me-1 align-middle"></i>0.25%
                                            </span>
                                            <span>this month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-top p-4 border-bottom border-block-end-dashed">
                                <div className="svg-icon-background bg-secondary-transparent me-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="svg-secondary"><path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" /></svg>
                                </div>
                                <div className="flex-fill">
                                    <h6 className="mb-2 fs-12">Inprogress Tasks
                                        <Badge bg="secondary" className="badge  fw-semibold float-end">
                                            1,105
                                        </Badge>
                                    </h6>
                                    <div>
                                        <h4 className="fs-18 fw-semibold mb-2"><span className="count-up" data-count="32">33</span><span className="text-muted float-end fs-11 fw-normal">Last Year</span></h4>
                                        <p className="text-muted fs-11 mb-0 lh-1">
                                            <span className="text-success me-1 fw-semibFold">
                                                <i className="ri-arrow-down-s-line me-1 align-middle"></i>0.46%
                                            </span>
                                            <span>this month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 pb-2">
                                <p className="fs-15 fw-semibold">Tasks Statistics <span className="text-muted fw-normal">(Last 6 months) :</span></p>
                                <div id="task-list-stats">
                                    <TransactionsStatistics />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Listview;
