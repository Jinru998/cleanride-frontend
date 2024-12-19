import  { FC, Fragment } from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';

interface BreakpointsProps { }

const Breakpoints: FC<BreakpointsProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Breakpoints" heading="Utilities" active="Breakpoints" />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Containers
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table bordered hover className="table table-nowrap mb-0">
                                    <thead>
                                        <tr>
                                            <th>Content</th>
                                            <th>Extra small<div className="fw-normal">&lt;576px</div>
                                            </th>
                                            <th>Small<div className="fw-normal">≥576px</div>
                                            </th>
                                            <th>Medium<div className="fw-normal">≥768px</div>
                                            </th>
                                            <th>Large<div className="fw-normal">≥992px</div>
                                            </th>
                                            <th>X-Large<div className="fw-normal">≥1200px</div>
                                            </th>
                                            <th>XX-Large<div className="fw-normal">≥1400px</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><code>.container</code></td>
                                            <td><span className="text-muted">100%</span></td>
                                            <td>540px</td>
                                            <td>720px</td>
                                            <td>960px</td>
                                            <td>1140px</td>
                                            <td>1320px</td>
                                        </tr>
                                        <tr>
                                            <td><code>.container-sm</code></td>
                                            <td><span className="text-muted">100%</span></td>
                                            <td>540px</td>
                                            <td>720px</td>
                                            <td>960px</td>
                                            <td>1140px</td>
                                            <td>1320px</td>
                                        </tr>
                                        <tr>
                                            <td><code>.container-md</code></td>
                                            <td><span className="text-muted">100%</span></td>
                                            <td><span className="text-muted">100%</span></td>
                                            <td>720px</td>
                                            <td>960px</td>
                                            <td>1140px</td>
                                            <td>1320px</td>
                                        </tr>
                                        <tr>
                                            <td><code>.container-lg</code></td>
                                            <td><span className="text-muted">100%</span></td>
                                            <td><span className="text-muted">100%</span></td>
                                            <td><span className="text-muted">100%</span></td>
                                            <td>960px</td>
                                            <td>1140px</td>
                                            <td>1320px</td>
                                        </tr>
                                        <tr>
                                            <td><code>.container-xl</code></td>
                                            <td><span className="text-muted">100%</span></td>
                                            <td><span className="text-muted">100%</span></td>
                                            <td><span className="text-muted">100%</span></td>
                                            <td><span className="text-muted">100%</span></td>
                                            <td>1140px</td>
                                            <td>1320px</td>
                                        </tr>
                                        <tr>
                                            <td><code>.container-xxl</code></td>
                                            <td><span className="text-muted">100%</span></td>
                                            <td><span className="text-muted">100%</span></td>
                                            <td><span className="text-muted">100%</span></td>
                                            <td><span className="text-muted">100%</span></td>
                                            <td><span className="text-muted">100%</span></td>
                                            <td>1320px</td>
                                        </tr>
                                        <tr>
                                            <td><code>.container-fluid</code></td>
                                            <td><span className="text-muted">100%</span></td>
                                            <td><span className="text-muted">100%</span></td>
                                            <td><span className="text-muted">100%</span></td>
                                            <td><span className="text-muted">100%</span></td>
                                            <td><span className="text-muted">100%</span></td>
                                            <td><span className="text-muted">100%</span></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Available breakpoints
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <Table bordered hover className="table  table-nowrap mb-0">
                                    <thead>
                                        <tr>
                                            <th>Breakpoint</th>
                                            <th>class infix</th>
                                            <th>Dimensions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Extra small</td>
                                            <td>None</td>
                                            <td>576px</td>
                                        </tr>
                                        <tr>
                                            <td>Small</td>
                                            <td><code>sm</code></td>
                                            <td>≥576px</td>
                                        </tr>
                                        <tr>
                                            <td>Medium</td>
                                            <td><code>md</code></td>
                                            <td>≥768px</td>
                                        </tr>
                                        <tr>
                                            <td>Large</td>
                                            <td><code>lg</code></td>
                                            <td>≥992px</td>
                                        </tr>
                                        <tr>
                                            <td>Extra large</td>
                                            <td><code>xl</code></td>
                                            <td>≥1200px</td>
                                        </tr>
                                        <tr>
                                            <td>Extra extra large</td>
                                            <td><code>xxl</code></td>
                                            <td>≥1400px</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Breakpoints;
