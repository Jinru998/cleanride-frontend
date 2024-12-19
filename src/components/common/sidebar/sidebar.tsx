import { Fragment, useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MENUITEMS } from './sidemenu/sidemenu';
import logo1 from "../../../assets/images/brand-logos/desktop-logo.png";
import logo2 from "../../../assets/images/brand-logos/toggle-logo.png";
import logo3 from "../../../assets/images/brand-logos/desktop-dark.png";
import logo4 from "../../../assets/images/brand-logos/toggle-dark.png";
import logo5 from "../../../assets/images/brand-logos/desktop-white.png";
import logo6 from "../../../assets/images/brand-logos/toggle-white.png";
import RSC from "react-scrollbars-custom";
import { connect } from 'react-redux';
import { ThemeChanger } from "../../../redux/action";
import store from '../../../redux/store';
const history: any = [];

const Sidebar = ({ local_varaiable, ThemeChanger }: any) => {
  const location = useLocation();
  const [menuitems, setMenuitems] = useState<any>(MENUITEMS);

  useEffect(() => {
    history.push(location.pathname); // add  history to history  stack for current location.pathname to prevent multiple history calls innerWidth  and innerWidth  calls from  multiple users. This is important because the history stack is not always empty when the user clicks  the history
    if (history.length > 2) {
      history.shift();
    }
    if (history[0] !== history[1]) {
    }
    const mainContent = document.querySelector(".main-content");
    // console.log(local_varaiable);

    //when we click on the body to remove
    mainContent!.addEventListener("click", mainContentClickFn);
    return () => {
      mainContent!.removeEventListener("click", mainContentClickFn);
    };

  }, [location, mainContentClickFn]);

  // location
  useEffect(() => {
    if (document.body.classList.contains('horizontal') && window.innerWidth >= 992) {
      clearMenuActive();
    }
  }, []);
  //  In Horizontal When we click the body it should we Closed using in useEfffect Refer line No:16
  function mainContentClickFn() {
    if (document.body.classList.contains('horizontal') && window.innerWidth >= 992) {
      clearMenuActive();
    }
  }

  function clearMenuActive() {
    MENUITEMS.filter((mainlevel) => {
      if (mainlevel.Items) {
        mainlevel.Items.map((sublevel: any) => {
          sublevel.active = false;
          if (sublevel.children) {
            sublevel.children.map((sublevel1: any) => {
              sublevel1.active = false;
              if (sublevel1.children) {
                sublevel1.children.map((sublevel2: any) => {
                  sublevel2.active = false;
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
    });
    setMenuitems((arr: any) => [...arr]);
  }

  function toggleSidemenu(item: any) {
    // console.log("Working 1");

    if (
      !document.body.classList.contains("horizontal-hover") ||
      window.innerWidth < 992
    ) {

      if (!item.active) {
        MENUITEMS.map((mainlevel) => {
          if (mainlevel.Items) {
            mainlevel.Items.map(sublevel => {
              sublevel.active = false;
              if (item === sublevel) {
                sublevel.active = true;
              }
              if (sublevel.children) {
                sublevel.children.map((sublevel1: any) => {
                  sublevel1.active = false;
                  if (item === sublevel1) {
                    sublevel.active = true;
                    sublevel1.active = true;
                  }
                  if (sublevel1.children) {
                    sublevel1.children.map((sublevel2: any) => {
                      sublevel2.active = false;
                      if (item === sublevel2) {
                        sublevel.active = true;
                        sublevel1.active = true;
                        sublevel2.active = true;
                      }
                      if (sublevel2.children) {
                        sublevel2.children.map((sublevel3: any) => {
                          sublevel3.active = false;
                          if (item === sublevel3) {
                            sublevel.active = true;
                            sublevel1.active = true;
                            sublevel2.active = true;
                            sublevel3.active = true;
                          }
                          return sublevel2;
                        });
                      }
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
        });
      }
      else {
        if (localStorage.ynexverticalstyles != 'doublemenu') {
          item.active = !item.active;
        }
        // item.active = !item.active;
      }
    }

    setMenuitems((arr: any) => [...arr]);
  }

  function Onhover() {
    const theme = store.getState();
    if ((theme.toggled == 'icon-overlay-close' || theme.toggled == 'detached-close') && theme.iconOverlay != 'open') {
      ThemeChanger({ ...theme, "iconOverlay": "open" });
    }
  }
  function Outhover() {
    const theme = store.getState();
    if ((theme.toggled == 'icon-overlay-close' || theme.toggled == 'detached-close') && theme.iconOverlay == 'open') {
      ThemeChanger({ ...theme, "iconOverlay": "" });
    }
  }
  function Clickhandelar() {
    if (localStorage.getItem("ynexverticalstyles") == "icontext") {
      ThemeChanger({ ...local_varaiable, "iconText": "open" });
    }

  }
  function menuClose() {
    const theme = store.getState();
    if (window.innerWidth <= 992) {
      ThemeChanger({ ...theme, toggled: 'close' });
    }
    const overlayElement = document.querySelector("#responsive-overlay");
    if (overlayElement) {
      overlayElement.classList.remove("active");
    }
  }
  useEffect(() => {

    const mainContent = document.querySelector(".main-content");
    if (window.innerWidth <= 992) {
      if (mainContent) {
        mainContent.addEventListener("click", menuClose);
        menuClose();
      }
    } else {
      if (mainContent) {
        mainContent.removeEventListener("click", menuClose);
      }
    }
    window.addEventListener("resize", () => {
      const mainContent = document.querySelector(".main-content");
      setTimeout(() => {
        if (window.innerWidth <= 992) {
          if (mainContent) {
            mainContent.addEventListener("click", menuClose);
            menuClose();
          }
        } else {
          if (mainContent) {
            mainContent.removeEventListener("click", menuClose);
            // menuClose();
          }
        }
      }, 100);
    });
  }, []);

  function setSidemenu(list?: any) {

    let dd = list ? list.path + '/' : location.pathname;
    if (menuitems) {
      menuitems.filter((mainlevel: any) => {
        if (mainlevel.Items) {
          mainlevel.Items.filter((items: any) => {
            
            if (ulRef.current.href != document.location['href'] || localStorage.ynexverticalstyles != 'doublemenu') {
              items.active = false;
            }
            items.selected = false;

            if (dd === '/test/ynex-ts/preview') {
              dd = '/dashboards/crm/';
            }
            if (dd === items.path + '/') {
              items.active = true;
              items.selected = true;
            }
            if (items.children) {
              items.children.filter((submenu: any) => {
                submenu.active = false;
                submenu.selected = false;
                if (dd === submenu.path + '/') {
                  const theme = store.getState();
                  items.active = theme.dataNavLayout == 'horizontal' || theme.dataNavStyle == 'icon-hover' ? false : true;
                  items.selected = true;
                  submenu.active = true;
                  submenu.selected = true;
                }
                if (submenu.path === "#") {
                  submenu.active = false;
                  submenu.selected = false;
                }
                if (submenu.children) {
                  submenu.children.filter((submenu1: any) => {
                    submenu1.active = false;
                    submenu1.selected = false;
                    if (dd === submenu1.path + '/') {
                      items.active = true;
                      items.selected = true;
                      submenu.active = true;
                      submenu.selected = true;
                      submenu1.active = true;
                      submenu1.selected = true;
                    }
                    if (submenu1.path === "#") {
                      submenu1.active = false;
                      submenu1.selected = false;
                    }
                    return submenu1;
                  });
                }
                return submenu;
              });
            }
            return items;
          });
        }
        setMenuitems((arr: any) => [...arr]);
        return mainlevel;
      });
    }

    if (localStorage.getItem("ynexverticalstyles") == "icontext") {
      // ThemeChanger({...local_varaiable,"iconText":"open"})
    }
    if (local_varaiable.dataVerticalStyle == "doublemenu") {
      // ThemeChanger({...local_varaiable,"toggled":"double-menu-open"})
    }
  }

  function switcherArrowFn(): void {

    // Used to remove is-expanded class and remove class on clicking arrow buttons
    function slideClick(): void {
      const slide = document.querySelectorAll<HTMLElement>(".slide");
      const slideMenu = document.querySelectorAll<HTMLElement>(".slide-menu");

      slide.forEach((element) => {
        if (element.classList.contains("is-expanded")) {
          element.classList.remove("is-expanded");
        }
      });

      slideMenu.forEach((element) => {
        if (element.classList.contains("open")) {
          element.classList.remove("open");
          element.style.display = "none";
        }
      });
    }

    slideClick();
  }

  function slideRight(): void {
    const menuNav = document.querySelector<HTMLElement>(".main-menu");
    const mainContainer1 = document.querySelector<HTMLElement>(".main-sidebar");

    if (menuNav && mainContainer1) {
      const marginLeftValue = Math.ceil(
        Number(window.getComputedStyle(menuNav).marginInlineStart.split("px")[0])
      );
      const marginRightValue = Math.ceil(
        Number(window.getComputedStyle(menuNav).marginInlineEnd.split("px")[0])
      );
      const check = menuNav.scrollWidth - mainContainer1.offsetWidth;
      let mainContainer1Width = mainContainer1.offsetWidth;

      if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
        if (!(local_varaiable.dataVerticalStyle.dir === "rtl")) {
          if (Math.abs(check) > Math.abs(marginLeftValue)) {
            menuNav.style.marginInlineEnd = "0";

            if (!(Math.abs(check) > Math.abs(marginLeftValue) + mainContainer1Width)) {
              mainContainer1Width = Math.abs(check) - Math.abs(marginLeftValue);
              const slideRightButton = document.querySelector<HTMLElement>("#slide-right");
              if (slideRightButton) {
                slideRightButton.classList.add("hidden");
              }
            }

            menuNav.style.marginInlineStart =
              (Number(menuNav.style.marginInlineStart.split("px")[0]) -
                Math.abs(mainContainer1Width)) +
              "px";

            const slideRightButton = document.querySelector<HTMLElement>("#slide-right");
            if (slideRightButton) {
              slideRightButton.classList.remove("hidden");
            }
          }
        } else {
          if (Math.abs(check) > Math.abs(marginRightValue)) {
            menuNav.style.marginInlineStart = "0";

            if (!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)) {
              mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);
              const slideRightButton = document.querySelector<HTMLElement>("#slide-right");
              if (slideRightButton) {
                slideRightButton.classList.add("hidden");
              }
            }

            menuNav.style.marginInlineEnd =
              (Number(menuNav.style.marginInlineEnd.split("px")[0]) -
                Math.abs(mainContainer1Width)) +
              "px";

            const slideLeftButton = document.querySelector<HTMLElement>("#slide-left");
            if (slideLeftButton) {
              slideLeftButton.classList.remove("hidden");
            }
          }
        }
      }

      const element = document.querySelector<HTMLElement>(".main-menu > .slide.open");
      const element1 = document.querySelector<HTMLElement>(".main-menu > .slide.open > ul");
      if (element) {
        element.classList.remove("active");
      }
      if (element1) {
        element1.style.display = "none";
      }
    }

    switcherArrowFn();
  }

  function slideLeft(): void {
    const menuNav = document.querySelector<HTMLElement>(".main-menu");
    const mainContainer1 = document.querySelector<HTMLElement>(".main-sidebar");

    if (menuNav && mainContainer1) {
      const marginLeftValue = Math.ceil(
        Number(window.getComputedStyle(menuNav).marginInlineStart.split("px")[0])
      );
      const marginRightValue = Math.ceil(
        Number(window.getComputedStyle(menuNav).marginInlineEnd.split("px")[0])
      );
      const check = menuNav.scrollWidth - mainContainer1.offsetWidth;
      let mainContainer1Width = mainContainer1.offsetWidth;

      if (menuNav.scrollWidth > mainContainer1.offsetWidth) {
        if (!(local_varaiable.dataVerticalStyle.dir === "rtl")) {
          if (Math.abs(check) <= Math.abs(marginLeftValue)) {
            menuNav.style.marginInlineStart = "0px";
          }
        } else {
          if (Math.abs(check) > Math.abs(marginRightValue)) {
            menuNav.style.marginInlineStart = "0";

            if (!(Math.abs(check) > Math.abs(marginRightValue) + mainContainer1Width)) {
              mainContainer1Width = Math.abs(check) - Math.abs(marginRightValue);
              const slideRightButton = document.querySelector<HTMLElement>("#slide-right");
              if (slideRightButton) {
                slideRightButton.classList.add("hidden");
              }
            }

            menuNav.style.marginInlineEnd =
              (Number(menuNav.style.marginInlineEnd.split("px")[0]) -
                Math.abs(mainContainer1Width)) +
              "px";

            const slideLeftButton = document.querySelector<HTMLElement>("#slide-left");
            if (slideLeftButton) {
              slideLeftButton.classList.remove("hidden");
            }
          }
        }
      }

      const element = document.querySelector<HTMLElement>(".main-menu > .slide.open");
      const element1 = document.querySelector<HTMLElement>(".main-menu > .slide.open > ul");
      if (element) {
        element.classList.remove("active");
      }
      if (element1) {
        element1.style.display = "none";
      }
    }

    switcherArrowFn();
  }
  const noChild = () => {
    if (localStorage.ynexverticalstyles == 'doublemenu') {
      const theme = store.getState();
      ThemeChanger({ ...theme, "toggled": "double-menu-close" });
    }
  };

  const ulRef = useRef<any>(null);
  const ulElement = useRef(null);

  useEffect(() => {
    if (localStorage.ynexverticalstyles != 'overlay' && localStorage.ynexverticalstyles != "detached") {
      setSidemenu();
    }
  }, []);

  const MenuOpen = (_event: any) => {
    // console.log("Working");
    const MainContent = document.querySelector(".main-content");

    if (local_varaiable.dataVerticalStyle === 'icontext' && local_varaiable.iconText !== 'open') {
      const theme = store.getState();
      ThemeChanger({ ...theme, "iconText": "open" });

      MainContent?.addEventListener("click", (_event) => {
        const theme = store.getState();
        ThemeChanger({ ...theme, "iconText": "" });
      });
    }

    const theme = store.getState();
    if (localStorage.ynexverticalstyles === 'doublemenu' && theme.toggled !== 'double-menu-open') {
      ThemeChanger({ ...theme, "toggled": "double-menu-open" });
    }

  };

  return (
    <Fragment>
         <div id="responsive-overlay" onClick={() => menuClose()}></div>
      <aside className="app-sidebar sticky" id="sidebar" onMouseEnter={() => Onhover()}
        onMouseLeave={() => Outhover()} >
        <div className="main-sidebar-header">
          <Link to={`${import.meta.env.BASE_URL}dashboards/crm/`} className="header-logo">
            <img src={logo1} alt="logo" className="desktop-logo" />
            <img src={logo2} alt="logo" className="toggle-logo" />
            <img src={logo3} alt="logo" className="desktop-dark" />
            <img src={logo4} alt="logo" className="toggle-dark" />
            <img src={logo5} alt="logo" className="desktop-white" />
            <img src={logo6} alt="logo" className="toggle-white" />
          </Link>
        </div>

        <div className="main-sidebar" id="sidebar-scroll">

          <RSC style={{ width: "100%", height: "100vh" }} noScrollX={false}>
            <nav className="main-menu-container nav nav-pills flex-column sub-open">

              <div className="slide-left" id="slide-left">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191" onClick={() => { slideLeft(); }} width="24" height="24" viewBox="0 0 24 24"> <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path> </svg>
              </div>

              <ul className="main-menu" style={{ marginRight: "0px" }}>

                {MENUITEMS.map((levelone) => (
                  <Fragment key={Math.random()}>
                    {levelone.menutitle ? <li className="slide__category">
                      <span className='category-name'>
                        {levelone.menutitle}
                      </span>
                    </li> : ""}
                    {levelone.Items.map((leveltwo: any) =>
                      leveltwo.type === "link" ?
                        <li className={`slide ${leveltwo.active ? "active" : ''}`}
                          key={Math.random()} >

                          <Link ref={ulRef} onClick={(_event) => { setSidemenu(leveltwo); noChild(); }}
                            to={leveltwo.path + "/"}
                            className={`side-menu__item ${leveltwo.selected ? "active" : ""}`}>{leveltwo.icon} <span className="side-menu__label">
                              {leveltwo.title}
                              {leveltwo.badgetxt ? (
                                <span className={leveltwo.class}>
                                  {leveltwo.badgetxt}
                                </span>
                              ) : (
                                ""
                              )}
                            </span></Link>
                        </li>
                        : leveltwo.type === "sub" ?
                          <li className={`slide has-sub ${leveltwo.active ? "open" : ''} ${leveltwo.selected ? "active" : ''} `}
                            key={Math.random()} onClick={(event) => { MenuOpen(event); }}>
                            <a href="#" className={`side-menu__item ${leveltwo.selected ? "active" : ""}`}
                              onClick={(event) => { event.preventDefault(); toggleSidemenu(leveltwo); }}>
                              {leveltwo.icon}
                              <span className="side-menu__label">
                                {leveltwo.title}
                                {leveltwo.badgetxt ? (
                                  <span className={leveltwo.class}>
                                    {leveltwo.badgetxt}
                                  </span>
                                ) : (
                                  ""
                                )}
                              </span>
                              <i className="angle fe fe-chevron-right side-menu__angle"></i>
                            </a>
                            <ul ref={ulElement} className={`slide-menu child1 ${leveltwo.active ?
                              "active" : ""
                              } ${leveltwo.active && localStorage.ynexverticalstyles == 'doublemenu' ?
                                "double-menu-active" : ""
                              }
              `} style={
                                leveltwo.active
                                  ? { display: "block" }
                                  : { display: "none" }
                              }>
                              <li className="slide side-menu__label1">
                                <a href="">{leveltwo.title}</a>
                              </li>

                              {leveltwo.children?.map((thirdlayer: any) =>
                                <Fragment key={Math.random()} >
                                  {thirdlayer.type === "link" ?
                                    <li className={`slide ${thirdlayer.active ? "active" : ''}`}>
                                      {
                                        thirdlayer.path == "/" ?
                                          <Link to={"#"} className={`side-menu__item ${thirdlayer.selected ? "active" : ''}`}>
                                            {thirdlayer.icon}
                                            {thirdlayer.title}
                                          </Link> :
                                          <Link onClick={(_event) => { setSidemenu(thirdlayer); }} to={thirdlayer.path + "/"}
                                            className={`side-menu__item ${thirdlayer.selected ? "active" : ''}`}>
                                            {thirdlayer.icon}
                                            {thirdlayer.title}
                                            <span className={thirdlayer.class}>
                                              {thirdlayer.badgetxt}
                                            </span>
                                          </Link>
                                      }
                                    </li>
                                    : thirdlayer.type === "sub" ?
                                      <li className={`slide has-sub ${thirdlayer.active ? "open" : ''} ${thirdlayer.selected ? "active" : ''}`}>
                                        <a href="#" className={`side-menu__item ${thirdlayer.selected ? "active" : ''} `} onClick={(evnt) => {
                                          evnt.preventDefault();
                                          toggleSidemenu(thirdlayer);
                                          Clickhandelar();

                                        }}>{thirdlayer.icon} <span className="">
                                            {thirdlayer.title}
                                            {thirdlayer.badgetxt ? (
                                              <span className={thirdlayer.class}>
                                                {thirdlayer.badgetxt}
                                              </span>
                                            ) : (
                                              ""
                                            )}
                                          </span>
                                          <i className="fe fe-chevron-right side-menu__angle"></i>
                                        </a>
                                        <ul className={`slide-menu child2 ${thirdlayer.active ?
                                          "active" : ""
                                          }`} style={
                                            thirdlayer.active
                                              ? { display: "block" }
                                              : { display: "none" }
                                          }>
                                          {thirdlayer.children.map((fourthlayer: any) =>
                                            <Fragment key={Math.random()}>
                                              {fourthlayer.type === "link" ?
                                                <li className={`slide ${fourthlayer.active ? "active" : ''}`}>
                                                  <Link onClick={(_event) => { setSidemenu(fourthlayer); }} to={fourthlayer.path == "/" ? "#" : fourthlayer.path + "/"} className={`side-menu__item ${fourthlayer.selected ? "active" : ''}`}>
                                                    {fourthlayer.icon}
                                                    {fourthlayer.title}
                                                  </Link>

                                                </li>
                                                : fourthlayer.type === "sub" ? <li className={`slide has-sub ${fourthlayer.active ? "open" : ''}`}>

                                                  <a href="#" className="side-menu__item" onClick={(evnt) => {
                                                    evnt.preventDefault();
                                                    toggleSidemenu(fourthlayer);

                                                  }}>{fourthlayer.icon} <span className="">
                                                      {fourthlayer.title}
                                                    </span>
                                                    <i className="ri ri-arrow-right-s-line side-menu__angle"></i>
                                                  </a>
                                                </li> : ""

                                              }

                                            </Fragment>)}

                                        </ul>
                                      </li> : ""
                                  }
                                </Fragment>
                              )}
                            </ul>
                          </li> : '')

                    }
                  </Fragment>

                ))}
              </ul>

              <div className="slide-right" id="slide-right"><svg onClick={() => { slideRight(); }} xmlns="http://www.w3.org/2000/svg" fill="#7b8191" width="24" height="24" viewBox="0 0 24 24"> <path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path> </svg></div>
            </nav>
          </RSC>
        </div>
      </aside>

    </Fragment>
  );
};
const mapStateToProps = (state: any) => ({
  local_varaiable: state
});
export default connect(mapStateToProps, { ThemeChanger })(Sidebar);
