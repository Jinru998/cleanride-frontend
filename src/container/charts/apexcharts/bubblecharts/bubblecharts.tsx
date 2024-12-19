import { FC, Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import { Bubble3D, Simplebubble } from './bubbledata';

interface BubblechartsProps { }

const Bubblecharts: FC<BubblechartsProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Apex Bubble Charts" heading="Apex Charts" active="Apex Bubble Charts" />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Simple Bubble Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="bubble-simple">
                                <Simplebubble />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>3D Bubble Chart</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="bubble-3d">
                                <Bubble3D />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Bubblecharts;
