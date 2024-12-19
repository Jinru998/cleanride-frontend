import React, { useEffect } from 'react';

const Navbar1 = () => {
const onScroll = () => {
    const sections = document.querySelectorAll('.side-menu__item');
    const scrollPos =
      window.scrollY ||
      document.documentElement.scrollTop ||
      (document.querySelector('body')?.scrollTop || 0);
  
    sections.forEach((elem) => {
      const value = elem.getAttribute('href') ?? '';
      const refElement = document.querySelector(value) as HTMLElement; // Cast to HTMLElement
      if (refElement) {
        const scrollTopMinus = scrollPos + 73;
        if (
          refElement.offsetTop <= scrollTopMinus &&
          refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
        ) {
          elem.classList.add('active');
        } else {
          elem.classList.remove('active');
        }
      }
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('href');
    const location = document.getElementById(target!.substring(1))?.offsetTop;
    if (location !== undefined) {
      window.scrollTo({
        left: 0,
        top: location - 64,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const pageLinks = document.querySelectorAll('.side-menu__item');
    pageLinks.forEach((elem) => {
      elem.addEventListener('click', handleClick as unknown as EventListener);
    });

    return () => {
      // Clean up event listeners when the component unmounts
      pageLinks.forEach((elem) => {
        elem.removeEventListener('click', handleClick as unknown as EventListener);
      });
    };
  }, []);
  return (
    <>
     <ul className="main-menu">
                <li className="slide">
                    <a className="side-menu__item" href="#home">
                        <span className="side-menu__label">Home</span>
                    </a>
                </li>
                <li className="slide">
                    <a href="#about" className="side-menu__item">
                        <span className="side-menu__label">About</span>
                    </a>
                </li>
                <li className="slide">
                    <a href="#features" className="side-menu__item">
                        <span className="side-menu__label">Features</span>
                    </a>
                </li>
                <li className="slide">
                    <a href="#testimonials" className="side-menu__item">
                        <span className="side-menu__label">Clients</span>
                    </a>
                </li>
                <li className="slide">
                    <a href="#team" className="side-menu__item">
                        <span className="side-menu__label">Team</span>
                    </a>
                </li>
                <li className="slide">
                    <a href="#pricing" className="side-menu__item">
                        <span className="side-menu__label">Pricing</span>
                    </a>
                </li>
                <li className="slide">
                    <a href="#faq" className="side-menu__item">
                        <span className="side-menu__label">Faq's</span>
                    </a>
                </li>
                <li className="slide">
                    <a href="#contact" className="side-menu__item">
                        <span className="side-menu__label">Contact</span>
                    </a>
                </li>

            </ul>
    </>
  );
};

export default Navbar1;
