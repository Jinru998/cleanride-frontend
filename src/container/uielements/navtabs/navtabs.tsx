import  { FC, Fragment } from 'react';
import { Card, Col, Dropdown, Nav, Row, Tab } from 'react-bootstrap';
import Pageheader from '../../../components/pageheader/pageheader';
import product3 from "../../../assets/images/ecommerce/jpg/3.jpg";
import product4 from "../../../assets/images/ecommerce/jpg/4.jpg";
import product6 from "../../../assets/images/ecommerce/jpg/6.jpg";
import face9 from "../../../assets/images/faces/9.jpg";

interface NavtabsProps { }

const Navtabs: FC<NavtabsProps> = () => {
    return (
        <Fragment>
            <Pageheader title="Navs & tabs" heading="Ui Elements" active="Navs & tabs" />
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Static Tabs
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Nav className="nav nav-tabs border-0" as="ul">
                                <Nav.Item as="li">
                                    <Nav.Link active href="#">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li" >
                                    <Nav.Link>Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link  >Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link disabled >Disabled</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Static Pills
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Nav variant="pills" as="ul" defaultActiveKey="/home">
                                <Nav.Item as="li">
                                    <Nav.Link active href="#">Active</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link>Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link>Link</Nav.Link>
                                </Nav.Item>
                                <Nav.Item as="li">
                                    <Nav.Link disabled>Disabled</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Default Nav Tabs
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey="first">
                                <Nav className="nav nav-tabs mb-3 border-0" id="myTab" role="tablist" defaultActiveKey="first">
                                    <Nav.Item><Nav.Link href="#home1" eventKey="first">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item><Nav.Link href="#about1" eventKey="second">About</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item><Nav.Link href="#service1" eventKey="third">Services</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item><Nav.Link href="#license1" eventKey="fourth">License</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane className="tab-pane show  text-muted" id="home1" role="tabpanel"
                                        eventKey="first"> <b>Lorem Ipsum is simply dummy</b> text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                                        1500s, when an unknown printer took a galley of type and scrambled it to make a
                                        type specimen book. It has survived not only five centuries.
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane text-muted" id="about1" role="tabpanel"
                                        eventKey="second">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                        in a piece of classical Latin literature from 45 BC, <b>Making it over 2000
                                            years old</b>. Richard McClintock, a Latin professor at Hampden-Sydney
                                        College in Virginia, looked up one of the more obscure Latin words, consectetur.
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane text-muted" id="service1" role="tabpanel"
                                        eventKey="third">
                                        There are many variations of passages of <b>Lorem Ipsum available</b>, but the
                                        majority have suffered alteration in some form, by injected humour, or
                                        randomised words which don't look even slightly believable. If you are going to
                                        use a passage of Lorem Ipsum, you need to be sure there isn't anything.
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane text-muted" id="license1" role="tabpanel"
                                        eventKey="fourth">It is a long established fact that a reader will be distracted by the
                                        <b><i>Readable content</i></b> of a page when looking at its layout. The point
                                        of using Lorem Ipsum is that it has a more-or-less normal distribution of
                                        letters, as opposed to using 'Content here, content here', making it look like
                                        readable English.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Justified Nav Tabs
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="third">
                                <Nav className="nav nav-tabs mb-3 nav-justified nav-style-1 d-sm-flex d-block" role="tablist" defaultActiveKey="third">
                                    <Nav.Item>
                                        <Nav.Link href="#home1-justified" eventKey="first" >Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#about1-justified" eventKey="second">About</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" href="#service1-justified" >Services</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="#license1-justified" eventKey="fourth">License</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="myTabContent">
                                    <Tab.Pane role="tabpanel" className="tab-pane text-muted" id="home1-justified" eventKey="first"> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                        in a piece of classical Latin literature from 45 BC, <b>Making it over 2000
                                            years old</b>. Richard McClintock, a Latin professor at Hampden-Sydney
                                        College in Virginia, looked up one of the more obscure Latin words, consectetur.
                                    </Tab.Pane>
                                    <Tab.Pane role="tabpanel" className="tab-pane text-muted" id="about1-justified" eventKey="second"><b>Lorem Ipsum is simply dummy</b> text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                                        1500s, when an unknown printer took a galley of type and scrambled it to make a
                                        type specimen book. It has survived not only five centuries.
                                    </Tab.Pane>
                                    <Tab.Pane role="tabpanel" className="tab-pane show  text-muted" id="service1-justified" eventKey="third">There are many variations of passages of <b>Lorem Ipsum available</b>, but the
                                        majority have suffered alteration in some form, by injected humour, or
                                        randomised words which don't look even slightly believable. If you are going to
                                        use a passage of Lorem Ipsum, you need to be sure there isn't anything.
                                    </Tab.Pane>
                                    <Tab.Pane role="tabpanel" className="tab-pane text-muted" id="license1-justified" eventKey="fourth"> It is a long established fact that a reader will be distracted by the
                                        <b><i>Readable content</i></b> of a page when looking at its layout. The point
                                        of using Lorem Ipsum is that it has a more-or-less normal distribution of
                                        letters, as opposed to using 'Content here, content here', making it look like
                                        readable English.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Basic Pill Tabs With Links
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="second">
                                <Nav className="nav nav-style-1 nav-pills mb-3" defaultActiveKey="first">

                                    <Nav.Link eventKey="first" href="#nav-products" aria-selected="false">Products</Nav.Link>

                                    <Nav.Link href="#nav-cart" eventKey="second">Cart<span className="badge bg-secondary ms-1 rounded-pill">32</span></Nav.Link>

                                    <Nav.Link href="#nav-orders" eventKey="third" aria-selected="false">Orders
                                        <span className="badge bg-success ms-1 rounded-pill">4</span></Nav.Link>

                                    <Nav.Link href="#nav-offers" eventKey="fourth" aria-selected="false">Offers</Nav.Link>

                                </Nav>
                                <Tab.Content id="myTabContent">
                                    <Tab.Pane role="tabpanel" eventKey="first"> How travel coupons make you a better lover. Why cultural solutions are the new
                                        black. Why mom was right about travel insurances. How family trip ideas can help
                                        you predict the future. <b>How carnival cruises make you a better lover</b>. Why
                                        you'll never succeed at daily deals. 11 ways cheapest flights can find you the
                                        love of your life. The complete beginner's guide to mission trips. If you read
                                        one article about cultural notes read this one. Why you shouldn't eat vacation
                                        package in bed.
                                    </Tab.Pane>
                                    <Tab.Pane role="tabpanel"
                                        eventKey="second"> How hotel deals can help you live a better life. <b>How celebrity cruises</b>
                                        aren't as bad as you think. How cultural solutions can help you predict the
                                        future. How to cheat at dog friendly hotels and get away with it. 17 problems
                                        with summer activities. How to cheat at travel agents and get away with it. How
                                        not knowing family trip ideas makes you a rookie. What everyone is saying about
                                        daily deals. How twitter can teach you about carnival cruises. How to start
                                        using cultural solutions.
                                    </Tab.Pane>
                                    <Tab.Pane role="tabpanel"
                                        eventKey="third"> Unbelievable healthy snack success stories. 12 facts about safe food handling
                                        tips that will impress your friends. Restaurant weeks by the numbers. Will
                                        mexican food ever rule the world? The 10 best thai restaurant youtube videos.
                                        How restaurant weeks can make you sick. The complete beginner's guide to cooking
                                        healthy food. Unbelievable food stamp success stories. How whole foods markets
                                        are making the world a better place. 16 things that won't happen in dish
                                        reviews.
                                    </Tab.Pane>
                                    <Tab.Pane role="tabpanel"
                                        eventKey="fourth">Why delicious magazines are killing you. Why our world would end if restaurants
                                        disappeared. Why restaurants are on crack about restaurants. How restaurants are
                                        making the world a better place. 8 great articles about minute meals. Why our
                                        world would end if healthy snacks disappeared. Why the world would end without
                                        mexican food. The evolution of chef uniforms. How not knowing food processors
                                        makes you a rookie. Why whole foods markets beat peanut butter on pancakes.
                                        reviews.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Justified Pill Tabs With Links
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="second">
                                <Nav className="nav nav-style-6 nav-pills mb-3 nav-justified d-sm-flex d-block" role="tablist" defaultActiveKey="first">

                                    <Nav.Link eventKey="first" href="#nav-products-justified" >Products</Nav.Link>

                                    <Nav.Link eventKey="second" href="#nav-cart-justified">Cart <span
                                        className="badge bg-info-transparent ms-1">Full</span></Nav.Link>

                                    <Nav.Link eventKey="third" href="#nav-orders-justified"
                                        aria-selected="false">Orders </Nav.Link>

                                    <Nav.Link eventKey="fourth" href="#nav-offers-justified">Offers <span
                                        className="badge bg-warning-transparent ms-1">7</span></Nav.Link>

                                </Nav>
                                <Tab.Content id="myTabContent">
                                    <Tab.Pane className="tab-pane text-muted" id="nav-products-justified" role="tabpanel" eventKey="first"> How hotel deals can help you live a better life. <b>How celebrity cruises</b>
                                        aren't as bad as you think. How cultural solutions can help you predict the
                                        future. How to cheat at dog friendly hotels and get away with it. 17 problems
                                        with summer activities. How to cheat at travel agents and get away with it. How
                                        not knowing family trip ideas makes you a rookie. What everyone is saying about
                                        daily deals. How twitter can teach you about carnival cruises. How to start
                                        using cultural solutions.
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane show  text-muted" id="nav-cart-justified"
                                        eventKey="second">
                                        How travel coupons make you a better lover. Why cultural solutions are the new
                                        black. Why mom was right about travel insurances. How family trip ideas can help
                                        you predict the future. <b>How carnival cruises make you a better lover</b>. Why
                                        you'll never succeed at daily deals. 11 ways cheapest flights can find you the
                                        love of your life. The complete beginner's guide to mission trips. If you read
                                        one article about cultural notes read this one. Why you shouldn't eat vacation
                                        package in bed.
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane text-muted" id="nav-orders-justified" role="tabpanel"
                                        eventKey="third"> Unbelievable healthy snack success stories. 12 facts about safe food handling
                                        tips that will impress your friends. Restaurant weeks by the numbers. Will
                                        mexican food ever rule the world? The 10 best thai restaurant youtube videos.
                                        How restaurant weeks can make you sick. The complete beginner's guide to cooking
                                        healthy food. Unbelievable food stamp success stories. How whole foods markets
                                        are making the world a better place. 16 things that won't happen in dish
                                        reviews.
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane text-muted" id="nav-offers-justified" role="tabpanel"
                                        eventKey="fourth">Why delicious magazines are killing you. Why our world would end if restaurants
                                        disappeared. Why restaurants are on crack about restaurants. How restaurants are
                                        making the world a better place. 8 great articles about minute meals. Why our
                                        world would end if healthy snacks disappeared. Why the world would end without
                                        mexican food. The evolution of chef uniforms. How not knowing food processors
                                        makes you a rookie. Why whole foods markets beat peanut butter on pancakes.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Vertical alignment with lists
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col xl={3}>
                                        <Nav className="nav nav-tabs flex-column nav-style-4" role="tablist" defaultActiveKey="first">
                                            <Nav.Item>
                                                <Nav.Link href="#home-vertical" eventKey="first">Home</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second" href="#about-vertical">About</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link href="#services-vertical" eventKey="third">Services</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link href="#contacts-vertical" eventKey="fourth" >Contacts</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col xl={9}>
                                        <Tab.Content>
                                            <Tab.Pane className="tab-pane show  text-muted" id="home-vertical" role="tabpanel" eventKey="first">
                                                How hotel deals can help you live a better life. <b>How celebrity
                                                    cruises</b> aren't as bad as you think. How cultural solutions
                                                can help you predict the future. How to cheat at dog friendly hotels
                                                and get away with it. 17 problems with summer activities. How to
                                                cheat at travel agents and get away with it. How not knowing family
                                                trip ideas makes you a rookie. What everyone is saying about daily
                                                deals.

                                            </Tab.Pane>
                                            <Tab.Pane className="tab-pane text-muted" id="about-vertical" role="tabpanel" eventKey="second">
                                                How travel coupons make you a better lover. Why cultural solutions
                                                are the new black. Why mom was right about travel insurances. How
                                                family trip ideas can help you predict the future. <b>How carnival
                                                    cruises make you a better lover</b>. Why you'll never succeed at
                                                daily deals. 11 ways cheapest flights can find you the love of your
                                                life. The complete beginner's guide to mission trips.
                                            </Tab.Pane>
                                            <Tab.Pane className="tab-pane text-muted" id="services-vertical" role="tabpanel" eventKey="third">
                                                Unbelievable healthy snack success stories. 12 facts about safe food
                                                handling tips that will impress your friends. Restaurant weeks by
                                                the numbers. Will mexican food ever rule the world? The 10 best thai
                                                restaurant youtube videos. How restaurant weeks can make you sick.
                                                The complete beginner's guide to cooking healthy food. Unbelievable
                                                food stamp success stories.
                                            </Tab.Pane>
                                            <Tab.Pane className="tab-pane text-muted" id="contacts-vertical" role="tabpanel" eventKey="fourth">
                                                Why delicious magazines are killing you. Why our world would end if
                                                restaurants disappeared. Why restaurants are on crack about
                                                restaurants. How restaurants are making the world a better place. 8
                                                great articles about minute meals. Why our world would end if
                                                healthy snacks disappeared. Why the world would end without mexican
                                                food. The evolution of chef uniforms.
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Vertical alignment with links
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="third">
                                <Row>
                                    <Col xl={3}>
                                        <Nav className="nav nav-tabs flex-column nav-style-5" role="tablist" defaultActiveKey="third">
                                            <Nav.Item>
                                                <Nav.Link href="#home-vertical-link" eventKey="first">
                                                    <i className="ri-home-smile-line me-2 align-middle d-inline-block"></i>Home</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second" href="#about-vertical-link">
                                                    <i className="ri-archive-drawer-line me-2 align-middle d-inline-block"></i>About</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third" href="#services-vertical-link">
                                                    <i className="ri-bank-line me-2 align-middle d-inline-block"></i>Services</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="fourth" href="#contacts-vertical-link">
                                                    <i className="ri-contacts-book-2-line me-2 align-middle d-inline-block"></i>Contacts</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col xl={9}>
                                        <Tab.Content className="tab-content">
                                            <Tab.Pane className="tab-pane text-muted" id="home-vertical-link" eventKey="first"
                                                role="tabpanel">
                                                How hotel deals can help you live a better life. <b>How celebrity
                                                    cruises</b> aren't as bad as you think. How cultural solutions
                                                can help you predict the future. How to cheat at dog friendly hotels
                                                and get away with it. 17 problems with summer activities. How to
                                                cheat at travel agents and get away with it. How not knowing family
                                                trip ideas makes you a rookie. What everyone is saying about daily
                                                deals.
                                            </Tab.Pane>
                                            <Tab.Pane className="tab-pane text-muted" id="about-vertical-link" eventKey="second"
                                                role="tabpanel">
                                                How travel coupons make you a better lover. Why cultural solutions
                                                are the new black. Why mom was right about travel insurances. How
                                                family trip ideas can help you predict the future. <b>How carnival
                                                    cruises make you a better lover</b>. Why you'll never succeed at
                                                daily deals. 11 ways cheapest flights can find you the love of your
                                                life. The complete beginner's guide to mission trips.
                                            </Tab.Pane>
                                            <Tab.Pane className="tab-pane show  text-muted" id="services-vertical-link" eventKey="third"
                                                role="tabpanel">
                                                Unbelievable healthy snack success stories. 12 facts about safe food
                                                handling tips that will impress your friends. Restaurant weeks by
                                                the numbers. <b><i>Will mexican food ever rule the world? The 10 best thai
                                                    restaurant youtube videos</i></b>. How restaurant weeks can make you sick.
                                                The complete beginner's guide to cooking healthy food. Unbelievable
                                                food stamp success stories.
                                            </Tab.Pane>
                                            <Tab.Pane className="tab-pane text-muted" id="contacts-vertical-link" eventKey="fourth"
                                                role="tabpanel">
                                                Why delicious magazines are killing you. Why our world would end if
                                                restaurants disappeared. Why restaurants are on crack about
                                                restaurants. How restaurants are making the world a better place. 8
                                                great articles about minute meals. Why our world would end if
                                                healthy snacks disappeared. Why the world would end without mexican
                                                food. The evolution of chef uniforms.
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Center Aligned Nav
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Nav className="nav nav-pills justify-content-center nav-style-2 mb-3" defaultActiveKey="first">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" href="#home-center">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" href="#about-center" >About</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" href="#services-center">Services</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth" href="#contacts-center">Contacts</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="myTabContent">
                                    <Tab.Pane role="tabpanel" eventKey="first">
                                        How travel coupons make you a better lover. Why cultural solutions are the new
                                        black. Why mom was right about travel insurances. How family trip ideas can help
                                        you predict the future. <b>How carnival cruises make you a better lover</b>. Why
                                        you'll never succeed at daily deals. 11 ways cheapest flights can find you the
                                        love of your life. The complete beginner's guide to mission trips. If you read
                                        one article about cultural notes read this one. Why you shouldn't eat vacation
                                        package in bed.
                                    </Tab.Pane>
                                    <Tab.Pane role="tabpanel"
                                        eventKey="second"> How hotel deals can help you live a better life. <b>How celebrity cruises</b>
                                        aren't as bad as you think. How cultural solutions can help you predict the
                                        future. How to cheat at dog friendly hotels and get away with it. 17 problems
                                        with summer activities. How to cheat at travel agents and get away with it. How
                                        not knowing family trip ideas makes you a rookie. What everyone is saying about
                                        daily deals. How twitter can teach you about carnival cruises. How to start
                                        using cultural solutions.
                                    </Tab.Pane>
                                    <Tab.Pane role="tabpanel"
                                        eventKey="third"> Unbelievable healthy snack success stories. 12 facts about safe food handling
                                        tips that will impress your friends. Restaurant weeks by the numbers. Will
                                        mexican food ever rule the world? The 10 best thai restaurant youtube videos.
                                        How restaurant weeks can make you sick. The complete beginner's guide to cooking
                                        healthy food. Unbelievable food stamp success stories. How whole foods markets
                                        are making the world a better place. 16 things that won't happen in dish
                                        reviews.
                                    </Tab.Pane>
                                    <Tab.Pane role="tabpanel"
                                        eventKey="fourth">Why delicious magazines are killing you. Why our world would end if restaurants
                                        disappeared. Why restaurants are on crack about restaurants. How restaurants are
                                        making the world a better place. 8 great articles about minute meals. Why our
                                        world would end if healthy snacks disappeared. Why the world would end without
                                        mexican food. The evolution of chef uniforms. How not knowing food processors
                                        makes you a rookie. Why whole foods markets beat peanut butter on pancakes.
                                        reviews.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Right Aligned Nav
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Nav className="nav nav-pills justify-content-end nav-style-3 mb-3" defaultActiveKey="first">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" href="#home-right">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" href="#about-right">About</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" href="#services-right">Services</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth" href="#contacts-right">Contacts</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="myTabContent">
                                    <Tab.Pane role="tabpanel" eventKey="first">
                                        How travel coupons make you a better lover. Why cultural solutions are the new
                                        black. Why mom was right about travel insurances. How family trip ideas can help
                                        you predict the future. <b>How carnival cruises make you a better lover</b>. Why
                                        you'll never succeed at daily deals. 11 ways cheapest flights can find you the
                                        love of your life. The complete beginner's guide to mission trips. If you read
                                        one article about cultural notes read this one. Why you shouldn't eat vacation
                                        package in bed.
                                    </Tab.Pane>
                                    <Tab.Pane role="tabpanel"
                                        eventKey="second"> How hotel deals can help you live a better life. <b>How celebrity cruises</b>
                                        aren't as bad as you think. How cultural solutions can help you predict the
                                        future. How to cheat at dog friendly hotels and get away with it. 17 problems
                                        with summer activities. How to cheat at travel agents and get away with it. How
                                        not knowing family trip ideas makes you a rookie. What everyone is saying about
                                        daily deals. How twitter can teach you about carnival cruises. How to start
                                        using cultural solutions.
                                    </Tab.Pane>
                                    <Tab.Pane role="tabpanel"
                                        eventKey="third"> Unbelievable healthy snack success stories. 12 facts about safe food handling
                                        tips that will impress your friends. Restaurant weeks by the numbers. Will
                                        mexican food ever rule the world? The 10 best thai restaurant youtube videos.
                                        How restaurant weeks can make you sick. The complete beginner's guide to cooking
                                        healthy food. Unbelievable food stamp success stories. How whole foods markets
                                        are making the world a better place. 16 things that won't happen in dish
                                        reviews.
                                    </Tab.Pane>
                                    <Tab.Pane role="tabpanel"
                                        eventKey="fourth">Why delicious magazines are killing you. Why our world would end if restaurants
                                        disappeared. Why restaurants are on crack about restaurants. How restaurants are
                                        making the world a better place. 8 great articles about minute meals. Why our
                                        world would end if healthy snacks disappeared. Why the world would end without
                                        mexican food. The evolution of chef uniforms. How not knowing food processors
                                        makes you a rookie. Why whole foods markets beat peanut butter on pancakes.
                                        reviews.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Tab.Container defaultActiveKey="first">
                            <Card.Header className=" justify-content-between">
                                <Card.Title>
                                    Header Tabs
                                </Card.Title>
                                <div>
                                    <Nav className="nav nav-tabs justify-content-end nav-tabs-header mb-0" role="tablist" defaultActiveKey="first">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first" href="#home-header">Home</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second" href="#about-header">About</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third" href="#services-header">Services</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </div>
                            </Card.Header>
                            <Card.Body>
                                <Tab.Content className="tab-content">
                                    <Tab.Pane className="tab-pane show  text-muted" id="home-header" eventKey="first"
                                        role="tabpanel">
                                        <ul className="mb-0">
                                            <li className="mb-2">
                                                How hotel deals can help you live a better life. <b>How celebrity
                                                    cruises</b> aren't as bad as you think. How cultural solutions
                                                can help you predict the future. How to cheat at dog friendly hotels
                                                and get away with it. 17 problems with summer activities. How to
                                                cheat at travel agents and get away with it. How not knowing family
                                                trip ideas makes you a rookie. What everyone is saying about daily
                                                deals.
                                            </li>
                                            <li>
                                                How travel coupons make you a better lover. Why cultural solutions
                                                are the new black. Why mom was header about travel insurances. How
                                                family trip ideas can help you predict the future. <b>How carnival
                                                    cruises make you a better lover</b>. Why you'll never succeed at
                                                daily deals. 11 ways cheapest flights can find you the love of your
                                                life. The complete beginner's guide to mission trips.
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane text-muted" id="about-header" eventKey="second"
                                        role="tabpanel">
                                        <ul className="mb-0">
                                            <li className="mb-2">
                                                How travel coupons make you a better lover. Why cultural solutions
                                                are the new black. Why mom was header about travel insurances. How
                                                family trip ideas can help you predict the future. <b>How carnival
                                                    cruises make you a better lover</b>. Why you'll never succeed at
                                                daily deals. 11 ways cheapest flights can find you the love of your
                                                life. The complete beginner's guide to mission trips.
                                            </li>
                                            <li>
                                                How hotel deals can help you live a better life. <b>How celebrity
                                                    cruises</b> aren't as bad as you think. How cultural solutions
                                                can help you predict the future. How to cheat at dog friendly hotels
                                                and get away with it. 17 problems with summer activities. How to
                                                cheat at travel agents and get away with it. How not knowing family
                                                trip ideas makes you a rookie. What everyone is saying about daily
                                                deals.
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane text-muted" id="services-header" eventKey="third"
                                        role="tabpanel">
                                        <ul className="mb-0">
                                            <li className="mb-2">
                                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
                                            </li>
                                            <li>
                                                How travel coupons make you a better lover. Why cultural solutions
                                                are the new black. Why mom was header about travel insurances. How
                                                family trip ideas can help you predict the future. <b>How carnival
                                                    cruises make you a better lover</b>. Why you'll never succeed at
                                                daily deals. 11 ways cheapest flights can find you the love of your
                                                life. The complete beginner's guide to mission trips.
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                        </Tab.Container>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Tab.Container defaultActiveKey="first">
                            <Card.Header>
                                <Card.Title>
                                    Footer Tabs
                                </Card.Title>
                            </Card.Header>
                            <Card.Body>
                                <Tab.Content className="tab-content">
                                    <Tab.Pane
                                        className="tab-pane show text-muted" id="home-footer" role="tabpanel" eventKey="first">
                                        How travel coupons make you a better lover. Why cultural solutions are the new
                                        black. Why mom was right about travel insurances. How family trip ideas can help
                                        you predict the future. <b>How carnival cruises make you a better lover</b>. Why
                                        you'll never succeed at daily deals. 11 ways cheapest flights can find you the
                                        love of your life. The complete beginner's guide to mission trips. If you read
                                        one article about cultural notes read this one. Why you shouldn't eat vacation
                                        package in bed.
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane text-muted" id="about-footer" role="tabpanel" eventKey="second">
                                        How hotel deals can help you live a better life. <b>How celebrity cruises</b>
                                        aren't as bad as you think. How cultural solutions can help you predict the
                                        future. How to cheat at dog friendly hotels and get away with it. 17 problems
                                        with summer activities. How to cheat at travel agents and get away with it. How
                                        not knowing family trip ideas makes you a rookie. What everyone is saying about
                                        daily deals. How twitter can teach you about carnival cruises. How to start
                                        using cultural solutions.
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane text-muted" id="services-footer" role="tabpanel" eventKey="third">
                                        Unbelievable healthy snack success stories. 12 facts about safe food handling
                                        tips that will impress your friends. Restaurant weeks by the numbers. Will
                                        mexican food ever rule the world? The 10 best thai restaurant youtube videos.
                                        How restaurant weeks can make you sick. The complete beginner's guide to cooking
                                        healthy food. Unbelievable food stamp success stories. How whole foods markets
                                        are making the world a better place. 16 things that won't happen in dish
                                        reviews.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Card.Body>
                            <Card.Footer>
                                <Nav className="nav nav-tabs justify-content-end nav-tabs-footer mb-0" defaultActiveKey="first">
                                    <Nav.Item className="m-1">
                                        <Nav.Link eventKey="first" href="#home-footer">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="m-1">
                                        <Nav.Link eventKey="second" href="#about-footer">About</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="m-1">
                                        <Nav.Link eventKey="third" href="#services-footer">Services</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Card.Footer>
                        </Tab.Container>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={4} xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Tab Style-1
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey="first">
                                <Nav className="nav nav-tabs tab-style-1 d-sm-flex d-block" defaultActiveKey="first">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" href="#orders">Orders</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" href="#accepted">Accepted</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" href="#declined">Declined</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane className="tab-pane" id="orders" role="tabpanel" eventKey="first">
                                        <div className="text-muted"><b>Lorem Ipsum is simply dummy text of the
                                            printing</b> and typesetting industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever since the 1500s, when an unknown
                                            printer took a galley of type and scrambled.</div>
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane" id="accepted" role="tabpanel" eventKey="second">
                                        <div className="text-muted">Many desktop publishing packages and web page
                                            editors now use Lorem Ipsum as their default model text, and a search
                                            for <b>'lorem ipsum'</b> will uncover many web sites still in their
                                            infancy. Various versions have evolved over the years.</div>
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane" id="declined" role="tabpanel" eventKey="third">
                                        <div className="text-muted">There are many variations of passages of Lorem
                                            Ipsum available, but the majority have suffered alteration in some form,
                                            <b>by injected humour</b>, or randomised words which don't look even
                                            slightly believable
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={5} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Tab Style-2
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey="second">
                                <Nav variant="pills" className="nav nav-tabs tab-style-2 nav-justified mb-3 d-sm-flex d-block" id="myTab1" role="tablist" defaultActiveKey="first">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" id="order-tab" type="button" ><i
                                            className="ri-gift-line me-1 align-middle"></i>Ordered</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" id="confirmed-tab" type="button" ><i
                                            className="ri-check-double-line me-1 align-middle"></i>Confirmed</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" id="shipped-tab" type="button" ><i
                                            className="ri-shopping-bag-3-line me-1 align-middle"></i>Shipped</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth" id="delivered-tab" type="button" ><i
                                            className="ri-truck-line me-1 align-middle"></i>Delivery</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="tab-content" id="myTabContent">
                                    <Tab.Pane className="tab-pane fade text-muted" id="order-tab-pane" role="tabpanel" eventKey="first"
                                        aria-labelledby="home-tab" tabIndex={0}>
                                        <ul className="ps-3 mb-0">
                                            <li className="mb-2">
                                                There are many variations of passages of Lorem Ipsum available, but the
                                                majority have suffered alteration in some form, by injected humour, or
                                                randomised words which don't look even slightly believable. If you are
                                                going to use a passage of Lorem Ipsum.
                                            </li>
                                            <li>Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                                has roots in a piece of classical Latin literature from 45 BC, making it
                                                over 2000 years old. Richard McClintock.</li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane fade show  text-muted" id="confirm-tab-pane" eventKey="second"
                                        role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
                                        <ul className="ps-3 mb-0">
                                            <li className="mb-2">
                                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced
                                                below for those interested. Sections 1.10.32 and 1.10.33 from "de
                                                Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
                                                original form.
                                            </li>
                                            <li>As opposed to using 'Content here, content here', making it look like
                                                readable English. Many desktop publishing packages and web page editors
                                                now use Lorem Ipsum as their default model text, and a search.</li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane fade text-muted" id="shipped-tab-pane" role="tabpanel" eventKey="third"
                                        aria-labelledby="contact-tab" tabIndex={0}>
                                        <ul className="ps-3 mb-0">
                                            <li className="mb-2">
                                                Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                                has roots in a piece of classical Latin literature from 45 BC, making it
                                                over 2000 years old. Richard McClintock, a Latin professor at
                                                Hampden-Sydney College in Virginia.
                                            </li>
                                            <li>but also the leap into electronic typesetting, remaining essentially
                                                unchanged. It was popularised in the 1960s with the release of Letraset
                                                sheets containing Lorem Ipsum passages, and more recently.</li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane fade text-muted" id="delivered-tab-pane" role="tabpanel" tabIndex={0} eventKey="fourth">
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-2">
                                                It is a long established fact that a reader will be distracted by the
                                                readable content of a page when looking at its layout. The point of
                                                using Lorem Ipsum is that it has a more-or-less normal distribution of
                                                letters.
                                            </li>
                                            <li>A Latin professor at Hampden-Sydney College in Virginia, looked up one
                                                of the more obscure Latin words, consectetur, from a Lorem Ipsum
                                                passage, and going through the cites of the word in classical
                                                literature.</li>
                                        </ul>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={3} xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Tab-Style-3
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey="first">
                                <Nav variant="pills" className="nav nav-tabs justify-content-center mb-5 tab-style-3" id="myTab2" role="tablist" defaultActiveKey="first">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" className="home py-1" id="home-tab"
                                            type="button">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" className="about py-1" id="profile-tab"
                                            type="button" >About</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" className="services py-1" id="contact-tab"
                                            type="button" >Services</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="myTabContent1">
                                    <Tab.Pane className=" fade show  text-muted" id="home-tab-pane" eventKey="first"
                                        tabIndex={0}><b>Lorem Ipsum is
                                            simply dummy text of the printing</b> and typesetting industry. Lorem
                                        Ipsum has been the industry's.</Tab.Pane>
                                    <Tab.Pane className="fade text-muted" id="profile-tab-pane" eventKey="second"
                                        tabIndex={0}>Many desktop
                                        publishing packages as their default model text, and a search for <b>'lorem ipsum'</b> will over the
                                        years.</Tab.Pane>
                                    <Tab.Pane className="fade text-muted" id="contact-tab-pane" eventKey="third"
                                        tabIndex={0}>There, <b>by injected humour</b>, or randomised
                                        words which don't look even slightly believable.</Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Tab Style-4
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey="first">
                                <nav>
                                    <Nav variant="pills" className="nav nav-tabs nav-justified tab-style-4 d-flex" id="myTab2" role="tablist" defaultActiveKey="first">

                                        <Nav.Link eventKey="first" id="nav-home-tab" type="button" >Home</Nav.Link>

                                        <Nav.Link eventKey="second" id="nav-profile-tab" type="button">Profile</Nav.Link>

                                        <Nav.Link eventKey="third" id="nav-contact-tab" type="button">Contact</Nav.Link>

                                    </Nav>
                                </nav>
                                <Tab.Content className="tab-content" id="tab-style-4">
                                    <Tab.Pane className="tab-pane show " id="nav-home1" role="tabpanel" eventKey="first"
                                        aria-labelledby="nav-home-tab" tabIndex={0}>
                                        <b>Lorem Ipsum is simply dummy</b> text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                                        1500s, when an unknown printer took a galley of type and scrambled it to make a
                                        type specimen book. It has survived not only five centuries, but also the leap
                                        into electronic typesetting, remaining essentially unchanged. It was popularised
                                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                        passages, and more recently with desktop publishing software like Aldus
                                        PageMaker including versions of Lorem Ipsum.
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane" id="nav-profile1" role="tabpanel" eventKey="second"
                                        aria-labelledby="nav-profile-tab" tabIndex={0}>
                                        It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters, as opposed to using
                                        'Content here, content here', making it look like readable English. <b>Many
                                            desktop publishing</b> packages and web page editors now use Lorem Ipsum as
                                        their default model text, and a search for 'lorem ipsum' will uncover many web
                                        sites still in their infancy. Various versions have evolved over the years,
                                        sometimes by accident, sometimes on purpos, remaining essentially unchanged.
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane" id="nav-contact1" role="tabpanel" eventKey="third"
                                        aria-labelledby="nav-contact-tab" tabIndex={0}>
                                        There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form, by injected humour, or randomised words
                                        which don't look even slightly believable. <b>If you are going</b> to use a
                                        passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                                        hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                                        tend to repeat predefined chunks as necessary, making this the first true
                                        generator on the Internet. It uses a dictionary of over 200 Latin words,
                                        combined with a handful of model sentence structures.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Tab Style-5
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey="first">
                                <Nav variant="pills" className="nav nav-pills mb-3 nav-justified tab-style-5 d-sm-flex d-block" id="pills-tab" role="tablist" defaultActiveKey="first">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" id="pills-home-tab" type="button">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" id="pills-profile-tab" type="button">About</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" id="pills-contact-tab" type="button">Services</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="fourth" id="pills-disabled-tab" type="button">Contacts</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content id="pills-tabContent">
                                    <Tab.Pane className="tab-pane show  text-muted" id="pills-home" role="tabpanel" eventKey="first"
                                        aria-labelledby="pills-home-tab" tabIndex={0}>
                                        It is a long established fact that a reader will be distracted by the readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum is
                                        that it has a more-or-less normal distribution of letters, as opposed to using
                                        'Content here, content here', making it look like readable English. <b>Many
                                            desktop publishing</b> packages and web page editors now use Lorem Ipsum as
                                        their default model text, and a search for 'lorem ipsum' will uncover many web
                                        sites still in their infancy.
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane text-muted" id="pills-profile" role="tabpanel" eventKey="second"
                                        aria-labelledby="pills-profile-tab" tabIndex={0}>
                                        <b>Lorem Ipsum is simply dummy</b> text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                                        1500s, when an unknown printer took a galley of type and scrambled it to make a
                                        type specimen book. It has survived not only five centuries, but also the leap
                                        into electronic typesetting, remaining essentially unchanged. It was popularised
                                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                        passages.
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane text-muted" id="pills-contact" role="tabpanel" eventKey="third"
                                        aria-labelledby="pills-contact-tab" tabIndex={0}>
                                        There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form, by injected humour, or randomised words
                                        which don't look even slightly believable. <b>If you are going</b> to use a
                                        passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                                        hidden in the middle of text. All the Lorem Ipsum generators on the Internet
                                        tend to repeat predefined chunks as necessary, making this the first true
                                        generator on the Internet.
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane text-muted" id="pills-disabled" role="tabpanel" eventKey="fourth"
                                        aria-labelledby="pills-disabled-tab" tabIndex={0}>
                                        <b>Contrary to popular belief</b>, Contrary to popular belief, Lorem Ipsum is
                                        not simply random text. It has roots in a piece of classical Latin literature
                                        from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor
                                        at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                                        words, consectetur, from a Lorem Ipsum passage, and going through the cites of
                                        the word in classical literature, discovered the undoubtable source. Lorem Ipsum
                                        comes from sections.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={4}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Tab Style-6
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container defaultActiveKey="first">
                                <Nav as="ul" variant="pills" className="nav nav-tabs mb-3 tab-style-6" id="myTab" role="tablist" defaultActiveKey="first">
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="first" id="products-tab" type="button" ><i
                                            className="ri-gift-line me-1 align-middle d-inline-block"></i>Products</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="second" id="sales-tab" type="button"><i
                                            className="ri-bill-line me-1 align-middle d-inline-block"></i>Sales</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="third" id="profit-tab" type="button"><i
                                            className="ri-money-dollar-box-line me-1 align-middle d-inline-block"></i>Profit</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item as="li">
                                        <Nav.Link eventKey="fourth" id="expenses-tab" type="button" ><i
                                            className="ri-exchange-box-line me-1 align-middle d-inline-block"></i>Expenses</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className="tab-content" id="myTabContent2">
                                    <Tab.Pane className="tab-pane fade show  p-0 border-bottom-0" id="products-tab-pane" eventKey="first"
                                        role="tabpanel" aria-labelledby="products-tab" tabIndex={0}>
                                        <div className="table-responsive">
                                            <table className="table mb-0">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Product</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Category</th>
                                                        <th scope="col">Price</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <th scope="row">
                                                            <span className="avatar avatar-sm">
                                                                <img src={product3} alt="img" />
                                                            </span>
                                                        </th>
                                                        <td>Stop Watch</td>
                                                        <td>Clocks</td>
                                                        <td>$1,299.00</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <span className="avatar avatar-sm">
                                                                <img src={product4} alt="img" />
                                                            </span>
                                                        </th>
                                                        <td>Camera</td>
                                                        <td>Gadgets</td>
                                                        <td>$7,249.29</td>
                                                    </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <span className="avatar avatar-sm">
                                                                <img src={product6} alt="img" />
                                                            </span>
                                                        </th>
                                                        <td>Shoes</td>
                                                        <td>Footwear</td>
                                                        <td>$799.00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane fade" id="sales-tab-pane" role="tabpanel" eventKey="second"
                                        aria-labelledby="sales-tab" tabIndex={0}>
                                        <ul className="list-unstyled mb-1">
                                            <li className="mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        Clothing
                                                    </div>
                                                    <div className="fs-14 fw-semibold">32,138</div>
                                                </div>
                                            </li>
                                            <li className="mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        Furniture
                                                    </div>
                                                    <div className="fs-14 fw-semibold">12,123</div>
                                                </div>
                                            </li>
                                            <li className="mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        electronics
                                                    </div>
                                                    <div className="fs-14 fw-semibold">9,238</div>
                                                </div>
                                            </li>
                                            <li className="mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        food Products
                                                    </div>
                                                    <div className="fs-14 fw-semibold">14,234</div>
                                                </div>
                                            </li>
                                            <li className="mb-0">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        Home Appliances
                                                    </div>
                                                    <div className="fs-14 fw-semibold">10,249</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane fade" id="profit-tab-pane" role="tabpanel" eventKey="third"
                                        aria-labelledby="profit-tab" tabIndex={0}>
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        Clothing
                                                    </div>
                                                    <div className="fs-14 fw-semibold text-success"><i
                                                        className="ri-arrow-up-s-fill me-1 align-middle"></i>22.75%
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        electronics
                                                    </div>
                                                    <div className="fs-14 fw-semibold text-success"><i
                                                        className="ri-arrow-up-s-fill me-1 align-middle"></i>42.24%
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        Furniture
                                                    </div>
                                                    <div className="fs-14 fw-semibold text-success"><i
                                                        className="ri-arrow-up-s-fill me-1 align-middle"></i>15.23%
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        Home Appliances
                                                    </div>
                                                    <div className="fs-14 fw-semibold text-success"><i
                                                        className="ri-arrow-up-s-fill me-1 align-middle"></i>15.14%
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="mb-0">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        food Products
                                                    </div>
                                                    <div className="fs-14 fw-semibold text-success"><i
                                                        className="ri-arrow-up-s-fill me-1 align-middle"></i>31.64%
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                    <Tab.Pane className="tab-pane fade" id="expenses-tab-pane" role="tabpanel" eventKey="fourth"
                                        aria-labelledby="expenses-tab" tabIndex={0}>
                                        <ul className="list-unstyled mb-0">
                                            <li className="mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        Clothing
                                                    </div>
                                                    <div className="fs-14 fw-semibold text-danger">-$31,134</div>
                                                </div>
                                            </li>
                                            <li className="mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        electronics
                                                    </div>
                                                    <div className="fs-14 fw-semibold text-danger">-$15,256</div>
                                                </div>
                                            </li>
                                            <li className="mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        Furniture
                                                    </div>
                                                    <div className="fs-14 fw-semibold text-danger">-$24,156</div>
                                                </div>
                                            </li>
                                            <li className="mb-3">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        Home Appliances
                                                    </div>
                                                    <div className="fs-14 fw-semibold text-danger">-$18,245</div>
                                                </div>
                                            </li>
                                            <li className="mb-0">
                                                <div className="d-flex justify-content-between">
                                                    <div>
                                                        food Products
                                                    </div>
                                                    <div className="fs-14 fw-semibold text-danger">-$18,478</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={8}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Vertical Tab Style-1
                            </Card.Title>
                        </Card.Header>
                        <Card.Body className=" d-flex align-items-start">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col md={2}>
                                        <Nav variant="pills" className="nav flex-column nav-pills me-3 tab-style-7" role="tablist" defaultActiveKey="third">
                                            <Nav.Link eventKey="first" className=" text-start " id="main-profile-tab" type="button" ><i
                                                className="ri-shield-user-line me-1 align-middle d-inline-block"></i>Profile</Nav.Link>
                                            <Nav.Link eventKey="second" className=" text-start" id="man-password-tab" type="button"><i
                                                className="ri-u-disk-line me-1 align-middle d-inline-block"></i>Password</Nav.Link>

                                            <Nav.Link eventKey="third" className=" text-start" id="main-team-tab" type="button" ><i
                                                className="ri-group-line me-1 align-middle d-inline-block"></i>Team</Nav.Link>

                                            <Nav.Link eventKey="fourth" className=" text-start" id="main-billing-tab"><i
                                                className="ri-bill-line me-1 align-middle d-inline-block"></i>Billing</Nav.Link>

                                            <Nav.Link eventKey="fivith" className=" text-start mb-1" id="main-email-tab" type="button" ><i
                                                className="ri-mail-line me-1 align-middle d-inline-block"></i>Email</Nav.Link>

                                        </Nav>
                                    </Col>
                                    <Col md={8}>
                                        <Tab.Content id="v-pills-tabContent">
                                            <Tab.Pane id="main-profile" role="tabpanel" eventKey="first" tabIndex={0}>
                                                <div className="d-sm-flex">
                                                    <div className="me-3">
                                                        <span className="avatar avatar-xxl">
                                                            <img src={face9} alt="img" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <div className="my-md-auto mt-4 ms-md-3">
                                                            <h5 className="font-weight-semibold ms-2 mb-1 pb-0">Adam Smith</h5>
                                                            <p className="text-muted ms-0 mb-2 pb-2 "> <span className="me-3"><i
                                                                className="far fa-address-card me-2"></i>Ui/Ux
                                                                Developer</span> <span className="me-3"><i
                                                                    className="fa fa-taxi me-2"></i>West
                                                                    fransisco,Alabama</span> <span><i
                                                                        className="far fa-flag me-2"></i>New Jersey</span> </p>
                                                            <p className="text-muted ms-0 mb-2"><span><i
                                                                className="fa fa-phone me-2"></i></span><span
                                                                    className="font-weight-semibold me-2">Phone:</span><span>+94
                                                                        12345 6789</span> </p>
                                                            <p className="text-muted ms-0 mb-2"><span><i
                                                                className="fa fa-envelope me-2"></i></span><span
                                                                    className="font-weight-semibold me-2">Email:</span><span>spruko.space@gmail.com</span>
                                                            </p>
                                                            <p className="text-muted ms-0 mb-2"><span><i
                                                                className="fa fa-globe me-2"></i></span><span
                                                                    className="font-weight-semibold me-2">Website:</span><span>sprukotechnologies</span>
                                                            </p>
                                                            <p className="text-muted mb-0 ms-2"><b>Lorem Ipsum</b> is simply
                                                                dummy text of the printing and typesetting industry. Lorem
                                                                Ipsum has been standard.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Pane>
                                            <Tab.Pane id="man-password" role="tabpanel" tabIndex={0} eventKey="second">
                                                <ul className="list-unstyled text-muted mb-0">
                                                    <li className="mb-2">
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's <b>standard dummy text
                                                            ever since the 1500s</b>, when an unknown printer took a galley
                                                        of type and scrambled it to make a type specimen book. It has
                                                        survived not only five centuries, but also the leap into electronic
                                                        typesetting, remaining essentially unchanged. It was popularised in
                                                        the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                                        passages, and more recently with desktop publishing software like
                                                        Aldus PageMaker including versions of Lorem Ipsum.
                                                    </li>
                                                    <li className="mb-2">Contrary to popular belief, Lorem Ipsum is not simply
                                                        random text. It has roots in a piece of classical Latin literature
                                                        from 45 BC, making it over 2000 years old. Richard McClintock, a
                                                        Latin professor at Hampden-Sydney College in Virginia,</li>
                                                    <li className="mb-0">There are many variations of passages of Lorem Ipsum
                                                        available, but the majority have suffered alteration in some form.
                                                    </li>
                                                </ul>
                                            </Tab.Pane>
                                            <Tab.Pane id="main-team" role="tabpanel" eventKey="third"
                                                aria-labelledby="main-team-tab" tabIndex={0}>
                                                <ul className="list-unstyled text-muted mb-0">
                                                    <li className="mb-2">Contrary to popular belief, Lorem Ipsum is not simply
                                                        random text. It has roots in a piece of classical Latin literature
                                                        from 45 BC, making it over 2000 years old. Richard McClintock, a
                                                        Latin professor at Hampden-Sydney College in Virginia,</li>
                                                    <li className="mb-2">There are many variations of passages of Lorem Ipsum
                                                        available, but the majority have suffered alteration in some form.
                                                    </li>
                                                    <li className="mb-0">
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's <b>standard dummy text
                                                            ever since the 1500s</b>, when an unknown printer took a galley
                                                        of type and scrambled it to make a type specimen book. It has
                                                        survived not only five centuries, but also the leap into electronic
                                                        typesetting, remaining essentially unchanged. It was popularised in
                                                        the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                                        passages, and more recently with desktop publishing software like
                                                        Aldus PageMaker including versions of Lorem Ipsum.
                                                    </li>
                                                </ul>
                                            </Tab.Pane>
                                            <Tab.Pane id="main-billing" role="tabpanel" eventKey="fourth"
                                                aria-labelledby="main-billing-tab" tabIndex={0}>
                                                <ul className="list-unstyled text-muted mb-0">
                                                    <li className="mb-2">Contrary to popular belief, Lorem Ipsum is not simply
                                                        random text. It has roots in a piece of classical Latin literature
                                                        from 45 BC, making it over 2000 years old. Richard McClintock, a
                                                        Latin professor at Hampden-Sydney College in Virginia,</li>
                                                    <li className="mb-2">
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's <b>standard dummy text
                                                            ever since the 1500s</b>, when an unknown printer took a galley
                                                        of type and scrambled it to make a type specimen book. It has
                                                        survived not only five centuries, but also the leap into electronic
                                                        typesetting, remaining essentially unchanged. It was popularised in
                                                        the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                                        passages, and more recently with desktop publishing software like
                                                        Aldus PageMaker including versions of Lorem Ipsum.
                                                    </li>
                                                    <li className="mb-0">There are many variations of passages of Lorem Ipsum
                                                        available, but the majority have suffered alteration in some form.
                                                    </li>
                                                </ul>
                                            </Tab.Pane>
                                            <Tab.Pane id="main-email" role="tabpanel" eventKey="fivith"
                                                aria-labelledby="main-email-tab" tabIndex={0}>
                                                <ul className="list-unstyled text-muted mb-0">
                                                    <li className="mb-2">Contrary to popular belief, Lorem Ipsum is not simply
                                                        random text. It has roots in a piece of classical Latin literature
                                                        from 45 BC, making it over 2000 years old. Richard McClintock, a
                                                        Latin professor at Hampden-Sydney College in Virginia,</li>
                                                    <li className="mb-2">There are many variations of passages of Lorem Ipsum
                                                        available, but the majority have suffered alteration in some form.
                                                    </li>
                                                    <li className="mb-0">
                                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                                        industry. Lorem Ipsum has been the industry's <b>standard dummy text
                                                            ever since the 1500s</b>, when an unknown printer took a galley
                                                        of type and scrambled it to make a type specimen book. It has
                                                        survived not only five centuries, but also the leap into electronic
                                                        typesetting, remaining essentially unchanged. It was popularised in
                                                        the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                                        passages, and more recently with desktop publishing software like
                                                        Aldus PageMaker including versions of Lorem Ipsum.
                                                    </li>
                                                </ul>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xxl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Vertical Tab Style-2
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col md={3}>
                                        <Nav className="nav nav-tabs flex-column vertical-tabs-2" role="tablist" defaultActiveKey="first">
                                            <Nav.Item>
                                                <Nav.Link href="#home-vertical-custom" eventKey="first">
                                                    <p className="mb-1"><i className="ri-home-4-line"></i></p>
                                                    <p className="mb-0 text-break">Home</p></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second" href="#about-vertical-custom"><p className="mb-1"><i className="ri-phone-line"></i></p>
                                                    <p className="mb-0 text-break">About</p></Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link href="#contacts-vertical" eventKey="third" className="mb-0" >
                                                    <p className="mb-1"><i className="ri-customer-service-line"></i></p>
                                                    <p className="mb-0 text-break">Services</p></Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col md={9}>
                                        <Tab.Content>
                                            <Tab.Pane className="text-muted" id="home-vertical-custom" eventKey="first"
                                                role="tabpanel">
                                                <ul className="mb-0">
                                                    <li className="mb-2">
                                                        How hotel deals can help you live a better life. <b>How celebrity
                                                            cruises</b> aren't as bad as you think. How cultural solutions
                                                        can help you predict the future. How to cheat at dog friendly hotels
                                                        and get away with it. 17 problems with summer activities. How to
                                                        cheat at travel agents and get away with it. How not knowing family
                                                        trip ideas makes you a rookie. What everyone is saying about daily
                                                        deals.
                                                    </li>
                                                    <li>
                                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.
                                                    </li>
                                                </ul>
                                            </Tab.Pane>
                                            <Tab.Pane className="text-muted" id="about-vertical-custom" eventKey="second"
                                                role="tabpanel">
                                                <ul className="mb-0">
                                                    <li className="mb-2">
                                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham,How hotel deals can help you live a better life. <b>How celebrity
                                                            cruises</b>
                                                    </li>
                                                    <li>
                                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.
                                                    </li>
                                                </ul>
                                            </Tab.Pane>
                                            <Tab.Pane className="text-muted" id="services-vertical-custom" eventKey="third"
                                                role="tabpanel">
                                                <ul className="mb-0">
                                                    <li className="mb-2">
                                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.
                                                    </li>
                                                    <li>
                                                        How hotel deals can help you live a better life. <b>How celebrity
                                                            cruises</b> aren't as bad as you think. How cultural solutions
                                                        can help you predict the future. How to cheat at dog friendly hotels
                                                        and get away with it. 17 problems with summer activities. How to
                                                        cheat at travel agents and get away with it. How not knowing family
                                                        trip ideas makes you a rookie. What everyone is saying about daily
                                                        deals.
                                                    </li>
                                                </ul>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xxl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Vertical Tabs Style-3
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Row>
                                    <Col md={4}>
                                        <Nav className="nav nav-tabs flex-column vertical-tabs-3" role="tablist" defaultActiveKey="first">
                                            <Nav.Item>
                                                <Nav.Link href="#employee-vertical" eventKey="first">
                                                    <i className="ri-map-pin-user-line me-2 align-middle d-inline-block"></i>Employees</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second" href="#customers-vertical">
                                                    <i className="ri-group-line me-2 align-middle d-inline-block"></i>Customers</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link href="#products-vertical" eventKey="third" className="mb-0" >
                                                    <i className="ri-gift-line me-2 align-middle d-inline-block"></i>Products</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Col>
                                    <Col md={8}>
                                        <Tab.Content>
                                            <Tab.Pane className="text-muted" id="employee-vertical" eventKey="first"
                                                role="tabpanel">
                                                <ul className="mb-0">
                                                    <li className="mb-2">
                                                        How hotel deals can help you live a better life. <b>How celebrity
                                                            cruises</b> aren't as bad as you think. How cultural solutions
                                                        can help you predict the future. How to cheat at dog friendly hotels
                                                        and get away with it. 17 problems with summer activities. How to
                                                        cheat at travel agents and get away with it. How not knowing family
                                                        trip ideas makes you a rookie. What everyone is saying about daily
                                                        deals.
                                                    </li>
                                                    <li>
                                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                                    </li>
                                                </ul>
                                            </Tab.Pane>
                                            <Tab.Pane className="text-muted" id="customers-vertical" eventKey="second"
                                                role="tabpanel">
                                                <ul className="mb-0">
                                                    <li className="mb-2">
                                                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham,How hotel deals can help you live a better life. <b>How celebrity
                                                            cruises</b>
                                                    </li>
                                                    <li>
                                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney.
                                                    </li>
                                                </ul>
                                            </Tab.Pane>
                                            <Tab.Pane className=" text-muted" id="products-vertical" eventKey="third"
                                                role="tabpanel">
                                                <ul className="mb-0">
                                                    <li className="mb-2">
                                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden.
                                                    </li>
                                                    <li>
                                                        How hotel deals can help you live a better life. <b>How celebrity
                                                            cruises</b> aren't as bad as you think. How cultural solutions
                                                        can help you predict the future. How to cheat at dog friendly hotels
                                                        and get away with it. 17 problems with summer activities. How to
                                                        cheat at travel agents.
                                                    </li>
                                                </ul>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Col>
                                </Row>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Tabs with dropdowns
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Nav variant='pills' className="nav nav-tabs mb-3" role="tablist" defaultActiveKey="first">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" href="#hometab-dropdown"
                                            aria-selected="true">Home</Nav.Link>
                                    </Nav.Item>
                                    <Dropdown className="nav-item dropdown">
                                        <Dropdown.Toggle className="nav-link dropdown-toggle" variant=''
                                        >Company</Dropdown.Toggle>
                                        <Dropdown.Menu >
                                            <Dropdown.Item href="#homeabout-dropdown" eventKey="second"
                                                aria-selected="false">About</Dropdown.Item>
                                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" href="#homeproducts-dropdown"
                                        >Products</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link disabled> Services</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane className=" text-muted" id="hometab-dropdown" role="tabpanel" eventKey="first">
                                        <b>Lorem Ipsum is simply dummy</b> text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the
                                        1500s, when an unknown printer took a galley of type and scrambled it to make a
                                        type specimen book. It has survived not only five centuries.
                                    </Tab.Pane>
                                    <Tab.Pane className=" text-muted" id="homeabout-dropdown" role="tabpanel" eventKey="second">
                                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                        in a piece of classical Latin literature from 45 BC, <b>Making it over 2000
                                            years old</b>. Richard McClintock, a Latin professor at Hampden-Sydney
                                        College in Virginia, looked up one of the more obscure Latin words, consectetur.
                                    </Tab.Pane>
                                    <Tab.Pane className=" text-muted" id="homeproducts-dropdown" role="tabpanel" eventKey="third">
                                        There are many variations of passages of <b>Lorem Ipsum available</b>, but the
                                        majority have suffered alteration in some form, by injected humour, or
                                        randomised words which don't look even slightly believable. If you are going to
                                        use a passage of Lorem Ipsum, you need to be sure there isn't anything.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Pills with dropdowns
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Nav variant='pills' className="nav nav-pills mb-3" role="tablist" defaultActiveKey="first">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" href="#pill-products">Products</Nav.Link>
                                    </Nav.Item>
                                    <Dropdown className="nav-item dropdown">
                                        <Dropdown.Toggle className="nav-link dropdown-toggle" variant=''
                                            role="button" aria-expanded="false">Cart</Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item data-bs-toggle="tab" role="tab" href="#pill-wishlist" eventKey="second"
                                                aria-selected="false">Wishlist</Dropdown.Item>
                                            <Dropdown.Item href="#">Liked</Dropdown.Item>
                                            <Dropdown.Item href="#">Save For Later</Dropdown.Item>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <Dropdown.Item href="#">Recently Viewed</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" href="#pill-orders">Orders</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link disabled> Offers</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane className="text-muted" id="pill-products" role="tabpanel" eventKey="first">
                                        How travel coupons make you a better lover. Why cultural solutions are the new
                                        black. Why mom was right about travel insurances. How family trip ideas can help
                                        you predict the future. <b>How carnival cruises make you a better lover</b>. Why
                                        you'll never succeed at daily deals.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="pill-wishlist" role="tabpanel" eventKey="second">
                                        How hotel deals can help you live a better life. <b>How celebrity cruises</b>
                                        aren't as bad as you think. How cultural solutions can help you predict the
                                        future. How to cheat at dog friendly hotels and get away with it. 17 problems
                                        with summer activities. How to cheat at travel agents and get away with it.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="pill-orders" role="tabpanel" eventKey="third">
                                        Unbelievable healthy snack success stories. 12 facts about safe food handling
                                        tips that will impress your friends. Restaurant weeks by the numbers. Will
                                        mexican food ever rule the world? The 10 best thai restaurant youtube videos.
                                        How restaurant weeks can make you sick.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                FIll Pills
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Nav variant='pills' className="nav nav-pills nav-fill mb-3" role="tablist" defaultActiveKey="first">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" href="#fill-pill-home">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" href="#fill-pill-about">Customer-ratings</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" href="#fill-pill-services">Services</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link disabled> Disabled</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane className="text-muted" id="fill-pill-home" role="tabpanel" eventKey="first">
                                        How travel coupons make you a better lover. Why cultural solutions are the new
                                        black. Why mom was right about travel insurances. How family trip ideas can help
                                        you predict the future. <b>How carnival cruises make you a better lover</b>. Why
                                        you'll never succeed at daily deals.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="fill-pill-about" role="tabpanel" eventKey="second">
                                        How hotel deals can help you live a better life. <b>How celebrity cruises</b>
                                        aren't as bad as you think. How cultural solutions can help you predict the
                                        future. How to cheat at dog friendly hotels and get away with it. 17 problems
                                        with summer activities. How to cheat at travel agents and get away with it.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="fill-pill-services" role="tabpanel" eventKey="third">
                                        Unbelievable healthy snack success stories. 12 facts about safe food handling
                                        tips that will impress your friends. Restaurant weeks by the numbers. Will
                                        mexican food ever rule the world? The 10 best thai restaurant youtube videos.
                                        How restaurant weeks can make you sick.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={6}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                justified Pills
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Nav variant='pills' className="nav nav-pills nav-justified mb-3 d-sm-flex d-block" role="tablist" defaultActiveKey="first">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first" href="#justified-pill-home">Home</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second" href="#justified-pill-details">Company Details</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third" href="#justified-pill-products">Products</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link disabled> Disabled</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane className="text-muted" id="justified-pill-home" role="tabpanel" eventKey="first">
                                        How travel coupons make you a better lover. Why cultural solutions are the new
                                        black. Why mom was right about travel insurances. How family trip ideas can help
                                        you predict the future. <b>How carnival cruises make you a better lover</b>. Why
                                        you'll never succeed at daily deals.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="justified-pill-details" role="tabpanel" eventKey="second">
                                        How hotel deals can help you live a better life. <b>How celebrity cruises</b>
                                        aren't as bad as you think. How cultural solutions can help you predict the
                                        future. How to cheat at dog friendly hotels and get away with it. 17 problems
                                        with summer activities. How to cheat at travel agents and get away with it.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="justified-pill-products" role="tabpanel" eventKey="third">
                                        Unbelievable healthy snack success stories. 12 facts about safe food handling
                                        tips that will impress your friends. Restaurant weeks by the numbers. Will
                                        mexican food ever rule the world? The 10 best thai restaurant youtube videos.
                                        How restaurant weeks can make you sick.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xl={12}>
                    <Card className="custom-card">
                        <Card.Header>
                            <Card.Title>
                                Working with flex utilities
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                                <Nav variant='pills' className="nav nav-pills flex-column flex-sm-row mb-3" role="tablist" defaultActiveKey="first">
                                    <Nav.Link className="flex-sm-fill text-sm-center" eventKey="first"
                                        href="#pill-flex-home">Home</Nav.Link>
                                    <Nav.Link className="flex-sm-fill text-sm-center" eventKey="second"
                                        href="#pill-flex-big">More Data More The Tab Size</Nav.Link>
                                    <Nav.Link className="flex-sm-fill text-sm-center" eventKey="third"
                                        href="#pill-flex-about">About</Nav.Link>
                                    <Nav.Link disabled className="flex-sm-fill text-sm-center">Services</Nav.Link>
                                </Nav>
                                <Tab.Content className="tab-content">
                                    <Tab.Pane className="text-muted" id="pill-flex-home" role="tabpanel" eventKey="first">
                                        How travel coupons make you a better lover. Why cultural solutions are the new
                                        black. Why mom was right about travel insurances. How family trip ideas can help
                                        you predict the future. <b>How carnival cruises make you a better lover</b>. Why
                                        you'll never succeed at daily deals. 11 ways cheapest flights can find you the
                                        love of your life. The complete beginner's guide to mission trips. If you read
                                        one article about cultural notes read this one. Why you shouldn't eat vacation
                                        package in bed.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="pill-flex-big" role="tabpanel" eventKey="second">
                                        How hotel deals can help you live a better life. <b>How celebrity cruises</b>
                                        aren't as bad as you think. How cultural solutions can help you predict the
                                        future. How to cheat at dog friendly hotels and get away with it. 17 problems
                                        with summer activities. How to cheat at travel agents and get away with it. How
                                        not knowing family trip ideas makes you a rookie. What everyone is saying about
                                        daily deals. How twitter can teach you about carnival cruises. How to start
                                        using cultural solutions.
                                    </Tab.Pane>
                                    <Tab.Pane className="text-muted" id="pill-flex-about" role="tabpanel" eventKey="third">
                                        Unbelievable healthy snack success stories. 12 facts about safe food handling
                                        tips that will impress your friends. Restaurant weeks by the numbers. Will
                                        mexican food ever rule the world? The 10 best thai restaurant youtube videos.
                                        How restaurant weeks can make you sick. The complete beginner's guide to cooking
                                        healthy food. Unbelievable food stamp success stories. How whole foods markets
                                        are making the world a better place. 16 things that won't happen in dish
                                        reviews.
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Navtabs;
