import { FC, Fragment } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import Editor from '../editordata';
import Editor1 from './quillbubbleeditor';

interface QuilleditorProps { }

const Quilleditor: FC<QuilleditorProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Quill Editor" heading="Form Editors" active="Quill Editor" />
            <Row>
                <Col xl={12}>
                    <Card className="card custom-card">
                        <Card.Header>
                            <Card.Title>
                                Quill Snow Editor
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Editor placeholder={'Write something...'} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="card custom-card">
                        <Card.Header>
                            <Card.Title>
                                Quill Bubble Editor
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Editor1 placeholder={'Write something...'} />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Quilleditor;
