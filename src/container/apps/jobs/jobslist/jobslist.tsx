import  { FC, Fragment } from 'react';
import { Card, Col, Dropdown, Pagination, Row, Table } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import { Tabledata } from './joblistdata';

interface JobslistProps {}

const Jobslist: FC<JobslistProps> = () => {
    return(
  <Fragment>
                <Pageheader title="Jobs List" heading="Jobs" active="Jobs List" />
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card overflow-hidden">
                            <Card.Header className="card-header justify-content-between">
                                <Card.Title>
                                    All Jobs List
                                </Card.Title>
                                <div className="d-flex flex-wrap gap-2">
                                    <Link to={`${import.meta.env.BASE_URL}apps/jobs/jobpost/`} className="btn btn-primary btn-wave btn-sm">
                                        <i className="ri-add-line me-1 align-middle"></i>Post Job
                                    </Link> 
                                    <div>
                                        <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example"/>
                                    </div>
                                    <Dropdown className="dropdown">
                                        <Dropdown.Toggle href="#" className="btn btn-primary btn-sm btn-wave no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                            Sort By<i className="ri-arrow-down-s-line align-middle ms-1 d-inline-block"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu role="menu">
                                            <Dropdown.Item href="#">Posted Date</Dropdown.Item>
                                            <Dropdown.Item href="#">Status</Dropdown.Item>
                                            <Dropdown.Item href="#">Department</Dropdown.Item>
                                            <Dropdown.Item href="#">Job Type</Dropdown.Item>
                                            <Dropdown.Item href="#">Newest</Dropdown.Item>
                                            <Dropdown.Item href="#">Oldest</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <div className="table-responsive">
                                    <Table className="table table-hover text-nowrap">
                                        <thead>
                                            <tr>
                                                <th scope="row" className="ps-4"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob1" value="" aria-label="..."/></th>
                                                <th scope="col">Job Title</th>
                                                <th scope="col">Company</th>
                                                <th scope="col">Department</th>
                                                <th scope="col">Applications</th>
                                                <th scope="col">Vacancies</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Job Type</th>
                                                <th scope="col">Posted Date</th>
                                                <th scope="col">Expires on</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {Tabledata.map((idx)=>(
                                            <tr key={Math.random()}>
                                                <td className="ps-4">
                                                {idx.checked}
                                                </td>
                                                <td>
                                                    <div className="d-flex">
                                                        <span className="avatar avatar-md avatar-rounded bg-primary bg-opacity-10">
                                            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24">
                                                        <path  fill="var(--primary-color)" d=
                                                        {idx.class2}
                                                        ></path></svg></span>
                                                        <div className="ms-2">
                                                            <p className="fw-semibold mb-0 d-flex align-items-center"><Link to={`${import.meta.env.BASE_URL}apps/jobs/jobdetails/`}>{idx.class}</Link></p>
                                                            <p className="fs-12 text-muted mb-0">{idx.class1}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-sm p-1 me-1 bg-light avatar-rounded">
                                                            <img src={idx.src} alt=""/>
                                                        </span>
                                                        <Link to="#" className="fw-semibold mb-0">{idx.text1}</Link>
                                                    </div>
                                                </td>
                                                <td>
                                                   {idx.text3}
                                                </td>
                                                <td>{idx.number}</td>
                                                <td>{idx.number1}</td>
                                                <td><span className={`badge rounded-pill bg-${idx.color}-transparent`}>{idx.text}</span></td>
                                                <td>{idx.data}</td>
                                                <td>
                                                    {idx.data1}
                                                </td>
                                                <td><span className={`badge bg-${idx.color1}-transparent`}><i className="bi bi-clock me-1"></i>{idx.text2}</span></td>
                                                <td>
                                                    <Link to={`${import.meta.env.BASE_URL}apps/jobs/jobdetails/`} className="btn btn-icon btn-sm btn-primary-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-eye-line"></i>
                                                    </Link>
                                                    <Link to="#" className="btn btn-icon btn-sm btn-info-light btn-wave waves-effect waves-light me-1">
                                                        <i className="ri-edit-line"></i>
                                                    </Link>
                                                    <Link to="#" className="btn btn-icon btn-sm btn-danger-light btn-wave waves-effect waves-light">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                             ))} 
                                        </tbody>
                                    </Table>
                                </div>
                            </Card.Body>
                            <Card.Footer className="border-top-0">
                                <div className="d-flex align-items-center flex-wrap overflow-auto">
                                    <div className="mb-2 mb-sm-0">
                                        Showing <b>1</b> to <b>10</b> of <b>10</b> entries <i className="bi bi-arrow-right ms-2 fw-semibold"></i>
                                    </div>
                                    <div className="ms-auto">
                                        <Pagination className="pagination mb-0 overflow-auto">
                                            <Pagination.Item disabled>Previous
                                            </Pagination.Item>
                                            <Pagination.Item active  href="#">1</Pagination.Item>
                                            <Pagination.Item href="#">2</Pagination.Item>
                                            <Pagination.Item href="#">3</Pagination.Item>
                                            <Pagination.Item href="#">4</Pagination.Item>
                                            <Pagination.Item href="#">5</Pagination.Item>
                                            <Pagination.Item href="#">Next</Pagination.Item>
                                        </Pagination>
                                    </div>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
  </Fragment>
);
};

export default Jobslist;
