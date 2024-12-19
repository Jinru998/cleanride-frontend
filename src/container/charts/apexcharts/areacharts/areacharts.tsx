import { FC, Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import { Basicarea, Datetimexaxis, Github, Negative, Nullarea, Spiline, Stacked } from './areadata';

interface AreachartsProps { }

const Areacharts: FC<AreachartsProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Apex Area Charts" heading="Apex Charts" active="Apex Area Charts" />

            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-basic">
                                <Basicarea />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Spline Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-spline">
                                <Spiline />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Area Chart With Negative Values</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-negative">
                                <Negative />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Selection-Github Style Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Github />
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Stacked Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-stacked">
                                <Stacked />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Area Chart With Null Values</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="area-null">
                                <Nullarea />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Datetimexaxis />
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Areacharts;
