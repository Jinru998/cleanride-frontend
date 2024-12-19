import { FC, Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import { Linearea, Linecolumnarea, Mixedlinecolumn, MultipleYaxis } from './mixeddata';

interface MixedchartsProps { }

const Mixedcharts: FC<MixedchartsProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Apex Mixed Charts" heading="Apex Charts" active="Apex Mixed Charts" />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Line & Column Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="mixed-linecolumn">
                                <Mixedlinecolumn />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Multiple Y-Axis Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="mixed-multiple-y">
                                <MultipleYaxis />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Line & Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="mixed-linearea">
                                <Linearea />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Line,Column & Area Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="mixed-all">
                                <Linecolumnarea />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Mixedcharts;
