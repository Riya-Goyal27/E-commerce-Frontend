import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({item, path}) => {
    return (
        <li className='mx-2 flex items-center flex-col justify-center border-yellow-700 hover:border-b-2 hover:pt-[2px]'>
            <Link to={path} className='capitalize tracking-widest px-2 h-full flex items-center'>{item}</Link>
        </li> 
    )
}

export default Navbar
