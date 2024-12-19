import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Collapse, Pagination, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';

interface PaginationsProps { }

const Paginations: FC<PaginationsProps> = () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    const [open9, setOpen9] = useState(false);
    return (
        <Fragment>
            <Pageheader title="Pagination" heading="Ui Elements" active="Pagination" />
            <Row>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Basic Pagination
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen1(!open1)} aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <nav aria-label="Page navigation">
                                <Pagination as="ul" className="pagination mb-0">
                                    <Pagination.Item as="li" disabled className="disabled" href="#">Previous</Pagination.Item>
                                    <Pagination.Item as="li" href="#">1</Pagination.Item>
                                    <Pagination.Item as="li" href="#">2</Pagination.Item>
                                    <Pagination.Item as="li" href="#">Next</Pagination.Item>
                                </Pagination>
                            </nav>
                        </Card.Body>
                            <Collapse in={open1} className='card-body'><pre>
                            <code>{`<nav aria-label="Page navigation">
<Pagination as="ul" className="pagination mb-0">
<Pagination.Item as="li" disabled href="#">Previous
</Pagination.Item>
<Pagination.Item as="li" href="#">1</Pagination.Item>
<Pagination.Item as="li" href="#">2</Pagination.Item>
<Pagination.Item as="li" href="#">Next</Pagination.Item>
</Pagination>
</nav>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Pagination With Icons
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen2(!open2)} aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <nav aria-label="Page navigation">
                                <Pagination className="pagination mb-0">
                                    <Pagination.Item className="page-item" as="li" href="#" aria-label="Previous">
                                        <span aria-hidden="true"><i className="bi bi-caret-left"></i></span></Pagination.Item>
                                    <Pagination.Item as="li" href="#">1</Pagination.Item>
                                    <Pagination.Item as="li" href="#">2</Pagination.Item>
                                    <Pagination.Item as="li" href="#">3</Pagination.Item>
                                    <Pagination.Item as="li" className="page-item" href="#" aria-label="Next">
                                        <span aria-hidden="true"><i className="bi bi-caret-right"></i></span></Pagination.Item>
                                </Pagination>
                            </nav>
                        </Card.Body>
                            <Collapse in={open2} className='card-body'><pre>
                            <code>{` <Pagination className="pagination mb-0">
<Pagination.Item className="page-item" as="li" href="#" aria-label="Previous">
        <span aria-hidden="true"><i className="bi bi-caret-left"></i></span></Pagination.Item>
<Pagination.Item as="li" href="#">1</Pagination.Item>
<Pagination.Item as="li" href="#">2</Pagination.Item>
<Pagination.Item as="li" href="#">3</Pagination.Item>
<Pagination.Item as="li" className="page-item" href="#" aria-label="Next">
 <span aria-hidden="true"><i className="bi bi-caret-right"></i></span></Pagination.Item> 
</Pagination>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xxl={6} xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Pagination Sizing
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen3(!open3)} aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="d-flex flex-wrap justify-content-between gap-2">
                            <nav aria-label="...">
                                <Pagination as="ul" className="pagination pagination-sm mb-0">
                                    <Pagination.Item as="li" active aria-current="page">
                                        1
                                    </Pagination.Item>
                                    <Pagination.Item as="li" href="#">2</Pagination.Item>
                                    <Pagination.Item as="li" href="#">3</Pagination.Item>
                                </Pagination>
                            </nav>
                            <nav aria-label="...">
                                <Pagination as="ul" className="pagination mb-0">
                                    <Pagination.Item as="li" active aria-current="page">
                                        1
                                    </Pagination.Item>
                                    <Pagination.Item as="li" href="#">2</Pagination.Item>
                                    <Pagination.Item as="li" href="#">3</Pagination.Item>
                                </Pagination>
                            </nav>
                            <nav aria-label="...">
                                <Pagination className="pagination pagination-lg mb-0">
                                    <Pagination.Item as="li" className=" active" aria-current="page">
                                        1
                                    </Pagination.Item>
                                    <Pagination.Item as="li" href="#">2</Pagination.Item>
                                    <Pagination.Item as="li" href="#">3</Pagination.Item>
                                </Pagination>
                            </nav>
                        </Card.Body>
                            <Collapse in={open3} className='card-body'><pre>
                            <code>{` <nav aria-label="...">
<Pagination as="ul" className="pagination pagination-sm mb-0">
    <Pagination.Item as="li"active aria-current="page"> 1
    </Pagination.Item>
    <Pagination.Item as="li" href="#">2</Pagination.Item>
    <Pagination.Item as="li" href="#">3</Pagination.Item>
</Pagination>
</nav>
<nav aria-label="...">
<Pagination className="pagination pagination-lg mb-0">
    <Pagination.Item as="li" className=" active" aria-current="page">1
    </Pagination.Item>
    <Pagination.Item as="li" href="#">2</Pagination.Item>
    <Pagination.Item as="li" href="#">3</Pagination.Item>
</Pagination>
</nav>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Center & Right Aligned Pagination
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen4(!open4)} aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <nav aria-label="Page navigation">
                                <Pagination className="justify-content-center">
                                    <Pagination.Item disabled>Previous
                                    </Pagination.Item>
                                    <Pagination.Item href="#">1</Pagination.Item>
                                    <Pagination.Item href="#">2</Pagination.Item>
                                    <Pagination.Item href="#">3</Pagination.Item>
                                    <Pagination.Item href="#">Next
                                    </Pagination.Item>
                                </Pagination>
                            </nav>
                            <nav aria-label="Page navigation">
                                <Pagination className="justify-content-end mb-0">
                                    <Pagination.Item disabled >Previous
                                    </Pagination.Item>
                                    <Pagination.Item href="#">1</Pagination.Item>
                                    <Pagination.Item href="#">2</Pagination.Item>
                                    <Pagination.Item href="#">3</Pagination.Item>
                                    <Pagination.Item href="#">Next
                                    </Pagination.Item>
                                </Pagination>
                            </nav>
                        </Card.Body>
                        <Collapse in={open4} className='card-body'><pre>
                            <code>{`<nav aria-label="Page navigation">
<Pagination className="justify-content-center">
    <Pagination.Item disabled>Previous
    </Pagination.Item>
    <Pagination.Item href="#">1</Pagination.Item>
    <Pagination.Item href="#">2</Pagination.Item>
    <Pagination.Item href="#">3</Pagination.Item>
    <Pagination.Item  href="#">Next
    </Pagination.Item>
</Pagination>
</nav>
<nav aria-label="Page navigation">
<Pagination className="justify-content-end mb-0">
    <Pagination.Item disabled >Previous
    </Pagination.Item>
    <Pagination.Item href="#">1</Pagination.Item>
    <Pagination.Item href="#">2</Pagination.Item>
    <Pagination.Item href="#">3</Pagination.Item>
    <Pagination.Item  href="#">Next
    </Pagination.Item>
</Pagination>
</nav>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Active and disabled states
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen5(!open5)} aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body className="card-body d-flex flex-wrap">
                            <nav aria-label="..." className="me-3">
                                <Pagination className="pagination">
                                    <Pagination.Item disabled>Previous
                                    </Pagination.Item>
                                    <Pagination.Item href="#">1</Pagination.Item>
                                    <Pagination.Item active aria-current="page" href="#">2
                                    </Pagination.Item>
                                    <Pagination.Item href="#">Next
                                    </Pagination.Item>
                                </Pagination>
                            </nav>
                            <nav aria-label="...">
                                <Pagination className="pagination">
                                    <Pagination.Item disabled>Previous
                                    </Pagination.Item>
                                    <Pagination.Item href="#">1</Pagination.Item>
                                    <Pagination.Item active aria-current="page">2
                                    </Pagination.Item>
                                    <Pagination.Item href="#">Next
                                    </Pagination.Item>
                                </Pagination>
                            </nav>
                        </Card.Body>
                            <Collapse in={open5} className='card-body'><pre>
                            <code>{`<nav aria-label="..." className="me-3">
<Pagination className="pagination">
    <Pagination.Item disabled>Previous
    </Pagination.Item>
    <Pagination.Item  href="#">1</Pagination.Item>
    <Pagination.Item active  aria-current="page"href="#">2
    </Pagination.Item>
    <Pagination.Item  href="#">Next
    </Pagination.Item>
</Pagination>
</nav>
<nav aria-label="...">
<Pagination className="pagination">
    <Pagination.Item disabled>Previous
    </Pagination.Item>
    <Pagination.Item  href="#">1</Pagination.Item>
    <Pagination.Item active aria-current="page">2
    </Pagination.Item>
    <Pagination.Item  href="#">Next
    </Pagination.Item>
</Pagination>
</nav>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Pagination Style-1
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen6(!open6)} aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <nav aria-label="Page navigation" className="pagination-style-1">
                                <Pagination className="pagination mb-0">
                                    <Pagination.Item disabled href="#">
                                        <i className="ri-arrow-left-s-line align-middle"></i>
                                    </Pagination.Item>
                                    <Pagination.Item href="#">1</Pagination.Item>
                                    <Pagination.Item active href="#">2</Pagination.Item>
                                    <Pagination.Item href="#"><i className="bi bi-three-dots"></i>
                                    </Pagination.Item>
                                    <Pagination.Item href="#">21</Pagination.Item>
                                    <Pagination.Item href="#">
                                        <i className="ri-arrow-right-s-line align-middle"></i>
                                    </Pagination.Item>
                                </Pagination>
                            </nav>
                        </Card.Body>
                            <Collapse in={open6} className='card-body'><pre>
                            <code>{`<nav aria-label="Page navigation" className="pagination-style-1">
<Pagination className="pagination mb-0">
<Pagination.Item disabled href="#">
<i className="ri-arrow-left-s-line align-middle"></i>       
</Pagination.Item>
<Pagination.Item href="#">1</Pagination.Item>
<Pagination.Item active href="#">2</Pagination.Item>
<Pagination.Item href="#">
<i className="bi bi-three-dots"></i>
</Pagination.Item>
<Pagination.Item href="#">21</Pagination.Item>
<Pagination.Item href="#">
<i className="ri-arrow-right-s-line align-middle"></i>
</Pagination.Item>
</Pagination>
</nav>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col  xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Pagination Style-2
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen7(!open7)} aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <nav aria-label="Page navigation" className="pagination-style-2">
                                <Pagination className="mb-0 flex-wrap">
                                    <Pagination.Item disabled href="#">Prev
                                    </Pagination.Item>
                                    <Pagination.Item as="li" active href="#">1</Pagination.Item>
                                    <Pagination.Item as="li" href="#">2</Pagination.Item>
                                    <Pagination.Item as="li">
                                        <i className="bi bi-three-dots"></i>
                                    </Pagination.Item>
                                    <Pagination.Item as="li" href="#">17</Pagination.Item>
                                    <Pagination.Item as="li" className='pagination-next' href="#">
                                        next
                                    </Pagination.Item>
                                </Pagination>
                            </nav>
                        </Card.Body>
                        <Collapse in={open7} className='card-body'><pre>
                            <code>{`<nav aria-label="Page navigation" className="pagination-style-1">
<Pagination className="pagination mb-0">
<Pagination.Item disabled href="#">
<i className="ri-arrow-left-s-line align-middle"></i>       
</Pagination.Item>
<Pagination.Item href="#">1</Pagination.Item>
<Pagination.Item active href="#">2</Pagination.Item>
<Pagination.Item href="#">
<i className="bi bi-three-dots"></i>
</Pagination.Item>
<Pagination.Item href="#">21</Pagination.Item>
<Pagination.Item href="#">
<i className="ri-arrow-right-s-line align-middle"></i>
</Pagination.Item>
</Pagination>
</nav>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Pagination Style-3
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen8(!open8)} aria-controls="example-collapse-text" aria-expanded={open8}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <nav aria-label="Page navigation" className="pagination-style-3">
                                <Pagination className=" mb-0 flex-wrap">
                                    <Pagination.Item as="li" disabled>Prev
                                    </Pagination.Item>
                                    <Pagination.Item as="li" active href="#">1</Pagination.Item>
                                    <Pagination.Item as="li" href="#">2</Pagination.Item>
                                    <Pagination.Item as="li" href="#">
                                        <i className="bi bi-three-dots"></i>
                                    </Pagination.Item>
                                    <Pagination.Item as="li" href="#">16</Pagination.Item>
                                    <Pagination.Item as="li" className="pagination-next" href="#">next </Pagination.Item>
                                </Pagination>
                            </nav>
                        </Card.Body>
                            <Collapse in={open8} className='card-body'><pre>
                            <code>{`<nav aria-label="Page navigation" className="pagination-style-3">
<Pagination className=" mb-0 flex-wrap">
<Pagination.Item as="li" disabled>Prev
</Pagination.Item>
<Pagination.Item as="li"  active href="#">1</Pagination.Item>
<Pagination.Item as="li"  href="#">2</Pagination.Item>
<Pagination.Item as="li"  href="#">
<i className="bi bi-three-dots"></i>        
</Pagination.Item>
<Pagination.Item as="li"  href="#">16</Pagination.Item>
<Pagination.Item as="li" className="pagination-next"
href="#">next
</Pagination.Item>
</Pagination>
</nav>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col  xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Pagination Style-4
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button variant='primary-light' className="btn btn-sm" onClick={() => setOpen9(!open9)} aria-controls="example-collapse-text" aria-expanded={open9}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <nav aria-label="Page navigation" className="pagination-style-4">
                                <Pagination className="mb-0 flex-wrap">
                                    <Pagination.Item as="li" disabled href="#">
                                        Prev
                                    </Pagination.Item>
                                    <Pagination.Item as="li" active href="#">1</Pagination.Item>
                                    <Pagination.Item as="li" href="#">2</Pagination.Item>
                                    <Pagination.Item as="li" href="#">
                                        <i className="bi bi-three-dots"></i>

                                    </Pagination.Item>
                                    <Pagination.Item as="li" href="#">16</Pagination.Item>
                                    <Pagination.Item as="li" href="#">17</Pagination.Item>
                                    <Pagination.Item as="li" className="pagination-next" href="#">
                                        next
                                    </Pagination.Item>
                                </Pagination>
                            </nav>
                        </Card.Body>
                            <Collapse in={open9} className='card-body'><pre>
                            <code>{`<nav aria-label="Page navigation"className="pagination-style-4">
<Pagination className="mb-0 flex-wrap">
<Pagination.Item as="li"  disabled href="#">
 Prev
</Pagination.Item>
<Pagination.Item as="li"  active href="#">1</Pagination.Item>
<Pagination.Item as="li" href="#">2</Pagination.Item>
<Pagination.Item as="li"  href="#">
<i className="bi bi-three-dots"></i>   
</Pagination.Item>
<Pagination.Item as="li" href="#">16</Pagination.Item>
<Pagination.Item as="li" href="#">17</Pagination.Item>
<Pagination.Item as="li" className="pagination-next" href="#">
 next       
</Pagination.Item>
</Pagination></nav>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Paginations;
