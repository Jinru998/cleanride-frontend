import React from "react";
import { Card, Col, Form, Modal, Row, } from "react-bootstrap";
import { Link } from "react-router-dom";
import Select from 'react-select';
import ecommereceimg24 from "../../../../assets/images/ecommerce/png/24.png";
import ecommereceimg26 from "../../../../assets/images/ecommerce/png/26.png";
import ecommereceimg27 from "../../../../assets/images/ecommerce/png/27.png";
import ecommereceimg28 from "../../../../assets/images/ecommerce/png/28.png";
import ecommereceimg29 from "../../../../assets/images/ecommerce/png/29.png";
import ecommereceimg30 from "../../../../assets/images/ecommerce/png/30.png";
import ecommereceimg31 from "../../../../assets/images/ecommerce/png/31.png";

const Citydata = [
    { value: 'Georgetown', label: 'Georgetown' },
    { value: 'Alexandria', label: 'Alexandria' },
    { value: 'Rockville', label: 'Rockville' },
    { value: 'Frederick', label: 'Frederick' }
];
const Statedata = [
    { value: 'Washington,D.C', label: 'Washington,D.C' },
    { value: 'California', label: 'California' },
    { value: 'Texas', label: 'Texas' },
    { value: 'Alaska', label: 'Alaska' }
];
//Basic start
const Wizard = ({ step: currentIndex, ...props }: any) => {
    const steps: any = React.Children.toArray(props.children);
    const prevStep: any = currentIndex !== 0 && steps[currentIndex - 1].props;
    const nextStep: any = currentIndex !== steps.length - 1 && steps[currentIndex + 1].props;

    return (
        <div>

            <nav className="btn-group steps basicsteps gap-xl-5 flex-wrap">
                {steps.map((step: any, index: any) => (
                    <Button
                        key={step.props.number}
                        onClick={() => props.onChange(index)}
                        className={getClsNavBtn(index === currentIndex)}
                    >
                        <span className="number me-2 ">{step.props.number}</span>
                        <i>{step.props.title}</i>
                    </Button>
                ))}
            </nav>

            {steps[currentIndex]}

            <div className=" p-3 d-flex justify-content-between  ">
                <Button
                    visible={prevStep}
                    onClick={() => props.onChange(currentIndex - 1)}
                    title={prevStep.description}
                >
                    Back
                </Button>
                <Button
                    visible={nextStep}
                    onClick={() => props.onChange(currentIndex + 1)}
                    title={nextStep.description}
                >
                    Next
                </Button>
            </div>
        </div>
    );
};
const Step = ({ children }: any) => children;

function getClsNavBtn(active: any) {
    return "btn" + (active ? " active" : "");
}
function Button({ visible, ...props }: any) {
    return (

        <button
            className={visible ? "btn btn-primary " : "invisible"}
            {...props}
        />

    );
}
interface State {
    showModal: boolean;
    step: number;
  }
export class Basicwizard extends React.Component <{}, State>{
    constructor(props: {}) {
        super(props);
        this.state = {
          showModal: false,
          step: 0,
        };
      }
    
      openModal = () => {
        this.setState({ showModal: true });
      };
    
      closeModal = () => {
        this.setState({ showModal: false });
      };
    
      handleStep = (step: number) => {
        this.setState({ step });
      };

