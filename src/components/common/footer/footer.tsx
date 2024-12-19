import  { FC , Fragment} from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
    return(
  <Fragment>
        <footer className="footer mt-auto py-3 bg-white text-center">
            <div className="container">
                <span className="text-muted"> Copyright © 2023 <span id="year"></span> <a
                        href="#" className="text-dark fw-semibold">Ynex</a>.
                    Designed with <span className="bi bi-heart-fill text-danger"></span> by <a href="#">
                        <span className="fw-semibold text-primary text-decoration-underline">Spruko</span>
                    </a> All
                    rights
                    reserved
                </span>
            </div>
        </footer>
  </Fragment>
);
};

export default Footer;
