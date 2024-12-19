import { FC, Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import { Basicscatter, Datetimescatter, Imagefillescatter } from './scatterdata';

interface ScatterchartsProps { }

const Scattercharts: FC<ScatterchartsProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Apex Scatter Charts" heading="Apex Charts" active="Apex Scatter Charts" />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Scatter Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="scatter-basic">
                                <Basicscatter />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Datetime Scatter Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="scatter-datetime">
                                <Datetimescatter />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Image Fill Scatter Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="scatter-image">
                                <Imagefillescatter />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Scattercharts;
