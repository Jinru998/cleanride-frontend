import  { FC, Fragment , useState} from 'react';
import { Card, Col,  InputGroup, Row } from 'react-bootstrap';
import Pageheader from '../../../../components/pageheader/pageheader';
import DatePicker from 'react-datepicker';

interface DatetimepickerProps {}

const Datetimepicker: FC<DatetimepickerProps> = () =>{
    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date: Date | null) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    return (
  <Fragment>
                <Pageheader title="Date & Time Pickers" heading="Form Elements" active="Date & Time Pickers" />

                <Row>
                    <Col xxl={4} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Basic Date picker
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group">
                                    <InputGroup className="">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i>
                                         </InputGroup.Text>
                                        <DatePicker selected={startDate} onChange={handleDateChange} />
                                    </InputGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Date picker With Time
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group">
                                    <InputGroup className="">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
                                        <DatePicker
                                        selected={startDate}
                                         onChange={handleDateChange}
                                         timeInputLabel="Time:"
                                         dateFormat="yy/MM/dd h:mm aa"
                                         placeholderText='Choose date with time'
                                         showTimeInput
                                         />
                                    </InputGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Human Friendly dates
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group">
                                    <InputGroup className="">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </InputGroup.Text>
                                        <DatePicker selected={startDate} onChange={handleDateChange} />
                                    </InputGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Date range picker
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group">
                                    <InputGroup className="">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-calendar-line"></i> 
                                        </InputGroup.Text>
                                        <DatePicker selected={startDate} onChange={handleDateChange} />
                                    </InputGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Basic Time picker
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group">
                                    <InputGroup className="input-group">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
                                        <DatePicker
                                        selected={startDate}
                                        onChange={handleDateChange}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="h:mm aa"
                                        />
                                    </InputGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                Locale with time
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group">
                                    <InputGroup className="input-group">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={handleDateChange}
                                            locale="pt-BR"
                                            showTimeSelect
                                            timeFormat="p"
                                            timeIntervals={15}
                                            dateFormat="Pp"
                                            />
                                    </InputGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                    Time Picker with Limits
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group">
                                    <InputGroup className="input-group">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
                                          <DatePicker
                                        selected={startDate}
                                        onChange={handleDateChange}
                                        showTimeSelect
                                        showTimeSelectOnly
                                        timeIntervals={15}
                                        timeCaption="Time"
                                        dateFormat="h:mm aa"
                                        />
                                    </InputGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xxl={4} xl={6}>
                        <Card className="custom-card">
                            <Card.Header>
                                <Card.Title>
                                Month Picker
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <div className="form-group">
                                    <InputGroup className="input-group">
                                        <InputGroup.Text className="input-group-text text-muted"> <i className="ri-time-line"></i> </InputGroup.Text>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={handleDateChange}
                                            dateFormat="MM/yyyy"
                                            showMonthYearPicker
                                            />
                                    </InputGroup>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
  </Fragment>
);
};
export default Datetimepicker;
