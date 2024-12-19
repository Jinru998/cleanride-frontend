import { FC, Fragment, useState } from 'react';
import { Accordion, Button, Card, Col, Collapse, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';

interface AccordionscollapseProps { }

const Accordionscollapse: FC<AccordionscollapseProps> = () => {
  //MULTIPLE TARGETS

  const [isFirstCollapsed, setisFirstCollapsed] = useState(false);
  const [isSecondCollapsed, setisSecondCollapsed] = useState(false);

  const first = () => {
    if (isFirstCollapsed === false) {
      setisFirstCollapsed(true);
    }
    else if (isFirstCollapsed === true) {
      setisFirstCollapsed(false);
    }
  };

  const second = () => {

    if (isSecondCollapsed === true) {
      setisSecondCollapsed(false);
    }
    else if (isSecondCollapsed === false) {
      setisSecondCollapsed(true);
    }
  };

  const both = () => {
    if (isSecondCollapsed === true) {
      setisSecondCollapsed(false);
    }
    else if (isSecondCollapsed === false) {
      setisSecondCollapsed(true);
    }
    if (isFirstCollapsed === true) {
      setisFirstCollapsed(false);
    }
    else if (isFirstCollapsed === false) {
      setisFirstCollapsed(true);
    }
  };

  const [open, setOpen] = useState(false);

  const [openb, setOpenb] = useState(false);

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
  return (
    <Fragment>

      <Pageheader title="Accordions" heading="Advanced Ui" active="Accordions" />
      <Row>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Basic Accordion
              </Card.Title>
              <div className="prism-toggle">
                <Button onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
              </div>
            </Card.Header>
            <Card.Body>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just  about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Item #3</Accordion.Header>
                  <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just about  any HTML can go within the <code>.accordion-body</code>, though the
                    transition  does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
            <Collapse in={open1} className="card-body"><pre><code>{`<Accordion.Item eventKey="0">
<Accordion.Header>Accordion Item #1</Accordion.Header>
<Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
     default, until the collapse plugin adds the appropriate classes that we
     use to style each element. These classes control the overall appearance, as
     well as the showing and hiding via CSS transitions. You can modify any of this with
     custom CSS or overriding our default variables. It's also worth noting that
     just  about any HTML can go within the <code>.accordion-body</code>, though the
     transition does limit overflow.
</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
<Accordion.Header>Accordion Item #2</Accordion.Header>
<Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
    by default, until the collapse plugin adds the appropriate classes that we
    use to style each element. These classes control the overall appearance, as
    well as the showing and hiding via CSS transitions. You can modify any of this with
    custom CSS or overriding our default variables. It's also worth noting that
    just about any HTML can go within the <code>.accordion-body</code>, though the
    transition does limit overflow.
</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
<Accordion.Header>Accordion Item #3</Accordion.Header>
<Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
  by default, until the collapse plugin adds the appropriate classes that we
  use to style each element. These classes control the overall appearance, as
  well as the showing and hiding via CSS transitions. You can modify any of this with
  custom CSS or overriding our default variables. It's also worth noting that
  just about  any HTML can go within the <code>.accordion-body</code>, though the
  transition  does limit overflow.
</Accordion.Body>
</Accordion.Item>
</Accordion>`}</code></pre></Collapse>
           
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Always Open Accordion
                <p className="text-muted subtitle fs-12 fw-normal mt-1">Omit the <code>data-bs-parent</code>
                  attribute on each
                  <code>.accordion-collapse</code>
                  to make accordion items stay open when another item is opened.
                </p>
              </Card.Title>
              <div className="prism-toggle">
                <Button onClick={() => setOpen2(!open2)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
              </div>
            </Card.Header>
            <Card.Body>
              <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just  about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Item #3</Accordion.Header>
                  <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just about any HTML can go within the <code>.accordion-body</code>, though the
                    transition  does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
           <Collapse in={open2} className="card-body"><pre><code>{`<Accordion defaultActiveKey={['0']} alwaysOpen>
<Accordion.Item eventKey="0">
<Accordion.Header>Accordion Item #1</Accordion.Header>
  <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
 default, until the collapse plugin adds the appropriate classes that we
  use to style each element. These classes control the overall appearance, as
  well as the showing and hiding via CSS transitions. You can modify any of this with
  custom CSS or overriding our default variables. It's also worth noting that
    just  about any HTML can go within the <code>.accordion-body</code>, though the
     transition does limit overflow.
 </Accordion.Body>
</Accordion.Item>
 <Accordion.Item eventKey="1">
<Accordion.Header>Accordion Item #2</Accordion.Header>
  <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
   by default, until the collapse plugin adds the appropriate classes that we
   use to style each element. These classes control the overall appearance, as
   well as the showing and hiding via CSS transitions. You can modify any of this with
   custom CSS or overriding our default variables. It's also worth noting that
   just about any HTML can go within the <code>.accordion-body</code>, though the
   transition does limit overflow.
 </Accordion.Body>
</Accordion.Item>
   <Accordion.Item eventKey="2">
<Accordion.Header>Accordion Item #3</Accordion.Header>
  <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
   by default, until the collapse plugin adds the appropriate classes that we
   use to style each element. These classes control the overall appearance, as
   well as the showing and hiding via CSS transitions. You can modify any of this with
   custom CSS or overriding our default variables. It's also worth noting that
   just about any HTML can go within the <code>.accordion-body</code>, though the
   transition  does limit overflow.
 </Accordion.Body>
  </Accordion.Item>
</Accordion>`}</code></pre></Collapse>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl={12}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Flush Accordion
                <p className="subtitle text-muted fs-12 fw-normal mt-1">
                  Add <code>.accordion-flush</code> to remove the default
                  <code>background-color</code>,
                  some borders, and some rounded corners to render accordions edge-to-edge with
                  their
                  parent container.
                </p>
              </Card.Title>
              <div className="prism-toggle">
                <Button onClick={() => setOpen3(!open3)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
              </div>
            </Card.Header>
            <Card.Body className="p-0">
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>Placeholder content for this accordion,
                    which isintended to demonstrate the <code>.accordion-flush</code> class.
                    This is the first item's accordion body.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>which is intended to demonstrate the <code>.accordion-flush</code> class.
                    This is thesecond item's accordion body. Let's imagine this being filled
                    with some actual content.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body>Placeholder content for this accordion,
                    which is intended to demonstrate the <code>.accordion-flush</code> class.
                    This is the third item's accordion body. Nothing more exciting happening
                    here in  terms of content, but just filling up the space to make it look, at
                    least at first glance, a bit more representative of how this would look in a
                    real-world application.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
              <Collapse in={open3} className="card-body"><pre><code>{` <Accordion defaultActiveKey="0" flush>
<Accordion.Item eventKey="0">
  <Accordion.Header>Accordion Item #1</Accordion.Header>
  <Accordion.Body>Placeholder content for this accordion,
     which isintended to demonstrate the <code>.accordion-flush</code> class.
     This is the first item's accordion body.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <Accordion.Header>Accordion Item #2</Accordion.Header>
  <Accordion.Body>which is intended to demonstrate the <code>.accordion-flush</code> class.
     This is thesecond item's accordion body. Let's imagine this being filled
     with some actual content.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <Accordion.Header>Accordion Item #2</Accordion.Header>
  <Accordion.Body>Placeholder content for this accordion,
      which is intended to demonstrate the <code>.accordion-flush</code> class.
      This is the third item's accordion body. Nothing more exciting happening
      here in  terms of content, but just filling up the space to make it look, at
      least at first glance, a bit more representative of how this would look in a
      real-world application.
  </Accordion.Body>
</Accordion.Item>
</Accordion> `}</code></pre></Collapse>
          </Card>
        </Col>
      </Row>
      <h6 className="mb-3">Light Colors:</h6>
      <Row>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Primary
              </Card.Title>
              <div className="prism-toggle">
                <Button onClick={() => setOpen4(!open4)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
              </div>
            </Card.Header>
            <Card.Body>
              <Accordion defaultActiveKey="0" className="accordion accordion-primary">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just  about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Item #3</Accordion.Header>
                  <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just about  any HTML can go within the <code>.accordion-body</code>, though the
                    transition  does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
              <Collapse in={open4} className="card-body"><pre><code>{`<Accordion defaultActiveKey="0" className="accordion accordion-primary">
<Accordion.Item eventKey="0">
  <Accordion.Header>Accordion Item #1</Accordion.Header>
  <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
     default, until the collapse plugin adds the appropriate classes that we
     use to style each element. These classes control the overall appearance, as
     well as the showing and hiding via CSS transitions. You can modify any of this with
     custom CSS or overriding our default variables. It's also worth noting that
     just  about any HTML can go within the <code>.accordion-body</code>, though the
     transition does limit overflow.
 </Accordion.Body>
 </Accordion.Item>
<Accordion.Item eventKey="1">
  <Accordion.Header>Accordion Item #2</Accordion.Header>
  <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
  by default, until the collapse plugin adds the appropriate classes that we
  use to style each element. These classes control the overall appearance, as
  well as the showing and hiding via CSS transitions. You can modify any of this with
  custom CSS or overriding our default variables. It's also worth noting that
  just about any HTML can go within the <code>.accordion-body</code>, though the
  transition does limit overflow.
   </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <Accordion.Header>Accordion Item #3</Accordion.Header>
   <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
   by default, until the collapse plugin adds the appropriate classes that we
   use to style each element. These classes control the overall appearance, as
   well as the showing and hiding via CSS transitions. You can modify any of this with
   custom CSS or overriding our default variables. It's also worth noting that
   just about  any HTML can go within the <code>.accordion-body</code>, though the
   transition  does limit overflow.
   </Accordion.Body>
</Accordion.Item>
</Accordion>`}</code></pre></Collapse>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header className="card-header justify-content-between">
              <Card.Title>
                Secondary
              </Card.Title>
              <div className="prism-toggle">
                <Button onClick={() => setOpen5(!open5)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
              </div>
            </Card.Header>
            <Card.Body>
              <Accordion defaultActiveKey="0" className="accordion accordion-secondary">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just  about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Item #3</Accordion.Header>
                  <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just about  any HTML can go within the <code>.accordion-body</code>, though the
                    transition  does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
              <Collapse in={open5} className="card-body"><pre><code>{`<Accordion defaultActiveKey="0" className="accordion accordion-secondary">
<Accordion.Item eventKey="0">
  <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
     default, until the collapse plugin adds the appropriate classes that we
     use to style each element. These classes control the overall appearance, as
     well as the showing and hiding via CSS transitions. You can modify any of this with
     custom CSS or overriding our default variables. It's also worth noting that
     just  about any HTML can go within the <code>.accordion-body</code>, though the
     transition does limit overflow.
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <Accordion.Header>Accordion Item #2</Accordion.Header>
  <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
   by default, until the collapse plugin adds the appropriate classes that we
   use to style each element. These classes control the overall appearance, as
   well as the showing and hiding via CSS transitions. You can modify any of this with
   custom CSS or overriding our default variables. It's also worth noting that
   just about any HTML can go within the <code>.accordion-body</code>, though the
   transition does limit overflow.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <Accordion.Header>Accordion Item #3</Accordion.Header>
   <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
    by default, until the collapse plugin adds the appropriate classes that we
    use to style each element. These classes control the overall appearance, as
    well as the showing and hiding via CSS transitions. You can modify any of this with
    custom CSS or overriding our default variables. It's also worth noting that
    just about  any HTML can go within the <code>.accordion-body</code>, though the
    transition  does limit overflow.
  </Accordion.Body>
</Accordion.Item>
</Accordion>`}</code></pre></Collapse>
          </Card>
        </Col>
      </Row>
      <h6 className="mb-3">Solid Colors:</h6>
      <Row>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Primary
              </Card.Title>
              <div className="prism-toggle">
                <Button onClick={() => setOpen6(!open6)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
              </div>
            </Card.Header>
            <Card.Body>
              <Accordion defaultActiveKey="0" className="accordion accordion-solid-primary">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just  about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Item #3</Accordion.Header>
                  <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just about  any HTML can go within the <code>.accordion-body</code>, though the
                    transition  does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
            <Card.Footer className="border-top-0">
              <Collapse in={open6} className="card-body"><pre><code>{`<Accordion defaultActiveKey="0" className="accordion accordion-solid-primary">
<Accordion.Item eventKey="0">
  <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
     default, until the collapse plugin adds the appropriate classes that we
     use to style each element. These classes control the overall appearance, as
     well as the showing and hiding via CSS transitions. You can modify any of this with
     custom CSS or overriding our default variables. It's also worth noting that
     just  about any HTML can go within the <code>.accordion-body</code>, though the
     transition does limit overflow.
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <Accordion.Header>Accordion Item #2</Accordion.Header>
  <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
   by default, until the collapse plugin adds the appropriate classes that we
   use to style each element. These classes control the overall appearance, as
   well as the showing and hiding via CSS transitions. You can modify any of this with
   custom CSS or overriding our default variables. It's also worth noting that
   just about any HTML can go within the <code>.accordion-body</code>, though the
   transition does limit overflow.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <Accordion.Header>Accordion Item #3</Accordion.Header>
   <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
    by default, until the collapse plugin adds the appropriate classes that we
    use to style each element. These classes control the overall appearance, as
    well as the showing and hiding via CSS transitions. You can modify any of this with
    custom CSS or overriding our default variables. It's also worth noting that
    just about  any HTML can go within the <code>.accordion-body</code>, though the
    transition  does limit overflow.
  </Accordion.Body>
</Accordion.Item>
</Accordion>`}</code></pre>
              </Collapse>
            </Card.Footer>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header className=" justify-content-between">
              <Card.Title>
                Secondary
              </Card.Title>
              <div className="prism-toggle">
                <Button onClick={() => setOpen7(!open7)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
              </div>
            </Card.Header>
            <Card.Body>
              <Accordion defaultActiveKey="0" className="accordion accordion-solid-secondary">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just  about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Item #3</Accordion.Header>
                  <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just about  any HTML can go within the <code>.accordion-body</code>, though the
                    transition  does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
              <Collapse in={open7} className="card-body"><pre><code>{`<Accordion defaultActiveKey="0" className="accordion accordion-solid-secondary">
<Accordion.Item eventKey="0">
  <Accordion.Header>Accordion Item #1</Accordion.Header>
  <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
     default, until the collapse plugin adds the appropriate classes that we
     use to style each element. These classes control the overall appearance, as
     well as the showing and hiding via CSS transitions. You can modify any of this with
     custom CSS or overriding our default variables. It's also worth noting that
     just  about any HTML can go within the <code>.accordion-body</code>, though the
     transition does limit overflow.
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
<Accordion.Header>Accordion Item #2</Accordion.Header>
<Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
  by default, until the collapse plugin adds the appropriate classes that we
  use to style each element. These classes control the overall appearance, as
  well as the showing and hiding via CSS transitions. You can modify any of this with
  custom CSS or overriding our default variables. It's also worth noting that
  just about any HTML can go within the <code>.accordion-body</code>, though the
  transition does limit overflow.
 </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
 <Accordion.Header>Accordion Item #3</Accordion.Header>
 <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
   by default, until the collapse plugin adds the appropriate classes that we
   use to style each element. These classes control the overall appearance, as
   well as the showing and hiding via CSS transitions. You can modify any of this with
   custom CSS or overriding our default variables. It's also worth noting that
   just about  any HTML can go within the <code>.accordion-body</code>, though the
   transition  does limit overflow.
 </Accordion.Body>
</Accordion.Item>
</Accordion>`}</code></pre></Collapse>
          </Card>
        </Col>
      </Row>
      <h6 className="mb-3">Colored Borders:</h6>
      <Row>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header className="card-header justify-content-between">
              <Card.Title>
                Primary
              </Card.Title>
              <div className="prism-toggle">
                <Button onClick={() => setOpen8(!open8)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open8}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
              </div>
            </Card.Header>
            <Card.Body>
              <Accordion defaultActiveKey="0" className="accordion accordion-border-primary accordions-items-seperate">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just  about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Item #3</Accordion.Header>
                  <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just about  any HTML can go within the <code>.accordion-body</code>, though the
                    transition  does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
              <Collapse in={open8} className="card-body"><pre><code>{`<Accordion defaultActiveKey="0" className="accordion accordion-border-primary accordions-items-seperate">
<Accordion.Item eventKey="0">
  <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
     default, until the collapse plugin adds the appropriate classes that we
     use to style each element. These classes control the overall appearance, as
     well as the showing and hiding via CSS transitions. You can modify any of this with
     custom CSS or overriding our default variables. It's also worth noting that
     just  about any HTML can go within the <code>.accordion-body</code>, though the
     transition does limit overflow.
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <Accordion.Header>Accordion Item #2</Accordion.Header>
  <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
   by default, until the collapse plugin adds the appropriate classes that we
   use to style each element. These classes control the overall appearance, as
   well as the showing and hiding via CSS transitions. You can modify any of this with
   custom CSS or overriding our default variables. It's also worth noting that
   just about any HTML can go within the <code>.accordion-body</code>, though the
   transition does limit overflow.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <Accordion.Header>Accordion Item #3</Accordion.Header>
   <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
    by default, until the collapse plugin adds the appropriate classes that we
    use to style each element. These classes control the overall appearance, as
    well as the showing and hiding via CSS transitions. You can modify any of this with
    custom CSS or overriding our default variables. It's also worth noting that
    just about  any HTML can go within the <code>.accordion-body</code>, though the
    transition  does limit overflow.
  </Accordion.Body>
</Accordion.Item>
</Accordion>`}</code></pre>
              </Collapse>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Success
              </Card.Title>
              <div className="prism-toggle">
                <Button onClick={() => setOpen9(!open9)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open9}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
              </div>
            </Card.Header>
            <Card.Body>
              <Accordion defaultActiveKey="0" className="accordion accordion-border-success accordions-items-seperate">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just  about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Item #3</Accordion.Header>
                  <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just about  any HTML can go within the <code>.accordion-body</code>, though the
                    transition  does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
              <Collapse in={open9} className="card-body"><pre><code>{`<Accordion defaultActiveKey="0" className="accordion accordion-border-success accordions-items-seperate">
<Accordion.Item eventKey="0">
  <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
     default, until the collapse plugin adds the appropriate classes that we
     use to style each element. These classes control the overall appearance, as
     well as the showing and hiding via CSS transitions. You can modify any of this with
     custom CSS or overriding our default variables. It's also worth noting that
     just  about any HTML can go within the <code>.accordion-body</code>, though the
     transition does limit overflow.
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <Accordion.Header>Accordion Item #2</Accordion.Header>
  <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
   by default, until the collapse plugin adds the appropriate classes that we
   use to style each element. These classes control the overall appearance, as
   well as the showing and hiding via CSS transitions. You can modify any of this with
   custom CSS or overriding our default variables. It's also worth noting that
   just about any HTML can go within the <code>.accordion-body</code>, though the
   transition does limit overflow.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <Accordion.Header>Accordion Item #3</Accordion.Header>
   <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
    by default, until the collapse plugin adds the appropriate classes that we
    use to style each element. These classes control the overall appearance, as
    well as the showing and hiding via CSS transitions. You can modify any of this with
    custom CSS or overriding our default variables. It's also worth noting that
    just about  any HTML can go within the <code>.accordion-body</code>, though the
    transition  does limit overflow.
  </Accordion.Body>
</Accordion.Item>
</Accordion>`}</code></pre>
              </Collapse>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Left Aligned Icons
              </Card.Title>
              <div className="prism-toggle">
                <Button onClick={() => setOpen10(!open10)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open10}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
              </div>
            </Card.Header>
            <Card.Body>
              <Accordion defaultActiveKey="0" className="accordion accordionicon-left accordions-items-seperate">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just  about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Item #3</Accordion.Header>
                  <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just about  any HTML can go within the <code>.accordion-body</code>, though the
                    transition  does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
              <Collapse in={open10} className="card-body"><pre><code>{`<Accordion defaultActiveKey="0" className="accordion accordionicon-left accordions-items-seperate">
<Accordion.Item eventKey="0">
  <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
     default, until the collapse plugin adds the appropriate classes that we
     use to style each element. These classes control the overall appearance, as
     well as the showing and hiding via CSS transitions. You can modify any of this with
     custom CSS or overriding our default variables. It's also worth noting that
     just  about any HTML can go within the <code>.accordion-body</code>, though the
     transition does limit overflow.
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <Accordion.Header>Accordion Item #2</Accordion.Header>
  <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
   by default, until the collapse plugin adds the appropriate classes that we
   use to style each element. These classes control the overall appearance, as
   well as the showing and hiding via CSS transitions. You can modify any of this with
   custom CSS or overriding our default variables. It's also worth noting that
   just about any HTML can go within the <code>.accordion-body</code>, though the
   transition does limit overflow.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <Accordion.Header>Accordion Item #3</Accordion.Header>
   <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
    by default, until the collapse plugin adds the appropriate classes that we
    use to style each element. These classes control the overall appearance, as
    well as the showing and hiding via CSS transitions. You can modify any of this with
    custom CSS or overriding our default variables. It's also worth noting that
    just about  any HTML can go within the <code>.accordion-body</code>, though the
    transition  does limit overflow.
  </Accordion.Body>
</Accordion.Item>
</Accordion>`}</code></pre>
              </Collapse>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Without Icon
              </Card.Title>
              <div className="prism-toggle">
                <Button onClick={() => setOpen11(!open11)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open11}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
              </div>
            </Card.Header>
            <Card.Body>
              <Accordion defaultActiveKey="0" className="accordion accordionicon-none accordions-items-seperate">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just  about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Item #3</Accordion.Header>
                  <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just about  any HTML can go within the <code>.accordion-body</code>, though the
                    transition  does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
              <Collapse in={open11} className="card-body"><pre><code>{`<Accordion defaultActiveKey="0" 
className="accordion accordionicon-none accordions-items-seperate">
<Accordion.Item eventKey="0">
  <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
     default, until the collapse plugin adds the appropriate classes that we
     use to style each element. These classes control the overall appearance, as
     well as the showing and hiding via CSS transitions. You can modify any of this with
     custom CSS or overriding our default variables. It's also worth noting that
     just  about any HTML can go within the <code>.accordion-body</code>, though the
     transition does limit overflow.
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <Accordion.Header>Accordion Item #2</Accordion.Header>
  <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
   by default, until the collapse plugin adds the appropriate classes that we
   use to style each element. These classes control the overall appearance, as
   well as the showing and hiding via CSS transitions. You can modify any of this with
   custom CSS or overriding our default variables. It's also worth noting that
   just about any HTML can go within the <code>.accordion-body</code>, though the
   transition does limit overflow.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <Accordion.Header>Accordion Item #3</Accordion.Header>
   <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
    by default, until the collapse plugin adds the appropriate classes that we
    use to style each element. These classes control the overall appearance, as
    well as the showing and hiding via CSS transitions. You can modify any of this with
    custom CSS or overriding our default variables. It's also worth noting that
    just about  any HTML can go within the <code>.accordion-body</code>, though the
    transition  does limit overflow.
  </Accordion.Body>
</Accordion.Item>
</Accordion>`}</code></pre>
              </Collapse>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Custom Icon Accordion
              </Card.Title>
              <div className="prism-toggle">
                <Button onClick={() => setOpen12(!open12)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open12}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
              </div>
            </Card.Header>
            <Card.Body>
              <Accordion defaultActiveKey="0" className="accordion accordion-customicon1 accordions-items-seperate">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just  about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Item #3</Accordion.Header>
                  <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just about  any HTML can go within the <code>.accordion-body</code>, though the
                    transition  does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
              <Collapse in={open12} className="card-body"><pre><code>{`<Accordion defaultActiveKey="0" 
className="accordion accordion-customicon1 accordions-items-seperate">
<Accordion.Item eventKey="0">
  <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
     default, until the collapse plugin adds the appropriate classes that we
     use to style each element. These classes control the overall appearance, as
     well as the showing and hiding via CSS transitions. You can modify any of this with
     custom CSS or overriding our default variables. It's also worth noting that
     just  about any HTML can go within the <code>.accordion-body</code>, though the
     transition does limit overflow.
</Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="1">
  <Accordion.Header>Accordion Item #2</Accordion.Header>
  <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
   by default, until the collapse plugin adds the appropriate classes that we
   use to style each element. These classes control the overall appearance, as
   well as the showing and hiding via CSS transitions. You can modify any of this with
   custom CSS or overriding our default variables. It's also worth noting that
   just about any HTML can go within the <code>.accordion-body</code>, though the
   transition does limit overflow.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2">
  <Accordion.Header>Accordion Item #3</Accordion.Header>
   <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
    by default, until the collapse plugin adds the appropriate classes that we
    use to style each element. These classes control the overall appearance, as
    well as the showing and hiding via CSS transitions. You can modify any of this with
    custom CSS or overriding our default variables. It's also worth noting that
    just about  any HTML can go within the <code>.accordion-body</code>, though the
    transition  does limit overflow.
  </Accordion.Body>
</Accordion.Item>
</Accordion>`}</code></pre>
              </Collapse>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header className=" justify-content-between">
              <Card.Title>
                Custom Accordion
              </Card.Title>
              <div className="prism-toggle">
                <Button onClick={() => setOpen13(!open13)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open13}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
              </div>
            </Card.Header>
            <Card.Body>
              <Accordion defaultActiveKey="0" className="accordion customized-accordion accordions-items-seperate">
                <Accordion.Item eventKey="0" className="custom-accordion-primary">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just  about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="accordion-item custom-accordion-secondary">
                  <Accordion.Header>Accordion Item #2</Accordion.Header>
                  <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just about any HTML can go within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="accordion-item custom-accordion-danger">
                  <Accordion.Header>Accordion Item #3</Accordion.Header>
                  <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes that we
                    use to style each element. These classes control the overall appearance, as
                    well as the showing and hiding via CSS transitions. You can modify any of this with
                    custom CSS or overriding our default variables. It's also worth noting that
                    just about  any HTML can go within the <code>.accordion-body</code>, though the
                    transition  does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Card.Body>
              <Collapse in={open13} className="card-body"><pre><code>{`<Accordion defaultActiveKey="0" className="accordion customized-accordion accordions-items-seperate">
  <Accordion.Item eventKey="0" className="custom-accordion-primary">
  <Accordion.Header>Accordion Item #1</Accordion.Header>
  <Accordion.Body> <strong>This is the first item's accordion body.</strong> It is shown by
     default, until the collapse plugin adds the appropriate classes that we
     use to style each element. These classes control the overall appearance, as
     well as the showing and hiding via CSS transitions. You can modify any of this with
     custom CSS or overriding our default variables. It's also worth noting that
     just  about any HTML can go within the <code>.accordion-body</code>, though the
     transition does limit overflow.
  </Accordion.Body>
</Accordion.Item>
 <Accordion.Item eventKey="1" className="accordion-item custom-accordion-secondary">
  <Accordion.Header>Accordion Item #2</Accordion.Header>
   <Accordion.Body><strong>This is the second item's accordion body.</strong> It is hidden
  by default, until the collapse plugin adds the appropriate classes that we
  use to style each element. These classes control the overall appearance, as
  well as the showing and hiding via CSS transitions. You can modify any of this with
  custom CSS or overriding our default variables. It's also worth noting that
  just about any HTML can go within the <code>.accordion-body</code>, though the
  transition does limit overflow.
  </Accordion.Body>
</Accordion.Item>
<Accordion.Item eventKey="2" className="accordion-item custom-accordion-danger">
 <Accordion.Header>Accordion Item #3</Accordion.Header>
 <Accordion.Body><strong>This is the third item's accordion body.</strong> It is hidden
   by default, until the collapse plugin adds the appropriate classes that we
   use to style each element. These classes control the overall appearance, as
   well as the showing and hiding via CSS transitions. You can modify any of this with
   custom CSS or overriding our default variables. It's also worth noting that
   just about  any HTML can go within the <code>.accordion-body</code>, though the
   transition  does limit overflow.
 </Accordion.Body>
</Accordion.Item>
 </Accordion>`}</code></pre>
              </Collapse>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Example
              </Card.Title>
              <div className="prism-toggle">
                <Button onClick={() => setOpen14(!open14)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open14}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-0">
                <Button onClick={() => setOpenb(!openb)} aria-controls="example-collapse-text" aria-expanded={openb}
                  href="#collapseExample" className="btn btn-primary collapsed mb-2 me-1" role="button">
                  Link with href</Button>
                <Button onClick={() => setOpenb(!openb)} aria-controls="example-collapse-text" aria-expanded={openb}
                  variant='' className="btn btn-secondary collapsed mb-2" type="button">
                  Button with data-bs-target</Button>
              </p>
              <Collapse in={openb}>
                <div className="card card-body mb-0">
                  Some placeholder content for the collapse component. This panel
                  is
                  hidden by default but revealed when the user activates the
                  relevant
                  trigger.
                </div>
              </Collapse>
            </Card.Body>
              <Collapse in={open14} className="card-body"><pre><code>{`<p className="mb-0">
<Button onClick={() => setOpenb(!openb)} aria-controls="example-collapse-text" aria-expanded={open}
  href="#collapseExample" className="btn btn-primary collapsed mb-2 me-1" role="button">
    Link with href</Button>
<Button  onClick={() => setOpenb(!openb)} aria-controls="example-collapse-text" aria-expanded={open}
  variant='' className="btn btn-secondary collapsed mb-2" type="button">
    Button with data-bs-target</Button>
</p> 
<Collapse in={openb}>
<div className="card card-body mb-0">
    Some placeholder content for the collapse component. This panel
    is
    hidden by default but revealed when the user activates the
    relevant
    trigger.
</div>
</Collapse>`}</code></pre>
              </Collapse>
          </Card>
        </Col>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>
                Targets Collapse
              </Card.Title>
              <div className="prism-toggle">
                <Button onClick={() => setOpen15(!open15)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open15}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
              </div>
            </Card.Header>
            <Card.Body>
              <p className="mb-0">
                <Button className="btn btn-primary mb-2 me-1" onClick={() => { first(); }}>Toggle first element</Button>
                <Button variant='' className="btn btn-success mb-2 me-1" type="button" onClick={() => { second(); }}>Toggle second element</Button>
                <Button variant='' className="btn btn-danger mb-2" type="button" onClick={() => { both(); }}>Toggle both elements</Button>
              </p>
              <Row>
                <div className="col m-1">
                  {isFirstCollapsed ? (
                    <div className=" multi-collapse" id="multiCollapseExample1">
                      <div className="card card-body mb-0">
                        Some placeholder content for the first collapse
                        component of
                        this multi-collapse example. This panel is hidden by
                        default
                        but revealed when the user activates the relevant
                        trigger.
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="col m-1">
                  {isSecondCollapsed ? (
                    <div className=" multi-collapse" id="multiCollapseExample2">
                      <div className="card card-body mb-0">
                        Some placeholder content for the second collapse
                        component
                        of this multi-collapse example. This panel is hidden by
                        default but revealed when the user activates the
                        relevant
                        trigger.
                      </div>
                    </div>
                  ) : null}
                </div>
              </Row>
            </Card.Body>
              <Collapse in={open15} className="card-body"><pre><code>{`  <p className="mb-0">
<Button className="btn btn-primary mb-2 me-1"  onClick={() => { first() }}>Toggle first element</Button>
<Button variant='' className="btn btn-success mb-2 me-1" type="button" onClick={() => { second() }}>Toggle second element</Button>
<Button variant='' className="btn btn-danger mb-2" type="button"  onClick={() => { both() }}>Toggle both elements</Button>
                                </p>
<Row>
    <div className="col m-1">
{isFirstCollapsed ? (
        <div className=" multi-collapse" id="multiCollapseExample1">
            <div className="card card-body mb-0">
                Some placeholder content for the first collapse
                component of
                this multi-collapse example. This panel is hidden by
                default
                but revealed when the user activates the relevant
                trigger.
            </div>
        </div>
    ) : null}
    </div>
    <div className="col m-1">
    {isSecondCollapsed ? (
        <div className=" multi-collapse" id="multiCollapseExample2">
            <div className="card card-body mb-0">
                Some placeholder content for the second collapse
                component
                of this multi-collapse example. This panel is hidden by
                default but revealed when the user activates the
                relevant
                trigger.
            </div>
        </div>
     ) : null}
    </div>
</Row>`}</code></pre>
            </Collapse>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xl={6}>
          <Card className="custom-card">
            <Card.Header className="justify-content-between">
              <Card.Title>Horizontal Collapse</Card.Title>
              <div className="prism-toggle">
                <Button onClick={() => setOpen16(!open16)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open16}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
              </div>
            </Card.Header>
            <Card.Body>
              <p><Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>Toggle width collapse</Button>

              </p><div style={{ minHeight: '120px' }}>
                <Collapse in={open} dimension="width">
                  <div id="example-collapse-text">
                    <Card body style={{ width: '230px' }}>This is some placeholder content for a horizontal collapse. It's
                      hidden by default and shown when triggered.
                    </Card>
                  </div>
                </Collapse>
              </div>
            </Card.Body>
              <Collapse in={open16} className="card-body"><pre><code>{` <p><Button onClick={() => setOpen(!open)} aria-controls="example-collapse-text" aria-expanded={open}>
Toggle width collapse</Button>                   
</p><div style={{ minHeight: '120px' }}>
<Collapse in={open} dimension="width">
<div id="example-collapse-text">
    <Card body style={{ width: '230px' }}>This is some placeholder content for a horizontal collapse. It's
     hidden by default and shown when triggered.
    </Card>
</div>
</Collapse>
</div>`}</code></pre>
              </Collapse>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};
export default Accordionscollapse;
