import { FC, Fragment, useState, useEffect } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import media67 from "../../../assets/images/media/media-67.png";
import  RSC  from 'react-scrollbars-custom';

interface TermsconditionsProps { }

const Termsconditions: FC<TermsconditionsProps> = () => {

  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {

    const handleFullscreenChange = () => {
      setIsFullscreen(!!(document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement));
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('mozfullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  const toggleFullscreen = () => {
    const contentContainer = document.getElementById('content-container');

    if (!contentContainer) {
      console.error("Element with ID 'content-container' not found in the DOM.");
      return;
    }

    if (!isFullscreen) {
      if (contentContainer.requestFullscreen) {
        contentContainer.requestFullscreen();
      } else if (contentContainer.mozRequestFullScreen) {
        contentContainer.mozRequestFullScreen();
      } else if (contentContainer.webkitRequestFullscreen) {
        contentContainer.webkitRequestFullscreen();
      } else if (contentContainer.msRequestFullscreen) {
        contentContainer.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };

  return (
    <Fragment>
      <Pageheader title="Terms & Conditions" heading="Pages" active="Terms & Conditions" />
      <div className="container-lg">
        <Row className="justify-content-center">
          <Col xl={8}>
            <Card id="content-container"
              className={isFullscreen ? 'card-fullscreen' : 'normal-content'}
            >
              <Card.Body className="p-0"
              >
                <div className="p-3 terms-heading-cover d-flex align-items-center text-fixed-white bg-primary h5 fw-semibold mb-0">
                  <span className="avatar avatar-md me-3">
                    <img src={media67} alt="" />
                  </span> YNEX - Terms & Conditions
                  <Link to="#" data-bs-toggle="card-fullscreen" className="ms-auto text-fixed-white" onClick={toggleFullscreen}>
                    <i className="ri-fullscreen-line"></i>
                  </Link>
                </div>
                  <RSC style={{height:'100vh'}}>
                <div className="p-4 text-muted terms-conditions" id="terms-scroll">
              
                    <div className="mb-5">
                      <p className="mb-3 op-7">
                        <span className="fw-bold text-default op-8">If you stay in the USA </span>the ynex <Link className="text-primary" to="#"><u>Terms and Conditions</u></Link> consists of below rules and <Link className="text-primary" to="#"><u>User Agreements</u></Link> consists of below policies <Link className="text-primary" to="#"><u>Ynex Rules & Privacy Policies</u></Link> incorporated with the below conditions.
                      </p>
                      <p className="mb-0 op-7">
                        <span className="fw-bold text-default op-8">If you stay any where in the world other than USA </span>the ynex <Link className="text-primary" to="#"><u>Terms and Conditions</u></Link> consists of below rules and <Link className="text-primary" to="#"><u>User Agreements</u></Link> consists of below policies <Link className="text-primary" to="#"><u>Ynex Rules & Privacy Policies</u></Link> incorporated with the below conditions.
                      </p>
                    </div>
                    <h6 className="fw-bold pb-3 text-default op-7"><span className="terms-heading">Terms & Services :</span></h6>
                    <div className="mb-4">
                      <p className="fw-semibold text-muted mb-2 fs-14">1 - Lorem ipsum dolor sit amet.</p>
                      <p className="op-7 mb-0">
                        Note that you'll sometimes see this agreement referred to as a Terms of Use, User Agreement or Terms of Service agreement. These terms are interchangeable and refer to the same type of agreement
                      </p>
                    </div>
                    <div className="mb-4">
                      <p className="fw-semibold text-muted mb-2 fs-14">2 - Consectetur adipisicing elit.</p>
                      <p className="op-7 mb-2">
                        While they are not legally required, terms and conditions set the stage for any successful business relationship. By making it clear and putting these guidelines in writing, business owners can avoid misunderstandings with their customers.
                      </p>
                      <p className="op-7">
                        It also allows you to decide what you consider acceptable and which type of conduct could lead you to terminate a relationship with a user.
                      </p>
                    </div>
                    <div className="mb-4">
                      <p className="fw-semibold text-muted mb-2 fs-14">3 - There are many variations.</p>
                      <p className="op-7">
                        Limitation of liability disclaimers is one of the main reasons why business owners take the time to include terms and conditions on their websites. When reasonable and drafted adequately, such clauses can help protect your business against claims and lawsuits and limit the amount of money that you would have to pay in damages.
                      </p>
                    </div>
                    <div className="mb-4">
                      <p className="fw-semibold text-muted mb-2 fs-14">4 - If you allow your users to share.</p>
                      <p className="op-7 mb-2">
                        If you allow your users to share comments or photos on your website or leave reviews of the products that you sell, you will want to have a section in your terms that governs their conduct and sets out what is acceptable and what isn’t.
                      </p>
                      <p className="op-7 mb-2">
                        In this clause, you could reserve the right to monitor the user-generated content shared on your website and remove anything that goes against your guidelines. You could expressly ask your users not to post anything that contains obscene language or any material that could be considered harmful or violent or infringes on someone else’s copyright.
                      </p>
                    </div>
                    <div className="mb-0">
                      <p className="fw-semibold text-muted mb-2 fs-14">5 - You could also make it clear.</p>
                      <p className="op-7 mb-2">
                        You could also make it clear that you reserve the right to suspend or delete the accounts of repeat infringers. This will help you make your website a safe space where people can feel comfortable sharing their opinions, which is especially important if you operate a news site, blog, or forum.
                      </p>
                      <p className="op-7 mb-0">
                        From a business point of view, you could reserve the right to use the submitted content for marketing purposes which a lot of big box stores and eCommerce retailers do in order to promote products that get rave reviews. It’s important for your customers to know that you plan on doing so, otherwise they could be surprised to see their words or photo used in a commercial!
                      </p>
                    </div>
               
                </div>
                    </RSC>
              </Card.Body>
              <Card.Footer className=" d-sm-flex d-block align-items-center justify-content-between shadow-lg">
                <div>
                  <div className="form-check">
                    <Form.Check className="" type="checkbox" value="" id="privacy-policy" />
                    <Form.Label className="form-check-label text-muted" htmlFor="privacy-policy">
                      I agree with the <Link to="#" className="fw-semibold text-muted"><u>Privacy Policy</u></Link>
                    </Form.Label>
                  </div>
                  <div className="form-check d-block">
                    <Form.Check className="" type="checkbox" value="" id="terms_conditions" />
                    <Form.Label className="form-check-label text-muted" htmlFor="terms_conditions">
                      I agree with the <Link to="#" className="fw-semibold text-muted"><u>Terms & Conditions</u></Link>
                    </Form.Label>
                  </div>
                </div>
                <div className="btn-list mt-sm-0 mt-2">
                  <Button variant='outline-danger' className="btn btn-wave">DECLINE</Button>
                  <Button variant='primary' className="btn btn-wave">ACCEPT</Button>
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};
export default Termsconditions;
