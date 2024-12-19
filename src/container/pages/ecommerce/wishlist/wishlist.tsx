import { FC, Fragment, useState } from 'react';
import { Card, Col, Form, Pagination, Row } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AddToCart, ProductReduxData } from "../../../../redux/action";
import { Maindata } from '../ecommercedata';

interface WishlistProps { }

const Wishlist: FC<WishlistProps> = ({ AddToCart }: any) => {
    //search function
    const [allData, setAllData] = useState(Maindata);

    function handleRemove(id: string) {
        const newList = allData.filter((idx: any) => idx.id !== id);
        setAllData(newList);
    }
    const allElement2: any = [];
    const myfunction = (InputData: string) => {
        let allElement;
        for (allElement of allData) {
            if (allElement.title[0] == " ") {
                allElement.title = allElement.title.trim();
            }
            if (allElement.title.toLowerCase().includes(InputData.toLowerCase())) {
                if (allElement.title.toLowerCase().startsWith(InputData.toLowerCase())) {
                    allElement2.push(allElement);
                }
            }

        }
        setAllData(allElement2);
    };
    return (
        <Fragment>
            <Pageheader title="Wishlist" heading="Ecommerce" active="Wishlist" />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="card-body d-sm-flex align-items-center justify-content-between">
                            <div className="fs-15 mb-sm-0 mb-2">Total <span className="badge bg-success">12</span> products are wishlisted</div>
                            <div className="d-flex" role="search">
                                <Form.Control className="form-control-sm me-2" type="search" placeholder="Search" aria-label="Search" onChange={(ele) => { myfunction(ele.target.value); }}
                                />
                                <button className="btn btn-sm btn-light" type="submit">Search</button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                {allData ? allData.map((idx: any) => (
                    <Col xxl={3} xl={6} lg={6} md={6} sm={12} key={Math.random()}>
                        <Card className="custom-card product-card">
                            <Card.Body>
                                <Link to="#" className="product-image">
                                    <img src={idx.preview} className="card-img mb-3" alt="..." />
                                </Link>
                                <div className="product-icons">
                                    <Link to="#" className="wishlist btn-delete" onClick={() => handleRemove(idx.id)}><i className="ri-close-line"></i></Link>
                                </div>
                                <p className="product-name fw-semibold mb-0 d-flex align-items-center justify-content-between">{idx.title}<span className="float-end text-warning fs-12">4.2<i className="ri-star-s-fill align-middle ms-1"></i></span></p>
                                <p className="product-description fs-11 text-muted mb-2">{idx.description}</p>
                                <p className="mb-1 fw-semibold fs-16 d-flex align-items-center justify-content-between"><span>{idx.newpr}<span className="text-muted text-decoration-line-through ms-1 op-6 d-inline-block">{idx.oldpr}</span></span><span className="badge bg-secondary-transparent float-end fs-10">72% off</span></p>
                                <p className="fs-11 text-success fw-semibold mb-0 d-flex align-items-center">
                                    <i className="ti ti-discount-2 fs-16 me-1"></i>Offer Price {idx.offerprice}
                                </p>
                            </Card.Body>
                            <Card.Footer className="text-center">
                                <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/cart`} className="btn btn-primary-light m-1" onClick={() => { AddToCart(idx.id); }} ><i className="ri-shopping-cart-2-line me-2 align-middle d-inline-block"></i>Move To Cart</Link>
                                <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/productdetails/`} className="btn btn-success-light m-1"
                                ><i className="ri-eye-line me-2 align-middle d-inline-block"></i>View Product</Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                )) : ""}
            </Row>

            <Pagination className="justify-content-end">
                <Pagination.Item disabled href="#">Previous
                </Pagination.Item>
                <Pagination.Item href="#">1</Pagination.Item>
                <Pagination.Item href="#">2</Pagination.Item>
                <Pagination.Item href="#">3</Pagination.Item>
                <Pagination.Item href="#">Next</Pagination.Item>
            </Pagination>
        </Fragment>
    );
};

// export default Wishlist;
const mapStateToProps = (state: any) => ({
    local_varaiable: state
});
export default connect(mapStateToProps, { AddToCart, ProductReduxData })(Wishlist);
