import  { FC, Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { Columns, Data, Data1, Data2, Data3 } from './griddata';
import { Grid } from "gridjs-react";
import "gridjs/dist/theme/mermaid.css";

interface GridjstablesProps { }

const Gridjstables: FC<GridjstablesProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Grid Js" heading="Tables" active="Grid Js" />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Basic Table
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="grid-example1">
                                <Grid
                                    data={Data}
                                    columns={['Date', 'Name', 'EMail', 'Id', 'Price', 'Quantity', 'Total']} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Table With Pagination
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="grid-pagination">
                                <Grid
                                    data={Data}
                                    columns={['Date', 'Name', 'EMail', 'Id', 'Price', 'Quantity', 'Total']} pagination={{
                                        limit: 5,
                                    }} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Table With Search
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="grid-search">
                                <Grid
                                    data={Data}
                                    search={true}
                                    columns={['Date', 'Name', 'EMail', 'Id', 'Price', 'Quantity', 'Total']} pagination={{
                                        limit: 5,
                                    }} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Table Sorting
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="grid-sorting">
                                <Grid
                                    data={Data}
                                    sort={true}
                                    search={true}
                                    columns={['Date', 'Name', 'EMail', 'Id', 'Price', 'Quantity', 'Total']} pagination={{
                                        limit: 5,
                                    }} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Table Loading
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="grid-loading">
                                <Grid
                                    data={Data1}
                                    sort={true}
                                    search={true}
                                    columns={['Date', 'Name', 'EMail', 'Id', 'Price', 'Quantity', 'Total']} pagination={{
                                        limit: 5,
                                    }}
                                    loading={true} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Wide Table
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="grid-wide">

                                <Grid
                                    data={Data2}
                                    sort={true}
                                    columns={['Date', 'Name', 'EMail', 'Order Id', 'Product', 'Category', 'Price', 'Quantity', 'Total']} pagination={{
                                        limit: 5,
                                    }}
                                    wide={true}
                                    resizable={true}
                                />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Fixed Header
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="grid-header-fixed">
                                <Grid
                                    data={Data3}
                                    sort={true}
                                    search={true}
                                    fixedHeader={true}
                                    height='350px'
                                    columns={['Date', 'Name', 'EMail', 'Id', 'Price', 'Quantity', 'Total']} pagination={{
                                        limit: 8,
                                    }} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Hidden Columns
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div id="grid-hidden-column">
                                <Grid
                                    data={Data}
                                    sort={true}
                                    search={true}
                                    columns={Columns} pagination={{
                                        limit: 5,
                                    }} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Gridjstables;
