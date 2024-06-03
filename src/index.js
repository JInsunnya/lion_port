import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Root from './App';
import ErrorPage from './error-page';
// import Root from './routes/root';
import Contact from './routes/contact';
import List from './routes/list';
import Login from './routes/login';
import { CookiesProvider } from 'react-cookie';
import Registration from './routes/registration';
import Mypage from './routes/mypage';
import Detail from './routes/detail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: 'contacts',
    element: <Contact />,
  },
  {
    path: 'lists',
    element: <List />,
  },
  {
    path: 'logins',
    element: <Login />,
  },
  {
    path: 'registrations',
    element: <Registration />,
  },
  {
    path: 'mypages',
    element: <Mypage />,
  },
  {
    path: 'details',
    element: <Detail />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CookiesProvider>
      <RouterProvider router={router} />
    </CookiesProvider>
  </React.StrictMode>
);
