import { FC, Fragment, useState } from 'react';
import { Badge, Button, Card, Col, Collapse, Form, ProgressBar, Row, Table } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import face1 from "../../../assets/images/faces/1.jpg";
import face2 from "../../../assets/images/faces/2.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import face3 from "../../../assets/images/faces/3.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face6 from "../../../assets/images/faces/6.jpg";
import face8 from "../../../assets/images/faces/8.jpg";
import face10 from "../../../assets/images/faces/10.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face12 from "../../../assets/images/faces/12.jpg";
import face13 from "../../../assets/images/faces/13.jpg";
import face14 from "../../../assets/images/faces/14.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import face16 from "../../../assets/images/faces/16.jpg";
import { Link } from 'react-router-dom';
import { Table10data, Table11data, Table12data, Table13data, Table1data, Table2data, Table3data, Table4data, Table5data, Table6data, Table7data, Table8data, Table9data } from './tabledata';

interface TablesProps { }

const Tables: FC<TablesProps> = () => {
    //collapse1
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    const [open9, setOpen9] = useState(false);
    const [open10, setOpen10] = useState(false);
    const [open11, setOpen11] = useState(false);
    const [open12, setOpen12] = useState(false);
    const [open13, setOpen13] = useState(false);
    const [open14, setOpen14] = useState(false);
    const [open15, setOpen15] = useState(false);
    const [open16, setOpen16] = useState(false);
    const [open17, setOpen17] = useState(false);
    const [open18, setOpen18] = useState(false);
    const [open19, setOpen19] = useState(false);
    const [open20, setOpen20] = useState(false);
    const [open21, setOpen21] = useState(false);
    const [open22, setOpen22] = useState(false);
    const [open23, setOpen23] = useState(false);
    const [open24, setOpen24] = useState(false);
    const [open25, setOpen25] = useState(false);
    const [open26, setOpen26] = useState(false);
    const [open27, setOpen27] = useState(false);
    const [open28, setOpen28] = useState(false);
    const [open29, setOpen29] = useState(false);
    const [open30, setOpen30] = useState(false);
    const [open31, setOpen31] = useState(false);
    const [open32, setOpen32] = useState(false);
    return (
        <Fragment>
            <Pageheader title="Tables" heading="Tables" active="Tables" />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Basic Tables
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-borderless">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Created On</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Mark</th>
                                            <td>21,Dec 2021</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Monika</th>
                                            <td>29,April 2022</td>
                                            <td>+1523-12459</td>
                                            <td><Badge bg="outline-warning" className="badge ">Failed</Badge></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Madina</th>
                                            <td>30,Nov 2022</td>
                                            <td>+1982-16234</td>
                                            <td><Badge bg="outline-success" className="badge">Successful</Badge></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Bhamako</th>
                                            <td>18,Mar 2022</td>
                                            <td>+1526-10729</td>
                                            <td><Badge bg="outline-secondary" className="badge">Pending</Badge></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                        <Collapse in={open1} className="card-body"><pre><code>{`<Table className="table text-nowrap">
<thead>
    <tr>
  <th scope="col">Name</th>
  <th scope="col">Created On</th>
  <th scope="col">Number</th>
  <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    <tr>
  <th scope="row">Mark</th>
  <td>21,Dec 2021</td>
  <td>+1234-12340</td>
  <td><Badge bg="outline-primary" className="badge">
  Completed</Badge></td>
    </tr>
    <tr>
  <th scope="row">Monika</th>
  <td>29,April 2022</td>
  <td>+1523-12459</td>
  <td><Badge bg="outline-warning" className="badge">
  Failed</Badge></td>
    </tr>
    <tr>
  <th scope="row">Madina</th>
  <td>30,Nov 2022</td>
  <td>+1982-16234</td>
  <td><Badge bg="outline-success" className="badge">
  Successful</Badge></td>
    </tr>
    <tr>
  <th scope="row">Bhamako</th>
  <td>18,Mar 2022</td>
  <td>+1526-10729</td>
  <td><Badge bg="outline-secondary" className="badge">
  Pending</Badge></td>
    </tr>
</tbody>
 </Table>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Bordered Tables
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen2(!open2)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table text-nowrap table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">User</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table1data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row" key={Math.random()}>
                                                    <div className="d-flex align-items-center">
                                                        <span className={`avatar avatar-xs me-2 ${idx.class1} avatar-rounded`}>
                                                            <img src={idx.src} alt="img" />
                                                        </span>{idx.name}
                                                    </div>
                                                </th>
                                                <td><Badge bg={idx.color} className={`badge ${idx.class}`}>{idx.text}</Badge></td>
                                                <td>{idx.mail}</td>
                                                <td>
                                                    <div className="hstack gap-2 flex-wrap">
                                                        <Link to="#" className="text-info fs-14 lh-1"><i
                                                            className="ri-edit-line"></i></Link>
                                                        <Link to="#" className="text-danger fs-14 lh-1"><i
                                                            className="ri-delete-bin-5-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open2} className="card-body"><pre><code>{`   <Table className="table text-nowrap table-bordered">
<thead>
 <tr>
     <th scope="col">User</th>
     <th scope="col">Status</th>
     <th scope="col">Email</th>
     <th scope="col">Action</th>
 </tr>
</thead>
<tbody>
 <tr>
     <th scope="row">
         <div className="d-flex align-items-center">
             <span className="avatar avatar-xs me-2 online avatar-rounded">
                 <img src={face13} alt="img"/>
             </span>Sukuro Kim
         </div>
     </th>
     <td><span className="badge bg-success-transparent">Active</span></td>
     <td>kimosukuro@gmail.com</td>
     <td>
         <div className="hstack gap-2 flex-wrap">
             <Link to="#" className="text-info fs-14 lh-1"><i
                     className="ri-edit-line"></i></Link>
             <Link to="#" className="text-danger fs-14 lh-1"><i
                     className="ri-delete-bin-5-line"></i></Link>
         </div>
     </td>
 </tr>
 <tr>
     <th scope="row">
         <div className="d-flex align-items-center">
             <span className="avatar avatar-xs me-2 offline avatar-rounded">
                 <img src={face6} alt="img"/>
             </span>Hasimna
         </div>
     </th>
     <td><span className="badge bg-light text-dark">Inactive</span></td>
     <td>hasimna2132@gmail.com</td>
     <td>
         <div className="hstack gap-2 flex-wrap">
             <Link to="#" className="text-info fs-14 lh-1"><i
                     className="ri-edit-line"></i></Link>
             <Link to="#" className="text-danger fs-14 lh-1"><i
                     className="ri-delete-bin-5-line"></i></Link>
         </div>
     </td>
 </tr>
</tbody>
</Table>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Bordered Primary
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen3(!open3)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table bordered className="table text-nowrap  border-primary">
                                    <thead>
                                        <tr>
                                            <th scope="col">Order</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table2data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">
                                                    {idx.order}
                                                </th>
                                                <td>
                                                    <span className="badge bg-light text-dark">{idx.date}</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                            <img src={idx.src} alt="img" />
                                                        </span>{idx.name}
                                                    </div>
                                                </td>
                                                <td><span className="badge bg-primary-transparent">Booked</span></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open3} className="card-body"><pre><code>{`<Table bordered  className="table text-nowrap  border-primary">
 <thead>
     <tr>
         <th scope="col">Order</th>
         <th scope="col">Date</th>
         <th scope="col">Customer</th>
         <th scope="col">Action</th>
     </tr>
 </thead>
 <tbody>
     {Table2data.map((idx)=>(
     <tr key={Math.random()}>
         <th scope="row">
             {idx.order}
         </th>
         <td>
             <span className="badge bg-light text-dark">{idx.date}</span>
         </td>
         <td>
             <div className="d-flex align-items-center">
                 <span className="avatar avatar-xs me-2 online avatar-rounded">
                     <img src={idx.src} alt="img"/>
                 </span>{idx.name}
             </div>
         </td>
         <td><span className="badge bg-primary-transparent">Booked</span></td>
     </tr>
     ))}
 </tbody>
 </Table>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Bordered Success
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen4(!open4)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table bordered className="table text-nowrap border-success">
                                    <thead>
                                        <tr>
                                            <th scope="col">Order</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table3data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">
                                                    {idx.order}
                                                </th>
                                                <td>
                                                    <span className="badge bg-light text-dark">{idx.date}</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                            <img src={idx.src} alt="img" />
                                                        </span>{idx.name}
                                                    </div>
                                                </td>
                                                <td><span className="badge bg-success-transparent">Delivered</span></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open4} className="card-body"><pre><code>{`<Table bordered className="table text-nowrap border-success">
<thead>
    <tr>
        <th scope="col">Order</th>
        <th scope="col">Date</th>
        <th scope="col">Customer</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    {Table3data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">
           {idx.order}
        </th>
        <td>
            <span className="badge bg-light text-dark">{idx.date}</span>
        </td>
        <td>
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <img src={idx.src} alt="img"/>
                </span>{idx.name}
            </div>
        </td>
        <td><span className="badge bg-success-transparent">Delivered</span></td>
    </tr>
    ))}
</tbody>
</Table>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Bordered warning
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen5(!open5)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table bordered className="table text-nowrap table-bordered border-warning">
                                    <thead>
                                        <tr>
                                            <th scope="col">Order</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table4data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">
                                                    {idx.order}
                                                </th>
                                                <td>
                                                    <span className="badge bg-light text-dark">{idx.date}</span>
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                            <img src={idx.src} alt="img" />
                                                        </span>{idx.name}
                                                    </div>
                                                </td>
                                                <td><span className="badge bg-warning-transparent">Accepted</span></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open5} className="card-body"><pre><code>{`<Table bordered className="table text-nowrap table-bordered border-warning">
<thead>
    <tr>
        <th scope="col">Order</th>
        <th scope="col">Date</th>
        <th scope="col">Customer</th>
        <th scope="col">Action</th>
    </tr>
</thead>
<tbody>
    {Table4data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">
            {idx.order}
        </th>
        <td>
            <span className="badge bg-light text-dark">{idx.date}</span>
        </td>
        <td>
            <div className="d-flex align-items-center">
                <span className="avatar avatar-xs me-2 online avatar-rounded">
                    <img src={idx.src} alt="img"/>
                </span>{idx.name}
            </div>
        </td>
        <td><span className="badge bg-warning-transparent">Accepted</span></td>
    </tr>
    ))}
</tbody>
 </Table>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Table Without Borders
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen6(!open6)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table borderless className="text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">User Name</th>
                                            <th scope="col">Transaction Id</th>
                                            <th scope="col">Created</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">Harshrath</th>
                                            <td>#5182-3467</td>
                                            <td>24 May 2022</td>
                                            <td><span className="badge bg-primary">Fixed</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Zozo Hadid</th>
                                            <td>#5182-3412</td>
                                            <td>02 July 2022</td>
                                            <td><span className="badge bg-warning">In Progress</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Martiana</th>
                                            <td>#5182-3423</td>
                                            <td>15 April 2022</td>
                                            <td><span className="badge bg-success">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Alex Carey</th>
                                            <td>#5182-3456</td>
                                            <td>17 March 2022</td>
                                            <td><span className="badge bg-danger">Pending</span></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open6} className="card-body"><pre><code>{`<Table borderless className="text-nowrap">
 <thead>
     <tr>
         <th scope="col">User Name</th>
         <th scope="col">Transaction Id</th>
         <th scope="col">Created</th>
         <th scope="col">Status</th>
     </tr>
 </thead>
 <tbody>
     <tr>
         <th scope="row">Harshrath</th>
         <td>#5182-3467</td>
         <td>24 May 2022</td>
         <td><span className="badge bg-primary">Fixed</span></td>
     </tr>
     <tr>
         <th scope="row">Zozo Hadid</th>
         <td>#5182-3412</td>
         <td>02 July 2022</td>
         <td><span className="badge bg-warning">In Progress</span></td>
     </tr>
     <tr>
         <th scope="row">Martiana</th>
         <td>#5182-3423</td>
         <td>15 April 2022</td>
         <td><span className="badge bg-success">Completed</span></td>
     </tr>
     <tr>
         <th scope="row">Alex Carey</th>
         <td>#5182-3456</td>
         <td>17 March 2022</td>
         <td><span className="badge bg-danger">Pending</span></td>
     </tr>
 </tbody>
</Table>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Table Group Divideres
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen7(!open7)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product</th>
                                            <th scope="col">Seller</th>
                                            <th scope="col">Sale Percentage</th>
                                            <th scope="col">Qunatity Sold</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-group-divider">
                                        <tr>
                                            <th scope="row">Smart Watch</th>
                                            <td>Slowtrack.inc</td>
                                            <td><Link to="#" className="text-success">24.23%<i
                                                className="ri-arrow-up-fill ms-1"></i></Link></td>
                                            <td>250/1786</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">White Sneakers</th>
                                            <td>American & Co.inc</td>
                                            <td><Link to="#" className="text-danger">12.45%<i
                                                className="ri-arrow-down-fill ms-1"></i></Link></td>
                                            <td>123/985</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Baseball Bat</th>
                                            <td>Sports Company</td>
                                            <td><Link to="#" className="text-success">06.64%<i
                                                className="ri-arrow-up-fill ms-1"></i></Link></td>
                                            <td>124/232</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Black Hoodie</th>
                                            <td>Renonds Fabrics</td>
                                            <td><Link to="#" className="text-success">14.42%<i
                                                className="ri-arrow-up-fill ms-1"></i></Link></td>
                                            <td>192/2456</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open7} className="card-body"><pre><code>{`<Table className="table text-nowrap">
<thead>
    <tr>
        <th scope="col">Product</th>
        <th scope="col">Seller</th>
        <th scope="col">Sale Percentage</th>
        <th scope="col">Qunatity Sold</th>
    </tr>
</thead>
<tbody className="table-group-divider">
    <tr>
        <th scope="row">Smart Watch</th>
        <td>Slowtrack.inc</td>
        <td><Link to="#" className="text-success">24.23%<i
                    className="ri-arrow-up-fill ms-1"></i></Link></td>
        <td>250/1786</td>
    </tr>
    <tr>
        <th scope="row">White Sneakers</th>
        <td>American & Co.inc</td>
        <td><Link to="#" className="text-danger">12.45%<i
                    className="ri-arrow-down-fill ms-1"></i></Link></td>
        <td>123/985</td>
    </tr>
    <tr>
        <th scope="row">Baseball Bat</th>
        <td>Sports Company</td>
        <td><Link to="#" className="text-success">06.64%<i
                    className="ri-arrow-up-fill ms-1"></i></Link></td>
        <td>124/232</td>
    </tr>
    <tr>
        <th scope="row">Black Hoodie</th>
        <td>Renonds Fabrics</td>
        <td><Link to="#" className="text-success">14.42%<i
                    className="ri-arrow-up-fill ms-1"></i></Link></td>
        <td>192/2456</td>
    </tr>
</tbody>
</Table>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <Card.Title>
                                Striped rows
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen8(!open8)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open8}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </div>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table striped className="table text-nowrap table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table5data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">{idx.order}</th>
                                                <td>{idx.date}</td>
                                                <td>{idx.name}</td>
                                                <td>
                                                    <Button variant='success' className="btn btn-sm btn-wave">
                                                        <i className="ri-download-2-line align-middle me-2 d-inline-block"></i>Download
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open8} className="card-body"><pre><code>{` <Table striped className="table text-nowrap table-striped">
<thead>
    <tr>
     <th scope="col">ID</th>
     <th scope="col">Date</th>
     <th scope="col">Customer</th>
     <th scope="col">Action</th>
    </tr>
</thead>
<tbody>
    {Table5data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">{idx.order}</th>
        <td>{idx.date}</td>
        <td>{idx.name}</td>
        <td>
            <Button variant='success' className="btn btn-sm btn-wave">
                <i className="ri-download-2-line align-middle me-2 d-inline-block"></i>Download
            </Button>
        </td>
    </tr>
    ))}
