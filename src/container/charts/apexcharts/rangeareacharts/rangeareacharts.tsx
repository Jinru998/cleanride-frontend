import { FC, Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import { Basicrangearea, Comborangearea } from './rangeareadata';

interface RangeareachartsProps { }

const Rangeareacharts: FC<RangeareachartsProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Apex Range Area Charts" heading="Apex Charts" active="Apex Range Area Charts" />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Basic Range Area Chart
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="rangearea-basic">
                                <Basicrangearea />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Combo Range Area Chart
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="rangearea-combo">
                                <Comborangearea />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Rangeareacharts;
