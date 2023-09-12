import React, { useState, useEffect } from 'react'
import Path from './Path'
import { Link } from 'react-router-dom';
import { updateTotalItems, clearCartItems} from '../features/cart/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import CartProduct from './CartProduct'

const Cart = () => {
  const dispatch = useDispatch();
  dispatch(updateTotalItems());
  const {cartItems} = useSelector(store => store.cart);
  const [subtotal, setSubtotal] = useState(0)
  const [total, setTotal] = useState(0); 
  const [shippingCharges, setShippingChanges] = useState(0);
  
  const clearCart = () => {
    dispatch(clearCartItems());
  }

  useEffect(() => {
    document.title="Cart"
  }, [])
  
  useEffect(() => {
    setSubtotal(cartItems.reduce(((total, item) => total + item.quantity*item.price ), 0))
    const isShippingCost = cartItems.some(item => item.freeShipping == false);
    if(isShippingCost){
      setShippingChanges(5.34)
    }else{
      setShippingChanges(0)
    }
    setTotal(subtotal + shippingCharges)
  });

  if(cartItems.length == 0){
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
          { cartItems.map((item, index) => <CartProduct key={index} {...item} /> ) }
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
