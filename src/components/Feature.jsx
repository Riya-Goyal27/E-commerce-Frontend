import React from 'react'

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

export default Feature
