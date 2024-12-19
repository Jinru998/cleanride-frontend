import { FC, Fragment, useState, useEffect, useRef } from 'react';
import { Button, Card, Col, Dropdown, Form, InputGroup, Modal, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import face1 from "../../../assets/images/faces/1.jpg";
import face2 from "../../../assets/images/faces/2.jpg";
import face3 from "../../../assets/images/faces/3.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face6 from "../../../assets/images/faces/6.jpg";
import face7 from "../../../assets/images/faces/7.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import face9 from "../../../assets/images/faces/9.jpg";
import face10 from "../../../assets/images/faces/10.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face12 from "../../../assets/images/faces/12.jpg";
import face13 from "../../../assets/images/faces/13.jpg";
import face14 from "../../../assets/images/faces/14.jpg";
import media86 from "../../../assets/images/media/media-86.svg";
import media36 from "../../../assets/images/media/media-36.jpg";
import media41 from "../../../assets/images/media/media-41.jpg";
import media43 from "../../../assets/images/media/media-43.jpg";
import PerfectScrollbar from 'react-perfect-scrollbar';
import Select from 'react-select';
import DatePicker from "react-datepicker";
//filepond
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

interface KanbanboardProps { }

const Kanbanboard: FC<KanbanboardProps> = () => {

    //filepond
    const [files, setFiles] = useState<any>([]);
    const [startDate, setStartDate] = useState<any>(new Date());
    const handleDateChange = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    //
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const Option1 = [
        { value: 'Sort By', label: 'Sort By' },
        { value: 'Newest', label: 'Newest' },
        { value: 'Date Added', label: 'Date Added' },
        { value: 'Type', label: 'Type' },
        { value: 'A - Z', label: 'A - Z' },
    ];
    const Option2 = [
        { value: 'Angelina May', label: 'Angelina May' },
        { value: 'Kiara advain', label: 'Kiara advain' },
        { value: 'Hercules Jhon', label: 'Hercules Jhon' },
        { value: 'Mayor Kim', label: 'Mayor Kim' }
    ];
    const Option3 = [
        { value: 'Select Tag', label: 'Select Tag' },
        { value: 'UI/UX', label: 'UI/UX' },
        { value: 'Marketing', label: 'Marketing' },
        { value: 'Finance', label: 'Finance' },
        { value: 'Designing', label: 'Designing' },
        { value: 'Admin', label: 'Admin' },
        { value: 'Authentication', label: 'Authentication' },
        { value: 'Product', label: 'Product' },
        { value: 'Development', label: 'Development' }
    ];
    const leftContainerRef = useRef<HTMLDivElement | null>(null);
    const rightContainerRef = useRef<HTMLDivElement | null>(null);
    const topContainerRef = useRef<HTMLDivElement | null>(null);
    const bottomContainerRef = useRef<HTMLDivElement | null>(null);
    const lastContainerRef = useRef<HTMLDivElement | null>(null);
    const windowElement  : any  = window;
    useEffect(() => {
      if (leftContainerRef.current && rightContainerRef.current) {
        windowElement.dragula([leftContainerRef.current, rightContainerRef.current, topContainerRef.current, bottomContainerRef.current, lastContainerRef.current]);

        if(document.querySelector('.firstdrag')?.classList.contains('task-Null'))
        {
            console.log("aaa");
            
            document.querySelector('.view-more-button')?.classList.add('d-none'); 
        }
      }

      OnDivChange();
    }, []);

    const elementsToModify = [
        leftContainerRef,
        rightContainerRef,
        topContainerRef,
        bottomContainerRef,
        lastContainerRef
      ];

      const OnDivChange = ()=>{
          elementsToModify.forEach((elementId) => {
            const element : any  = elementId.current;
            if(element.children.length <= 0) {
              element.classList.add('task-Null');
              element.parentNode.parentElement.parentElement.querySelector('.view-more-button').classList.add('d-none');
            }else{
                element.classList.remove('task-Null');
              element.parentNode.parentElement.parentElement.querySelector('.view-more-button').classList.remove('d-none');
            }
          });
      };
    
    return (
        <Fragment>
            <Pageheader title="Kanban Board" heading="Task" active="Kanban Board" />
            <Row>
                <Col xl={12} >
                    <Card className="custom-card">
                        <Card.Body className="p-3">
                            <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                                <div className="row kanban-board">
                                    <Col xl={5}>
                                        <Button variant='primary' className="btn" onClick={handleShow}
                                        ><i className="ri-add-line me-1 fw-semibold align-middle"></i>New Board</Button>
                                    </Col>
                                    <Col xl={7} className="mt-2 my-xxl-0">
                                          <Select  name="colors" options={Option1} className="basic-multi-select"
                                                menuPlacement='auto' classNamePrefix="Select2"
                                            />
                                    </Col>
                                </div>
                                <div className="avatar-list-stacked">
                                    <span className="avatar avatar-rounded">
                                        <img src={face2} alt="img" />
                                    </span>
                                    <span className="avatar avatar-rounded">
                                        <img src={face8} alt="img" />
                                    </span>
                                    <span className="avatar avatar-rounded">
                                        <img src={face2} alt="img" />
                                    </span>
                                    <span className="avatar avatar-rounded">
                                        <img src={face10} alt="img" />
                                    </span>
                                    <span className="avatar avatar-rounded">
                                        <img src={face4} alt="img" />
                                    </span>
                                    <span className="avatar avatar-rounded">
                                        <img src={face13} alt="img" />
                                    </span>
                                    <Link className="avatar bg-primary avatar-rounded text-fixed-white" to="#">
                                        +8
                                    </Link>
                                </div>
                                <div className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <Button variant='' className="btn btn-light" type="submit">Search</Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <div className="ynex-kanban-board">
                <div className="kanban-tasks-type new">
                    <div className="pe-3 mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="d-block fw-semibold fs-15">NEW - 04</span>
                            <div>
                                <Button variant='white' onClick={handleShow1} href="#" className="btn btn-sm bg-white text-default border-0 btn-wave">
                                    <i className="ri-add-line align-middle me-1 fw-semibold"></i>Add Task
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div  className="kanban-tasks" id="new-tasks">
                    <PerfectScrollbar style={{ height: "560px" }}>
                        <div ref={leftContainerRef} onMouseEnter={OnDivChange} className='firstdrag'
                        //  id="draggable-left" 
                         id="new-tasks-draggable"
                          data-view-btn="new-tasks">
                            
                            <Card className="custom-card">
                                <Card.Body className="p-0">
                                    <div className="p-3 kanban-board-head">
                                        <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                            <div><i className="ri-time-line me-1 align-middle"></i>Created - 28 May</div>
                                            <div>2 days left</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="task-badges"><span className="badge bg-light text-default">#SPK - 11</span><span className="ms-1 badge bg-primary-transparent">UI/UX</span></div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-end">
                                                    <Dropdown.Item href="#"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="kanban-content mt-2">
                                            <h6 className="fw-semibold mb-1 fs-15">New Dashboard design.</h6>
                                            <div className="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit, Nulla soluta consectetur sit amet elit dolor sit amet.</div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-top border-block-start-dashed">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <Link to="#" className="me-2 text-primary">
                                                    <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-semibold fs-12">12</span>
                                                </Link>
                                                <Link to="#" className="text-muted">
                                                    <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-semibold fs-12">02</span>
                                                </Link>
                                            </div>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face11} alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face12} alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face7} alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face8} alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="custom-card">
                                <Card.Body className="p-0">
                                    <div className="p-3 kanban-board-head">
                                        <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                            <div><i className="ri-time-line me-1 align-middle"></i>Created - 30 May</div>
                                            <div>2 days left</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="task-badges"><span className="badge bg-light text-default">#SPK - 05</span><span className="ms-1 badge bg-secondary-transparent">Marketing</span><span className="ms-1 badge bg-warning-transparent">Finance</span></div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='' aria-label="anchor" className="btn btn-icon btn-sm btn-light no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                                                    <Dropdown.Item href="#"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="kanban-content mt-2">
                                            <h6 className="fw-semibold mb-1 fs-15">Marketing next projects.</h6>
                                            <div className="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-top border-block-start-dashed">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <Link to="#" className="me-2 text-primary">
                                                    <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-semibold fs-12">40</span>
                                                </Link>
                                                <Link to="#" className="text-muted">
                                                    <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-semibold fs-12">08</span>
                                                </Link>
                                            </div>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face13} alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face6} alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card  className="custom-card">
                                <Card.Body className="p-0">
                                    <div className="p-3 kanban-board-head">
                                        <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                            <div><i className="ri-time-line me-1 align-middle"></i>Created - 02 Jun</div>
                                            <div>1 days left</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="task-badges"><span className="badge bg-light text-default">#SPK - 08</span><span className="ms-1 badge bg-success-transparent">Designing</span></div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='light' className="btn btn-icon btn-sm no-caret">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                                                    <Dropdown.Item href="#"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="kanban-content mt-2">
                                            <div className="task-image mt-2">
                                                <img src={media36} className="img-fluid rounded kanban-image" alt="" />
                                            </div>
                                            <h6 className="fw-semibold mb-0 mt-2">Design multi usage landing.</h6>
                                        </div>
                                    </div>
                                    <div className="p-3 border-top border-block-start-dashed">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <Link to="#" className="me-2 text-primary">
                                                    <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-semibold fs-12">16</span>
                                                </Link>
                                                <Link to="#" className="text-muted">
                                                    <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-semibold fs-12">28</span>
                                                </Link>
                                            </div>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face2} alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face8} alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face5} alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face10} alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                            </PerfectScrollbar>
                    </div>
                    <div className="d-grid view-more-button mt-3">
                        <Button variant='' className="btn btn-primary-light btn-wave">View More</Button>
                    </div>
                </div>
                <div  className="kanban-tasks-type todo">
                    <div className="pe-3 mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="d-block fw-semibold fs-15">TODO - 36</span>
                            <div>
                                <Button variant='white' onClick={handleShow1} href="#" className="btn btn-sm bg-white text-default border-0 btn-wave">
                                    <i className="ri-add-line align-middle me-1 fw-semibold"></i>Add Task
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div  className="kanban-tasks" id="todo-tasks">
                        <PerfectScrollbar style={{ height: "560px" }}>
                        <div  ref={rightContainerRef} 
                        // id="draggable-right"
                        id="todo-tasks-draggable"
                         data-view-btn="todo-tasks">
                            <Card className="custom-card">
                                <Card.Body className="p-0">
                                    <div className="p-3 kanban-board-head">
                                        <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                            <div><i className="ri-time-line me-1 align-middle"></i>Created - 01 Jun</div>
                                            <div>10 days left</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="task-badges"><span className="badge bg-light text-default">#SPK - 07</span><span className="ms-1 badge bg-pink-transparent">Admin</span><span className="ms-1 badge bg-light text-default">Authentication</span></div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='light' className="btn btn-icon btn-sm no-caret">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                                                    <Dropdown.Item href="#"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="kanban-content mt-2">
                                            <h6 className="fw-semibold mb-1 fs-15">Adding Authentication Pages.</h6>
                                            <div className="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-top border-block-start-dashed">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <Link to="#" className="me-2 text-primary">
                                                    <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-semibold fs-12">06</span>
                                                </Link>
                                                <Link to="#" className="text-muted">
                                                    <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-semibold fs-12">02</span>
                                                </Link>
                                            </div>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face9} alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face8} alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face14} alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="custom-card">
                                <Card.Body className="p-0">
                                    <div className="p-3 kanban-board-head">
                                        <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                            <div><i className="ri-time-line me-1 align-middle"></i>Created - 05 Jun</div>
                                            <div>14 days left</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="task-badges"><span className="badge bg-light text-default">#SPK - 15</span><span className="ms-1 badge bg-success-transparent">Planning</span></div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='light' className="btn btn-icon btn-sm no-caret">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-end">
                                                    <Dropdown.Item href="#"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="kanban-content mt-2">
                                            <div className="task-image mt-2">
                                                <img src={media41} className="img-fluid rounded kanban-image" alt="" />
                                            </div>
                                            <h6 className="fw-semibold mb-0 mt-2">New Project Discussion.</h6>
                                        </div>
                                    </div>
                                    <div className="p-3 border-top border-block-start-dashed">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <Link to="#" className="me-2 text-primary">
                                                    <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-semibold fs-12">17</span>
                                                </Link>
                                                <Link to="#" className="text-muted">
                                                    <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-semibold fs-12">06</span>
                                                </Link>
                                            </div>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face2} alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face8} alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face5} alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face10} alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                            </PerfectScrollbar>
                    </div>
                    <div className="d-grid view-more-button mt-3">
                        <Button variant='primary-light' className="btn btn-wave">View More</Button>
                    </div>
                </div>
                <div className="kanban-tasks-type in-progress">
                    <div className="pe-3 mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="d-block fw-semibold fs-15">ON GOING - 25</span>
                            <div>
                                <Button variant='white' onClick={handleShow1} href="#" className="btn btn-sm bg-white text-default border-0 btn-wave">
                                    <i className="ri-add-line align-middle me-1 fw-semibold"></i>Add Task
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="kanban-tasks" id="inprogress-tasks">
                    <PerfectScrollbar style={{ height: "560px" }}>
                        <div ref={topContainerRef} onMouseEnter={OnDivChange} id="inprogress-tasks-draggable" data-view-btn="inprogress-tasks">
                            <Card className="custom-card">
                                <Card.Body className="p-0">
                                    <div className="p-3 kanban-board-head">
                                        <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                            <div><i className="ri-time-line me-1 align-middle"></i>Created - 02 Jun</div>
                                            <div>5 days left</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="task-badges"><span className="badge bg-light text-default">#SPK - 13</span><span className="ms-1 badge bg-primary-transparent">UI Design</span><span className="ms-1 badge bg-danger-transparent">Development</span></div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='light' className="btn btn-icon btn-sm no-caret">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-end">
                                                    <Dropdown.Item href="#"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="kanban-content mt-2">
                                            <h6 className="fw-semibold mb-1 fs-15">Create Calendar & Mail pages.</h6>
                                            <div className="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-top border-block-start-dashed">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <Link to="#" className="me-2 text-primary">
                                                    <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-semibold fs-12">05</span>
                                                </Link>
                                                <Link to="#" className="text-muted">
                                                    <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-semibold fs-12">13</span>
                                                </Link>
                                            </div>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face13} alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face6} alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="custom-card">
                                <Card.Body className="p-0">
                                    <div className="p-3 kanban-board-head">
                                        <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                            <div><i className="ri-time-line me-1 align-middle"></i>Created - 03 Jun</div>
                                            <div>12 days left</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="task-badges"><span className="badge bg-light text-default ms-1">#SPK - 09</span><span className="ms-1 badge bg-teal-transparent">Product</span></div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='light' className="btn btn-icon btn-sm no-caret">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-end">
                                                    <Dropdown.Item href="#"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="kanban-content mt-2">
                                            <h6 className="fw-semibold mb-1 fs-15">Project design Figma,Sketch.</h6>
                                            <div className="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-top border-block-start-dashed">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <Link to="#" className="me-2 text-primary">
                                                    <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-semibold fs-12">02</span>
                                                </Link>
                                                <Link to="#" className="text-muted">
                                                    <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-semibold fs-12">0</span>
                                                </Link>
                                            </div>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face12} alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    <div className="d-grid view-more-button mt-3">
                        <Button variant='' className="btn btn-primary-light btn-wave">View More</Button>
                    </div>
                        </PerfectScrollbar>
                        
                    </div>
                </div>
                <div className="kanban-tasks-type inreview">
                    <div className="pe-3 mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="d-block fw-semibold fs-15">IN REVIEW - 02</span>
                            <div>
                                <Button variant='white' onClick={handleShow1} href="#" className="btn btn-sm bg-white text-default border-0 btn-wave">
                                    <i className="ri-add-line align-middle me-1 fw-semibold"></i>Add Task
                                </Button>
                            </div>
                        </div>
                    </div>
                    
                    <div  className="kanban-tasks" id="inreview-tasks">
                    <PerfectScrollbar style={{ height: "560px" }}>
                        <div ref={bottomContainerRef} onMouseEnter={OnDivChange} id="inreview-tasks-draggable" data-view-btn="inreview-tasks">
                            <Card className="custom-card">
                                <Card.Body className="p-0">
                                    <div className="p-3 kanban-board-head">
                                        <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                            <div><i className="ri-time-line me-1 align-middle"></i>Created - 05 Jun</div>
                                            <div>14 days left</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="task-badges"><span className="badge bg-light text-default">#SPK - 15</span><span className="ms-1 badge bg-purple-transparent">Review</span></div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='light' className="btn btn-icon btn-sm no-caret">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
                                                    <Dropdown.Item href="#"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="kanban-content mt-2">
                                            <div className="task-image mt-2">
                                                <img src={media43} className="img-fluid rounded kanban-image" alt="" />
                                            </div>
                                            <h6 className="fw-semibold mb-0 mt-2">Design Architecture strategy.</h6>
                                        </div>
                                    </div>
                                    <div className="p-3 border-top border-block-start-dashed">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <Link to="#" className="me-2 text-primary">
                                                    <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-semibold fs-12">09</span>
                                                </Link>
                                                <Link to="#" className="text-muted">
                                                    <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-semibold fs-12">35</span>
                                                </Link>
                                            </div>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face3} alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face5} alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face7} alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="d-grid view-more-button mt-3">
                            <Button variant='' className="btn btn-primary-light btn-wave">View More</Button>
                        </div>
                        </PerfectScrollbar>
                    </div>
                </div>
                <div className="kanban-tasks-type completed">
                    <div className="pe-3 mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="d-block fw-semibold fs-15">COMPLETED - 36</span>
                            <div>
                                <Button variant='white' onClick={handleShow1} href="#" className="btn btn-sm bg-white text-default border-0 btn-wave">
                                    <i className="ri-add-line align-middle me-1 fw-semibold"></i>Add Task
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div  className="kanban-tasks" id="completed-tasks">
                    <PerfectScrollbar style={{ height: "560px" }}>
                        <div ref={lastContainerRef} onMouseEnter={OnDivChange} id="completed-tasks-draggable"  data-view-btn="completed-tasks">
                            <Card className="custom-card">
                                <Card.Body className="p-0">
                                    <div className="p-3 kanban-board-head">
                                        <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                            <div><i className="ri-time-line me-1 align-middle"></i>Created - 12 Jun</div>
                                            <div className="text-success"><i className="ri-check-fill me-1 align-middle d-inline-block"></i>Done</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="task-badges"><span className="badge bg-light text-default">#SPK - 04</span><span className="ms-1 badge bg-success-transparent">UI/UX</span></div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='light' className="btn btn-icon btn-sm no-caret">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-end">
                                                    <Dropdown.Item href="#"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="kanban-content mt-2">
                                            <h6 className="fw-semibold mb-1 fs-15">Sash project update.</h6>
                                            <div className="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-top border-block-start-dashed">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <Link to="#" className="me-2 text-primary">
                                                    <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-semibold fs-12">18</span>
                                                </Link>
                                                <Link to="#" className="text-muted">
                                                    <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-semibold fs-12">03</span>
                                                </Link>
                                            </div>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face6} alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face13} alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="custom-card">
                                <Card.Body className="p-0">
                                    <div className="p-3 kanban-board-head">
                                        <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                            <div><i className="ri-time-line me-1 align-middle"></i>Created - 10 Jun</div>
                                            <div className="text-success"><i className="ri-check-fill me-1 align-middle d-inline-block"></i>Done</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="task-badges"><span className="badge bg-light text-default">#SPK - 10</span><span className="ms-1 badge bg-info-transparent">Development</span></div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='light' className="btn btn-icon btn-sm no-caret">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-end">
                                                    <Dropdown.Item href="#"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="kanban-content mt-2">
                                            <h6 className="fw-semibold mb-1 fs-15">React JS new version update.</h6>
                                            <div className="kanban-task-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla soluta </div>
                                        </div>
                                    </div>
                                    <div className="p-3 border-top border-block-start-dashed">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <Link to="#" className="me-2 text-primary">
                                                    <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-semibold fs-12">22</span>
                                                </Link>
                                                <Link to="#" className="text-muted">
                                                    <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-semibold fs-12">12</span>
                                                </Link>
                                            </div>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face10} alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face11} alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face1} alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card className="custom-card">
                                <Card.Body className="p-0">
                                    <div className="p-3 kanban-board-head">
                                        <div className="d-flex text-muted justify-content-between mb-1 fs-12 fw-semibold">
                                            <div><i className="ri-time-line me-1 align-middle"></i>Created - 07 Jun</div>
                                            <div className="text-success"><i className="ri-check-fill me-1 align-middle d-inline-block"></i>Done</div>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="task-badges"><span className="badge bg-light text-default">#SPK - 16</span><span className="ms-1 badge bg-primary-transparent">Discussion</span></div>
                                            <Dropdown>
                                                <Dropdown.Toggle variant='light' className="btn btn-icon btn-sm no-caret">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu className="dropdown-menu-end">
                                                    <Dropdown.Item href="#"><i className="ri-eye-line me-1 align-middle d-inline-block"></i>View</Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="ri-delete-bin-line me-1 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                                    <Dropdown.Item href="#"><i className="ri-edit-line me-1 align-middle d-inline-block"></i>Edit</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                        <div className="kanban-content mt-2">
                                            <div className="task-image mt-2">
                                                <img src={media86} className="img-fluid rounded kanban-image bg-light" alt="" />
                                            </div>
                                            <h6 className="fw-semibold mb-0 mt-2">Project discussion with client.</h6>
                                        </div>
                                    </div>
                                    <div className="p-3 border-top border-block-start-dashed">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div>
                                                <Link to="#" className="me-2 text-primary">
                                                    <span className="me-1"><i className="ri-thumb-up-fill align-middle fw-normal"></i></span><span className="fw-semibold fs-12">11</span>
                                                </Link>
                                                <Link to="#" className="text-muted">
                                                    <span className="me-1"><i className="ri-message-2-line align-middle fw-normal"></i></span><span className="fw-semibold fs-12">05</span>
                                                </Link>
                                            </div>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src={face4} alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    <div className="d-grid view-more-button mt-3">
                        <Button variant='' className="btn btn-primary-light btn-wave">View More</Button>
                    </div>

                        </PerfectScrollbar>
                    </div>
                </div>
            </div>
            <Modal centered className=" fade" id="add-board" tabIndex={-1} aria-hidden="true" show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton className="modal-header">
                    <h6 className="modal-title">Add Board</h6>
                </Modal.Header>
                <Modal.Body className="px-4">
                    <Row>
                        <Col xl={12}>
                            <Form.Label htmlFor="board-title" className="form-label">Task Board Title</Form.Label>
                            <Form.Control type="text" className="form-control" id="board-title" placeholder="Board Title" />
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='light' type="button" className="btn" onClick={handleClose}>Cancel</Button>
                    <Button variant='primary' type="button" className="btn">Add Board</Button>
                </Modal.Footer>
            </Modal>
            <Modal className=" fade" id="add-task" tabIndex={-1} aria-hidden="true" show={show1} onHide={handleClose1} animation={false}>
                <Modal.Header closeButton className="">
                    <h6 className="modal-title">Add Task</h6>
                </Modal.Header>
                <Modal.Body className=" px-4">
                    <div className="row gy-2">
                        <Col xl={6}>
                            <Form.Label htmlFor="task-name" className="form-label">Task Name</Form.Label>
                            <Form.Control type="text" className="form-control" id="task-name" placeholder="Task Name" />
                        </Col>
                        <Col xl={6}>
                            <Form.Label htmlFor="task-id" className="form-label">Task ID</Form.Label>
                            <Form.Control type="text" className="form-control" id="task-id" placeholder="Task ID" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="text-area" className="form-label">Task Description</Form.Label>
                            <Form.Control as="textarea" className="form-control" id="text-area" rows={2} placeholder="Write Description"></Form.Control>
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="text-area" className="form-label">Task Images</Form.Label>
                            <FilePond
                                files={files}
                                onupdatefiles={setFiles}
                                allowMultiple={true}
                                maxFiles={3}
                                server="/api"
                                name="files" /* sets the file input name, it's filepond by default */
                                labelIdle='Drag & Drop your file here or click '
                            />
                        </Col>
                        <Col xl={12}>
                            <Form.Label className="form-label">Assigned To</Form.Label>
                            <Select isMulti name="colors" options={Option2} className="basic-multi-select"
                                menuPlacement='auto' classNamePrefix="Select2"
                            />
                        </Col>
                        <Col xl={7}>
                            <Form.Label className="form-label">Target Date</Form.Label>
                            <div className="form-group">
                                <InputGroup>
                                    <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={handleDateChange}
                                        timeInputLabel="Time:"
                                        dateFormat="MM/dd/yyyy h:mm aa"
                                        showTimeInput
                                        placeholderText='Choose date and time'
                                    />
                                </InputGroup>
                            </div>
                        </Col>
                        <Col xl={5}>
                            <Form.Label className="form-label">Tags</Form.Label>
                            <Select isMulti name="colors" options={Option3} className="basic-multi-select"
                                menuPlacement='auto' classNamePrefix="Select2"
                            />
                        </Col>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='light' type="button" className="btn" onClick={handleClose1}>Cancel</Button>
                    <Button variant='primary' type="button" className="btn">Add Task</Button>
                </Modal.Footer>
            </Modal>

        </Fragment>
    );
};
export default Kanbanboard;
