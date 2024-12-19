import  { FC, Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import { Basiccandlestick, Candlebrush, Candleline, Candlexaxis } from './candlestickdata';

interface CandlestickchartsProps {}

const Candlestickcharts: FC<CandlestickchartsProps> = () => {
    return(
  <Fragment>
                <Pageheader title="Apex Candlestick Charts" heading="Apex Charts" active="Apex Candlestick Charts" /> 
                <Row>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Basic Candlestick Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="candlestick-basic">
                                <Basiccandlestick/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Candlestick Synced With Brush Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Candlebrush/>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Candlestick With Cateory X-axis</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="candlestick-categoryx">
                                    <Candlexaxis/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>Candlestick With Line Chart</Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div id="candlestick-line">
                                    <Candleline/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
  </Fragment>
); };

export default Candlestickcharts;