</tbody>
</Table>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Striped columns
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen9(!open9)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open9}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table striped="columns" className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table5data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">{idx.order}</th>
                                                <td>{idx.date}</td>
                                                <td>{idx.name}</td>
                                                <td>
                                                    <Button variant='' className="btn btn-sm btn-danger btn-wave">
                                                        <i className="ri-delete-bin-line align-middle me-2 d-inline-block"></i>Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open9} className="card-body"><pre><code>{`<Table striped="columns" className="table text-nowrap">
<thead>
    <tr>
        <th scope="col">ID</th>
        <th scope="col">Date</th>
        <th scope="col">Customer</th>
        <th scope="col">Action</th>
    </tr>
</thead>
<tbody>
    {Table5data.map((idx)=>(
    <tr>
        <th scope="row">{idx.order}</th>
        <td>{idx.date}</td>
        <td>{idx.name}</td>
        <td>
            <Button variant='' className="btn btn-sm btn-danger btn-wave">
                <i className="ri-delete-bin-line align-middle me-2 d-inline-block"></i>Delete
            </Button>
        </td>
    </tr>
    ))}
</tbody>
</Table>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Primary Table
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen10(!open10)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open10}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table variant='primary' className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table6data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">{idx.id}</th>
                                                <td>{idx.text1}</td>
                                                <td>{idx.text2}</td>
                                                <td>{idx.text3}</td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open10} className="card-body"><pre><code>{`<Table variant='primary' className="table text-nowrap">
<thead>
    <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
    </tr>
</thead>
<tbody>
    {Table6data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">{idx.id}</th>
        <td>{idx.text1}</td>
        <td>{idx.text2}</td>
        <td>{idx.text3}</td>
    </tr>
    ))}
