import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/universities",
//     element: <Universities />,
//   },
//   {
//     path: "/universities/:universityName",
//     element: <University />,
//   },
//   {
//     path: "/login",
//     element: <LoginPage />,
//   },
//   {
//     path: "/register",
//     element: <RegisterPage />,
//   },
//   {
//     path: "/profile",
//     element: <LoginPage />,
//   },

// ], { basename: process.env.PUBLIC_URL });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
       <BrowserRouter>
              <Provider store={store}>
                     <App />
              </Provider>
      </BrowserRouter>,
);

