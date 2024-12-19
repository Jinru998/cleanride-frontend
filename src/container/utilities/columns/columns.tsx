import  { FC, Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { Horizontaldata, Verticaldata } from './columnsdata';
import media40 from "../../../assets/images/media/media-40.jpg";

interface ColumnsProps {}

const Columns: FC<ColumnsProps> = () => {
    return(
  <Fragment>
                <Pageheader title="Columns" heading="Utilities" active="Columns" />
                    <Row>
                        <Col xl={6}>
                            <Row>
                                <Col xl={12}>
                                    <Card className="custom-card">
                                        <Card.Header>
                                            <Card.Title>
                                                Vertical alignment
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body className="bd-example-row bd-example-row-flex-cols">
                                            <div className="container">
                                                {Verticaldata.map((idx)=>(
                                                <div className={`row align-items-${idx.class} mb-3`} key={Math.random()}>
                                                    <div className="col">
                                                        One of three columns
                                                    </div>
                                                    <div className="col">
                                                        One of three columns
                                                    </div>
                                                    <div className="col">
                                                        One of three columns
                                                    </div>
                                                </div>
                                                  ))}
                                                <Row>
                                                    <div className="col align-self-start">
                                                        One of three columns
                                                    </div>
                                                    <div className="col align-self-center">
                                                        One of three columns
                                                    </div>
                                                    <div className="col align-self-end">
                                                        One of three columns
                                                    </div>
                                                </Row>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={12}>
                                    <Card className="custom-card">
                                        <Card.Header>
                                            <Card.Title>
                                                Column wrapping
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body className="bd-example-row">
                                            <div className="container">
                                                <Row>
                                                    <div className="col-9">.col-9</div>
                                                    <div className="col-4">.col-4<br/>Since 9 + 4 = 13 &gt; 12, this
                                                        4-column-wide
                                                        div gets wrapped onto a new line as one contiguous unit.
                                                    </div>
                                                    <div className="col-6">.col-6<br/>Subsequent columns continue
                                                        along the new line.
                                                    </div>
                                                </Row>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={12}>
                                    <Card className="custom-card">
                                        <Card.Header>
                                            <Card.Title>
                                                Margin utilities
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body className="bd-example-row">
                                            <p className="mb-4">With the move to flexbox in v4, you can use margin utilities like
                                                <span className="text-danger">.me-auto</span>to force sibling columns
                                                away
                                                from one
                                                another.
                                            </p>
                                            <div className="container">
                                                <div className="row mb-3">
                                                    <Col md={4}>.col-md-4</Col>
                                                    <Col md={4} className="ms-auto">.col-md-4 .ms-auto</Col>
                                                </div>
                                                <div className="row mb-3">
                                                    <Col md={3} className="ms-md-auto">.col-md-3 .ms-md-auto</Col>
                                                    <Col md={3} className="ms-md-auto">.col-md-3 .ms-md-auto</Col>
                                                </div>
                                                <Row>
                                                    <div className="col-auto me-auto">.col-auto .me-auto</div>
                                                    <div className="col-auto">.col-auto</div>
                                                </Row>
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
                                                Horizontal alignment
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body className="bd-example-row">
                                            <div className="container">
                                                {Horizontaldata.map((idx)=>(
                                                <div className={`row justify-content-${idx.class}`} key={Math.random()}>
                                                    <div className="col-4">
                                                        One of two columns
                                                    </div>
                                                    <div className="col-4">
                                                        One of two columns
                                                    </div>
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
                                                Column breaks
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body className="bd-example-row">
                                            <div className="container mb-3">
                                                <Row>
                                                    <Col sm={3} className="col-6">.col-6 .col-sm-3</Col>
                                                    <Col sm={3} className="col-6">.col-6 .col-sm-3</Col>
        
                                                    <div className="w-100"></div>
        
                                                    <Col sm={3} className="col-6">.col-6 .col-sm-3</Col>
                                                    <Col sm={3} className="col-6">.col-6 .col-sm-3</Col>
                                                </Row>
                                            </div>
                                            <p>You may also apply this break at specific breakpoints with our <span
                                                    className="text-danger">responsive display utilities.</span></p>
                                            <div className="container">
                                                <Row>
                                                    <Col sm={4}  className="col-6">.col-6 .col-sm-4</Col>
                                                    <Col sm={4}  className="col-6">.col-6 .col-sm-4</Col>
        
                                                    <div className="w-100 d-none d-md-block"></div>
        
                                                    <Col sm={4} className="col-6">.col-6 .col-sm-4</Col>
                                                    <Col sm={4} className="col-6">.col-6 .col-sm-4</Col>
                                                </Row>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={12}>
                                    <Card className="custom-card">
                                        <Card.Header>
                                            <Card.Title>
                                                Order classes
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body className="bd-example-row">
                                            <div className="container">
                                                <div className="row mb-3">
                                                    <div className="col">
                                                        First in DOM, no order applied
                                                    </div>
                                                    <div className="col order-5">
                                                        Second in DOM, with a larger order
                                                    </div>
                                                    <div className="col order-1">
                                                        Third in DOM, with an order of 1
                                                    </div>
                                                </div>
                                            </div>
                                            <p>There are also responsive <span className="text-danger">.order-first</span> and
                                                <span className="text-danger">.order-last</span> classes that change the
                                                order of an element by applying <span className="text-danger">order: -1</span>
                                                and
                                                <span className="text-danger">order: 6</span>, respectively. These
                                                classes can also be intermixed with the numbered .order-* classes as needed.
                                            </p>
                                            <div className="container">
                                                <Row>
                                                    <div className="col order-last">
                                                        First in DOM, ordered last
                                                    </div>
                                                    <div className="col bd-example-grid">
                                                        Second in DOM, unordered
                                                    </div>
                                                    <div className="col order-first">
                                                        Third in DOM, ordered first
                                                    </div>
                                                </Row>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xl={12}>
                                    <Card className="custom-card">
                                        <Card.Header>
                                            <Card.Title>
                                                Standalone column classes
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <p>The <span className="text-danger">.col-*</span> classes can also be used
                                                outside a
                                                <span className="text-danger">.row</span> to give an element a specific
                                                width. Whenever column classes are used as non direct children of a
                                                row,
                                                the
                                                paddings are omitted.
                                            </p>
                                            <div className="col-3 bg-light p-3 border">
                                                .col-3: width of 25%
                                            </div>
                                            <div className="col-sm-9 bg-light p-3 border">
                                                .col-sm-9: width of 75% above sm breakpoint
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <h6 className="mb-3">Offsetting Columns</h6>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Offset classes
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body className="bd-example-row">
                                    <div className="container mb-3">
                                        <Row className="mb-3">
                                            <Col md={4}>.col-md-4</Col>
                                            <Col md={4} className="offset-md-4">.col-md-4 .offset-md-4
                                            </Col>
                                        </Row>
                                        <Row className="mb-3">
                                            <Col md={3} className="offset-md-3">.col-md-3 .offset-md-3
                                            </Col>
                                            <Col md={3} className="offset-md-3">.col-md-3 .offset-md-3
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={6} className="offset-md-3">.col-md-6 .offset-md-3
                                            </Col>
                                        </Row>
                                    </div>
                                    <p>In addition to column clearing at responsive breakpoints, you may need to
                                        reset
                                        offsets.</p>
                                    <div className="container">
                                        <div className="row mb-3">
                                            <Col sm={5} md={6}>.col-sm-5 .col-md-6</Col>
                                            <Col sm={5} md={6} className="offset-sm-2 offset-md-0">
                                                .col-sm-5
                                                .offset-sm-2 .col-md-6 .offset-md-0
                                            </Col>
                                        </div>
                                        <Row>
                                            <Col sm={6} md={5} lg={6}>.col-sm-6 .col-md-5
                                                .col-lg-6</Col>
                                            <Col sm={6} md={5} lg={6} className="offset-md-2 offset-lg-0">
                                                .col-sm-6
                                                .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0
                                            </Col>
                                        </Row>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card className="custom-card">
                                <Card.Body>
                                    <p>The classes can be used together with utilities to create responsive floated
                                        images.
                                        Make sure to wrap the content in a <span className="text-danger">.clearfix</span>
                                        wrapper to clear the float if the text
                                        is shorter.</p>
                                    <div className="clearfix">
                                        <img src={media40} className="bd-placeholder-img col-md-6 float-md-end mb-3 ms-md-3 rounded img-fluid" alt="..."/>
                                        <p>
                                            A paragraph of placeholder text. We're using it here to show the use of
                                            the
                                            clearfix class. We're adding quite a few meaningless phrases here to
                                            demonstrate
                                            how the columns interact here with the floated image.
                                        </p>
                                        <p>
                                            As you can see the paragraphs gracefully wrap around the floated image.
                                            Now
                                            imagine how this would look with some actual content in here, rather
                                            than
                                            just
                                            this boring placeholder text that goes on and on, but actually conveys
                                            no
                                            tangible information at. It simply takes up space and should not really
                                            be
                                            read.
                                        </p>
                                        <p>
                                            And yet, here you are, still persevering in reading this placeholder
                                            text,
                                            hoping for some more insights, or some hidden easter egg of content. A
                                            joke,
                                            perhaps. Unfortunately, there's none of that here.
                                        </p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
  </Fragment>
);
};

export default Columns;