</tbody>
</Table>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Secondary Table
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen11(!open11)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open11}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table variant='secondary' className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table6data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">{idx.id}</th>
                                                <td>{idx.text1}</td>
                                                <td>{idx.text2}</td>
                                                <td>{idx.text3}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open11} className="card-body"><pre><code>{`<Table variant='secondary' className="table text-nowrap">
 <thead>
     <tr>
         <th scope="col">#</th>
         <th scope="col">First</th>
         <th scope="col">Last</th>
         <th scope="col">Handle</th>
     </tr>
 </thead>
 <tbody>
     {Table6data.map((idx)=>(
     <tr>
         <th scope="row">{idx.id}</th>
         <td>{idx.text1}</td>
         <td>{idx.text2}</td>
         <td>{idx.text3}</td>
     </tr>
     ))}
 </tbody>
 </Table>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Warning Table
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen12(!open12)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open12}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table variant='warning' className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table6data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">{idx.id}</th>
                                                <td>{idx.text1}</td>
                                                <td>{idx.text2}</td>
                                                <td>{idx.text3}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open12} className="card-body"><pre><code>{`<Table variant='warning' className="table text-nowrap">
 <thead>
     <tr>
         <th scope="col">#</th>
         <th scope="col">First</th>
         <th scope="col">Last</th>
         <th scope="col">Handle</th>
     </tr>
 </thead>
 <tbody>
     {Table6data.map((idx)=>(
     <tr>
         <th scope="row">{idx.id}</th>
         <td>{idx.text1}</td>
         <td>{idx.text2}</td>
         <td>{idx.text3}</td>
     </tr>
     ))}
 </tbody>
 </Table>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Danger Table
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen13(!open13)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open13}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table variant='danger' className="table text-nowrap table-danger">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table6data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">{idx.id}</th>
                                                <td>{idx.text1}</td>
                                                <td>{idx.text2}</td>
                                                <td>{idx.text3}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open13} className="card-body"><pre><code>{`<Table variant='danger' className="table text-nowrap">
 <thead>
     <tr>
         <th scope="col">#</th>
         <th scope="col">First</th>
         <th scope="col">Last</th>
         <th scope="col">Handle</th>
     </tr>
 </thead>
 <tbody>
     {Table6data.map((idx)=>(
     <tr>
         <th scope="row">{idx.id}</th>
         <td>{idx.text1}</td>
         <td>{idx.text2}</td>
         <td>{idx.text3}</td>
     </tr>
     ))}
 </tbody>
 </Table>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Dark Table
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen14(!open14)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open14}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table variant='dark' className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table6data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">{idx.id}</th>
                                                <td>{idx.text1}</td>
                                                <td>{idx.text2}</td>
                                                <td>{idx.text3}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open14} className="card-body"><pre><code>{`<Table variant='dark' className="table text-nowrap">
 <thead>
     <tr>
         <th scope="col">#</th>
         <th scope="col">First</th>
         <th scope="col">Last</th>
         <th scope="col">Handle</th>
     </tr>
 </thead>
 <tbody>
     {Table6data.map((idx)=>(
     <tr>
         <th scope="row">{idx.id}</th>
         <td>{idx.text1}</td>
         <td>{idx.text2}</td>
         <td>{idx.text3}</td>
     </tr>
     ))}
 </tbody>
 </Table>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Success Table With Striped Rows
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen15(!open15)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open15}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table striped variant='success' className="table text-nowrap table-success table-striped">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table6data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">{idx.id}</th>
                                                <td>{idx.text1}</td>
                                                <td>{idx.text2}</td>
                                                <td>{idx.text3}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open15} className="card-body"><pre><code>{`<Table striped variant='success' className="table text-nowrap">
 <thead>
     <tr>
         <th scope="col">#</th>
         <th scope="col">First</th>
         <th scope="col">Last</th>
         <th scope="col">Handle</th>
     </tr>
 </thead>
 <tbody>
     {Table6data.map((idx)=>(
     <tr>
         <th scope="row">{idx.id}</th>
         <td>{idx.text1}</td>
         <td>{idx.text2}</td>
         <td>{idx.text3}</td>
     </tr>
     ))}
 </tbody>
 </Table>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>Hoverable Rows</Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen16(!open16)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open16}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table hover className="text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Product Manager</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Team</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm me-2 avatar-rounded">
                                                        <img src={face10} alt="img" />
                                                    </div>
                                                    <div>
                                                        <div className="lh-1">
                                                            <span>Joanna Smith</span>
                                                        </div>
                                                        <div className="lh-1">
                                                            <span
                                                                className="fs-11 text-muted">joannasmith14@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-primary-transparent">Fashion</span></td>
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
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                        to="#">
                                                        +5
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar variant='primary' className="progress-xs" now={52} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm me-2 avatar-rounded">
                                                        <img src={face2} alt="img" />
                                                    </div>
                                                    <div>
                                                        <div className="lh-1">
                                                            <span>Kara Kova</span>
                                                        </div>
                                                        <div className="lh-1">
                                                            <span
                                                                className="fs-11 text-muted">milesakara@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-warning-transparent">Clothing</span></td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face4} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face6} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                        to="#">
                                                        +6
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar variant='primary' className="progress-xs" now={40} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm me-2 avatar-rounded">
                                                        <img src={face16} alt="img" />
                                                    </div>
                                                    <div>
                                                        <div className="lh-1">
                                                            <span>Donald Trimb</span>
                                                        </div>
                                                        <div className="lh-1">
                                                            <span
                                                                className="fs-11 text-muted">donaldo21@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-dark-transparent">Electronics</span></td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face1} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face11} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face15} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                        to="#">
                                                        +2
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar variant='primary' className="progress-xs" now={17} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar avatar-sm me-2 avatar-rounded">
                                                        <img src={face13} alt="img" />
                                                    </div>
                                                    <div>
                                                        <div className="lh-1">
                                                            <span>Justin Gaethje</span>
                                                        </div>
                                                        <div className="lh-1">
                                                            <span
                                                                className="fs-11 text-muted">justingae@gmail.com</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td><span className="badge bg-danger-transparent">Sports</span></td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face4} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face6} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                                                        to="#">
                                                        +5
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar variant='primary' className="progress-xs" now={72} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open16} className="card-body"><pre><code>{`  <Table hover className="text-nowrap">
 <thead>
     <tr>
         <th scope="col">Product Manager</th>
         <th scope="col">Category</th>
         <th scope="col">Team</th>
         <th scope="col">Status</th>
     </tr>
 </thead>
 <tbody>
     <tr>
         <td>
             <div className="d-flex align-items-center">
                 <div className="avatar avatar-sm me-2 avatar-rounded">
                     <img src={face10} alt="img"/>
                 </div>
                 <div>
                     <div className="lh-1">
                         <span>Joanna Smith</span>
                     </div>
                     <div className="lh-1">
                         <span
                             className="fs-11 text-muted">joannasmith14@gmail.com</span>
                     </div>
                 </div>
             </div>
         </td>
         <td><span className="badge bg-primary-transparent">Fashion</span></td>
         <td>
             <div className="avatar-list-stacked">
                 <span className="avatar avatar-sm avatar-rounded">
                     <img src={face2} alt="img"/>
                 </span>
                 <span className="avatar avatar-sm avatar-rounded">
                     <img src={face8} alt="img"/>
                 </span>
                 <span className="avatar avatar-sm avatar-rounded">
                     <img src={face2} alt="img"/>
                 </span>
                 <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded"
                     to="#">
                     +5
                 </Link>
             </div>
         </td>
         <td>
             <ProgressBar variant='primary' className="progress-xs"  now={52}/>
         </td>
     </tr>
 </tbody>
 </Table>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Hoverable rows With striped rows
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen17(!open17)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open17}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table striped hover className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Invoice</th>
                                            <th scope="col">Customer</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table7data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">{idx.text1}</th>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src={idx.src} alt="img" />
                                                        </div>
                                                        <div>
                                                            <div className="lh-1">
                                                                <span>{idx.name}</span>
                                                            </div>
                                                            <div className="lh-1">
                                                                <span
                                                                    className="fs-11 text-muted">{idx.mail}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><Badge bg={idx.color} className={`badge ${idx.class}`}><i
                                                    className={`ri-${idx.icon} align-middle me-1`}></i>{idx.text2}</Badge></td>
                                                <td>{idx.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open17} className="card-body"><pre><code>{`<Table striped hover className="table text-nowrap">
 <thead>
 <tr>
     <th scope="col">Invoice</th>
     <th scope="col">Customer</th>
     <th scope="col">Status</th>
     <th scope="col">Date</th>
 </tr>
</thead>
 <tbody>
 <tr>
 <th scope="row">IN-2022</th>
 <td>
     <div className="d-flex align-items-center">
         <div className="avatar avatar-sm me-2 avatar-rounded">
             <img src="../assets/images/faces/12.jpg" alt="img"/>
         </div>
         <div>
             <div className="lh-1">
                 <span>Charanjeep</span>
             </div>
             <div className="lh-1">
                 <span
                     className="fs-11 text-muted">charanjeep@gmail.in</span>
             </div>
         </div>
     </div>
 </td>
 <td><span className="badge bg-success-transparent"><i
             className="ri-check-fill align-middle me-1"></i>Paid</span></td>
 <td>Mar 14,2022</td>
</tr>
 </tbody>
 </Table>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <Card.Title>
                                Table Head Primary
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen18(!open18)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open18}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </div>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <thead className="table-primary">
                                        <tr>
                                            <th scope="col">User Name</th>
                                            <th scope="col">Transaction Id</th>
                                            <th scope="col">Created</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table8data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">{idx.name}</th>
                                                <td>{idx.text}</td>
                                                <td>{idx.date}</td>
                                                <td>
                                                    <div className="hstack gap-2 fs-15">
                                                        <Link to="#"
                                                            className="btn btn-icon btn-sm btn-success-transparent rounded-pill"><i
                                                                className="ri-download-2-line"></i></Link>
                                                        <Link to="#"
                                                            className="btn btn-icon btn-sm btn-info-transparent rounded-pill"><i
                                                                className="ri-edit-line"></i></Link>
                                                        <Link to="#"
                                                            className="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i
                                                                className="ri-delete-bin-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open18} className="card-body"><pre><code>{` <Table className="table text-nowrap">
 <thead  className="table-primary">
     <tr>
         <th scope="col">User Name</th>
         <th scope="col">Transaction Id</th>
         <th scope="col">Created</th>
         <th scope="col">Status</th>
     </tr>
 </thead>
 <tbody>
     {Table8data.map((idx)=>(
     <tr key={Math.random()}>
         <th scope="row">{idx.name}</th>
         <td>{idx.text}</td>
         <td>{idx.date}</td>
         <td>
             <div className="hstack gap-2 fs-15">
                 <Link to="#"
                     className="btn btn-icon btn-sm btn-success-transparent rounded-pill"><i
                         className="ri-download-2-line"></i></Link>
                 <Link to="#"
                     className="btn btn-icon btn-sm btn-info-transparent rounded-pill"><i
                         className="ri-edit-line"></i></Link>
                 <Link to="#"
                     className="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i
                         className="ri-delete-bin-line"></i></Link>
             </div>
         </td>
     </tr>
     ))}
 </tbody>
 </Table>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Table Head warning
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen19(!open19)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open19}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <thead className="table-warning">
                                        <tr>
                                            <th scope="col">User Name</th>
                                            <th scope="col">Transaction Id</th>
                                            <th scope="col">Created</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table9data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">{idx.name}</th>
                                                <td>{idx.text}</td>
                                                <td>{idx.date}</td>
                                                <td>
                                                    <Button variant={idx.color} className="btn btn-sm">{idx.btn}</Button>
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open19} className="card-body"><pre><code>{`<Table className="table text-nowrap">
<thead className="table-warning">
    <tr>
        <th scope="col">User Name</th>
        <th scope="col">Transaction Id</th>
        <th scope="col">Created</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    {Table9data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.date}</td>
        <td>
    <Button variant={idx.color} className="btn btn-sm">{idx.btn}</Button>
        </td>
    </tr>
    ))}
   
</tbody>
 </Table>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Table Head Success
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen20(!open20)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open20}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <thead className="table-success">
                                        <tr>
                                            <th scope="col">User Name</th>
                                            <th scope="col">Transaction Id</th>
                                            <th scope="col">Created</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table9data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">{idx.name}</th>
                                                <td>{idx.text}</td>
                                                <td>{idx.date}</td>
                                                <td>
                                                    <Button variant={idx.color} className="btn btn-sm">{idx.btn}</Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open20} className="card-body"><pre><code>{`<Table className="table text-nowrap">
<thead className="table-warning">
    <tr>
        <th scope="col">User Name</th>
        <th scope="col">Transaction Id</th>
        <th scope="col">Created</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    {Table9data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.date}</td>
        <td>
    <Button variant={idx.color} className="btn btn-sm">{idx.btn}</Button>
        </td>
    </tr>
    ))}
   
