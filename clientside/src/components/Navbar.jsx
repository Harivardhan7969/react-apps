import React from 'react'
import logo from "../assets/images/Logo.png";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className=' w-full py-5 px-5 sm:px-10 flex justify-between items-center'>
      <nav className='flex w-full screen-max-width'>
        <div className='flex flex-shrink-0 items-center'>


          <img src={logo} alt='shoes' className='w-auto h-10' />
          <Link to="/">
            <h1 className='hidden md:block text-black text-2xl font-bold '>Sneaker</h1>  </Link>
        </div>

        {/* 
   <div className="hidden md:block text-black text-2xl font-semibold ">
       
                </div>
             */}


        <div className='flex flex-1 justify-center max-sm:hidden'>

          <Link
            to="/"
            className="text-gray  hover:bg-gray-900  rounded-md px-3 py-2"
          >Home</Link>
          <Link
            to='/all-products'
            className="text-gray hover:bg-gray-900  rounded-md px-3 py-2"
          >Shop</Link>
          <a
            href="/add-job.html"
            className="text-gray hover:bg-gray-900  rounded-md px-3 py-2"
          >About</a
          >

          <a
            href="/add-job.html"
            className="text-gray hover:bg-gray-900  rounded-md px-3 py-2"
          >Blog</a
          >

          <a
            href="/add-job.html"
            className="text-gray hover:bg-gray-900  rounded-md px-3 py-2"
          >Contact</a
          >

        </div>

        <div className='flex items-center gap-7 max-sm:justify-end max-sm:flex-1'>

          <CiSearch value={{ color: 'gray', size: '50px' }} />
          <CiShoppingCart value={{ color: 'gray', size: '50px' }} />
          <GoPerson value={{ color: 'gray', size: '50px' }} />
          <Link
            to="/login"
            className="text-gray hover:bg-gray-900 hover:text-black rounded-md "
          >Login </Link>

          <Link
            to="/signup"
            className="text-gray hover:bg-gray-900  rounded-md "
          >Signup</Link>

        </div>
      </nav>
      <hr />
    </header>

  )
}

export default Navbar