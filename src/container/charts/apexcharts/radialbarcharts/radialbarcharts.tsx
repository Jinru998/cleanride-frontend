import  { FC, Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import { Basicradialbar, Circlechart, Circlegauge, Circlewithimage, Gradientcircle, Multipleradial, Semicirclegauge } from './radialbardata';

interface RadialbarchartsProps { }

const Radialbarcharts: FC<RadialbarchartsProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Apex Radialbar Charts" heading="Apex Charts" active="Apex Radialbar Charts" />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Pie Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="radialbar-basic">
                                <Basicradialbar />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Multiple Radialbar Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="radialbar-multiple">
                                <Multipleradial />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Circle Chart - Custom Angle</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="circle-custom">
                                <Circlechart />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Gradient Circle Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="gradient-circle">
                                <Gradientcircle />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Stroked Circular Gauge</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="circular-stroked">
                                <Circlegauge />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Circle Chart With Image</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="circle-image">
                                <Circlewithimage />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Semi Circular Gauge</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="circular-semi">
                                <Semicirclegauge />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Radialbarcharts;