</tbody>
 </Table>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Table Head Info
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen21(!open21)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open21}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <thead className="table-info">
                                        <tr>
                                            <th scope="col">User Name</th>
                                            <th scope="col">Transaction Id</th>
                                            <th scope="col">Created</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table9data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">{idx.name}</th>
                                                <td>{idx.text}</td>
                                                <td>{idx.date}</td>
                                                <td>
                                                    <Button variant={idx.color} className="btn btn-sm">{idx.btn}</Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open21} className="card-body"><pre><code>{`<Table className="table text-nowrap">
<thead className="table-info">
    <tr>
        <th scope="col">User Name</th>
        <th scope="col">Transaction Id</th>
        <th scope="col">Created</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    {Table9data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.date}</td>
        <td>
    <Button variant={idx.color} className="btn btn-sm">{idx.btn}</Button>
        </td>
    </tr>
    ))}
   
</tbody>
 </Table>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Table Head Secondary
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen22(!open22)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open22}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <thead className="table-secondary">
                                        <tr>
                                            <th scope="col">User Name</th>
                                            <th scope="col">Transaction Id</th>
                                            <th scope="col">Created</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table9data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">{idx.name}</th>
                                                <td>{idx.text}</td>
                                                <td>{idx.date}</td>
                                                <td>
                                                    <Button variant={idx.color} className="btn btn-sm">{idx.btn}</Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open22} className="card-body"><pre><code>{`<Table className="table text-nowrap">
<thead className="table-secondary">
    <tr>
        <th scope="col">User Name</th>
        <th scope="col">Transaction Id</th>
        <th scope="col">Created</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    {Table9data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.date}</td>
        <td>
    <Button variant={idx.color} className="btn btn-sm">{idx.btn}</Button>
        </td>
    </tr>
    ))}
   
