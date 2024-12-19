import { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Pagination, Row, Table } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import { Link } from 'react-router-dom';
import { Listdata } from './productlistdata';

interface ProductlistProps { }

const Productlist: FC<ProductlistProps> = () => {
    const [manageListData, setManageListData] = useState([...Listdata]);
    const handleDelete = (idToRemove: number) => {
        const updatedListData = manageListData.filter((item) => item.id !== idToRemove);
        setManageListData(updatedListData);
    };

    const [selectAllChecked, setSelectAllChecked] = useState(false);

    // Create a state variable to track selected items
    const [selectedItems, setSelectedItems] = useState<number[]>([]);

    // Function to handle the "Select All" checkbox click event
    const handleSelectAllClick = () => {
        setSelectAllChecked(!selectAllChecked);

        // Update the state of individual checkboxes in the tbody
        if (selectAllChecked) {
            setSelectedItems([]);
        } else {
            const allIds = manageListData.map((item) => item.id);
            setSelectedItems(allIds);
        }
    };

    // Function to handle individual checkbox clicks
    const handleCheckboxClick = (id: number) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter((item) => item !== id));
        } else {
            setSelectedItems([...selectedItems, id]);
        }

        // Check if all individual checkboxes are selected and update the "Select All" checkbox accordingly
        const allSelected = selectedItems.length === manageListData.length;
        setSelectAllChecked(allSelected);
    };
    return (
        <Fragment>
            <Pageheader title="Products List" heading="Ecommerce" active="Products List" />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Products List
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="table-responsive mb-4">
                                <Table bordered className="table text-nowrap">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <input
                                                    className="form-check-input check-all"
                                                    type="checkbox"
                                                    id="all-products"
                                                    value=""
                                                    aria-label="..."
                                                    onChange={handleSelectAllClick}
                                                    checked={selectAllChecked}
                                                />
                                            </th>
                                            <th scope="col">Product</th>
                                            <th scope="col">Category</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Stock</th>
                                            <th scope="col">Gender</th>
                                            <th scope="col">Seller</th>
                                            <th scope="col">Published</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {manageListData.map((idx) => (
                                            <tr className="product-list" key={Math.random()}>
                                                <td className="product-checkbox">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        id={idx.id.toString()}
                                                        value=""
                                                        aria-label="..."
                                                        onChange={() => handleCheckboxClick(idx.id)}
                                                        checked={selectedItems.includes(idx.id)}
                                                    />
                                                </td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="fw-semibold">
                                                            {idx.product}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-light text-default">{idx.category}</span>
                                                </td>
                                                <td>{idx.price}</td>
                                                <td>{idx.stock}</td>
                                                <td>{idx.gender}</td>
                                                <td>{idx.seller}</td>
                                                <td>{idx.date}</td>
                                                <td>
                                                    <div className="hstack gap-2 fs-15">
                                                        <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/editproducts/`} className="btn btn-icon btn-sm btn-info-light"><i className="ri-edit-line"></i></Link>
                                                        <Link to="#" className="btn btn-icon btn-sm btn-danger-light product-btn" onClick={() => handleDelete(idx.id)}><i className="ri-delete-bin-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                            <div className="d-flex align-items-center justify-content-between flex-wrap">
                                <nav aria-label="...">
                                    <Pagination className="pagination mb-0">
                                        <Pagination.Item disabled>Previous
                                        </Pagination.Item>
                                        <Pagination.Item href="#">1</Pagination.Item>
                                        <Pagination.Item active>2
                                        </Pagination.Item>
                                        <Pagination.Item href="#">3</Pagination.Item>
                                        <Pagination.Item href="#">Next
                                        </Pagination.Item>
                                    </Pagination>
                                </nav>
                                <Button variant='' className="btn btn-danger btn-wave m-1">Delete All</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Productlist;
