import  { FC , Fragment, useState, useRef, ChangeEvent} from 'react';
import {  Card, Col, Dropdown, Form, InputGroup, ListGroup, Nav, Tab } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import face9 from "../../../../assets/images/faces/9.jpg";
import Select from 'react-select';
import { Accountoptions, Countryoptions, Languageoptions, Mailsettingslist, MaxLimitoptions, Maximumoptions } from './mailsettingsdata';

interface MailsettingsProps {}

const Mailsettings: FC<MailsettingsProps> = () => {
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
    return(
  <Fragment>
                <div className='container'>
                <Pageheader title="Mail Settings" heading="Mail" active="Mail Settings" />
                <div className="row mb-5">
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Tab.Container defaultActiveKey="one">
                            <Card.Header className="card-header d-sm-flex d-block">
                                <Nav className="nav nav-tabs nav-tabs-header mb-0 d-sm-flex d-block" role="tablist">
                                    <Nav.Item className="m-1">
                                        <Nav.Link eventKey="one" href="#personal-info" >Personal Information</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="m-1">
                                        <Nav.Link eventKey="two"  href="#account-settings" >Account Settings</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="m-1">
                                        <Nav.Link eventKey="three"  href="#email-settings" >Email</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="m-1">
                                        <Nav.Link eventKey="four"  href="#labels" >Labels</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="m-1">
                                        <Nav.Link eventKey="five"  href="#notification-settings" >Notifications</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="m-1">
                                        <Nav.Link eventKey="six"  href="#security" >Security</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card.Header>
                            <Card.Body>
                                <Tab.Content>
                                    <Tab.Pane eventKey="one" className="" id="personal-info"
                                        role="tabpanel">
                                        <div className="p-sm-3 p-0">
                                            <h6 className="fw-semibold mb-3">
                                                Photo :
                                            </h6>
                                            <div className="mb-4 d-sm-flex align-items-center">
                                                <div className="mb-0 me-5">
                                                    <span className="avatar avatar-xxl avatar-rounded">
                                                        <img src={selectedImage || ''} alt="" id="profile-img"/>
                                                        <span  className="badge rounded-pill bg-primary avatar-badge" onClick={openFileInput}>
                                                            <input type="file" name="photo"   ref={fileInputRef}
                                                                onChange={handleImageChange}
                                                                style={{ display: 'none' }}
                                                            className="position-absolute w-100 h-100 op-0" id="profile-change"/>
                                                            <i className="fe fe-camera"></i>
                                                        </span>
                                                    </span>
                                                </div>
                                                <div className="btn-group">
                                                    <button className="btn btn-primary">Change</button>
                                                    <button className="btn btn-light">Remove</button>
                                                </div>
                                            </div>
                                            <h6 className="fw-semibold mb-3">
                                                Profile :
                                            </h6>
                                            <div className="row gy-4 mb-4">
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="first-name" className="">First Name</Form.Label>
                                                    <Form.Control type="text" className="" id="first-name" placeholder="Firt Name"/>
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="last-name" className="">Last Name</Form.Label>
                                                    <Form.Control type="text" className="" id="last-name" placeholder="Last Name"/>
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label className="">User Name</Form.Label>
                                                    <InputGroup className="input-group mb-3">
                                                        <InputGroup.Text className="" id="basic-addon3">user2413@gmail.com</InputGroup.Text>
                                                        <Form.Control type="text" className="" id="basic-url" aria-describedby="basic-addon3"/>
                                                    </InputGroup>
                                                </Col>  
                                            </div>
                                            <h6 className="fw-semibold mb-3">
                                                Personal information :
                                            </h6>
                                            <div className="row gy-4 mb-4">
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="email-address" className="">Email Address :</Form.Label>
                                                    <Form.Control type="text" className="" id="email-address" placeholder="xyz@gmail.com"/>
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="Contact-Details" className="">Contact Details :</Form.Label>
                                                    <Form.Control type="text" className="" id="Contact-Details" placeholder="contact details"/>
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label htmlFor="language" className="form-label">Language :</Form.Label>
                                                    <Select  isMulti name="colors" options={Languageoptions} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Languageoptions[0]]}
                                                        />
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Label className="form-label">Country :</Form.Label>
                                                    <Select  name="colors" options={Countryoptions} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Countryoptions[0]]}
                                                        />
                                                </Col>
                                                <Col xl={12}>
                                                    <label htmlFor="bio" className="form-label">Bio :</label>
                                                    <Form.Control as="textarea" className="" id="bio" rows={5} defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!"/>
                                                       
                                                </Col>
                                            </div>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="two" className="account-settings" id="account-settings"
                                        role="tabpanel">
                                        <div className="row gap-3 justify-content-between">
                                            <Col xl={7} >
                                                <Card className="custom-card shadow-none mb-0 border">
                                                    <Card.Body>
                                                        <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                                            <div>
                                                                <p className="fs-14 mb-1 fw-semibold">Two Step Verification</p>
                                                                <p className="fs-12 text-muted mb-0">Two step verificatoin is very secured and restricts in happening faulty practices.</p>
                                                            </div>
                                                            <div className="custom-toggle-switch ms-sm-2 ms-0"> 
                                                                <input id="two-step" name="toggleswitchsize" type="checkbox" defaultChecked/> 
                                                                <Form.Label htmlFor="two-step" className="label-primary mb-1"></Form.Label>
                                                            </div>
                                                        </div>
                                                        <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                                            <div className="mb-sm-0 mb-2">
                                                                <p className="fs-14 mb-2 fw-semibold">Authentication</p>
                                                                <div className="mb-0">
                                                                    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio1" defaultChecked/>
                                                                        <label className="btn btn-outline-primary" htmlFor="btnradio1">
                                                                            <i className="ri-lock-unlock-line me-1 align-middle d-inline-block"></i>Pin</label>
                                                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio2"/>
                                                                        <label className="btn btn-outline-primary" htmlFor="btnradio2"><i className="ri-lock-password-line me-1 align-middle d-inline-block"></i>Password</label>
                                                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3"/>
                                                                        <label className="btn btn-outline-primary" htmlFor="btnradio3"><i className="ri-fingerprint-line me-1 align-middle d-inline-block"></i>Finger Print</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="custom-toggle-switch ms-sm-2 ms-0"> 
                                                                <input id="authentication" name="toggleswitchsize" type="checkbox" defaultChecked/>
                                                                <Form.Label htmlFor="authentication" className="label-primary mb-1"></Form.Label>
                                                            </div>
                                                        </div>
                                                        <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                                            <div>
                                                                <p className="fs-14 mb-1 fw-semibold">Recovery Mail</p>
                                                                <p className="fs-12 text-muted mb-0">Incase of forgetting password mails are sent to  heifo@gmail.com</p>
                                                            </div>
                                                            <div className="custom-toggle-switch ms-sm-2 ms-0"> 
                                                                <input id="recovery-mail" name="toggleswitchsize" type="checkbox" defaultChecked/>
                                                                <Form.Label htmlFor="recovery-mail" className="label-primary mb-1"></Form.Label>
                                                            </div>
                                                        </div>
                                                        <div className="d-sm-flex d-block align-items-top mb-4 justify-content-between">
                                                            <div>
                                                                <p className="fs-14 mb-1 fw-semibold">SMS Recovery</p>
                                                                <p className="fs-12 text-muted mb-0">SMS are sent to 9102312xx in case of recovery</p>
                                                            </div>
                                                            <div className="custom-toggle-switch ms-sm-2 ms-0"> 
                                                                <input id="sms-recovery" name="toggleswitchsize" type="checkbox" defaultChecked/>
                                                                <Form.Label htmlFor="sms-recovery" className="label-primary mb-1"></Form.Label>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-top justify-content-between">
                                                            <div>
                                                                <p className="fs-14 mb-1 fw-semibold">Reset Password</p>
                                                                <p className="fs-12 text-muted">Password should be min of <b className="text-success">8 digits<sup>*</sup></b>,atleast <b className="text-success">One Capital letter<sup>*</sup></b> and <b className="text-success">One Special Character<sup>*</sup></b> included.</p>
                                                                <div className="mb-2">
                                                                    <Form.Label htmlFor="current-password" className="form-label">Current Password</Form.Label>
                                                                    <Form.Control type="text" className="form-control" id="current-password" placeholder="Current Password"/>
                                                                </div>
                                                                <div className="mb-2">
                                                                    <Form.Label htmlFor="new-password" className="form-label">New Password</Form.Label>
                                                                    <Form.Control type="text" className="form-control" id="new-password" placeholder="New Password"/>
                                                                </div>
                                                                <div className="mb-0">
                                                                    <Form.Label htmlFor="confirm-password" className="form-label">Confirm Password</Form.Label>
                                                                    <Form.Control type="text" className="form-control" id="confirm-password" placeholder="Confirm PAssword"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xl={4}>
                                                <Card className="custom-card shadow-none mb-0 border">
                                                    <Card.Header className="card-header justify-content-between d-sm-flex d-block">
                                                        <Card.Title>Registered Devices</Card.Title>
                                                        <div className="mt-sm-0 mt-2">
                                                            <button className="btn btn-sm btn-primary">Signout from all devices</button>
                                                        </div>
                                                    </Card.Header>
                                                    <Card.Body>
                                                        <ListGroup>
                                                            {Mailsettingslist.map((idx)=>(
                                                            <ListGroup.Item key={Math.random()}>
                                                                <div className="d-sm-flex d-block align-items-top">
                                                                    <div className="lh-1 mb-sm-0 mb-2"><i className={idx.class}></i></div>
                                                                    <div className="lh-1 flex-fill">
                                                                        <p className="mb-1">
                                                                            <span className="fw-semibold">{idx.text1}</span>
                                                                        </p>
                                                                        <p className="mb-0">
                                                                            <span className="text-muted fs-11">{idx.text2}</span>
                                                                        </p>
                                                                    </div>
                                                                    <Dropdown className="dropdown mt-sm-0 mt-2">
                                                                        <Dropdown.Toggle variant='light' className="btn btn-icon btn-sm no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                                                            <i className="fe fe-more-vertical"></i>
                                                                        </Dropdown.Toggle>
                                                                        <Dropdown.Menu>
                                                                            <Dropdown.Item href="#">Action</Dropdown.Item>
                                                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                </div>
                                                            </ListGroup.Item>
                                                            ))}
                                                        </ListGroup>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="three" className=" p-0" id="email-settings"
                                        role="tabpanel">
                                        <ListGroup variant='flush' className="list-group">
                                            <ListGroup.Item>
                                                <div className="row gy-2 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3} lg={3} md={3} sm={12}>
                                                        <span className="fs-14 fw-semibold mb-0">Menu View :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <div className="form-check">
                                                            <Form.Check className="" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                                                            <Form.Label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                Default View
                                                            </Form.Label>
                                                        </div>
                                                        <div className="form-check">
                                                            <Form.Check className="" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked/>
                                                            <Form.Label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                Advanced View
                                                            </Form.Label>
                                                        </div>
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className="custom-toggle-switch float-sm-end"> 
                                                            <input id="menu-view" name="toggleswitchsize" type="checkbox" defaultChecked/>
                                                            <label htmlFor="menu-view" className="label-danger mb-1"></label>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="row gy-3 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3}>
                                                        <span className="fs-14 fw-semibold mb-0">Language :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <label htmlFor="mail-language" className="form-label">Languages :</label>
                                                        <Select  isMulti name="colors" options={Languageoptions} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Languageoptions[0], Languageoptions[1]]}
                                                        />
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className="custom-toggle-switch float-sm-end"> 
                                                            <input id="mail-languages" name="toggleswitchsize" type="checkbox"/>
                                                            <label htmlFor="mail-languages" className="label-danger mb-1"></label>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="row gy-2 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3}>
                                                        <span className="fs-14 fw-semibold mb-0">Images :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <div className="form-check">
                                                            <Form.Check className="" type="radio" name="example-radios" id="images-open1"/>
                                                            <Form.Label className="" htmlFor="images-open1">
                                                                Always Open Images
                                                            </Form.Label>
                                                        </div>
                                                        <div className="form-check">
                                                            <Form.Check className="" type="radio" name="example-radios" id="images-hide2" defaultChecked/>
                                                            <Form.Label className="" htmlFor="images-hide2">
                                                                Ask For Permission
                                                            </Form.Label>
                                                        </div>
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className="custom-toggle-switch float-sm-end"> 
                                                            <input id="mails-images" name="toggleswitchsize" type="checkbox"/> 
                                                            <label htmlFor="mails-images" className="label-danger mb-1"></label>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="row gy-2 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3}>
                                                        <span className="fs-14 fw-semibold mb-0">Keyboard Shortcuts :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <div className="form-check">
                                                            <Form.Check  type="radio" name="keyboard-enable" id="keyboard-enable1"/>
                                                            <Form.Label className="" htmlFor="keyboard-enable1">
                                                                Keyboard Shortcuts Enable
                                                            </Form.Label>
                                                        </div>
                                                        <div className="form-check">
                                                            <Form.Check  type="radio" name="keyboard-enable" id="keyboard-disable2" defaultChecked/>
                                                            <Form.Label className="" htmlFor="keyboard-disable2">
                                                                Keyboard Shortcuts Disable
                                                            </Form.Label>
                                                        </div>
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className="custom-toggle-switch float-sm-end"> 
                                                            <input id="keyboard-shortcuts" name="toggleswitchsize" type="checkbox"/>
                                                            <label htmlFor="keyboard-shortcuts" className="label-danger mb-1"></label>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="row gy-2 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3}>
                                                        <span className="fs-14 fw-semibold mb-0">Notifications :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <div className="form-check">
                                                            <Form.Check className="" type="checkbox" defaultValue="" id="desktop-notifications" defaultChecked/>
                                                            <Form.Label className="" htmlFor="desktop-notifications">
                                                                Desktop Notifications
                                                            </Form.Label>
                                                        </div>
                                                        <div className="form-check">
                                                            <Form.Check className="" type="checkbox" defaultValue="" id="mobile-notifications"/>
                                                            <Form.Label className="" htmlFor="mobile-notifications">
                                                                Mobile Notifications
                                                            </Form.Label>
                                                        </div>
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className="float-sm-end">
                                                            <Link to="#" className="btn btn-success-ghost btn-sm">Learn-more</Link>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="row gy-3 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3}>
                                                        <span className="fs-14 fw-semibold mb-0">Maximum Mails Per Page :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <Select name="colors" options={Maximumoptions} className="basic-multi-select"
                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Maximumoptions[0]]}
                                                        />
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className="custom-toggle-switch float-sm-end"> 
                                                            <input id="mails-per-page" name="toggleswitchsize" type="checkbox"/> 
                                                            <label htmlFor="mails-per-page" className="label-danger mb-1"></label>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="row gy-2 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3}>
                                                        <span className="fs-14 fw-semibold mb-0">Mail Composer :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <div className="form-check">
                                                            <Form.Check className="" type="radio" name="mail-composeron" id="mail-composeron1"/>
                                                            <Form.Label className="" htmlFor="mail-composeron1">
                                                                Mail Composer On
                                                            </Form.Label>
                                                        </div>
                                                        <div className="form-check">
                                                            <Form.Check className="" type="radio" name="mail-composeroff" id="mail-composeroff2" defaultChecked/>
                                                            <Form.Label className="" htmlFor="mail-composeroff2">
                                                                Mail Composer Off
                                                            </Form.Label>
                                                        </div>
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className="custom-toggle-switch float-sm-end"> 
                                                            <input id="mail-composer" name="toggleswitchsize" type="checkbox"/> 
                                                            <label htmlFor="mail-composer" className="label-danger mb-1"></label>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="row gy-2 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3}>
                                                        <span className="fs-14 fw-semibold mb-0">Auto Correct :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <div className="form-check">
                                                            <Form.Check className="" type="radio" name="auto-correcton" id="auto-correcton1"/>
                                                            <Form.Label className="" htmlFor="auto-correcton1">
                                                                Auto Correct On
                                                            </Form.Label>
                                                        </div>
                                                        <div className="form-check">
                                                            <Form.Check className="" type="radio" name="auto-correctoff" id="auto-correctoff2" defaultChecked/>
                                                            <Form.Label className="" htmlFor="auto-correctoff2">
                                                                Auto Correct Off
                                                            </Form.Label>
                                                        </div>
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className="custom-toggle-switch float-sm-end"> 
                                                            <input id="auto-correct" name="toggleswitchsize" type="checkbox"/> 
                                                            <label htmlFor="auto-correct" className="label-danger mb-1"></label>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="row gy-2 d-sm-flex align-items-center justify-content-between">
                                                    <Col xl={3}>
                                                        <span className="fs-14 fw-semibold mb-0">Mail Send Action :</span>
                                                    </Col>
                                                    <Col xl={4}>
                                                        <div className="form-check">
                                                            <Form.Check className="" type="checkbox" defaultValue="" id="on-keyboard" defaultChecked/>
                                                            <Form.Label className="" htmlFor="on-keyboard">
                                                                On Keyboard Action
                                                            </Form.Label>
                                                        </div>
                                                        <div className="form-check">
                                                            <Form.Check className="" type="checkbox" defaultValue="" id="on-buttonclick"/>
                                                            <Form.Label className="" htmlFor="on-buttonclick">
                                                                On Button Click
                                                            </Form.Label>
                                                        </div>
                                                    </Col>
                                                    <Col xl={5}>
                                                        <div className="float-sm-end">
                                                            <Link to="#" className="btn btn-success-ghost btn-sm">Learn-more</Link>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="four" className="" id="labels"
                                        role="tabpanel">
                                        <p className="fs-14 fw-semibold mb-3">Mail Labels :</p>
                                        <div className="row gy-2">
                                            <Col xl={3}>
                                                <Card className="custom-card shadow-none border">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="fw-semibold">All Mails</span>
                                                        </div>
                                                        <div>
                                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-allmails" id="all-mails-enable" defaultChecked/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="all-mails-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-allmails" id="all-mails-disable"/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="all-mails-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xl={3}>
                                                <Card className="custom-card shadow-none border">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="fw-semibold">Inbox</span>
                                                        </div>
                                                        <div>
                                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-inbox" id="inbox-enable" defaultChecked/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="inbox-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-inbox" id="inbox-disable"/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="inbox-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xl={3}>
                                                <Card className="custom-card shadow-none border">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="fw-semibold">Sent</span>
                                                        </div>
                                                        <div>
                                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-sent" id="sent-enable" defaultChecked/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="sent-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-sent" id="sent-disable"/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="sent-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xl={3}>
                                                <Card className="custom-card shadow-none border">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="fw-semibold">Drafts</span>
                                                        </div>
                                                        <div>
                                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-drafts" id="drafts-enable" defaultChecked/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="drafts-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-drafts" id="drafts-disable"/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="drafts-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xl={3}>
                                                <Card className="custom-card shadow-none border">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="fw-semibold">Spam</span>
                                                        </div>
                                                        <div>
                                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-spam" id="spam-enable" defaultChecked/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="spam-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-spam" id="spam-disable"/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="spam-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xl={3}>
                                                <Card className="custom-card shadow-none border">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="fw-semibold">Important</span>
                                                        </div>
                                                        <div>
                                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-important" id="important-enable" defaultChecked/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="important-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-important" id="important-disable"/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="important-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xl={3}>
                                                <Card className="custom-card shadow-none border">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="fw-semibold">Trash</span>
                                                        </div>
                                                        <div>
                                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-trash" id="trash-enable" defaultChecked/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="trash-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-trash" id="trash-disable"/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="trash-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xl={3}>
                                                <Card className="custom-card shadow-none border">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="fw-semibold">Archive</span>
                                                        </div>
                                                        <div>
                                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-archive" id="archive-enable" defaultChecked/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="archive-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-archive" id="archive-disable"/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="archive-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xl={3}>
                                                <Card className="custom-card shadow-none border">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="fw-semibold">Starred</span>
                                                        </div>
                                                        <div>
                                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-starred" id="starred-enable" defaultChecked/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="starred-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-starred" id="starred-disable"/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="starred-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </div>
                                        <p className="fs-14 fw-semibold mb-3">Settings :</p>
                                        <div className="row gy-2">
                                            <Col xl={3}>
                                                <Card className="custom-card shadow-none border">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="fw-semibold">Settings</span>
                                                        </div>
                                                        <div>
                                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-settings" id="settings-enable" defaultChecked/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="settings-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-settings" id="settings-disable"/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="settings-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </div>    
                                        <p className="fs-14 fw-semibold mb-3">Custom Labels :</p>
                                        <div className="row gy-2">
                                            <Col xl={3}>
                                                <Card className="custom-card shadow-none border">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="fw-semibold">Mail</span>
                                                        </div>
                                                        <div>
                                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-custom-mail" id="custom-mail-enable" defaultChecked/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="custom-mail-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-custom-mail" id="custom-mail-disable"/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="custom-mail-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xl={3}>
                                                <Card className="custom-card shadow-none border">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="fw-semibold">Home</span>
                                                        </div>
                                                        <div>
                                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-home" id="home-enable" defaultChecked/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="home-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-home" id="home-disable"/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="home-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xl={3}>
                                                <Card className="custom-card shadow-none border">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="fw-semibold">Work</span>
                                                        </div>
                                                        <div>
                                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-work" id="work-enable" defaultChecked/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="work-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-work" id="work-disable"/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="work-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col xl={3}>
                                                <Card className="custom-card shadow-none border">
                                                    <Card.Body className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="fw-semibold">Friends</span>
                                                        </div>
                                                        <div>
                                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-friends" id="friends-enable" defaultChecked/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="friends-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-friends" id="friends-disable"/>
                                                                <label className="btn btn-sm btn-outline-primary" htmlFor="friends-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        </div>    
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="five" className=" p-0" id="notification-settings"
                                        role="tabpanel">
                                        <ul className="list-group list-group-flush list-unstyled rounded">
                                            <ListGroup.Item>
                                                <div className="row gx-5 gy-3">
                                                    <Col xl={5}>
                                                        <p className="fs-16 mb-1 fw-semibold">Email Notifications</p>
                                                        <p className="fs-12 mb-0 text-muted">Email notifications are the notifications you will receeive when you are offline, you can customize them by enabling or disabling them.</p>
                                                    </Col>
                                                    <Col xl={7}>
                                                        <div className="d-flex align-items-top justify-content-between mt-sm-0 mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="fs-14 mb-1 fw-semibold">Updates & Features</p>
                                                                <p className="fs-12 mb-0 text-muted">Notifications about new updates and their features.</p>
                                                            </div>
                                                            <div>
                                                                <div className="custom-toggle-switch float-sm-end"> 
                                                                    <input id="update-features" name="toggleswitchsize" type="checkbox" defaultChecked/> 
                                                                    <label htmlFor="update-features" className="label-success mb-1"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-top justify-content-between mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="fs-14 mb-1 fw-semibold">Early Access</p>
                                                                <p className="fs-12 mb-0 text-muted">Users are selected for beta testing of new update,notifications relating or participate in any of paid product promotion.</p>
                                                            </div>
                                                            <div>
                                                                <div className="custom-toggle-switch float-sm-end"> 
                                                                    <input id="early-access" name="toggleswitchsize" type="checkbox"/> 
                                                                    <label htmlFor="early-access" className="label-success mb-1"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-top justify-content-between mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="fs-14 mb-1 fw-semibold">Email Shortcuts</p>
                                                                <p className="fs-12 mb-0 text-muted">Shortcut notifications for email.</p>
                                                            </div>
                                                            <div>
                                                                <div className="custom-toggle-switch float-sm-end"> 
                                                                    <input id="email-shortcut" name="toggleswitchsize" type="checkbox" defaultChecked/> 
                                                                    <label htmlFor="email-shortcut" className="label-success mb-1"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-top justify-content-between mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="fs-14 mb-1 fw-semibold">New Mails</p>
                                                                <p className="fs-12 mb-0 text-muted">Notifications related to new mails received.</p>
                                                            </div>
                                                            <div>
                                                                <div className="custom-toggle-switch float-sm-end"> 
                                                                    <input id="new-mails" name="toggleswitchsize" type="checkbox" defaultChecked/> 
                                                                    <label htmlFor="new-mails" className="label-success mb-1"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-top justify-content-between mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="fs-14 mb-1 fw-semibold">Mail Chat Messages</p>
                                                                <p className="fs-12 mb-0 text-muted">Any of new messages are received will be updated through notifications.</p>
                                                            </div>
                                                            <div>
                                                                <div className="custom-toggle-switch float-sm-end"> 
                                                                    <input id="mail-chat-messages" name="toggleswitchsize" type="checkbox" defaultChecked/> 
                                                                    <label htmlFor="mail-chat-messages" className="label-success mb-1"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="row gx-5 gy-3">
                                                    <Col xl={5}>
                                                        <p className="fs-16 mb-1 fw-semibold">Push Notifications</p>
                                                        <p className="fs-12 mb-0 text-muted">Push notifications are recieved when you are online, you can customize them by enabling or disabling them.</p>
                                                    </Col>
                                                    <Col xl={7}>
                                                        <div className="d-flex align-items-top justify-content-between mt-sm-0 mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="fs-14 mb-1 fw-semibold">New Mails</p>
                                                                <p className="fs-12 mb-0 text-muted">Notifications related to new mails received.</p>
                                                            </div>
                                                            <div>
                                                                <div className="custom-toggle-switch float-sm-end"> 
                                                                    <input id="push-new-mails" name="toggleswitchsize" type="checkbox" defaultChecked/> 
                                                                    <label htmlFor="push-new-mails" className="label-success mb-1"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-top justify-content-between mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="fs-14 mb-1 fw-semibold">Mail Chat Messages</p>
                                                                <p className="fs-12 mb-0 text-muted">Any of new messages are received will be updated through notifications.</p>
                                                            </div>
                                                            <div>
                                                                <div className="custom-toggle-switch float-sm-end"> 
                                                                    <input id="push-mail-chat-messages" name="toggleswitchsize" type="checkbox" defaultChecked/> 
                                                                    <label htmlFor="push-mail-chat-messages" className="label-success mb-1"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex align-items-top justify-content-between mt-3">
                                                            <div className="mail-notification-settings">
                                                                <p className="fs-14 mb-1 fw-semibold">Mail Extensions</p>
                                                                <p className="fs-12 mb-0 text-muted">Notifications related to the extensions received by new emails and thier propertied also been displayed.</p>
                                                            </div>
                                                            <div>
                                                                <div className="custom-toggle-switch float-sm-end"> 
                                                                    <input id="mail-extensions" name="toggleswitchsize" type="checkbox"/> 
                                                                    <label htmlFor="mail-extensions" className="label-success mb-1"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </ListGroup.Item>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="six" className="overflow-hidden p-0" id="security"
                                        role="tabpanel">
                                        <ul className="list-group list-group-flush list-unstyled">
                                            <ListGroup.Item>
                                                <div className="row gx-5 gy-3">
                                                    <Col xl={4}>
                                                        <p className="fs-16 mb-1 fw-semibold">Logging In</p>
                                                        <p className="fs-12 mb-0 text-muted">Security settings related to logging into our email account and taking down account if any mischevious action happended.</p>
                                                    </Col>
                                                    <Col xl={8}>
                                                        <div className="d-sm-flex d-block align-items-top justify-content-between mt-sm-0 mt-3">
                                                            <div className="mail-security-settings">
                                                                <p className="fs-14 mb-1 fw-semibold">Max Limit for login attempts</p>
                                                                <p className="fs-12 mb-0 text-muted">Account will freeze for 24hrs while attempt to login with wrong credentials for selected number of times</p>
                                                            </div>
                                                            <div>
                                                                <Select name="colors" options={MaxLimitoptions} className="basic-multi-select"
                                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[MaxLimitoptions[0]]}
                                                                        />
                                                            </div>
                                                        </div>
                                                        <div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                            <div>
                                                                <p className="fs-14 mb-1 fw-semibold">Account Freeze time management</p>
                                                                <p className="fs-12 mb-0 text-muted">You can change the time for the account freeze when attempts for </p>
                                                            </div>
                                                            <div>
                                                                <Select name="colors" options={Accountoptions} className="basic-multi-select"
                                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Accountoptions[0]]}
                                                                    />
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="row gx-5 gy-3">
                                                    <Col xl={4}>
                                                        <p className="fs-16 mb-1 fw-semibold">Password Requirements</p>
                                                        <p className="fs-12 mb-0 text-muted">Security settings related to password strength.</p>
                                                    </Col>
                                                    <Col xl={8}>
                                                        <div className="d-sm-flex d-block align-items-top justify-content-between mt-sm-0 mt-3">
                                                            <div className="mail-security-settings">
                                                                <p className="fs-14 mb-1 fw-semibold">Minimun number of characters in the password</p>
                                                                <p className="fs-12 mb-0 text-muted">There should be a minimum number of characters for a password to be validated that shouls be set here.</p>
                                                            </div>
                                                            <div>
                                                                <input type="text" className="form-control" defaultValue="8"/>
                                                            </div>
                                                        </div>
                                                        <div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                            <div>
                                                                <p className="fs-14 mb-1 fw-semibold">Contain A Number</p>
                                                                <p className="fs-12 mb-0 text-muted">Password should contain a number.</p>
                                                            </div>
                                                            <div>
                                                                <div className="custom-toggle-switch float-sm-end"> 
                                                                    <input id="password-number" name="toggleswitchsize" type="checkbox"/> 
                                                                    <label htmlFor="password-number" className="label-success mb-1"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                            <div>
                                                                <p className="fs-14 mb-1 fw-semibold">Contain A Special Character</p>
                                                                <p className="fs-12 mb-0 text-muted">Password should contain a special Character.</p>
                                                            </div>
                                                            <div>
                                                                <div className="custom-toggle-switch float-sm-end"> 
                                                                    <input id="password-special-character" name="toggleswitchsize" type="checkbox" defaultChecked/> 
                                                                    <label htmlFor="password-special-character" className="label-success mb-1"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                            <div>
                                                                <p className="fs-14 mb-1 fw-semibold">Atleast One Capital Letter</p>
                                                                <p className="fs-12 mb-0 text-muted">Password should contain atleast one capital letter.</p>
                                                            </div>
                                                            <div>
                                                                <div className="custom-toggle-switch float-sm-end"> 
                                                                    <input id="password-capital" name="toggleswitchsize" type="checkbox" defaultChecked/> 
                                                                    <label htmlFor="password-capital" className="label-success mb-1"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="d-sm-flex d-block align-items-top justify-content-between mt-3">
                                                            <div>
                                                                <p className="fs-14 mb-1 fw-semibold">Maximun Password Length</p>
                                                                <p className="fs-12 mb-0 text-muted">Maximum password lenth should be selected here.</p>
                                                            </div>
                                                            <div>
                                                                <input type="text" className="form-control" defaultValue="16"/>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </ListGroup.Item>
                                            <ListGroup.Item>
                                                <div className="row gx-5 gy-3">
                                                    <Col xl={4}>
                                                        <p className="fs-16 mb-1 fw-semibold">Unknown Chats</p>
                                                        <p className="fs-12 mb-0 text-muted">Security settings related to unknown chats.</p>
                                                    </Col>
                                                    <Col xl={8}>
                                                        <div>
                                                            <div className="form-check">
                                                                <Form.Check className="" type="radio" name="unknown-messages-show" id="unknown-messages-show1"/>
                                                                <label className="form-check-label" htmlFor="unknown-messages-show1">
                                                                    Show
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <Form.Check className="" type="radio" 
                                                                // name="unknown-messages-hide"
                                                                name="unknown-messages-show"
                                                                 id="unknown-messages-hide2" defaultChecked/>
                                                                <label className="form-check-label" htmlFor="unknown-messages-hide2">
                                                                    Hide
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </div>
                                            </ListGroup.Item>
                                        </ul>    
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                            <Card.Footer className="card-footer">
                                <div className="float-end">
                                    <button className="btn btn-light m-1">
                                        Restore Defaults
                                    </button>
                                    <button className="btn btn-primary m-1">
                                        Save Changes
                                    </button>
                                </div>
                            </Card.Footer>
                            </Tab.Container>
                        </Card>
                    </Col>
                </div>

                </div>
  </Fragment>
);
};
export default Mailsettings;
