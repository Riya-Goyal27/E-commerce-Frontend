import React from 'react'
import { Link } from 'react-router-dom'
import FeaturedProduct from './FeaturedProduct'

const FeaturedProducts = () => {
    return (
        <section className='py-20 bg-slate-100'>
            <div className='text-center'>
                <h2 className='text-2 capitalize mb-3'>featured products</h2>
                <div className='w-24 h-1 mx-auto bg-yellow-700'></div>
            </div>
            <div className='grid grid-cols-3 max-surface-duo:grid-cols-1 max-tablet:grid-cols-2 w-laptop max-surface-duo:w-[80vw] mx-auto my-16 gap-10 max-tablet:w-tablet max-w-maxw'>
                <FeaturedProduct title="entertainment center" url='assets/product-7.jpeg' price={599.99} path="/products/7" />
                <FeaturedProduct title="high-back bench" url='assets/product-8.jpeg' price={399.99} path="/products/8" />
                <FeaturedProduct title="modern bookshelf" url='assets/product-11.jpeg' price={319.99} path="/products/11" />
            </div>
            <Link to="/products" className=' block w-[148px] text-custom-text bg-yellow-700 uppercase transition linear duration-300 cursor-pointer tracking-widest rounded shadow-md py-1.5 px-3 text-sm text-center mx-auto hover:bg-custom-text hover:text-yellow-700'>all products</Link>
        </section>
    )
}

export default FeaturedProducts
