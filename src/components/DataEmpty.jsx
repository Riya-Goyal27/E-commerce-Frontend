import React from 'react'
import CheckGrid from './CheckGrid'

const DataEmpty = ({newdata, isGrid}) => {
    if(newdata.length == 0){
        return (
            <h5 className='font-bold tracking-[0.1rem] leading-tight mb-3'>Sorry, no products matched your search.</h5>
        )
    }
    return (
        <CheckGrid newdata={newdata} isGrid={isGrid} />
    )
}

export default DataEmpty
