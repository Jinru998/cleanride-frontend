import { FC, Fragment, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { MapAnnotation, Shapeworldmap, USState, WorldMap } from './vectordata';

interface VectormapsProps { }

const Vectormaps: FC<VectormapsProps> = () => {
    const [content, setContent] = useState("");
    return (
        <Fragment>
            <Pageheader title="Vector Maps" heading="Maps" active="Vector Maps" />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Basic Vector Map</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="vector-map">
                                <WorldMap setTooltipContent={setContent} />
                                {content}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Graticule Map</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="marker-map">
                                <Shapeworldmap />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>Annotation Map</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="marker-image-map">
                                <MapAnnotation />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>USA Map</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="lines-map">
                                <USState/>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Vectormaps;
