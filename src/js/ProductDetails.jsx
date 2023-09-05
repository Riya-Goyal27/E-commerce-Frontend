import React, { useState, useEffect } from 'react'
import Path from './Path'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'
import {TiTick} from 'react-icons/ti'
import {FaPlus, FaMinus} from 'react-icons/fa'
import data from './data';
import Header from './Header';

const ProductDetails = ({cartItems, maxQuantityAllowed, setCartItems, setTotalItems}) => {
  const params = useParams();
  const matchedItem = data.find(item => item.id == params.productId)
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!matchedItem) {
      navigate('/nomatch');
    }
  });
  if(matchedItem){
  const {title, reviews, rating, brand, available, colors, description, images, price} = data.find(item => item.id == params.productId)
  const [url, setUrl] = useState(`/assets/${images[0]}.jpeg`)
  const [colorIndex, setColorIndex] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(1);
  const fullStars = Math.floor(rating);
  const halfStar = ((rating - fullStars > 0) ? 1 : 0);
  const emptyStars = 5 - fullStars - halfStar;

  const addToCart = () => {
    const newItem = {
      image : images[0],
      title: title,
      color: colors[colorIndex],
      price: price,
      quantity: itemQuantity,
      id: params.productId
    }
    let tempArr = cartItems;
    const alreadyInCart = tempArr.some(item => {
      if(item.image == newItem.image && item.color == newItem.color && item.title == newItem.title && item.price == newItem.price){
        item.quantity+=itemQuantity;
        if(item.quantity > 3)
        item.quantity = 3;
        return true;
      }
    })
    if(!alreadyInCart)
    tempArr.push(newItem)

    setCartItems(tempArr);
    setTotalItems(cartItems.reduce(((total, item) => total + item.quantity), 0));
  }

  const increase = () => {
    if(itemQuantity < maxQuantityAllowed){
      const newQuantity = itemQuantity + 1;
      setItemQuantity(newQuantity);
    }
  }

  const decrease = () => {
    if(itemQuantity > 1){
      const newQuantity = itemQuantity - 1;
      setItemQuantity(newQuantity);
    }
  }

  useEffect(() => {
    document.title=`Product ${params.productId}`
  }, [])
  
  return (
    <>
      <Path title={title} isItem={true}/>
      <div className='w-laptop max-tablet:w-tablet max-w-maxw py-20 mx-auto'>
        <Link to="/products"  className=' block w-[180px] text-custom-text bg-yellow-700 uppercase transition linear duration-300 cursor-pointer tracking-widest rounded shadow-md py-1.5 px-3 text-sm text-center hover:bg-custom-text hover:text-yellow-700'>back to products</Link>
        <div className='grid grid-cols-2 max-tablet:grid-cols-1 gap-16 mt-8'>
          <section>
            <img src={url} alt={title} className='block w-full h-image surface-duo:max-tablet:h-[550px] max-iphone:h-[400px] rounded object-cover'/>
            <div className='grid grid-cols-5 mt-4 gap-4 max-iphone:gap-1.5'>
              { images.map((item, index) => <img src={`/assets/${item}.jpeg`} alt="title" className='h-[75px] surface-duo:max-tablet:h-[100px] max-iphone:h-[60px] cursor-pointer w-full rounded object-cover' key={index} onClick={(event) => {setUrl(event.target.getAttribute('src'))}} />) }
            </div>
          </section>
          <section>
            <h2 className='capitalize mb-3 text-2.5'>{title}</h2>
            <div className='flex items-center mb-2'>
              <div className='flex items-center'>
                {Array(fullStars).fill(<span className='mr-0.5'><BsStarFill color='#fb0' size='1.1rem' /></span>)}
                {Array(halfStar).fill(<span className='mr-0.5'><BsStarHalf color='#fb0' size='1.1rem' /></span>)}
                {Array(emptyStars).fill(<span className='mr-0.5'><BsStar color='#fb0' size='1.1rem' /></span>)}
              </div>
              <p className='ml-2 text-[#324d67]'>
                ({reviews} customer reviews)
              </p>
            </div>
            <h5 className='mb-3 leading-tight tracking-widest text-[1.25rem] text-yellow-700 font-bold'>${price}</h5>
            <p className='max-w-max-text leading-loose text-[#324d67] mb-5'>{description}</p>
            <p className='w-[300px] grid grid-cols-[125px_1fr] mb-5 text-[#324d67]'>
              <span className='font-bold'>Available : </span>
              {available ? 'In Stock' : 'Out of Stock'}
            </p>
            <p className='w-[300px] grid grid-cols-[125px_1fr] mb-5 text-[#324d67]'>
              <span className='font-bold'>Brand : </span>
              {brand}
            </p>
            <hr className='border-0 border-t border-slate-300'/>
            <section className={`mt-8 ${available ? '' : 'hidden'}`}>
              <div className='grid grid-cols-[125px_1fr] items-center mb-4'>
                <span className='font-bold'>Color :</span>
                <div className='flex'>
                  {colors.map((item, index) => {
                    if(index == colorIndex){
                      return(
                        <button key={index} className={`w-6 h-6 rounded-full mr-2 border-0 cursor-pointer flex items-center justify-center bg-[${item}] opacity-75`} onClick={() => {setColorIndex(index)}}>
                          <TiTick color='#fff'/>
                        </button>
                      )
                    }
                    return (
                      <button key={index} className={`w-6 h-6 rounded-full mr-2 border-0 cursor-pointer flex items-center justify-center bg-[${item}] opacity-75`} onClick={() => {setColorIndex(index)}} />
                    )
                  })}
                </div>
              </div>
              <div className='mt-8'>
                <div className='w-[140px] grid grid-cols-3 items-center'>
                  <button className='flex items-center justify-center cursor-pointer p-3' onClick={decrease}>
                    <FaMinus />
                  </button>
                  <h2 className='flex items-center justify-center text-2.5 leading-tight'>{itemQuantity}</h2>
                  <button className='flex items-center justify-center cursor-pointer p-3' onClick={increase}>
                    <FaPlus />
                  </button>
                </div>
                <Link to="/cart" className='block w-[140px] text-custom-text bg-yellow-700 uppercase transition linear duration-300 cursor-pointer tracking-widest rounded shadow-md py-1.5 px-3 text-sm text-center hover:bg-custom-text hover:text-yellow-700 mt-4' onClick={addToCart}>add to cart</Link>
              </div>
            </section>
          </section>
        </div>
      </div>
    </>
  )
}
}
export default ProductDetails
