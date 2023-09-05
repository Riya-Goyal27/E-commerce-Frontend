import React from 'react'
import { Link } from 'react-router-dom'

const SideMenu = ({item, path}) => {
  return (
    <li>
        <Link to={path} className='block capitalize py-4 px-6 text-[#324d67] tracking-widest transition linear duration-300 hover:bg-[#f1f5f8] hover:text-[#243a52] hover:pl-8'>
            {item}
        </Link>
    </li>
  )
}

export default SideMenu
