import  { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Dropdown, Form, OverlayTrigger, Pagination, Row, Tooltip } from 'react-bootstrap';
import { Contactlistdata } from './contactdata';

interface ContactsProps { }

const Contacts: FC<ContactsProps> = () => {
    // for User search function
    const [Data, setData] = useState(Contactlistdata);

    const userdata: any = [];

    const myfunction = (idx: any) => {
        let Data;
        for (Data of Contactlistdata) {
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
    return (
        <Fragment>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card mt-4">
                        <Card.Body>
                            <div className="contact-header">
                                <div className="d-sm-flex d-block align-items-center justify-content-between">
                                    <div className="h5 fw-semibold mb-0">Contacts</div>
                                    <div className="d-flex mt-sm-0 mt-2 align-items-center">
                                        <div className="input-group">
                                            <Form.Control type="text" className="bg-light border-0"
                                                placeholder="Search folder....." onChange={(ele) => { myfunction(ele.target.value); }} />
                                            <Button variant='' className="btn btn-light" type="button" id="search-contact-member"><i className="ri-search-line text-muted"></i></Button>
                                        </div>
                                        <Dropdown className="ms-2">
                                            <Dropdown.Toggle variant='primary-light' className="btn btn-icon  btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="ti ti-dots-vertical"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item href="#">Delete All</Dropdown.Item>
                                                <Dropdown.Item href="#">Copy All</Dropdown.Item>
                                                <Dropdown.Item href="#">Move To</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                            <OverlayTrigger placement="top" overlay={<Tooltip>Add Contact </Tooltip>}>
                                        <Button variant='' className="btn btn-icon btn-secondary-light ms-2">
                                                <i className="ri-add-line"></i>
                                        </Button>
                                            </OverlayTrigger>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                {Data.map((idx) => (
                    <Col xxl={3} xl={6} lg={6} md={6} sm={12} key={Math.random()}>
                        <Card className="custom-card">
                            <Card.Body className="contact-action">
                                <div className="contact-overlay"></div>
                                <div className="d-flex align-items-top ">
                                    <div className="d-flex flex-fill flex-wrap gap-2">
                                        <div className="avatar avatar-xl avatar-rounded me-3">
                                            <img src={idx.src} alt="" />
                                        </div>
                                        <div>
                                            <h6 className="mb-1 fw-semibold">
                                                {idx.name}
                                            </h6>
                                            <p className="mb-1 text-muted contact-mail text-truncate">{idx.mail}</p>
                                            <p className="fw-semibold fs-11 mb-0 text-primary">
                                                {idx.cell}
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <i className={`ri-heart-3-${idx.class} fs-16 text-${idx.color}`}></i>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                    <Button variant='' type="button" className="btn btn-sm btn-light contact-hover-btn">
                                        View Contact
                                    </Button>
                                    <Dropdown className="contact-hover-dropdown">
                                        <Dropdown.Toggle variant='' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ri-more-2-fill"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
                                            <Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
                                            <Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
                                            <Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
                                            <Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                            <Dropdown.Item href="#"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Button variant='' aria-label="button" className="btn btn-sm btn-icon btn-light contact-hover-dropdown1" type="button">
                                        <i className="ri-heart-3-fill text-danger"></i>
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
                <Col xxl={3} xl={6} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Body className="card-body contact-action">
                            <div className="contact-overlay"></div>
                            <div className="d-flex align-items-top">
                                <div className="d-flex flex-fill flex-wrap gap-2">

                                    <div className="avatar avatar-xl avatar-rounded me-3 bg-primary">
                                        SJ
                                    </div>
                                    <div>
                                        <h6 className="mb-1 fw-semibold">
                                            Shensovic Jeremy
                                        </h6>
                                        <p className="mb-1 text-muted contact-mail text-truncate">shensovicjeremy@gmail.com</p>
                                        <p className="fw-semibold fs-11 mb-0 text-primary">
                                            +1(555) 238 2342
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <i className="ri-heart-3-line fs-16 text-muted"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center gap-2 contact-hover-buttons">
                                <Button variant='' type="button" className="btn btn-sm btn-light contact-hover-btn">
                                    View Contact
                                </Button>
                                <Dropdown className="dropdown contact-hover-dropdown">
                                    <Dropdown.Toggle variant='' className="btn btn-sm btn-icon btn-light btn-wave no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ri-more-2-fill"></i>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#"><i className="ri-share-line me-2 align-middle d-inline-block"></i>Share</Dropdown.Item>
                                        <Dropdown.Item href="#"><i className="ri-phone-line me-2 align-middle d-inline-block"></i>Call</Dropdown.Item>
                                        <Dropdown.Item href="#"><i className="ri-chat-2-line me-2 align-middle d-inline-block"></i>Message</Dropdown.Item>
                                        <Dropdown.Item href="#"><i className="ri-video-chat-line me-2 align-middle d-inline-block"></i>Video Call</Dropdown.Item>
                                        <Dropdown.Item href="#"><i className="ri-delete-bin-5-line me-2 align-middle d-inline-block"></i>Delete</Dropdown.Item>
                                        <Dropdown.Item href="#"><i className="ri ri-heart-3-line me-2 align-middle d-inline-block"></i>Favourite</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                <Button variant='' aria-label="button" className="btn btn-sm btn-icon btn-light contact-hover-dropdown1" type="button">
                                    <i className="ri-heart-3-fill text-danger"></i>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>

                <nav aria-label="Page navigation">
                    <Pagination className="justify-content-end">
                        <Pagination.Item disabled href="#">Previous</Pagination.Item>
                        <Pagination.Item href="#">1</Pagination.Item>
                        <Pagination.Item href="#">2</Pagination.Item>
                        <Pagination.Item href="#">Next</Pagination.Item>
                    </Pagination>
                </nav>
            </Row>
        </Fragment>
    );
};

export default Contacts;
