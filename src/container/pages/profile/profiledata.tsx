import { useState } from "react";
import Lightbox from 'yet-another-react-lightbox';

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { Col, Row } from 'react-bootstrap';// gallery
import { Link } from 'react-router-dom';

import face2 from "../../../assets/images/faces/2.jpg";
import face4 from "../../../assets/images/faces/4.jpg";
import face15 from "../../../assets/images/faces/15.jpg";
import face5 from "../../../assets/images/faces/5.jpg";
import face11 from "../../../assets/images/faces/11.jpg";
import face7 from "../../../assets/images/faces/7.jpg";
import face12 from "../../../assets/images/faces/12.jpg";

interface friends {
    id: number
    src: string
    name: string
    mail: string
    badge: string
    color: string
}
export const Friendsdata: friends[] = [
    { id: 1, src: face2, name: 'Samantha May', mail: 'samanthamay2912@gmail.com', badge: 'Team Member', color: 'info-transparent' },
    { id: 2, src: face15, name: 'Andrew Garfield', mail: 'andrewgarfield98@gmail.com', badge: 'Team Lead', color: 'success-transparent' },
    { id: 3, src: face5, name: 'Jessica Cashew', mail: 'jessicacashew143@gmail.com', badge: 'Team Member', color: 'info-transparent' },
    { id: 4, src: face11, name: 'Simon Cowan', mail: 'jessicacashew143@gmail.com', badge: 'Team Manager', color: 'warning-transparent' },
    { id: 5, src: face7, name: 'Amanda nunes', mail: 'amandanunes45@gmail.com', badge: 'Team Member', color: 'info-transparent' },
    { id: 6, src: face12, name: 'Mahira Hose', mail: 'mahirahose9456@gmail.com', badge: 'Team Member', color: 'info-transparent' },
];

import media39 from "../../../assets/images/media/media-39.jpg";
import media40 from "../../../assets/images/media/media-40.jpg";
import media41 from "../../../assets/images/media/media-41.jpg";
import media42 from "../../../assets/images/media/media-42.jpg";
import media43 from "../../../assets/images/media/media-43.jpg";
import media44 from "../../../assets/images/media/media-44.jpg";
import media45 from "../../../assets/images/media/media-45.jpg";
import media46 from "../../../assets/images/media/media-46.jpg";
import media54 from "../../../assets/images/media/media-54.jpg";
import media56 from "../../../assets/images/media/media-56.jpg";
import media60 from "../../../assets/images/media/media-60.jpg";
import media64 from "../../../assets/images/media/media-64.jpg";
import media26 from "../../../assets/images/media/media-26.jpg";
import media32 from "../../../assets/images/media/media-32.jpg";
import media30 from "../../../assets/images/media/media-30.jpg";
import media31 from "../../../assets/images/media/media-31.jpg";

export const Gallerydata = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Row>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link to="#" className="glightbox card" data-gallery="gallery1">
                        <img src={media40} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link to="#" className="glightbox card" data-gallery="gallery1">
                        <img src={media41} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link to="#" className="glightbox card" data-gallery="gallery1">
                        <img src={media42} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link to="#" className="glightbox card" data-gallery="gallery1">
                        <img src={media43} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link to="#" className="glightbox card" data-gallery="gallery1">
                        <img src={media44} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link to="#" className="glightbox card" data-gallery="gallery1">
                        <img src={media45} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link to="#" className="glightbox card" data-gallery="gallery1">
                        <img src={media46} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link to="#" className="glightbox card" data-gallery="gallery1">
                        <img src={media60} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link to="#" className="glightbox card" data-gallery="gallery1">
                        <img src={media26} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link to="#" className="glightbox card" data-gallery="gallery1">
                        <img src={media32} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link to="#" className="glightbox card" data-gallery="gallery1">
                        <img src={media30} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
                <Col xxl={3} xl={3} lg={3} md={6} sm={12}>
                    <Link to="#" className="glightbox card" data-gallery="gallery1">
                        <img src={media31} alt="image" onClick={() => setOpen(true)} />
                    </Link>
                </Col>
            </Row>

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                zoom={{
                    maxZoomPixelRatio: 10,
                    scrollToZoom: true
                }}
                slides={[{ src: media40 }, { src: media41 }, { src: media42 }, { src: media43 }, { src: media44 }, { src: media45 }, { src: media46 }, { src: media60 }, { src: media26 }
                    , { src: media32 }, { src: media30 }, { src: media31 }

                ]}
            />
        </>
    );
};

//
interface skills {
    id: number
    text: string

}
export const Skillsdata: skills[] = [
    { id: 1, text: 'Cloud computing' },
    { id: 2, text: 'Data analysis' },
    { id: 3, text: 'DevOps' },
    { id: 4, text: 'Machine learning' },
    { id: 5, text: 'Programming' },
    { id: 6, text: 'Security' },
    { id: 7, text: 'Python' },
    { id: 8, text: 'JavaScript' },
    { id: 9, text: 'Ruby' },
    { id: 10, text: 'PowerShell' },
    { id: 11, text: 'Statistics' },
    { id: 12, text: 'SQL' },
];
interface Followers {
    id: number
    name: string
    src: string
    mail: string

}
export const Followersdata: Followers[] = [
    { id: 1, src: face15, name: 'Alicia Sierra', mail: 'aliciasierra389@gmail.com' },
    { id: 2, src: face4, name: 'Samantha Mery', mail: 'samanthamery@gmail.com' },
    { id: 3, src: face11, name: 'Juliana Pena', mail: 'juliapena555@gmail.com' },
    { id: 4, src: face5, name: 'Adam Smith', mail: 'adamsmith99@gmail.com' },
    { id: 5, src: face7, name: 'Farhaan Amhed', mail: 'farhaanahmed989@gmail.com' },
];

interface Personalinfo {
    id: number
    text1: string
    text2: string

}
export const Personalinfodata: Personalinfo[] = [
    { id: 1, text1: 'Name :', text2: 'Sonya Taylor' },
    { id: 2, text1: 'Email :', text2: 'sonyataylor231@gmail.com' },
    { id: 3, text1: 'Phone :', text2: '+(555) 555-1234' },
    { id: 4, text1: 'Designation :', text2: 'C.E.O' },
    { id: 5, text1: 'Age :', text2: '28' },
    { id: 6, text1: 'Experience :', text2: '10 Years' },
];
interface RecentPosts {
    id: number
    src: string
    name: string
    text: string

}
export const RecentPostsdata: RecentPosts[] = [
    { id: 1, src: media39, name: 'Animals', text: 'There are many variations of passages of Lorem Ipsum available' },
    { id: 2, src: media56, name: 'Travel', text: 'Latin words, combined with a handful of model sentence' },
    { id: 3, src: media54, name: 'Interior', text: 'Contrary to popular belief, Lorem Ipsum is not simply random' },
    { id: 4, src: media64, name: 'Nature', text: 'It is a long established fact that a reader will be distracted by the readable content' }
];

interface Suggestions {
    id: number
    src: string
    name: string

}
export const Suggestionsdata: Suggestions[] = [
    { id: 1, src: face15, name: 'Alister' },
    { id: 2, src: face4, name: 'Samantha Sams' },
    { id: 3, src: face11, name: 'Jason Mama' },
    { id: 4, src: face5, name: 'Alicia Sierra' },
    { id: 5, src: face7, name: 'Kiara Advain' }
];
