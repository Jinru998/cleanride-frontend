import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Form, ListGroup, Row } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import { Recentblogdata, Selectdata1, Selectdata2, Selectdata3 } from './createdata';
import Select from 'react-select';
//filepond
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);
import DatePicker from 'react-datepicker';
import SunEditor from 'suneditor-react';

interface CreateblogProps { }

const Createblog: FC<CreateblogProps> = () => {
    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    const [files, setFiles] = useState<any>([]);
    return (
        <Fragment>
            <Pageheader title="Create Blog" heading="Blog" active="Create Blog" />
            <Row>
                <Col xxl={9} xl={12} lg={12} md={12} sm={12}>
                    <Card className="custom-card new-blog">
                        <Card.Header>
                            <Card.Title>New Blog</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-3">
                                <Col xl={12}>
                                    <Form.Label htmlFor="blog-title" className="form-label">Blog Title</Form.Label>
                                    <Form.Control type="text" className="form-control" id="blog-title" placeholder="Blog Title" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="blog-category" className="form-label">Blog Category</Form.Label>
                                    <Select name="colors" options={Selectdata1} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Category"
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="blog-author" className="form-label">Blog Author</Form.Label>
                                    <Form.Control type="text" className="form-control" id="blog-author" placeholder="Enter Name" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="blog-author-email" className="form-label">Email</Form.Label>
                                    <Form.Control type="text" className="form-control" id="blog-author-email" placeholder="Enter Email" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="publish-date" className="form-label">Publish Date</Form.Label>
                                    <DatePicker placeholderText='Choose date' selected={startDate} onChange={handleDateChange} className='form-control' />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="publish-time" className="form-label">Publish Time</Form.Label>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={handleDateChange}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="h:mm aa"
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="product-status-add" className="form-label">Published Status</Form.Label>
                                    <Select name="colors" options={Selectdata2} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Category"
                                    />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="blog-tags" className="form-label">Blog Tags</Form.Label>
                                    <Select isMulti name="colors" options={Selectdata3} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Category" defaultValue={[Selectdata3[0], Selectdata3[3]]}
                                    />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label className="form-label">Blog Content</Form.Label>
                                    <div id="blog-content">
                                        <SunEditor />
                                    </div>
                                </Col>
                                <Col xl={12} className="blog-images-container">
                                    <Form.Label htmlFor="blog-author-email" className="form-label">Blog Images</Form.Label>
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
                                    <Form.Label className="form-label">Blog Type</Form.Label>
                                    <div className="d-flex align-items-center">
                                        <div className="form-check me-3">
                                            <Form.Check className="" type="radio" name="blog-type" id="blog-free1" defaultChecked />
                                            <Form.Label className="form-check-label" htmlFor="blog-free1">
                                                Free
                                            </Form.Label>
                                        </div>
                                        <div className="form-check">
                                            <Form.Check className="" type="radio" name="blog-type" id="blog-paid1" />
                                            <Form.Label className="form-check-label" htmlFor="blog-paid1">
                                                Paid
                                            </Form.Label>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            <div className="btn-list text-end">
                                <Button variant='light' type="button" className="btn btn-sm">Save As Draft</Button>
                                <Button variant='primary' type="button" className="btn btn-sm">Post Blog</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3} xl={12} lg={12} md={12} sm={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Recent Blogs
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <ListGroup className="list-group">
                                {Recentblogdata.map((idx) => (
                                    <ListGroup.Item key={Math.random()}>
                                        <div className="d-flex gap-2 flex-wrap align-items-center">
                                            <span className="avatar avatar-xl me-1">
                                                <img src={idx.src} className="img-fluid" alt="..." />
                                            </span>
                                            <div className="flex-fill">
                                                <a href="#" className="fs-14 fw-semibold mb-0">{idx.title}</a>
                                                <p className="mb-1 popular-blog-content text-truncate">{idx.text}
                                                </p>
                                                <span className="text-muted fs-11">{idx.time}</span>
                                            </div>
                                            <div>
                                                <Button variant='light' aria-label="button" type="button" className="btn btn-icon btn-light btn-sm rtl-rotate"><i className="ri-arrow-right-s-line"></i></Button>
                                            </div>
                                        </div>
                                    </ListGroup.Item>
                                ))}
                                <ListGroup.Item className="text-center">
                                    <Button variant='primary-light' type="button" className="btn">Load more</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Createblog;
