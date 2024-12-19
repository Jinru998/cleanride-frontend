import  { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import { MultiSelect } from 'react-multi-select-component';
import { Data1, Data10, Data11, Data2, Data3, Data4, Data5, Data6, Data7, Data8, Data9 } from './jobpostdata';
import Select from 'react-select';
import DatePicker from "react-datepicker";

interface JobpostProps {}

const Jobpost: FC<JobpostProps> = () => {
    const [startDate, setStartDate] = useState<any>(new Date());
    const [selected1, setSelected1] = useState([]);
    const [selected2, setSelected2] = useState([]);
    const [selected3, setSelected3] = useState([]);
    const [selected4, setSelected4] = useState([]);
    const [selected5, setSelected5] = useState([]);

//Datepicker function
const handleDateChange = (date: Date | null) => {
    // Ensure date is defined before setting it
    if (date) {
        setStartDate(date);
    }
};
    return(
  <Fragment>
                <Pageheader title="Post Job" heading="Jobs" active="Post Job" />
                <Row>
                    <Col xxl={9} xl={8}>
                        <Card className="custom-card">
                            <Card.Header className="card-header justify-content-between">
                                <Card.Title>
                                    Post New Job
                                </Card.Title>                       
                            </Card.Header>
                            <Card.Body>
                                <div className="row gy-4 mb-4"> 
                                    <Col xl={6}>
                                        <Form.Label htmlFor="job-title" className="form-label">Job Title</Form.Label>
                                        <Form.Control type="text" className="form-control" id="job-title" placeholder="Job Title" defaultValue="Web Developer"/>
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label className="form-label">Job Category</Form.Label>
                                        <MultiSelect options={Data1} value={selected1} onChange={setSelected1} labelledBy="1" className="rounded-0 custom-select1" />
                                    </Col> 
                                    <Col xl={6}>
                                        <Form.Label className="form-label">Working Experience</Form.Label>
                                        <MultiSelect options={Data2} value={selected2} onChange={setSelected2} labelledBy="1" className="rounded-0 custom-select1" />
                                    </Col> 
                                    <Col xl={6}>
                                        <Form.Label className="form-label">Job Type</Form.Label> 
                                        <MultiSelect options={Data2} value={selected3} onChange={setSelected3} labelledBy="1" className="rounded-0 custom-select1" />
                                    </Col> 
                                    <Col xl={6}>
                                        <Form.Label className="form-label">Priority</Form.Label> 
                                        
                                        <Select options={Data3} classNamePrefix='Select2' menuPlacement='auto' className="multi-select" 
                                        placeholder="" defaultValue={[Data3[0]]} />
                                    </Col>  
                                    <Col xl={6}> 
                                        <Form.Label className="form-label">Vacancies</Form.Label>
                                        <MultiSelect options={Data4} value={selected4} onChange={setSelected4} labelledBy="1" className="rounded-0 custom-select1" />
                                    </Col> 
                                    <Col xl={6}> 
                                        <Form.Label className="form-label">Salary</Form.Label>
                                        <Select options={Data5} classNamePrefix='Select2' menuPlacement='auto' className="multi-select" placeholder="" defaultValue={[Data5[0]]} />
                                    </Col> 
                                    <Col xl={6}>
                                        <Form.Label htmlFor="skills" className="form-label">Skills :</Form.Label>
                                        <Select isMulti name="colors" options={Data6} className="basic-multi-select"classNamePrefix="Select2"
                                            defaultValue={[Data6[0], Data6[1], Data6[2]]} />
                                    </Col>      
                                    <Col xl={6}>
                                        <Form.Label htmlFor="job-deadline" className="form-label">Job Deadline</Form.Label>
                                        <DatePicker selected={startDate}  onChange={handleDateChange} placeholderText="Job Deadline"/>
                                    </Col>  
                                    <Col xl={6}> 
                                        <Form.Label className="form-label">Gender Requirement</Form.Label> 
                                        <Select  name="colors" options={Data7} className="basic-multi-select" classNamePrefix="Select2"
                                            defaultValue={[Data7[0]]} />
                                    </Col>                                      
                                    <Col xl={6}>
                                        <Form.Label htmlFor="language" className="form-label">Languages :</Form.Label>
                                        <Select isMulti name="colors" options={Data8} className="basic-multi-select"classNamePrefix="Select2"
                                            defaultValue={[Data8[0], Data8[3]]} />
                                    </Col>
                                    <Col xl={6}>
                                        <Form.Label htmlFor="qualification" className="form-label">Qualification :</Form.Label>
                                        <Select isMulti name="colors" options={Data9} className="basic-multi-select"classNamePrefix="Select2"
                                            defaultValue={[Data9[0], Data9[2], Data9[3]]} />
                                    </Col>
                                    <Col xl={12}>
                                        <Form.Label htmlFor="job-description" className="form-label">Job Description :</Form.Label>
                                        <Form.Control as="textarea" className="form-control" id="job-description" rows={4} defaultValue=" Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe  voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!">
                                           </Form.Control>
                                    </Col>
                                </div>  
                            </Card.Body>
                            <Card.Footer className="text-end">
                                <Button  variant='primary' href="#" className="btn  btn-wave waves-effect waves-light">
                                    <i className="bi bi-plus-circle"></i> Post Job
                                </Button>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xxl={3} xl={4}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Assign To Employer</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Col xl={12}>
                                    <Form.Label className="form-label">Employer Name</Form.Label>
                                    <MultiSelect options={Data10} value={selected5} onChange={setSelected5} labelledBy="1" className="rounded-0 custom-select1" />
                                </Col>                                 
                            </Card.Body>
                        </Card>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Company Details</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Row className="gy-3">
                                    <Col xl={12}>
                                        <Form.Label htmlFor="Company-Name" className="form-label">Company Name</Form.Label> 
                                        <Form.Control type="text" className="form-control" id="Company-Name" placeholder="Company Name" defaultValue="Obligation Pvt.Ltd"/>
                                    </Col>                                 
                                    <Col xl={12}>
                                        <Form.Label htmlFor="Company-Website" className="form-label">Company Website</Form.Label> 
                                        <Form.Control type="text" className="form-control" id="Company-Website" placeholder="Company Website" defaultValue="http//www.obligationpvtltd.com"/>
                                    </Col>  
                                    <Col xl={12}> 
                                        <Form.Label className="form-label">Country</Form.Label> 
                                        <Select  name="colors" options={Data11} className="basic-multi-select"classNamePrefix="Select2" defaultValue={[Data11[0]]}
                                           />
                                    </Col> 
                                    <Col xl={12}>
                                        <Form.Label htmlFor="Company-Address" className="form-label">Address</Form.Label> 
                                        <Form.Control type="text" className="form-control" id="Company-Address" placeholder="Company Address" defaultValue="USA"/>
                                    </Col>   
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
  </Fragment>
); };

export default Jobpost;
