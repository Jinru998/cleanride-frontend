import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Collapse, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';

interface TypographyProps { }

const Typography: FC<TypographyProps> = () => {
    //collapse1
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    const [open9, setOpen9] = useState(false);
    const [open10, setOpen10] = useState(false);
    const [open11, setOpen11] = useState(false);
    const [open12, setOpen12] = useState(false);
    const [open13, setOpen13] = useState(false);
    const [open14, setOpen14] = useState(false);
    const [open15, setOpen15] = useState(false);
    const [open16, setOpen16] = useState(false);
    const [open17, setOpen17] = useState(false);
    const [open18, setOpen18] = useState(false);
    const [open19, setOpen19] = useState(false);
    const [open20, setOpen20] = useState(false);
    const [open21, setOpen21] = useState(false);
    const [open22, setOpen22] = useState(false);
    const [open23, setOpen23] = useState(false);
    const [open24, setOpen24] = useState(false);
    const [open25, setOpen25] = useState(false);
    const [open26, setOpen26] = useState(false);
    const [open27, setOpen27] = useState(false);
    const [open28, setOpen28] = useState(false);
    const [open29, setOpen29] = useState(false);
    const [open30, setOpen30] = useState(false);
    const [open31, setOpen31] = useState(false);
    return (
        <Fragment>
            <Pageheader title="Typography" heading="Ui Elements" active="Typography" />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Headings H tags
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <h1 className="mb-3">h1. Bootstrap heading</h1>
                            <h2 className="mb-3">h2. Bootstrap heading</h2>
                            <h3 className="mb-3">h3. Bootstrap heading</h3>
                            <h4 className="mb-3">h4. Bootstrap heading</h4>
                            <h5 className="mb-3">h5. Bootstrap heading</h5>
                            <h6 className="mb-0">h6. Bootstrap heading</h6>
                        </Card.Body>
                            <Collapse in={open1} className="card-body"><pre><code>{`<h1 className="mb-3">h1. Bootstrap heading</h1>
<h2 className="mb-3">h2. Bootstrap heading</h2>
<h3 className="mb-3">h3. Bootstrap heading</h3>
<h4 className="mb-3">h4. Bootstrap heading</h4>
<h5 className="mb-3">h5. Bootstrap heading</h5>
<h6 className="mb-0">h6. Bootstrap heading</h6>`}</code></pre></Collapse>
                        
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Heading Class Names
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen2(!open2)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="h1 mb-3">h1. Bootstrap heading</p>
                            <p className="h2 mb-3">h2. Bootstrap heading</p>
                            <p className="h3 mb-3">h3. Bootstrap heading</p>
                            <p className="h4 mb-3">h4. Bootstrap heading</p>
                            <p className="h5 mb-3">h5. Bootstrap heading</p>
                            <p className="h6 mb-0">h6. Bootstrap heading</p>
                        </Card.Body>
                            <Collapse in={open2} className="card-body"><pre><code>{`<p className="h1 mb-3">h1. Bootstrap heading</p>
<p className="h2 mb-3">h2. Bootstrap heading</p>
<p className="h3 mb-3">h3. Bootstrap heading</p>
<p className="h4 mb-3">h4. Bootstrap heading</p>
<p className="h5 mb-3">h5. Bootstrap heading</p>
<p className="h6 mb-0">h6. Bootstrap heading</p>`}</code></pre></Collapse>
                       
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Display headings
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen3(!open3)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <h1 className="display-1">Display 1</h1>
                            <h1 className="display-2">Display 2</h1>
                            <h1 className="display-3">Display 3</h1>
                            <h1 className="display-4">Display 4</h1>
                            <h1 className="display-5">Display 5</h1>
                            <h1 className="display-6">Display 6</h1>
                        </Card.Body>
                        
                            <Collapse in={open3} className="card-body"><pre><code>{`<h1 className="display-1">Display 1</h1>
 <h1 className="display-2">Display 2</h1>
 <h1 className="display-3">Display 3</h1>
 <h1 className="display-4">Display 4</h1>
 <h1 className="display-5">Display 5</h1>
 <h1 className="display-6">Display 6</h1>`}</code></pre></Collapse>
                        
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Customizing headings
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen4(!open4)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <h3>
                                Fancy display heading
                                <small className="text-muted">With faded secondary text</small>
                            </h3>
                        </Card.Body>
                        
                            <Collapse in={open4} className="card-body"><pre><code>{`<h3>
Fancy display heading
<small className="text-muted">With faded secondary text</small>
 </h3>`}</code></pre></Collapse>
                        
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Inline text elements
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen5(!open5)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p>You can use the mark tag to <mark>highlight</mark> text.</p>
                            <p><del>This line of text is meant to be treated as deleted text.</del>
                            </p>
                            <p><s>This line of text is meant to be treated as no longer
                                accurate.</s>
                            </p>
                            <p><ins>This line of text is meant to be treated as an addition to the
                                document.</ins></p>
                            <p><u>This line of text will render as underlined.</u></p>
                            <p><small>This line of text is meant to be treated as fine
                                print.</small>
                            </p>
                            <p><strong>This line rendered as bold text.</strong></p>
                            <p className="mb-0"><em>This line rendered as italicized text.</em></p>
                        </Card.Body>
                            <Collapse in={open5} className="card-body"><pre><code>{`<p>You can use the mark tag to <mark>highlight</mark> text.</p>
 <p><del>This line of text is meant to be treated as deleted text.</del>
 </p>
 <p><s>This line of text is meant to be treated as no longer
         accurate.</s>
 </p>
 <p><ins>This line of text is meant to be treated as an addition to the
         document.</ins></p>
 <p><u>This line of text will render as underlined.</u></p>
 <p><small>This line of text is meant to be treated as fine
         print.</small>
 </p>
 <p><strong>This line rendered as bold text.</strong></p>
 <p className="mb-0"><em>This line rendered as italicized text.</em></p>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Font Sizes
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen6(!open6)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="fs-1 mb-2">.fs-1 text</p>
                            <p className="fs-2 mb-2">.fs-2 text</p>
                            <p className="fs-3 mb-2">.fs-3 text</p>
                            <p className="fs-4 mb-2">.fs-4 text</p>
                            <p className="fs-5 mb-2">.fs-5 text</p>
                            <p className="fs-6 mb-0">.fs-6 text</p>
                        </Card.Body>
                            <Collapse in={open6} className="card-body"><pre><code>{`<p className="fs-1 mb-2">.fs-1 text</p>
<p className="fs-2 mb-2">.fs-2 text</p>
<p className="fs-3 mb-2">.fs-3 text</p>
<p className="fs-4 mb-2">.fs-4 text</p>
<p className="fs-5 mb-2">.fs-5 text</p>
<p className="fs-6 mb-0">.fs-6 text</p>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Lead Paragraph
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen7(!open7)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="lead mb-0">
                                <b>This is a lead paragraph. It stands out from regular paragraphs</b>.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
                            </p>
                        </Card.Body>
                            <Collapse in={open7} className="card-body"><pre><code>{`<p className="lead mb-0">
<b>This is a lead paragraph. It stands out from regular paragraphs</b>.There are many variations of passages of Lorem Ipsum available,
 but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
  If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
</p>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <h6 className="mb-3">Blockquotes</h6>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Left Aligned
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen8(!open8)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <figure className="blockquote-container">
                                <blockquote className="blockquote mb-2">
                                    <h6>The greatest glory in living lies not in never falling, but in rising every time we fall.</h6>
                                </blockquote>
                                <figcaption className="blockquote-footer mt-0 mb-0 text-muted op-7"><cite title="Source Title">Nelson Mandela</cite>
                                </figcaption>
                            </figure>
                        </Card.Body>
                            <Collapse in={open8} className="card-body"><pre><code>{` <figure className="blockquote-container">
<blockquote className="blockquote mb-2">
    <h6>The greatest glory in living lies not in never falling, but in rising every time we fall.</h6>
</blockquote>
<figcaption className="blockquote-footer mt-0 mb-0 text-muted op-7"><cite title="Source Title">Nelson Mandela</cite>
</figcaption> </figure>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Right Aligned
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen9(!open9)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <figure className="blockquote-container text-end">
                                <blockquote className="blockquote mb-2">
                                    <h6>The greatest glory in living lies not in never falling, but in rising every time we fall.</h6>
                                </blockquote>
                                <figcaption className="blockquote-footer mt-0 mb-0 text-muted op-7"><cite title="Source Title">Nelson Mandela</cite>
                                </figcaption>
                            </figure>
                        </Card.Body>
                            <Collapse in={open9} className="card-body"><pre><code>{` <figure className="blockquote-container text-end">
 <blockquote className="blockquote mb-2">
     <h6>The greatest glory in living lies not in never falling, but in rising every time we fall.</h6>
 </blockquote>
 <figcaption className="blockquote-footer mt-0 mb-0 text-muted op-7"><cite title="Source Title">Nelson Mandela</cite>
 </figcaption></figure>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <h6 className="mb-3">Custom Blockquotes</h6>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Primary Blockquote
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen10(!open10)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote custom-blockquote primary mb-0 text-center">
                                <h6>The future belongs to those who believe in the beauty of their dreams..</h6>
                                <footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
                                <span className="quote-icon"><i className="ri-information-line"></i></span>
                            </blockquote>
                        </Card.Body>
                            <Collapse in={open10} className="card-body"><pre><code>{`<blockquote className="blockquote custom-blockquote primary mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span></blockquote>`}</code></pre></Collapse>
                        
                    </Card>
                </Col>
                <div className="col-xl-4">
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Secondary Blockquote
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen11(!open11)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote custom-blockquote secondary mb-0 text-center">
                                <h6>The future belongs to those who believe in the beauty of their dreams..</h6>
                                <footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
                                <span className="quote-icon"><i className="ri-information-line"></i></span>
                            </blockquote>
                        </Card.Body>
                            <Collapse in={open11} className="card-body"><pre><code>{`<blockquote className="blockquote custom-blockquote secondary mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote>`}</code></pre></Collapse>
                    </Card>
                </div>
                <div className="col-xl-4">
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Warning Blockquote
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen12(!open12)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote custom-blockquote warning mb-0 text-center">
                                <h6>The future belongs to those who believe in the beauty of their dreams..</h6>
                                <footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
                                <span className="quote-icon"><i className="ri-information-line"></i></span>
                            </blockquote>
                        </Card.Body>
                            <Collapse in={open12} className="card-body"><pre><code>{` <blockquote className="blockquote custom-blockquote warning mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
 </blockquote>`}</code></pre></Collapse>
                    </Card>
                </div>
                <div className="col-xl-4">
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Success Blockquote
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen13(!open13)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote custom-blockquote success mb-0 text-center">
                                <h6>The future belongs to those who believe in the beauty of their dreams..</h6>
                                <footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
                                <span className="quote-icon"><i className="ri-information-line"></i></span>
                            </blockquote>
                        </Card.Body>
                            <Collapse in={open13} className="card-body"><pre><code>{`<blockquote className="blockquote custom-blockquote success mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote>`}</code></pre></Collapse>
                    </Card>
                </div>
                <div className="col-xl-4">
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Info Blockquote
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen14(!open14)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote custom-blockquote info mb-0 text-center">
                                <h6>The future belongs to those who believe in the beauty of their dreams..</h6>
                                <footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
                                <span className="quote-icon"><i className="ri-information-line"></i></span>
                            </blockquote>
                        </Card.Body>
                            <Collapse in={open14} className="card-body"><pre><code>{`<blockquote className="blockquote custom-blockquote info mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote>`}</code></pre></Collapse>
                    </Card>
                </div>
                <Col className="col-xl-4">
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Danger Blockquote
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen15(!open15)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote custom-blockquote danger mb-0 text-center">
                                <h6>The future belongs to those who believe in the beauty of their dreams..</h6>
                                <footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
                                <span className="quote-icon"><i className="ri-information-line"></i></span>
                            </blockquote>
                        </Card.Body>
                            <Collapse in={open15} className="card-body"><pre><code>{` <blockquote className="blockquote custom-blockquote danger mb-0 text-center">
<h6>The future belongs to those who believe in the beauty of their dreams..</h6>
<footer className="blockquote-footer mt-3 fs-14 text-muted op-7 mb-0">Someone famous as <cite title="Source Title">-Eleanor Roosevelt</cite></footer>
<span className="quote-icon"><i className="ri-information-line"></i></span>
</blockquote>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Description list alignment
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen16(!open16)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <dl className="row mb-0">
                                <dt className="col-sm-3">Description lists</dt>
                                <dd className="col-sm-9">A description list is perfect for defining terms.</dd>

                                <dt className="col-sm-3">Term</dt>
                                <dd className="col-sm-9">
                                    <p>Definition for the term.</p>
                                    <p>And some more placeholder definition text.</p>
                                </dd>

                                <dt className="col-sm-3">Another term</dt>
                                <dd className="col-sm-9">This definition is short, so no extra paragraphs or
                                    anything.</dd>

                                <dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
                                <dd className="col-sm-9">This can be useful when space is tight. Adds an
                                    ellipsis at
                                    the end.</dd>

                                <dt className="col-sm-3">Nesting</dt>
                                <dd className="col-sm-9 mb-0">
                                    <dl className="row mb-0">
                                        <dt className="col-sm-4">Nested definition list</dt>
                                        <dd className="col-sm-8 mb-0">I heard you like definition lists. Let me put a
                                            definition list inside your definition list.</dd>
                                    </dl>
                                </dd>
                            </dl>
                        </Card.Body>
                            <Collapse in={open16} className="card-body"><pre><code>{` <dl className="row mb-0">
<dt className="col-sm-3">Description lists</dt>
<dd className="col-sm-9">A description list is perfect for defining terms.</dd>

<dt className="col-sm-3">Term</dt>
<dd className="col-sm-9">
    <p>Definition for the term.</p>
    <p>And some more placeholder definition text.</p>
</dd>

<dt className="col-sm-3">Another term</dt>
<dd className="col-sm-9">This definition is short, so no extra paragraphs or
    anything.</dd>

<dt className="col-sm-3 text-truncate">Truncated term is truncated</dt>
<dd className="col-sm-9">This can be useful when space is tight. Adds an
    ellipsis at
    the end.</dd>

<dt className="col-sm-3">Nesting</dt>
<dd className="col-sm-9 mb-0">
    <dl className="row mb-0">
        <dt className="col-sm-4">Nested definition list</dt>
        <dd className="col-sm-8 mb-0">I heard you like definition lists. Let me put a
            definition list inside your definition list.</dd>
    </dl>
</dd></dl>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                List Unstyled
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen17(!open17)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-unstyled">
                                <li>This is a list.</li>
                                <li>It appears completely unstyled.</li>
                                <li>Structurally, it's still a list.</li>
                                <li>However, this style only applies to immediate child elements.</li>
                                <li className="mb-2">Nested lists:
                                    <ul>
                                        <li>are unaffected by this style</li>
                                        <li>will still show a bullet</li>
                                        <li>and have appropriate left margin</li>
                                    </ul>
                                </li>
                                <li>This may still come in handy in some situations.</li>
                            </ul>
                        </Card.Body>
                            <Collapse in={open17} className="card-body"><pre><code>{`<ul className="list-unstyled">
 <li>This is a list.</li>
 <li>It appears completely unstyled.</li>
 <li>Structurally, it's still a list.</li>
 <li>However, this style only applies to immediate child elements.</li>
 <li className="mb-2">Nested lists:
     <ul>
         <li>are unaffected by this style</li>
         <li>will still show a bullet</li>
         <li>and have appropriate left margin</li>
     </ul>
 </li>
 <li>This may still come in handy in some situations.</li>
</ul>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Abbreviations
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen18(!open18)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p><abbr title="attribute">attr</abbr></p>
                            <p className="mb-0"><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p>
                        </Card.Body>
                        <Card.Footer className="border-top-0"><Collapse in={open18} className=""><pre><code>{`<p><abbr title="attribute">attr</abbr></p>
 <p className="mb-0"><abbr title="HyperText Markup Language" className="initialism">HTML</abbr></p>`}</code></pre></Collapse>
                        </Card.Footer>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                List inline
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen19(!open19)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">This is a list item.</li>
                                <li className="list-inline-item">And another one.</li>
                                <li className="list-inline-item">But they're displayed inline.</li>
                            </ul>
                        </Card.Body>
                            <Collapse in={open19} className="card-body"><pre><code>{`<ul className="list-inline mb-0">
<li className="list-inline-item">This is a list item.</li>
<li className="list-inline-item">And another one.</li>
<li className="list-inline-item">But they're displayed inline.</li>
</ul>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Horizontal rules
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen20(!open20)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolorem fuga iste obcaecati natus eos officiis adipisci voluptatibus ipsum, architecto veniam delectus vel dolor magni a vero sunt ut harum.</p>
                            <div className="text-success">
                                <hr />
                            </div>
                            <p className=" mb-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis, magni numquam quos perferendis nulla magnam odit amet excepturi quisquam provident.</p>
                            <hr className="text-danger border-2 opacity-50" />
                            <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid consequatur aut doloremque assumenda voluptatem, id qui vero adipisci! Nostrum ipsam praesentium!</p>
                            <hr className="border-primary border-3 opacity-75" />
                        </Card.Body>
                            <Collapse in={open20} className="card-body"><pre><code>{`<p className="mb-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Rerum dolorem fuga iste obcaecati natus eos officiis adipisci voluptatibus ipsum, 
architecto veniam delectus vel dolor magni a vero sunt ut harum.</p>
<div className="text-success">
    <hr/>
</div>
<p className=" mb-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis, 
magni numquam quos perferendis nulla magnam odit amet excepturi quisquam provident.</p>
<hr className="text-danger border-2 opacity-50"/>
<p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aliquid consequatur
 aut doloremque assumenda voluptatem, id qui vero adipisci! Nostrum ipsam praesentium!</p>
<hr className="border-primary border-3 opacity-75"/>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Text transform
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen21(!open21)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-lowercase">Lowercased text.</p>
                            <p className="text-uppercase">Uppercased text.</p>
                            <p className="text-capitalize mb-0">CapiTaliZed text.</p>
                        </Card.Body>
                            <Collapse in={open21} className="card-body"><pre><code>{`<p className="text-lowercase">Lowercased text.</p>
<p className="text-uppercase">Uppercased text.</p>
<p className="text-capitalize mb-0">CapiTaliZed text.</p>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Text decoration
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen22(!open22)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-decoration-underline">This text has a line underneath it.
                            </p>
                            <p className="text-decoration-line-through">This text has a line going
                                through
                                it.
                            </p>
                            <Link to="#" className="text-decoration-none">This link has its text
                                decoration
                                removed
                            </Link>
                        </Card.Body>
                            <Collapse in={open22} className="card-body">
                                <pre><code>{`<p className="text-decoration-underline">This text has a line underneath it.
 </p>
 <p className="text-decoration-line-through">This text has a line going
     through
     it.
 </p>
 <Link to="#" className="text-decoration-none">This link has its text
     decoration
     removed
 </Link>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Font weight and italics
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen23(!open23)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="fw-bold">Bold text.</p>
                            <p className="fw-bolder">Bolder weight text (relative to the parent element).</p>
                            <p className="fw-semibold">Semibold weight text.</p>
                            <p className="fw-normal">Normal weight text.</p>
                            <p className="fw-light">Light weight text.</p>
                            <p className="fw-lighter">Lighter weight text (relative to the parent element).</p>
                            <p className="fst-italic">Italic text.</p>
                            <p className="fst-normal mb-0">Text with normal font style</p>
                        </Card.Body>
                            <Collapse in={open23} className="card-body"><pre><code>{`<p className="fw-bold">Bold text.</p>
<p className="fw-bolder">Bolder weight text (relative to the parent element).</p>
<p className="fw-semibold">Semibold weight text.</p>
<p className="fw-normal">Normal weight text.</p>
<p className="fw-light">Light weight text.</p>
<p className="fw-lighter">Lighter weight text (relative to the parent element).</p>
<p className="fst-italic">Italic text.</p>
<p className="fst-normal mb-0">Text with normal font style</p>`}</code></pre></Collapse>
                        
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Line height
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen24(!open24)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="lh-1">This is a long paragraph written to show how the line-height of
                                an
                                element is affected by our utilities. Classes are applied to the element
                                itself
                                or sometimes the parent element. These classes can be customized as needed
                                with
                                our utility API.
                            </p>
                            <p className="lh-sm">This is a long paragraph written to show how the line-height of
                                an
                                element is affected by our utilities. Classes are applied to the element
                                itself
                                or sometimes the parent element. These classes can be customized as needed
                                with
                                our utility API.
                            </p>
                            <p className="lh-base">This is a long paragraph written to show how the line-height
                                of
                                an element is affected by our utilities. Classes are applied to the element
                                itself or sometimes the parent element. These classes can be customized as
                                needed with our utility API.
                            </p>
                            <p className="lh-lg mb-0">This is a long paragraph written to show how the
                                line-height
                                of an
                                element is affected by our utilities. Classes are applied to the element
                                itself
                                or sometimes the parent element. These classes can be customized as needed
                                with
                                our utility API.
                            </p>
                        </Card.Body>
                        <Collapse in={open24} className="card-body"><pre><code>{`<p className="lh-1">This is a long paragraph written to show how the line-height of
an
element is affected by our utilities. Classes are applied to the element
itself
or sometimes the parent element. These classes can be customized as needed
with
our utility API.
</p>
<p className="lh-sm">This is a long paragraph written to show how the line-height of
an
element is affected by our utilities. Classes are applied to the element
itself
or sometimes the parent element. These classes can be customized as needed
with
our utility API.
</p>
<p className="lh-base">This is a long paragraph written to show how the line-height
of
an element is affected by our utilities. Classes are applied to the element
itself or sometimes the parent element. These classes can be customized as
needed with our utility API.
</p>
<p className="lh-lg mb-0">This is a long paragraph written to show how the
line-height
of an
element is affected by our utilities. Classes are applied to the element
itself
or sometimes the parent element. These classes can be customized as needed
with
our utility API.
</p>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <div className="col-xl-3">
                    <Card className="custom-card">
                        <div className="card-header justify-content-between">
                            <Card.Title>
                                Monospace
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen25(!open25)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </div>
                        <Card.Body>
                            <p className="font-monospace mb-0">This is in monospace</p>
                        </Card.Body>
                            <Collapse in={open25} className="card-body"><pre><code>{`<p className="font-monospace mb-0">This is in monospace</p>`}</code></pre></Collapse>
                        
                    </Card>
                </div>
                <div className="col-xl-3">
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Reset color
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen26(!open26)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-muted mb-0">
                                Muted text with a <Link to="#" className="text-reset text-decoration-underline text-dark">reset link</Link>.
                            </p>
                        </Card.Body>
                            <Collapse in={open26} className="card-body"><pre><code>{` <p className="text-muted mb-0">
Muted text with a <a href="#" className="text-reset text-decoration-underline text-dark">reset link</a>.
</p>`}</code></pre></Collapse>
                    </Card>
                </div>
                <div className="col-xl-3">
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Visible text
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen27(!open27)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="visible mb-0">This is visible text</p>
                        </Card.Body>
                            <Collapse in={open27} className="card-body"><pre><code>{`<p className="visible mb-0">This is visible text</p>`}</code></pre></Collapse>
                       
                    </Card>
                </div>
                <div className="col-xl-3">
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Invisible text
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen28(!open28)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="invisible mb-0">This is invisible text</p>
                        </Card.Body>
                            <Collapse in={open28} className="card-body"><pre><code>{`<p className="invisible mb-0">This is invisible text</p>`}</code></pre></Collapse>
                       
                    </Card>
                </div>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Text alignment
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen29(!open29)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-start">Start aligned text on all viewport sizes.</p>
                            <p className="text-center">Center aligned text on all viewport sizes.</p>
                            <p className="text-end">End aligned text on all viewport sizes.</p>

                            <p className="text-sm-start">Start aligned text on viewports sized SM (small) or
                                wider.
                            </p>
                            <p className="text-md-start">Start aligned text on viewports sized MD (medium) or
                                wider.
                            </p>
                            <p className="text-lg-start">Start aligned text on viewports sized LG (large) or
                                wider.
                            </p>
                            <p className="text-xl-start">Start aligned text on viewports sized XL (extra-large)
                                or
                                wider.</p>
                        </Card.Body>
                            <Collapse in={open29} className="card-body"><pre><code>{`<p className="text-start">Start aligned text on all viewport sizes.</p>
<p className="text-center">Center aligned text on all viewport sizes.</p>
<p className="text-end">End aligned text on all viewport sizes.</p>

<p className="text-sm-start">Start aligned text on viewports sized SM (small) or
    wider.
</p>
<p className="text-md-start">Start aligned text on viewports sized MD (medium) or
    wider.
</p>
<p className="text-lg-start">Start aligned text on viewports sized LG (large) or
    wider.
</p>
<p className="text-xl-start">Start aligned text on viewports sized XL (extra-large)
    or
    wider.</p>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Text wrapping and overflow
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen30(!open30)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="badge bg-primary text-wrap mb-3" style={{ width: 96 }}>
                                This text should wrap.
                            </div>
                            <p className="text-muted mb-2"> use class <code>.text-nowrap</code> to prevent text from wrapping</p>
                            <div className="text-nowrap bg-light border" style={{ width: 130 }}>
                                This text should overflow the parent.
                            </div>
                        </Card.Body>
                            <Collapse in={open30} className="card-body"><pre><code>{`<div className="badge bg-primary text-wrap mb-3" style={{width: 6}}>
 This text should wrap.
 </div>
 <p className="text-muted mb-2"> use class <code>.text-nowrap</code> to prevent text from wrapping</p>
 <div className="text-nowrap bg-light border" style={{width: 8}}>
 This text should overflow the parent.
</div>`}</code></pre></Collapse>
                    </Card>
                    <Card className="custom-card">
                        <Card.Header className="card-header justify-content-between">
                            <Card.Title>
                                Word break
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen31(!open31)} variant='primary-light' className="btn btn-sm">Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <p className="text-break mb-0">
                                mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
                            </p>
                        </Card.Body>
                            <Collapse in={open31} className="card-body"><pre><code>{` <p className="text-break mb-0">
mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm
 </p>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Typography;
