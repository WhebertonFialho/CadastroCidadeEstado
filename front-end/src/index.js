import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import ConfigProvider from './config/useConfig';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

import '@coreui/coreui/dist/css/coreui.min.css';
import 'react-block-ui/style.css';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ConfigProvider>
          <App />
        </ConfigProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);