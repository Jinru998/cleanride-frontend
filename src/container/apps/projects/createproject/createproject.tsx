import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import Select from "react-select";
// import { Creatable } from 'react-select';
import { MultiSelect } from 'react-multi-select-component';
import Editordata, { multiselectdata } from './createdata';
import DatePicker from 'react-datepicker';

interface CreateprojectProps { }

const Createproject: FC<CreateprojectProps> = () => {
    const [, setStartDate] = useState(new Date());

    const handleDateChange = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    // const [value1, setValue1] = useState('');
    const [selected1, setSelected1] = useState([]);
    const [selected2, setSelected2] = useState([]);
    const Data = [
        { value: 1, label: 'High' },
        { value: 2, label: 'Low' },
        { value: 3, label: 'Medium' },
    ];
    const Data1 = [
        { value: 1, label: 'Inprogress' },
        { value: 2, label: 'On hold' },
        { value: 3, label: 'completed' },
    ];

    return (
        <Fragment>
            <Pageheader title="Create Project" heading="Projects" active="Create Project" />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Create Project
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-3">
                                <Col xl={4}>
                                    <Form.Label htmlFor="input-label" className="form-label">Project Name :</Form.Label>
                                    <Form.Control type="text" className="form-control" id="input-label" placeholder="Enter Project Name" />
                                </Col>
                                <Col xl={4}>
                                    <Form.Label htmlFor="input-label11" className="form-label">Project Manager :</Form.Label>
                                    <Form.Control type="text" className="form-control" id="input-label11" placeholder="Project Manager Name" />
                                </Col>
                                <Col xl={4}>
                                    <Form.Label htmlFor="input-label1" className="form-label">Client / Stakeholder :</Form.Label>
                                    <Form.Control type="text" className="form-control" id="input-label1" placeholder="Enter Client Name" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label className="form-label">Project Description :</Form.Label>
                                  
                                    <Editordata placeholder={'Write something...'} />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="form-label">Start Date :</Form.Label>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                           
                                            <DatePicker
                                                placeholderText='Choose date and time'
                                                onChange={handleDateChange}
                                                timeInputLabel="Time:"
                                                dateFormat="MM/dd/yyyy h:mm aa"
                                                showTimeInput
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="form-label">End Date :</Form.Label>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                         
                                             <DatePicker
                                                placeholderText='Choose date and time'
                                                onChange={handleDateChange}
                                                timeInputLabel="Time:"
                                                dateFormat="MM/dd/yyyy h:mm aa"
                                                showTimeInput
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="form-label">Status :</Form.Label>
                                    <MultiSelect options={Data1} value={selected2} onChange={setSelected2} labelledBy="1" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="form-label">Priority :</Form.Label>
                                    <MultiSelect options={Data} value={selected1} onChange={setSelected1} labelledBy="1" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="form-label">Assigned To</Form.Label>

                                    <Select isMulti name="colors" options={multiselectdata} className="basic-multi-select" classNamePrefix="Select2"
                                        defaultValue={[multiselectdata[0], multiselectdata[9], multiselectdata[4]]} />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label className="form-label">Tags</Form.Label>
                                    <Form.Control className="form-control" id="choices-text-unique-values" type="text" defaultValue="Marketing, Sales, Development, Design, Research" placeholder="This is a placeholder" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label className="form-label">Attachments</Form.Label>
                                    <Form.Control type="file" multiple />
                                </Col>
                            </div>
                        </Card.Body>
                        <Card.Footer className="card-footer">
                            <Button variant="" className="btn btn-primary-light btn-wave ms-auto float-end">Create Project</Button>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Createproject;
