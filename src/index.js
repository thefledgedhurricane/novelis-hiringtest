import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'sections/BlogSection/store/store';
import 'assets/scss/novelis-landingpage.scss?v=1.0.0';
import LandingPage from 'LandingPage';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <LandingPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
