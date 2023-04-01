import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'i18n';
import App from 'App';

import { BrowserRouter } from 'react-router-dom';

import { PageContextProvider } from 'context/PageContext';

import { Provider } from 'react-redux';
import store from 'store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <PageContextProvider>
        <App />
      </PageContextProvider>
    </BrowserRouter>
  </Provider>
);