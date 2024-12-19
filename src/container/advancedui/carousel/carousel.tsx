import { FC, Fragment, useState } from 'react';
import { Button, Card, Carousel, Col, Collapse, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import media26 from "../../../assets/images/media/media-26.jpg";
import media25 from "../../../assets/images/media/media-25.jpg";
import media27 from "../../../assets/images/media/media-27.jpg";
import media33 from "../../../assets/images/media/media-33.jpg";
import media28 from "../../../assets/images/media/media-28.jpg";
import media29 from "../../../assets/images/media/media-29.jpg";
import media30 from "../../../assets/images/media/media-30.jpg";
import media31 from "../../../assets/images/media/media-31.jpg";
import media32 from "../../../assets/images/media/media-32.jpg";
import media59 from "../../../assets/images/media/media-59.jpg";
import media60 from "../../../assets/images/media/media-60.jpg";
import media61 from "../../../assets/images/media/media-61.jpg";
import media62 from "../../../assets/images/media/media-62.jpg";
import media63 from "../../../assets/images/media/media-63.jpg";
import media64 from "../../../assets/images/media/media-64.jpg";
import media43 from "../../../assets/images/media/media-43.jpg";
import media44 from "../../../assets/images/media/media-44.jpg";
import media45 from "../../../assets/images/media/media-45.jpg";
import media13 from "../../../assets/images/media/media-13.jpg";
import media14 from "../../../assets/images/media/media-14.jpg";
import media18 from "../../../assets/images/media/media-18.jpg";
import media40 from "../../../assets/images/media/media-40.jpg";
import media41 from "../../../assets/images/media/media-41.jpg";
import media42 from "../../../assets/images/media/media-42.jpg";

interface CarouselsProps { }

const Carousels: FC<CarouselsProps> = () => {
    //collapse1
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    return (
        <Fragment>
            <Pageheader title="Carousel" heading="Advanced Ui" active="Carousel" />
            <Row>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Slides Only</Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Carousel id="carouselExampleSlidesOnly" className="carousel slide carousel-icons" indicators={false}>
                                <Carousel.Item className="active">
                                    <img src={media26} className="d-block w-100" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={media27} className="d-block w-100" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={media33} className="d-block w-100" alt="..." />
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                            <Collapse in={open1} className="card-body"><pre><code>{`<Carousel id="carouselExampleSlidesOnly" 
className="carousel slide" data-bs-ride="carousel" indicators={false}>                                   
<Carousel.Item className="active">
    <img src={media26} className="d-block w-100" alt="..."/>
</Carousel.Item>
<Carousel.Item>
    <img src={media27} className="d-block w-100" alt="..."/>
</Carousel.Item>
<Carousel.Item>
    <img src={media33} className="d-block w-100" alt="..."/>
</Carousel.Item>
</Carousel>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>With controls</Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen2(!open2)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open2}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Carousel id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" indicators={false}>
                                <Carousel.Item className="active">
                                    <img src={media28} className="d-block w-100" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item >
                                    <img src={media31} className="d-block w-100" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item >
                                    <img src={media32} className="d-block w-100" alt="..." />
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                            <Collapse in={open2} className="card-body"><pre><code>{`<Carousel id="carouselExampleControls"
className="carousel slide" data-bs-ride="carousel" indicators={false}>
     <Carousel.Item  className="active">
         <img src={media28} className="d-block w-100" alt="..."/>
     </Carousel.Item>
     <Carousel.Item >
         <img src={media31} className="d-block w-100" alt="..."/>
     </Carousel.Item>
     <Carousel.Item >
         <img src={media32} className="d-block w-100" alt="..."/>
     </Carousel.Item>
</Carousel>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>With indicators</Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen3(!open3)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open3}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Carousel id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                                <Carousel.Item className="active">
                                    <img src={media25} className="d-block w-100" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={media29} className="d-block w-100" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={media30} className="d-block w-100" alt="..." />
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                            <Collapse in={open3} className="card-body"><pre><code>{`<Carousel id="carouselExampleIndicators"
 className="carousel slide" data-bs-ride="carousel">
    <Carousel.Item className="active">
        <img src={media25} className="d-block w-100" alt="..."/>
    </Carousel.Item>
    <Carousel.Item>
        <img src={media29} className="d-block w-100" alt="..."/>
    </Carousel.Item>
    <Carousel.Item>
        <img src={media30} className="d-block w-100" alt="..."/>
    </Carousel.Item>
</Carousel>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>With captions</Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen4(!open4)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open4}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Carousel id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                                <Carousel.Item className="active">
                                    <img src={media59} className="d-block w-100" alt="..." />
                                    <Carousel.Caption className="d-none d-md-block">
                                        <h5 className='text-fixed-white'>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={media60} className="d-block w-100" alt="..." />
                                    <Carousel.Caption className="d-none d-md-block">
                                        <h5 className='text-fixed-white'>Second slide label</h5>
                                        <p>Some representative placeholder content for the second slide.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={media61} className="d-block w-100" alt="..." />
                                    <Carousel.Caption className="d-none d-md-block">
                                        <h5 className='text-fixed-white'>Third slide label</h5>
                                        <p>Some representative placeholder content for the third slide.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                            <Collapse in={open4} className="card-body"><pre><code>{`<Carousel  id="carouselExampleCaptions"
className="carousel slide" data-bs-ride="carousel">
<Carousel.Item className="active">
    <img src={media59} className="d-block w-100" alt="..."/>
    <Carousel.Caption className="d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
    </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <img src={media60} className="d-block w-100" alt="..."/>
    <Carousel.Caption className="d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
    </Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
    <img src={media61} className="d-block w-100" alt="..."/>
    <Carousel.Caption className="d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
    </Carousel.Caption>
</Carousel.Item>
</Carousel>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Crossfade</Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen5(!open5)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open5}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Carousel fade id="carouselExampleFade" className="carousel slide carousel-fade" indicators={false}>
                                <Carousel.Item className="active">
                                    <img src={media43} className="d-block w-100" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={media44} className="d-block w-100" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={media45} className="d-block w-100" alt="..." />
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                            <Collapse in={open5} className="card-body"><pre><code>{`<Carousel fade id="carouselExampleFade" 
className="carousel slide carousel-fade" indicators={false} >
    <Carousel.Item className="active">
        <img src={media43} className="d-block w-100" alt="..."/>
    </Carousel.Item>
    <Carousel.Item>
        <img src={media44} className="d-block w-100" alt="..."/>
    </Carousel.Item>
    <Carousel.Item>
        <img src={media45} className="d-block w-100" alt="..."/>
    </Carousel.Item>
</Carousel>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={4} lg={6} md={6} sm={12}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Individual .carousel-item interval</Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen6(!open6)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open6}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Carousel id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" indicators={false}>
                                <Carousel.Item interval={1000} className="active" >
                                    <img src={media40} className="d-block w-100" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img src={media41} className="d-block w-100" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item >
                                    <img src={media42} className="d-block w-100" alt="..." />
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                            <Collapse in={open6} className="card-body"><pre><code>{`<Carousel id="carouselExampleInterval" 
className="carousel slide" data-bs-ride="carousel" indicators={false}>
     <Carousel.Item interval={1000} className="active" >
         <img src={media40} className="d-block w-100" alt="..."/>
     </Carousel.Item>
     <Carousel.Item interval={2000}>
         <img src={media41} className="d-block w-100" alt="..."/>
     </Carousel.Item>
     <Carousel.Item >
         <img src={media42} className="d-block w-100" alt="..."/>
     </Carousel.Item>
 </Carousel>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Disable touch swiping</Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen7(!open7)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open7}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Carousel touch={false} id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" indicators={false}
                                data-bs-interval="false">
                                <Carousel.Item className="carousel-item active">
                                    <img src={media13} className="d-block w-100" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={media14} className="d-block w-100" alt="..." />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={media18} className="d-block w-100" alt="..." />
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                            <Collapse in={open7} className="card-body"><pre><code>{` <Carousel touch={false} id="carouselExampleControlsNoTouching"
className="carousel slide" data-bs-touch="false" indicators={false}
data-bs-interval="false">
    <Carousel.Item className="active">
        <img src={media13} className="d-block w-100" alt="..."/>
    </Carousel.Item>
    <Carousel.Item>
        <img src={media14} className="d-block w-100" alt="..."/>
    </Carousel.Item>
    <Carousel.Item>
        <img src={media18} className="d-block w-100" alt="..."/>
    </Carousel.Item>
</Carousel>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>Dark variant</Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen8(!open8)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open8}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Carousel id="carouselExampleDark" className="carousel slide">
                                <Carousel.Item className="active" data-bs-interval="10000">
                                    <img src={media63} className="d-block w-100"
                                        alt="..." />
                                    <Carousel.Caption className="d-none d-md-block">
                                        <h5 className='text-fixed-white'>First slide label</h5>
                                        <p className="op-7">Some representative placeholder content for the first slide.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item data-bs-interval="2000">
                                    <img src={media64} className="d-block w-100"
                                        alt="..." />
                                    <Carousel.Caption className="d-none d-md-block">
                                        <h5 className='text-fixed-white'>Second slide label</h5>
                                        <p className="op-7">Some representative placeholder content for the second slide.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={media62} className="d-block w-100"
                                        alt="..." />
                                    <Carousel.Caption className="d-none d-md-block">
                                        <h5 className='text-fixed-white'>Third slide label</h5>
                                        <p className="op-7">Some representative placeholder content for the third slide.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Card.Body>
                            <Collapse in={open8} className="card-body"><pre><code>{`<Carousel id="carouselExampleDark" className="carousel slide">
     <Carousel.Item className="active" data-bs-interval="10000">
         <img src={media63} className="d-block w-100"
             alt="..."/>
         <Carousel.Caption className="d-none d-md-block">
             <h5>First slide label</h5>
<p className="op-7">Some representative placeholder content 
for the first slide.</p>
         </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item data-bs-interval="2000">
         <img src={media64} className="d-block w-100"
             alt="..."/>
         <Carousel.Caption className="d-none d-md-block">
             <h5>Second slide label</h5>
 <p className="op-7">Some representative placeholder content
  for the second slide.</p>
         </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
         <img src={media62} className="d-block w-100"
             alt="..."/>
         <Carousel.Caption className="d-none d-md-block">
             <h5>Third slide label</h5>
<p className="op-7">Some representative placeholder content 
for the third slide.</p>
         </Carousel.Caption>
     </Carousel.Item>
 </Carousel>`}</code></pre></Collapse>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Carousels;
