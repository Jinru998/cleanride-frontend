import { FC, Fragment, useState } from 'react';
import { Card, Col, Form, Row } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import Select from 'react-select';
import { Editoption1, Editoption2, Editoption3, Editoption4, Editoption5, Editoption6, Editoption7, Editoption8 } from './editproductsdata';
import SunEditor from 'suneditor-react';
import DatePicker from 'react-datepicker';
//filepond
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

interface EditproductsProps { }

const Editproducts: FC<EditproductsProps> = () => {
    const [files, setFiles] = useState<any>([]);
    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    return (
        <Fragment>
            <Pageheader title="Edit Product" heading="Ecommerce" active="Edit Product" />
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Body className="add-products p-0">
                            <div className="p-4">
                                <div className="row gx-5">
                                    <Col xxl={6} xl={12} lg={12} md={6}>
                                        <Card className="custom-card shadow-none mb-0">
                                            <Card.Body className="p-0">
                                                <div className="row gy-3">
                                                    <Col xl={12}>
                                                        <Form.Label htmlFor="product-name-add" className="form-label">Product Name</Form.Label>
                                                        <Form.Control type="text" className="form-control" id="product-name-add" placeholder="Name" defaultValue="Light Blue Sweat Shirt" />
                                                        <Form.Label htmlFor="product-name-add" className="form-label mt-1 fs-12 op-5 text-muted mb-0">*Product Name should not exceed 30 characters</Form.Label>
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-category-add" className="form-label">Category</Form.Label>
                                                        <Select isSearchable name="colors" options={Editoption1} className="basic-multi-select"
                                                            menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Editoption1[5]]}
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-gender-add" className="form-label">Gender</Form.Label>
                                                        <Select name="colors" options={Editoption2} className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select" defaultValue={[Editoption2[1]]}
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-size-add" className="form-label">Size</Form.Label>
                                                        <Select name="colors" options={Editoption3} className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select" defaultValue={[Editoption3[3]]}
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-brand-add" className="form-label">Brand</Form.Label>
                                                        <Select name="colors" options={Editoption4} className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select" defaultValue={[Editoption4[5]]}
                                                        />
                                                    </Col>
                                                    <Col xl={6} className=" color-selection">
                                                        <Form.Label htmlFor="product-color-add" className="form-label">Colors</Form.Label>
                                                        <Select name="colors" options={Editoption5} className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select" defaultValue={[Editoption5[7]]}
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-cost-add" className="form-label">Enter Cost</Form.Label>
                                                        <Form.Control type="text" className="form-control" id="product-cost-add" placeholder="Cost" defaultValue="$1299.99" />
                                                        <Form.Label htmlFor="product-cost-add" className="form-label mt-1 fs-12 op-5 text-muted mb-0">*Mention final price of the product</Form.Label>
                                                    </Col>
                                                    <Col xl={12}>
                                                        <Form.Label htmlFor="product-description-add" className="form-label">Product Description</Form.Label>
                                                        <Form.Control as="textarea" className="form-control" id="product-description-add" rows={2} defaultValue="Ultra Soft: The fabric is extremely soft and comfortable, keeping you at ease for hours"></Form.Control>
                                                        <Form.Label htmlFor="product-description-add" className="form-label mt-1 fs-12 op-5 text-muted mb-0">*Description should not exceed 500 letters</Form.Label>
                                                    </Col>
                                                    <Col xl={12}>
                                                        <Form.Label className="form-label">Product Features</Form.Label>
                                                        <div id="product-features">
                                                            <SunEditor />
                                                        </div>
                                                    </Col>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col xxl={6} xl={12} lg={12} md={6}>
                                        <Card className="custom-card shadow-none mb-0">
                                            <Card.Body className="p-0">
                                                <div className="row gy-4">
                                                    <Col xl={4}>
                                                        <Form.Label htmlFor="product-actual-price" className="form-label">Actual Price</Form.Label>
                                                        <Form.Control type="text" className="form-control" id="product-actual-price" placeholder="Actual Price" defaultValue="$1,499.90" />
                                                    </Col>
                                                    <Col xl={4}>
                                                        <Form.Label htmlFor="product-dealer-price" className="form-label">Dealer Price</Form.Label>
                                                        <Form.Control type="text" className="form-control" id="product-dealer-price" placeholder="Dealer Price" defaultValue="$1,299.99" />
                                                    </Col>
                                                    <Col xl={4}>
                                                        <Form.Label htmlFor="product-discount" className="form-label">Discount</Form.Label>
                                                        <Form.Control type="text" className="form-control" id="product-discount" placeholder="Discount in %" defaultValue="0.75%" />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-type" className="form-label">Product Type</Form.Label>
                                                        <Form.Control type="text" className="form-control" id="product-type" placeholder="Type" defaultValue="Watch" />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-weight" className="form-label">Item Weight</Form.Label>
                                                        <Form.Control type="text" className="form-control" id="product-weight" placeholder="Weight in gms" defaultValue="180gms" />
                                                    </Col>
                                                    <Col xl={12} className="product-documents-container">
                                                        <p className="fw-semibold mb-2 fs-14">Product Images :</p>
                                                        <FilePond className="multiple-filepond"
                                                            files={files}
                                                            onupdatefiles={setFiles}
                                                            allowMultiple={true}
                                                            maxFiles={6}
                                                            server="/api"
                                                            name="files" /* sets the file input name, it's filepond by default */
                                                            labelIdle='Drag & Drop your file here or click '
                                                        />
                                                    </Col>
                                                    <Form.Label className="form-label op-5 mt-3">Minimum 0f 6 images are need to be uploaded,make sure the image size match the proper background size and all images should be uniformly maintained with width and height to the image container,image size should not exceed 2MB,once uploaded to change the image you need to wait minimum of 24hrs. </Form.Label>
                                                    <Col xl={12} className="product-documents-container">
                                                        <p className="fw-semibold mb-2 fs-14">Warrenty Documents :</p>
                                                        <FilePond className="multiple-filepond"
                                                            files={files}
                                                            onupdatefiles={setFiles}
                                                            allowMultiple={true}
                                                            maxFiles={6}
                                                            server="/api"
                                                            name="files" /* sets the file input name, it's filepond by default */
                                                            labelIdle='Drag & Drop your file here or click '
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="publish-date" className="form-label">Publish Date</Form.Label>
                                                        <DatePicker selected={startDate} onChange={handleDateChange} />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="publish-time" className="form-label">Publish Time</Form.Label>
                                                        <DatePicker
                                                            selected={startDate}
                                                            onChange={handleDateChange}
                                                            showTimeSelect
                                                            showTimeSelectOnly
                                                            timeIntervals={15}
                                                            timeCaption="Time"
                                                            dateFormat="h:mm aa"
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-status-add" className="form-label">Published Status</Form.Label>
                                                        <Select name="colors" options={Editoption6} className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select" defaultValue={[Editoption6[2]]}
                                                        />
                                                    </Col>
                                                    <Col xl={6}>
                                                        <Form.Label htmlFor="product-tags" className="form-label">Product Tags</Form.Label>

                                                        <Select isMulti name="colors" options={Editoption7} defaultValue={[Editoption7[0], Editoption7[3]]}
                                                            className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>
                                                    <Col xl={12}>
                                                        <Form.Label htmlFor="product-availability" className="form-label">Availability</Form.Label>
                                                        <Select name="colors" options={Editoption8}
                                                            className="basic-multi-select" isSearchable
                                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select"
                                                        />
                                                    </Col>
                                                </div>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </div>
                            </div>
                            <div className="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-end">
                                <button className="btn btn-primary-light m-1">Add Product<i className="bi bi-plus-lg ms-2"></i></button>
                                <button className="btn btn-success-light m-1">Save Product<i className="bi bi-download ms-2"></i></button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Editproducts;
