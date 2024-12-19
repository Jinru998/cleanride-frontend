import  {  useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { Col, Row } from 'react-bootstrap';// gallery
import { Link } from 'react-router-dom';

import media1 from "../../../../assets/images/media/media-40.jpg";
import media2 from "../../../../assets/images/media/media-41.jpg";
import media3 from "../../../../assets/images/media/media-42.jpg";
import media4 from "../../../../assets/images/media/media-43.jpg";
import media5 from "../../../../assets/images/media/media-44.jpg";
import media6 from "../../../../assets/images/media/media-45.jpg";
import media7 from "../../../../assets/images/media/media-46.jpg";
import media8 from "../../../../assets/images/media/media-60.jpg";

export const Gallerylist = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Row>
                    <Col lg={3} md={3} sm={6}  className="col-12">
                        <Link to="#" className="glightbox card" data-gallery="gallery1">
                            <img src={media1} alt="image" onClick={() => setOpen(true)} />
                        </Link>
                    </Col>
                    <Col lg={3} md={3} sm={6} className="col-12">
                        <Link to="#" className="glightbox card" data-gallery="gallery1">
                            <img src={media2} alt="image" onClick={() => setOpen(true)} />
                        </Link>
                    </Col>
                    <Col lg={3} md={3} sm={6} className="col-12">
                        <Link to="#" className="glightbox card" data-gallery="gallery1">
                            <img src={media3} alt="image" onClick={() => setOpen(true)} />
                        </Link>
                    </Col>
                    <Col lg={3} md={3} sm={6} className="col-12">
                        <Link to="#" className="glightbox card" data-gallery="gallery1">
                            <img src={media4} alt="image" onClick={() => setOpen(true)} />
                        </Link>
                    </Col>
                    <Col lg={3} md={3} sm={6} className="col-12">
                        <Link to="#" className="glightbox card" data-gallery="gallery1">
                            <img src={media5} alt="image" onClick={() => setOpen(true)} />
                        </Link>
                    </Col>
                    <Col lg={3} md={3} sm={6} className="col-12">
                        <Link to="#" className="glightbox card" data-gallery="gallery1">
                            <img src={media6} alt="image" onClick={() => setOpen(true)} />
                        </Link>
                    </Col>
                    <Col lg={3} md={3} sm={6} className="col-12">
                        <Link to="#" className="glightbox card" data-gallery="gallery1">
                            <img src={media7} alt="image" onClick={() => setOpen(true)} />
                        </Link>
                    </Col>
                    <Col lg={3} md={3} sm={6} className="col-12">
                        <Link to="#" className="glightbox card" data-gallery="gallery1">
                            <img src={media8} alt="image" onClick={() => setOpen(true)} />
                        </Link>
                    </Col>
                </Row>

      <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      zoom={{
        maxZoomPixelRatio: 10,
        scrollToZoom: true
      }}
        slides={[{ src: media1 }, { src: media2 }, { src: media3 }, { src: media4 }, { src: media5 }, { src: media6 }, { src: media7 }, { src: media8 }

        ]}
        />
    </>
  );
};
