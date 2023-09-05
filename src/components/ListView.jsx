import React from 'react'
import { Link } from 'react-router-dom'

const ListView = ({title, price, url, id, description}) => {
    return (
        <article className='grid grid-cols-[auto_1fr] gap-x-8 items-center' key={id}>
            <Link to={`${id}`}>
                <img src={`/assets/${url}.jpeg`} alt={title} className='block w-[300px] h-[200px] object-cover rounded mb-4 max-tablet:mb-0' />
            </Link>
            <div>
                <h4 className='text-[1.5rem] max-tablet:text-[1.2rem] mb-2 max-tablet:mb-0 font-bold tracking-[0.1rem] capitalize'>{title}</h4>
                <h5 className='text-yellow-700 mb-3 max-tablet:mb-2 leading-tight tracking-[0.1rem]'>${price}</h5>
                <p className='max-w-[45em] text-[#324d67] mb-4 max-tablet:hidden'>{description.substring(0, 150) + '...'}</p>
                <p className='max-w-[45em] text-[#324d67] mb-2 hidden max-tablet:block max-tablet:text-[0.85rem]'>{description.substring(0, 95) + '...'}</p>
                <Link to={`${id}`} className='text-[0.5rem] py-1 px-2 bg-yellow-700 rounded shadow-md text-custom-text cursor-pointer inline-block tracking-[0.1rem] transition linear duration-300 hover:bg-custom-text hover:text-yellow-700 uppercase'>details</Link>
            </div>
        </article>
    )
}

export default ListView
