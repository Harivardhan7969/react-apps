import React from 'react'
import Navbar from './components/Navbar'
import MainLayout from './layout/Mainlayout';
import Home from "./pages/Home"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import SellerDashboard from './features/seller/Dashboard';
import AddProduct from './features/seller/AddProduct';
import Seller from './features/seller/Seller';
import Customer from './features/customer/Customer';
import CustomerDashboard from './features/customer/dashboard';
import Orders from './features/customer/Orders';
import Favorites from './features/customer/Favorites';
// import Shopcard from './features/customer/Shopcard';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/all-products' element={<Shopcard />} /> */}
        <Route path='/seller' element={<Seller />}>

          <Route path='' element={<SellerDashboard />} />
          <Route path='add-product' element={<AddProduct />} />
        </Route>
        <Route path='/customer' element={<Customer />}>
          <Route path='' element={<CustomerDashboard />} />
          <Route path='orders' element={<Orders />} />
          <Route path='favorites' element={<Favorites />} />
        </Route>
      </Route>

    </>
  )
);

const App = () => {
  return (


    <RouterProvider router={router} />

  )
}

export default App