import { FC, Fragment, useState, ChangeEvent, useRef  } from 'react';
import { Button, Card, Col, Dropdown, Form, Modal, Offcanvas, Pagination, Row, Table } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import { Companydata, Selectdata1, Selectdata2 } from './companiesdata';
import Select from 'react-select';
import face2 from "../../../../assets/images/faces/2.jpg";
import logo11 from "../../../../assets/images/company-logos/11.png";
import logo12 from "../../../../assets/images/company-logos/12.png";

interface CompaniesProps { }

const Companies: FC<CompaniesProps> = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(logo11); // Set the default image URL here
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
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show1, setShow1] = useState(false);

    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    return (
        <Fragment>
            <Pageheader title="Companies" heading="CRM" active="Companies" />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Companies <span className="badge bg-light text-default rounded ms-1 fs-12 align-middle">14</span>
                            </Card.Title>
                            <div className="d-flex flex-wrap gap-2">
                                <Button variant='primary' className="btn btn-sm btn-wave" onClick={handleShow1}
                                    data-bs-target="#create-contact"><i className="ri-add-line me-1 fw-semibold align-middle"></i>Add Company</Button>
                                <Button variant='' className="btn btn-success-light btn-sm btn-wave">Export As CSV</Button>
                                <Dropdown>
                                    <Dropdown.Toggle variant='' href="#" className="btn btn-light btn-sm btn-wave no-caret">
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
                                                <Form.Check className="" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                                            </th>
                                            <th scope="col">Company Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Industry</th>
                                            <th scope="col">Company Size</th>
                                            <th scope="col">Key Contact</th>
                                            <th scope="col">Total Deals</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Companydata.map((idx) => (
                                            <tr className="crm-contact" key={Math.random()}>
                                                <td>
                                                    <Form.Check className="" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                                <img src={idx.src2} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <a data-bs-toggle="offcanvas" href="#offcanvasExample"
                                                                role="button" aria-controls="offcanvasExample">{idx.text1}</a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <span className="d-block mb-1"><i className="ri-mail-line me-2 align-middle fs-14 text-muted"></i>
                                                            {idx.mail}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <span className="d-block"><i className="ri-phone-line me-2 align-middle fs-14 text-muted"></i>{idx.cell}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.text2}
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center flex-wrap gap-1">
                                                        <span className={`badge bg-${idx.color} ${idx.class}`}>{idx.badge}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="lh-1">
                                                            <span className="avatar avatar-rounded avatar-sm">
                                                                <img src={idx.src1} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="d-block fw-semibold">{idx.name}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.score}
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Button variant='warning-light' href="#offcanvasExample" onClick={handleShow}
                                                            role="button" className="btn btn-sm btn-icon">
                                                            <i className="ri-eye-line"></i></Button>
                                                        <Button variant='' className="btn btn-sm btn-info-light btn-icon"><i className="ri-pencil-line"></i></Button>
                                                        <Button variant='' className="btn btn-sm btn-danger-light btn-icon contact-delete"><i className="ri-delete-bin-line"></i></Button>
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
                                            <Pagination.Item disabled href="#">Prev</Pagination.Item>
                                            <Pagination.Item active href="#">1</Pagination.Item>
                                            <Pagination.Item href="#">2</Pagination.Item>
                                            <Pagination.Item className="pagination-next" href="#">next
                                            </Pagination.Item>
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
                <div className="offcanvas-body p-0">
                    <div className="d-sm-flex align-items-top p-4 border-bottom border-block-end-dashed main-profile-cover">
                        <div>
                            <span className="avatar avatar-xxl avatar-rounded me-3 bg-light-transparent p-2">
                                <img src={logo12} alt="" />
                            </span>
                        </div>
                        <div className="flex-fill main-profile-info">
                            <div className="d-flex align-items-center justify-content-between">
                                <h6 className="fw-semibold mb-1 text-fixed-white">Spruko Technologies</h6>
                                <Button variant='' type="button" className="btn-close crm-contact-close-btn" data-bs-dismiss="offcanvas" aria-label="Close"></Button>
                            </div>
                            <p className="mb-1 text-muted text-fixed-white op-7">Telecommunications</p>
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
                                <b className="text-default">Spruko</b> Technologies is a leading technology company specializing in innovative software solutions for businesses worldwide. With a strong focus on cutting-edge technologies and a team of skilled professionals.
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
                                    sprukotechnologies2981@gmail.com
                                </div>
                            </div>
                            <div className="d-flex align-items-center mb-2">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-light text-muted">
                                        <i className="ri-phone-line align-middle fs-14"></i>
                                    </span>
                                </div>
                                <div>
                                    1678-28993-223
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
                    <div className="p-4 border-bottom border-block-end-dashed d-flex align-items-center gap-3">
                        <div className="fs-14 fw-semibold">Company Size:</div>
                        <div>
                            <span className="badge bg-primary-transparent m-1">Corporate</span> - 1001+ Employees
                        </div>
                    </div>
                    <div className="p-4 d-flex align-items-center gap-3">
                        <div className="fs-14 fw-semibold">
                            Key Contact :
                        </div>
                        <div className="d-flex align-items-center gap-2">
                            <div className="lh-1">
                                <span className="avatar avatar-rounded avatar-sm">
                                    <img src={face2} alt="img" />
                                </span>
                            </div>
                            <div className="fw-semibold">Lisa Convay</div>
                        </div>
                    </div>
                </div>
            </Offcanvas>
            <Modal show={show1} onHide={handleClose1} className="modal fade" id="create-contact" tabIndex={-1} aria-hidden="true">
                <Modal.Header closeButton className="modal-header">
                    <h6 className="modal-title">Add Company</h6>
                </Modal.Header>
                <Modal.Body className="px-4">
                    <div className="row gy-3">
                        <Col xl={12}>
                            <div className="mb-0 text-center">
                                <span className="avatar avatar-xxl avatar-rounded p-2 bg-light">
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
                            <Form.Label htmlFor="company-name">Company Name</Form.Label>
                            <Form.Control type="text" id="company-name" placeholder="Contact Name" />
                        </Col>
                        <Col xl={6}>
                            <Form.Label htmlFor="company-lead-score">Total Deals</Form.Label>
                            <Form.Control type="number" id="company-lead-score" placeholder="Total Deals" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="company-mail">Email</Form.Label>
                            <Form.Control type="email" id="company-mail" placeholder="Enter Email" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="company-phone">Phone No</Form.Label>
                            <Form.Control type="tel" id="company-phone" placeholder="Enter Phone Number" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label htmlFor="key-contact">Key Contact</Form.Label>
                            <Form.Control type="text" id="key-contact" placeholder="Contact Name" />
                        </Col>
                        <Col xl={12}>
                            <Form.Label>Industry</Form.Label>
                            <Select name="colors" options={Selectdata2} className="basic-multi-select"
                                menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata2[0]]}
                            />
                        </Col>
                        <Col xl={12}>
                            <Form.Label>Company Size</Form.Label>
                            <Select name="colors" options={Selectdata1} className="basic-multi-select"
                                menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata1[0]]}
                            />
                        </Col>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='' type="button" className="btn btn-light" onClick={handleClose1}
                        data-bs-dismiss="modal">Cancel</Button>
                    <Button variant='' type="button" className="btn btn-primary">Create Contact</Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

export default Companies;
