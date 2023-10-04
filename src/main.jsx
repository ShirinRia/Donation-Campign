import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './components/Root/Root';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import DonationDetails from './components/Donation_details/DonationDetails';
import Donation from './components/Donation/Donation';
import Statistics from './components/Statistics/Statistics';
import Categoricaldata from './components/Categoricaldata/Categoricaldata';
import Errorpage from './components/ErrorPage/Errorpage';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      
      {
        path: "/",
        element: <Home />,
      },
      {
      
        path: "/categoricaldata/:category",
        element: <Categoricaldata />,
        loader:()=>fetch('/donationdata.json'),
      },
      {
        path: "/donation",
        element: <Donation/>,
        loader:()=>fetch('/donationdata.json'),
       
      },
      {
      
        path: "/donationdetails/:donationid",
        element: <DonationDetails />,
        loader:()=>fetch('/donationdata.json'),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
