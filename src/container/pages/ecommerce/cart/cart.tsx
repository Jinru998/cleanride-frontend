import { FC, Fragment, useState, useEffect, useRef } from 'react';
import { Button, Card, Col, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AddToCart } from "../../../../redux/action";
import { ItemData1 } from '../ecommercedata';

interface CartProps { }

const Cart: FC<CartProps> = ({ local_varaiable }: any) => {

    const [FiltershopingData, sethopingData] = useState<any>([]);
    const [Price, setPrice] = useState(0);
    const containerRef: any = useRef(null);

    useEffect(() => {
        if (local_varaiable.ecommercedata == undefined) {
            sethopingData(ItemData1);
            ItemData1.filter((ele: any) => {
                setPrice(Number(ele.newprice) + Price);
            });
        }
        else if (local_varaiable.ecommercedata.length == 0) {
            sethopingData(ItemData1);
            ItemData1.filter((ele: any) => {
                setPrice(Number(ele.newprice) + Price);
            });
        }
        else {
            sethopingData(local_varaiable.ecommercedata);
            local_varaiable.ecommercedata.filter((ele: { newprice: any; }) => {
                setPrice(Number(ele.newprice) + Price);
            });
        }

    }, [local_varaiable.ecommercedata]);

    function handleRemove(id: any) {
        if (local_varaiable.ecommercedata == undefined) {
            const RemoveData = FiltershopingData.filter((ale: any) => ale.id !== id);
            sethopingData(RemoveData);
        }
        else if (local_varaiable.ecommercedata.length == 0) {
            const RemoveData = FiltershopingData.filter((ale: any) => ale.id !== id);
            sethopingData(RemoveData);
        }
        else {
            const RemoveData = FiltershopingData.filter((ale: any) => ale.id !== id);
            sethopingData(RemoveData);
        }
    }

    //value add and remove function

    function dec(el: any) {
        const unit = el.currentTarget.parentElement.querySelector("input").value;

        if (Number(unit) === 0) {
            return false;
        } else {
            el.currentTarget.parentElement.querySelector("input").value--;
        }
    }
    function inc(el: any) {
        el.currentTarget.parentElement.querySelector("input").value++;

    }

    return (
        <Fragment>
            <Pageheader title="Cart" heading="Ecommerce" active="Cart" />
            <Row>
                <Col xxl={9}>
                    <Card className="custom-card" id="cart-container-delete">
                        <Card.Header>
                            <Card.Title>
                                Cart Items
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive">
                                <table className="table table-bordered text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>
                                                Product Name
                                            </th>
                                            <th>
                                                Price
                                            </th>
                                            <th>
                                                Quantity
                                            </th>
                                            <th>
                                                Total
                                            </th>
                                            <th>
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {FiltershopingData !== "" ? FiltershopingData.map((idx: any) => (
                                            <tr id="btn" key={Math.random()}>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-3">
                                                            <span className="avatar avatar-xxl bg-light">
                                                                <img src={idx.preview} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <div className="mb-1 fs-14 fw-semibold">
                                                                <Link to="#">{idx.title}</Link>
                                                            </div>
                                                            <div className="mb-1">
                                                                <span className="me-1">Size:</span><span className="fw-semibold text-muted">Large</span>
                                                            </div>
                                                            <div className="mb-1">

                                                                <span className="badge bg-success-transparent ms-3">In Offer</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="fw-semibold fs-14">

                                                        {idx.offerprice}
                                                    </div>
                                                </td>
                                                <td className="product-quantity-container">
                                                    <div className="input-group border rounded flex-nowrap">
                                                        <Button variant='' className="btn btn-icon btn-light input-group-text flex-fill product-quantity-minus" onClick={dec}><i className="ri-subtract-line"></i></Button>
                                                        <Form.Control type="text" className="form-control form-control-sm border-0 text-center w-100"
                                                            aria-label="quantity" id="product-quantity"
                                                            defaultValue={idx.quantity}
                                                        />

                                                        <Button variant='' className="btn btn-icon btn-light input-group-text flex-fill product-quantity-plus" onClick={inc} ><i className="ri-add-line"></i></Button>
                                                    </div>
                                                </td>
                                                <td ref={containerRef}>
                                                    <div className="fs-14 fw-semibold">
                                                        {idx.oldpr}
                                                    </div>
                                                </td>
                                                <td>

                                                    <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/wishlist/`}
                                                        className="btn btn-icon btn-success me-2">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Add To Wishlist</Tooltip>}>
                                                            <i className="ri-heart-line"></i>
                                                        </OverlayTrigger>
                                                    </Link>
                                                    <Button variant='' className="btn btn-icon btn-danger btn-delete"
                                                        onClick={() => { handleRemove(idx.id); }} data-bs-toggle="tooltip"
                                                        data-bs-placement="top" data-bs-title="Remove From cart">
                                                        <OverlayTrigger placement="top" overlay={<Tooltip>Remove From cart</Tooltip>}>
                                                            <i className="ri-delete-bin-line"></i>
                                                        </OverlayTrigger>
                                                    </Button>
                                                </td>
                                            </tr>
                                        )) : <tr><td>"There is no product available in the Cart"</td></tr>}

                                    </tbody>
                                </table>
                            </div>
                        </Card.Body>
                    </Card>
                    <Card className="custom-card d-none" id="cart-empty-cart">
                        <Card.Header>
                            <Card.Title>
                                Empty Cart
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="cart-empty text-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-muted" width="24" height="24"
                                // viewbox="0 0 24 24"
                                ><path d="M18.6 16.5H8.9c-.9 0-1.6-.6-1.9-1.4L4.8 6.7c0-.1 0-.3.1-.4.1-.1.2-.1.4-.1h17.1c.1 0 .3.1.4.2.1.1.1.3.1.4L20.5 15c-.2.8-1 1.5-1.9 1.5zM5.9 7.1 8 14.8c.1.4.5.8 1 .8h9.7c.5 0 .9-.3 1-.8l2.1-7.7H5.9z" /><path d="M6 10.9 3.7 2.5H1.3v-.9H4c.2 0 .4.1.4.3l2.4 8.7-.8.3zM8.1 18.8 6 11l.9-.3L9 18.5z" /><path d="M20.8 20.4h-.9V20c0-.7-.6-1.3-1.3-1.3H8.9c-.7 0-1.3.6-1.3 1.3v.5h-.9V20c0-1.2 1-2.2 2.2-2.2h9.7c1.2 0 2.2 1 2.2 2.2v.4z" /><path d="M8.9 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-1 2.2-2.2 2.2zm0-3.5c-.7 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.8 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3zM18.6 22.2c-1.2 0-2.2-1-2.2-2.2s1-2.2 2.2-2.2c1.2 0 2.2 1 2.2 2.2s-.9 2.2-2.2 2.2zm0-3.5c-.8 0-1.3.6-1.3 1.3 0 .7.6 1.3 1.3 1.3.7 0 1.3-.6 1.3-1.3 0-.7-.5-1.3-1.3-1.3z" /></svg>
                                <h3 className="fw-bold mb-1">Your Cart is Empty</h3>
                                <h5 className="mb-3">Add some items to make me happy :)</h5>
                                <Link to="#" className="btn btn-primary btn-wave m-3" data-abc="true">continue shopping <i className="bi bi-arrow-right ms-1"></i></Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} className="col-xxl-3">
                    <Card className="custom-card">
                        <div className="p-3 border-bottom d-block">
                            <div className="alert alert-primary text-center" role="alert">
                                <span className="text-default">Sale Ends in</span> <span className="fw-semibold fs-14 text-primary ms-1">18 Hours : 32 Minutes</span>
                            </div>
                        </div>
                        <Card.Body className="card-body p-0">
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <p className="mb-2 fw-semibold">Delivery:</p>
                                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" />
                                    <label className="btn btn-outline-light text-default" htmlFor="btnradio1">Free Delivery</label>
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" defaultChecked />
                                    <label className="btn btn-outline-light text-default" htmlFor="btnradio2">Express Delivery</label>
                                </div>
                                <p className="mb-0 mt-2 fs-12 text-muted">Delivered by 24,Nov 2022</p>
                            </div>
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <div className="input-group">
                                    <input type="text" className="form-control form-control-sm" placeholder="Coupon Code" aria-label="coupon-code" aria-describedby="coupons" />
                                    <Button variant='' className="btn btn-primary input-group-text" id="coupons">Apply</Button>
                                </div>
                                <Link to="#" className="fs-12 text-success">10% off on first purchase</Link>
                            </div>
                            <div className="p-3 border-bottom border-block-end-dashed">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="text-muted op-7">Sub Total</div>
                                    <div className="fw-semibold fs-14">$1,299</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="text-muted op-7">Discount</div>
                                    <div className="fw-semibold fs-14 text-success">10% - $129</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="text-muted op-7">Delivery Charges</div>
                                    <div className="fw-semibold fs-14 text-danger">- $49</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <div className="text-muted op-7">Service Tax (18%)</div>
                                    <div className="fw-semibold fs-14">- $169</div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="text-muted op-7">Total :</div>
                                    <div className="fw-semibold fs-14 text-primary"> $1,387</div>
                                </div>
                            </div>
                            <div className="p-3 d-grid">
                                <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/checkout/`} className="btn btn-primary btn-wave mb-2">Proceed To Checkout</Link>
                                <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/products/`} className="btn btn-light btn-wave">Countinue Shopping</Link>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

const mapStateToProps = (state: any) => ({
    local_varaiable: state
});
export default connect(mapStateToProps, { AddToCart })(Cart);
