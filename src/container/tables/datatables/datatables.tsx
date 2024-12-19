import  { FC, Fragment, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import { BasicTable, ResponsiveDataTable, Savetable, columns, data } from './deletedrow';
import { ReactTabulator } from 'react-tabulator';
import "react-tabulator/lib/styles.css"; // default theme
import "react-tabulator/css/bootstrap/tabulator_bootstrap.min.css"; // use Theme(s)
import "react-tabulator/lib/css/bootstrap/tabulator_bootstrap.min.css";

interface DatatablesProps {}

const Datatables: FC<DatatablesProps> = () => {
    
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize] = useState(10);
	const [totalPages] = useState(1);

	const handlePageChange = (page:any) => {
		setCurrentPage(page);
	};

    return(
  <Fragment>
                <Pageheader title="Data Tables" heading="Tables" active="Data Tables" />
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Basic Datatable
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="table-responsive">
                                    <BasicTable />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Responsive Datatable
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                            <div className="table-responsive">
                            <ResponsiveDataTable />
                            </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                Sortable DataTable
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                            <div className="table-responsive  ">
                                <ReactTabulator className="table-hover table-bordered"
                                        data={data}
                                        columns={columns} 
                                        options={{pagination: 'local',
                                            paginationSize: pageSize,
                                            paginationSizeSelector: [10, 20, 50, 100], // Define available page sizes
                                            paginationInitialPage: currentPage,
                                            paginationButtonCount: 5, // Number of pagination buttons to display
                                            paginationDataReceived: { last_page: totalPages },
                                            paginationDataSent: { page: currentPage, size: pageSize }}}
                                            onPageChange={(data:any) => handlePageChange(data.page)} />
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            
                <Row>
                    <Col xl={12}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Delete Row Datatable
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="deleted-table table-responsive">
                                    <div className="text-center">
                                      
                                    </div>
                                    <Savetable/>
                                    
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            
  </Fragment>
); };

export default Datatables;
