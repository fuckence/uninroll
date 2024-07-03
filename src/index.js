import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import './i18n.js'
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
       <Provider store={store}>
              <I18nextProvider i18n={i18n}>
                     <BrowserRouter>
                            <App />
                     </BrowserRouter>
              </I18nextProvider>
       </Provider>,
);

