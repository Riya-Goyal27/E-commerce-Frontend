import React, { useState, useEffect } from 'react'
import Path from './Path'
import {FaPlus, FaMinus} from 'react-icons/fa'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';

const Cart = ({cartItems, maxQuantityAllowed, setCartItems, setTotalItems}) => {
  const [cart, setCart] = useState(cartItems);
  const [subtotal, setSubtotal] = useState(cart.reduce(((total, item) => total + item.quantity*item.price ), 0))
  const shippingCharges = 5.34;
  const total = subtotal + shippingCharges;
  
  const clearCart = () => {
    setCartItems([]);
    setCart(cartItems);
    setTotalItems(0);
  }

  const increaseQuantity = (image, color, title, price, quantity) => {
    if(quantity < maxQuantityAllowed){
      let tempArr = cartItems;
      tempArr.some(item => {
        if(item.image == image && item.color == color && item.title == title && item.price == price){
          item.quantity+=1;
          return true;
        }
      })
      setCartItems(tempArr);
      setTotalItems(cartItems.reduce(((total, item) => total + item.quantity), 0));
      const newSubtotal = cartItems.reduce(((total, item) => total + item.quantity*item.price ), 0)
      setSubtotal(newSubtotal);
    } 
  }

  const decreaseQuantity = (image, color, title, price) => {
    let tempArr = cartItems;
    tempArr.some(item => {
      if(item.image == image && item.color == color && item.title == title && item.price == price){
        item.quantity-=1;
        setCartItems(tempArr)
        setTotalItems(cartItems.reduce(((total, item) => total + item.quantity), 0));
        const newSubtotal = cartItems.reduce(((total, item) => total + item.quantity*item.price ), 0)
        setSubtotal(newSubtotal);
        if(item.quantity == 0)
        deleteItem(image, color, title, price);
        return true;
      }
    })
  }

  const deleteItem = (image, color, title, price) => {
    let tempArr = cartItems;
    tempArr = tempArr.filter(item => (item.image != image || item.color != color || item.title != title || item.price != price))
    setCartItems(tempArr)
    setCart(tempArr)
    setTotalItems(tempArr.reduce(((total, item) => total + item.quantity), 0));
    const newSubtotal = tempArr.reduce(((total, item) => total + item.quantity*item.price ), 0)
    setSubtotal(newSubtotal);
  }

  useEffect(() => {
    document.title="Cart"
  }, [])
  
  if(cart.length == 0){
    return (
      <>
        <Path title="cart" />
        <main className='min-h-minh py-20 max-iphone:w-laptop mx-auto'>
          <div className='text-center'>
            <h2 className='mb-4 text-2.5'>Your cart is empty</h2>
            <Link to="/products" className='bg-yellow-700 rounded shadow-md text-custom-text cursor-pointer inline-block text-[0.875rem] tracking-widest py-1.5 px-3 uppercase transition linear duration-300 hover:bg-custom-text hover:text-yellow-700'>fill it</Link>
          </div>
        </main>
      </>
    )
  }
  return (
    <>
      <Path title="cart" />
      <main className='min-h-minh'>
        <section className='w-laptop max-w-maxw mx-auto py-20'>
          <div>
            <div className='grid grid-cols-[316px_1fr_1fr_1fr_auto] max-surface-duo:grid-cols-[220px_1fr_1fr_auto] max-iphone:grid-cols-[230px_1fr_auto] max-galaxy:grid-cols-[220px_1fr] gap-4 justify-items-center'>
              <h5 className='text-[#617d98] tracking-widest capitalize leading-tight mb-3'>item</h5>
              <h5 className='text-[#617d98] tracking-widest capitalize leading-tight mb-3  max-surface-duo:hidden'>price</h5>
              <h5 className='text-[#617d98] tracking-widest capitalize leading-tight mb-3'>quantity</h5>
              <h5 className='text-[#617d98] tracking-widest capitalize leading-tight mb-3 max-iphone:hidden'>subtotal</h5>
              <span className='w-8 h-8 max-galaxy:hidden'></span>
            </div>
            <hr className='mt-4 mb-12 border-0 border-t border-slate-300'/>
          </div>
          {
            cart.map(({title, image, color, quantity, price, id}, index) => {
              const itemTotal = quantity * price;
              return (
                <article className='grid grid-cols-[1fr_1fr_1fr_1fr_auto] max-surface-duo:grid-cols-[1fr_1fr_1fr_auto] max-iphone:grid-cols-[1fr_1fr_auto] max-galaxy:grid-cols-[1fr_1fr] items-center grid-rows-[75px] gap-x-4 gap-y-12 mb-12 justify-items-center' key={index}>
                  <Link to={`/products/${id}`} className='grid grid-cols-[100px_200px] max-surface-duo:grid-cols-[100px_100px] gap-4 items-center grid-rows-[75px]'>
                    <img src={`/assets/${image}.jpeg`} alt={title} className='h-full w-full object-cover rounded block hover:shadow-md'/>
                    <div>
                      <h5 className='text-[0.85rem] leading-tight capitalize tracking-widest font-bold hover:underline'>{title}</h5>
                      <p className='text-[0.85rem] text-[#617d98] tracking-widest capitalize flex items-center justify-start'>color :<span className={`w-3 h-3 inline-block bg-[${color}] ml-2 rounded opacity-75`}></span></p>
                      <h5 className='text-yellow-700 tracking-widest leading-tight text-[0.9rem] hidden max-surface-duo:block'>${price}</h5>
                    </div>
                  </Link>
                  <h5 className='text-yellow-700 tracking-widest leading-tight max-surface-duo:hidden'>${price}</h5>
                  <div className='grid grid-cols-3 justify-items-center w-[100px] max-surface-duo:w-[80px] items-center'>
                    <button type="button" className='w-6 h-4 py-4 cursor-pointer flex items-center justify-center max-surface-duo:text-[0.7rem]' onClick={() => decreaseQuantity(image, color, title, price)}><FaMinus /></button>
                    <h2 className='text-[1.5rem] font-bold max-surface-duo:text-[1.2rem]'>{quantity}</h2>
                    <button type="button" className='w-6 h-4 py-4 cursor-pointer flex items-center justify-center max-surface-duo:text-[0.7rem]' onClick={() => increaseQuantity(image, color, title, price, quantity)}><FaPlus /></button>
                  </div>
                  <h5 className='text-[#617d98] tracking-widest leading-tight max-iphone:hidden'>${itemTotal.toFixed(2)}</h5>
                  <button type="button" className='w-6 h-6 flex items-center justify-center rounded cursor-pointer text-[1rem] text-white bg-[#bb2525] max-galaxy:hidden' onClick={() => deleteItem(image, color, title, price)}><MdDelete /></button>
                </article>
              )
            })
          }
          <hr className="border-0 border-t border-slate-300"/>
          <div className='flex justify-between mt-8'>
            <Link to="/products" className='block capitalize py-1 px-2 bg-yellow-700 text-white rounded tracking-widest cursor-pointer'>continue shopping</Link>
            <button className='block capitalize py-1 px-2 bg-neutral-800 text-white rounded cursor-pointer' onClick={clearCart} >clear shopping cart</button>
          </div>
          <section className='mt-12 flex justify-end  max-surface-duo:justify-center'>
            <div>
              <article className='px-12 py-6 rounded border border-slate-300 max-iphone:px-6'>
                <h5 className='grid grid-cols-[200px_1fr] leading-tight mb-3 capitalize tracking-widest font-bold'>subtotal :<span>${subtotal.toFixed(2)}</span></h5>
                <p className='grid grid-cols-[200px_1fr] mb-5 capitalize'>shipping fee :<span>${shippingCharges}</span></p>
                <hr className='border-0 border-t border-slate-300'/>
                <h4 className='grid grid-cols-[200px_1fr] my-8 text-[1.5rem] max-iphone:text-[1.2rem] capitalize tracking-widest mb-3 font-bold'>order total :<span>${total.toFixed(2)}</span></h4>
              </article>
              <Link to="/login" className='w-full mt-4 text-center font-bold bg-yellow-700 rounded shadow-md inline-block text-[0.875rem] tracking-widest uppercase transition linear duration-300 text-custom-text hover:text-yellow-700 hover:bg-custom-text py-1.5 px-3'>login</Link>
            </div>
          </section>
        </section>
      </main>
    </>
  )
}

export default Cart
