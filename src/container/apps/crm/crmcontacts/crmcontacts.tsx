import { FC, Fragment, useRef, useState ,ChangeEvent} from 'react';
import { Button, Card, Col, Dropdown, Form, InputGroup, Modal, Offcanvas, Pagination, Row, Table } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import { Loopingdata } from './contactsdata';
import face2 from "../../../../assets/images/faces/2.jpg";
import face4 from "../../../../assets/images/faces/4.jpg";
import face9 from "../../../../assets/images/faces/9.jpg";
import face10 from "../../../../assets/images/faces/10.jpg";
import face8 from "../../../../assets/images/faces/8.jpg";
import DatePicker from 'react-datepicker';
import Select from 'react-select';

interface CrmcontactsProps { }

const Crmcontacts: FC<CrmcontactsProps> = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(face9); // Set the default image URL here
    const fileInputRef = useRef<HTMLInputElement | null>(null);
  
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files && e.target.files[0];
  
      if (selectedFile) {
        // You can handle the file here, for example, upload it to a server.
  
        // Read the selected image and set it in state
        const reader = new FileReader();
        reader.onload = (event) => {
          setSelectedImage(event.target?.result as string);
        };
        reader.readAsDataURL(selectedFile);
      }
    };
  
    const openFileInput = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };
    const [, setStartDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Delete function
    const [manageInvoiceData, setManageInvoiceData] = useState([...Loopingdata]);
    const handleDelete = (idToRemove: number) => {
        const updatedInvoiceData = manageInvoiceData.filter((item) => item.id !== idToRemove);
        setManageInvoiceData(updatedInvoiceData);
    };
    const [selectAllChecked, setSelectAllChecked] = useState(false);

    // Create a state variable to track selected items
    const [selectedItems, setSelectedItems] = useState<number[]>([]);

    // Function to handle the "Select All" checkbox click event
    const handleSelectAllClick = () => {
        setSelectAllChecked(!selectAllChecked);

        // Update the state of individual checkboxes in the tbody
        if (selectAllChecked) {
            setSelectedItems([]);
        } else {
            const allIds = manageInvoiceData.map((item) => item.id);
            setSelectedItems(allIds);
        }
    };

    // Function to handle individual checkbox clicks
    const handleCheckboxClick = (id: number) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter((item) => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }

        // Check if all individual checkboxes are selected and update the "Select All" checkbox accordingly
        const allSelected = selectedItems.length === manageInvoiceData.length;
        setSelectAllChecked(allSelected);
    };
    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const Data = [
        { value: 'Select Tag', label: 'Select Tag' },
        { value: 'New Lead', label: 'New Lead' },
        { value: 'Prospect', label: 'Prospect' },
        { value: 'Customer', label: 'Customer' },
        { value: 'Hot Lead', label: 'Hot Lead' },
        { value: 'Partner', label: 'Partner' },
        { value: 'LostCustomer', label: 'LostCustomer' },
        { value: 'Influencer', label: 'Influencer' },
        { value: 'Subscriber', label: 'Subscriber' }
    ];
    const Data1 = [
        { value: 'Social Media', label: 'Social Media' },
        { value: 'Direct mail', label: 'Direct mail' },
        { value: 'Blog Articles', label: 'Blog Articles' },
        { value: 'Affiliates', label: 'Affiliates' },
        { value: 'Organic search', label: 'Organic search' }
    ];

    //Datepicker function
    const handleDateChange = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };

    return (
        <Fragment>
            <Pageheader title="Contacts" heading="CRM" active="Contacts" />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="card-header d-flex align-items-center justify-content-between flex-wrap gap-3">
                            <Card.Title>
                                Contacts<span className="badge bg-light text-default rounded ms-1 fs-12 align-middle">28</span>
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant='primary' className="btn  btn-sm" onClick={handleShow1}
                                    data-bs-target="#create-contact"><i className="ri-add-line me-1 fw-semibold align-middle"></i>Create Contact</Button>
                                <Button variant='success-light' className="btn  btn-sm">Export As CSV</Button>
                                <Dropdown>
                                    <Dropdown.Toggle variant='light' className="btn btn-light btn-sm btn-wave waves-effect waves-light no-caret">
                                        Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#">Newest</Dropdown.Item>
                                        <Dropdown.Item href="#">Date Added</Dropdown.Item>
                                        <Dropdown.Item href="#">A - Z</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </Card.Header>
                        <Card.Body className="p-0">
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <input
                                                    className="form-check-input check-all"
                                                    type="checkbox"
                                                    id="all-products"
                                                    value=""
                                                    aria-label="..."
                                                    onChange={handleSelectAllClick}
                                                    checked={selectAllChecked}
                                                />
                                            </th>
                                            <th scope="col">Contact Name</th>
                                            <th scope="col">Lead Score</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Company</th>
                                            <th scope="col">Lead Source</th>
                                            <th scope="col">Tags</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {manageInvoiceData.map((idx: any) => (
                                            <tr className="crm-contact" key={Math.random()}>
                                                <td>
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id={idx.id.toString()}
                                                        value=""
                                                        aria-label="..."
                                                        onChange={() => handleCheckboxClick(idx.id)}
                                                        checked={selectedItems.includes(idx.id)}
                                                    />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-rounded avatar-sm">
                                                                <img src={idx.src1} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <a data-bs-toggle="offcanvas" href="#offcanvasExample"
                                                                role="button" aria-controls="offcanvasExample"><span className="d-block fw-semibold">{idx.name}</span></a>
                                                            <span className="d-block text-muted fs-11" data-bs-toggle="tooltip" data-bs-custom-classname="tooltip-primary" title="Last Contacted"><i className="ri-account-circle-line me-1 fs-13 align-middle"></i>{idx.time}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.score}
                                                </td>
                                                <td>
                                                    <div>
                                                        <span className="d-block mb-1"><i className="ri-mail-line me-2 align-middle fs-14 text-muted"></i>{idx.mail}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <span className="d-block"><i className="ri-phone-line me-2 align-middle fs-14 text-muted"></i>{idx.cell}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                                <img src={idx.src2} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>{idx.text1}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.text2}
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center flex-wrap gap-1">
                                                        <span className={`badge bg-${idx.color1}-transparent ${idx.class1}`}>{idx.text3}</span>
                                                        <span className={`badge bg-${idx.color2}-transparent ${idx.class2}`}>{idx.text4}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Button variant='warning-light' data-bs-toggle="offcanvas" href="#offcanvasExample" onClick={handleShow}
                                                            role="button" aria-controls="offcanvasExample" className="btn btn-sm btn-icon"><i className="ri-eye-line"></i></Button>
                                                        <Button variant='' className="btn btn-sm btn-info-light btn-icon"><i className="ri-pencil-line"></i></Button>
                                                        <Button variant='' className="btn btn-sm btn-danger-light btn-icon contact-delete"
                                                            onClick={() => handleDelete(idx.id)}
                                                        >
                                                            <i className="ri-delete-bin-line"></i></Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                        <Card.Footer className="border-top-0">
                            <div className="d-flex align-items-center">
                                <div>
                                    Showing 10 Entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <Pagination className="pagination mb-0">
                                            <Pagination.Item disabled href="#"> Prev </Pagination.Item>
                                            <Pagination.Item active href="#">1</Pagination.Item>
                                            <Pagination.Item href="#">2</Pagination.Item>
                                            <Pagination.Item className="pagination-next" href="#">next</Pagination.Item>
                                        </Pagination>
                                    </nav>
                                </div>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Offcanvas show={show} onHide={handleClose} placement='end' className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasExample"
                aria-labelledby="offcanvasExample">
                <Offcanvas.Body className="offcanvas-body p-0">
                    <div className="d-sm-flex align-items-top p-4 border-bottom border-block-end-dashed main-profile-cover">
                        <div>
                            <span className="avatar avatar-xxl avatar-rounded online me-3">
                                <img src={face4} alt="" />
                            </span>
                        </div>
                        <div className="flex-fill main-profile-info">
                            <div className="d-flex align-items-center justify-content-between">
                                <h6 className="fw-semibold mb-1 text-fixed-white">Lisa Convay</h6>
                                <Button variant='' type="button" className="btn-close crm-contact-close-btn"
                                    onClick={handleClose}
                                    data-bs-dismiss="offcanvas" aria-label="Close"></Button>
                            </div>
                            <p className="mb-1 text-muted text-fixed-white op-7">Chief Executive Officer (C.E.O)</p>
                            <p className="fs-12 text-fixed-white mb-4 op-5">
                                <span className="me-3"><i className="ri-building-line me-1 align-middle"></i>Georgia</span>
                                <span><i className="ri-map-pin-line me-1 align-middle"></i>Washington D.C</span>
                            </p>
                            <div className="d-flex mb-0">
                                <div className="me-4">
                                    <p className="fw-bold fs-20 text-fixed-white text-shadow mb-0">113</p>
                                    <p className="mb-0 fs-11 op-5 text-fixed-white">Deals</p>
                                </div>
                                <div className="me-4">
                                    <p className="fw-bold fs-20 text-fixed-white text-shadow mb-0">$12.2k</p>
                                    <p className="mb-0 fs-11 op-5 text-fixed-white">Contributions</p>
                                </div>
                                <div className="me-4">
                                    <p className="fw-bold fs-20 text-fixed-white text-shadow mb-0">$10.67k</p>
                                    <p className="mb-0 fs-11 op-5 text-fixed-white">Comitted</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 border-bottom border-block-end-dashed">
                        <div className="mb-0">
                            <p className="fs-15 mb-2 fw-semibold">Professional Bio :</p>
                            <p className="text-muted op-8 mb-0">
                                I am <b className="text-default">Lisa Convay,</b> here by conclude that,i am the founder and managing director of the prestigeous company name laugh at all and acts as the cheif executieve officer of the company.
                            </p>
                        </div>
                    </div>
                    <div className="p-4 border-bottom border-block-end-dashed">
                        <p className="fs-14 mb-2 me-4 fw-semibold">Contact Information :</p>
                        <div className="">
                            <div className="d-flex align-items-center mb-2">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-light text-muted">
                                        <i className="ri-mail-line align-middle fs-14"></i>
                                    </span>
                                </div>
                                <div>
                                    sonyataylor2531@gmail.com
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-light text-muted">
                                        <i className="ri-phone-line align-middle fs-14"></i>
                                    </span>
                                </div>
                                <div>
                                    +(555) 555-1234
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-0">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-light text-muted">
                                        <i className="ri-map-pin-line align-middle fs-14"></i>
                                    </span>
                                </div>
                                <div>
                                    MIG-1-11, Monroe Street, Georgetown, Washington D.C, USA,20071
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 border-bottom border-block-end-dashed d-flex align-items-center">
                        <p className="fs-14 mb-0 me-4 fw-semibold">Social Networks :</p>
                        <div className="btn-list mb-0">
                            <Button variant='' className="btn btn-sm btn-icon btn-primary-light btn-wave waves-effect waves-light mb-0">
                                <i className="ri-facebook-line fw-semibold"></i>
                            </Button>
                            <Button variant='' className="btn btn-sm btn-icon btn-secondary-light btn-wave waves-effect waves-light mb-0">
                                <i className="ri-twitter-line fw-semibold"></i>
                            </Button>
                            <Button variant='' className="btn btn-sm btn-icon btn-warning-light btn-wave waves-effect waves-light mb-0">
                                <i className="ri-instagram-line fw-semibold"></i>
                            </Button>
                            <Button variant='' className="btn btn-sm btn-icon btn-success-light btn-wave waves-effect waves-light mb-0">
                                <i className="ri-github-line fw-semibold"></i>
                            </Button>
                            <Button variant='' className="btn btn-sm btn-icon btn-danger-light btn-wave waves-effect waves-light mb-0">
                                <i className="ri-youtube-line fw-semibold"></i>
                            </Button>
                        </div>
                    </div>
                    <div className="p-4 border-bottom border-block-end-dashed">
                        <p className="fs-14 mb-2 me-4 fw-semibold">Tags :</p>
                        <div>
                            <span className="badge bg-light text-muted m-1">New Lead</span>
                            <span className="badge bg-light text-muted m-1">Others</span>
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="fs-14 mb-2 fw-semibold">Relationship Manager :
                            <a className="fs-14 text-primary mb-0 float-end" href="#"><i className="ri-add-line me-1 align-middle"></i>Add Manager</a>
                        </p>
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
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            <Modal show={show1} onHide={handleClose1} className="modal fade" id="create-contact" tabIndex={-1} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <Modal.Header closeButton className="modal-header">
                            <h6 className="modal-title">Create Contact</h6>
                        </Modal.Header>
                        <Modal.Body className="modal-body px-4">
                            <div className="row gy-3">
                                <Col xl={12}>
                                    <div className="mb-0 text-center">
                                        <span className="avatar avatar-xxl avatar-rounded">
                                            <img src={selectedImage || ''} alt="" id="profile-img" />
                                            <span className="badge rounded-pill bg-primary avatar-badge" onClick={openFileInput}>
                                                <input
                                                type="file"
                                                name="photo"
                                                className="position-absolute w-100 h-100 op-0"
                                                id="profile-change"
                                                ref={fileInputRef}
                                                onChange={handleImageChange}
                                                style={{ display: 'none' }}
                                                />
                                                <i className="fe fe-camera"></i>
                                            </span>
                                        </span>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="deal-title">Deal Title</Form.Label>
                                    <Form.Control type="text" id="deal-title" placeholder="Deal Title" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="contact-lead-score">Lead Score</Form.Label>
                                    <Form.Control type="number" id="contact-lead-score" placeholder="Lead Score" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="contact-mail">Email</Form.Label>
                                    <Form.Control type="email" id="contact-mail" placeholder="Enter Email" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="contact-phone">Phone No</Form.Label>
                                    <Form.Control type="tel" id="contact-phone" placeholder="Enter Phone Number" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="company-name">Company Name</Form.Label>
                                    <Form.Control type="text" id="company-name" placeholder="Company Name" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label>Lead Source</Form.Label>
                                    <Select name="colors" options={Data1} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Data1[0]]}
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label>Last Contacted</Form.Label>
                                    <div className="form-group">
                                        <InputGroup>
                                            <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
                                            <DatePicker
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
                                    <Form.Label>Tags</Form.Label>
                                    <Select isMulti name="colors" options={Data} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Tag"
                                    />
                                </Col>
                            </div>
                        </Modal.Body>
                        <div className="modal-footer">
                            <Button variant='' type="button" className="btn btn-light"
                            >Cancel</Button>
                            <Button variant='' type="button" className="btn btn-primary">Create Contact</Button>
                        </div>
                    </div>
                </div>
            </Modal>

        </Fragment>
    );
};

export default Crmcontacts;
