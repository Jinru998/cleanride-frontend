import { FC, Fragment } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface Error500Props { }

const Error500: FC<Error500Props> = () => {
    return (
        <Fragment>
            <div className="page error-bg" id="particles-js">
                <div className="error-page">
                    <div className="container">
                        <div className="text-center p-5 my-auto">
                            <div className="row align-items-center justify-content-center h-100">
                                <Col xl={7}>
                                    <p className="error-text mb-sm-0 mb-2">500</p>
                                    <p className="fs-18 fw-semibold mb-3">Oops &#128557;,The page you are looking for is not available.</p>
                                    <div className="row justify-content-center mb-5">
                                        <Col xl={6}>
                                            <p className="mb-0 op-7">We are sorry for the inconvenience,The page you are trying to access has been removed or never been existed.</p>
                                        </Col>
                                    </div>
                                    <Link to={`${import.meta.env.BASE_URL}dashboards/crm/`} className="btn btn-primary"><i className="ri-arrow-left-line align-middle me-1 d-inline-block"></i>BACK TO HOME</Link>
                                </Col>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Error500;
