import { FC, Fragment, useState } from 'react';
import { Alert, Button, Card, Col, Collapse, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import { Defaultalerts, Defaultsolidalerts, Linkalerts, Outlinealerts, Roundedefaultalerts, Roundedoutlinealerts, Roundedsolidalerts, Roundewithbtnalerts, Shadowsolidalerts, Solidalerts, Additionalcontentalerts, Imagealerts, avatarsizealert, Svgalert, Svgalert1, Customizedalert1 } from './alertsdata';

interface AlertsProps { }

const Alerts: FC<AlertsProps> = () => {

    //collapse1
    const [open1, setOpen1] = useState(false);
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

    const [show, setShow] = useState<any>(true);
    const toggleShow = () => setShow(!show);

    const [show1, setShow1] = useState(true);
    const toggleShow1 = () => setShow1(!show1);

    const [show2, setShow2] = useState(true);
    const toggleShow2 = () => setShow2(!show2);

    const [show3, setShow3] = useState(true);
    const toggleShow3 = () => setShow3(!show3);

    const [show4, setShow4] = useState(true);
    const toggleShow4 = () => setShow4(!show4);

    //solidalertsremovefn
    const [solidalert, setSolidalert] = useState<any>(Solidalerts);
    const handleRemove = (id: any) => {
        const newList = solidalert.filter((list: any) => list.id !== id);
        setSolidalert(newList);
    };
    //outline
    const [outlinealert, setOutlinealert] = useState<any>(Outlinealerts);
    const handleRemove1 = (id: any) => {
        const newList = outlinealert.filter((list: any) => list.id !== id);
        setOutlinealert(newList);
    };

    //outline
    const [shadowsolidalert, setShadowsolidalert] = useState<any>(Shadowsolidalerts);
    const handleRemove2 = (id: any) => {
        const newList = shadowsolidalert.filter((list: any) => list.id !== id);
        setShadowsolidalert(newList);
    };
    //roundedsolid
    const [roundedsolidalert, setRoundedsolidalert] = useState<any>(Roundedsolidalerts);
    const handleRemove3 = (id: any) => {
        const newList = roundedsolidalert.filter((list: any) => list.id !== id);
        setRoundedsolidalert(newList);
    };
    //roundedoutline
    const [roundedoutlinealert, setRoundedOutlinealert] = useState<any>(Roundedoutlinealerts);
    const handleRemove4 = (id: any) => {
        const newList = roundedoutlinealert.filter((list: any) => list.id !== id);
        setRoundedOutlinealert(newList);
    };
    //roundeddefault
    const [roundeddefaultalert, setRoundedDefaultalert] = useState<any>(Roundedefaultalerts);
    const handleRemove5 = (id: any) => {
        const newList = roundeddefaultalert.filter((list: any) => list.id !== id);
        setRoundedDefaultalert(newList);
    };
    //roundedwithbtn
    const [roundedwithbtnalert, setRoundedwithbtnalert] = useState<any>(Roundewithbtnalerts);
    const handleRemove6 = (id: any) => {
        const newList = roundedwithbtnalert.filter((list: any) => list.id !== id);
        setRoundedwithbtnalert(newList);
    };
    //additionalcontent
    const [additionalcontentalert, setadditionalcontentalert] = useState<any>(Additionalcontentalerts);
    const handleRemove7 = (id: any) => {
        const newList = additionalcontentalert.filter((list: any) => list.id !== id);
        setadditionalcontentalert(newList);
    };
    //images
    const [imagesalert, setimagesalert] = useState<any>(Imagealerts);
    const handleRemove8 = (id: any) => {
        const newList = imagesalert.filter((list: any) => list.id !== id);
        setimagesalert(newList);
    };
    //avatar
    const [avataralert, setavataralert] = useState<any>(avatarsizealert);
    const handleRemove9 = (id: any) => {
        const newList = avataralert.filter((list: any) => list.id !== id);
        setavataralert(newList);
    };
    //svg
    const [svgalert, setsvgalert] = useState<any>(Svgalert);
    const handleRemove10 = (id: any) => {
        const newList = svgalert.filter((list: any) => list.id !== id);
        setsvgalert(newList);
    };
    //svg1
    const [svg1alert, setsvg1alert] = useState<any>(Svgalert1);
    const handleRemove11 = (id: any) => {
        const newList = svg1alert.filter((list: any) => list.id !== id);
        setsvg1alert(newList);
    };
    //svg1
    const [customized1alert, setcustomized1alert] = useState<any>(Customizedalert1);
    const handleRemove12 = (id: any) => {
        const newList = customized1alert.filter((list: any) => list.id !== id);
        setcustomized1alert(newList);
    };
    return (
        <Fragment>
            <Pageheader title="Alerts" heading="Ui Elements" active="Alerts" />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Basic Alert
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code
                                    <i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Alert variant='warning' className="alert alert-warning alert-dismissible fade show" role="alert" show={show} onClick={toggleShow}>
                                <strong>Holy guacamole!</strong> You should check in on some of those fields
                                below.
                                <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert"
                                    aria-label="Close"><i className="bi bi-x"></i></Button>
                            </Alert>
                        </Card.Body>
                            <Collapse in={open1} className="card-body"><pre><code>{`
<Alert variant='warning' className="alert alert-warning alert-dismissible fade show" role="alert" show={show} 
     onClick={toggleShow}><strong>Holy guacamole!</strong> You should check in on some of those fields below.
<Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
      <i className="bi bi-x"></i></Button>
</Alert>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Default alerts
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen3(!open3)} variant='primary-light' aria-controls="example-collapse-text" aria-expanded={open3} className="btn-sm">Show Code
                                    <i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {Defaultalerts.map((idx, alt1) => (
                                <Alert variant={idx.class} className="alert" role="alert" key={alt1}>
                                    {idx.text}
                                </Alert>
                            ))}
                        </Card.Body>
                            <Collapse in={open3} className="card-body"><pre><code>{`{Defaultalerts.map((idx, alt1)=>(                                                                       
<Alert variant={idx.class} className="alert" role="alert" key={alt1}>
   {idx.text}
</Alert>
))}`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Links in alerts
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen4(!open4)} variant='primary-light' className="btn-sm" aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {Linkalerts.map((idx, alt2) => (
                                <Alert variant={idx.class} className="alert" role="alert" key={alt2}>
                                    {idx.text1} <Link to="#" className="alert-link">{idx.text2}</Link>.{idx.text3} </Alert>
                            ))}
                        </Card.Body>
                        <Collapse in={open4} className="card-body"><pre><code>{`
 {Linkalerts.map((idx, alt2)=>(                                   
<Alert variant={idx.class} className="alert" role="alert" key={alt2}>
{idx.text1} <Link to="#" className="alert-link">{idx.text2}</Link>.{idx.text3} </Alert>
))}`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Solid Colored Alerts
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen5(!open5)} variant='primary-light' className="btn-sm" aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {solidalert.map((idx: any, alt3: any) => (
                                <Alert variant={idx.class} className="alert alert-dismissible fade show" key={alt3}>
                                    {idx.text}
                                    <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                                        onClick={() => handleRemove(idx.id)}><i className="bi bi-x"></i></Button>
                                </Alert>
                            ))}
                        </Card.Body>
                        <Collapse in={open5} className="card-body"><pre><code>{`
 {solidalert.map((idx:any ,alt3:any)=>(
    <Alert variant={idx.class} className="alert alert-dismissible fade show" key={alt3}>
       {idx.text}
        <Button variant=''  type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" 
         onClick={() => handleRemove(idx.id)}><i className="bi bi-x"></i></Button>
    </Alert> 
    ))}`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                rounded Alerts
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen6(!open6)} variant='primary-light' className="btn-sm" aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {outlinealert.map((idx: any, alt4: any) => (
                                <Alert variant={idx.class} className="alert alert- alert-dismissible fade show" key={alt4}>
                                    {idx.text}
                                    <Button variant='' type="button" className="btn-close"
                                        onClick={() => handleRemove1(idx.id)} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></Button>
                                </Alert>
                            ))}
                        </Card.Body>
                        <Collapse in={open6} className="card-body"><pre><code>{`
  {outlinealert.map((idx:any, alt4:any)=>(
    <Alert variant={idx.class} className="alert alert- alert-dismissible fade show" key={alt4}>
       {idx.text}
        <Button variant='' type="button" className="btn-close"
        onClick={() => handleRemove1(idx.id)} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></Button>
    </Alert>
    ))}`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Solid Alerts With Different Shadows
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen7(!open7)} variant='primary-light' className="btn-sm" aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {shadowsolidalert.map((idx: any, alt5: any) => (
                                <Alert variant={idx.class} className={`alert shadow-${idx.size} alert-dismissible fade show`} key={alt5}>
                                    {idx.text}
                                    <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert"
                                        onClick={() => handleRemove2(idx.id)}
                                        aria-label="Close"><i className="bi bi-x"></i></Button>
                                </Alert>
                            ))}
                        </Card.Body>
                        <Collapse in={open7} className="card-body"><pre><code>{`<Alert variant='solid-primary' className="alert shadow alert-dismissible fade show">
A simple solid primary alert with normal shadow—check it out!
<Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></Button>
</Alert>
<Alert variant='solid-primary' className="alert shadow-lg alert-dismissible fade show">
A simple solid primary alert with large shadow—check it out!
<Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></Button>
</Alert>`}</code></pre></Collapse> 
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Default Alerts With Different Shadows
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen8(!open8)} variant='primary-light' className="btn-sm" aria-controls="example-collapse-text" aria-expanded={open8}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {Defaultsolidalerts.map((idx, alt6) => (
                                <Alert variant={idx.class} className={`alert shadow-${idx.size}`} key={alt6}>A simple primary alert with small shadow—check it out!</Alert>
                            ))}
                        </Card.Body>
                        <Collapse in={open8} className="card-body"><pre><code>{`<Alert variant='primary' className="alert shadow">A simple primary alert with normal shadow—check it out!</Alert>
<Alert variant='primary' className="alert shadow-lg">A simple primary alert with large shadow—check it out!</Alert>
<Alert variant='secondary' className="alert shadow-sm">A simple secondary alert with small shadow—check it out!</Alert>
<Alert variant='secondary' className="alert shadow">A simple secondary alert with normal shadow—check it out!</Alert>
<Alert variant='secondary' className="alert shadow-lg">A simple secondary alert with large shadow—check it out!</Alert>`}</code></pre></Collapse>
                       
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Rounded Solid Alerts
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen9(!open9)} variant='primary-light' className="btn-sm" aria-controls="example-collapse-text" aria-expanded={open9}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {roundedsolidalert.map((idx: any, alt7: any) => (
                                <Alert variant={idx.class} className="alert  rounded-pill alert-dismissible fade show" key={alt7}>
                                    {idx.text}
                                    <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                                        onClick={() => handleRemove3(idx.id)}>
                                        <i className="bi bi-x"></i></Button>
                                </Alert>
                            ))}
                        </Card.Body>
                        <Collapse in={open9} className="card-body"><pre><code>{`{roundedsolidalert.map((idx:any,alt7:any)=>(
<Alert variant={idx.class} className="alert  rounded-pill alert-dismissible fade show" key={alt7}>
   {idx.text}
    <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
     onClick={() => handleRemove3(idx.id)}>
        <i className="bi bi-x"></i></Button>
</Alert>
))}`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Rounded Outline Alerts
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen10(!open10)} variant='primary-light' className="btn-sm" aria-controls="example-collapse-text" aria-expanded={open10}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {roundedoutlinealert.map((idx: any) => (
                                <Alert variant={idx.class} className="alert rounded-pill alert-dismissible fade show" key={Math.random()}>
                                    {idx.text}
                                    <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                                        onClick={() => handleRemove4(idx.id)}><i className="bi bi-x"></i></Button>
                                </Alert>
                            ))}
                        </Card.Body>
                        <Collapse in={open10} className="card-body"><pre><code>{` {roundedoutlinealert.map((idx:any)=>(
<Alert variant={idx.class} className="alert rounded-pill alert-dismissible fade show" key={Math.random()}>
 {idx.text}
 <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
  onClick={() => handleRemove4(idx.id)}><i className="bi bi-x"></i></Button>
</Alert>
)}`}</code></pre></Collapse>
                      
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Rounded Default Alerts
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen11(!open11)} variant='primary-light' className="btn-sm" aria-controls="example-collapse-text" aria-expanded={open11}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {roundeddefaultalert.map((idx: any) => (
                                <Alert variant={idx.class} className="alert rounded-pill alert-dismissible fade show" key={Math.random()}>
                                    {idx.text}
                                    <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
                                        onClick={() => handleRemove5(idx.id)}
                                    ><i className="bi bi-x"></i></Button>
                                </Alert>
                            ))}
                        </Card.Body>
                        <Collapse in={open11} className="card-body"><pre><code>{` {roundeddefaultalert.map((idx:any)=>(
<Alert variant={idx.class} className="alert rounded-pill alert-dismissible fade show" key={Math.random()}>
   {idx.text}
    <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"
    onClick={() => handleRemove5(idx.id)}
    ><i className="bi bi-x"></i></Button>
</Alert>
))}`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Rounded Alerts With Custom Close Button
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen12(!open12)} variant='primary-light' className="btn-sm" aria-controls="example-collapse-text" aria-expanded={open12}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {roundedwithbtnalert.map((idx: any) => (
                                <Alert variant={idx.class} className="alert rounded-pill alert-dismissible fade show" key={Math.random()}>
                                    {idx.text}
                                    <Button variant='' type="button" className="btn-close custom-close" data-bs-dismiss="alert" aria-label="Close"
                                        onClick={() => handleRemove6(idx.id)}>
                                        <i className="bi bi-x"></i></Button>
                                </Alert>
                            ))}
                        </Card.Body>
                        <Collapse in={open12} className="card-body"><pre><code>{`{roundedwithbtnalert.map((idx:any)=>(
<Alert variant={idx.class} className="alert rounded-pill alert-dismissible fade show"key={Math.random()}>
    {idx.text}
    <Button variant='' type="button" className="btn-close custom-close" data-bs-dismiss="alert" aria-label="Close"
     onClick={() => handleRemove6(idx.id)}>
        <i className="bi bi-x"></i></Button>
</Alert>
))}`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Alerts with icons
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen13(!open13)} variant='primary-light' className="btn-sm" aria-controls="example-collapse-text" aria-expanded={open13}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Alert variant='primary' className="alert d-flex align-items-center" role="alert">
                                <svg className="flex-shrink-0 me-2 svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                                <div>
                                    An example alert with an icon
                                </div>
                            </Alert>
                            <Alert variant='success' className="alert  d-flex align-items-center" role="alert">
                                <svg className="flex-shrink-0 me-2 svg-success" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" /><path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" /></svg>
                                <div>
                                    An example success alert with an icon
                                </div>
                            </Alert>
                            <Alert variant='warning' className="alert  d-flex align-items-center" role="alert">
                                <svg className="flex-shrink-0 me-2 svg-warning" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" /><polygon points="13,16 11,16 11,18 13,18" /><polygon points="13,10 11,10 11,15 13,15" /></g></g></g></svg>
                                <div>
                                    An example warning alert with an icon
                                </div>
                            </Alert>
                            <Alert variant='danger' className="alert  d-flex align-items-center" role="alert">
                                <svg className="flex-shrink-0 me-2 svg-danger" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><g><path d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" /><rect height="6" width="2" x="11" y="7" /><rect height="2" width="2" x="11" y="15" /></g></g></g></svg>
                                <div>
                                    An example danger alert with an icon
                                </div>
                            </Alert>
                        </Card.Body>
                        <Collapse in={open13} className="card-body"><pre><code>{`<Alert variant='primary' className="alert d-flex align-items-center" role="alert">
<svg className="flex-shrink-0 me-2 svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>
<div>
    An example alert with an icon
</div>
</Alert>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Customized Alerts With SVG's
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen14(!open14)} variant='primary-light' className="btn-sm" aria-controls="example-collapse-text" aria-expanded={open14}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {customized1alert.map((idx: any) => (
                                <Alert variant={idx.color} className="alert alert-dismissible fade show custom-alert-icon shadow-sm" role="alert" key={Math.random()}>
                                    <svg className={`me-2 svg-${idx.color}`} xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                        <path d="M0 0h24v24H0z" fill="none" /><path d={idx.class1} /></svg>
                                    A customized {idx.color} alert with an icon
                                    <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleRemove12(idx.id)}><i className="bi bi-x"></i></Button>
                                </Alert>
                            ))}
                        </Card.Body><Collapse in={open14} className="card-body"><pre><code>{` <Alert variant='primary' className="alert alert-dismissible fade show custom-alert-icon shadow-sm" role="alert">
 <svg className="me-2 svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
 A customized primary alert with an icon
 <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></Button>
</Alert>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Alerts With Images
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen15(!open15)} variant='primary-light' className="btn-sm" aria-controls="example-collapse-text" aria-expanded={open15}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {imagesalert.map((idx: any) => (
                                <Alert variant={idx.color} className="alert alert-img alert-dismissible fase show rounded-pill flex-wrap" role="alert" key={Math.random()}>
                                    <div className="avatar avatar-sm me-3 avatar-rounded">
                                        <img src={idx.src1} alt="img" />
                                    </div>
                                    <div>A simple {idx.color} alert with image—check it out!</div>
                                    <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleRemove8(idx.id)}
                                    ><i className="bi bi-x"></i></Button>
                                </Alert>
                            ))}
                        </Card.Body>
                        <Collapse in={open15} className="card-body"><pre><code>{` {imagesalert.map((idx:any)=>(
<Alert variant={idx.color} className="alert alert-img alert-dismissible fase show rounded-pill flex-wrap" role="alert" key={Math.random()}>
    <div className="avatar avatar-sm me-3 avatar-rounded">
        <img src={idx.src1} alt="img"/>
    </div>
    <div>A simple {idx.color} alert with image—check it out!</div>
    <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleRemove8(idx.id)}
    ><i className="bi bi-x"></i></Button>
</Alert>
))}`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Alerts With Different size Images
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen16(!open16)} variant='primary-light' className="btn-sm" aria-controls="example-collapse-text" aria-expanded={open16}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            {avataralert.map((idx: any) => (
                                <Alert variant={idx.color} className="alert alert-img alert-dismissible fase show flex-wrap" role="alert" key={Math.random()}>
                                    <div className={`avatar avatar-${idx.class} me-3`}>
                                        <img src={idx.src1} alt="img" />
                                    </div>
                                    <div>A simple {idx.color} alert with image—check it out!</div>
                                    <Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleRemove9(idx.id)}><i className="bi bi-x"></i></Button>
                                </Alert>
                            ))}
                        </Card.Body>
                        <Collapse in={open16} className="card-body"><pre><code>{`<Alert variant='primary' className="alert alert-img alert-dismissible fase show flex-wrap" role="alert">
<div className="avatar avatar-xs me-3">
    <img src={face1} alt="img"/>
</div>
<div>A simple primary alert with image—check it out!</div>
<Button variant='' type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></Button>
</Alert>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={12}>
                    <Row>
                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                            <div className="card bg-white border-0">
                                <Alert variant='primary' className="alert custom-alert1"  show={show1}>
                                    <Button variant='' type="button" className="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"  onClick={toggleShow1} ><i className="bi bi-x"></i></Button>
                                    <div className="text-center px-5 pb-0">
                                        <svg className="custom-alert-icon svg-primary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                            <path d="M0 0h24v24H0z" fill="none" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" /></svg>
                                        <h5>Information?</h5>
                                        <p className="">This alert is created to just show the related information.</p>
                                        <div className="">
                                            <Button variant='outline-danger' className="btn btn-sm btn-outline-danger m-1">Decline</Button>
                                            <Button variant='primary' className="btn btn-sm btn-primary m-1">Accept</Button>
                                        </div>
                                    </div>
                                </Alert>
                            </div>
                        </Col>
                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                            <Card className=" bg-white border-0">
                                <Alert variant='secondary' className="alert custom-alert1 " show={show2} >
                                    <Button variant='' type="button" className="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close" onClick={toggleShow2}><i className="bi bi-x"></i></Button>
                                    <div className="text-center px-5 pb-0">
                                        <svg className="custom-alert-icon svg-secondary" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                            <path d="M0 0h24v24H0z" fill="none" /><path
                                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" /></svg>
                                        <h5>Confirmed</h5>
                                        <p className="">This alert is created to just show the confirmation message.</p>
                                        <div className="">
                                            <Button className="btn btn-sm btn-secondary m-1">Close</Button>
                                        </div>
                                    </div>
                                </Alert>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                            <Card className="bg-white border-0">
                                <Alert variant='warning' className="alert custom-alert1 " show={show3} >
                                    <Button variant='' type="button" className="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close" onClick={toggleShow3}><i className="bi bi-x"></i></Button>
                                    <div className="text-center px-5 pb-0">
                                        <svg className="custom-alert-icon svg-warning" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                            <path d="M0 0h24v24H0z" fill="none" /><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" /></svg>
                                        <h5>Warning</h5>
                                        <p className="">This alert is created to just show the warning message.</p>
                                        <div className="">
                                            <Button variant='outline-secondary' className="btn btn-sm btn-outline-secondary m-1">Back</Button>
                                            <Button className="btn btn-sm btn-warning m-1">Continue</Button>
                                        </div>
                                    </div>
                                </Alert>
                            </Card>
                        </Col>
                        <Col xxl={3} xl={6} lg={6} md={6} sm={6} className="col-12">
                            <Card className="bg-white border-0">
                                <Alert variant='danger' className="alert custom-alert1 " show={show4} >
                                    <Button variant='' type="button" className="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close" onClick={toggleShow4}><i className="bi bi-x"></i></Button>
                                    <div className="text-center px-5 pb-0">
                                        <svg className="custom-alert-icon svg-danger" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                            <path d="M0 0h24v24H0z" fill="none" /><path

                                                d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z" /></svg>
                                        <h5>danger</h5>
                                        <p className="">This alert is created to just show the danger message.</p>
                                        <div className="">
                                            <Button className="btn btn-sm btn-danger m-1">Delete</Button>
                                        </div>
                                    </div>
                                </Alert>
                            </Card>
                        </Col>
                    </Row>
                </Col>

                <Col xl={12}>
                    <Row>
                        {svgalert.map((idx: any) => (
                            <Col xl={3} key={Math.random()}>
                                <Card className=" border-0">
                                    <Alert variant={idx.color} className={`alert  border border-${idx.color} mb-0 p-2"`}>
                                        <div className="d-flex align-items-start">
                                            <div className="me-2">
                                                <svg className={`flex-shrink-0 svg-${idx.color}`} xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" />
                                                    <path d={idx.class1} /></svg>
                                            </div>
                                            <div className={`text-${idx.color} w-100`}>
                                                <div className="fw-semibold d-flex justify-content-between">{idx.text1}
                                                    <Button type="button" variant='' className="btn-close p-0" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleRemove10(idx.id)}><i className="bi bi-x"></i></Button></div>
                                                <div className="fs-12 op-8 mb-1">{idx.text2}</div>
                                                <div className="fs-12">
                                                    <Link to="#" className={`text-${idx.class} fw-semibold me-2 d-inline-block`}>{idx.btn1}</Link>
                                                    <Link to="#" className={`text-${idx.color} fw-semibold`}>{idx.btn2}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Alert>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xl={12}>
                    <Row>
                        {svg1alert.map((idx: any) => (
                            <Col xl={3} key={Math.random()}>
                                <Card className="border-0">
                                    <Alert variant={`solid-${idx.color}`} className={`alert  border border-${idx.color} mb-0 p-2`}>
                                        <div className="d-flex align-items-start">
                                            <div className="me-2">
                                                <svg className="flex-shrink-0 svg-white" xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" />
                                                    <path d={idx.class1} /></svg>
                                            </div>
                                            <div className="text-fixed-white w-100">
                                                <div className="fw-semibold d-flex justify-content-between">{idx.text1}<Button type="button" variant='' className="btn-close p-0" data-bs-dismiss="alert" aria-label="Close" onClick={() => handleRemove11(idx.id)}><i className="bi bi-x"></i></Button></div>
                                                <div className="fs-12 op-8 mb-1">{idx.text2}</div>
                                                <div className="fs-12">
                                                    <Link to="#" className="text-fixed-white fw-semibold me-2 op-7">{idx.btn1}</Link>
                                                    <Link to="#" className="text-fixed-white fw-semibold">{idx.btn2}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </Alert>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>

                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Additional content
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen17(!open17)} variant='primary-light' className="btn-sm" aria-controls="example-collapse-text" aria-expanded={open17}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-3">
                                {additionalcontentalert.map((idx: any) => (
                                    <Col xl={6} key={Math.random()}>
                                        <Alert variant={idx.class} className="alert  overflow-hidden p-0" role="alert">
                                            <div className={`p-3 bg-${idx.class} text-fixed-white d-flex justify-content-between`}>
                                                <h6 className="aletr-heading mb-0 text-fixed-white">{idx.text1}</h6>
                                                <Button type="button" variant='' className="btn-close p-0 text-fixed-white"
                                                    onClick={() => handleRemove7(idx.id)} data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></Button>
                                            </div>
                                            <hr className="my-0" />
                                            <div className="p-3">
                                                <p className="mb-0">{idx.text2}<Link to="#" className="fw-semibold text-decoration-underline">{idx.text3}</Link></p>
                                            </div>
                                        </Alert>
                                    </Col>
                                ))}
                            </div>
                        </Card.Body>
                            <Collapse in={open17} className="card-body"><pre><code>{`<Col xl={6}>
 <Alert variant='secondary' className="alert  overflow-hidden p-0" role="alert">
     <div className="p-3 bg-secondary text-fixed-white d-flex justify-content-between">
         <h6 className="aletr-heading mb-0 text-fixed-white">Thank you for reporting this.</h6>
         <Button type="button" variant='' className="btn-close p-0 text-fixed-white" data-bs-dismiss="alert" aria-label="Close"><i className="bi bi-x"></i></Button>
     </div>
     <hr className="my-0"/>
     <div className="p-3">
         <p className="mb-0">We appreciate you to let us know the bug in the template and for warning us about future consequences <Link to="#" className="fw-semibold text-decoration-underline">Visit for support for queries ?</Link></p>
     </div>
 </Alert>
</Col>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Alerts;
