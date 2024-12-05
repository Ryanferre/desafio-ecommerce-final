import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import HomePage from './Home/Home.tsx'
import Login from './LoginPage/login.tsx'

const rounter= createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [{
      path: '/',
      element: <HomePage/>
    },
    {
      path: '/login',
      element: <Login/>
    }]
  }
])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <RouterProvider router={rounter}/>
  </React.StrictMode>
);
