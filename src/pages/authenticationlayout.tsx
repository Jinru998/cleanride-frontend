
import { Fragment  } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Outlet } from 'react-router-dom';
import { Provider } from "react-redux";
import store from '../redux/store';
import Authenticationswitcher from '../components/common/switcher/authenticationswitcher';

function Authenticationlayout() {
  
  return (
    <Fragment>
      <Provider store={store}>
      <HelmetProvider>
            <Helmet>
                <body className=''></body>
            </Helmet>
             <Outlet />
             <Authenticationswitcher/>
        </HelmetProvider>
        </Provider>
    </Fragment>
  );
}

export default Authenticationlayout;

