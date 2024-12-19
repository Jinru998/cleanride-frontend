import  { FC, Fragment } from 'react';
import { Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';

interface EmptyProps {}

const Empty: FC<EmptyProps> = () =>{
  return (
  <Fragment>
                <Pageheader title="Empty" heading="Pages" active="Empty" />

                <Row>
                    
                </Row>
  </Fragment>
);
};

export default Empty;
