import { FC, Fragment } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pageheader from '../../../../components/pageheader/pageheader';
import face1 from "../../../../assets/images/faces/1.jpg";
import image18 from "../../../../assets/images/nft-images/18.png";
import crypto from "../../../../assets/images/crypto-currencies/square-color/Ethereum.svg";
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import Select from 'react-select';

registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

interface CreatenftProps { }

const Createnft: FC<CreatenftProps> = () => {
    const Data1 = [
        { value: 'Choose Royalities', label: 'Choose Royalities' },
        { value: 'Flat Royalty', label: 'Flat Royalty' },
        { value: 'Graduated Royalty', label: 'Graduated Royalty' },
        { value: 'Tiered Royalty', label: 'Tiered Royalty' },
        { value: 'Time-Limited Royalty', label: 'Time-Limited Royalty' },
        { value: 'Customized Royalty', label: 'Customized Royalty' },
    ];
    return (
        <Fragment>
            <Pageheader title="Create NFT" heading="NFT" active="Create NFT" />
            <Row>
                <Col xxl={9} xl={8}>
                    <Card className="custom-card upload-nft">
                        <Card.Header>
                            <Card.Title>Create NFT</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <div className="row gy-3 justify-content-between">
                                <Col xxl={3} xl={12}>
                                    <div className="create-nft-item">
                                        <Form.Label className="form-label">Upload NFT</Form.Label>
                                        <FilePond className="filepond circular-filepond" labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
                                            stylePanelLayout='compact circle' styleLoadIndicatorPosition='center bottom'
                                            styleButtonRemoveItemPosition='center bottom' />
                                    </div>
                                </Col>
                                <Col xxl={8} xl={12}>
                                    <div className="row gy-3">
                                        <Col xl={12}>
                                            <Form.Label htmlFor="input-placeholder" className="form-label">NFT Title</Form.Label>
                                            <Form.Control type="text" id="input-placeholder" placeholder="eg:Neo-Nebulae" />
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label htmlFor="nft-description" className="form-label">NFT Description</Form.Label>
                                            <Form.Control as="textarea" id="nft-description" rows={3} placeholder="Enter Description"></Form.Control>
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label htmlFor="nft-link" className="form-label">External Link</Form.Label>
                                            <Form.Control type="text" id="nft-link" placeholder="External Link Here" />
                                        </Col>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <div className="row gy-3">
                                        <Col xl={6}>
                                            <Form.Label htmlFor="nft-creator-name" className="form-label">Creator Name</Form.Label>
                                            <Form.Control type="text" id="nft-creator-name" placeholder="Enter Name" />
                                        </Col>
                                        <Col xl={6}>
                                            <Form.Label htmlFor="nft-price" className="form-label">NFT Price</Form.Label>
                                            <Form.Control type="text" id="nft-price" placeholder="Enter Price" />
                                        </Col>
                                        <Col xl={4}>
                                            <Form.Label htmlFor="nft-size" className="form-label">NFT Size</Form.Label>
                                            <Form.Control type="text" id="nft-size" placeholder="Enter Size" />
                                        </Col>
                                        <Col xl={4}>
                                            <Form.Label htmlFor="nft-royality" className="form-label">Royality</Form.Label>
                                            <Select options={Data1} classNamePrefix='Select2' menuPlacement='auto' className="multi-select"
                                                placeholder="Choose Royalities" />
                                        </Col>
                                        <Col xl={4}>
                                            <Form.Label htmlFor="nft-property" className="form-label">Property</Form.Label>
                                            <Form.Control type="text" className="form-control" id="nft-property" placeholder="Enter Property" />
                                        </Col>
                                        <Col xl={12}>
                                            <Form.Label className="form-label d-block">Method</Form.Label>
                                            <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                                <input type="radio" className="btn-check" name="strap-material" id="strap1" defaultChecked />
                                                <Form.Label className="btn btn-sm btn-outline-primary text-default z-0" htmlFor="strap1"><i className="ti ti-tag me-1 align-middle fs-15 d-inline-block"></i>Fixed Price</Form.Label>
                                                <input type="radio" className="btn-check" name="strap-material" id="strap2" />
                                                <Form.Label className="btn btn-sm btn-outline-primary text-default z-0" htmlFor="strap2"><i className="ti ti-users fs-15 me-1 align-middle d-inline-block"></i>Open For Bids</Form.Label>
                                                <input type="radio" className="btn-check" name="strap-material" id="strap3" />
                                                <Form.Label className="btn btn-sm btn-outline-primary text-default z-0" htmlFor="strap3"><i className="ti ti-hourglass-low fs-15 me-1 align-middle d-inline-block"></i>Timed Auction</Form.Label>
                                            </div>
                                        </Col>
                                    </div>
                                </Col>
                            </div>
                        </Card.Body>
                        <Card.Footer className="text-end">
                            <Link to="#" className="btn btn-primary btn-wave waves-effect waves-light">Create NFT</Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col xxl={3} xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                NFT Preview Here
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card className="custom-card mb-0 shadow-none border">
                                <img src={image18} className="card-img-top" alt="..." />
                                <div className="d-flex align-items-center justify-content-between nft-like-section w-100 px-3">
                                    <div className="flex-fill">
                                        <Button variant='success' className="btn btn-sm btn-icon rounded-pill btn-wave waves-effect waves-light">
                                            <i className="ri-heart-fill"></i>
                                        </Button>
                                    </div>
                                    <div>
                                        <span className="badge nft-like-badge text-fixed-white"><i className="ri-heart-fill me-1 text-danger align-middle d-inline-block"></i>0.47k</span>
                                    </div>
                                </div>
                                <Card.Body>
                                    <div className="d-flex align-items-center mb-3">
                                        <div className="me-2 lh-1">
                                            <span className="avatar avatar-rounded avatar-md">
                                                <img src={face1} alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <p className="mb-0 fw-semibold">NFTNinja</p>
                                            <p className="fs-12 text-muted mb-0">@nftninja</p>
                                        </div>
                                    </div>
                                    <p className="mb-0 text-fixed-white nft-auction-time">
                                        04hrs : 24m : 38s
                                    </p>
                                    <p className="fs-15 fw-semibold mb-2"><Link to="#">Digital Dreamscape</Link></p>
                                    <div className="d-flex flex-wrap align-itesm-center justify-content-between">
                                        <div className="fw-semibold">
                                            Highest Bid -
                                        </div>
                                        <div className="d-flex flex-wrap align-items-center lh-1">
                                            <span className="avatar avatar-xs me-1">
                                                <img src={crypto} alt="" />
                                            </span>0.24ETH
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Createnft;
