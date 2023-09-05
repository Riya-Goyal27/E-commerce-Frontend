import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

const GridView = ({title, price, url, id}) => {
    return (
        <article>
          <div className='relative rounded overflow-hidden'>
            <img src={`/assets/${url}.jpeg`} alt={title} className='w-full h-[175px] block object-cover'/>
            <Link to={`${id}`} className='inline-block absolute w-full h-[175px] top-0 left-0 bg-black/40 opacity-0 hover:opacity-100 transition linear duration-300 cursor-pointer'>
              <div className='h-10 w-10 rounded-full bg-yellow-700 absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex items-center justify-center'>
                <FaSearch color='#fff' size='20px' />
              </div>
            </Link>
          </div>
          <footer className='flex justify-between items-center mt-4 capitalize tracking-[0.1rem] leading-tight'>
            <h5>{title}</h5>
            <p className='text-yellow-700'>${price}</p>
          </footer>
        </article>
    )
}

export default GridView
