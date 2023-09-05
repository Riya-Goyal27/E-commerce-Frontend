import React from 'react'
import Feature from './Feature'
import {GiDiamondHard, GiCompass} from 'react-icons/gi'
import {GrHistory} from 'react-icons/gr'

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

export default Features