</tbody>
 </Table>`}</code></pre>
                        </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Table Head Danger
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen23(!open23)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open23}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <thead className="table-danger">
                                        <tr>
                                            <th scope="col">User Name</th>
                                            <th scope="col">Transaction Id</th>
                                            <th scope="col">Created</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table9data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">{idx.name}</th>
                                                <td>{idx.text}</td>
                                                <td>{idx.date}</td>
                                                <td>
                                                    <Button variant={idx.color} className="btn btn-sm">{idx.btn}</Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open23} className="card-body"><pre><code>{`<Table className="table text-nowrap">
<thead className="table-danger">
    <tr>
        <th scope="col">User Name</th>
        <th scope="col">Transaction Id</th>
        <th scope="col">Created</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    {Table9data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">{idx.name}</th>
        <td>{idx.text}</td>
        <td>{idx.date}</td>
        <td>
    <Button variant={idx.color} className="btn btn-sm">{idx.btn}</Button>
        </td>
    </tr>
    ))}
   
</tbody>
 </Table>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Table Foot
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen24(!open24)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open24}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <thead className="table-primary">
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Team</th>
                                            <th scope="col">Matches Won</th>
                                            <th scope="col">Win Ratio</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table10data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row"> {idx.text1}</th>
                                                <td>{idx.text2}</td>
                                                <td>{idx.text3} </td>
                                                <td>
                                                    <span className="badge bg-primary">{idx.text4}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot className="table-primary">
                                        <tr>
                                            <th scope="row"> Total </th>
                                            <td>United States</td>
                                            <td>558</td>
                                            <td><span className="badge bg-primary">56%</span></td>
                                        </tr>
                                    </tfoot>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open24} className="card-body"><pre><code>{` <Table className="table text-nowrap">
<thead className="table-primary">
    <tr>
        <th scope="col">S.No</th>
        <th scope="col">Team</th>
        <th scope="col">Matches Won</th>
        <th scope="col">Win Ratio</th>
    </tr>
</thead>
<tbody>
    {Table10data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row"> {idx.text1}</th>
        <td>{idx.text2}</td>
        <td>{idx.text3} </td>
        <td>
<span className="badge bg-primary">{idx.text4}</span>
        </td>
    </tr>
    ))}
</tbody>
<tfoot className="table-primary">
    <tr>
        <th scope="row"> Total </th>
        <td>United States</td>
        <td>558</td>
        <td><span className="badge bg-primary">56%</span></td>
    </tr>
</tfoot>
 </Table>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Table With Caption
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen25(!open25)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open25}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <caption>Top 3 Countries</caption>
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Country</th>
                                            <th scope="col">Medals Won</th>
                                            <th scope="col">No Of Athletes</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">01</th>
                                            <td>United States</td>
                                            <td>2012<i className="ri-medal-line mx-2"></i></td>
                                            <td>1823</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">02</th>
                                            <td>United Kingdom</td>
                                            <td>1012<i className="ri-medal-line mx-2"></i></td>
                                            <td>992</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">03</th>
                                            <td>Germany</td>
                                            <td>914<i className="ri-medal-line mx-2"></i></td>
                                            <td>875</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open25} className="card-body"><pre><code>{`<Table className="table text-nowrap">
 <caption>Top 3 Countries</caption>
 <thead>
     <tr>
         <th scope="col">S.No</th>
         <th scope="col">Country</th>
         <th scope="col">Medals Won</th>
         <th scope="col">No Of Athletes</th>
     </tr>
 </thead>
 <tbody>
     <tr>
         <th scope="row">01</th>
         <td>United States</td>
         <td>2012<i className="ri-medal-line mx-2"></i></td>
         <td>1823</td>
     </tr>
     <tr>
         <th scope="row">02</th>
         <td>United Kingdom</td>
         <td>1012<i className="ri-medal-line mx-2"></i></td>
         <td>992</td>
     </tr>
     <tr>
         <th scope="row">03</th>
         <td>Germany</td>
         <td>914<i className="ri-medal-line mx-2"></i></td>
         <td>875</td>
     </tr>
 </tbody>
</Table>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Table With Top Caption
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen26(!open26)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open26}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table text-nowrap caption-top">
                                    <caption>Top IT Companies</caption>
                                    <thead>
                                        <tr>
                                            <th scope="col">S.No</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Revenue</th>
                                            <th scope="col">Country</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Microsoft</td>
                                            <td>$170 billion</td>
                                            <td>United States</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>HP</td>
                                            <td>$72 billion</td>
                                            <td>United States</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>IBM</td>
                                            <td>$60 billion</td>
                                            <td>United States</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open26} className="card-body"><pre><code>{`<Table className="table text-nowrap caption-top">
<caption>Top IT Companies</caption>
<thead>
    <tr>
        <th scope="col">S.No</th>
        <th scope="col">Name</th>
        <th scope="col">Revenue</th>
        <th scope="col">Country</th>
    </tr>
</thead>
<tbody>
    <tr>
        <th scope="row">1</th>
        <td>Microsoft</td>
        <td>$170 billion</td>
        <td>United States</td>
    </tr>
    <tr>
        <th scope="row">2</th>
        <td>HP</td>
        <td>$72 billion</td>
        <td>United States</td>
    </tr>
    <tr>
        <th scope="row">3</th>
        <td>IBM</td>
        <td>$60 billion</td>
        <td>United States</td>
    </tr>
</tbody>
 </Table>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Active Tables
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen27(!open27)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open27}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Created On</th>
                                            <th scope="col">Number</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="table-active">
                                            <th scope="row">Mark</th>
                                            <td>21,Dec 2021</td>
                                            <td>+1234-12340</td>
                                            <td><span className="badge bg-primary">Completed</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Monika</th>
                                            <td>29,April 2022</td>
                                            <td>+1523-12459</td>
                                            <td><span className="badge bg-warning">Failed</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Madina</th>
                                            <td>30,Nov 2022</td>
                                            <td className="table-active">+1982-16234</td>
                                            <td><span className="badge bg-success">Successful</span></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Bhamako</th>
                                            <td>18,Mar 2022</td>
                                            <td>+1526-10729</td>
                                            <td><span className="badge bg-secondary">Pending</span></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open27} className="card-body"><pre><code>{`<Table className="table text-nowrap">
<thead>
    <tr>
        <th scope="col">Name</th>
        <th scope="col">Created On</th>
        <th scope="col">Number</th>
        <th scope="col">Status</th>
    </tr>
</thead>
<tbody>
    <tr className="table-active">
        <th scope="row">Mark</th>
        <td>21,Dec 2021</td>
        <td>+1234-12340</td>
        <td><span className="badge bg-primary">Completed</span></td>
    </tr>
    <tr>
        <th scope="row">Monika</th>
        <td>29,April 2022</td>
        <td>+1523-12459</td>
        <td><span className="badge bg-warning">Failed</span></td>
    </tr>
    <tr>
        <th scope="row">Madina</th>
        <td>30,Nov 2022</td>
        <td className="table-active">+1982-16234</td>
        <td><span className="badge bg-success">Successful</span></td>
    </tr>
    <tr>
        <th scope="row">Bhamako</th>
        <td>18,Mar 2022</td>
        <td>+1526-10729</td>
        <td><span className="badge bg-secondary">Pending</span></td>
    </tr>
</tbody>
</Table>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Small Tables
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen28(!open28)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open28}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table size="sm" className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Invoice</th>
                                            <th scope="col">Created Date</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table11data.map((idx) => (
                                            <tr key={Math.random()}>
                                                <th scope="row">
                                                    <div className="form-check">
                                                        <Form.Check id={idx.id} className="" type="checkbox" value="" />
                                                        <Form.Label className="" htmlFor="checkebox-sm">
                                                            {idx.name}
                                                        </Form.Label>
                                                    </div>
                                                </th>
                                                <td>{idx.date}</td>
                                                <td><Badge bg={idx.class} className="badge">{idx.text}</Badge></td>
                                                <td>
                                                    <div className="hstack gap-2 fs-15">
                                                        <Link to="#" className="btn btn-icon btn-sm btn-light"><i className="ri-download-2-line"></i></Link>
                                                        <Link to="#" className="btn btn-icon btn-sm btn-light"><i className="ri-edit-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open28} className="card-body"><pre><code>{`<Table size="sm" className="table text-nowrap">
<thead>
    <tr>
        <th scope="col">Invoice</th>
        <th scope="col">Created Date</th>
        <th scope="col">Status</th>
        <th scope="col">Action</th>
    </tr>
</thead>
<tbody>
    {Table11data.map((idx)=>(
    <tr key={Math.random()}>
        <th scope="row">
            <div className="form-check">
                <Form.Check id={idx.id} className="" type="checkbox" value="" />
                <Form.Label className="" htmlFor="checkebox-sm">
                  {idx.name}
                </Form.Label>
            </div>
        </th>
        <td>{idx.date}</td>
        <td><Badge bg={idx.class} className="badge">{idx.text}</Badge></td>
        <td>
            <div className="hstack gap-2 fs-15">
                <Link to="#" className="btn btn-icon btn-sm btn-light">
                <i className="ri-download-2-line"></i></Link>
                <Link to="#" className="btn btn-icon btn-sm btn-light">
                <i className="ri-edit-line"></i></Link>
            </div>
        </td>
    </tr>
    ))}
</tbody>
</Table>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Color variants tables
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen29(!open29)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open29}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">Color</th>
                                            <th scope="col">Client</th>
                                            <th scope="col">State</th>
                                            <th scope="col">Quantity</th>
                                            <th scope="col">Total Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table12data.map((idx) => (
                                            <tr key={Math.random()} className={idx.class1}>
                                                <th scope="row">{idx.text}</th>
                                                <td>{idx.name}</td>
                                                <td><Badge bg={idx.color} className={`badge ${idx.class2}`}>Processed</Badge></td>
                                                <td>{idx.quantity}</td>
                                                <td>{idx.price}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open29} className="card-body"><pre><code>{` <Table className="table text-nowrap">
<thead>
    <tr>
        <th scope="col">Color</th>
        <th scope="col">Client</th>
        <th scope="col">State</th>
        <th scope="col">Quantity</th>
        <th scope="col">Total Price</th>
    </tr>
</thead>
<tbody>
    {Table12data.map((idx)=>(
    <tr key={Math.random()} className={idx.class1}>
        <th scope="row">{idx.text}</th>
        <td>{idx.name}</td>
        <td><Badge bg={idx.color} className="badge">Processed</Badge></td>
        <td>{idx.quantity}</td>
        <td>{idx.price}</td>
    </tr>
     ))}
</tbody>
</Table>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Nesting
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen30(!open30)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open30}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table striped bordered className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={4}>
                                                <Table className="table text-nowrap mb-0">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Aplhabets</th>
                                                            <th scope="col">Users</th>
                                                            <th scope="col">Email</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">A</th>
                                                            <td>Dino King</td>
                                                            <td>dinoking231@gmail.com</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">B</th>
                                                            <td>Poppins sams</td>
                                                            <td>pops@gmail.com</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">C</th>
                                                            <td>Brian Shaw</td>
                                                            <td>swanbrian@gmail.com</td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Larry</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">4</th>
                                            <td>Jimmy</td>
                                            <td>the Ostrich</td>
                                            <td>Dummy Text</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>Cobra Kai</td>
                                            <td>the Snake</td>
                                            <td>Another Name</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open30} className="card-body"><pre><code>{`<Table striped bordered className="table text-nowrap">
 <thead>
     <tr>
         <th scope="col">#</th>
         <th scope="col">First</th>
         <th scope="col">Last</th>
         <th scope="col">Handle</th>
     </tr>
 </thead>
 <tbody>
     <tr>
         <th scope="row">1</th>
         <td>Mark</td>
         <td>Otto</td>
         <td>@mdo</td>
     </tr>
     <tr>
         <td colSpan={4}>
             <Table className="table text-nowrap mb-0">
                 <thead>
                     <tr>
                         <th scope="col">Aplhabets</th>
                         <th scope="col">Users</th>
                         <th scope="col">Email</th>
                     </tr>
                 </thead>
                 <tbody>
                     <tr>
                         <th scope="row">A</th>
                         <td>Dino King</td>
                         <td>dinoking231@gmail.com</td>
                     </tr>
                     <tr>
                         <th scope="row">B</th>
                         <td>Poppins sams</td>
                         <td>pops@gmail.com</td>
                     </tr>
                     <tr>
                         <th scope="row">C</th>
                         <td>Brian Shaw</td>
                         <td>swanbrian@gmail.com</td>
                     </tr>
                 </tbody>
             </Table>
         </td>
     </tr>
     <tr>
         <th scope="row">3</th>
         <td>Larry</td>
         <td>the Bird</td>
         <td>@twitter</td>
     </tr>
     <tr>
         <th scope="row">4</th>
         <td>Jimmy</td>
         <td>the Ostrich</td>
         <td>Dummy Text</td>
     </tr>
     <tr>
         <th scope="row">5</th>
         <td>Cobra Kai</td>
         <td>the Snake</td>
         <td>Another Name</td>
     </tr>
 </tbody>
</Table>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Always responsive
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen31(!open31)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open31}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <Form.Check className="" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></th>
                                            <th scope="col">Team Head</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Role</th>
                                            <th scope="col">Gmail</th>
                                            <th scope="col">Team</th>
                                            <th scope="col">Work Progress</th>
                                            <th scope="col">Revenue</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <Form.Check className="=" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." /></th>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={face3} alt="img" />
                                                    </span>Mayor Kelly
                                                </div>
                                            </td>
                                            <td>Manufacturer</td>
                                            <td><span className="badge bg-primary-transparent">Team Lead</span></td>
                                            <td>mayorkrlly@gmail.com</td>
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
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" to="#">
                                                        +4
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar className="progress progress-xs" variant='primary' now={52} />
                                            </td>
                                            <td>$10,984.29</td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link to="#" className="btn btn-icon btn-sm btn-success"><i className="ri-download-2-line"></i></Link>
                                                    <Link to="#" className="btn btn-icon btn-sm btn-info"><i className="ri-edit-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <Form.Check className="" type="checkbox" id="checkboxNoLabel2" value="" aria-label="..." /></th>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={face12} alt="img" />
                                                    </span>Andrew Garfield
                                                </div>
                                            </td>
                                            <td>Managing Director</td>
                                            <td><span className="badge bg-warning-transparent">Director</span></td>
                                            <td>andrewgarfield@gmail.com</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face1} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face5} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face11} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face15} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" to="#">
                                                        +4
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar className="progress progress-xs" variant='primary' now={91} />

                                            </td>
                                            <td>$1.4billion</td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link to="#" className="btn btn-icon btn-sm btn-success"><i className="ri-download-2-line"></i></Link>
                                                    <Link to="#" className="btn btn-icon btn-sm btn-info"><i className="ri-edit-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <Form.Check className="" type="checkbox" id="checkboxNoLabel3" value="" aria-label="..." /></th>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={face14} alt="img" />
                                                    </span>Simon Cowel
                                                </div>
                                            </td>
                                            <td>Service Manager</td>
                                            <td><span className="badge bg-success-transparent">Manager</span></td>
                                            <td>simoncowel234@gmail.com</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face6} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face16} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" to="#">
                                                        +10
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar className="progress progress-xs" variant='primary' now={45} />
                                            </td>
                                            <td>$7,123.21</td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link to="#" className="btn btn-icon btn-sm btn-success"><i className="ri-download-2-line"></i></Link>
                                                    <Link to="#" className="btn btn-icon btn-sm btn-info"><i className="ri-edit-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <Form.Check className="" type="checkbox" id="checkboxNoLabel13" value="" aria-label="..." /></th>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="avatar avatar-xs me-2 online avatar-rounded">
                                                        <img src={face5} alt="img" />
                                                    </span>Mirinda Hers
                                                </div>
                                            </td>
                                            <td>Recruiter</td>
                                            <td><span className="badge bg-danger-transparent">Employee</span></td>
                                            <td>mirindahers@gmail.com</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face3} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face10} alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={face14} alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" to="#">
                                                        +6
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <ProgressBar className="progress progress-xs" variant='primary' now={21} />
                                            </td>
                                            <td>$2,325.45</td>
                                            <td>
                                                <div className="hstack gap-2 fs-15">
                                                    <Link to="#" className="btn btn-icon btn-sm btn-success"><i className="ri-download-2-line"></i></Link>
                                                    <Link to="#" className="btn btn-icon btn-sm btn-info"><i className="ri-edit-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open31} className="card-body"><pre><code>{`<Table className="table text-nowrap">
 <thead>
     <tr>
         <th scope="col">
             <Form.Check className="" type="checkbox" id="checkboxNoLabel" value="" aria-label="..."/></th>
         <th scope="col">Team Head</th>
         <th scope="col">Category</th>
         <th scope="col">Role</th>
         <th scope="col">Gmail</th>
         <th scope="col">Team</th>
         <th scope="col">Work Progress</th>
         <th scope="col">Revenue</th>
         <th scope="col">Action</th>
     </tr>
 </thead>
 <tbody>
     <tr>
         <th scope="row">
             <Form.Check className="=" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..."/></th>
         <td>
             <div className="d-flex align-items-center">
                 <span className="avatar avatar-xs me-2 online avatar-rounded">
                     <img src={face3} alt="img"/>
                 </span>Mayor Kelly
             </div>
         </td>
         <td>Manufacturer</td>
         <td><span className="badge bg-primary-transparent">Team Lead</span></td>
         <td>mayorkrlly@gmail.com</td>
         <td>
             <div className="avatar-list-stacked">
                 <span className="avatar avatar-sm avatar-rounded">
                     <img src={face2} alt="img"/>
                 </span>
                 <span className="avatar avatar-sm avatar-rounded">
                     <img src={face8} alt="img"/>
                 </span>
                 <span className="avatar avatar-sm avatar-rounded">
                     <img src={face2} alt="img"/>
                 </span>
                 <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" to="#">
                     +4
                 </Link>
             </div>
         </td>
         <td>
             <ProgressBar className="progress progress-xs" variant='primary' now={52} />
         </td>
         <td>$10,984.29</td>
         <td>
             <div className="hstack gap-2 fs-15">
                 <Link to="#" className="btn btn-icon btn-sm btn-success">
                 <i className="ri-download-2-line"></i></Link>
                 <Link to="#" className="btn btn-icon btn-sm btn-info">
                 <i className="ri-edit-line"></i></Link>
             </div>
         </td>
     </tr>
     <tr>
         <th scope="row">
         <Form.Check className="" type="checkbox" id="checkboxNoLabel2" value="" aria-label="..."/></th>
         <td>
             <div className="d-flex align-items-center">
                 <span className="avatar avatar-xs me-2 online avatar-rounded">
                     <img src={face12} alt="img"/>
                 </span>Andrew Garfield
             </div>
         </td>
         <td>Managing Director</td>
         <td><span className="badge bg-warning-transparent">Director</span></td>
         <td>andrewgarfield@gmail.com</td>
         <td>
             <div className="avatar-list-stacked">
                 <span className="avatar avatar-sm avatar-rounded">
                     <img src={face1} alt="img"/>
                 </span>
                 <span className="avatar avatar-sm avatar-rounded">
                     <img src={face5} alt="img"/>
                 </span>
                 <span className="avatar avatar-sm avatar-rounded">
                     <img src={face11} alt="img"/>
                 </span>
                 <span className="avatar avatar-sm avatar-rounded">
                     <img src={face15} alt="img"/>
                 </span>
                 <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" to="#">
                     +4
                 </Link>
             </div>
         </td>
         <td>
         <ProgressBar className="progress progress-xs" variant='primary' now={91} />
             
         </td>
         <td>$1.4billion</td>
         <td>
             <div className="hstack gap-2 fs-15">
                 <Link to="#" className="btn btn-icon btn-sm btn-success">
                 <i className="ri-download-2-line"></i></Link>
                 <Link to="#" className="btn btn-icon btn-sm btn-info">
                 <i className="ri-edit-line"></i></Link>
             </div>
         </td>
     </tr>   
