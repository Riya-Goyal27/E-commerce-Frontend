import React from 'react'
import home1 from '../../public/assets/home-1.jpeg'
import home2 from '../../public/assets/home-2.jpeg'
import product7 from '../../public/assets/product-7.jpeg'
import product8 from '../../public/assets/product-8.jpeg'
import product11 from '../../public/assets/product-11.jpeg'
import {GiDiamondHard, GiCompass} from 'react-icons/gi'
import {Link} from 'react-router-dom'
import { FaBars, FaSearch} from "react-icons/fa"; 
import {GrHistory} from 'react-icons/gr'
import Header from './Header';

const Home = ({cartItems}) => {
  return (
    <>
     <Header cartItems={cartItems}/>
      <FirstComp />
      <FeaturedProducts />
      <Features />
      <Subscribe />
    </>
  )
}

const FirstComp = () => {
  return (
    <section className='w-laptop max-tablet:w-tablet grid grid-cols-2 max-tablet:grid-cols-1 gap-x-32 items-center mx-auto h-[calc(100vh-5rem)] max-w-maxw max-tablet:h-[70vh]'>
      <article className='block h-fit'>
        <h1 className='mb-[2rem] text-5xl max-iphone:text-4xl tracking-widest font-bold'>Design Your<br/>Comfort Zone</h1>
        <p className='text-xl max-iphone:text-lg text-slate-500 mb-8 max-w-max-text leading-loose'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
        <Link to="/products" className='py-3 px-6 text-base bg-yellow-700 rounded text-custom-text inline-block tracking-widest uppercase shadow-md font-normal hover:bg-custom-text hover:text-yellow-700 transition linear duration-300 cursor-pointer'>shop now</Link>
      </article>
      <article className='block relative h-fit before:absolute before:bottom-0 before:left-[-8%] before:rounded before:h-4/5 before:w-[10%] before:bg-[#decbc0] max-tablet:hidden'>
        <img src={home2} alt='nice table' className='relative block w-full h-[550px] rounded object-cover max-nest-hub:h-[480px]'/>
        <img src={home1} alt='person working' className='absolute bottom-0 left-0 w-[250px] rounded -translate-x-2/4'/>
      </article>
    </section>
  )
}

const FeaturedProducts = () => {
  return (
    <section className='py-20 bg-slate-100'>
        <div className='text-center'>
          <h2 className='text-2 capitalize mb-3'>featured products</h2>
          <div className='w-24 h-1 mx-auto bg-yellow-700'></div>
        </div>
        <div className='grid grid-cols-3 max-surface-duo:grid-cols-1 max-tablet:grid-cols-2 w-laptop max-surface-duo:w-[80vw] mx-auto my-16 gap-10 max-tablet:w-tablet max-w-maxw'>
          <FeaturedProduct title="entertainment center" url={product7} price={599.99} path="/products/7" />
          <FeaturedProduct title="high-back bench" url={product8} price={399.99} path="/products/8" />
          <FeaturedProduct title="modern bookshelf" url={product11} price={319.99} path="/products/11" />
        </div>
        <Link to="/products" className=' block w-[148px] text-custom-text bg-yellow-700 uppercase transition linear duration-300 cursor-pointer tracking-widest rounded shadow-md py-1.5 px-3 text-sm text-center mx-auto hover:bg-custom-text hover:text-yellow-700'>all products</Link>
      </section>
  )
}


const FeaturedProduct = ({title, url, price, path}) => {
  return (
    <article>
      <div className='h-[225px] relative rounded overflow-hidden'>
      <img src={url} alt={title} className='h-full w-full'/>
        <Link to={path} className='inline-block absolute w-full h-full top-0 left-0 bg-black/40 opacity-0 hover:opacity-100 transition linear duration-300 cursor-pointer'>
          <div className='h-10 w-10 rounded-full bg-yellow-700 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex items-center justify-center'>
            <FaSearch color='#fff' size='20px' />
          </div>
        </Link>
      </div>
      <footer className='flex justify-between items-center mt-4 capitalize tracking-widest'>
        <h5>{title}</h5>
        <p className='text-yellow-700'>${price}</p>
      </footer>
    </article>
  )
}

const Features = () => {
  return (
    <section className='py-20 bg-custom-text'>
      <div className='w-laptop mx-auto max-w-maxw max-tablet:w-tablet'>
        <article className='grid grid-cols-2 max-surface-duo:grid-cols-1'>
          <h3 className='mb-8 text-yellow-950 text-2 capitalize'>custom furniture<br/> built only for you</h3>
          <p className='leading-[1.8] text-yellow-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.</p>
        </article>
        <div className='grid grid-cols-3 max-surface-duo:grid-cols-1 gap-10 mt-16 max-nest-hub:gap-6 max-tablet:grid-cols-2 max-tablet:gap-10 max-ipad-mini:gap-6'>
          <Feature title="mission" icon={<GiCompass className='text-2' />} />
          <Feature title="vision" icon={<GiDiamondHard className='text-2' />} />
          <Feature title="history" icon={<GrHistory className='text-[1.8rem]' />}/>
        </div>
      </div>
    </section>
  )
}

const Feature = ({title, icon}) => {
  return (
    <article className='bg-[#c5a491] text-center py-10 px-8 rounded'>
      <span className='w-16 h-16 mx-auto mb-4 rounded-full bg-custom-text flex justify-center items-center text-yellow-950'>
        {icon}
      </span>
      <h4 className='text-yellow-950 text-2xl leading-none tracking-widest mb-3 capitalize font-bold'>{title}</h4>
      <p className='text-[#5f4435] leading-[1.8]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
    </article>
  )
}

const Subscribe = () => {
  return (
    <section className='py-20'>
      <div className='w-laptop mx-auto max-w-maxw max-tablet:w-tablet'>
        <h3 className='text-2 leading-tight'>Join our newsletter and get 20% off</h3>
        <div className='grid grid-cols-2 max-surface-duo:grid-cols-1 max-surface-duo:gap-10 gap-32 max-tablet:gap-16 max-ipad-mini:gap-6 items-center mt-8'>
          <p className='text-slate-500 max-w-max-text leading-loose'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>
          <form className='w-tablet max-w-[500px] grid grid-cols-3 max-iphone:w-[85vw] mx-auto'>
            <input type="email" placeholder='Enter Email' className='inline-block border-2 border-black rounded-l py-2 px-4 border-r-0 outline-none col-span-2'/>
            <button type="submit" className='capitalize bg-yellow-700 tracking-widest border-2 border-black text-black rounded-r hover:text-white cursor-pointer transition linear duration-300 py-2 px-4'>subscribe</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Home
