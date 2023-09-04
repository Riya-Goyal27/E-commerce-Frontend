import React from 'react'
import Header from './Header'

const NoMatch = ({cartItems}) => {
  return (
    <>
      <Header cartItems={cartItems} />
      <div className='w-laptop mx-auto py-20 max-w-maxw min-h-minh'>
        <h1 className='text-2.5 text-center'>Page Not Found !</h1>
      </div>
    </>
  )
}

export default NoMatch