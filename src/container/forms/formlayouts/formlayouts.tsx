import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Collapse, Form, InputGroup, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';

interface FormlayoutsProps { }

const Formlayouts: FC<FormlayoutsProps> = () => {
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
    return (
        <Fragment>
            <Pageheader title="Layout" heading="Forms" active="Layout" />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Vertical Forms
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="mb-3">
                                <Form.Label htmlFor="form-text" className=" fs-14 text-dark">Enter name</Form.Label>
                                <Form.Control type="text" className="" id="form-text" placeholder="" />
                            </div>
                            <div className="mb-3">
                                <Form.Label htmlFor="form-password" className="fs-14 text-dark">Enter
                                    Password</Form.Label>
                                <Form.Control type="password" className="" id="form-password" placeholder="" />
                            </div>
                            <Form.Check className="" type="checkbox" value="" id="invalidCheck" label="Accept Policy"
                                required />
                            <Button variant='primary' className="" type="submit">Submit</Button>
                        </Card.Body>
                            <Collapse in={open1} className="card-body"><pre><code>{`
 <div className="mb-3">
 <Form.Label htmlFor="form-text" className=" fs-14 text-dark">Enter name</Form.Label>
 <Form.Control type="text" className="" id="form-text" placeholder=""/>
</div>
<div className="mb-3">
 <Form.Label htmlFor="form-password" className="fs-14 text-dark">Enter
     Password</Form.Label>
 <Form.Control type="password" className="" id="form-password" placeholder=""/>
</div>
<Form.Check className="" type="checkbox" value="" id="invalidCheck" label="Accept Policy"
     required/>
<Button variant='primary' className="" type="submit">Submit</Button>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Horizontal form
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen2(!open2)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <form>
                                <div className="row mb-3">
                                    <Form.Label htmlFor="inputEmail3"
                                        className="col-sm-2 col-form-label">Email</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="email" className="form-control" id="inputEmail3" />
                                    </Col>
                                </div>
                                <div className="row mb-3">
                                    <Form.Label htmlFor="inputPassword3"
                                        className="col-sm-2 col-form-label">Password</Form.Label>
                                    <Col sm={10}>
                                        <Form.Control type="password" className="form-control" id="inputPassword3" />
                                    </Col>
                                </div>
                                <fieldset className="row mb-3">
                                    <legend className="col-form-label col-sm-2 pt-0">Qualified</legend>
                                    <Col sm={10}>
                                        <Form.Check type='radio' label='Prelims' defaultChecked />
                                        <Form.Check type='radio' label='Mains' disabled />
                                        <Form.Check type='checkbox' label='Certified' />
                                    </Col>
                                </fieldset>
                                <Button variant='primary' type="submit" className="">Sign in</Button>
                            </form>
                        </Card.Body>
                            <Collapse in={open2} className="card-body"><pre><code>{`
 <div className="mb-3">
 <Form.Label htmlFor="form-text" className=" fs-14 text-dark">Enter name</Form.Label>
 <Form.Control type="text" className="" id="form-text" placeholder=""/>
</div>
<div className="mb-3">
 <Form.Label htmlFor="form-password" className="fs-14 text-dark">Enter
     Password</Form.Label>
 <Form.Control type="password" className="" id="form-password" placeholder=""/>
</div>
<Form.Check className="" type="checkbox" value="" id="invalidCheck" label="Accept Policy"
     required/>
<Button variant='primary' className="" type="submit">Submit</Button>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>

            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Vertical Forms with icon
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen3(!open3)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="mb-3">
                                <Form.Label htmlFor="form-text1" className="fs-14 text-dark">Enter name</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text className=""><i className="ri-user-line"></i></InputGroup.Text>
                                    <Form.Control type="text" className="" id="form-text1" placeholder="" />
                                </InputGroup>
                            </div>
                            <div className="mb-3">
                                <Form.Label htmlFor="form-password1" className="fs-14 text-dark">Enter
                                    Password</Form.Label>
                                <InputGroup>
                                    <InputGroup.Text className=""><i className="ri-lock-line"></i></InputGroup.Text>
                                    <Form.Control type="password" className="" id="form-password1" placeholder="" />
                                </InputGroup>
                            </div>
                            <Form.Check className='mb-3' type="checkbox" label="Accept Policy" />
                            <Button variant='primary' className="" type="submit">Submit</Button>
                        </Card.Body>
                            <Collapse in={open3} className="card-body"><pre><code>{`
 <div className="mb-3">
 <Form.Label htmlFor="form-text1" className=" fs-14 text-dark">Enter name</Form.Label>
 <InputGroup>
     <InputGroup.Text className=""><i className="ri-user-line"></i></InputGroup.Text>
     <Form.Control type="text" className="" id="form-text1" placeholder=""/>
 </InputGroup>
</div>
<div className="mb-3">
 <Form.Label htmlFor="form-password1" className=" fs-14 text-dark">Enter
     Password</Form.Label>
 <InputGroup>
     <InputGroup.Text className=""><i className="ri-lock-line"></i></InputGroup.Text>
     <Form.Control type="password" className="" id="form-password1" placeholder=""/>
 </InputGroup>
</div>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Horizontal form With Icons
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen4(!open4)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Row className="mb-3">
                                    <label htmlFor="inputEmail1"
                                        className="col-sm-2 col-form-label">Email</label>
                                    <Col sm={10}>
                                        <InputGroup>
                                            <Form.Control type="email" className="form-control" id="inputEmail1" />
                                            <InputGroup.Text className="input-group-text">
                                                <i className="ri-mail-line"></i>
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row className="row mb-3">
                                    <label htmlFor="inputPassword1"
                                        className="col-sm-2 col-form-label">Password</label>
                                    <Col sm={10}>
                                        <InputGroup>
                                            <Form.Control type="password" className="form-control" id="inputPassword1" />
                                            <InputGroup.Text className="input-group-text">
                                                <i className="ri-lock-line"></i>
                                            </InputGroup.Text>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <fieldset className="row mb-3">
                                    <legend className="col-form-label col-sm-2 pt-0">Qualified</legend>
                                    <Col sm={10}>
                                        <Form.Check defaultChecked type="radio" label="Prelims" name="formHorizontalRadios" id="formHorizontalRadios1" />
                                        <Form.Check disabled type="radio" label="Mains" name="formHorizontalRadios" id="formHorizontalRadios2" />
                                        <Form.Check type="checkbox" label="Certified" name="formHorizontalRadios" id="formHorizontalRadios3" />
                                    </Col>
                                </fieldset>
                                <Button variant='' type="submit" className="btn btn-primary">Sign in</Button>
                            </Form>
                        </Card.Body>
                            <Collapse in={open4} className="card-body"><pre><code>{`
 <Form>
 <Row className="mb-3">
     <label htmlFor="inputEmail1"
         className="col-sm-2 col-form-label">Email</label>
     <Col sm={10}>
         <InputGroup>
             <Form.Control type="email" className="form-control" id="inputEmail1"/>
             <InputGroup.Text className="input-group-text">
                 <i className="ri-mail-line"></i>
             </InputGroup.Text>
         </InputGroup>
     </Col>
 </Row>
 <Row className="row mb-3">
     <label htmlFor="inputPassword1"
         className="col-sm-2 col-form-label">Password</label>
     <Col sm={10}>
         <InputGroup>
             <Form.Control type="password" className="form-control" id="inputPassword1"/>
             <InputGroup.Text className="input-group-text">
                 <i className="ri-lock-line"></i>
             </InputGroup.Text>
         </InputGroup>
     </Col>
 </Row>
 <fieldset className="row mb-3">
     <legend className="col-form-label col-sm-2 pt-0">Qualified</legend>
     <Col sm={10}>
         <Form.Check defaultChecked type="radio"label="Prelims"name="formHorizontalRadios"id="formHorizontalRadios1"/>
         <Form.Check disabled type="radio"label="Mains"name="formHorizontalRadios"id="formHorizontalRadios2"/>
         <Form.Check type="checkbox"label="Certified"name="formHorizontalRadios"id="formHorizontalRadios3"/>
     </Col>
 </fieldset>
 <Button variant='' type="submit" className="btn btn-primary">Sign in</Button>
</Form>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Inline forms
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen5(!open5)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form className="row row-cols-lg-auto g-3 align-items-center">
                                <div className="col-12">
                                    <label className="visually-hidden"
                                        htmlFor="inlineFormInputGroupUsername">Username</label>
                                    <InputGroup>
                                        <InputGroup.Text className="input-group-text">@</InputGroup.Text>
                                        <Form.Control type="text" className="form-control"
                                            id="inlineFormInputGroupUsername" placeholder="Username" />
                                    </InputGroup>
                                </div>
                                <div className="col-12">
                                    <label className="visually-hidden"
                                        htmlFor="inlineFormSelectPref">Preference</label>
                                    <Form.Select className="form-select" id="inlineFormSelectPref" defaultValue="Choose...">
                                        <option >Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="col-12">
                                    <Form.Check type='checkbox' label="Remember me" />
                                </div>

                                <div className="col-12">
                                    <Button type="submit" variant='primary' className="">Submit</Button>
                                </div>
                            </Form>
                        </Card.Body>
                            <Collapse in={open5} className="card-body"><pre><code>{`
  <Form className="row row-cols-lg-auto g-3 align-items-center">
  <div className="col-12">
      <label className="visually-hidden"
          htmlFor="inlineFormInputGroupUsername">Username</label>
      <InputGroup>
          <InputGroup.Text className="input-group-text">@</InputGroup.Text>
          <Form.Control type="text" className="form-control"
              id="inlineFormInputGroupUsername" placeholder="Username"/>
      </InputGroup>
  </div>
  <div className="col-12">
      <label className="visually-hidden"
          htmlFor="inlineFormSelectPref">Preference</label>
      <Form.Select className="form-select" id="inlineFormSelectPref" defaultValue="Choose...">
          <option >Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
      </Form.Select>
  </div>
  <div className="col-12">
      <Form.Check type='checkbox' label="Remember me" />
  </div>

  <div className="col-12">
      <Button type="submit" variant='primary' className="">Submit</Button>
  </div>
</Form>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Column sizing
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen6(!open6)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row className="g-3">
                                <Col sm={7} className="">
                                    <Form.Control type="text" className="" placeholder="City"
                                        aria-label="City" />
                                </Col>
                                <div className="col-sm">
                                    <Form.Control type="text" className="" placeholder="State"
                                        aria-label="State" />
                                </div>
                                <div className="col-sm">
                                    <Form.Control type="text" className="" placeholder="Zip"
                                        aria-label="Zip" />
                                </div>
                            </Row>
                        </Card.Body>
                            <Collapse in={open6} className="card-body"><pre><code>{`
 <Row className="g-3">
 <Col sm={7} className="">
     <Form.Control type="text" className="" placeholder="City"
         aria-label="City"/>
 </Col>
 <div className="col-sm">
     <Form.Control type="text" className="" placeholder="State"
         aria-label="State"/>
 </div>
 <div className="col-sm">
     <Form.Control type="text" className="" placeholder="Zip"
         aria-label="Zip"/>
 </div>
</Row>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Utilities
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen7(!open7)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="mb-3">
                                <Form.Label htmlFor="formGroupExampleInput" className="">Example label</Form.Label>
                                <Form.Control type="text" className="" id="formGroupExampleInput"
                                    placeholder="Example input placeholder" />
                            </div>
                            <div className="mb-1">
                                <Form.Label htmlFor="formGroupExampleInput2" className="">Another label</Form.Label>
                                <Form.Control type="text" className="" id="formGroupExampleInput2"
                                    placeholder="Another input placeholder" />
                            </div>
                        </Card.Body>
                            <Collapse in={open7} className="card-body"><pre><code>{`
 <div className="mb-3">
 <Form.Label htmlFor="formGroupExampleInput" className="">Example label</Form.Label>
 <Form.Control type="text" className="" id="formGroupExampleInput"
     placeholder="Example input placeholder"/>
</div>
<div className="mb-1">
 <Form.Label htmlFor="formGroupExampleInput2" className="">Another label</Form.Label>
 <Form.Control type="text" className="" id="formGroupExampleInput2"
     placeholder="Another input placeholder"/>
</div>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Horizontal form label sizing
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen8(!open8)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open8}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row className="mb-3">
                                <Form.Label htmlFor="colFormLabelSm" column="sm" sm={2}
                                    className="col-sm-2 col-form-label col-form-label-sm">Email</Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" className="form-control-sm" size="sm"
                                        id="colFormLabelSm" placeholder="col-form-label-sm" />
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Form.Label column="sm" sm={2} htmlFor="colFormLabel" className="col-sm-2 col-form-label">Email</Form.Label>
                                <Col sm={10}>
                                    <Form.Control type="email" className="" id="colFormLabel"
                                        placeholder="col-form-label" />
                                </Col>
                            </Row>
                            <Row>
                                <label htmlFor="colFormLabelLg"
                                    className="col-sm-2 col-form-label col-form-label-lg">Email</label>
                                <Col sm={10}>
                                    <Form.Control type="email" className="form-control-lg" size="lg"
                                        id="colFormLabelLg" placeholder="col-form-label-lg" />
                                </Col>
                            </Row>
                        </Card.Body>
                            <Collapse in={open8} className="card-body"><pre><code>{`
 <Row className="mb-3">
 <Form.Label htmlFor="colFormLabelSm" column="sm" sm={2}
     className="col-sm-2 col-form-label col-form-label-sm">Email</Form.Label>
 <Col sm={10}>
     <Form.Control type="email" className="form-control-sm" size="sm"
         id="colFormLabelSm" placeholder="col-form-label-sm"/>
 </Col>
</Row>
<Row className="mb-3">
 <Form.Label column="sm" sm={2} htmlFor="colFormLabel" className="col-sm-2 col-form-label">Email</Form.Label>
 <Col sm={10}>
     <Form.Control type="email" className="" id="colFormLabel"
         placeholder="col-form-label"/>
 </Col>
</Row>
<Row>
 <label htmlFor="colFormLabelLg"
     className="col-sm-2 col-form-label col-form-label-lg">Email</label>
 <Col sm={10}>
     <Form.Control type="email" className="form-control-lg" size="lg"
         id="colFormLabelLg" placeholder="col-form-label-lg"/>
 </Col>
</Row>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Auto sizing
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen9(!open9)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open9}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form className="row gy-2 gx-3 align-items-center mb-4">
                                <Col xs="auto">
                                    <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                                        Name
                                    </Form.Label>
                                    <Form.Control
                                        className="mb-2"
                                        id="inlineFormInput"
                                        placeholder="Jane Doe"
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                                        Username
                                    </Form.Label>
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text>@</InputGroup.Text>
                                        <Form.Control id="inlineFormInputGroup" placeholder="Username" />
                                    </InputGroup>
                                </Col>
                                <Col className="col-auto">
                                    <label className="visually-hidden"
                                        htmlFor="autoSizingSelect">Preference</label>
                                    <Form.Select className="form-select" id="autoSizingSelect">
                                        <option >Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                                <Col xs="auto">
                                    <Form.Check
                                        type="checkbox"
                                        id="autoSizingCheck"
                                        className="mb-2"
                                        label="Remember me"
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button type="submit" className="mb-2">
                                        Submit
                                    </Button>
                                </Col>
                            </Form>
                            <span className="fw-semibold mb-1 text-muted">You can then remix that once again with size-specific column
                                classes.</span>
                            <Form className="row gx-3 gy-2 align-items-center mt-0">
                                <Col sm={3} className="">
                                    <label className="visually-hidden"
                                        htmlFor="specificSizeInputName">Name</label>
                                    <Form.Control type="text" className="form-control" id="specificSizeInputName"
                                        placeholder="Jane Doe" />
                                </Col>
                                <Col sm={3} className="">
                                    <label className="visually-hidden"
                                        htmlFor="specificSizeInputGroupUsername">Username</label>
                                    <InputGroup>
                                        <InputGroup.Text className="input-group-text">@</InputGroup.Text>
                                        <Form.Control type="text" className="form-control"
                                            id="specificSizeInputGroupUsername" placeholder="Username" />
                                    </InputGroup>
                                </Col>
                                <Col sm={3} className="">
                                    <label className="visually-hidden"
                                        htmlFor="specificSizeSelect">Preference</label>
                                    <Form.Select className="form-select" id="specificSizeSelect">
                                        <option >Choose...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </Col>
                                <div className="col-auto">
                                    <Form.Check
                                        type="checkbox"
                                        id="autoSizingCheck"
                                        className="mb-2"
                                        label="Remember me"
                                    />
                                </div>
                                <div className="col-auto">
                                    <Button type="submit" className="btn btn-primary">Submit</Button>
                                </div>
                            </Form>
                        </Card.Body>
                            <Collapse in={open9} className="card-body"><pre><code>{`
  <Form>
  <Row className="align-items-center">
      <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" visuallyHidden>
          Name
      </Form.Label>
      <Form.Control
          className="mb-2"
          id="inlineFormInput"
          placeholder="Jane Doe"
      />
      </Col>
      <Col xs="auto">
      <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
          Username
      </Form.Label>
      <InputGroup className="mb-2">
          <InputGroup.Text>@</InputGroup.Text>
          <Form.Control id="inlineFormInputGroup" placeholder="Username" />
      </InputGroup>
      </Col>
      <Col className="col-auto">
          <label className="visually-hidden"
              htmlFor="autoSizingSelect">Preference</label>
          <Form.Select className="form-select" id="autoSizingSelect">
              <option >Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
          </Form.Select>
      </Col>
      <Col xs="auto">
      <Form.Check
          type="checkbox"
          id="autoSizingCheck"
          className="mb-2"
          label="Remember me"
      />
      </Col>
      <Col xs="auto">
      <Button type="submit" className="mb-2">
          Submit
      </Button>
      </Col>
  </Row>
  </Form>
  <span className="fw-semibold mb-1 text-muted">You can then remix that once again with size-specific column
      classes.</span>
  <Form className="row gx-3 gy-2 align-items-center mt-0">
      <Col sm={3} className="">
          <label className="visually-hidden"
              htmlFor="specificSizeInputName">Name</label>
          <Form.Control type="text" className="form-control" id="specificSizeInputName"
              placeholder="Jane Doe"/>
      </Col>
      <Col sm={3} className="">
          <label className="visually-hidden"
              htmlFor="specificSizeInputGroupUsername">Username</label>
          <InputGroup>
              <InputGroup.Text className="input-group-text">@</InputGroup.Text>
              <Form.Control type="text" className="form-control"
                  id="specificSizeInputGroupUsername" placeholder="Username"/>
          </InputGroup>
      </Col>
      <Col sm={3} className="">
          <label className="visually-hidden"
              htmlFor="specificSizeSelect">Preference</label>
          <Form.Select className="form-select" id="specificSizeSelect">
              <option >Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
          </Form.Select>
      </Col>
      <div className="col-auto">
      <Form.Check
          type="checkbox"
          id="autoSizingCheck"
          className="mb-2"
          label="Remember me"
      />
      </div>
      <div className="col-auto">
          <Button type="submit" className="btn btn-primary">Submit</Button>
      </div>
  </Form>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Form grid
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen10(!open10)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open10}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col md={6} className="mb-3">
                                    <Form.Label className="">First Name</Form.Label>
                                    <Form.Control type="text" className="form-control" placeholder="First name"
                                        aria-label="First name" />
                                </Col>
                                <Col md={6} className="mb-3">
                                    <Form.Label className="">Last Name</Form.Label>
                                    <Form.Control type="text" className="form-control" placeholder="Last name"
                                        aria-label="Last name" />
                                </Col>
                                <Col md={6} className="mb-3">
                                    <Form.Label className="">Address</Form.Label>
                                    <Row>
                                        <Col xl={12} className="mb-3">
                                            <Form.Control type="text" className="" placeholder="Street"
                                                aria-label="Street" />
                                        </Col>
                                        <Col xl={12} className="mb-3">
                                            <Form.Control type="text" className="" placeholder="Landmark"
                                                aria-label="Landmark" />
                                        </Col>
                                        <Col xxl={6} xl={12} className="mb-3">
                                            <Form.Control type="text" className="" placeholder="City"
                                                aria-label="City" />
                                        </Col>
                                        <Col xxl={6} xl={12} className="mb-3">
                                            <Form.Select id="inputState1" className="form-select">
                                                <option>State</option>
                                                <option>...</option>
                                            </Form.Select>
                                        </Col>
                                        <Col xxl={6} xl={12} className="mb-3">
                                            <Form.Control type="text" className="" placeholder="Postal/Zip code"
                                                aria-label="Postal/Zip code" />
                                        </Col>
                                        <Col xxl={6} xl={12} className="mb-3">
                                            <Form.Select id="inputCountry" className="form-select">
                                                <option>Country</option>
                                                <option>...</option>
                                            </Form.Select>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={6} className="mb-3">
                                    <Row>
                                        <Col xl={12} className="mb-3">
                                            <Form.Label className="">Email</Form.Label>
                                            <Form.Control type="email" className="" placeholder="Email"
                                                aria-label="email" />
                                        </Col>
                                        <Col xl={12} className="mb-3">
                                            <Form.Label className="">D.O.B</Form.Label>
                                            <Form.Control type="date" className=""
                                                aria-label="dateofbirth" />
                                        </Col>
                                        <Col xl={12} className="mb-3">
                                            <Row>
                                                <Form.Label className=" mb-1">Maritial Status</Form.Label>
                                                <Col xl={6}>
                                                    <Form.Check name="example-radios" type="radio" label="Married" />
                                                </Col>
                                                <Col xl={6}>
                                                    <Form.Check name="example-radios" type="radio" label="Single" />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col xl={12}>

                                        </Col>
                                    </Row>
                                </Col>
                                <Col md={6} className="mb-3">
                                    <Form.Label className="">Contact Number</Form.Label>
                                    <Form.Control type="number" className="" placeholder="Phone number"
                                        aria-label="Phone number" />
                                </Col>
                                <Col md={6} className="mb-3">
                                    <Form.Label className="">Alternative Contact</Form.Label>
                                    <Form.Control type="number" className="" placeholder="Phone number"
                                        aria-label="Phone number" />
                                </Col>
                                <Col md={12} className="">
                                    <Form.Check className='mb-3' type="checkbox" label="Check me out" />
                                </Col>
                                <Col md={12}>
                                    <Button type="submit" variant='primary' className="">Sign in</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                            <Collapse in={open10} className="card-body"><pre><code>{`
<Row>
<Col md={6} className="mb-3">
    <Form.Label className="">First Name</Form.Label>
    <Form.Control type="text" className="form-control" placeholder="First name"
        aria-label="First name"/>
</Col>
<Col md={6} className="mb-3">
    <Form.Label className="">Last Name</Form.Label>
    <Form.Control type="text" className="form-control" placeholder="Last name"
        aria-label="Last name"/>
</Col>
<Col md={6} className="mb-3">
    <Form.Label className="">Address</Form.Label>
    <Row>
        <Col xl={12}  className="mb-3">
            <Form.Control type="text" className="" placeholder="Street"
            aria-label="Street"/>
        </Col>
        <Col xl={12}  className="mb-3">
            <Form.Control type="text" className="" placeholder="Landmark"
            aria-label="Landmark"/>
        </Col>
        <Col xxl={6}  xl={12} className="mb-3">
            <Form.Control type="text" className="" placeholder="City"
            aria-label="City"/>
        </Col>
        <Col xxl={6}  xl={12} className="mb-3">
            <Form.Select id="inputState1" className="form-select">
                <option>State</option>
                <option>...</option>
            </Form.Select>
        </Col>
        <Col xxl={6}  xl={12} className="mb-3">
            <Form.Control type="text" className="" placeholder="Postal/Zip code"
            aria-label="Postal/Zip code"/>
        </Col>
        <Col xxl={6}  xl={12} className="mb-3">
            <Form.Select id="inputCountry" className="form-select">
                <option>Country</option>
                <option>...</option>
            </Form.Select>
        </Col>
    </Row>
</Col>
<Col md={6} className="mb-3">
    <Row>
        <Col xl={12}  className="mb-3">
            <Form.Label className="">Email</Form.Label>
            <Form.Control type="email" className="" placeholder="Email"
            aria-label="email"/>
        </Col>
        <Col xl={12}  className="mb-3">
            <Form.Label className="">D.O.B</Form.Label>
            <Form.Control type="date" className=""
            aria-label="dateofbirth"/>
        </Col>
        <Col xl={12}  className="mb-3">
            <Row>
                <Form.Label className=" mb-1">Maritial Status</Form.Label>
                <Col xl={6}>
                    <Form.Check type="checkbox" label="Married" />
                </Col>
                <Col xl={6}>
                    <Form.Check type="checkbox" label="Single" />
                </Col>
            </Row>
        </Col>
        <Col xl={12}>

        </Col>
    </Row>
</Col>
<Col md={6} className="mb-3">
    <Form.Label className="">Contact Number</Form.Label>
    <Form.Control type="number" className="" placeholder="Phone number"
        aria-label="Phone number"/>
</Col>
<Col md={6} className="mb-3">
    <Form.Label className="">Alternative Contact</Form.Label>
    <Form.Control type="number" className="" placeholder="Phone number"
        aria-label="Phone number"/>
</Col>
<Col md={12} className="">
    <Form.Check className='mb-3' type="checkbox" label="Check me out" />
</Col>
<Col md={12}>
    <Button type="submit" variant='primary' className="">Sign in</Button>
</Col>
</Row>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className=" justify-content-between">
                            <Card.Title>
                                Gutters
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen11(!open11)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open11}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form className="row g-3 mt-0">
                                <Col md={6}>
                                    <Form.Label className="">First Name</Form.Label>
                                    <Form.Control type="text" className="" placeholder="First name"
                                        aria-label="First name" />
                                </Col>
                                <Col md={6}>
                                    <Form.Label className="">Last Name</Form.Label>
                                    <Form.Control type="text" className="" placeholder="Last name"
                                        aria-label="Last name" />
                                </Col>
                                <Col md={6}>
                                    <Form.Label htmlFor="inputEmail4" className="">Email</Form.Label>
                                    <Form.Control type="email" className="" id="inputEmail4" />
                                </Col>
                                <Col md={6}>
                                    <Form.Label htmlFor="inputPassword4" className="">Password</Form.Label>
                                    <Form.Control type="password" className="" id="inputPassword4" />
                                </Col>
                                <div className="col-12">
                                    <Form.Label htmlFor="inputAddress" className="">Address</Form.Label>
                                    <Form.Control type="text" className="" id="inputAddress"
                                        placeholder="1234 Main St" />
                                </div>
                                <div className="col-12">
                                    <Form.Label htmlFor="inputAddress2" className="">Address 2</Form.Label>
                                    <Form.Control type="text" className="" id="inputAddress2"
                                        placeholder="Apartment, studio, or floor" />
                                </div>
                                <Col md={6}>
                                    <Form.Label htmlFor="inputCity" className="">City</Form.Label>
                                    <Form.Control type="text" className="" id="inputCity" />
                                </Col>
                                <Col md={4}>
                                    <Form.Label htmlFor="inputState" className="">State</Form.Label>
                                    <Form.Select id="inputState" className="form-select-lg">
                                        <option>Choose...</option>
                                        <option>...</option>
                                    </Form.Select>
                                </Col>
                                <Col md={2}>
                                    <Form.Label htmlFor="inputZip" className="">Zip</Form.Label>
                                    <Form.Control type="text" className="form-control" id="inputZip" />
                                </Col>
                                <div className="col-12">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </div>
                                <div className="col-12">
                                    <Button variant='primary' type="submit" className="">Sign in</Button>
                                </div>
                            </Form>
                        </Card.Body>
                            <Collapse in={open11} className="card-body"><pre><code>{`
  <Form className="row g-3 mt-0">
  <Col md={6}>
      <Form.Label className="">First Name</Form.Label>
      <Form.Control type="text" className="" placeholder="First name"
          aria-label="First name"/>
  </Col>
  <Col md={6}>
      <Form.Label className="">Last Name</Form.Label>
      <Form.Control type="text" className="" placeholder="Last name"
          aria-label="Last name"/>
  </Col>
  <Col md={6}>
      <Form.Label htmlFor="inputEmail4" className="">Email</Form.Label>
      <Form.Control type="email" className="" id="inputEmail4"/>
  </Col>
  <Col md={6}>
      <Form.Label htmlFor="inputPassword4" className="">Password</Form.Label>
      <Form.Control type="password" className="" id="inputPassword4"/>
  </Col>
  <div className="col-12">
      <Form.Label htmlFor="inputAddress" className="">Address</Form.Label>
      <Form.Control type="text" className="" id="inputAddress"
          placeholder="1234 Main St"/>
  </div>
  <div className="col-12">
      <Form.Label htmlFor="inputAddress2" className="">Address 2</Form.Label>
      <Form.Control type="text" className="" id="inputAddress2"
          placeholder="Apartment, studio, or floor"/>
  </div>
  <Col md={6}>
      <Form.Label htmlFor="inputCity" className="">City</Form.Label>
      <Form.Control type="text" className="" id="inputCity"/>
  </Col>
  <Col md={4}>
      <Form.Label htmlFor="inputState" className="">State</Form.Label>
      <Form.Select id="inputState" className="form-select-lg">
          <option>Choose...</option>
          <option>...</option>
      </Form.Select>
  </Col>
  <Col md={2}>
      <Form.Label htmlFor="inputZip" className="">Zip</Form.Label>
      <Form.Control type="text" className="form-control" id="inputZip"/>
  </Col>
  <div className="col-12">
      <Form.Check type="checkbox" label="Check me out" />
  </div>
  <div className="col-12">
      <Button variant='primary' type="submit" className="">Sign in</Button>
  </div>
</Form>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Formlayouts;
