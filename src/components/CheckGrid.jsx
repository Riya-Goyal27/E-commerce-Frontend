import React from 'react'
import GridView from './GridView';
import ListView from './ListView';

const CheckGrid = ({newdata, isGrid}) => {
    if(isGrid){
        return (
        <section> 
            <div className='grid grid-cols-3 max-tablet:grid-cols-2 gap-x-6 gap-y-8 max-iphone:grid-cols-1'>
            { newdata.map(item => <GridView title={item.title} price={item.price} url={item.images[0]} id={item.id} key={item.id}/>) }
            </div>
        </section>
        )
    }
    return (
        <section>
            <div className='grid gap-y-12'>
            { newdata.map(item => <ListView title={item.title} price={item.price} url={item.images[0]} id={item.id} description={item.description}/>) }
            </div>
        </section>
    )
}

export default CheckGrid
