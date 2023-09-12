import React from 'react'
import CheckGrid from './CheckGrid'
import { useSelector } from 'react-redux'


const DataEmpty = () => {
    const { productsData } = useSelector(store => store.filter);
    if(productsData.length == 0){
        return (
            <h5 className='font-bold tracking-[0.1rem] leading-tight mb-3'>Sorry, no products matched your search.</h5>
        )
    }
    return (
        <CheckGrid />
    )
}

export default DataEmpty
