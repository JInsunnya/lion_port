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
    // children: [
    //   {
    //     path: 'contacts',
    //     element: <Contact />,
    //   },
    // ],
  },
  {
    path: 'contacts',
    element: <Contact />,
  },
  {
    path: 'lists',
    element: <List />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
