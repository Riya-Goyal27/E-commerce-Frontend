import React, {useEffect, useState} from 'react'
import {FaPlus, FaMinus} from 'react-icons/fa'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { increaseItemQuantity, decreaseItemQuantity, deleteCartItem } from '../features/cart/cartSlice'


const CartProduct = ({title, image, color, quantity, price, id}) => {

    const dispatch = useDispatch();
    const [itemSubtotal, setItemSubtotal] = useState(0)
    useEffect(() => {
        setItemSubtotal(quantity * price)
    })
    const decreaseQuantity = () => {
        dispatch(decreaseItemQuantity({image, color, title, price}));
        
    }
    const increaseQuantity = () => {
        dispatch(increaseItemQuantity({image, color, title, price}));
    }
    const deleteItem = () => {
        dispatch(deleteCartItem({image, color, title, price}))
    }

    return (
        <>
            <article className='grid grid-cols-[1fr_1fr_1fr_1fr_auto] max-surface-duo:grid-cols-[1fr_1fr_1fr_auto] max-iphone:grid-cols-[1fr_1fr_auto] max-galaxy:grid-cols-[1fr_1fr] items-center grid-rows-[75px] gap-x-4 gap-y-12 mb-12 justify-items-center'>
                <Link to={`/products/${id}`} className='grid grid-cols-[100px_200px] max-surface-duo:grid-cols-[100px_100px] gap-4 items-center grid-rows-[75px]'>
                    <img src={`/assets/${image}.jpeg`} alt={title} className='h-full w-full object-cover rounded block hover:shadow-md'/>
                    <div>
                        <h5 className='text-[0.85rem] leading-tight capitalize tracking-widest font-bold hover:underline'>{title}</h5>
                        <p className='text-[0.85rem] text-[#617d98] tracking-widest capitalize flex items-center justify-start'>color :<span className={`w-3 h-3 inline-block ml-2 rounded opacity-75`} style={{backgroundColor:color}}></span></p>
                        <h5 className='text-yellow-700 tracking-widest leading-tight text-[0.9rem] hidden max-surface-duo:block'>${price}</h5>
                    </div>
                </Link>
                <h5 className='text-yellow-700 tracking-widest leading-tight max-surface-duo:hidden'>${price}</h5>
                <div className='grid grid-cols-3 justify-items-center w-[100px] max-surface-duo:w-[80px] items-center'>
                    <button type="button" className='w-6 h-4 py-4 cursor-pointer flex items-center justify-center max-surface-duo:text-[0.7rem]' onClick={decreaseQuantity}>
                        <FaMinus />
                    </button>
                    <h2 className='text-[1.5rem] font-bold max-surface-duo:text-[1.2rem]'>{quantity}</h2>
                    <button type="button" className='w-6 h-4 py-4 cursor-pointer flex items-center justify-center max-surface-duo:text-[0.7rem]' onClick={increaseQuantity}>
                        <FaPlus />
                    </button>
                </div>
                <h5 className='text-[#617d98] tracking-widest leading-tight max-iphone:hidden'>${itemSubtotal.toFixed(2)}</h5>
                <button type="button" className='w-6 h-6 flex items-center justify-center rounded cursor-pointer text-[1rem] text-white bg-[#bb2525] max-galaxy:hidden' onClick={deleteItem}>
                    <MdDelete />
                </button>
            </article>
        </>
    )
}

export default CartProduct
