import  { FC, Fragment, useState} from 'react';
import { Badge, Button, Card, Col, Dropdown, OverlayTrigger, Pagination, Row, Table, Tooltip } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import { InvoiceStats, Manageinvoicedata } from './invoicelistdata';

interface InvoicelistProps {}

const Invoicelist: FC<InvoicelistProps> = () =>{
    const [manageInvoiceData, setManageInvoiceData] = useState([...Manageinvoicedata]);
    const handleDelete = (idToRemove:number) => {
        const updatedInvoiceData = manageInvoiceData.filter((item) => item.id !== idToRemove);
        setManageInvoiceData(updatedInvoiceData);
      };
    return (
  <Fragment>
                <Pageheader title="Invoice List" heading="Invoice" active="Invoice List" />
                <Row>
                    <Col xl={9}>
                        <Card className="custom-card">
                            <Card.Header className="card-header justify-content-between">
                                <Card.Title>
                                    Manage Invoices
                                </Card.Title>
                                <div className="d-flex">
                                    <Button variant='' className="btn btn-sm btn-primary btn-wave waves-light"><i className="ri-add-line fw-semibold align-middle me-1"></i> Create Invoice</Button>
                                    <Dropdown className="dropdown ms-2">
                                        <Dropdown.Toggle variant='secondary-light' className="btn btn-icon  btn-sm btn-wave waves-light no-caret" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <i className="ti ti-dots-vertical"></i>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#">All Invoices</Dropdown.Item>
                                            <Dropdown.Item href="#">Paid Invoices</Dropdown.Item>
                                            <Dropdown.Item href="#">Pending Invoices</Dropdown.Item>
                                            <Dropdown.Item href="#">Overdue Invoices</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <div className="table-responsive">
                                    <Table className="table text-nowrap table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col">Client</th>
                                                <th scope="col">Invoice ID</th>
                                                <th scope="col">Issued Date</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Due Date</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {manageInvoiceData.map((idx)=>(
                                            <tr className="invoice-list" key={Math.random()}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src={idx.src} alt=""/>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 fw-semibold">{idx.name}</p>
                                                            <p className="mb-0 fs-11 text-muted">{idx.mail}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Link to="#" className="fw-semibold text-primary">
                                                        {idx.invoiceid}
                                                    </Link>
                                                </td>
                                                <td>{idx.date}
                                                </td>
                                                <td>{idx.amount}
                                                </td>
                                                <td>
                                                    <Badge bg={idx.color} className="badge">{idx.badge}</Badge>
                                                </td>
                                                <td>{idx.due}
                                                </td>
                                                <td>
                                                    <Button variant='' className="btn btn-primary-light btn-icon btn-sm">
                                                    <OverlayTrigger placement="top" overlay={<Tooltip>Print</Tooltip>}>
                                                    <i className="ri-printer-line"></i>
                                                    </OverlayTrigger></Button>
                                                    <Button variant='' className="btn btn-danger-light btn-icon ms-1 btn-sm invoice-btn" onClick={() => handleDelete(idx.id)}>
                                                  <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                                                  <i className="ri-delete-bin-5-line"></i>
                                                    </OverlayTrigger>
                                                        </Button>
                                                </td>
                                            </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </Card.Body>
                            <Card.Footer className="">
                                <nav aria-label="Page navigation">
                                    <Pagination className="mb-0 float-end">
                                        <Pagination.Item  disabled href="#">Previous
                                        </Pagination.Item>
                                        <Pagination.Item href="#">1</Pagination.Item>
                                        <Pagination.Item active href="#">2
                                        </Pagination.Item>
                                        <Pagination.Item href="#">3</Pagination.Item>
                                        <Pagination.Item  href="#">Next
                                        </Pagination.Item>
                                    </Pagination>
                                </nav>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xl={3}>
                        <Card className="custom-card">
                            <Card.Body className="p-0">
                                <div className="p-4 border-bottom border-block-end-dashed d-flex align-items-top">
                                    <div className="svg-icon-background bg-primary-transparent me-4"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="svg-primary"><path d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z"/></svg>
                                    </div> 
                                    <div className="flex-fill">
                                        <h6 className="mb-2 fs-12">Total Invoices Amount
                                            <span className="badge bg-primary fw-semibold float-end">
                                                12,345
                                            </span> 
                                        </h6> 
                                        <div className="pb-0 mt-0"> 
                                            <div> 
                                                <h4 className="fs-18 fw-semibold mb-2">$<span className="count-up" data-count="192">192</span>.87K</h4> 
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
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="svg-success"><path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z"/></svg>
                                    </div> 
                                    <div className="flex-fill">
                                        <h6 className="mb-2 fs-12">Total Paid Invoices
                                            <span className="badge bg-success fw-semibold float-end">
                                                4,176
                                            </span> 
                                        </h6> 
                                        <div> 
                                            <h4 className="fs-18 fw-semibold mb-2">$<span className="count-up" data-count="68.83">68.83</span>K</h4> 
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
                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="svg-warning"><path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z"/></svg>
                                    </div> 
                                    <div className="flex-fill">
                                        <h6 className="mb-2 fs-12">Pending Invoices
                                            <span className="badge bg-warning fw-semibold float-end">
                                                7,064
                                            </span> 
                                        </h6> 
                                        <div> 
                                            <h4 className="fs-18 fw-semibold mb-2">$<span className="count-up" data-count="81.57">81.57</span>K</h4> 
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
                                    <div className="svg-icon-background bg-light me-4"> 
                                        <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="svg-dark"><path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z"/></svg>
                                    </div> 
                                    <div className="flex-fill">
                                        <h6 className="mb-2 fs-12">Overdue Invoices
                                            <span className="badge bg-light text-default fw-semibold float-end">
                                                1,105
                                            </span> 
                                        </h6> 
                                        <div> 
                                            <h4 className="fs-18 fw-semibold mb-2">$<span className="count-up" data-count="32.47">32.47</span>K</h4> 
                                            <p className="text-muted fs-11 mb-0 lh-1">
                                                <span className="text-success me-1 fw-semibFold">
                                                    <i className="ri-arrow-down-s-line me-1 align-middle"></i>0.46%
                                                </span>
                                                <span>this month</span>
                                            </p>
                                        </div> 
                                    </div>
                                </div>
                                <div className="p-4">
                                    <p className="fs-15 fw-semibold">Invoice Status <span className="text-muted fw-normal">(Last 6 months) :</span></p>
                                    <div id="invoice-list-stats">
                                    <InvoiceStats/>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
  </Fragment>
);
};
export default Invoicelist;