</tbody>
</Table>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Vertical alignment
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen32(!open32)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open32}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table className="table align-middle">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="w-25">Heading 1</th>
                                            <th scope="col" className="w-25">Heading 2</th>
                                            <th scope="col" className="w-25">Heading 3</th>
                                            <th scope="col" className="w-25">Heading 4</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Table13data.map((idx) => (
                                            <tr key={Math.random()} className={idx.class1}>
                                                <td>{idx.text1} <code>{idx.code1}</code> {idx.text2}</td>
                                                <td>{idx.text1} <code>{idx.code1}</code> {idx.text2}</td>
                                                <td className={idx.class2}>{idx.text3} <code>{idx.code2}</code> {idx.text4}</td>
                                                <td>This here is some placeholder text, intended to take up
                                                    quite a
                                                    bit of vertical space, to demonstrate how the vertical
                                                    alignment
                                                    works in the preceding cells.</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                            <Collapse in={open32} className="card-body"><pre><code>{` <Table className="table align-middle">
<thead>
    <tr>
        <th scope="col" className="w-25">Heading 1</th>
        <th scope="col" className="w-25">Heading 2</th>
        <th scope="col" className="w-25">Heading 3</th>
        <th scope="col" className="w-25">Heading 4</th>
    </tr>
</thead>
<tbody>
    {Table13data.map((idx)=>(
    <tr key={Math.random()} className={idx.class1}>
        <td>{idx.text1} <code>{idx.code1}</code> {idx.text2}</td>
        <td>{idx.text1} <code>{idx.code1}</code> {idx.text2}</td>
        <td className={idx.class2}>{idx.text3} <code>{idx.code2}</code> {idx.text4 }</td>
        <td>This here is some placeholder text, intended to take up
            quite a
            bit of vertical space, to demonstrate how the vertical
            alignment
            works in the preceding cells.</td>
    </tr>
    ))}
</tbody>
</Table>`}</code></pre>
                            </Collapse>
                    </Card>
                </Col>
            </Row>

        </Fragment>
    );
};

export default Tables;
