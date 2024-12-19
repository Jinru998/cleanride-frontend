import { FC, Fragment } from 'react';
import { Accordion, Button, Card, Col, Form, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';

interface FaqsProps { }

const Faqs: FC<FaqsProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Faq's" heading="Pages" active="Faq's" />
            <div className="row justify-content-center mb-5">
                <Col xl={12}>
                    <div className="row justify-content-center">
                        <Col xl={6}>
                            <div className="text-center p-3 faq-header mb-4">
                                <h5 className="mb-1 text-primary op-5 fw-semibold">F.A.Q's</h5>
                                <h4 className="mb-1 fw-semibold">Frequently Asked Questions</h4>
                                <p className="fs-15 text-muted op-7">We have shared some of the most frequently asked questions to help you out! </p>
                            </div>
                        </Col>
                    </div>
                </Col>
                <Col xl={10}>
                    <Row>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        General Topics ?
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Accordion className="accordion accordion-customicon1 accordion-primary" id="accordionFAQ1" defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header> Where can I subscribe to your newsletter?</Accordion.Header>
                                            <Accordion.Body>
                                                <strong>This is the first item's accordion body.</strong> It is shown by
                                                default, until the collapse plugin adds the appropriate classes that we
                                                use to style each element
                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Where can in edit my address?</Accordion.Header>
                                            <Accordion.Body>
                                                <strong>This is the first item's accordion body.</strong> It is shown by
                                                default, until the collapse plugin adds the appropriate classes that we
                                                use to style each element
                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>What are your opening hours?</Accordion.Header>
                                            <Accordion.Body>
                                                <strong>This is the first item's accordion body.</strong> It is shown by
                                                default, until the collapse plugin adds the appropriate classes that we
                                                use to style each element
                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>Do I have the right to return an item?</Accordion.Header>
                                            <Accordion.Body>
                                                <strong>This is the first item's accordion body.</strong> It is shown by
                                                default, until the collapse plugin adds the appropriate classes that we
                                                use to style each element
                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Customer Support ?
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <Accordion className="accordion accordion-customicon1 accordion-primary" id="accordionFAQ3" defaultActiveKey="1">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>What is the order procedure?</Accordion.Header>
                                            <Accordion.Body>
                                                <strong>This is the first item's accordion body.</strong> It is shown by
                                                default, until the collapse plugin adds the appropriate classes that we
                                                use to style each element
                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header> How and when do I receive the invoices?</Accordion.Header>
                                            <Accordion.Body>
                                                <strong>This is the first item's accordion body.</strong> It is shown by
                                                default, until the collapse plugin adds the appropriate classes that we
                                                use to style each element
                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Which method of ordering is best for me?</Accordion.Header>
                                            <Accordion.Body>
                                                <strong>This is the first item's accordion body.</strong> It is shown by
                                                default, until the collapse plugin adds the appropriate classes that we
                                                use to style each element
                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>What does an order cost?</Accordion.Header>
                                            <Accordion.Body>
                                                <strong>This is the first item's accordion body.</strong> It is shown by
                                                default, until the collapse plugin adds the appropriate classes that we
                                                use to style each element
                                                <code>.accordion-body</code>, though the transition does limit overflow.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title className='lh-base'>
                                        Still Have Questions ?
                                        <span className="subtitle fw-normal text-muted d-block fs-12">
                                            You can post your questions here,our support team is always active.
                                        </span>
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="row gy-3">
                                        <Col xl={6}>
                                            <Form.Label htmlFor="user-name" className="form-label">Your Name</Form.Label>
                                            <Form.Control type="text" className="form-control form-control-light" id="user-name" placeholder="Enter Your Name" />
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="user-email" className="form-label">Email Id</Form.Label>
                                            <Form.Control type="text" className="form-control form-control-light" id="user-email" placeholder="Enter Email" />
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label htmlFor="text-area" className="form-label">Textarea</Form.Label>
                                            <Form.Control as="textarea" className="form-control form-control-light" placeholder="Enter your question here" id="text-area" rows={2}></Form.Control>
                                        </Col>
                                    </div>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="primary" className="btn  btn-wave float-end">Send</Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </div>
        </Fragment>
    );
};

export default Faqs;
