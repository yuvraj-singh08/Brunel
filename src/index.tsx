import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const App = lazy(() => import('./pages/home/App'));
const Register = lazy(() => import('./pages/register/Register'));


const router = createBrowserRouter([
  {
    path: '/',
    element: <Suspense fallback={<div>Loading...</div>} ><App /></Suspense>,
    errorElement: <h1>404 Not Found</h1>
  },
  {
    path: '/register',
    element: <Suspense fallback={<div>Loading...</div>} ><Register /></Suspense>,
    errorElement: <h1>404 Not Found</h1>
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
