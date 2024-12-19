import { FC, Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import face6 from "../../../assets/images/faces/6.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import { Contentdata, Contentdata1, Contentdata3, Contentdata4 } from './flexdata';

interface FlexProps { }

const Flex: FC<FlexProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Flex" heading="Utilities" active="Flex" />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Enable flex behaviors
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="bd-example flex-container mb-3">
                                <div className="d-flex p-2">I'm a flexbox container!</div>
                            </div>
                            <div className="bd-example flex-container">
                                <div className="d-inline-flex p-2">I'm an inline flexbox container!</div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Direction
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="bd-example flex-container">
                                <div className="d-flex flex-row mb-3">
                                    <div className="p-2">Flex item 1</div>
                                    <div className="p-2">Flex item 2</div>
                                    <div className="p-2">Flex item 3</div>
                                </div>
                                <div className="d-flex flex-row-reverse">
                                    <div className="p-2">Flex item 1</div>
                                    <div className="p-2">Flex item 2</div>
                                    <div className="p-2">Flex item 3</div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Direction flex-column and flex-column-reverse
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="bd-example flex-container mb-3">
                                <p>Direction Column</p>
                                <div className="d-flex flex-column mb-3">
                                    <div className="p-2">Flex item 1</div>
                                    <div className="p-2">Flex item 2</div>
                                    <div className="p-2">Flex item 3</div>
                                </div>
                                <p>Column Reverse</p>
                                <div className="d-flex flex-column-reverse">
                                    <div className="p-2">Flex item 1</div>
                                    <div className="p-2">Flex item 2</div>
                                    <div className="p-2">Flex item 3</div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Justify content
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="bd-example flex-container mb-3">
                                {Contentdata.map((idx) => (
                                    <div className={`d-flex justify-content-${idx.class} mb-3`} key={Math.random()}>
                                        <div className="p-2">Flex item</div>
                                        <div className="p-2">Flex item</div>
                                        <div className="p-2">Flex item</div>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Align items
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="bd-example flex-container mb-3">
                                {Contentdata1.map((idx) => (
                                    <div className={`d-flex align-items-${idx.class}`} style={{ height: 100 }} key={Math.random()}>
                                        <div className="p-2">Flex item</div>
                                        <div className="p-2">Flex item</div>
                                        <div className="p-2">Flex item</div>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Align self
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="bd-example flex-container mb-3">
                                {Contentdata3.map((idx) => (
                                    <div className="d-flex mb-3" style={{ height: 100 }} key={Math.random()}>
                                        <div className="p-2">Flex item</div>
                                        <div className={`align-self-${idx.class} p-2`}>Aligned flex item</div>
                                        <div className="p-2">Flex item</div>
                                    </div>
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Align content ( Heads up! This property has no effect on single rows of flex
                                        items.)
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="bd-example flex-container mb-3">
                                        {Contentdata4.map((idx) => (
                                            <div className={`d-flex align-content-${idx.class} flex-wrap mb-3`} style={{ height: 200 }} key={Math.random()}>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                                <div className="p-2">Flex item</div>
                                            </div>
                                        ))}
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Order
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="bd-example flex-container mb-3">
                                        <div className="d-flex flex-nowrap">
                                            <div className="order-3 p-2">First flex item</div>
                                            <div className="order-2 p-2">Second flex item</div>
                                            <div className="order-1 p-2">Third flex item</div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
                <Col xl={6}>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Fill
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="bd-example flex-container mb-3">
                                        <div className="d-flex">
                                            <div className="p-2 flex-fill">Flex item with a lot of content</div>
                                            <div className="p-2 flex-fill">Flex item</div>
                                            <div className="p-2 flex-fill">Flex item</div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Grow and shrink
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="bd-example flex-container mb-3">
                                        <div className="d-flex mb-3">
                                            <div className="p-2 flex-grow-1">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Third flex item</div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="p-2 w-100">Flex item</div>
                                            <div className="p-2 flex-shrink-1">Flex item</div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Auto margins
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="bd-example flex-container mb-3">
                                        <div className="d-flex mb-3">
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>

                                        <div className="d-flex mb-3">
                                            <div className="me-auto p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>

                                        <div className="d-flex mb-3">
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="ms-auto p-2">Flex item</div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Wrap
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="bd-example flex-container mb-3">
                                        <div className="d-flex flex-nowrap" style={{ width: 8 }}>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>

                                        <div className="d-flex flex-wrap">
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>
                                        <div className="d-flex flex-wrap-reverse">
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        With align-items
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <div className="bd-example flex-container mb-3">
                                        <div className="d-flex align-items-start flex-column mb-3"
                                            style={{ height: 200 }}>
                                            <div className="mb-auto p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>

                                        <div className="d-flex align-items-end flex-column mb-3"
                                            style={{ height: 200 }}>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="mt-auto p-2">Flex item</div>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Media object
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="d-sm-flex mb-3">
                                <div className="flex-shrink-0 mb-3 mb-sm-0">
                                    <img className="bd-placeholder-img card-img w-10 h-10" src={face6} alt="img" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus recusandae blanditiis voluptas nobis consectetur. Voluptate pariatur, odit repudiandae sint, libero laborum aut vel, ut enim laboriosam explicabo dolor corporis hic.
                                </div>
                            </div>
                            <p>And say you want to vertically center the content next to the image:</p>
                            <div className="d-sm-flex align-items-center">
                                <div className="flex-shrink-0 mb-3 mb-sm-0">
                                    <img className="bd-placeholder-img card-img avatar-xl" src={face15} alt="img" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus, accusamus fuga quis deserunt provident rem illum exercitationem laborum pariatur modi blanditiis a dolor excepturi qui, aut laudantium harum in id..
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Flex;
