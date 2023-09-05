import React from 'react'
import { Link } from 'react-router-dom'

const FirstComp = () => {
    return (
        <section className='w-laptop max-tablet:w-tablet grid grid-cols-2 max-tablet:grid-cols-1 gap-x-32 items-center mx-auto h-[calc(100vh-5rem)] max-w-maxw max-tablet:h-[70vh]'>
            <article className='block h-fit'>
                <h1 className='mb-[2rem] text-5xl max-iphone:text-4xl tracking-widest font-bold'>Design Your<br/>Comfort Zone</h1>
                <p className='text-xl max-iphone:text-lg text-slate-500 mb-8 max-w-max-text leading-loose'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
                <Link to="/products" className='py-3 px-6 text-base bg-yellow-700 rounded text-custom-text inline-block tracking-widest uppercase shadow-md font-normal hover:bg-custom-text hover:text-yellow-700 transition linear duration-300 cursor-pointer'>shop now</Link>
            </article>
            <article className='block relative h-fit before:absolute before:bottom-0 before:left-[-8%] before:rounded before:h-4/5 before:w-[10%] before:bg-[#decbc0] max-tablet:hidden'>
                <img src='assets/home-2.jpeg' alt='nice table' className='relative block w-full h-[550px] rounded object-cover max-nest-hub:h-[480px]'/>
                <img src='assets/home-1.jpeg' alt='person working' className='absolute bottom-0 left-0 w-[250px] rounded -translate-x-2/4'/>
            </article>
        </section>
    )
}

export default FirstComp
