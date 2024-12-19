import  { FC, Fragment, useState } from 'react';
import { Button, Card, Col, Collapse, Form, Row } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
//filepond
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

interface FileuploadsProps { }

const Fileuploads: FC<FileuploadsProps> = () => {
    const [files, setFiles] = useState<any>([]);
    const [files1, setFiles1] = useState<any>([]);
    const [files2, setFiles2] = useState<any>([]);
    //collapse1
    const [open1, setOpen1] = useState(false);
    return (
        <Fragment>
            <Pageheader title="File Uploads" heading="Form Elements" active="File Uploads" />

            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header className="justify-content-between">
                            <Card.Title>
                                Bootstrap File Input
                            </Card.Title>
                            <div className="prism-toggle">
                                <Button onClick={() => setOpen1(!open1)} variant='primary-light' className="btn btn-sm" aria-controls="example-collapse-text" aria-expanded={open1}>Show Code<i className="ri-code-line ms-2 d-inline-block align-middle"></i></Button>
                            </div>
                        </Card.Header>
                        <Card.Body>
                            <Form.Group controlId="formFile" className="mb-3">
                                <Form.Label>Default file input example</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                            <Form.Group controlId="formFileMultiple" className="mb-3">
                                <Form.Label>Multiple files input example</Form.Label>
                                <Form.Control type="file" multiple />
                            </Form.Group>
                            <Form.Group controlId="formFileDisabled" className="mb-3">
                                <Form.Label>Disabled file input example</Form.Label>
                                <Form.Control type="file" disabled />
                            </Form.Group>
                            <Form.Group controlId="formFileSm" className="mb-3">
                                <Form.Label>Small file input example</Form.Label>
                                <Form.Control type="file" size="sm" />
                            </Form.Group>
                            <Form.Group controlId="formFileLg" className="mb-3">
                                <Form.Label>Large file input example</Form.Label>
                                <Form.Control type="file" size="lg" />
                            </Form.Group>
                        </Card.Body>
                            <Collapse in={open1} className="card-body"><pre><code>{`
<Form.Group controlId="formFile" className="mb-3">
<Form.Label>Default file input example</Form.Label>
<Form.Control type="file" />
</Form.Group>
<Form.Group controlId="formFileMultiple" className="mb-3">
<Form.Label>Multiple files input example</Form.Label>
<Form.Control type="file" multiple />
</Form.Group>
<Form.Group controlId="formFileDisabled" className="mb-3">
<Form.Label>Disabled file input example</Form.Label>
<Form.Control type="file" disabled />
</Form.Group>
<Form.Group controlId="formFileSm" className="mb-3">
<Form.Label>Small file input example</Form.Label>
<Form.Control type="file" size="sm" />
</Form.Group>
<Form.Group controlId="formFileLg" className="mb-3">
<Form.Label>Large file input example</Form.Label>
<Form.Control type="file" size="lg" />
</Form.Group>`}</code></pre></Collapse>
                    </Card>
                </Col>
                <Col xl={6}>
                    <h6 className="mb-3">Filepond:</h6>
                    <Row>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Multiple Upload
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <FilePond className="multiple-filepond"
                                        files={files}
                                        onupdatefiles={setFiles}
                                        allowMultiple={true}
                                        maxFiles={3}
                                        server="/api"
                                        name="files" /* sets the file input name, it's filepond by default */
                                        labelIdle='Drag & Drop your file here or click '
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={12}>
                            <Card className="custom-card">
                                <Card.Header>
                                    <Card.Title>
                                        Single Upload
                                    </Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    <FilePond className="multiple-filepond single-fileupload"
                                        files={files1}
                                        onupdatefiles={setFiles1}
                                        allowMultiple={true}
                                        maxFiles={3}
                                        server="/api"
                                        name="files" /* sets the file input name, it's filepond by default */
                                        labelIdle='Drag & Drop your file here or click '
                                    />
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Dropzone
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <FilePond className="multiple-filepond"
                                files={files2}
                                onupdatefiles={setFiles2}
                                allowMultiple={true}
                                maxFiles={3}
                                server="/api"
                                name="files" /* sets the file input name, it's filepond by default */
                                labelIdle='Drag & Drop your file here or click '
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};
export default Fileuploads;
