import React, { useState } from 'react'
import logo from './../assets/logo.svg'
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { IoPersonSharp, IoCloseSharp } from "react-icons/io5";
import {Link} from 'react-router-dom'

const Header = ({cartItems}) => {
  const totalItems = cartItems.current.reduce(((total, item) => total + item.quantity), 0)
  const [isSidemenu, setIsSidemenu] = useState(false);
  return (
    <>
    <header className='h-20 bg-white flex justify-center items-center'>
      <div className='w-tablet max-w-maxw grid grid-cols-[auto_1fr_auto] max-ipad-mini:flex max-ipad-mini:justify-between'>
        <div className='flex items-center'>
          <Link to="/home">
            <img src={logo} alt="comfy sloth" className='w-[200px] ml-[-15px]'/>
          </Link>
        </div>
        <ul className='flex justify-center max-ipad-mini:hidden'>
          <Navbar item="home" path="/home" />
          <Navbar item="about" path="/about" />
          <Navbar item="products" path="/products" />
        </ul>
        <div className='grid grid-cols-2 items-center w-[200px] max-ipad-mini:hidden'>
          <Link to="/cart" className='flex items-center tracking-widest text-2xl'>
            Cart
            <span className='relative flex'>
              <FaShoppingCart />
              <span className='absolute top-[-10px] right-[-16px] bg-yellow-700 text-white w-[16px] h-[16px] flex items-center justify-center rounded-full p-[12px] text-xs'>{totalItems}</span>
            </span>
          </Link>
          <Link to="/login" className='flex items-center tracking-widest text-2xl justify-end'>
            Login
            <IoPersonSharp />
          </Link>
        </div>
        <button type='button' className='hidden max-ipad-mini:block' onClick={() => setIsSidemenu(true)}>
          <FaBars color='#ab7a5f' size='1.8rem' />
        </button>
      </div>
    </header>
    <div className={`fixed top-0 left-0 w-full h-full bg-white z-50 transition linear duration-500 ${isSidemenu ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className='py-4 px-6 flex items-center justify-between'>
        <img src={logo} alt="comfy sloth" className='h-[45px]'/>
        <button type='button' className='text-2 cursor-pointer text-[#bb2525] hover:opacity-75 transition linear duration-300' onClick={() => setIsSidemenu(false)} >
          <IoCloseSharp />
        </button>
      </div>
      <ul className='mb-8'>
        <Sidemenu item="home" path="/home" />
        <Sidemenu item="about" path="/about" />
        <Sidemenu item="products" path="/products" />
      </ul>
      <div className='grid grid-cols-2 items-center w-[200px] mx-auto'>
        <Link to="/cart" className='flex items-center tracking-widest text-2xl'>
          Cart
          <span className='relative flex'>
            <FaShoppingCart />
            <span className='absolute top-[-10px] right-[-16px] bg-yellow-700 text-white w-[16px] h-[16px] flex items-center justify-center rounded-full p-[12px] text-xs'>{totalItems}</span>
          </span>
        </Link>
        <Link to="/login" className='flex items-center tracking-widest text-2xl justify-end'>
          Login
          <IoPersonSharp />
        </Link>
      </div>
    </div>
    </>
  )
}

const Navbar = ({item, path}) => {
  return (
    <li className='mx-2 flex items-center flex-col justify-center border-yellow-700 hover:border-b-2 hover:pt-[2px]'>
      <Link to={path} className='capitalize tracking-widest px-2 h-full flex items-center'>{item}</Link>
    </li>
    
  )
}

const Sidemenu = ({item, path}) => {
  return (
      <li>
        <Link to={path} className='block capitalize py-4 px-6 text-[#324d67] tracking-widest transition linear duration-300 hover:bg-[#f1f5f8] hover:text-[#243a52] hover:pl-8'>{item}</Link>
      </li>
  )
}

const Content = () => {
  return (
    <div className='grid grid-cols-2 items-center w-[200px] mx-auto'>
      <Link to="/cart" className='flex items-center tracking-widest text-2xl'>
        Cart
        <span className='relative flex'>
          <FaShoppingCart />
          <span className='absolute top-[-10px] right-[-16px] bg-yellow-700 text-white w-[16px] h-[16px] flex items-center justify-center rounded-full p-[12px] text-xs'>{totalItems}</span>
        </span>
      </Link>
      <Link to="/login" className='flex items-center tracking-widest text-2xl justify-end'>
        Login
        <IoPersonSharp />
      </Link>
    </div>
  )
}

export default Header
