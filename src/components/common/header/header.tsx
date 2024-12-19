import { Fragment, useEffect, useState } from 'react';
import { Badge, Button, ButtonGroup, Dropdown, Form, ListGroup, Modal, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { MENUITEMS } from '../sidebar/sidemenu/sidemenu';
import { connect } from "react-redux";
import { ThemeChanger } from "../../../redux/action";
import desktoplogo from "../../../assets/images/brand-logos/desktop-logo.png";
import togglelogo from "../../../assets/images/brand-logos/toggle-logo.png";
import desktopdark from "../../../assets/images/brand-logos/desktop-dark.png";
import toggledark from "../../../assets/images/brand-logos/toggle-dark.png";
import desktopwhite from "../../../assets/images/brand-logos/desktop-white.png";
import togglewhite from "../../../assets/images/brand-logos/toggle-white.png";
import us from "../../../assets/images/flags/us_flag.jpg";
import spain from "../../../assets/images/flags/spain_flag.jpg";
import french from "../../../assets/images/flags/french_flag.jpg";
import germany from "../../../assets/images/flags/germany_flag.jpg";
import italy from "../../../assets/images/flags/italy_flag.jpg";
import russia from "../../../assets/images/flags/russia_flag.jpg";
import product1 from "../../../assets/images/ecommerce/jpg/1.jpg";
import product3 from "../../../assets/images/ecommerce/jpg/3.jpg";
import product5 from "../../../assets/images/ecommerce/jpg/5.jpg";
import product4 from "../../../assets/images/ecommerce/jpg/4.jpg";
import product6 from "../../../assets/images/ecommerce/jpg/6.jpg";
import face9 from "../../../assets/images/faces/9.jpg";
import figma from "../../../assets/images/apps/figma.png";
import powerpoint from "../../../assets/images/apps/microsoft-powerpoint.png";
import word from "../../../assets/images/apps/microsoft-word.png";
import calender from "../../../assets/images/apps/calender.png";
import sketch from "../../../assets/images/apps/sketch.png";
import googledocs from "../../../assets/images/apps/google-docs.png";
import google from "../../../assets/images/apps/google.png";
import translate from "../../../assets/images/apps/translate.png";
import googlesheets from "../../../assets/images/apps/google-sheets.png";
import store from '../../../redux/store';

const Header = ({ local_varaiable, ThemeChanger }: any) => {
    // for search modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    ///*** */
    const [fullScreen, setFullScreen] = useState(false);

    const toggleFullScreen = () => {
        const elem = document.documentElement;

        if (!document.fullscreenElement) {
            elem.requestFullscreen().then(() => setFullScreen(true));
        } else {
            document.exitFullscreen().then(() => setFullScreen(false));
        }
    };

    const handleFullscreenChange = () => {
        setFullScreen(!!document.fullscreenElement);
    };

    useEffect(() => {
        document.addEventListener('fullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    //Search functionality
    const [show1, setShow1] = useState(false);
    const [InputValue, setInputValue] = useState("");
    const [show2, setShow2] = useState(false);
    const [searchcolor, setsearchcolor] = useState("text-dark");
    const [searchval, setsearchval] = useState("Type something");
    const [NavData, setNavData] = useState([]);

    document.addEventListener("click", function () {
        document.querySelector(".search-result")?.classList.add("d-none");
    });
    const myfunction = (inputvalue: any) => {
        document.querySelector(".search-result")?.classList.remove("d-none");

        const i: any = [];
        const allElement2: any = [];

        MENUITEMS.map(mainlevel => {
            if (mainlevel.Items) {
                setShow1(true);
                mainlevel.Items.map(sublevel => {

                    if (sublevel.children) {
                        sublevel.children.map((sublevel1: any) => {

                            i.push(sublevel1);
                            if (sublevel1.children) {
                                sublevel1.children.map((sublevel2: any) => {

                                    i.push(sublevel2);
                                    return sublevel2;
                                });
                            }
                            return sublevel1;
                        });
                    }
                    return sublevel;
                });
            }
            return mainlevel;
        }
        );
        for (const allElement of i) {
            if (allElement.title.toLowerCase().includes(inputvalue.toLowerCase())) {
                if (allElement.title.toLowerCase().startsWith(inputvalue.toLowerCase())) {
                    setShow2(true);
                    allElement2.push(allElement);
                }
            }
        }
        if (!allElement2.length || inputvalue === "") {
            if (inputvalue === "") {
                setShow2(false);
                setsearchval("Type something");
                setsearchcolor('text-dark');
            }
            if (!allElement2.length) {
                setShow2(false);
                setsearchcolor('text-danger');
                setsearchval("There is no component with this name");
            }
        }
        setNavData(allElement2);

    };

    const Switchericon = () => {
        document.querySelector(".offcanvas-end")?.classList.toggle("show");
        const Rightside: any = document.querySelector(".offcanvas-end");
        Rightside.style.insetInlineEnd = "0px";
        if (document.querySelector(".switcher-backdrop")?.classList.contains('d-none')) {
            document.querySelector(".switcher-backdrop")?.classList.add("d-block");
            document.querySelector(".switcher-backdrop")?.classList.remove("d-none");
        }
    };

    //Dark Model
    const ToggleDark = () => {

        ThemeChanger({
            ...local_varaiable,
            "dataThemeMode": local_varaiable.dataThemeMode == 'dark' ? 'light' : 'dark',
            "dataHeaderStyles": local_varaiable.dataHeaderStyles == 'dark' ? 'light' : 'dark',
            "dataMenuStyles": local_varaiable.dataNavLayout == 'horizontal' ?  local_varaiable.dataThemeMode == 'dark' ? 'light' : 'dark' : "dark"

            });
        const theme = store.getState();

        if (theme.dataThemeMode != 'dark') {
            
            ThemeChanger({
                ...theme,
                "bodyBg1": '',
                "bodyBg2": '',
                "darkBg": '',
                "inputBorder": '',
            });
            localStorage.setItem("ynexlighttheme", "light");
            localStorage.removeItem("ynexdarktheme");
            localStorage.removeItem("darkBgRGB1");
            localStorage.removeItem("darkBgRGB2");
            localStorage.removeItem("darkBgRGB3");
            localStorage.removeItem("darkBgRGB4");
        }
        else {
            localStorage.setItem("ynexdarktheme", "dark");
            localStorage.removeItem("ynexlighttheme");
        }

    };

    function menuClose() {
        const theme = store.getState();
        ThemeChanger({ ...theme, "toggled": "close" });
    }

    const toggleSidebar = () => {
        const theme = store.getState();
        const sidemenuType = theme.dataNavLayout;
        if (window.innerWidth >= 992) {
            if (sidemenuType === 'vertical') {
                const verticalStyle = theme.dataVerticalStyle;
                const navStyle = theme.dataNavStyle;
                switch (verticalStyle) {
                    // closed
                    case "closed":
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "close-menu-close") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "close-menu-close" });
                        }
                        break;
                    // icon-overlay
                    case "overlay":
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "icon-overlay-close") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            if (window.innerWidth >= 992) {
                                ThemeChanger({ ...theme, "toggled": "icon-overlay-close" });
                            }
                        }
                        break;
                    // icon-text
                    case "icontext":
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "icon-text-close") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "icon-text-close" });
                        }
                        break;
                    // doublemenu
                    case "doublemenu":
                        ThemeChanger({ ...theme, "dataNavStyle": "" });
                        if (theme.toggled === "double-menu-open") {
                            ThemeChanger({ ...theme, "toggled": "double-menu-close" });
                        } else {
                            const sidemenu = document.querySelector(".side-menu__item.active");
                            if (sidemenu) {
                                ThemeChanger({ ...theme, "toggled": "double-menu-open" });
                                if (sidemenu.nextElementSibling) {
                                    sidemenu.nextElementSibling.classList.add("double-menu-active");
                                } else {

                                    ThemeChanger({ ...theme, "toggled": "" });
                                }
                            }
                        }

                        // doublemenu(ThemeChanger);
                        break;
                    // detached
                    case "detached":
                        if (theme.toggled === "detached-close") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "detached-close" });
                        }
                        break;
                    // default
                    case "default":
                        ThemeChanger({ ...theme, "toggled": "" });

                }
                switch (navStyle) {
                    case "menu-click":
                        if (theme.toggled === "menu-click-closed") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        }
                        else {
                            ThemeChanger({ ...theme, "toggled": "menu-click-closed" });
                        }
                        break;
                    // icon-overlay
                    case "menu-hover":
                        if (theme.toggled === "menu-hover-closed") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "menu-hover-closed" });

                        }
                        break;
                    case "icon-click":
                        if (theme.toggled === "icon-click-closed") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "icon-click-closed" });

                        }
                        break;
                    case "icon-hover":
                        if (theme.toggled === "icon-hover-closed") {
                            ThemeChanger({ ...theme, "toggled": "" });
                        } else {
                            ThemeChanger({ ...theme, "toggled": "icon-hover-closed" });

                        }
                        break;
                }
            }
        }
        else {
            if (theme.toggled === "close") {
                ThemeChanger({ ...theme, "toggled": "open" });

                setTimeout(() => {
                    if (theme.toggled == "open") {
                        const overlay = document.querySelector("#responsive-overlay");

                        if (overlay) {
                            overlay.classList.add("active");
                            overlay.addEventListener("click", () => {
                                const overlay = document.querySelector("#responsive-overlay");

                                if (overlay) {
                                    overlay.classList.remove("active");
                                    menuClose();
                                }
                            });
                        }
                    }

                    window.addEventListener("resize", () => {
                        if (window.screen.width >= 992) {
                            const overlay = document.querySelector("#responsive-overlay");

                            if (overlay) {
                                overlay.classList.remove("active");
                            }
                        }
                    });
                }, 100);
            } else {
                ThemeChanger({ ...theme, "toggled": "close" });
            }
        }
    };
    const cartProduct = [
        {
            id: 1,
            src: product1,
            name: 'SomeThing Phone',
            price: '$1,299.00',
            color: 'Metallic Blue',
            text: '6gb Ram',
            class: ''
        },
        {
            id: 2,
            src: product3,
            name: 'Stop Watch',
            price: '$179.29',
            color: 'Analog',
            text: 'Free shipping',
            class: 'badge bg-pink-transparent fs-10',
        },
        {
            id: 3,
            src: product5,
            name: 'Photo Frame',
            price: '$29.00',
            color: 'Decorative',
            text: '',
            class: '',
        },
        {
            id: 4,
            src: product4,
            name: 'Kikon Camera',
            price: '$4,999.00',
            color: 'Black',
            text: '50MM',
            class: '',
        },
        {
            id: 5,
            src: product6,
            name: 'Canvas Shoes',
            price: '$129.00',
            color: 'Gray',
            text: 'Sports',
            class: ''
        },
    ];
    const [cartItems, setCartItems] = useState([...cartProduct]);
    const [cartItemCount, setCartItemCount] = useState(cartProduct.length);

    const handleRemove = (itemId:any) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
        setCartItemCount(updatedCart.length);
    };
    const initialNotifications = [
        { id: 1, avatarColor: 'primary', icon: 'ti-gift', text1: 'Your Order Has Been Shipped', text2: 'Order No: 123456 Has Shipped To YourDelivery Address', class: '', class1: '' },
        { id: 2, avatarColor: 'secondary', icon: 'ti-discount-2', text1: 'Discount Available', text2: 'Discount Available On Selected Products', class: '', class1: '' },
        { id: 3, avatarColor: 'pink', icon: 'ti-user-check', text1: 'Account Has Been Verified', text2: 'Your Account Has Been Verified Successfully', class: '', class1: '' },
        { id: 4, avatarColor: 'warning', icon: 'ti-circle-check', text1: 'Order Placed ', text2: 'Order Placed Successflly', class: 'text-warning', class1: ' ID:1116773' },
        { id: 5, avatarColor: 'success', icon: 'ti-clock', text1: 'Order Delayed', text2: 'Order Delayed Unfortunately', class: 'text-success', class1: ' ID:7731116' }
    ];

    const [notifications, setNotifications] = useState([...initialNotifications]);

    const handleNotificationClose = (index:any) => {
        // Create a copy of the notifications array and remove the item at the specified index
        const updatedNotifications = [...notifications];
        updatedNotifications.splice(index, 1);
        setNotifications(updatedNotifications);
    };
    return (
        <Fragment>
            <header className="app-header">

                <div className="main-header-container container-fluid">
                    <div className="header-content-left">

                        <div className="header-element">
                            <div className="horizontal-logo">
                                <Link to={`${import.meta.env.BASE_URL}dashboards/crm/`} className="header-logo">
                                    <img src={desktoplogo} alt="logo" className="desktop-logo" />
                                    <img src={togglelogo} alt="logo" className="toggle-logo" />
                                    <img src={desktopdark} alt="logo" className="desktop-dark" />
                                    <img src={toggledark} alt="logo" className="toggle-dark" />
                                    <img src={desktopwhite} alt="logo" className="desktop-white" />
                                    <img src={togglewhite} alt="logo" className="toggle-white" />
                                </Link>
                            </div>
                        </div>
                        <div className="header-element">
                            <Link aria-label="Hide Sidebar" onClick={() => toggleSidebar()}
                                className="sidemenu-toggle header-link animated-arrow hor-toggle horizontal-navtoggle"
                                data-bs-toggle="sidebar" to="#"><span></span></Link>

                        </div>

                    </div>

                    <div className="header-content-right">

                        <div className="header-element header-search">
                            <Link to="#" className="header-link" data-bs-toggle="modal" data-bs-target="#searchModal" onClick={handleShow}>
                                <i className="bx bx-search-alt-2 header-link-icon"></i>
                            </Link>
                        </div>
                        <Dropdown className="header-element country-selector">
                            <Dropdown.Toggle variant=''  className="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                                <img src={us} alt="img" className="rounded-circle header-link-icon" /></Dropdown.Toggle>
                            <Dropdown.Menu align="end" as="ul" className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                                <Dropdown.Item as="li" className="dropdown-item d-flex align-items-center" href="#">
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src={us} alt="img" />
                                    </span>
                                    English
                                </Dropdown.Item>
                                <Dropdown.Item as="li" className="dropdown-item d-flex align-items-center" href="#">
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src={spain} alt="img" />
                                    </span>
                                    Spanish
                                </Dropdown.Item>
                                <Dropdown.Item as="li" className="dropdown-item d-flex align-items-center" href="#">
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src={french} alt="img" />
                                    </span>
                                    French
                                </Dropdown.Item>
                                <Dropdown.Item as="li" className="dropdown-item d-flex align-items-center" href="#">
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src={germany} alt="img" />
                                    </span>
                                    German
                                </Dropdown.Item>
                                <Dropdown.Item as="li" className="dropdown-item d-flex align-items-center" href="#">
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src={italy} alt="img" />
                                    </span>
                                    Italian
                                </Dropdown.Item>
                                <Dropdown.Item as="li" className="dropdown-item d-flex align-items-center" href="#">
                                    <span className="avatar avatar-xs lh-1 me-2">
                                        <img src={russia} alt="img" />
                                    </span>
                                    Russian
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="header-element header-theme-mode">
                            <Link to="#" className="header-link layout-setting" onClick={() => ToggleDark()}>
                                <span className="light-layout">
                                    <i className="bx bx-moon header-link-icon"></i>
                                </span>
                                <span className="dark-layout">
                                    <i className="bx bx-sun header-link-icon"></i>
                                </span>
                            </Link>
                        </div>
                        <Dropdown className="header-element cart-dropdown" autoClose="outside">
                            <Dropdown.Toggle  variant=''   className="header-link dropdown-toggle" data-bs-auto-close="outside" data-bs-toggle="dropdown">
                                <i className="bx bx-cart header-link-icon"></i>
                                <Badge bg="primary" className="badge bg-primary rounded-pill header-icon-badge" id="cart-icon-badge">{cartItemCount}</Badge>
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end" className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                                <div className="p-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="mb-0 fs-17 fw-semibold">Cart Items</p>
                                        <span className="badge bg-success-transparent" id="cart-data"> {cartItemCount} Item{cartItemCount !== 1 ? 's' : ''}</span>
                                    </div>
                                </div>
                                <div>
                                    <hr className="dropdown-divider" />
                                </div>
                                <ul className="list-unstyled mb-0" id="header-cart-items-scroll">
                                {cartItems.map((idx) => (
                                        <Dropdown.Item as="li" className="dropdown-item" key={Math.random()}>
                                            <div className="d-flex align-items-start cart-dropdown-item">
                                                <img src={idx.src} alt="img" className="avatar avatar-sm avatar-rounded br-5 me-3" />
                                                <div className="flex-grow-1">
                                                    <div className="d-flex align-items-start justify-content-between mb-0">
                                                        <div className="mb-0 fs-13 text-dark fw-semibold">
                                                            <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/cart/`}>{idx.name}</Link>
                                                        </div>
                                                        <div>
                                                            <span className="text-black mb-1">{idx.price}</span>
                                                            <Link to="#" className="header-cart-remove float-end dropdown-item-close" onClick={() => handleRemove(idx.id)}><i className="ti ti-trash"></i></Link>
                                                        </div>
                                                    </div>
                                                    <div className="min-w-fit-content d-flex align-items-start justify-content-between">
                                                        <ul className="header-product-item d-flex">
                                                            <li>{idx.color}</li>
                                                            <li>{idx.text}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                    ))}
                                   
                                </ul>
                                <div className={`p-3 empty-header-item border-top ${cartItemCount === 0 ? 'd-none' : 'd-block'}`}>
                                    <div className="d-grid">
                                        <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/checkout/`} className="btn btn-primary">Proceed to checkout</Link>
                                    </div>
                                </div>
                                <div className={`p-5 empty-item ${cartItemCount === 0 ? 'd-block' : 'd-none'}`}>
                                    <div className="text-center">
                                        <span className="avatar avatar-xl avatar-rounded bg-warning-transparent">
                                            <i className="ri-shopping-cart-2-line fs-2"></i>
                                        </span>
                                        <h6 className="fw-bold mb-1 mt-3">Your Cart is Empty</h6>
                                        <span className="mb-3 fw-normal fs-13 d-block">Add some items to make me happy :)</span>
                                        <Link to={`${import.meta.env.BASE_URL}pages/ecommerce/products`} className="btn btn-primary btn-wave btn-sm m-1" data-abc="true">continue shopping <i className="bi bi-arrow-right ms-1"></i></Link>
                                    </div>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>

                        <Dropdown className="header-element notifications-dropdown" autoClose="outside">
                            <Dropdown.Toggle variant=''  className="header-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="messageDropdown" aria-expanded="false">
                                <i className="bx bx-bell header-link-icon"></i>
                                <span className="badge bg-secondary rounded-pill header-icon-badge pulse pulse-secondary" id="notification-icon-badge">
                                {notifications.length}</span>
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end" className="main-header-dropdown dropdown-menu dropdown-menu-end" data-popper-placement="none">
                                <div className="p-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="mb-0 fs-17 fw-semibold">Notifications</p>
                                        <span className="badge bg-secondary-transparent" id="notifiation-data">{`${notifications.length} Unread`}</span>
                                    </div>
                                </div>
                                <Dropdown.Divider className="dropdown-divider"></Dropdown.Divider>
                                <ul className="list-unstyled mb-0" id="header-notification-scroll">
                                    {notifications.map((notification, index) => (
                                        <Dropdown.Item as="li" className="dropdown-item" key={index}>
                                            <div className="d-flex align-items-start">
                                                <div className="pe-2">
                                                    <span className={`avatar avatar-md bg-${notification.avatarColor}-transparent avatar-rounded`}>
                                                        <i className={`ti ${notification.icon} fs-18`}></i>
                                                    </span>
                                                </div>
                                                <div className="flex-grow-1 d-flex align-items-center justify-content-between text-wrap">
                                                    <div>
                                                        <p className="mb-0 fw-semibold">
                                                            <Link to={`${import.meta.env.BASE_URL}pages/notifications/`}>{notification.text1}</Link>
                                                            <span className={notification.class}>{notification.class1}</span>
                                                        </p>
                                                        <span className="text-muted fw-normal fs-12 header-notification-text">
                                                            {notification.text2}
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <Link
                                                            to="#"
                                                            className="min-w-fit-content text-muted me-1 dropdown-item-close1"
                                                            onClick={() => handleNotificationClose(index)}
                                                        >
                                                            <i className="ti ti-x fs-16"></i>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </Dropdown.Item>
                                    ))}
                                </ul>
                                <div className={`p-3 empty-header-item1 border-top ${notifications.length === 0 ? 'd-none' : 'd-block'}`}>
                                    <div className="d-grid">
                                        <Link to={`${import.meta.env.BASE_URL}pages/notifications/`} className="btn btn-primary">View All</Link>
                                    </div>
                                </div>
                                <div className={`p-5 empty-item1 ${notifications.length === 0 ? 'd-block' : 'd-none'}`}>
                                    <div className="text-center">
                                        <span className="avatar avatar-xl avatar-rounded bg-secondary-transparent">
                                            <i className="ri-notification-off-line fs-2"></i>
                                        </span>
                                        <h6 className="fw-semibold mt-3">No New Notifications</h6>
                                    </div>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className="header-element header-shortcuts-dropdown">
                            <Dropdown.Toggle variant=''  className="header-link dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside" id="notificationDropdown" aria-expanded="false">
                                <i className="bx bx-grid-alt header-link-icon"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end" className="main-header-dropdown header-shortcuts-dropdown dropdown-menu pb-0 dropdown-menu-end" aria-labelledby="notificationDropdown">
                                <div className="p-3">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <p className="mb-0 fs-17 fw-semibold">Related Apps</p>
                                    </div>
                                </div>
                                <div className="dropdown-divider mb-0"></div>
                                <div className="main-header-shortcuts p-2" id="header-shortcut-scroll">
                                    <Row className="row g-2">
                                        <div className="col-4">
                                            <Link to="#">
                                                <div className="text-center p-3 related-app">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={figma} alt="" />
                                                    </span>
                                                    <span className="d-block fs-12">Figma</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link to="#">
                                                <div className="text-center p-3 related-app">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={powerpoint} alt="" />
                                                    </span>
                                                    <span className="d-block fs-12">Power Point</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link to="#">
                                                <div className="text-center p-3 related-app">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={word} alt="" />
                                                    </span>
                                                    <span className="d-block fs-12">MS Word</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link to="#">
                                                <div className="text-center p-3 related-app">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={calender} alt="" />
                                                    </span>
                                                    <span className="d-block fs-12">Calendar</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link to="#">
                                                <div className="text-center p-3 related-app">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={sketch} alt="" />
                                                    </span>
                                                    <span className="d-block fs-12">Sketch</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link to="#">
                                                <div className="text-center p-3 related-app">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={googledocs} alt="" />
                                                    </span>
                                                    <span className="d-block fs-12">Docs</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link to="#">
                                                <div className="text-center p-3 related-app">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={google} alt="" />
                                                    </span>
                                                    <span className="d-block fs-12">Google</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link to="#">
                                                <div className="text-center p-3 related-app">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={translate} alt="" />
                                                    </span>
                                                    <span className="d-block fs-12">Translate</span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-4">
                                            <Link to="#">
                                                <div className="text-center p-3 related-app">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src={googlesheets} alt="" />
                                                    </span>
                                                    <span className="d-block fs-12">Sheets</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </Row>
                                </div>
                                <div className="p-3 border-top">
                                    <div className="d-grid">
                                        <Button variant='primary' href="#" className="btn">View All</Button>
                                    </div>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="header-element header-fullscreen">
                        <Link onClick={toggleFullScreen} to="#" className="header-link">
                                {fullScreen ? (
                                    <i className="bx bx-exit-fullscreen header-link-icon"></i>
                                ) : (
                                    <i className="bx bx-fullscreen header-link-icon"></i>
                                )}
                            </Link>
                        </div>
                        <Dropdown className="header-element header-profile">
                            <Dropdown.Toggle variant='' className="header-link dropdown-toggle" id="mainHeaderProfile" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                <div className="d-flex align-items-center">
                                    <div className="me-sm-2 me-0">
                                        <img src={face9} alt="img" width="32" height="32" className="rounded-circle" />
                                    </div>
                                    <div className="d-sm-block d-none">
                                        <p className="fw-semibold mb-0 lh-1">Json Taylor</p>
                                        <span className="op-7 fw-normal d-block fs-11">Web Designer</span>
                                    </div>
                                </div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu align="end" as="ul" className="main-header-dropdown  pt-0 overflow-hidden header-profile-dropdown" aria-labelledby="mainHeaderProfile">
                                <Dropdown.Item className="d-flex" href={`${import.meta.env.BASE_URL}pages/profile/`}><i className="ti ti-user-circle fs-18 me-2 op-7"></i>Profile</Dropdown.Item>
                                <Dropdown.Item className="d-flex" href={`${import.meta.env.BASE_URL}pages/email/mailapp/`}><i className="ti ti-inbox fs-18 me-2 op-7"></i>Inbox <span className="badge bg-success-transparent ms-auto">25</span></Dropdown.Item>
                                <Dropdown.Item className="d-flex border-block-end" href={`${import.meta.env.BASE_URL}pages/todolist/`}><i className="ti ti-clipboard-check fs-18 me-2 op-7"></i>Task Manager</Dropdown.Item>
                                <Dropdown.Item className="d-flex" href={`${import.meta.env.BASE_URL}pages/email/mailsettings/`}><i className="ti ti-adjustments-horizontal fs-18 me-2 op-7"></i>Settings</Dropdown.Item>
                                <Dropdown.Item className="d-flex border-block-end" href="#"><i className="ti ti-wallet fs-18 me-2 op-7"></i>Bal: $7,12,950</Dropdown.Item>
                                <Dropdown.Item className="d-flex" href={`${import.meta.env.BASE_URL}pages/chat/`}><i className="ti ti-headset fs-18 me-2 op-7"></i>Support</Dropdown.Item>
                                <Dropdown.Item className="d-flex" href={`${import.meta.env.BASE_URL}authentication/signin/signincover/`}><i className="ti ti-logout fs-18 me-2 op-7"></i>Log Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <div className="header-element">
                            <Link to="#" className="header-link switcher-icon" data-bs-toggle="offcanvas" data-bs-target="#switcher-canvas"
                                onClick={() => Switchericon()}
                            >
                                <i className="bx bx-cog header-link-icon"></i>
                            </Link>
                        </div>
                    </div>
                </div>

            </header>
            <Modal className="modal fade" id="searchModal" tabIndex={-1} aria-labelledby="searchModal" aria-hidden="true" show={show} onHide={handleClose}>
                <Modal.Body>
                    <div className="input-group">
                        <Link to="#" className="input-group-text" id="Search-Grid"><i className="fe fe-search header-link-icon fs-18"></i></Link>
                        <Form.Control type="search" className="form-control border-0 px-2" placeholder="Search" aria-label="Username" defaultValue={InputValue}
                            autoComplete="off" onChange={(ele => { myfunction(ele.target.value); setInputValue(ele.target.value); })} />

                        <Link to="#" className="input-group-text" id="voice-search"><i className="fe fe-mic header-link-icon"></i></Link>
                        <Dropdown>
                            <Dropdown.Toggle variant=''  className="btn btn-light btn-icon no-caret" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fe fe-more-vertical"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu" as="ul">
                                <Dropdown.Item as="li" className="dropdown-item" href="#">Action</Dropdown.Item>
                                <Dropdown.Item as="li" className="dropdown-item" href="#">Another action</Dropdown.Item>
                                <Dropdown.Item as="li" className="dropdown-item" href="#">Something else here</Dropdown.Item>
                                <Dropdown.Divider as="li"><hr className="dropdown-divider" /></Dropdown.Divider>
                                <Dropdown.Item as="li" className="dropdown-item" href="#">Separated link</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </div>
                    {show1 ?
                        <div className="card search-result position-relative z-index-9 search-fix  border mt-1">
                            <div className="card-header">
                                <div className="card-title me-2 text-break">Search result of {InputValue}</div>
                            </div>
                            <ListGroup className='my-2 ms-3'>
                                {show2 ?
                                    NavData.map((e: any) =>
                                        <ListGroup.Item key={Math.random()} className="">
                                            <Link to={`${e.path}/`} className='search-result-item' onClick={() => { setShow1(false), setInputValue(""); }}>{e.title}</Link>
                                        </ListGroup.Item>
                                    )
                                    : <b className={`${searchcolor} `}>{searchval}</b>}
                            </ListGroup>

                        </div>
                        : ""}
                    <div className="mt-4">
                        <p className="font-weight-semibold text-muted mb-2">Are You Looking For...</p>
                        <span className="search-tags"><i className="fe fe-user me-2"></i>People<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link></span>
                        <span className="search-tags"><i className="fe fe-file-text me-2"></i>Pages<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link></span>
                        <span className="search-tags"><i className="fe fe-align-left me-2"></i>Articles<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link></span>
                        <span className="search-tags"><i className="fe fe-server me-2"></i>Tags<Link to="#" className="tag-addon"><i className="fe fe-x"></i></Link></span>
                    </div>
                    <div className="my-4">
                        <p className="font-weight-semibold text-muted mb-2">Recent Search :</p>
                        <div className="p-2 border br-5 d-flex align-items-center text-muted mb-2 alert">
                            <Link to={`${import.meta.env.BASE_URL}pages/notifications/`}><span>Notifications</span></Link>
                            <Link className="ms-auto lh-1" to="#" data-bs-dismiss="alert" aria-label="Close"><i className="fe fe-x text-muted"></i></Link>
                        </div>
                        <div className="p-2 border br-5 d-flex align-items-center text-muted mb-2 alert">
                            <Link to={`${import.meta.env.BASE_URL}uielements/alerts/`}><span>Alerts</span></Link>
                            <Link className="ms-auto lh-1" to="#" data-bs-dismiss="alert" aria-label="Close"><i className="fe fe-x text-muted"></i></Link>
                        </div>
                        <div className="p-2 border br-5 d-flex align-items-center text-muted mb-0 alert">
                            <Link to={`${import.meta.env.BASE_URL}pages/email/mailapp/`}><span>Mail</span></Link>
                            <Link className="ms-auto lh-1" to="#" data-bs-dismiss="alert" aria-label="Close"><i className="fe fe-x text-muted"></i></Link>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer >
                    <ButtonGroup className="btn-group ms-auto">
                        <Button variant='primary-light' className="btn btn-sm">Search</Button>
                        <Button variant='primary' className="btn btn-sm -">Clear Recents</Button>
                    </ButtonGroup>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
};

const mapStateToProps = (state: any) => ({
    local_varaiable: state
});
export default connect(mapStateToProps, { ThemeChanger })(Header);
