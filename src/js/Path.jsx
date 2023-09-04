import React from 'react'
import { Link } from 'react-router-dom'

const Path = ({title, isItem = false}) => {
  if(isItem){
    return (
      <section className='bg-custom-text w-full min-h-path flex items-center text-yellow-950'>
        <div className='w-laptop mx-auto max-w-maxw'>
            <h3 className='text-2 mb-3 capitalize'>
            <Link to="/home" className="text-yellow-800 p-2 transition linear duration-300 hover:text-yellow-950">Home </Link>
            / <Link to="/products" className="text-yellow-800 p-2 transition linear duration-300 hover:text-yellow-950">Products </Link>
            / {title}
            </h3>
        </div>
    </section>
    )
  }
  return (
    <section className='bg-custom-text w-full min-h-path flex items-center text-yellow-950'>
        <div className='w-laptop mx-auto max-w-maxw'>
            <h3 className='text-2 mb-3 capitalize'>
            <Link to="/home" className="text-yellow-800 p-2 transition linear duration-300 hover:text-yellow-950">Home </Link>
            / {title}
            </h3>
        </div>
    </section>
  )
}

export default Path