    render() {
    
        return (
            <Wizard step={this.state.step} onChange={this.handleStep}>
                {/* <i className="ri-truck-line me-2 align-middle"></i> */}
                <Step title="Shipping" number="1">
                    <section className="Basicwizard ">
                        <div className="p-4">
                            <p className="mb-1 fw-semibold text-muted op-5 fs-20">01</p>
                            <div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                                <div>Shipping Address :</div>
                                <div className="mt-sm-0 mt-2">
                                    <Button variant="" type="button" className="btn btn-primary btn-sm" data-bs-toggle="modal"  onClick={this.openModal}
                                    data-bs-target="#modal-new-address">
                                        <i className="ri-add-line me-1 align-middle fs-14 fw-semibold d-inline-block">
                                        </i>Add New Address</Button>
                                    <Modal centered size="lg" show={this.state.showModal} onHide={this.closeModal} className="modal fade" id="modal-new-address" tabIndex={-1} aria-labelledby="modal-new-address" aria-hidden="true">
                                                <Modal.Header closeButton className="modal-header">
                                                    <h6 className="modal-title" id="staticBackdropLabel">New Address
                                                    </h6>
                                                </Modal.Header>
                                                <Modal.Body className="">
                                                    <div className="row gy-3">
                                                        <Col xl={6}>
                                                            <Form.Label htmlFor="fullname-new" className="form-label">Full Name</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="fullname-new" placeholder="Full Name" />
                                                        </Col>
                                                        <Col xl={6}>
                                                            <Form.Label htmlFor="email-new" className="form-label">Email</Form.Label>
                                                            <Form.Control type="email" className="form-control" id="email-new" placeholder="email" />
                                                        </Col>
                                                        <Col xl={6}>
                                                            <Form.Label htmlFor="phonenumber-new" className="form-label">Phone Number</Form.Label>
                                                            <Form.Control type="number" className="form-control" id="phonenumber-new" placeholder="Phone" />
                                                        </Col>
                                                        <Col xl={6}>
                                                            <Form.Label htmlFor="address-new" className="form-label">Address</Form.Label>
                                                            <Form.Control type="text" className="form-control" id="address-new" placeholder="Address" />
                                                        </Col>
                                                        <Col xl={12}>
                                                            <Row>
                                                                <Col xl={3}>
                                                                    <Form.Label htmlFor="pincode-new" className="form-label">Pincode</Form.Label>
                                                                    <Form.Control type="number" className="form-control" id="pincode-new" placeholder="Pinicode" />
                                                                </Col>
                                                                <Col xl={3}>
                                                                    <Form.Label htmlFor="city-new" className="form-label">City</Form.Label>
                                                                    <Form.Control type="text" className="form-control" id="city-new" placeholder="City" />
                                                                </Col>
                                                                <Col xl={3}>
                                                                    <Form.Label htmlFor="state-new" className="form-label">State</Form.Label>
                                                                    <Form.Control type="text" className="form-control" id="state-new" placeholder="State" />
                                                                </Col>
                                                                <Col xl={3}>
                                                                    <Form.Label htmlFor="country-new" className="form-label">Country</Form.Label>
                                                                    <Form.Control type="text" className="form-control" id="country-new" placeholder="Country" />
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer className="modal-footer">
                                                    <Button variant="" type="button" className="btn btn-light" data-bs-dismiss="modal" onClick={this.closeModal}>Close</Button>
                                                    <Button variant="" type="button" className="btn btn-success">Save
                                                        Address</Button>
                                                </Modal.Footer>
                                    </Modal>
                                </div>
                            </div>
                            <div className="row gy-4 mb-4">
                                <Col xl={6}>
                                    <div className="form-floating">
                                        <Form.Control type="text" className="form-control" id="fullname-add" defaultValue="Json Taylor" placeholder="Name" />
                                        <Form.Label htmlFor="fullname-add">Full Name</Form.Label>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <div className="form-floating">
                                        <Form.Control type="email" className="form-control" id="email-add" defaultValue="jsontaylor2413@gmail.com" placeholder="name@example.com" />
                                        <Form.Label htmlFor="email-add">Email</Form.Label>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <div className="form-floating">
                                        <Form.Control type="email" className="form-control is-valid" id="phoneno-add" defaultValue="(555) 555-1234" placeholder="1234-XX-XXXX" />
                                        <Form.Label htmlFor="phoneno-add">Phone No</Form.Label>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <div className="form-floating">
                                        <Form.Control as="textarea" className="form-control" placeholder="Address Here" id="address-add"
                                            defaultValue="MIG-1-11,Monroe Street,Washington D.C,USA"></Form.Control>
                                        <Form.Label htmlFor="address-add">Address</Form.Label>
                                    </div>
                                    <Form.Check required isValid defaultChecked className="form-checked-outline form-checked-success mt-1 text-success" label="Same as Billing Address ?" />
                                </Col>
                                <Col xl={12}>
                                    <div className="row gy-2">
                                        <Col xl={3}>
                                            <div className="form-floating">
                                                <Form.Control type="text" className="form-control is-valid" id="pincode-add" defaultValue="20071" placeholder="Name" />
                                                <Form.Label htmlFor="pincode-add">Pin Code</Form.Label>
                                            </div>
                                        </Col>
                                        <Col xl={3}>
                                            <div className="form-floating">
                                                <Form.Control type="text" className="form-control" id="city-add" defaultValue="Georgetown" placeholder="Name" />
                                                <Form.Label htmlFor="city-add">City</Form.Label>
                                            </div>
                                        </Col>
                                        <Col xl={3}>
                                            <div className="form-floating">
                                                <Form.Control type="text" className="form-control" id="state-add" defaultValue="Washington, D.C" placeholder="Name" />
                                                <Form.Label htmlFor="state-add">State</Form.Label>
                                            </div>
                                        </Col>
                                        <Col xl={3}>
                                            <div className="form-floating">
                                                <Form.Control type="text" className="form-control" id="country-add" defaultValue="USA" placeholder="Name" />
                                                <Form.Label htmlFor="country-add">Country</Form.Label>
                                            </div>
                                        </Col>
                                    </div>
                                </Col>
                            </div>
                            <div className="row gy-3">
                                <p className="fs-15 fw-semibold mb-1">Shipping Methods :</p>
                                <Col xl={6}>
                                    <div className="form-check shipping-method-container mb-0">
                                        <Form.Check id="shipping-method1" name="shipping-methods" type="radio" className="" defaultChecked />
                                        <div className="form-check-label">
                                            <div className="d-sm-flex align-items-center justify-content-between">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md">
                                                        <img src={ecommereceimg28} alt="" />
                                                    </span>
                                                </div>
                                                <div className="shipping-partner-details me-sm-5 me-0">
                                                    <p className="mb-0 fw-semibold">UPS</p>
                                                    <p className="text-muted fs-11 mb-0">Delivered By 24,Nov 2022</p>
                                                </div>
                                                <div className="fw-semibold me-sm-5 me-0">
                                                    $9.99
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <div className="form-check shipping-method-container mb-0">
                                        <Form.Check id="shipping-method2" name="shipping-methods" type="radio" className="" />
                                        <div className="form-check-label">
                                            <div className="d-sm-flex align-items-center justify-content-between">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md">
                                                        <img src={ecommereceimg31} alt="" />
                                                    </span>
                                                </div>
                                                <div className="shipping-partner-details me-sm-5 me-0">
                                                    <p className="mb-0 fw-semibold">USPS</p>
                                                    <p className="text-muted fs-11 mb-0">Delivered By 22,Nov 2022</p>
                                                </div>
                                                <div className="fw-semibold me-sm-5 me-0">
                                                    $10.49
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <div className="form-check shipping-method-container mb-0">
                                        <Form.Check id="shipping-method3" name="shipping-methods" type="radio" className="" />
                                        <div className="form-check-label">
                                            <div className="d-sm-flex align-items-center justify-content-between">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md">
                                                        <img src={ecommereceimg29} alt="" />
                                                    </span>
                                                </div>
                                                <div className="shipping-partner-details me-sm-5 me-0">
                                                    <p className="mb-0 fw-semibold">FedEx</p>
                                                    <p className="text-muted fs-11 mb-0">Delivered Tomorrow</p>
                                                </div>
                                                <div className="fw-semibold me-sm-5 me-0">
                                                    $12.29
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                                <Col xl={6}>
                                    <div className="form-check shipping-method-container mb-0">
                                        <Form.Check id="shipping-method4" name="shipping-methods" type="radio" className="" />
                                        <div className="form-check-label">
                                            <div className="d-sm-flex align-items-center justify-content-between">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md">
                                                        <img src={ecommereceimg30} alt="" />
                                                    </span>
                                                </div>
                                                <div className="shipping-partner-details me-sm-5 me-0">
                                                    <p className="mb-0 fw-semibold">DHL</p>
                                                    <p className="text-muted fs-11 mb-0">Delivered Today</p>
                                                </div>
                                                <div className="fw-semibold me-sm-5 me-0">
                                                    $18.99
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </section>
                </Step>

                <Step title="Personal Details" number="2">
                    <section className="card-body Basicwizard p-0 ">
                        <div className="p-4">
                            <p className="mb-1 fw-semibold text-muted op-5 fs-20">02</p>
                            <div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                                <div>Personal Details :</div>
                            </div>
                            <div className="row gy-4">
                                <Col xl={6}>
                                    <Form.Label htmlFor="firstname-personal" className="form-label">First Name</Form.Label>
                                    <Form.Control type="text" className="form-control" id="firstname-personal" placeholder="First Name" defaultValue="Json" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="lastname-personal" className="form-label">Last Name</Form.Label>
                                    <Form.Control type="text" className="form-control" id="lastname-personal" placeholder="Last Name" defaultValue="Taylor" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="email-personal" className="form-label">Email</Form.Label>
                                    <Form.Control type="email" className="form-control" id="email-personal" placeholder="xyz@example.com" defaultValue="" />
                                </Col>
                                <Col xl={6}>
                                    <Form.Label htmlFor="phoneno-personal" className="form-label">Phone no</Form.Label>
                                    <Form.Control type="text" className="form-control" id="phoneno-personal" placeholder="(555)-555-1234" defaultValue="" />
                                </Col>
                                <Col xxl={2}>
                                    <Form.Label htmlFor="pincode-personal" className="form-label">Pincode</Form.Label>
                                    <Form.Control type="text" className="form-control" id="pincode-personal" placeholder="200017" defaultValue="" />
                                </Col>
                                <Col xxl={4}>
                                    <Form.Label htmlFor="choices-single-default" className="form-label">City</Form.Label>
                                    <Select isSearchable name="colors" options={Citydata} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Citydata[0]]}
                                    />
                                </Col>
                                <Col xxl={4}>
                                    <Form.Label htmlFor="choices-single-default1" className="form-label">State</Form.Label>
                                    <Select isSearchable name="colors" options={Statedata} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Statedata[0]]}
                                    />
                                </Col>
                                <Col xxl={2}>
                                    <Form.Label htmlFor="country-personal" className="form-label">Country</Form.Label>
                                    <Form.Control type="text" className="form-control" id="country-personal" placeholder="Country" defaultValue="USA" />
                                </Col>
                                <Col xl={12}>
                                    <Form.Label htmlFor="text-area" className="form-label">Address</Form.Label>
                                    <Form.Control as="textarea" className="form-control" id="text-area" rows={4}></Form.Control>
                                    <div className="form-check mt-1">
                                        <input className="form-check-input form-checked-outline form-checked-success" type="checkbox" defaultValue="" id="invalidCheck1" required defaultChecked />
                                        <Form.Label className="form-check-label text-success fs-12" htmlFor="invalidCheck1">
                                            Same as Shipping Address Address ?
                                        </Form.Label>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </section>
                </Step>
                <Step title="Payment" number="3">
                    <section className="card-body Basicwizard p-0 ">
                        <div className="p-4">
                            <p className="mb-1 fw-semibold text-muted op-5 fs-20">03</p>
                            <div className="fs-15 fw-semibold d-sm-flex d-block align-items-center justify-content-between mb-3">
                                <div>Payment Details :</div>
                            </div>
                            <Row>
                                <Col xl={12}>
                                    <div className="mb-3">
                                        <Form.Label className="form-label">Delivery Address</Form.Label>
                                        <div className="input-group">
                                            <Form.Control type="text" className="form-control" placeholder="Address" aria-label="address" aria-describedby="payment-address" defaultValue="MIG-1-11,Monroe Street,Washington D.C,USA" />
                                            <Button variant="" type="button" className="btn btn-info-light input-group-text" id="payment-address">Change</Button>
                                        </div>
                                    </div>
                                    <Card className="custom-card border shadow-none mb-3">
                                        <Card.Header>
                                            <Card.Title>
                                                Payment Methods
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <div className="btn-group mb-3 d-sm-flex d-block" role="group" aria-label="Basic radio toggle button group">
                                                <Form.Control type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                                                <Form.Label className="btn btn-outline-light text-default" htmlFor="btnradio1">C.O.D(Cash on delivery)</Form.Label>
                                                <Form.Control type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                                                <Form.Label className="btn btn-outline-light text-default mt-sm-0 mt-1" htmlFor="btnradio2">UPI</Form.Label>
                                                <Form.Control type="radio" className="btn-check" name="btnradio" id="btnradio3" defaultChecked />
                                                <Form.Label className="btn btn-outline-light text-default mt-sm-0 mt-1" htmlFor="btnradio3">Credit/Debit Card</Form.Label>
                                            </div>
                                            <div className="row gy-3">
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="payment-card-number" className="form-label">Card Number</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="payment-card-number" placeholder="Card Number" defaultValue="1245 - 5447 - 8934 - XXXX" />
                                                </Col>
                                                <Col xl={12}>
                                                    <Form.Label htmlFor="payment-card-name" className="form-label">Name On Card</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="payment-card-name" placeholder="Name On Card" defaultValue="JSON TAYLOR" />
                                                </Col>
                                                <Col xl={4}>
                                                    <Form.Label htmlFor="payment-cardexpiry-date" className="form-label">Expiration Date</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="payment-cardexpiry-date" placeholder="MM/YY" defaultValue="08/2024" />
                                                </Col>
                                                <Col xl={4}>
                                                    <Form.Label htmlFor="payment-cvv" className="form-label">CVV</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="payment-cvv" placeholder="XXX" defaultValue="341" />
                                                </Col>
                                                <Col xl={4}>
                                                    <Form.Label htmlFor="payment-security" className="form-label">O.T.P</Form.Label>
                                                    <Form.Control type="text" className="form-control" id="payment-security" placeholder="XXXXXX" defaultValue="183467" />
                                                    <Form.Label htmlFor="payment-security" className="form-label mt-1 text-success fs-11"><sup><i className="ri-star-s-fill"></i></sup>Do not share O.T.P with anyone</Form.Label>
                                                </Col>
                                                <Col xl={12}>
                                                    <div className="form-check">
                                                        <input className="form-check-input form-checked-success" type="checkbox" defaultValue="" id="payment-card-save" defaultChecked />
                                                        <Form.Label className="form-check-label" htmlFor="payment-card-save">
                                                            Save this card
                                                        </Form.Label>
                                                    </div>
                                                </Col>
                                            </div>
                                        </Card.Body>
                                        <Card.Footer className="card-footer">
                                            <div className="row gy-3">
                                                <p className="fs-15 fw-semibold mb-1">Saved Cards :</p>
                                                <Col xl={6}>
                                                    <div className="form-check payment-card-container mb-0 lh-1">
                                                        <Form.Check id="payment-card1" name="payment-cards" type="radio" className="" defaultChecked />
                                                        <div className="form-check-label">
                                                            <div className="d-sm-flex d-block align-items-center justify-content-between">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-md">
                                                                        <img src={ecommereceimg26} alt="" />
                                                                    </span>
                                                                </div>
                                                                <div className="saved-card-details">
                                                                    <p className="mb-0 fw-semibold">XXXX - XXXX - XXXX - 7646</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col xl={6}>
                                                    <div className="form-check payment-card-container mb-0 lh-1">
                                                        <Form.Check id="payment-card2" name="payment-cards" type="radio" className="" />
                                                        <div className="form-check-label">
                                                            <div className="d-sm-flex d-block align-items-center justify-content-between">
                                                                <div className="me-2 lh-1">
                                                                    <span className="avatar avatar-md">
                                                                        <img src={ecommereceimg27} alt="" />
                                                                    </span>
                                                                </div>
                                                                <div className="saved-card-details">
                                                                    <p className="mb-0 fw-semibold">XXXX - XXXX - XXXX - 9556</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            </div>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                   
                    </section>
                </Step>
                <Step title="Confirmation" number="4">
                    <section className="card-body Basicwizard ">
                        <div className="p-5 checkout-payment-success my-3">
                            <div className="mb-5">
                                <h5 className="text-success fw-semibold">Payment Successful...&#129309;</h5>
                            </div>
                            <div className="mb-5">
                                <img src={ecommereceimg24} alt="" className="img-fluid" />
                            </div>
                            <div className="mb-4">
                                <p className="mb-1 fs-14">You can track your order with Order Id <b>SPK#1FR</b> from <Link className="link-success" to="#"><u>Track Order</u></Link></p>
                                <p className="text-muted">Thankyou for shopping with us.</p>
                            </div>
                            <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/products/`} className="btn btn-success">Continue Shopping<i className="bi bi-cart ms-2"></i></Link>
                        </div>
                    </section>
                </Step>
            </Wizard>
        );
    }
}
//Basic end
