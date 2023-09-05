import React from 'react'

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

export default Subscribe
